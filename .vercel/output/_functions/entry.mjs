import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BkBx9wr2.mjs';
import { manifest } from './manifest_Cj6HpBR5.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/account.astro.mjs');
const _page2 = () => import('./pages/api/deleteuser.astro.mjs');
const _page3 = () => import('./pages/api/hello.astro.mjs');
const _page4 = () => import('./pages/blog/_heading_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/blogpage1.astro.mjs');
const _page7 = () => import('./pages/editpost/_heading_.astro.mjs');
const _page8 = () => import('./pages/newpost.astro.mjs');
const _page9 = () => import('./pages/signup.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/account.astro", _page1],
    ["src/pages/api/deleteUser.js", _page2],
    ["src/pages/api/hello.js", _page3],
    ["src/pages/blog/[heading].astro", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/blogpage1.astro", _page6],
    ["src/pages/editpost/[heading].astro", _page7],
    ["src/pages/newpost.astro", _page8],
    ["src/pages/signup.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "52231fdf-f7c3-4b26-9442-034e3b6aee21",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
