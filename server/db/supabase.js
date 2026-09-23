const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://gozetekxnevnmwekrrhr.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || 'sb_publishable_h12q4-Z9QjtHKPArHeE1Uw_3ER6votX';

let supabase = null;

if (SUPABASE_URL && SUPABASE_KEY) {
    try {
        supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
            auth: {
                persistSession: false,
                autoRefreshToken: false
            }
        });
        console.log('🌿 [Supabase] Connected to:', SUPABASE_URL);
    } catch (err) {
        console.warn('⚠️ [Supabase] Initialization error:', err.message);
    }
}

module.exports = {
    supabase,
    isSupabaseAvailable: () => !!supabase
};
