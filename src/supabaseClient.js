import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ptnzchpzjbzjxvvswzzp.supabase.co'; // ganti dengan milikmu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0bnpjaHB6amJ6anh2dnN3enpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzg3NTYsImV4cCI6MjA2Mzg1NDc1Nn0.K7TqkXg7yAlTyWxKB-rrPzdQRWnmhDHto8NmuzXlbLc'; // ganti dengan anon key dari project settings > API

export const supabase = createClient(supabaseUrl, supabaseKey);
