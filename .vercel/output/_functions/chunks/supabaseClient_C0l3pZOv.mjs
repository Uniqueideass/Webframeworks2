import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mmcbxaqrhxfrbzzuefun.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tY2J4YXFyaHhmcmJ6enVlZnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNzM0NzAsImV4cCI6MjA1MTg0OTQ3MH0.Ew5k4ZBIl-uY_5dTZXg08eqAR-lEeCtcDyDK6_hMrqo";
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  persistSession: true,
  // Ensures the session persists across page reloads
  autoRefreshToken: true
  // Refreshes tokens automatically
});

export { supabase as s };