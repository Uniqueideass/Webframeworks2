import { supabase } from "../../src/supabaseClient";

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

const postForm = document.getElementById("post-form");

if (postForm) {
  postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = await getUser();
    const userId = user?.id;

    const tags = document
      .getElementById("post-tag")
      .value.split(",")
      .map((tag) => tag.trim());
    const heading = document.getElementById("post-heading").value;
    const heroImage = document.getElementById("post-image").files[0];
    const author = document.getElementById("post-author").value;
    const body = document.getElementById("post-body").value;
    const btn = document.getElementById("publish-btn");
    let heroImageUrl;

    if (heroImage) {
      btn.innerText = "Publishing...";
      const imagePath = `${heroImage.name}-${Date.now()}`;
      const { data, error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(imagePath, heroImage);

      if (uploadError) {
        console.error("Error uploading image:", uploadError.message);
        return;
      }

      heroImageUrl = supabase.storage
        .from("blog-images")
        .getPublicUrl(imagePath).data.publicUrl;
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert([
        { heading, tags, hero_image: heroImageUrl, author, body, userId },
      ]);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert("New post added successfully!");
      btn.innerText = "Pubish Post.";
      window.location.href = "/blog";
      postForm.reset();
    }
  });
}

// FETCH BLOG
export async function fetchBlogs() {
  console.log("Fetching blogs...");
  getUser();
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    console.log(data);

    return data;
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    return [];
  }
}

// DISPLAY ON UI
async function renderBlogs() {
  const blogsContainer = document.getElementById("blogs");
  const blogs = await fetchBlogs();
  if (blogsContainer) {
    if (blogs.length === 0) {
      blogsContainer.innerHTML =
        "<p class='text-center mt-6'>No blog posts found.</p>";
      return;
    }

    blogs.forEach((blog, index) => {
      const blogItem = document.createElement("li");

      const backgroundColor = index % 2 === 0 ? "bg-[#FAF8F1]" : "bg-[#1A1E39]";
      const textColor = index % 2 === 0 ? "text-black" : "text-white";

      blogItem.className = "flex ";
      blogItem.innerHTML = `
      <div class="w-[50%]">
        <img
          src="${blog.hero_image}"
          alt="Blog hero image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="p-20  ${backgroundColor} w-[50%]">
        <div class="flex gap-1">
          ${blog.tags
            .map(
              (tag) =>
                `<p class="bg-black text-white rounded-2xl px-5 py-1 flex justify-center font-CentraNo2-Light text-[12px]">${tag}</p>`
            )
            .join("")}
        </div>
        <div class="mt-20 w-[70%]">
          <p class="font-RecklessNeueThin text-5xl">${blog.heading}</p>
          <p class="font-CentraNo2-Light text-[12px] mt-4">
            ${new Date(blog.created_at).toLocaleDateString()}
          </p>
        </div>
        <div class="mt-12 w-[70%]">
          <p class="font-CentraNo2-Light">${blog.body.substring(0, 100)}…</p>
          <button class="font-CentraNo2-Book mt-2">
            <a href="/blog/${blog.heading}">Read More</a>
          </button>
        </div>
      </div>
    `;
      blogsContainer.appendChild(blogItem);
    });
  }
}

// Fetch and render blogs on page load
window.addEventListener("load", renderBlogs);

// COMMENTS

const commentsContainer = document.getElementById("commentsContainer");
const user = await getUser();
const fullName = user?.user_metadata?.full_name || "Anonymous";

if (commentsContainer) {
  const blogHeading = document.getElementById("blog-heading").textContent;
  const blogId = document.querySelector(".article").getAttribute("id");

  async function fetchComments(id) {
    const { data: comments, error } = await supabase
      .from("comments")
      .select("*")
      .eq("blog_id", id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error.message);
      return;
    }

    console.log(comments);

    commentsContainer.innerHTML = "";

    if (comments.length === 0) {
      commentsContainer.innerHTML =
        "<p class='text-center mt-6'>No comments.</p>";
      return;
    }

    comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");

      const avatar = comment.user_avatar
        ? `<img src="${comment.user_avatar}" alt="avatar" class="w-10 h-10 rounded-full"/>`
        : `<div class="w-10 h-10 bg-gray-300 text-gray-700 border border-black flex items-center justify-center rounded-full">
         ${comment.user_name ? comment.user_name[0].toUpperCase() : "A"}
       </div>`;

      commentElement.innerHTML = `
      <div class="flex gap-2 items-center mt-5">
      ${avatar}
       <p class="font-RecklessNeueRegular text-[18px]">${comment.user_name}</p>
        <p class="font-RecklessNeueThin">${new Date(
          comment.created_at
        ).toLocaleString()}</p>
      </div>
      <p class="font-CentraNo2-Light px-12 w-[90%]">${comment.content}</p>
    `;
      commentsContainer.appendChild(commentElement);
    });
  }

  async function checkUserPermissions() {
    const user = await getUser();
    const actionBtns = document.getElementById("action_btns");
    const blogUserId = document.getElementById("blogUserId").value;

    if (blogUserId === user.id) {
      actionBtns.classList.remove("hidden");
      actionBtns.classList.add("flex");
    }
  }

  if (blogId) {
    fetchComments(blogId);
    checkUserPermissions();
  }

  // ------------

  const commentForm = document.getElementById("comment-form");

  if (commentForm) {
    commentForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const commentContent = document.getElementById("commentContent").value;

      if (!commentContent.trim()) {
        alert("Comment cannot be empty.");
        return;
      }

      // const userAvatar = document.getElementById("userAvatar").files[0];

      let avatarUrl = null;

      // If the user uploaded an avatar, upload it to Supabase storage
      // if (userAvatar) {
      //   const avatarPath = `avatars/${Date.now()}-${userAvatar.name}`;
      //   const { data, error: uploadError } = await supabase.storage
      //     .from("avatars")
      //     .upload(avatarPath, userAvatar);

      //   if (uploadError) {
      //     console.error("Error uploading avatar:", uploadError.message);
      //     return;
      //   }

      //   avatarUrl = supabase.storage
      //     .from("avatars")
      //     .getPublicUrl(avatarPath).publicURL;
      // }
      console.log(commentContent);

      const { error } = await supabase.from("comments").insert([
        {
          blog_id: blogId,
          blog_heading: blogHeading,
          user_name: fullName,
          user_avatar: avatarUrl,
          content: commentContent,
        },
      ]);

      if (error) {
        console.error("Error inserting comment:", error.message);
      } else {
        alert("Comment added successfully!");
        commentForm.reset();
        await fetchComments(blogId);
      }
    });
  }
}

// ----------------------------

// EDIT BLOG
const editBtn = document.getElementById("edit-blog");

if (editBtn) {
  const blogHeading = document.getElementById("blog-heading").textContent;

  editBtn.addEventListener("click", () => {
    window.location.href = `/editpost/${blogHeading.trim()}`;
  });
}

const updateForm = document.getElementById("update-post-form");

const fields = {
  heading: document.getElementById("update-post-heading"),
  body: document.getElementById("update-post-body"),
  tags: document.getElementById("update-post-tag"),
  hero_image: document.getElementById("update-post-image"),
};

if (updateForm) {
  const updatedBlogId = document.getElementById("updatedBlogId").value;
  updateForm.addEventListener("input", (e) => {
    const { name, value } = e.target;
    fields[name].value = value;
  });

  updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("blogs")
      .update({
        heading: fields.heading.value,
        body: fields.body.value,
        tags: fields.tags.value.split(",").map((tag) => tag.trim()),
        hero_image: fields.hero_image.value,
      })
      .eq("id", updatedBlogId);

    if (error) {
      console.error(updatedBlogId);
      console.error("Error updating blog:", error.message);
    } else {
      alert("Blog updated successfully!");
      window.location.href = `/blog/${fields.heading.value}`;
    }
  });
}

// DELETE BLOG
const deleteBtn = document.getElementById("delete-blog");

deleteBtn?.addEventListener("click", async () => {
  const blogId = document.querySelector(".article").getAttribute("id");
  if (confirm("Are you sure you want to delete this blog?")) {
    const { error } = await supabase.from("blogs").delete().eq("id", blogId);

    if (error) {
      console.error("Error deleting blog:", error.message);
    } else {
      alert("Blog deleted successfully!");
      window.location.href = "/blog";
    }
  }
});
