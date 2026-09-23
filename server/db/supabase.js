const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://gozetekxnevnmwekrrhr.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 
                     process.env.SUPABASE_SECRET_KEY || 
                     process.env.SUPABASE_KEY || 
                     process.env.SUPABASE_ANON_KEY || 
                     process.env.SUPABASE_PUBLISHABLE_KEY || 
                     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvemV0ZWt4bmV2bm13ZWtycmhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODMyOTUzMSwiZXhwIjoyMTAzOTA1NTMxfQ.EUtT7ttc3r-PmEeQr-mBvE_2ptexTNC0nZ_sYdzoHrM';

let supabase = null;

if (SUPABASE_URL && SUPABASE_KEY) {
    try {
        supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
            auth: {
                persistSession: false,
                autoRefreshToken: false
            }
        });
        console.log('🌿 [Supabase] Connected to:', SUPABASE_URL, `(Auth mode: ${SUPABASE_KEY.includes('service_role') || process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Service Role (Full Admin CRUD)' : 'Standard Client'})`);
    } catch (err) {
        console.warn('⚠️ [Supabase] Initialization error:', err.message);
    }
}

module.exports = {
    supabase,
    isSupabaseAvailable: () => !!supabase
};
