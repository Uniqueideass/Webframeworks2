/* empty css                                      */
import { c as createComponent, r as renderTemplate, d as addAttribute, a as renderHead, b as createAstro } from '../../chunks/astro/server_BcvOqyrJ.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from '../../chunks/supabaseClient_f2kPkCOO.mjs';
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
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Edit Blog Page</title><link rel="stylesheet" href="/styles/global.css">', '</head> <body> <nav class="flex justify-between p-8 border-b-2 border-grey"> <a href="/blog"><img src="../../../public/Logo.png" alt="potential logo" class="w-8 h-8"></a> <div class="flex gap-5"> <button class="font-CentraNo2-Book text-blue-600"> <a href="/newpost"> New Post</a></button> <button class="font-CentraNo2-Book"><a href="/blog">Blog Posts</a></button> <button class="font-CentraNo2-Book"> <a href="/account">My Account</a> </button> </div> </nav> <form id="update-post-form" class="max-w-[700px] mx-auto flex flex-col mt-20"> <div class="flex justify-between"> <p class="font-RecklessNeueRegular text-3xl">Update Post</p> <button type="submit" class="font-CentraNo2-Book bg-black text-white p-3 rounded-md">Publish Post</button> </div> <input type="hidden" id="updatedBlogId"', '> <p id="error"></p> <div class="border-2 border-grey rounded-md p-5 mt-5"> <label for="update-post-tag" class="font-CentraNo2-Book">\nAdd Tags\n<input name="tags" id="update-post-tag"', ' class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="Use a comma to separate tags" required></label> <label for="update-post-heading" class="font-CentraNo2-Book">\nAdd Heading\n<input name="heading" id="update-post-heading" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder=""', ' required></label> <label for="update-post-image" class="font-CentraNo2-Book">\nAdd Hero Image\n<input name="hero_image" id="update-post-image" accept="image/*" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="paste image url"', ' required></label> <label for="post-body" class="font-CentraNo2-Book">\nBody Text\n<textarea name="body" id="update-post-body" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="" required>', '</textarea> </label> </div> </form> <script type="module" src="/scripts/blog.js"><\/script> </body> </html>'])), renderHead(), addAttribute(blog.id, "value"), addAttribute(blog?.tags?.join(", "), "value"), addAttribute(blog?.heading, "value"), addAttribute(blog.hero_image, "value"), blog?.body);
}, "/Users/uniquee/Downloads/newassignment 2/src/pages/editpost/[heading].astro", undefined);

const $$file = "/Users/uniquee/Downloads/newassignment 2/src/pages/editpost/[heading].astro";
const $$url = "/editpost/[heading]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$heading,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
