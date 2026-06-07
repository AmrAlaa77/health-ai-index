import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://mspjewnoaxytwsxoukhe.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhhZGZmMjVmLWU0MGYtNGQxNC1iODA2LTVhNDc4MzAwY2I4NyJ9.eyJwcm9qZWN0SWQiOiJtc3BqZXdub2F4eXR3c3hvdWtoZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzgwMjE5NjkyLCJleHAiOjIwOTU1Nzk2OTIsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.a_Qeew4Asn3mIc_5NXfkVGAFC7j57HdKHQZY-q3oD94';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };