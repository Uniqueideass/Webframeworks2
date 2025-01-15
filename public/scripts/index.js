import { supabase } from "../../lib/supabaseClient";

// SIGN-UP

const signupForm = document.getElementById("signup-form");

if (signupForm) {
  console.log(signupForm);
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

// SIGN-IN

const signinForm = document.getElementById("signin-form");

if (signinForm) {
  console.log(signinForm);
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);

    // Wait for session persistence
    const { data: session } = await supabase.auth.getSession();
    console.log("Session after sign-in:", session);

    if (session?.session) {
      alert("Signin successful!");
      window.location.href = "/blog";
    } else {
      console.error("Failed to establish session after sign-in.");
    }

    if (error) {
      alert(`Error: ${error.message}`);
    }
  });
} else {
  console.error("Signin form not found!");
}

// POST BLOG

const postForm = document.getElementById("post-form");
const error = document.getElementById("error");
const tags = document.getElementById("post-tag");
const heading = document.getElementById("post-heading");
const author = document.getElementById("post-author");
const body = document.getElementById("post-body");

if (postForm) {
  tags.addEventListener("input", (e) => {
    tags.textContent = e.target.value;
    console.log(tags.textContent);
  });

  heading.addEventListener("input", (e) => {
    heading.textContent = e.target.value;
    console.log(heading.textContent);
  });

  author.addEventListener("input", (e) => {
    author.textContent = e.target.value;
    console.log(author.textContent);
  });

  body.addEventListener("input", (e) => {
    body.textContent = e.target.value;
    console.log(body.textContent);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    error.textContent = "";

    try {
      const tagArray = tags.split(",").map((tag) => tag.trim());
      const { error } = await supabase.from("blogs").insert({
        title,
        tags: tagArray,
        body,
      });
      if (error) throw error;

      alert("Blog posted successfully!");
      window.location.href = "/blog";
    } catch (err) {
      error.textContent = err.message;
    }
  };

  document.getElementById("post-form").addEventListener("submit", handleSubmit);
}
