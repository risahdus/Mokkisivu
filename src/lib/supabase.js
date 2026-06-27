import { createClient } from '@supabase/supabase-js'

// Haetaan tietokannan osoitteet Vercelin ympäristömuuttujista, jotka viritettiin alussa
const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)