import { createClient } from "@supabase/supabase-js";

const supabaseURL="https://edtgkismmrmgkeeodviv.supabase.co"
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkdGdraXNtbXJtZ2tlZW9kdml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjkxOTgsImV4cCI6MjAzMzI0NTE5OH0.RSCuS9XwtRB3MWCE6hZOpQOyAuImiFFBCOeDLoUn3Ps"


export const supabase=createClient(supabaseURL,supabaseAnonKey)



