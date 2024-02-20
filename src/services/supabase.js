import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dfzwehjkrybzceszeetw.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmendlaGprcnliemNlc3plZXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5ODk3MzUsImV4cCI6MjAyMzU2NTczNX0.d91LX07LOsBRefgBzZjc31LKfiqSx_azLnG89M4Nr_w'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
