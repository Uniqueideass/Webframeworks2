import { supabase } from './supabaseClient';

export async function signUpWithEmail(name, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,  // Save user's name in Supabase
      },
    },
  });

  if (error) {
    console.error('Signup error:', error.message);
    return { success: false, message: error.message };
  }

  return { success: true, message: 'Signup successful!' };
}

import { supabase } from './supabaseClient';

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login error:', error.message);
    return { success: false, message: error.message };
  }

  return { success: true, message: 'Login successful!', user: data.user };
}
