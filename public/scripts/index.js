import { supabase } from "../../src/lib/supabaseClient";

// SIGN-UP

const signupForm = document.getElementById("signup-form");

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

// SIGN-IN

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
}

// ---------------------------

// ACCOUNT PAGE

if (document.getElementById("account")) {
  const nameInput = document.getElementById("fullname");
  const saveBtn = document.getElementById("save-btn");

  window.addEventListener("load", async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error retrieving user session:", error.message);
      return null;
    }
    const fullName = data?.user?.user_metadata?.full_name || null;

    if (fullName) {
      nameInput.value = fullName;
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      const password = document.getElementById("update-password").value;

      if (password !== "" || nameInput.value !== "") {
        const { error: updateError } = await supabase.auth.updateUser({
          password: password || undefined,
          data: { full_name: nameInput.value.trim() || undefined },
        });

        if (updateError) {
          alert(`Error updating user details: ${updateError.message}`);
        } else {
          alert("User details updated successfully!");
        }
      } else {
        alert("Provide at least one field to update.");
      }
    });
  }

  const signOutButton = document.getElementById("sign-out-btn");

  if (signOutButton) {
    signOutButton.addEventListener("click", async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        alert(`Error: ${error.message}`);
      } else {
        alert("Sign out successful");
        window.location.href = "/";
      }
    });
  }

}