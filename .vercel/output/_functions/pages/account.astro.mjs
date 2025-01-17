/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderHead, b as createAstro } from '../chunks/astro/server_DsOIsn5x.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Account = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Account;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My Astro Page</title><link rel="stylesheet" href="/styles/global.css">', '</head> <body> <nav class="flex justify-between p-8 border-b-2 border-grey"> <a href="/blog"><img src="Logo.png" alt="potential logo" class="w-8 h-8"></a> <div class="flex gap-5"> <button class="font-CentraNo2-Book"><a href="/blog">Blog Posts</a></button> <button class="font-CentraNo2-Book"> <a href="/newpost"> New Post</a></button> <button class="font-CentraNo2-Book text-blue-600"> <a href="/account">My Account</a> </button> </div> </nav> <div id="account" class="max-w-[700px] p-6 mx-auto flex flex-col mt-20"> <div class="flex justify-between"> <p class="font-RecklessNeueRegular text-3xl">My Profile</p> <button id="save-btn" class="font-CentraNo2-Book bg-black text-white p-3 rounded-md">Save Changes</button> </div> <div class="border-2 border-grey rounded-md p-5 mt-5"> <!-- <div class="flex justify-between mt-10">\n          <div class="flex gap-3">\n            <img src="Avatar.png" alt="Profile Picture" class="w-12 h-12" />\n            <div>\n              <p class="font-CentraNo2-Book text-[18px]">Profile Picture</p>\n              <p class="font-CentraNo2-Light text-[12px] text-gray-600">\n                PNG/JPEG under 10MB\n              </p>\n            </div>\n          </div>\n\n          <div class="flex gap-3">\n            <button\n              class="border border-grey p-3 rounded-md font-CentraNo2-Book"\n              >Upload new picture\n            </button>\n            <button class="bg-red-100 p-3 rounded-md font-CentraNo2-Light"\n              >Delete picture</button\n            >\n          </div>\n        </div> --> <!-- <div class="border border-grey mt-10"></div> --> <div class="mt-10"> <p class="font-RecklessNeueRegular text-xl">Personal Information</p> <form class="flex flex-col gap-3 mt-5 w-full"> <label for="fullname" class="font-CentraNo2-Book flex flex-col">\nFull Name\n<input id="fullname" placeholder="Fullname" class="w-full border border-black h-10 px-3 rounded-md font-CentraNo2-Book"> </label> <!-- <div class="flex gap-2"> --> <!-- <label\n                for="password"\n                class="font-CentraNo2-Book flex flex-col w-full"\n              >\n                Password\n                <input\n                  type="password"\n                  placeholder="Current Password"\n                  class="w-full border border-black h-10 px-3 rounded-md font-CentraNo2-Book"\n                />\n            </label> --> <!-- <img src="visible.svg" alt="view password">\n                    <img src="eye.svg" alt="hide password"> --> <label for="update-password" class="font-CentraNo2-Book flex flex-col w-full">\nUpdate Password\n<input type="password" id="update-password" placeholder="New Password" class="w-full border border-black h-10 px-3 rounded-md font-CentraNo2-Book"> <!-- <img src="visible.svg" alt="view password"> --> </label> <!-- </div> --> </form> </div> </div> <button id="sign-out-btn" class="w-full border border-stone-700 rounded-md font-CentraNo2-Book mt-10 h-10 bg-slate-100">Sign out of account</button> <button id="delete-account-btn" class="w-full border border-stone-700 rounded-md font-CentraNo2-Book mt-10 h-10 bg-black text-white">Delete account</button> </div> <script type="module" src="/scripts/index.js"><\/script> </body> </html>'])), renderHead());
}, "/Users/codexjay/Downloads/newassignment/src/pages/account.astro", void 0);

const $$file = "/Users/codexjay/Downloads/newassignment/src/pages/account.astro";
const $$url = "/account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Account,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
