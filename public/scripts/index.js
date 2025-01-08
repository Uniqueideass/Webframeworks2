import { supabase } from "./supabaseClient.js";

const signupForm = document.getElementById("signup-form");
console.log(signupForm);

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("submit button clicked");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    console.log(data);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert("Signup successful!");
      window.location.href = "/";
    }
  });
}

const signinForm = document.getElementById("signin-form");

if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert("Signin successful!");
      window.location.href = "/blog";
    }
  });
} else {
  console.error("Signin form not found!");
}

const error = document.getElementById("error");
const tag = document.getElementById('post-tag');
const heading = document.getElementById('post-heading');
const author = document.getElementById('post-autho');
const body = document.getAnimations('post-body')

const handleSubmit = async () => {
  error.textContent = ''


  try {
    const tagArray = tags.split(",").map((tag) => tag.trim());
    const { error } = await supabase.from("blogs").insert({
      title,
      tags: tagArray,
      body,
    });
    if (error) throw error;

    alert("Blog posted successfully!");
    window.location.href = "/";
  } catch (err) {
    error.textContent = err.message
  }
};

document.getElementById("post-form").addEventListener("submit", handleSubmit);
