import { createClient } from "@supabase/supabase-js";
// import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;



export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  persistSession: true,
  autoRefreshToken: true,
});

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase environment variables are missing.');
}


export async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error retrieving user session:", error.message);
      return null;
    }
    return data.user;
  } catch (err) {
    console.error("Error retrieving session:", err.message);
    return null;
  }
}