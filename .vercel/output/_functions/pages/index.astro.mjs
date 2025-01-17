/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderHead, b as createAstro } from '../chunks/astro/server_BcvOqyrJ.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sign In | My Astro Page</title><link rel="stylesheet" href="/styles/global.css">', '</head> <body> <div class="max-w-[500px] mx-auto flex flex-col items-center h-screen justify-center"> <div> <p class="text-3xl text-center font-CentraNo2-Medium">\nSign in to your account\n</p> <p class="text-center font-CentraNo2-Book">\nGet access to all of our articles when you log in to your account\n</p> </div> <div class="w-full border border-grey my-10"></div> <!-- <button class="flex items-center justify-center gap-3  h-10 w-full rounded-md bg-blue-600 p-5 my-10 mx-auto">\n            <img src="google.svg" alt="google sign in" class="w-6 h-6">\n            <p class="text-white">Sign in with google</p>\n    </button> --> <!-- <p class="text-center">or</p> --> <form id="signin-form" class="flex flex-col gap-3 mt-5 w-full"> <input type="email" id="signin-email" placeholder="Email" class="w-full border border-black h-10 px-3 rounded-md font-CentraNo2-Book" required> <input type="password" id="signin-password" placeholder="Password" class="w-full border border-black h-10 px-3 rounded-md font-CentraNo2-Book" required> <button type="submit" class="w-full bg-yellow-400 h-10 text-center rounded-md font-CentraNo2-Book mt-3">\nSign in to account\n</button> </form> <p class="font-CentraNo2-Light mt-5 text-center text-[14px]">\nBy continuing, you have read and agreed to our Terms and Conditions and\n        Privacy Statement\n</p> <div class="flex gap-2 mt-12"> <p class="font-CentraNo2-Light">Are you new here?</p> <button class="font-CentraNo2-Book text-blue-600"><a href="/signup">Create Account</a></button> </div> </div> <script type="module" src="/scripts/index.js"><\/script> </body> </html>'])), renderHead());
}, "/Users/uniquee/Downloads/newassignment 2/src/pages/index.astro", undefined);

const $$file = "/Users/uniquee/Downloads/newassignment 2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
