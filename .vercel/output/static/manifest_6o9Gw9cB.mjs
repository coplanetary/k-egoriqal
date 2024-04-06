;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1df1f049-1421-4054-954b-4f4ebc901562",e._sentryDebugIdIdentifier="sentry-dbid-1df1f049-1421-4054-954b-4f4ebc901562")}catch(e){}}();import 'cookie';
import 'kleur/colors';
import './chunks/astro_CclLZEeL.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/static","routes":[{"file":"file:///home/vasir/map/foundation/.vercel/output/static/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/blog","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-blog/src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/vasir/map/foundation/.vercel/output/static/sentry","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sentry","isIndex":false,"type":"endpoint","pattern":"^\\/sentry\\/?$","segments":[[{"content":"sentry","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sentry.ts","pathname":"/sentry","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/vasir/map/foundation/.vercel/output/static/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://anarchitecture.foundation","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/vasir/map/foundation/node_modules/astro-blog/src/pages/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/vasir/map/foundation/node_modules/astro-blog/src/pages/[page].astro",{"propagation":"in-tree","containsHead":true}],["/home/vasir/map/foundation/node_modules/astro-blog/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/vasir/map/foundation/node_modules/astro-blog/src/utils/content-collection.ts",{"propagation":"in-tree","containsHead":false}],["/home/vasir/map/foundation/node_modules/astro-blog/src/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/astro-blog/src/pages/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/astro-blog/src/pages/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/astro-blog/src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/vasir/map/foundation/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro-blog/src/pages/[page]@_@astro":"pages/blog/_page_.astro.mjs","\u0000@astro-page:node_modules/astro-blog/src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:node_modules/astro-blog/src/pages/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/sentry@_@ts":"pages/sentry.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_6o9Gw9cB.mjs","/home/vasir/map/foundation/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_CKw3QG0O.mjs","@astrojs/svelte/client.js":"_astro/client.ChuwLUBA.js","/astro/hoisted.js?q=0":"_astro/hoisted.C3jY1_qY.js","@astrojs/solid-js/client.js":"_astro/client.BmpblHBu.js","@astrojs/preact/client.js":"_astro/client.B7bJ521L.js","/home/vasir/map/foundation/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.G6T1eXo1.js","astro:scripts/page.js":"_astro/page.CJwRLN-h.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/page.CJwRLN-h.js","/file:///home/vasir/map/foundation/.vercel/output/static/blog/index.html","/file:///home/vasir/map/foundation/.vercel/output/static/sentry","/file:///home/vasir/map/foundation/.vercel/output/static/index.html","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory"});

export { manifest };
//# sourceMappingURL=manifest_6o9Gw9cB.mjs.map
