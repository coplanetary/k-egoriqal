;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="815f1541-2c3f-4fce-9263-7ec3127fcbe1",e._sentryDebugIdIdentifier="sentry-dbid-815f1541-2c3f-4fce-9263-7ec3127fcbe1")}catch(e){}}();function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}

const DEFAULT_HASH_PROPS = ["src", "width", "height", "format", "quality"];

function isESMImportedImage(src) {
  return typeof src === "object";
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  return typeof src === "object" && "then" in src ? (await src).default ?? await src : src;
}

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}

export { DEFAULT_HASH_PROPS as D, isESMImportedImage as a, isLocalService as b, isRemoteImage as i, prependForwardSlash as p, resolveSrc as r };
//# sourceMappingURL=assets-service_BUrpadAD.mjs.map
