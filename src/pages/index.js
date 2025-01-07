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


import { signUpWithEmail } from './supabaseClient';

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await signUpWithEmail(name, email, password);
  alert(response.message);
});

import { signInWithEmail } from './supabaseClient';

  const signinForm = document.getElementById('signin-form');
  signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    const response = await signInWithEmail(email, password);
    alert(response.message);
  });

  import { supabase } from './supabaseClient';

export async function checkSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Session error:', error.message);
    return null;
  }

  return data.session;
}
