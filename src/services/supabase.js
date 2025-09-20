import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tcctetfjwzihgaahfzcc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjY3RldGZqd3ppaGdhYWhmemNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTM3MzIsImV4cCI6MjA3MTE4OTczMn0.AkytXdlpYxSBAFPKm2zdaJ10G70m6NzC_Vj_T_MnNbo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
