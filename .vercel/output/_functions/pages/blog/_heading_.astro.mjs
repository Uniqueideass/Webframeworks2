/* empty css                                      */
import { c as createComponent, r as renderTemplate, d as addAttribute, u as unescapeHTML, a as renderHead, b as createAstro } from '../../chunks/astro/server_DsOIsn5x.mjs';
import 'kleur/colors';
import 'clsx';
import { marked } from 'marked';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { s as supabase } from '../../chunks/supabaseClient_C0l3pZOv.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const { data, error } = await supabase.from("blogs").select("*");
    if (error) {
      console.error("Error fetching blogs:", error.message);
      return { paths: [] };
    }
    console.log("Data fetched in getStaticPaths:", data);
    return data?.map((post) => ({
      params: { heading: post.heading }
    })) || [];
  } catch (err) {
    console.error("Error fetching blog paths:", err.message);
    return { paths: [] };
  }
}
const $$heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$heading;
  const dom = new JSDOM("");
  const window = dom.window;
  const purify = DOMPurify(window);
  async function getBlogData(heading2) {
    const { data, error, count } = await supabase.from("blogs").select("*", { count: "exact" }).eq("heading", heading2).single();
    if (error) {
      console.error(error);
      return null;
    }
    if (!data) {
      console.error("No blog found for the given heading.");
      return null;
    }
    if (count && count > 1) {
      console.warn("Multiple rows returned, expected one.");
      return data[0];
    }
    return data;
  }
  const { heading } = Astro2.params;
  if (heading === "favicon.ico") {
    throw new Error("Invalid blog heading: favicon.ico");
  }
  const blog = await getBlogData(heading);
  const rawHtml = await marked(blog?.body || "");
  const sanitizedHtml = purify.sanitize(rawHtml);
  return renderTemplate(_a || (_a = __template(["<html> <head><title>Blog page</title>", "</head> <body> ", ' <script type="module" src="/scripts/blog.js"><\/script> </body> </html>'])), renderHead(), blog ? renderTemplate`<div class=""> <nav class="flex justify-between p-8 border-b-2 border-grey"> <a href="/blog"> ${" "} <img src="/Logo.png" alt="logo" class="w-8 h-8"> </a> <div class="flex gap-5"> <button class="font-CentraNo2-Book"> <a href="/blog">Blog Posts</a> </button> <button class="font-CentraNo2-Book"> <a href="/newpost">New Post</a> </button> <button class="font-CentraNo2-Book"> <a href="/account">My Account</a> </button> </div> </nav> <article${addAttribute(blog?.id, "id")} class="article w-full"> <header class="w-[80%] mt-20 items-center flex justify-between mx-auto"> <div> <div class="flex gap-1"> ${blog?.tags?.length > 0 && blog.tags.map((tag) => renderTemplate`<p class="font-CentraNo2-Light text-[14px]">${tag}</p>`)} </div> <div> <p id="blog-heading" class="font-RecklessNeueThin text-5xl mt-10"> ${blog?.heading} </p> <div class="flex gap-2 mt-2"> <p class="font-CentraNo2-Light text-[12px] mt-4">
BY ${blog?.author} </p> <p class="font-CentraNo2-Light text-[12px] mt-4">|</p> <p class="font-CentraNo2-Light text-[12px] mt-4"> ${new Date(blog?.created_at).toLocaleDateString()} </p> </div> </div>  <input type="hidden" id="blogUserId"${addAttribute(blog?.userId, "value")}>  <div id="action_btns" class="mt-10 gap-3 items-center hidden"> <button class="flex gap-2" id="edit-blog"> <img src="../../../public/edit.svg" alt="edit icon" class="h-5 w-5"> <p class="text-black underline font-CentraNo2-Book hover:text-blue-600 focus:outline-none">
Edit this post
</p> </button> <p class="text-slate-400">|</p> <button class="flex gap-2 items-center" id="delete-blog"> <img src="../../../public/bin.svg" alt="edit icon" class="h-4 w-4"> <p class="text-black underline font-CentraNo2-Book hover:text-blue-600 focus:outline-none">
Delete this post
</p> </button> </div> </div> <div> <img${addAttribute(blog?.hero_image, "src")}${addAttribute(blog?.heading, "alt")} class="w-full h-[380px] object-cover ml-auto"> </div> </header> <div class="border-t-2 border-grey mt-20"></div> <div class="w-[50%] prose pt-8 items-center flex flex-col justify-center mx-auto"> ${sanitizedHtml ? renderTemplate`<p class="font-CentraNo2-Light text-justify">${unescapeHTML(sanitizedHtml)}</p>` : renderTemplate`<p class="font-CentraNo2-Light text-justify">
No content available
</p>`} </div> <div class="border-t-2 border-grey mt-10"></div> <div class="w-[50%] mx-auto mt-10 pb-40"> <p class="font-RecklessNeueRegular text-2xl">Comments</p> <div class="pb-4 border-b-1 border-grey" id="commentsContainer"></div> </div> </article> <form id="comment-form" class="my-10 w-[50%] mx-auto"> <textarea id="commentContent" name="" id="" class="w-full p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="Write comment here" required></textarea> <button type="submit" class="w-[30%] bg-black h-10 text-white text-center rounded-full font-CentraNo2-Book mt-4">
Submit
</button> </form> </div>` : renderTemplate`<div class="">No content</div>`);
}, "/Users/codexjay/Downloads/newassignment/src/pages/blog/[heading].astro", void 0);

const $$file = "/Users/codexjay/Downloads/newassignment/src/pages/blog/[heading].astro";
const $$url = "/blog/[heading]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$heading,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
