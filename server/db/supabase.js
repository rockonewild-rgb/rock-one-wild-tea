const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://gozetekxnevnmwekrrhr.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 
                     process.env.SUPABASE_SECRET_KEY || 
                     process.env.SUPABASE_KEY || 
                     process.env.SUPABASE_ANON_KEY || 
                     process.env.SUPABASE_PUBLISHABLE_KEY || 
                     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvemV0ZWt4bmV2bm13ZWtycmhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODMyOTUzMSwiZXhwIjoyMTAzOTA1NTMxfQ.EUtT7ttc3r-PmEeQr-mBvE_2ptexTNC0nZ_sYdzoHrM';

// ── Circuit Breaker & High-Availability Resilience Configuration ─────────────
const QUERY_TIMEOUT_MS = 3000;            // Max wait 3.0s for Supabase before instant local SQLite fallback
const CIRCUIT_BREAKER_COOLDOWN_MS = 30000; // 30s cooldown after failure before probing Supabase again

let isSupabaseHealthy = true;
let lastFailureTime = 0;
let lastFailureReason = null;
let totalFallbacksCount = 0;

let rawSupabase = null;
let safeSupabase = null;

if (SUPABASE_URL && SUPABASE_KEY) {
    try {
        rawSupabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
            auth: {
                persistSession: false,
                autoRefreshToken: false
            }
        });
        console.log('🌿 [Supabase] Connected to:', SUPABASE_URL, `(Auth mode: ${SUPABASE_KEY.includes('service_role') || process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Service Role (Full Admin CRUD)' : 'Standard Client'})`);
    } catch (err) {
        console.warn('⚠️ [Supabase] Initialization error:', err.message);
        isSupabaseHealthy = false;
        lastFailureReason = err.message;
    }
}

/**
 * Intelligent Circuit Breaker & Timeout Wrapper
 * Intercepts all supabase.from(...) calls:
 * - If Supabase hangs > 3s or fails, it immediately returns { data: null, error } so routes seamlessly fall back to SQLite
 * - Opens circuit breaker for 30s so subsequent requests serve from SQLite with ZERO latency
 */
function wrapSupabaseClient(client, timeoutMs = QUERY_TIMEOUT_MS) {
    if (!client) return null;

    return new Proxy(client, {
        get(target, prop) {
            if (prop === 'from') {
                return function(table) {
                    // Check if circuit breaker is currently tripped
                    const timeSinceFail = Date.now() - lastFailureTime;
                    if (!isSupabaseHealthy && timeSinceFail < CIRCUIT_BREAKER_COOLDOWN_MS) {
                        return createCircuitBreakerBypass(table);
                    }

                    const builder = target.from(table);
                    return wrapQueryBuilder(builder, timeoutMs);
                };
            }
            return target[prop];
        }
    });
}

function createCircuitBreakerBypass(table) {
    const errorObj = new Error(`Supabase circuit breaker open (serving table '${table}' from local SQLite)`);
    const resolveBypass = () => Promise.resolve({ data: null, error: errorObj });

    return {
        select: resolveBypass,
        insert: resolveBypass,
        update: resolveBypass,
        delete: resolveBypass,
        upsert: resolveBypass,
        eq: () => createCircuitBreakerBypass(table),
        or: () => createCircuitBreakerBypass(table),
        order: () => createCircuitBreakerBypass(table),
        single: resolveBypass,
        limit: () => createCircuitBreakerBypass(table),
        then: (resolve) => resolve({ data: null, error: errorObj })
    };
}

function wrapQueryBuilder(b, timeoutMs) {
    return new Proxy(b, {
        get(bTarget, bProp) {
            if (bProp === 'then') {
                return function(resolve, reject) {
                    let timer = null;
                    const timeoutPromise = new Promise(res => {
                        timer = setTimeout(() => {
                            isSupabaseHealthy = false;
                            lastFailureTime = Date.now();
                            lastFailureReason = `Query timeout after ${timeoutMs}ms`;
                            totalFallbacksCount++;
                            console.warn(`⚠️ [Supabase Timeout] Request exceeded ${timeoutMs}ms. Gracefully falling back to SQLite.`);
                            res({ data: null, error: new Error(`Supabase timeout (${timeoutMs}ms)`) });
                        }, timeoutMs);
                    });

                    const originalPromise = new Promise((res, rej) => {
                        bTarget.then(res, rej);
                    }).catch(err => {
                        isSupabaseHealthy = false;
                        lastFailureTime = Date.now();
                        lastFailureReason = err.message || 'Network error';
                        totalFallbacksCount++;
                        console.warn(`⚠️ [Supabase Network Error] ${err.message}. Gracefully falling back to SQLite.`);
                        return { data: null, error: err };
                    });

                    return Promise.race([originalPromise, timeoutPromise])
                        .then(result => {
                            if (timer) clearTimeout(timer);
                            if (result && result.error) {
                                isSupabaseHealthy = false;
                                lastFailureTime = Date.now();
                                lastFailureReason = result.error.message || 'Query error';
                            } else {
                                isSupabaseHealthy = true;
                            }
                            return resolve(result);
                        })
                        .catch(err => {
                            if (timer) clearTimeout(timer);
                            isSupabaseHealthy = false;
                            lastFailureTime = Date.now();
                            lastFailureReason = err.message;
                            return resolve({ data: null, error: err });
                        });
                };
            }

            const val = bTarget[bProp];
            if (typeof val === 'function') {
                return function(...args) {
                    const res = val.apply(bTarget, args);
                    if (res && typeof res === 'object' && typeof res.then === 'function') {
                        return wrapQueryBuilder(res, timeoutMs);
                    }
                    return res;
                };
            }
            return val;
        }
    });
}

safeSupabase = wrapSupabaseClient(rawSupabase);

/**
 * Lightweight active ping to reset Supabase's 7-day inactivity timer
 */
async function pingSupabase() {
    if (!rawSupabase) return { success: false, error: 'No client' };
    try {
        const { data, error } = await rawSupabase.from('products').select('id').limit(1);
        if (error) throw error;
        isSupabaseHealthy = true;
        return { success: true, timestamp: new Date().toISOString() };
    } catch (e) {
        console.warn('⚠️ [Supabase Ping Failed]:', e.message);
        return { success: false, error: e.message };
    }
}

module.exports = {
    supabase: safeSupabase,
    rawSupabase,
    isSupabaseAvailable: () => !!safeSupabase && (isSupabaseHealthy || (Date.now() - lastFailureTime >= CIRCUIT_BREAKER_COOLDOWN_MS)),
    getSupabaseHealth: () => ({
        url: SUPABASE_URL,
        isHealthy: isSupabaseHealthy,
        lastFailure: lastFailureReason,
        lastFailureTime: lastFailureTime ? new Date(lastFailureTime).toISOString() : null,
        totalFallbacks: totalFallbacksCount
    }),
    pingSupabase
};
