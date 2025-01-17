import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Beyf9pRJ.mjs';
import { manifest } from './manifest_Bw121YEN.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/account.astro.mjs');
const _page2 = () => import('./pages/api/deleteuser.astro.mjs');
const _page3 = () => import('./pages/blog/_heading_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/blogpage1.astro.mjs');
const _page6 = () => import('./pages/editpost/_heading_.astro.mjs');
const _page7 = () => import('./pages/newpost.astro.mjs');
const _page8 = () => import('./pages/signup.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/account.astro", _page1],
    ["src/pages/api/deleteUser.js", _page2],
    ["src/pages/blog/[heading].astro", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/blogpage1.astro", _page5],
    ["src/pages/editpost/[heading].astro", _page6],
    ["src/pages/newpost.astro", _page7],
    ["src/pages/signup.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "52942bc4-4fa4-4b80-a65c-75310d364c2a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
