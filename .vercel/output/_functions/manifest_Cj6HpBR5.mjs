import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bj5l3cpD.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_DsOIsn5x.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/codexjay/Downloads/newassignment/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/account","isIndex":false,"type":"page","pattern":"^\\/account\\/?$","segments":[[{"content":"account","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/account.astro","pathname":"/account","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/deleteuser","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/deleteUser\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"deleteUser","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/deleteUser.js","pathname":"/api/deleteUser","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/hello","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/hello\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"hello","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/hello.js","pathname":"/api/hello","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/blog/[heading]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"heading","dynamic":true,"spread":false}]],"params":["heading"],"component":"src/pages/blog/[heading].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/blogpage1","isIndex":false,"type":"page","pattern":"^\\/blogpage1\\/?$","segments":[[{"content":"blogpage1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogpage1.astro","pathname":"/blogpage1","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/editpost/[heading]","isIndex":false,"type":"page","pattern":"^\\/editpost\\/([^/]+?)\\/?$","segments":[[{"content":"editpost","dynamic":false,"spread":false}],[{"content":"heading","dynamic":true,"spread":false}]],"params":["heading"],"component":"src/pages/editpost/[heading].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/newpost","isIndex":false,"type":"page","pattern":"^\\/newpost\\/?$","segments":[[{"content":"newpost","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/newpost.astro","pathname":"/newpost","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/account.CE6kivbH.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/codexjay/Downloads/newassignment/src/pages/account.astro",{"propagation":"none","containsHead":true}],["/Users/codexjay/Downloads/newassignment/src/pages/blog/[heading].astro",{"propagation":"none","containsHead":true}],["/Users/codexjay/Downloads/newassignment/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/Users/codexjay/Downloads/newassignment/src/pages/blogpage1.astro",{"propagation":"none","containsHead":true}],["/Users/codexjay/Downloads/newassignment/src/pages/editpost/[heading].astro",{"propagation":"none","containsHead":true}],["/Users/codexjay/Downloads/newassignment/src/pages/newpost.astro",{"propagation":"none","containsHead":true}],["/Users/codexjay/Downloads/newassignment/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["/Users/codexjay/Downloads/newassignment/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/account@_@astro":"pages/account.astro.mjs","\u0000@astro-page:src/pages/api/deleteUser@_@js":"pages/api/deleteuser.astro.mjs","\u0000@astro-page:src/pages/api/hello@_@js":"pages/api/hello.astro.mjs","\u0000@astro-page:src/pages/blog/[heading]@_@astro":"pages/blog/_heading_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blogpage1@_@astro":"pages/blogpage1.astro.mjs","\u0000@astro-page:src/pages/editpost/[heading]@_@astro":"pages/editpost/_heading_.astro.mjs","\u0000@astro-page:src/pages/newpost@_@astro":"pages/newpost.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/codexjay/Downloads/newassignment/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CArLBRN5.mjs","\u0000@astrojs-manifest":"manifest_Cj6HpBR5.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/account.CE6kivbH.css","/Avatar.png","/Logo.png","/_headers","/bin.svg","/edit.svg","/eye.svg","/favicon.ico","/favicon.svg","/google.svg","/nature.jpg","/nature2.jpg","/visible.svg","/styles/global.css","/fonts/Centra/CentraNo2-Black.ttf","/fonts/Centra/CentraNo2-BlackItalic.ttf","/fonts/Centra/CentraNo2-Bold.ttf","/fonts/Centra/CentraNo2-BoldItalic.ttf","/fonts/Centra/CentraNo2-Book.ttf","/fonts/Centra/CentraNo2-BookItalic.ttf","/fonts/Centra/CentraNo2-Extrabold.ttf","/fonts/Centra/CentraNo2-ExtraboldItalic.ttf","/fonts/Centra/CentraNo2-Hairline.ttf","/fonts/Centra/CentraNo2-HairlineItalic.ttf","/fonts/Centra/CentraNo2-Light.ttf","/fonts/Centra/CentraNo2-LightItalic.ttf","/fonts/Centra/CentraNo2-Medium.ttf","/fonts/Centra/CentraNo2-MediumItalic.ttf","/fonts/Centra/CentraNo2-Thin.ttf","/fonts/Centra/CentraNo2-ThinItalic.ttf","/scripts/blog.js","/scripts/index.js","/fonts/Reckless/RecklessNeue-Bold.ttf","/fonts/Reckless/RecklessNeue-BoldItalic.ttf","/fonts/Reckless/RecklessNeue-Book.ttf","/fonts/Reckless/RecklessNeue-BookItalic.ttf","/fonts/Reckless/RecklessNeue-Heavy.ttf","/fonts/Reckless/RecklessNeue-HeavyItalic.ttf","/fonts/Reckless/RecklessNeue-Light.ttf","/fonts/Reckless/RecklessNeue-LightItalic.ttf","/fonts/Reckless/RecklessNeue-Medium.ttf","/fonts/Reckless/RecklessNeue-MediumItalic.ttf","/fonts/Reckless/RecklessNeue-Regular.ttf","/fonts/Reckless/RecklessNeue-RegularItalic.ttf","/fonts/Reckless/RecklessNeue-SemiBold.ttf","/fonts/Reckless/RecklessNeue-SemiBoldItalic.ttf","/fonts/Reckless/RecklessNeue-Thin.ttf","/fonts/Reckless/RecklessNeue-ThinItalic.ttf"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"JYyMDTqJAWO+jtHuVEIe13G7UJXmWSBwDJyhbkNPNHo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };