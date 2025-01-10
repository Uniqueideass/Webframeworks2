import { supabase } from "./supabaseClient.js";

const postForm = document.getElementById("post-form");

if (postForm) {
  postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const tags = document
      .getElementById("post-tag")
      .value.split(",")
      .map((tag) => tag.trim());
    const heading = document.getElementById("post-heading").value;
    const heroImage = document.getElementById("post-image").value;
    const author = document.getElementById("post-author").value;
    const body = document.getElementById("post-body").value;

    const { data, error } = await supabase
      .from("blogs")
      .insert([{ heading, tags, hero_image: heroImage, author, body }]);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert("New post added successfully!");
      window.location.href = "/blog";
    }
  });
}

// FETCH BLOG
async function fetchBlogs() {
  console.log("Fetching blogs...");
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

async function renderBlogs() {
  const blogsContainer = document.getElementById("blogs");
  const blogs = await fetchBlogs();

  if (blogs.length === 0) {
    blogsContainer.innerHTML =
      "<p class='text-center mt-6'>No blog posts found.</p>";
    return;
  }

  blogs.forEach((blog) => {
    const blogItem = document.createElement("li");
    blogItem.className = "flex mb-10";
    blogItem.innerHTML = `
      <div class="w-[50%]">
        <img
          src="${blog.hero_image}"
          alt="Blog hero image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="p-20 bg-[#FAF8F1] w-[50%]">
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

// Fetch and render blogs on page load
window.addEventListener("load", renderBlogs);
