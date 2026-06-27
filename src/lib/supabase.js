import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || import.meta.env.SUPABASE_URL || "https://ydahjbdttueiimulyecws.supabase.co"
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkYWhqYmR0dWVpaW11bHllY3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0Nzc0NjQsImV4cCI6MjA5ODA1MzQ2NH0.JsdRxEYuyln8VRrJiQ68n_jJPd0Yq2ABjBqB5zVs2Po"

// Luodaan yhteys ja poistetaan reaaliaikaiset palikat käytöstä palvelimella virheiden välttämiseksi
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false // Tämä estää palvelinpuolen WebSocket/luonti-virheet
  }
})