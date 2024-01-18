import { createClient } from '@supabase/supabase-js';
import { supabase_key, supabase_url } from '../config.js';

const supabase = createClient(supabase_url, supabase_key)

export default supabase