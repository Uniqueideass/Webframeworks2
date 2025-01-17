/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderHead } from '../chunks/astro/server_DsOIsn5x.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Newpost = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Post Blog</title><link rel="stylesheet" href="/styles/global.css">', '</head> <body> <nav class="flex justify-between p-8 border-b-2 border-grey"> <a href="/blog"><img src="Logo.png" alt="potential logo" class="w-8 h-8"></a> <div class="flex gap-5"> <button class="font-CentraNo2-Book"><a href="/blog">Blog Posts</a></button> <button class="font-CentraNo2-Book text-blue-600"> <a href="/newpost"> New Post</a></button> <button class="font-CentraNo2-Book"> <a href="/account">My Account</a> </button> </div> </nav> <form id="post-form" class="max-w-[700px] mx-auto flex flex-col mt-20"> <div class="flex justify-between"> <p class="font-RecklessNeueRegular text-3xl">Create New Post</p> <button id="publish-btn" type="submit" class="font-CentraNo2-Book bg-black text-white p-3 rounded-md">Publish Post</button> </div> <p id="error"></p> <div class="border-2 border-grey rounded-md p-5 mt-5"> <label for="post-tag" class="font-CentraNo2-Book">\nAdd Tags\n<input name="" id="post-tag" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="Use a comma to separate tags" required></label> <label for="post-heading" class="font-CentraNo2-Book">\nAdd Heading\n<input name="" id="post-heading" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="" required></label> <label for="post-image" class="font-CentraNo2-Book">\nAdd Hero Image\n<input name="" id="post-image" type="file" accept="image/*" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" required></label> <label for="post-author" class="font-CentraNo2-Book">\nAdd Author\n<input name="" id="post-author" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="" required></label> <label for="post-body" class="font-CentraNo2-Book">\nBody Text\n<textarea name="" id="post-body" class="w-full my-3 p-3 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800" placeholder="" required></textarea> </label> </div> </form> <script type="module" src="/scripts/blog.js"><\/script> </body> </html>'])), renderHead());
}, "/Users/codexjay/Downloads/newassignment/src/pages/newpost.astro", void 0);

const $$file = "/Users/codexjay/Downloads/newassignment/src/pages/newpost.astro";
const $$url = "/newpost";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Newpost,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
