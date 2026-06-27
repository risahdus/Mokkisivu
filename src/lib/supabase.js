import { createClient } from '@supabase/supabase-js'
import ws from 'ws'

// Syötetään sinun oikeat avaimesi tähän suoraan merkkijonoina ilman env-hakuja, jotta yhteys toimii varmasti
const supabaseUrl = "https://ydahjbdttueiimulyecws.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkYWhqYmR0dWVpaW11bHllY3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0Nzc0NjQsImV4cCI6MjA5ODA1MzQ2NH0.JsdRxEYuyln8VRrJiQ68n_jJPd0Yq2ABjBqB5zVs2Po"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  },
  realtime: {
    transport: ws
  }
})