import{a as f,s as d}from"./supabaseClient.C7lYSNS7.js";const p=document.getElementById("post-form");p&&p.addEventListener("submit",async e=>{e.preventDefault();const n=(await f())?.id,c=document.getElementById("post-tag").value.split(",").map(g=>g.trim()),s=document.getElementById("post-heading").value,r=document.getElementById("post-image").files[0],o=document.getElementById("post-author").value,l=document.getElementById("post-body").value,a=document.getElementById("publish-btn");let i;if(r){a.innerText="Publishing...";const g=`${r.name}-${Date.now()}`,{data:L,error:v}=await d.storage.from("blog-images").upload(g,r);if(v){console.error("Error uploading image:",v.message);return}i=d.storage.from("blog-images").getPublicUrl(g).data.publicUrl}const{data:h,error:y}=await d.from("blogs").insert([{heading:s,tags:c,hero_image:i,author:o,body:l,userId:n}]);y?alert(`Error: ${y.message}`):(alert("New post added successfully!"),a.innerText="Pubish Post.",window.location.href="/blog",p.reset())});async function w(){console.log("Fetching blogs..."),f();try{const{data:e,error:t}=await d.from("blogs").select("*").order("created_at",{ascending:!1}).limit(5);if(t)throw t;return console.log(e),e}catch(e){return console.error("Error fetching blogs:",e.message),[]}}async function I(){const e=document.getElementById("blogs"),t=await w();if(e){if(t.length===0){e.innerHTML="<p class='text-center mt-6'>No blog posts found.</p>";return}t.forEach((n,c)=>{const s=document.createElement("li"),r=c%2===0?"bg-[#FAF8F1]":"bg-[#1A1E39]",o=c%2===0?"text-black":"text-white";s.className="flex ",s.innerHTML=`
      <div class="w-[50%]">
        <img
          src="${n.hero_image}"
          alt="Blog hero image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="p-20  ${r} ${o} w-[50%]">
        <div class="flex gap-1">
          ${n.tags.map(l=>`<p class="bg-black text-white rounded-2xl px-5 py-1 flex justify-center font-CentraNo2-Light text-[12px]">${l}</p>`).join("")}
        </div>
        <div class="mt-20 w-[70%]">
          <p class="font-RecklessNeueThin text-5xl">${n.heading}</p>
          <p class="font-CentraNo2-Light text-[12px] mt-4">
            ${new Date(n.created_at).toLocaleDateString()}
          </p>
        </div>
        <div class="mt-12 w-[70%]">
          <p class="font-CentraNo2-Light">${n.body.substring(0,100)}…</p>
          <button class="font-CentraNo2-Book mt-2">
            <a href="/blog/${n.heading}">Read More</a>
          </button>
        </div>
      </div>
    `,e.appendChild(s)})}}window.addEventListener("load",I);const u=document.getElementById("commentsContainer"),B=await f(),x=B?.user_metadata?.full_name||"Anonymous";if(u){const e=document.getElementById("blog-heading").textContent,t=document.querySelector(".article").getAttribute("id");async function n(r){const{data:o,error:l}=await d.from("comments").select("*").eq("blog_id",r).order("created_at",{ascending:!1});if(l){console.error("Error fetching comments:",l.message);return}if(console.log(o),u.innerHTML="",o.length===0){u.innerHTML="<p class='text-center mt-6'>No comments.</p>";return}o.forEach(a=>{const i=document.createElement("div");i.classList.add("comment");const h=a.user_avatar?`<img src="${a.user_avatar}" alt="avatar" class="w-10 h-10 rounded-full"/>`:`<div class="w-10 h-10 bg-gray-300 text-gray-700 border border-black flex items-center justify-center rounded-full">
         ${a.user_name?a.user_name[0].toUpperCase():"A"}
       </div>`;i.innerHTML=`
      <div class="flex gap-2 items-center mt-5">
      ${h}
       <p class="font-RecklessNeueRegular text-[18px]">${a.user_name}</p>
        <p class="font-RecklessNeueThin">${new Date(a.created_at).toLocaleString()}</p>
      </div>
      <p class="font-CentraNo2-Light px-12 w-[90%]">${a.content}</p>
    `,u.appendChild(i)})}async function c(){const r=await f(),o=document.getElementById("action_btns");document.getElementById("blogUserId").value===r.id&&(o.classList.remove("hidden"),o.classList.add("flex"))}t&&(n(t),c());const s=document.getElementById("comment-form");s&&s.addEventListener("submit",async r=>{r.preventDefault();const o=document.getElementById("commentContent").value;if(!o.trim()){alert("Comment cannot be empty.");return}let l=null;console.log(o);const{error:a}=await d.from("comments").insert([{blog_id:t,blog_heading:e,user_name:x,user_avatar:l,content:o}]);a?console.error("Error inserting comment:",a.message):(alert("Comment added successfully!"),s.reset(),await n(t))})}const E=document.getElementById("edit-blog");if(E){const e=document.getElementById("blog-heading").textContent;E.addEventListener("click",()=>{window.location.href=`/editpost/${e.trim()}`})}const b=document.getElementById("update-post-form"),m={heading:document.getElementById("update-post-heading"),body:document.getElementById("update-post-body"),tags:document.getElementById("update-post-tag"),hero_image:document.getElementById("update-post-image")};if(b){const e=document.getElementById("updatedBlogId").value;b.addEventListener("input",t=>{const{name:n,value:c}=t.target;m[n].value=c}),b.addEventListener("submit",async t=>{t.preventDefault();let n;const{data:c,error:s}=await d.storage.from("blog-images").upload(imagePath,m.hero_image.files[0]);if(s){console.error("Error uploading image:",s.message);return}n=d.storage.from("blog-images").getPublicUrl(imagePath).data.publicUrl;const{data:r,error:o}=await d.from("blogs").update({heading:m.heading.value,body:m.body.value,tags:m.tags.value.split(",").map(l=>l.trim()),hero_image:n}).eq("id",e);o?(console.error(e),console.error("Error updating blog:",o.message)):(alert("Blog updated successfully!"),window.location.href=`/blog/${m.heading.value}`)})}const _=document.getElementById("delete-blog");_?.addEventListener("click",async()=>{const e=document.querySelector(".article").getAttribute("id");if(confirm("Are you sure you want to delete this blog?")){const{error:t}=await d.from("blogs").delete().eq("id",e);t?console.error("Error deleting blog:",t.message):(alert("Blog deleted successfully!"),window.location.href="/blog")}});
