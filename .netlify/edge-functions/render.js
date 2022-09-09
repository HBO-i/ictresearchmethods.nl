var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
function set_current_component(component11) {
  current_component = component11;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function createEventDispatcher() {
  const component11 = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component11.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component11, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component11, name) {
  if (!component11 || !component11.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component11;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css11) => css11.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
function add_classes(classes) {
  return classes ? ` class="${classes}"` : "";
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
var HttpError, Redirect;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    HttpError = class {
      constructor(status, message) {
        __publicField(this, "name", "HttpError");
        __publicField(this, "stack");
        this.status = status;
        this.message = message ?? `Error: ${status}`;
      }
      toString() {
        return this.message;
      }
    };
    Redirect = class {
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
  }
});

// .svelte-kit/output/server/chunks/index3.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    init_chunks();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index11 = 0;
      while (index11 < str.length) {
        var eqIdx = str.indexOf("=", index11);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index11);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index11 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index11, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index11 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie2 = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie2.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie2.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie2.secure = true;
        } else if (key2 === "httponly") {
          cookie2.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie2.sameSite = value2;
        } else {
          cookie2[key2] = value2;
        }
      });
      return cookie2;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse2(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie2 = parseString2(str, options);
          cookies2[cookie2.name] = cookie2;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/_layout.ts.js
var layout_ts_exports = {};
__export(layout_ts_exports, {
  prerender: () => prerender
});
var prerender;
var init_layout_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.ts.js"() {
    prerender = true;
  }
});

// .svelte-kit/output/server/chunks/index4.js
var currentPaginationPage, allMethods, showSearchField, isJavaScriptDisabled, isMenuOpen, isDarkMode;
var init_index4 = __esm({
  ".svelte-kit/output/server/chunks/index4.js"() {
    init_index3();
    currentPaginationPage = writable(1);
    allMethods = writable([]);
    showSearchField = writable(false);
    isJavaScriptDisabled = writable(true);
    isMenuOpen = writable(false);
    isDarkMode = writable(false);
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var init_extends = __esm({
  "node_modules/@babel/runtime/helpers/esm/extends.js"() {
  }
});

// node_modules/remove-accents/index.js
var require_remove_accents = __commonJS({
  "node_modules/remove-accents/index.js"(exports, module) {
    var characterMap = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\u1EA4": "A",
      "\u1EAE": "A",
      "\u1EB2": "A",
      "\u1EB4": "A",
      "\u1EB6": "A",
      "\xC6": "AE",
      "\u1EA6": "A",
      "\u1EB0": "A",
      "\u0202": "A",
      "\xC7": "C",
      "\u1E08": "C",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\u1EBE": "E",
      "\u1E16": "E",
      "\u1EC0": "E",
      "\u1E14": "E",
      "\u1E1C": "E",
      "\u0206": "E",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\u1E2E": "I",
      "\u020A": "I",
      "\xD0": "D",
      "\xD1": "N",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\u1ED0": "O",
      "\u1E4C": "O",
      "\u1E52": "O",
      "\u020E": "O",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xDD": "Y",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\u1EA5": "a",
      "\u1EAF": "a",
      "\u1EB3": "a",
      "\u1EB5": "a",
      "\u1EB7": "a",
      "\xE6": "ae",
      "\u1EA7": "a",
      "\u1EB1": "a",
      "\u0203": "a",
      "\xE7": "c",
      "\u1E09": "c",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\u1EBF": "e",
      "\u1E17": "e",
      "\u1EC1": "e",
      "\u1E15": "e",
      "\u1E1D": "e",
      "\u0207": "e",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\u1E2F": "i",
      "\u020B": "i",
      "\xF0": "d",
      "\xF1": "n",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\u1ED1": "o",
      "\u1E4D": "o",
      "\u1E53": "o",
      "\u020F": "o",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xFD": "y",
      "\xFF": "y",
      "\u0100": "A",
      "\u0101": "a",
      "\u0102": "A",
      "\u0103": "a",
      "\u0104": "A",
      "\u0105": "a",
      "\u0106": "C",
      "\u0107": "c",
      "\u0108": "C",
      "\u0109": "c",
      "\u010A": "C",
      "\u010B": "c",
      "\u010C": "C",
      "\u010D": "c",
      "C\u0306": "C",
      "c\u0306": "c",
      "\u010E": "D",
      "\u010F": "d",
      "\u0110": "D",
      "\u0111": "d",
      "\u0112": "E",
      "\u0113": "e",
      "\u0114": "E",
      "\u0115": "e",
      "\u0116": "E",
      "\u0117": "e",
      "\u0118": "E",
      "\u0119": "e",
      "\u011A": "E",
      "\u011B": "e",
      "\u011C": "G",
      "\u01F4": "G",
      "\u011D": "g",
      "\u01F5": "g",
      "\u011E": "G",
      "\u011F": "g",
      "\u0120": "G",
      "\u0121": "g",
      "\u0122": "G",
      "\u0123": "g",
      "\u0124": "H",
      "\u0125": "h",
      "\u0126": "H",
      "\u0127": "h",
      "\u1E2A": "H",
      "\u1E2B": "h",
      "\u0128": "I",
      "\u0129": "i",
      "\u012A": "I",
      "\u012B": "i",
      "\u012C": "I",
      "\u012D": "i",
      "\u012E": "I",
      "\u012F": "i",
      "\u0130": "I",
      "\u0131": "i",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u1E30": "K",
      "\u1E31": "k",
      "K\u0306": "K",
      "k\u0306": "k",
      "\u0139": "L",
      "\u013A": "l",
      "\u013B": "L",
      "\u013C": "l",
      "\u013D": "L",
      "\u013E": "l",
      "\u013F": "L",
      "\u0140": "l",
      "\u0141": "l",
      "\u0142": "l",
      "\u1E3E": "M",
      "\u1E3F": "m",
      "M\u0306": "M",
      "m\u0306": "m",
      "\u0143": "N",
      "\u0144": "n",
      "\u0145": "N",
      "\u0146": "n",
      "\u0147": "N",
      "\u0148": "n",
      "\u0149": "n",
      "N\u0306": "N",
      "n\u0306": "n",
      "\u014C": "O",
      "\u014D": "o",
      "\u014E": "O",
      "\u014F": "o",
      "\u0150": "O",
      "\u0151": "o",
      "\u0152": "OE",
      "\u0153": "oe",
      "P\u0306": "P",
      "p\u0306": "p",
      "\u0154": "R",
      "\u0155": "r",
      "\u0156": "R",
      "\u0157": "r",
      "\u0158": "R",
      "\u0159": "r",
      "R\u0306": "R",
      "r\u0306": "r",
      "\u0212": "R",
      "\u0213": "r",
      "\u015A": "S",
      "\u015B": "s",
      "\u015C": "S",
      "\u015D": "s",
      "\u015E": "S",
      "\u0218": "S",
      "\u0219": "s",
      "\u015F": "s",
      "\u0160": "S",
      "\u0161": "s",
      "\u0162": "T",
      "\u0163": "t",
      "\u021B": "t",
      "\u021A": "T",
      "\u0164": "T",
      "\u0165": "t",
      "\u0166": "T",
      "\u0167": "t",
      "T\u0306": "T",
      "t\u0306": "t",
      "\u0168": "U",
      "\u0169": "u",
      "\u016A": "U",
      "\u016B": "u",
      "\u016C": "U",
      "\u016D": "u",
      "\u016E": "U",
      "\u016F": "u",
      "\u0170": "U",
      "\u0171": "u",
      "\u0172": "U",
      "\u0173": "u",
      "\u0216": "U",
      "\u0217": "u",
      "V\u0306": "V",
      "v\u0306": "v",
      "\u0174": "W",
      "\u0175": "w",
      "\u1E82": "W",
      "\u1E83": "w",
      "X\u0306": "X",
      "x\u0306": "x",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "Y\u0306": "Y",
      "y\u0306": "y",
      "\u0179": "Z",
      "\u017A": "z",
      "\u017B": "Z",
      "\u017C": "z",
      "\u017D": "Z",
      "\u017E": "z",
      "\u017F": "s",
      "\u0192": "f",
      "\u01A0": "O",
      "\u01A1": "o",
      "\u01AF": "U",
      "\u01B0": "u",
      "\u01CD": "A",
      "\u01CE": "a",
      "\u01CF": "I",
      "\u01D0": "i",
      "\u01D1": "O",
      "\u01D2": "o",
      "\u01D3": "U",
      "\u01D4": "u",
      "\u01D5": "U",
      "\u01D6": "u",
      "\u01D7": "U",
      "\u01D8": "u",
      "\u01D9": "U",
      "\u01DA": "u",
      "\u01DB": "U",
      "\u01DC": "u",
      "\u1EE8": "U",
      "\u1EE9": "u",
      "\u1E78": "U",
      "\u1E79": "u",
      "\u01FA": "A",
      "\u01FB": "a",
      "\u01FC": "AE",
      "\u01FD": "ae",
      "\u01FE": "O",
      "\u01FF": "o",
      "\xDE": "TH",
      "\xFE": "th",
      "\u1E54": "P",
      "\u1E55": "p",
      "\u1E64": "S",
      "\u1E65": "s",
      "X\u0301": "X",
      "x\u0301": "x",
      "\u0403": "\u0413",
      "\u0453": "\u0433",
      "\u040C": "\u041A",
      "\u045C": "\u043A",
      "A\u030B": "A",
      "a\u030B": "a",
      "E\u030B": "E",
      "e\u030B": "e",
      "I\u030B": "I",
      "i\u030B": "i",
      "\u01F8": "N",
      "\u01F9": "n",
      "\u1ED2": "O",
      "\u1ED3": "o",
      "\u1E50": "O",
      "\u1E51": "o",
      "\u1EEA": "U",
      "\u1EEB": "u",
      "\u1E80": "W",
      "\u1E81": "w",
      "\u1EF2": "Y",
      "\u1EF3": "y",
      "\u0200": "A",
      "\u0201": "a",
      "\u0204": "E",
      "\u0205": "e",
      "\u0208": "I",
      "\u0209": "i",
      "\u020C": "O",
      "\u020D": "o",
      "\u0210": "R",
      "\u0211": "r",
      "\u0214": "U",
      "\u0215": "u",
      "B\u030C": "B",
      "b\u030C": "b",
      "\u010C\u0323": "C",
      "\u010D\u0323": "c",
      "\xCA\u030C": "E",
      "\xEA\u030C": "e",
      "F\u030C": "F",
      "f\u030C": "f",
      "\u01E6": "G",
      "\u01E7": "g",
      "\u021E": "H",
      "\u021F": "h",
      "J\u030C": "J",
      "\u01F0": "j",
      "\u01E8": "K",
      "\u01E9": "k",
      "M\u030C": "M",
      "m\u030C": "m",
      "P\u030C": "P",
      "p\u030C": "p",
      "Q\u030C": "Q",
      "q\u030C": "q",
      "\u0158\u0329": "R",
      "\u0159\u0329": "r",
      "\u1E66": "S",
      "\u1E67": "s",
      "V\u030C": "V",
      "v\u030C": "v",
      "W\u030C": "W",
      "w\u030C": "w",
      "X\u030C": "X",
      "x\u030C": "x",
      "Y\u030C": "Y",
      "y\u030C": "y",
      "A\u0327": "A",
      "a\u0327": "a",
      "B\u0327": "B",
      "b\u0327": "b",
      "\u1E10": "D",
      "\u1E11": "d",
      "\u0228": "E",
      "\u0229": "e",
      "\u0190\u0327": "E",
      "\u025B\u0327": "e",
      "\u1E28": "H",
      "\u1E29": "h",
      "I\u0327": "I",
      "i\u0327": "i",
      "\u0197\u0327": "I",
      "\u0268\u0327": "i",
      "M\u0327": "M",
      "m\u0327": "m",
      "O\u0327": "O",
      "o\u0327": "o",
      "Q\u0327": "Q",
      "q\u0327": "q",
      "U\u0327": "U",
      "u\u0327": "u",
      "X\u0327": "X",
      "x\u0327": "x",
      "Z\u0327": "Z",
      "z\u0327": "z"
    };
    var chars3 = Object.keys(characterMap).join("|");
    var allAccents = new RegExp(chars3, "g");
    var firstAccent = new RegExp(chars3, "");
    var removeAccents2 = function(string) {
      return string.replace(allAccents, function(match) {
        return characterMap[match];
      });
    };
    var hasAccents = function(string) {
      return !!string.match(firstAccent);
    };
    module.exports = removeAccents2;
    module.exports.has = hasAccents;
    module.exports.remove = removeAccents2;
  }
});

// node_modules/match-sorter/dist/match-sorter.esm.js
function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, keys = _options.keys, _options$threshold = _options.threshold, threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold, _options$baseSort = _options.baseSort, baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort, _options$sorter = _options.sorter, sorter = _options$sorter === void 0 ? function(matchedItems2) {
    return matchedItems2.sort(function(a, b) {
      return sortRankedValues(a, b, baseSort);
    });
  } : _options$sorter;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map(function(_ref) {
    var item = _ref.item;
    return item;
  });
  function reduceItemsToRanked(matches, item, index11) {
    var rankingInfo = getHighestRanking(item, keys, value, options);
    var rank = rankingInfo.rank, _rankingInfo$keyThres = rankingInfo.keyThreshold, keyThreshold = _rankingInfo$keyThres === void 0 ? threshold : _rankingInfo$keyThres;
    if (rank >= keyThreshold) {
      matches.push(_extends({}, rankingInfo, {
        item,
        index: index11
      }));
    }
    return matches;
  }
}
function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    var stringItem = item;
    return {
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }
  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function(_ref2, _ref3, i) {
    var rank = _ref2.rank, rankedValue = _ref2.rankedValue, keyIndex = _ref2.keyIndex, keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue, attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var newRankedValue = rankedValue;
    var minRanking = attributes.minRanking, maxRanking = attributes.maxRanking, threshold = attributes.threshold;
    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }
    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedValue = itemValue;
    }
    return {
      rankedValue: newRankedValue,
      rank,
      keyIndex,
      keyThreshold
    };
  }, {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options);
  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  }
  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }
  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase();
  if (testString === stringToRank) {
    return rankings.EQUAL;
  }
  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  }
  if (testString.includes(" " + stringToRank)) {
    return rankings.WORD_STARTS_WITH;
  }
  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    return rankings.NO_MATCH;
  }
  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  }
  return getClosenessRanking(testString, stringToRank);
}
function getAcronym(string) {
  var acronym = "";
  var wordsInString = string.split(" ");
  wordsInString.forEach(function(wordInString) {
    var splitByHyphenWords = wordInString.split("-");
    splitByHyphenWords.forEach(function(splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;
  function findMatchingCharacter(matchChar2, string, index11) {
    for (var j = index11, J = string.length; j < J; j++) {
      var stringChar = string[j];
      if (stringChar === matchChar2) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }
    return -1;
  }
  function getRanking(spread2) {
    var spreadPercentage = 1 / spread2;
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }
  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);
  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }
  charNumber = firstIndex;
  for (var i = 1, I = stringToRank.length; i < I; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;
    if (!found) {
      return rankings.NO_MATCH;
    }
  }
  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
function sortRankedValues(a, b, baseSort) {
  var aFirst = -1;
  var bFirst = 1;
  var aRank = a.rank, aKeyIndex = a.keyIndex;
  var bRank = b.rank, bKeyIndex = b.keyIndex;
  var same = aRank === bRank;
  if (same) {
    if (aKeyIndex === bKeyIndex) {
      return baseSort(a, b);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  value = "" + value;
  if (!keepDiacritics) {
    value = (0, import_remove_accents.default)(value);
  }
  return value;
}
function getItemValues(item, key2) {
  if (typeof key2 === "object") {
    key2 = key2.key;
  }
  var value;
  if (typeof key2 === "function") {
    value = key2(item);
  } else if (item == null) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key2)) {
    value = item[key2];
  } else if (key2.includes(".")) {
    return getNestedValues(key2, item);
  } else {
    value = null;
  }
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [String(value)];
}
function getNestedValues(path, item) {
  var keys = path.split(".");
  var values = [item];
  for (var i = 0, I = keys.length; i < I; i++) {
    var nestedKey = keys[i];
    var nestedValues = [];
    for (var j = 0, J = values.length; j < J; j++) {
      var nestedItem = values[j];
      if (nestedItem == null)
        continue;
      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        var nestedValue = nestedItem[nestedKey];
        if (nestedValue != null) {
          nestedValues.push(nestedValue);
        }
      } else if (nestedKey === "*") {
        nestedValues = nestedValues.concat(nestedItem);
      }
    }
    values = nestedValues;
  }
  if (Array.isArray(values[0])) {
    var result = [];
    return result.concat.apply(result, values);
  }
  return values;
}
function getAllValuesToRank(item, keys) {
  var allValues = [];
  for (var j = 0, J = keys.length; j < J; j++) {
    var key2 = keys[j];
    var attributes = getKeyAttributes(key2);
    var itemValues = getItemValues(item, key2);
    for (var i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes
      });
    }
  }
  return allValues;
}
function getKeyAttributes(key2) {
  if (typeof key2 === "string") {
    return defaultKeyAttributes;
  }
  return _extends({}, defaultKeyAttributes, key2);
}
var import_remove_accents, rankings, defaultBaseSortFn, defaultKeyAttributes;
var init_match_sorter_esm = __esm({
  "node_modules/match-sorter/dist/match-sorter.esm.js"() {
    init_extends();
    import_remove_accents = __toESM(require_remove_accents());
    rankings = {
      CASE_SENSITIVE_EQUAL: 7,
      EQUAL: 6,
      STARTS_WITH: 5,
      WORD_STARTS_WITH: 4,
      CONTAINS: 3,
      ACRONYM: 2,
      MATCHES: 1,
      NO_MATCH: 0
    };
    matchSorter.rankings = rankings;
    defaultBaseSortFn = function defaultBaseSortFn2(a, b) {
      return String(a.rankedValue).localeCompare(String(b.rankedValue));
    };
    defaultKeyAttributes = {
      maxRanking: Infinity,
      minRanking: -Infinity
    };
  }
});

// .svelte-kit/output/server/chunks/routes.js
var categoryRoutes, sidebarRoutes;
var init_routes = __esm({
  ".svelte-kit/output/server/chunks/routes.js"() {
    categoryRoutes = [
      {
        title: "All Methods",
        category: ""
      },
      {
        title: "Library",
        category: "library"
      },
      {
        title: "Field",
        category: "field"
      },
      {
        title: "Lab",
        category: "lab"
      },
      {
        title: "Showroom",
        category: "showroom"
      },
      {
        title: "Workshop",
        category: "workshop"
      },
      {
        title: "Extra",
        category: "extra"
      }
    ];
    sidebarRoutes = [
      {
        title: "Methods",
        path: "/",
        icon: "dashboard"
      },
      {
        title: "About",
        path: "/about",
        icon: "person"
      },
      {
        title: "DOT Framework",
        path: "/dot-framework",
        icon: "star"
      }
    ];
  }
});

// .svelte-kit/output/server/chunks/stores.js
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var css$7, SearchField, Github, Github_dark, Bmc_logo, Bmc_logo_dark, Moon, Sun, css$6, ThemeSwitch, css$5, Topbar, css$4, Footer, Person, Dashboard, Star, css$3, SidebarIcon, css$2, MobileHamburger, css$1, Sidebar, css, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_index4();
    init_match_sorter_esm();
    init_routes();
    init_stores();
    css$7 = {
      code: "form.svelte-1lyirk8.svelte-1lyirk8{position:relative;display:flex;justify-content:center;padding:1em}@media only screen and (min-width: 1280px){form.svelte-1lyirk8.svelte-1lyirk8{padding:0}}form.svelte-1lyirk8 input.svelte-1lyirk8{border:none;border-radius:0.75em;background-color:var(--color-bg);color:var(--color-text);padding:1em 1.5em;display:block;width:70vw;transition:ease-in 0.1s;position:relative;font-size:1em;text-align:center}form.svelte-1lyirk8 input.svelte-1lyirk8::placeholder{color:var(--color-text-secondary)}@media only screen and (min-width: 1280px){form.svelte-1lyirk8 input.svelte-1lyirk8{width:40em;font-size:0.8em;text-align:left}}form.svelte-1lyirk8 label.svelte-1lyirk8{visibility:hidden;position:absolute}form.svelte-1lyirk8 button.svelte-1lyirk8{position:absolute;right:0;top:50%;transform:translate(-10%, -50%);height:50%;background-color:#fff;border:none;outline:2px solid rgba(0, 0, 0, 0.1);border-radius:0.5em;padding:1em;display:none;justify-content:center;align-items:center}@media only screen and (min-width: 1280px){form.svelte-1lyirk8 button.svelte-1lyirk8{display:flex}}form.svelte-1lyirk8 button.svelte-1lyirk8:hover{background-color:#f3f3f3}form.svelte-1lyirk8 button.svelte-1lyirk8:active{background-color:hsl(0deg, 0%, 90%)}form.svelte-1lyirk8.svelte-1lyirk8:hover,form.svelte-1lyirk8.svelte-1lyirk8:focus{transform:scale(1.01)}ul.svelte-1lyirk8.svelte-1lyirk8{position:absolute;top:75%;background-color:var(--color-bg);box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);width:90%;box-sizing:border-box;border-top:1.5px solid rgba(0, 0, 0, 0.1);border-bottom-left-radius:0.5em;border-bottom-right-radius:0.5em}@media only screen and (min-width: 1280px){ul.svelte-1lyirk8.svelte-1lyirk8{width:100%}}ul.svelte-1lyirk8 li.svelte-1lyirk8{width:100%;text-transform:capitalize}ul.svelte-1lyirk8 li a.svelte-1lyirk8{text-decoration:none;color:var(--color-black);padding:1em 2em;display:block}ul.svelte-1lyirk8 li a.svelte-1lyirk8:focus{background-color:var(--color-primary)}ul.svelte-1lyirk8 li a span.svelte-1lyirk8{font-weight:bold}ul.svelte-1lyirk8 li.no-results.svelte-1lyirk8{padding:1.5em}",
      map: null
    };
    SearchField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_allMethods;
      let $isJavaScriptDisabled, $$unsubscribe_isJavaScriptDisabled;
      let $showSearchField, $$unsubscribe_showSearchField;
      $$unsubscribe_allMethods = subscribe(allMethods, (value) => value);
      $$unsubscribe_isJavaScriptDisabled = subscribe(isJavaScriptDisabled, (value) => $isJavaScriptDisabled = value);
      $$unsubscribe_showSearchField = subscribe(showSearchField, (value) => $showSearchField = value);
      let searchedArrayDisplay;
      $$result.css.add(css$7);
      $$unsubscribe_allMethods();
      $$unsubscribe_isJavaScriptDisabled();
      $$unsubscribe_showSearchField();
      return `${$isJavaScriptDisabled ? `<form action="${"/search"}" class="${"svelte-1lyirk8"}"><input type="${"text"}" name="${"query"}" placeholder="${"Search method"}" class="${"svelte-1lyirk8"}">
		<label for="${"search"}" class="${"svelte-1lyirk8"}">Search for method</label>
		<button class="${"svelte-1lyirk8"}">Search</button></form>` : `<form action="${"/search"}" id="${"form"}" class="${"svelte-1lyirk8"}"><input type="${"text"}" id="${"search"}" name="${"query"}" placeholder="${"Search method (CMD + K)"}" class="${"svelte-1lyirk8"}">
		<button tabindex="${"-1"}" class="${"svelte-1lyirk8"}">Search</button>
		<label for="${"search"}" class="${"svelte-1lyirk8"}">Search for method</label>

		${$showSearchField ? `<ul class="${"non-style svelte-1lyirk8"}">${each(searchedArrayDisplay, (method) => {
        return `<li class="${"svelte-1lyirk8"}"><a${add_attribute("href", "/" + method.category + "/" + method.slug, 0)} class="${"svelte-1lyirk8"}"><span class="${"svelte-1lyirk8"}">${escape(method.name)}</span> - ${escape(method.category)}</a>
					</li>`;
      })}
				${searchedArrayDisplay.length === 0 ? `<li class="${"no-results svelte-1lyirk8"}">No results.. Try another query</li>` : ``}</ul>` : ``}</form>`}`;
    });
    Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"32"}" height="${"32"}" viewBox="${"0 0 24 24"}"><path d="${"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}"></path></svg>`;
    });
    Github_dark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"32"}" height="${"32"}" viewBox="${"0 0 24 24"}"><path d="${"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}" fill="${"#fff"}"></path></svg>`;
    });
    Bmc_logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"32"}" height="${"32"}" viewBox="${"0 0 884 1279"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518V297.518Z"}" fill="${"#0D0C22"}"></path><path d="${"M803.896 388.891L802.916 389.166L803.896 388.891Z"}" fill="${"#0D0C22"}"></path><path d="${"M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377V297.377Z"}" fill="${"#0D0C22"}"></path><path d="${"M791.113 297.529H791.244V297.447L791.113 297.529Z"}" fill="${"#0D0C22"}"></path><path d="${"M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.04C804.702 387.444 803.846 388.016 803.111 388.726V388.726Z"}" fill="${"#0D0C22"}"></path><path d="${"M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515V299.515Z"}" fill="${"#0D0C22"}"></path><path d="${"M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z"}" fill="${"#0D0C22"}"></path><path d="${"M641.187 1144.63C641.187 1143.33 640.551 1143.57 640.705 1148.21C640.705 1147.84 640.86 1147.46 640.929 1147.1C641.015 1146.27 641.084 1145.46 641.187 1144.63Z"}" fill="${"#0D0C22"}"></path><path d="${"M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z"}" fill="${"#0D0C22"}"></path><path d="${"M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z"}" fill="${"#0D0C22"}"></path><path d="${"M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1163.94L247.841 1164.01Z"}" fill="${"#0D0C22"}"></path><path d="${"M472.623 590.836C426.682 610.503 374.546 632.802 306.976 632.802C278.71 632.746 250.58 628.868 223.353 621.274L270.086 1101.08C271.74 1121.13 280.876 1139.83 295.679 1153.46C310.482 1167.09 329.87 1174.65 349.992 1174.65C349.992 1174.65 416.254 1178.09 438.365 1178.09C462.161 1178.09 533.516 1174.65 533.516 1174.65C553.636 1174.65 573.019 1167.08 587.819 1153.45C602.619 1139.82 611.752 1121.13 613.406 1101.08L663.459 570.876C641.091 563.237 618.516 558.161 593.068 558.161C549.054 558.144 513.591 573.303 472.623 590.836Z"}" fill="${"#FFDD00"}"></path><path d="${"M78.6885 386.132L79.4799 386.872L79.9962 387.182C79.5987 386.787 79.1603 386.435 78.6885 386.132V386.132Z"}" fill="${"#0D0C22"}"></path><path d="${"M879.567 341.849L872.53 306.352C866.215 274.503 851.882 244.409 819.19 232.898C808.711 229.215 796.821 227.633 788.786 220.01C780.751 212.388 778.376 200.55 776.518 189.572C773.076 169.423 769.842 149.257 766.314 129.143C763.269 111.85 760.86 92.4243 752.928 76.56C742.604 55.2584 721.182 42.8009 699.88 34.559C688.965 30.4844 677.826 27.0375 666.517 24.2352C613.297 10.1947 557.342 5.03277 502.591 2.09047C436.875 -1.53577 370.983 -0.443234 305.422 5.35968C256.625 9.79894 205.229 15.1674 158.858 32.0469C141.91 38.224 124.445 45.6399 111.558 58.7341C95.7448 74.8221 90.5829 99.7026 102.128 119.765C110.336 134.012 124.239 144.078 138.985 150.737C158.192 159.317 178.251 165.846 198.829 170.215C256.126 182.879 315.471 187.851 374.007 189.968C438.887 192.586 503.87 190.464 568.44 183.618C584.408 181.863 600.347 179.758 616.257 177.304C634.995 174.43 647.022 149.928 641.499 132.859C634.891 112.453 617.134 104.538 597.055 107.618C594.095 108.082 591.153 108.512 588.193 108.942L586.06 109.252C579.257 110.113 572.455 110.915 565.653 111.661C551.601 113.175 537.515 114.414 523.394 115.378C491.768 117.58 460.057 118.595 428.363 118.647C397.219 118.647 366.058 117.769 334.983 115.722C320.805 114.793 306.661 113.611 292.552 112.177C286.134 111.506 279.733 110.801 273.333 110.009L267.241 109.235L265.917 109.046L259.602 108.134C246.697 106.189 233.792 103.953 221.025 101.251C219.737 100.965 218.584 100.249 217.758 99.2193C216.932 98.1901 216.482 96.9099 216.482 95.5903C216.482 94.2706 216.932 92.9904 217.758 91.9612C218.584 90.9319 219.737 90.2152 221.025 89.9293H221.266C232.33 87.5721 243.479 85.5589 254.663 83.8038C258.392 83.2188 262.131 82.6453 265.882 82.0832H265.985C272.988 81.6186 280.026 80.3625 286.994 79.5366C347.624 73.2302 408.614 71.0801 469.538 73.1014C499.115 73.9618 528.676 75.6996 558.116 78.6935C564.448 79.3474 570.746 80.0357 577.043 80.8099C579.452 81.1025 581.878 81.4465 584.305 81.7391L589.191 82.4445C603.438 84.5667 617.61 87.1419 631.708 90.1703C652.597 94.7128 679.422 96.1925 688.713 119.077C691.673 126.338 693.015 134.408 694.649 142.03L696.731 151.752C696.786 151.926 696.826 152.105 696.852 152.285C701.773 175.227 706.7 198.169 711.632 221.111C711.994 222.806 712.002 224.557 711.657 226.255C711.312 227.954 710.621 229.562 709.626 230.982C708.632 232.401 707.355 233.6 705.877 234.504C704.398 235.408 702.75 235.997 701.033 236.236H700.895L697.884 236.649L694.908 237.044C685.478 238.272 676.038 239.419 666.586 240.486C647.968 242.608 629.322 244.443 610.648 245.992C573.539 249.077 536.356 251.102 499.098 252.066C480.114 252.57 461.135 252.806 442.162 252.771C366.643 252.712 291.189 248.322 216.173 239.625C208.051 238.662 199.93 237.629 191.808 236.58C198.106 237.389 187.231 235.96 185.029 235.651C179.867 234.928 174.705 234.177 169.543 233.397C152.216 230.798 134.993 227.598 117.7 224.793C96.7944 221.352 76.8005 223.073 57.8906 233.397C42.3685 241.891 29.8055 254.916 21.8776 270.735C13.7217 287.597 11.2956 305.956 7.64786 324.075C4.00009 342.193 -1.67805 361.688 0.472751 380.288C5.10128 420.431 33.165 453.054 73.5313 460.35C111.506 467.232 149.687 472.807 187.971 477.556C338.361 495.975 490.294 498.178 641.155 484.129C653.44 482.982 665.708 481.732 677.959 480.378C681.786 479.958 685.658 480.398 689.292 481.668C692.926 482.938 696.23 485.005 698.962 487.717C701.694 490.429 703.784 493.718 705.08 497.342C706.377 500.967 706.846 504.836 706.453 508.665L702.633 545.797C694.936 620.828 687.239 695.854 679.542 770.874C671.513 849.657 663.431 928.434 655.298 1007.2C653.004 1029.39 650.71 1051.57 648.416 1073.74C646.213 1095.58 645.904 1118.1 641.757 1139.68C635.218 1173.61 612.248 1194.45 578.73 1202.07C548.022 1209.06 516.652 1212.73 485.161 1213.01C450.249 1213.2 415.355 1211.65 380.443 1211.84C343.173 1212.05 297.525 1208.61 268.756 1180.87C243.479 1156.51 239.986 1118.36 236.545 1085.37C231.957 1041.7 227.409 998.039 222.9 954.381L197.607 711.615L181.244 554.538C180.968 551.94 180.693 549.376 180.435 546.76C178.473 528.023 165.207 509.681 144.301 510.627C126.407 511.418 106.069 526.629 108.168 546.76L120.298 663.214L145.385 904.104C152.532 972.528 159.661 1040.96 166.773 1109.41C168.15 1122.52 169.44 1135.67 170.885 1148.78C178.749 1220.43 233.465 1259.04 301.224 1269.91C340.799 1276.28 381.337 1277.59 421.497 1278.24C472.979 1279.07 524.977 1281.05 575.615 1271.72C650.653 1257.95 706.952 1207.85 714.987 1130.13C717.282 1107.69 719.576 1085.25 721.87 1062.8C729.498 988.559 737.115 914.313 744.72 840.061L769.601 597.451L781.009 486.263C781.577 480.749 783.905 475.565 787.649 471.478C791.392 467.391 796.352 464.617 801.794 463.567C823.25 459.386 843.761 452.245 859.023 435.916C883.318 409.918 888.153 376.021 879.567 341.849ZM72.4301 365.835C72.757 365.68 72.1548 368.484 71.8967 369.792C71.8451 367.813 71.9483 366.058 72.4301 365.835ZM74.5121 381.94C74.6842 381.819 75.2003 382.508 75.7337 383.334C74.925 382.576 74.4089 382.009 74.4949 381.94H74.5121ZM76.5597 384.641C77.2996 385.897 77.6953 386.689 76.5597 384.641V384.641ZM80.672 387.979H80.7752C80.7752 388.1 80.9645 388.22 81.0333 388.341C80.9192 388.208 80.7925 388.087 80.6548 387.979H80.672ZM800.796 382.989C793.088 390.319 781.473 393.726 769.996 395.43C641.292 414.529 510.713 424.199 380.597 419.932C287.476 416.749 195.336 406.407 103.144 393.382C94.1102 392.109 84.3197 390.457 78.1082 383.798C66.4078 371.237 72.1548 345.944 75.2003 330.768C77.9878 316.865 83.3218 298.334 99.8572 296.355C125.667 293.327 155.64 304.218 181.175 308.09C211.917 312.781 242.774 316.538 273.745 319.36C405.925 331.405 540.325 329.529 671.92 311.91C695.905 308.686 719.805 304.941 743.619 300.674C764.835 296.871 788.356 289.731 801.175 311.703C809.967 326.673 811.137 346.701 809.778 363.615C809.359 370.984 806.139 377.915 800.779 382.989H800.796Z"}" fill="${"#0D0C22"}"></path></svg>`;
    });
    Bmc_logo_dark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"32"}" height="${"32"}" viewBox="${"0 0 884 1279"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518V297.518Z"}" fill="${"#FFF"}"></path><path d="${"M803.896 388.891L802.916 389.166L803.896 388.891Z"}" fill="${"#FFF"}"></path><path d="${"M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377V297.377Z"}" fill="${"#FFF"}"></path><path d="${"M791.113 297.529H791.244V297.447L791.113 297.529Z"}" fill="${"#FFF"}"></path><path d="${"M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.04C804.702 387.444 803.846 388.016 803.111 388.726V388.726Z"}" fill="${"#FFF"}"></path><path d="${"M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515V299.515Z"}" fill="${"#FFF"}"></path><path d="${"M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z"}" fill="${"#FFF"}"></path><path d="${"M641.187 1144.63C641.187 1143.33 640.551 1143.57 640.705 1148.21C640.705 1147.84 640.86 1147.46 640.929 1147.1C641.015 1146.27 641.084 1145.46 641.187 1144.63Z"}" fill="${"#FFF"}"></path><path d="${"M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z"}" fill="${"#FFF"}"></path><path d="${"M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z"}" fill="${"#FFF"}"></path><path d="${"M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1163.94L247.841 1164.01Z"}" fill="${"#FFF"}"></path><path d="${"M472.623 590.836C426.682 610.503 374.546 632.802 306.976 632.802C278.71 632.746 250.58 628.868 223.353 621.274L270.086 1101.08C271.74 1121.13 280.876 1139.83 295.679 1153.46C310.482 1167.09 329.87 1174.65 349.992 1174.65C349.992 1174.65 416.254 1178.09 438.365 1178.09C462.161 1178.09 533.516 1174.65 533.516 1174.65C553.636 1174.65 573.019 1167.08 587.819 1153.45C602.619 1139.82 611.752 1121.13 613.406 1101.08L663.459 570.876C641.091 563.237 618.516 558.161 593.068 558.161C549.054 558.144 513.591 573.303 472.623 590.836Z"}" fill="${"#FFDD00"}"></path><path d="${"M78.6885 386.132L79.4799 386.872L79.9962 387.182C79.5987 386.787 79.1603 386.435 78.6885 386.132V386.132Z"}" fill="${"#FFF"}"></path><path d="${"M879.567 341.849L872.53 306.352C866.215 274.503 851.882 244.409 819.19 232.898C808.711 229.215 796.821 227.633 788.786 220.01C780.751 212.388 778.376 200.55 776.518 189.572C773.076 169.423 769.842 149.257 766.314 129.143C763.269 111.85 760.86 92.4243 752.928 76.56C742.604 55.2584 721.182 42.8009 699.88 34.559C688.965 30.4844 677.826 27.0375 666.517 24.2352C613.297 10.1947 557.342 5.03277 502.591 2.09047C436.875 -1.53577 370.983 -0.443234 305.422 5.35968C256.625 9.79894 205.229 15.1674 158.858 32.0469C141.91 38.224 124.445 45.6399 111.558 58.7341C95.7448 74.8221 90.5829 99.7026 102.128 119.765C110.336 134.012 124.239 144.078 138.985 150.737C158.192 159.317 178.251 165.846 198.829 170.215C256.126 182.879 315.471 187.851 374.007 189.968C438.887 192.586 503.87 190.464 568.44 183.618C584.408 181.863 600.347 179.758 616.257 177.304C634.995 174.43 647.022 149.928 641.499 132.859C634.891 112.453 617.134 104.538 597.055 107.618C594.095 108.082 591.153 108.512 588.193 108.942L586.06 109.252C579.257 110.113 572.455 110.915 565.653 111.661C551.601 113.175 537.515 114.414 523.394 115.378C491.768 117.58 460.057 118.595 428.363 118.647C397.219 118.647 366.058 117.769 334.983 115.722C320.805 114.793 306.661 113.611 292.552 112.177C286.134 111.506 279.733 110.801 273.333 110.009L267.241 109.235L265.917 109.046L259.602 108.134C246.697 106.189 233.792 103.953 221.025 101.251C219.737 100.965 218.584 100.249 217.758 99.2193C216.932 98.1901 216.482 96.9099 216.482 95.5903C216.482 94.2706 216.932 92.9904 217.758 91.9612C218.584 90.9319 219.737 90.2152 221.025 89.9293H221.266C232.33 87.5721 243.479 85.5589 254.663 83.8038C258.392 83.2188 262.131 82.6453 265.882 82.0832H265.985C272.988 81.6186 280.026 80.3625 286.994 79.5366C347.624 73.2302 408.614 71.0801 469.538 73.1014C499.115 73.9618 528.676 75.6996 558.116 78.6935C564.448 79.3474 570.746 80.0357 577.043 80.8099C579.452 81.1025 581.878 81.4465 584.305 81.7391L589.191 82.4445C603.438 84.5667 617.61 87.1419 631.708 90.1703C652.597 94.7128 679.422 96.1925 688.713 119.077C691.673 126.338 693.015 134.408 694.649 142.03L696.731 151.752C696.786 151.926 696.826 152.105 696.852 152.285C701.773 175.227 706.7 198.169 711.632 221.111C711.994 222.806 712.002 224.557 711.657 226.255C711.312 227.954 710.621 229.562 709.626 230.982C708.632 232.401 707.355 233.6 705.877 234.504C704.398 235.408 702.75 235.997 701.033 236.236H700.895L697.884 236.649L694.908 237.044C685.478 238.272 676.038 239.419 666.586 240.486C647.968 242.608 629.322 244.443 610.648 245.992C573.539 249.077 536.356 251.102 499.098 252.066C480.114 252.57 461.135 252.806 442.162 252.771C366.643 252.712 291.189 248.322 216.173 239.625C208.051 238.662 199.93 237.629 191.808 236.58C198.106 237.389 187.231 235.96 185.029 235.651C179.867 234.928 174.705 234.177 169.543 233.397C152.216 230.798 134.993 227.598 117.7 224.793C96.7944 221.352 76.8005 223.073 57.8906 233.397C42.3685 241.891 29.8055 254.916 21.8776 270.735C13.7217 287.597 11.2956 305.956 7.64786 324.075C4.00009 342.193 -1.67805 361.688 0.472751 380.288C5.10128 420.431 33.165 453.054 73.5313 460.35C111.506 467.232 149.687 472.807 187.971 477.556C338.361 495.975 490.294 498.178 641.155 484.129C653.44 482.982 665.708 481.732 677.959 480.378C681.786 479.958 685.658 480.398 689.292 481.668C692.926 482.938 696.23 485.005 698.962 487.717C701.694 490.429 703.784 493.718 705.08 497.342C706.377 500.967 706.846 504.836 706.453 508.665L702.633 545.797C694.936 620.828 687.239 695.854 679.542 770.874C671.513 849.657 663.431 928.434 655.298 1007.2C653.004 1029.39 650.71 1051.57 648.416 1073.74C646.213 1095.58 645.904 1118.1 641.757 1139.68C635.218 1173.61 612.248 1194.45 578.73 1202.07C548.022 1209.06 516.652 1212.73 485.161 1213.01C450.249 1213.2 415.355 1211.65 380.443 1211.84C343.173 1212.05 297.525 1208.61 268.756 1180.87C243.479 1156.51 239.986 1118.36 236.545 1085.37C231.957 1041.7 227.409 998.039 222.9 954.381L197.607 711.615L181.244 554.538C180.968 551.94 180.693 549.376 180.435 546.76C178.473 528.023 165.207 509.681 144.301 510.627C126.407 511.418 106.069 526.629 108.168 546.76L120.298 663.214L145.385 904.104C152.532 972.528 159.661 1040.96 166.773 1109.41C168.15 1122.52 169.44 1135.67 170.885 1148.78C178.749 1220.43 233.465 1259.04 301.224 1269.91C340.799 1276.28 381.337 1277.59 421.497 1278.24C472.979 1279.07 524.977 1281.05 575.615 1271.72C650.653 1257.95 706.952 1207.85 714.987 1130.13C717.282 1107.69 719.576 1085.25 721.87 1062.8C729.498 988.559 737.115 914.313 744.72 840.061L769.601 597.451L781.009 486.263C781.577 480.749 783.905 475.565 787.649 471.478C791.392 467.391 796.352 464.617 801.794 463.567C823.25 459.386 843.761 452.245 859.023 435.916C883.318 409.918 888.153 376.021 879.567 341.849ZM72.4301 365.835C72.757 365.68 72.1548 368.484 71.8967 369.792C71.8451 367.813 71.9483 366.058 72.4301 365.835ZM74.5121 381.94C74.6842 381.819 75.2003 382.508 75.7337 383.334C74.925 382.576 74.4089 382.009 74.4949 381.94H74.5121ZM76.5597 384.641C77.2996 385.897 77.6953 386.689 76.5597 384.641V384.641ZM80.672 387.979H80.7752C80.7752 388.1 80.9645 388.22 81.0333 388.341C80.9192 388.208 80.7925 388.087 80.6548 387.979H80.672ZM800.796 382.989C793.088 390.319 781.473 393.726 769.996 395.43C641.292 414.529 510.713 424.199 380.597 419.932C287.476 416.749 195.336 406.407 103.144 393.382C94.1102 392.109 84.3197 390.457 78.1082 383.798C66.4078 371.237 72.1548 345.944 75.2003 330.768C77.9878 316.865 83.3218 298.334 99.8572 296.355C125.667 293.327 155.64 304.218 181.175 308.09C211.917 312.781 242.774 316.538 273.745 319.36C405.925 331.405 540.325 329.529 671.92 311.91C695.905 308.686 719.805 304.941 743.619 300.674C764.835 296.871 788.356 289.731 801.175 311.703C809.967 326.673 811.137 346.701 809.778 363.615C809.359 370.984 806.139 377.915 800.779 382.989H800.796Z"}" fill="${"#FFF"}"></path></svg>`;
    });
    Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"18"}" height="${"18"}" viewBox="${"0 0 18 18"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M6.75 0C2.8125 1.0125 0 4.6125 0 8.8875C0 13.95 4.05 18 9.1125 18C13.3875 18 16.875 15.1875 18 11.25C11.1375 13.1625 4.8375 6.8625 6.75 0Z"}" fill="${"#546BFB"}"></path></svg>`;
    });
    Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"18"}" height="${"18"}" viewBox="${"0 0 18 18"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M10.125 0H7.875V2.25H10.125V0Z"}" fill="${"#7D8FFF"}"></path><path d="${"M16.0809 3.43302L14.4904 1.84137L12.8987 3.43189L14.4892 5.02354L16.0809 3.43302Z"}" fill="${"#7D8FFF"}"></path><path d="${"M18 7.875H15.75V10.125H18V7.875Z"}" fill="${"#7D8FFF"}"></path><path d="${"M12.9772 14.6468L14.5688 16.2374L16.1594 14.6457L14.5677 13.0552L12.9772 14.6468Z"}" fill="${"#7D8FFF"}"></path><path d="${"M10.125 15.75H7.875V18H10.125V15.75Z"}" fill="${"#7D8FFF"}"></path><path d="${"M1.76189 14.5671L3.35242 16.1588L4.94407 14.5682L3.35354 12.9766L1.76189 14.5671Z"}" fill="${"#7D8FFF"}"></path><path d="${"M2.25 7.875H0V10.125H2.25V7.875Z"}" fill="${"#7D8FFF"}"></path><path d="${"M5.02268 3.51039L3.43103 1.91986L1.84051 3.51151L3.43216 5.10204L5.02268 3.51039Z"}" fill="${"#7D8FFF"}"></path><path d="${"M9 4.5C6.525 4.5 4.5 6.525 4.5 9C4.5 11.475 6.525 13.5 9 13.5C11.475 13.5 13.5 11.475 13.5 9C13.5 6.525 11.475 4.5 9 4.5Z"}" fill="${"#546BFB"}"></path></svg>`;
    });
    css$6 = {
      code: ".toggle.svelte-1f1re3{border-radius:10px;width:175px;box-sizing:border-box;display:flex}.toggle.svelte-1f1re3:hover{cursor:pointer}.light.svelte-1f1re3{background:linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);border:1px solid rgba(0, 0, 0, 0.04);box-shadow:inset 0 5px 10px rgba(0, 0, 0, 0.1)}.dark.svelte-1f1re3{background:rgba(255, 255, 255, 0.1);border:1px solid rgba(255, 255, 255, 0.1);box-shadow:inset 0 5px 10px rgba(255, 255, 255, 0.1)}.toggle-switch.svelte-1f1re3{margin:2px;padding:15px 35px;border-radius:8px;background-color:var(--color-white);transition:0.8s cubic-bezier(0.2, 0.8, 0.2, 1);box-shadow:0 4px 10px rgba(0, 0, 0, 0.1)}.left.svelte-1f1re3{transform:translateX(0%)}.right.svelte-1f1re3{transform:translateX(90%)}",
      map: null
    };
    ThemeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $isDarkMode, $$unsubscribe_isDarkMode;
      let $isJavaScriptDisabled, $$unsubscribe_isJavaScriptDisabled;
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      $$unsubscribe_isJavaScriptDisabled = subscribe(isJavaScriptDisabled, (value) => $isJavaScriptDisabled = value);
      $$result.css.add(css$6);
      $$unsubscribe_isDarkMode();
      $$unsubscribe_isJavaScriptDisabled();
      return `${!$isJavaScriptDisabled ? `<div class="${[
        "toggle svelte-1f1re3",
        ($isDarkMode ? "dark" : "") + " " + (!$isDarkMode ? "light" : "")
      ].join(" ").trim()}"><div class="${[
        "toggle-switch svelte-1f1re3",
        ($isDarkMode ? "right" : "") + " " + (!$isDarkMode ? "left" : "")
      ].join(" ").trim()}">${$isDarkMode ? `${validate_component(Moon, "Moon").$$render($$result, {}, {}, {})}` : `${validate_component(Sun, "Sun").$$render($$result, {}, {}, {})}`}</div></div>` : ``}`;
    });
    css$5 = {
      code: "header.svelte-15ha5g3.svelte-15ha5g3{background-color:var(--color-white);display:flex;justify-content:center;align-items:center;flex-direction:column}@media only screen and (min-width: 1280px){header.svelte-15ha5g3.svelte-15ha5g3{height:4em;border-bottom:1.5px solid var(--color-bg);box-shadow:0 1px 4px rgba(0, 0, 0, 0.05);justify-content:space-between;padding:0 2em;flex-direction:row;position:sticky;top:0;z-index:2}}img.svelte-15ha5g3.svelte-15ha5g3{margin-top:1em;width:10em;left:0}@media only screen and (min-width: 1280px){img.svelte-15ha5g3.svelte-15ha5g3{margin:0}}.icon-container.svelte-15ha5g3.svelte-15ha5g3{display:none}@media only screen and (min-width: 1280px){.icon-container.svelte-15ha5g3.svelte-15ha5g3{display:flex;flex-direction:row;gap:1.5em}}@media only screen and (min-width: 1280px){.icon-container.svelte-15ha5g3 .github.svelte-15ha5g3,.icon-container.svelte-15ha5g3 .bmc.svelte-15ha5g3{width:2em;height:2em}.icon-container.svelte-15ha5g3 .github.svelte-15ha5g3:hover,.icon-container.svelte-15ha5g3 .bmc.svelte-15ha5g3:hover{transform:scale(1.1)}}.theme-switch-desktop.svelte-15ha5g3.svelte-15ha5g3{display:none}@media only screen and (min-width: 1280px){.theme-switch-desktop.svelte-15ha5g3.svelte-15ha5g3{display:block;position:absolute;right:7.5%;transform:scale(0.75);display:flex;justify-content:center;align-items:center}}",
      map: null
    };
    Topbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $isDarkMode, $$unsubscribe_isDarkMode;
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      $$result.css.add(css$5);
      $$unsubscribe_isDarkMode();
      return `<header class="${"svelte-15ha5g3"}"><a href="${"/"}" title="${"home"}">${$isDarkMode ? `<picture><source type="${"image/webp"}" srcset="${"/ictmethods-dark.webp"}">
				<source type="${"image/png"}" srcset="${"/ictmethods-dark.png"}">
				<img src="${"/ictmethods-dark.png"}" alt="${"logo"}" width="${"160"}" height="${"40"}" class="${"svelte-15ha5g3"}"></picture>` : `<picture><source type="${"image/webp"}" srcset="${"/ictmethods.webp"}">
				<source type="${"image/png"}" srcset="${"/ictmethods.png"}">
				<img src="${"/ictmethods.png"}" alt="${"logo"}" width="${"160"}" height="${"40"}" class="${"svelte-15ha5g3"}"></picture>`}</a>
	<div class="${"theme-switch-desktop svelte-15ha5g3"}">${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})}</div>
	${validate_component(SearchField, "SearchField").$$render($$result, {}, {}, {})}
	<div class="${"icon-container svelte-15ha5g3"}"><a href="${"https://github.com/jochemvogel/ictmethods.nl"}" target="${"_blank"}" title="${"github"}" class="${"github svelte-15ha5g3"}">${$isDarkMode ? `${validate_component(Github_dark, "GithubDark").$$render($$result, {}, {}, {})}` : `${validate_component(Github, "Github").$$render($$result, {}, {}, {})}`}</a>

		<a href="${"https://buymeacoffee.com/jochem"}" target="${"_blank"}" title="${"buy me a coffee"}" class="${"bmc svelte-15ha5g3"}">${$isDarkMode ? `${validate_component(Bmc_logo_dark, "BmcLogoDark").$$render($$result, {}, {}, {})}` : `${validate_component(Bmc_logo, "BmcLogo").$$render($$result, {}, {}, {})}`}</a></div>
</header>`;
    });
    css$4 = {
      code: "footer.svelte-7o4gaq.svelte-7o4gaq{padding-bottom:1em;text-align:center;letter-spacing:0.25px;word-spacing:0.5px;font-size:1.15em}@media only screen and (min-width: 1280px){footer.svelte-7o4gaq.svelte-7o4gaq{display:none}}footer.svelte-7o4gaq a.svelte-7o4gaq{color:var(--color-black);text-decoration:none;font-weight:bold}footer.svelte-7o4gaq a.svelte-7o4gaq:hover{text-decoration:underline}",
      map: null
    };
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$4);
      return `<footer class="${"svelte-7o4gaq"}"><p>Made in \u{1F1F3}\u{1F1F1} with \u{1F327} by <a href="${"https://jochemvogel.com"}" target="${"_blank"}" class="${"svelte-7o4gaq"}">Jochem</a></p>
</footer>`;
    });
    Person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M14.4998 10.9692C16.4731 10.7233 18.0001 9.04002 18.0001 7.0001C18.0001 4.96018 16.4731 3.27692 14.4998 3.03101C15.4335 4.08875 16.0001 5.47826 16.0001 7.0001C16.0001 8.52194 15.4335 9.91145 14.4998 10.9692Z"}" fill="${"#808191"}"></path><path d="${"M20 20.0001C20 20.5524 20.4477 21.0001 21 21.0001C21.5523 21.0001 22 20.5524 22 20.0001V18.0001C22 15.34 19.9227 13.1651 17.3018 13.009C18.3539 13.9408 19.1587 15.1454 19.6055 16.5121C19.8565 16.9506 20 17.4586 20 18.0001V20.0001Z"}" fill="${"#808191"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M7 15C5.34315 15 4 16.3431 4 18V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18C2 15.2386 4.23858 13 7 13H13C15.7614 13 18 15.2386 18 18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18C16 16.3431 14.6569 15 13 15H7Z"}" fill="${"#808191"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7Z"}" fill="${"#808191"}"></path></svg>`;
    });
    Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M8 5H6C5.44772 5 5 5.44772 5 6V8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8V6C9 5.44772 8.55228 5 8 5ZM6 3C4.34315 3 3 4.34315 3 6V8C3 9.65685 4.34315 11 6 11H8C9.65685 11 11 9.65685 11 8V6C11 4.34315 9.65685 3 8 3H6Z"}" fill="${"#808191"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M8 15H6C5.44772 15 5 15.4477 5 16V18C5 18.5523 5.44772 19 6 19H8C8.55228 19 9 18.5523 9 18V16C9 15.4477 8.55228 15 8 15ZM6 13C4.34315 13 3 14.3431 3 16V18C3 19.6569 4.34315 21 6 21H8C9.65685 21 11 19.6569 11 18V16C11 14.3431 9.65685 13 8 13H6Z"}" fill="${"#808191"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M18 5H16C15.4477 5 15 5.44772 15 6V8C15 8.55228 15.4477 9 16 9H18C18.5523 9 19 8.55228 19 8V6C19 5.44772 18.5523 5 18 5ZM16 3C14.3431 3 13 4.34315 13 6V8C13 9.65685 14.3431 11 16 11H18C19.6569 11 21 9.65685 21 8V6C21 4.34315 19.6569 3 18 3H16Z"}" fill="${"#808191"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M18 15H16C15.4477 15 15 15.4477 15 16V18C15 18.5523 15.4477 19 16 19H18C18.5523 19 19 18.5523 19 18V16C19 15.4477 18.5523 15 18 15ZM16 13C14.3431 13 13 14.3431 13 16V18C13 19.6569 14.3431 21 16 21H18C19.6569 21 21 19.6569 21 18V16C21 14.3431 19.6569 13 18 13H16Z"}" fill="${"#808191"}"></path></svg>`;
    });
    Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M12.9457 7.22016L12.0001 4.5L11.0546 7.22016C10.5053 8.80044 9.03054 9.87192 7.35786 9.90601L4.47865 9.96468L6.77349 11.7045C8.10669 12.7153 8.67 14.449 8.18553 16.0503L7.35161 18.8067L9.71542 17.1618C11.0887 16.2062 12.9116 16.2062 14.2849 17.1618L16.6487 18.8067L15.8148 16.0503C15.3303 14.449 15.8936 12.7153 17.2268 11.7045L19.5216 9.96468L16.6424 9.90601C14.9697 9.87192 13.495 8.80044 12.9457 7.22016ZM13.8893 3.84334C13.2667 2.05222 10.7336 2.05222 10.111 3.84334L9.16549 6.5635C8.89084 7.35364 8.15345 7.88938 7.31711 7.90642L4.4379 7.9651C2.54205 8.00373 1.7593 10.4128 3.27036 11.5584L5.5652 13.2983C6.2318 13.8036 6.51345 14.6705 6.27122 15.4712L5.4373 18.2276C4.88819 20.0426 6.93749 21.5315 8.49397 20.4484L10.8578 18.8035C11.5444 18.3257 12.4559 18.3257 13.1425 18.8035L15.5063 20.4484C17.0628 21.5315 19.1121 20.0426 18.563 18.2276L17.7291 15.4712C17.4868 14.6705 17.7685 13.8036 18.4351 13.2983L20.7299 11.5584C22.241 10.4128 21.4582 8.00373 19.5624 7.9651L16.6832 7.90642C15.8468 7.88938 15.1094 7.35364 14.8348 6.5635L13.8893 3.84334Z"}" fill="${"#808191"}"></path></svg>`;
    });
    css$3 = {
      code: ".sidebar-icon.svelte-15n1nmk{display:none}@media only screen and (min-width: 1280px){.sidebar-icon.svelte-15n1nmk{display:flex}}",
      map: null
    };
    SidebarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { icon } = $$props;
      if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
        $$bindings.icon(icon);
      $$result.css.add(css$3);
      return `<div class="${"sidebar-icon svelte-15n1nmk"}">${icon === "dashboard" ? `${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}` : `${icon === "person" ? `${validate_component(Person, "Person").$$render($$result, {}, {}, {})}` : `${icon === "star" ? `${validate_component(Star, "Star").$$render($$result, {}, {}, {})}` : ``}`}`}
</div>`;
    });
    css$2 = {
      code: ".hamburger.svelte-1xsdavt{position:fixed;height:1.25em;width:1.25em;background-color:var(--color-black);opacity:0.9;bottom:2.5%;right:2.5%;padding:0.75em;border-radius:50%;color:var(--color-white);font-size:3em;display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-out;z-index:2;border:none}@media only screen and (min-width: 1280px){.hamburger.svelte-1xsdavt{display:none}}.hamburger.svelte-1xsdavt:active{transform:scale(0.9)}",
      map: null
    };
    MobileHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $isMenuOpen, $$unsubscribe_isMenuOpen;
      $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
      $$result.css.add(css$2);
      $$unsubscribe_isMenuOpen();
      return `<button class="${"hamburger svelte-1xsdavt"}">${escape($isMenuOpen ? "\u2715" : "=")}</button>`;
    });
    css$1 = {
      code: "nav.svelte-3ubrcx.svelte-3ubrcx{display:none}@media only screen and (min-width: 1280px){nav.svelte-3ubrcx.svelte-3ubrcx{display:block;min-width:15em;max-width:17.5em;min-height:87vh;background-color:var(--color-white);padding:2em 0;position:relative}}nav.visible.svelte-3ubrcx.svelte-3ubrcx{position:fixed;top:0;background-color:var(--color-bg);left:0;bottom:0;right:0;opacity:0.99;height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;width:100%;overflow-y:scroll;z-index:2}nav.svelte-3ubrcx ul.svelte-3ubrcx{display:flex;flex-direction:column;align-items:center}@media only screen and (min-width: 1280px){nav.svelte-3ubrcx ul.svelte-3ubrcx{align-items:stretch}}nav.svelte-3ubrcx ul li.svelte-3ubrcx{padding:0 1em}nav.svelte-3ubrcx ul li a.svelte-3ubrcx{font-size:1.75em;text-decoration:none;color:var(--color-text-secondary);font-weight:700;display:flex;align-items:center;gap:1em;padding:0.25em;border-radius:0.75em}@media only screen and (min-width: 1280px){nav.svelte-3ubrcx ul li a.svelte-3ubrcx{font-size:1em;padding:1em 2em;letter-spacing:0.5px}}nav.svelte-3ubrcx .active.svelte-3ubrcx{color:var(--color-black)}@media only screen and (min-width: 1280px){nav.svelte-3ubrcx .active.svelte-3ubrcx{color:var(--color-white);background-color:var(--color-primary)}}p.svelte-3ubrcx.svelte-3ubrcx{display:none}@media only screen and (min-width: 1280px){p.svelte-3ubrcx.svelte-3ubrcx{position:absolute;display:flex;justify-content:center;align-items:center;bottom:0;font-size:1.1em;width:100%}p.svelte-3ubrcx a.svelte-3ubrcx{color:var(--color-black);font-weight:bold;text-decoration:none}p.svelte-3ubrcx a.svelte-3ubrcx:hover{text-decoration:underline}}.theme-switch-mobile.svelte-3ubrcx.svelte-3ubrcx{transform:scale(0.9);margin-top:2em}@media only screen and (min-width: 1280px){.theme-switch-mobile.svelte-3ubrcx.svelte-3ubrcx{display:none}}",
      map: null
    };
    Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let pathName;
      let categoryName;
      let checkName;
      let $page, $$unsubscribe_page;
      let $isMenuOpen, $$unsubscribe_isMenuOpen;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
      $$result.css.add(css$1);
      pathName = $page.url.pathname;
      categoryName = $page.url.pathname.substring(1);
      checkName = (route) => route.category == categoryName;
      {
        if (categoryRoutes.some(checkName)) {
          pathName = "/";
        }
      }
      $$unsubscribe_page();
      $$unsubscribe_isMenuOpen();
      return `<nav class="${["svelte-3ubrcx", $isMenuOpen ? "visible" : ""].join(" ").trim()}"><ul class="${"non-style svelte-3ubrcx"}">${each(sidebarRoutes, (route) => {
        return `<li class="${"svelte-3ubrcx"}"><a${add_attribute("href", route.path, 0)} class="${["svelte-3ubrcx", pathName === route.path ? "active" : ""].join(" ").trim()}">${validate_component(SidebarIcon, "SidebarIcon").$$render($$result, { icon: route.icon }, {}, {})}
					${escape(route.title)}</a>
			</li>`;
      })}
		<div class="${"theme-switch-mobile svelte-3ubrcx"}">${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})}</div></ul>
	<p class="${"svelte-3ubrcx"}">Made by\xA0
		<a href="${"https://jochemvogel.com"}" target="${"_blank"}" class="${"svelte-3ubrcx"}">Jochem</a></p></nav>

${validate_component(MobileHamburger, "MobileHamburger").$$render($$result, {}, {}, {})}`;
    });
    css = {
      code: ".root.svelte-1mxhgab{background-color:var(--color-bg);margin:0;padding:0;min-height:100vh}main.svelte-1mxhgab{padding:0.75em}@media only screen and (min-width: 768px){main.svelte-1mxhgab{padding:2em}}@media only screen and (min-width: 1280px){main.svelte-1mxhgab{padding:2.5em;min-height:83vh;max-width:75em}}@media only screen and (min-width: 1280px){.content.svelte-1mxhgab{display:flex}}",
      map: null
    };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_allMethods;
      $$unsubscribe_allMethods = subscribe(allMethods, (value) => value);
      $$result.css.add(css);
      $$unsubscribe_allMethods();
      return `<div class="${"root svelte-1mxhgab"}">${validate_component(Topbar, "Topbar").$$render($$result, {}, {}, {})}
	<div class="${"content svelte-1mxhgab"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}
		<main class="${"svelte-1mxhgab"}">${slots.default ? slots.default({}) : ``}</main></div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  shared: () => layout_ts_exports,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_ts();
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-c3e8d848.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-c3e8d848.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/index-200b2f94.js", "_app/immutable/chunks/index-ac47b0ac.js", "_app/immutable/chunks/routes-0654de87.js", "_app/immutable/chunks/stores-207da6c2.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/navigation-016cb094.js", "_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js", "_app/immutable/chunks/_layout-1daba58d.js"];
    stylesheets = ["_app/immutable/assets/_layout-3764f0a0.css"];
  }
});

// .svelte-kit/output/server/entries/pages/_error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_error.svelte.js"() {
    init_chunks();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `${$$result.head += `${$$result.title = `<title>${escape($page.status)} - Something went wrong</title>`, ""}`, ""}

${$page.status === 404 ? `<iframe src="${"https://giphy.com/embed/m12EDnP8xGLy8"}" width="${"240"}" height="${"192"}" frameborder="${"0"}" allowfullscreen title="${"not found giphy"}"></iframe>

	<h1>404 - This page doesn&#39;t exist</h1>
	<p>We&#39;re sorry, but we can&#39;t find it. Are you sure you are on the right page?</p>

	<a href="${"/"}">Back to home</a>` : `<iframe src="${"https://giphy.com/embed/WpaVhEcp3Qo2TjwyI1"}" width="${"240"}" height="${"200"}" frameborder="${"0"}" allowfullscreen title="${"error giphy"}"></iframe>
	<h1>${escape($page.status)} - Whoopsie...</h1>

	<p>We&#39;re so sorry. Something went wrong. PANIC! But jokes aside, I hope the following error will
		make it more clear for you:
	</p>

	<p>${escape($page.error.message)}</p>

	${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}

	<p>If not, please contact us via GitHub and send us the error stack</p>
	<p>For now you can go back to <a href="${"/"}">home</a>.</p>`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/pages/_error.svelte-a9eb7513.js";
    imports2 = ["_app/immutable/components/pages/_error.svelte-a9eb7513.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/stores-207da6c2.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/index-ac47b0ac.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_category_category_/_method_/_error.svelte.js
var error_svelte_exports2 = {};
__export(error_svelte_exports2, {
  default: () => Error3
});
var Error3;
var init_error_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/_category_category_/_method_/_error.svelte.js"() {
    init_chunks();
    init_stores();
    Error3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `${$$result.head += `${$$result.title = `<title>${escape($page.status)} - Something went wrong</title>`, ""}`, ""}

${$page.status === 404 ? `<iframe src="${"https://giphy.com/embed/m12EDnP8xGLy8"}" width="${"240"}" height="${"192"}" frameborder="${"0"}" allowfullscreen title="${"not found giphy"}"></iframe>

	<h1>404 - The method &#39;${escape($page.params.method)}&#39; does not exist</h1>
	<p>We&#39;re sorry, but we can&#39;t find it. Are you sure you are looking for the right method?</p>

	<a href="${"/"}">Back to home</a>` : `<iframe src="${"https://giphy.com/embed/WpaVhEcp3Qo2TjwyI1"}" width="${"240"}" height="${"200"}" frameborder="${"0"}" allowfullscreen title="${"error giphy"}"></iframe>
	<h1>${escape($page.status)} - Whoopsie...</h1>

	<p>We&#39;re so sorry. Something went wrong. PANIC! But jokes aside, I hope the following error will
		make it more clear for you:
	</p>

	<p>${escape($page.error.message)}</p>

	${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}

	<p>If not, please contact us via GitHub and send us the error stack</p>
	<p>For now you can go back to <a href="${"/"}">home</a>.</p>`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_error_svelte2(), error_svelte_exports2))).default;
    file3 = "_app/immutable/components/pages/_category_category_/_method_/_error.svelte-60c79906.js";
    imports3 = ["_app/immutable/components/pages/_category_category_/_method_/_error.svelte-60c79906.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/stores-207da6c2.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/index-ac47b0ac.js"];
    stylesheets3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
var load;
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.ts.js"() {
    init_index2();
    init_index4();
    load = async ({ fetch: fetch2 }) => {
      const res = await fetch2("methods.json");
      if (res.ok) {
        const result = await res.json();
        const methodsArray = result.methodsArray;
        allMethods.set(methodsArray);
        return {
          methodsArray
        };
      }
      const { message } = await res.json();
      throw error(500, `[+page.ts]: ${message} `);
    };
  }
});

// .svelte-kit/output/server/chunks/MethodList.js
function paginate(items, pageSize, currentPage) {
  return items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
}
function generateNavigationOptions(totalItems, pageSize, currentPage, limit, showStepOptions = false) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const limitThreshold = getLimitThreshold(limit);
  const limited = limit && totalPages > limitThreshold;
  const options = limited ? generateLimitedOptions(totalPages, limit, currentPage) : generateUnlimitedOptions(totalPages);
  return showStepOptions ? addStepOptions(options, currentPage, totalPages) : options;
}
function generateUnlimitedOptions(totalPages) {
  return new Array(totalPages).fill(null).map((value, index11) => ({
    type: "number",
    value: index11 + 1
  }));
}
function generateLimitedOptions(totalPages, limit, currentPage) {
  const boundarySize = limit * 2 + 2;
  const firstBoundary = 1 + boundarySize;
  const lastBoundary = totalPages - boundarySize;
  const totalShownPages = firstBoundary + 2;
  if (currentPage <= firstBoundary - limit) {
    return Array(totalShownPages).fill(null).map((value, index11) => {
      if (index11 === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index11 === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: firstBoundary + 1
        };
      }
      return {
        type: "number",
        value: index11 + 1
      };
    });
  } else if (currentPage >= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((value, index11) => {
      if (index11 === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index11 === 1) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: lastBoundary - 1
        };
      }
      return {
        type: "number",
        value: lastBoundary + index11 - 2
      };
    });
  } else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((value, index11) => {
      if (index11 === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index11 === 1) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: currentPage - limit + (index11 - 2)
        };
      } else if (index11 === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index11 === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: currentPage + limit + 1
        };
      }
      return {
        type: "number",
        value: currentPage - limit + (index11 - 2)
      };
    });
  }
}
function addStepOptions(options, currentPage, totalPages) {
  return [
    {
      type: "symbol",
      symbol: PREVIOUS_PAGE,
      value: currentPage <= 1 ? 1 : currentPage - 1
    },
    ...options,
    {
      type: "symbol",
      symbol: NEXT_PAGE,
      value: currentPage >= totalPages ? totalPages : currentPage + 1
    }
  ];
}
function getLimitThreshold(limit) {
  const maximumUnlimitedPages = 3;
  const numberOfBoundaryPages = 2;
  return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
var PREVIOUS_PAGE, NEXT_PAGE, ELLIPSIS, css$52, PaginationNav, css$42, DarkPaginationNav, css$32, LightPaginationNav, InfoIcon, css$22, Tag, css$12, MethodCard, css2, MethodList;
var init_MethodList = __esm({
  ".svelte-kit/output/server/chunks/MethodList.js"() {
    init_chunks();
    init_index4();
    PREVIOUS_PAGE = "PREVIOUS_PAGE";
    NEXT_PAGE = "NEXT_PAGE";
    ELLIPSIS = "ELLIPSIS";
    css$52 = {
      code: ".disabled.svelte-1w3qgtr{opacity:0.33;cursor:not-allowed !important}.disabled.svelte-1w3qgtr:hover{cursor:not-allowed !important;background-color:transparent !important}",
      map: null
    };
    PaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let options;
      let totalPages;
      createEventDispatcher();
      let { totalItems = 0 } = $$props;
      let { pageSize = 1 } = $$props;
      let { currentPage = 1 } = $$props;
      let { limit = 0 } = $$props;
      let { showStepOptions = false } = $$props;
      if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
        $$bindings.totalItems(totalItems);
      if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
        $$bindings.pageSize(pageSize);
      if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
        $$bindings.currentPage(currentPage);
      if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
        $$bindings.limit(limit);
      if ($$props.showStepOptions === void 0 && $$bindings.showStepOptions && showStepOptions !== void 0)
        $$bindings.showStepOptions(showStepOptions);
      $$result.css.add(css$52);
      options = generateNavigationOptions(totalItems, pageSize, currentPage, limit, showStepOptions);
      totalPages = Math.ceil(totalItems / pageSize);
      return `<div class="${"pagination-nav"}">${each(options, (option) => {
        return `<span class="${[
          "option svelte-1w3qgtr",
          (option.type === "number" ? "number" : "") + " " + (option.type === "symbol" && option.symbol === PREVIOUS_PAGE ? "prev" : "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE ? "next" : "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE && currentPage >= totalPages || option.type === "symbol" && option.symbol === PREVIOUS_PAGE && currentPage <= 1 ? "disabled" : "") + " " + (option.type === "symbol" && option.symbol === ELLIPSIS ? "ellipsis" : "") + " " + (option.type === "number" && option.value === currentPage ? "active" : "")
        ].join(" ").trim()}">${option.type === "number" ? `${slots.number ? slots.number({ value: option.value }) : `
					<span>${escape(option.value)}</span>
				`}` : `${option.type === "symbol" && option.symbol === ELLIPSIS ? `${slots.ellipsis ? slots.ellipsis({}) : `
					<span>...</span>
				`}` : `${option.type === "symbol" && option.symbol === PREVIOUS_PAGE ? `${slots.prev ? slots.prev({}) : `
					<svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}"></path></svg>
				`}` : `${option.type === "symbol" && option.symbol === NEXT_PAGE ? `${slots.next ? slots.next({}) : `
					<svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}"></path></svg>
				`}` : ``}`}`}`}
		</span>`;
      })}
</div>`;
    });
    css$42 = {
      code: ".dark-pagination-nav.svelte-x3jtwl .pagination-nav{display:flex;justify-content:center;background:hsl(200, 80%, 5%);border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.3)}.dark-pagination-nav.svelte-x3jtwl .option{padding:10px;display:flex;align-items:center;justify-content:center;transition:0.2s all ease-out;user-select:none;color:hsl(200, 90%, 90%)}.dark-pagination-nav.svelte-x3jtwl .option svg path{fill:hsl(200, 90%, 90%)}.dark-pagination-nav.svelte-x3jtwl .option:first-child{border-radius:3px 0 0 3px}.dark-pagination-nav.svelte-x3jtwl .option:last-child{border-radius:0 3px 3px 0}.dark-pagination-nav.svelte-x3jtwl .option.number,.dark-pagination-nav.svelte-x3jtwl .option.ellipsis{padding:10px 15px}.dark-pagination-nav.svelte-x3jtwl .option:hover{background:#000;cursor:pointer}.dark-pagination-nav.svelte-x3jtwl .option.active{color:hsl(200, 100%, 50%)}",
      map: null
    };
    DarkPaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$42);
      return `<div class="${"dark-pagination-nav svelte-x3jtwl"}">${validate_component(PaginationNav, "PaginationNav").$$render($$result, Object.assign($$props), {}, {})}
</div>`;
    });
    css$32 = {
      code: ".light-pagination-nav.svelte-10dhm85 .pagination-nav{display:flex;justify-content:center;background:#fff;border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.3)}.light-pagination-nav.svelte-10dhm85 .option{padding:10px;display:flex;align-items:center;justify-content:center;transition:0.2s all ease-out;user-select:none;color:hsl(200, 90%, 10%)}.light-pagination-nav.svelte-10dhm85 .option.number,.light-pagination-nav.svelte-10dhm85 .option.ellipsis{padding:10px 15px}.light-pagination-nav.svelte-10dhm85 .option:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}.light-pagination-nav.svelte-10dhm85 .option.active{color:hsl(200, 70%, 50%)}",
      map: null
    };
    LightPaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$32);
      return `<div class="${"light-pagination-nav svelte-10dhm85"}">${validate_component(PaginationNav, "PaginationNav").$$render($$result, Object.assign($$props), {}, {})}
</div>`;
    });
    InfoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" width="${"18"}" height="${"18"}" viewBox="${"0 0 24 24"}" style="${"fill:#4558e8"}"><path d="${"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"}"></path></svg>`;
    });
    css$22 = {
      code: '.tag.svelte-rrx04f.svelte-rrx04f{color:var(--color-primary);border:1px solid var(--color-primary);width:max-content;padding:0.33em 1em;font-size:0.9em;border-radius:1em;text-transform:uppercase;margin:0.25em 0.5em;margin-left:0;position:relative;display:flex;justify-content:center;align-items:center;gap:0.25em}@media only screen and (min-width: 1280px){.tag.svelte-rrx04f.svelte-rrx04f{font-size:0.8em}}.tag-tooltip.svelte-rrx04f.svelte-rrx04f{display:none}@media only screen and (min-width: 1280px){.tag-tooltip.svelte-rrx04f.svelte-rrx04f{text-transform:none;visibility:hidden;position:absolute;background-color:var(--color-tooltip-bg);color:var(--color-white);width:max-content;max-width:15em;padding:0.5em 1.5em;height:max-content;right:50%;transform:translateX(50%);top:140%;display:flex;justify-content:center;align-items:center;text-align:center;font-size:1.15em;border-radius:0.5em}}@media only screen and (min-width: 1280px){.tag.svelte-rrx04f:hover .tag-tooltip.svelte-rrx04f{visibility:visible;cursor:not-allowed}.tag.svelte-rrx04f:hover .tag-tooltip.svelte-rrx04f::after{content:"";position:absolute;top:-60%;left:50%;margin-left:-5px;border-width:0.75em;border-style:solid;border-color:transparent transparent var(--color-tooltip-bg) transparent}}.info.svelte-rrx04f.svelte-rrx04f{display:none}@media only screen and (min-width: 1280px){.info.svelte-rrx04f.svelte-rrx04f{display:flex}}',
      map: null
    };
    Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { value } = $$props;
      let { tooltipText } = $$props;
      if ($$props.value === void 0 && $$bindings.value && value !== void 0)
        $$bindings.value(value);
      if ($$props.tooltipText === void 0 && $$bindings.tooltipText && tooltipText !== void 0)
        $$bindings.tooltipText(tooltipText);
      $$result.css.add(css$22);
      return `<span class="${"tag svelte-rrx04f"}">${escape(value)}
	<div class="${"info svelte-rrx04f"}">${validate_component(InfoIcon, "InfoIcon").$$render($$result, {}, {}, {})}</div>
	${tooltipText ? `<span class="${"tag-tooltip svelte-rrx04f"}">${escape(tooltipText)}</span>` : ``}
</span>`;
    });
    css$12 = {
      code: "article.svelte-19k830w.svelte-19k830w{background-color:var(--color-white);margin:0.5em 0;padding:2em;border-radius:1.5em}@media only screen and (min-width: 1280px){article.svelte-19k830w.svelte-19k830w{width:60rem;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;height:11.25rem}article.svelte-19k830w.svelte-19k830w:hover{transform:scale(1.01);box-shadow:0 1px 8px rgba(0, 0, 0, 0.1)}}@media only screen and (min-width: 1400px){article.svelte-19k830w.svelte-19k830w{width:67.5rem}}@media only screen and (min-width: 1600px){article.svelte-19k830w.svelte-19k830w{width:70rem}}h1.svelte-19k830w.svelte-19k830w{font-weight:500;margin:0.2em 0;font-size:1.1em;width:10em;color:var(--color-black)}@media only screen and (min-width: 1280px){h1.svelte-19k830w.svelte-19k830w{font-size:1em}}h2.svelte-19k830w.svelte-19k830w{color:var(--color-primary);font-size:1em;font-weight:normal;line-height:0;text-transform:capitalize}@media only screen and (min-width: 1280px){h2.svelte-19k830w.svelte-19k830w{font-size:0.9em}}@media only screen and (min-width: 1280px){button.svelte-19k830w.svelte-19k830w{margin-left:2em}}.card-heading.svelte-19k830w.svelte-19k830w{display:flex;align-items:center;gap:1em;margin-bottom:1.5em}@media only screen and (min-width: 1280px){.card-heading.svelte-19k830w.svelte-19k830w{margin-bottom:0}}.card-heading__text.svelte-19k830w.svelte-19k830w{display:flex;flex-direction:column-reverse;max-width:50%}.card-heading__img.svelte-19k830w img.svelte-19k830w{height:5em;width:5em;border-radius:1em;object-fit:cover;background-color:#eee}.card-content__heading.svelte-19k830w.svelte-19k830w{font-weight:700;line-height:0}@media only screen and (min-width: 1280px){.card-content__body.svelte-19k830w.svelte-19k830w{width:32.5em}}@media only screen and (min-width: 1600px){.card-content__body.svelte-19k830w.svelte-19k830w{width:40em}}.tag-container.svelte-19k830w.svelte-19k830w{display:flex;flex-wrap:wrap}@media only screen and (min-width: 1280px){.tag-container.svelte-19k830w.svelte-19k830w{display:flex}}.more-info.svelte-19k830w.svelte-19k830w{display:none}@media only screen and (min-width: 1280px){.more-info.svelte-19k830w.svelte-19k830w{display:flex}}",
      map: null
    };
    MethodCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { method } = $$props;
      if ($$props.method === void 0 && $$bindings.method && method !== void 0)
        $$bindings.method(method);
      $$result.css.add(css$12);
      return `<article class="${"svelte-19k830w"}"><div class="${"card-heading svelte-19k830w"}"><picture class="${"card-heading__img svelte-19k830w"}"><source type="${"image/webp"}"${add_attribute("srcset", `/img/${method.category}/thumbnail/${method.slug}.webp`, 0)}>
			<source type="${"image/jpeg"}"${add_attribute("srcset", `/img/${method.category}/thumbnail/${method.slug}.jpg`, 0)}>
			<img${add_attribute("src", `/img/${method.category}/thumbnail/${method.slug}.jpg`, 0)} loading="${"lazy"}" decoding="${"async"}" class="${"img svelte-19k830w"}" alt="${""}" height="${"80"}" width="${"80"}"></picture>
		<div class="${"card-heading__text svelte-19k830w"}"><h1 class="${"svelte-19k830w"}">${escape(method.name)}</h1>
			<h2 class="${"svelte-19k830w"}">${escape(method.category)}</h2></div></div>
	<div class="${"card-content"}"><p class="${"card-content__heading svelte-19k830w"}">Why?</p>
		<p class="${"card-content__body svelte-19k830w"}">${escape(method.why)}</p>
		<div class="${"tag-container svelte-19k830w"}">${method.phases ? `${each(method.phases, (phase) => {
        return `${validate_component(Tag, "Tag").$$render(
          $$result,
          {
            value: phase,
            tooltipText: "Project phase of use"
          },
          {},
          {}
        )}`;
      })}` : ``}</div></div>
	<button class="${"btn btn-primary more-info svelte-19k830w"}">More info</button>
</article>`;
    });
    css2 = {
      code: "ul.svelte-123oo9u.svelte-123oo9u{display:flex;flex-direction:column;align-items:center}ul.svelte-123oo9u li.svelte-123oo9u{font-size:1em;width:100%}a.svelte-123oo9u.svelte-123oo9u{text-decoration:none}.list-navigation.svelte-123oo9u.svelte-123oo9u{display:flex;justify-content:center}@media only screen and (min-width: 1280px){.list-navigation.svelte-123oo9u.svelte-123oo9u{justify-content:flex-end}}.list-navigation.svelte-123oo9u .pagination-nav{width:max-content;border-radius:1em;border:none}.list-navigation.svelte-123oo9u .option{color:var(--color-text-secondary);width:1em;margin:0.1em}@media only screen and (min-width: 1280px){.list-navigation.svelte-123oo9u .option{margin:0.2em;width:1.5em;height:1.5em}}.list-navigation.svelte-123oo9u .option:hover{border-radius:0.5em}.list-navigation.svelte-123oo9u .option.active{background-color:var(--color-primary);color:var(--color-white);border-radius:10px}",
      map: null
    };
    MethodList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let pageSize;
      let currentPage;
      let items;
      let paginatedItems;
      let isPaginationNeeded;
      let methods;
      let $isJavaScriptDisabled, $$unsubscribe_isJavaScriptDisabled;
      let $currentPaginationPage, $$unsubscribe_currentPaginationPage;
      let $isDarkMode, $$unsubscribe_isDarkMode;
      $$unsubscribe_isJavaScriptDisabled = subscribe(isJavaScriptDisabled, (value) => $isJavaScriptDisabled = value);
      $$unsubscribe_currentPaginationPage = subscribe(currentPaginationPage, (value) => $currentPaginationPage = value);
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      let { methodsArray } = $$props;
      if ($$props.methodsArray === void 0 && $$bindings.methodsArray && methodsArray !== void 0)
        $$bindings.methodsArray(methodsArray);
      $$result.css.add(css2);
      pageSize = 5;
      currentPage = $currentPaginationPage;
      items = methodsArray;
      paginatedItems = paginate(items, pageSize, currentPage);
      isPaginationNeeded = items.length > pageSize;
      methods = $isJavaScriptDisabled ? items : paginatedItems;
      $$unsubscribe_isJavaScriptDisabled();
      $$unsubscribe_currentPaginationPage();
      $$unsubscribe_isDarkMode();
      return `<ul class="${"non-style svelte-123oo9u"}">${each(methods, (method) => {
        return `<li class="${"svelte-123oo9u"}"><a${add_attribute("href", "/" + method.category + "/" + method.slug, 0)}${add_attribute("title", method.name, 0)} class="${"svelte-123oo9u"}">${validate_component(MethodCard, "MethodCard").$$render($$result, { method }, {}, {})}</a>
		</li>`;
      })}</ul>

${isPaginationNeeded && !$isJavaScriptDisabled ? `<div class="${"list-navigation svelte-123oo9u"}">${$isDarkMode ? `${validate_component(DarkPaginationNav, "DarkPaginationNav").$$render(
        $$result,
        {
          totalItems: items.length,
          pageSize,
          currentPage,
          limit: 1,
          showStepOptions: true
        },
        {},
        {}
      )}` : `${validate_component(LightPaginationNav, "LightPaginationNav").$$render(
        $$result,
        {
          totalItems: items.length,
          pageSize,
          currentPage,
          limit: 1,
          showStepOptions: true
        },
        {},
        {}
      )}`}</div>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/chunks/CategoryTab.js
var css$13, TabButton, css3, CategoryTab;
var init_CategoryTab = __esm({
  ".svelte-kit/output/server/chunks/CategoryTab.js"() {
    init_chunks();
    init_stores();
    init_routes();
    css$13 = {
      code: "button.svelte-1y4nptp{width:max-content;background-color:transparent;border:none;color:var(--color-text-secondary);padding:0.75em;font-size:1.15em;scroll-snap-align:center}@media only screen and (min-width: 1280px){button.svelte-1y4nptp{padding:1em;font-size:1.1em;margin:0 1em;box-sizing:border-box;transition:ease-in 0.1s}}button.selected.svelte-1y4nptp{color:var(--color-primary);font-weight:700;border-bottom:3px solid var(--color-primary)}",
      map: null
    };
    TabButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let pathName;
      let isCategorySelected;
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let { category } = $$props;
      let { content } = $$props;
      if ($$props.category === void 0 && $$bindings.category && category !== void 0)
        $$bindings.category(category);
      if ($$props.content === void 0 && $$bindings.content && content !== void 0)
        $$bindings.content(content);
      $$result.css.add(css$13);
      pathName = $page.url.pathname;
      isCategorySelected = pathName.substring(1) === category;
      $$unsubscribe_page();
      return `<a${add_attribute("href", "/" + category, 0)}${add_attribute("title", "category " + category, 0)}><button tabindex="${"-1"}" class="${["svelte-1y4nptp", isCategorySelected ? "selected" : ""].join(" ").trim()}">${escape(content)}</button>
</a>`;
    });
    css3 = {
      code: "ul.svelte-1h2ylgh{background-color:var(--color-white);border-radius:1.5em;max-width:fit-content;overflow-x:auto;display:flex;gap:2em;padding:0.5em 1.25em;scroll-snap-type:x mandatory}@media only screen and (min-width: 1280px){ul.svelte-1h2ylgh{box-sizing:border-box;min-height:3em;justify-content:center;padding:0 1em;border-radius:0.75em;gap:5px;overflow-y:hidden}}",
      map: null
    };
    CategoryTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let ul;
      let activeTab;
      $$result.css.add(css3);
      return `<ul class="${"non-style svelte-1h2ylgh"}"${add_attribute("this", ul, 0)}>${each(categoryRoutes, (route) => {
        return `<li${add_classes((activeTab === route.category ? "active" : "").trim())}>${validate_component(TabButton, "TabButton").$$render(
          $$result,
          {
            category: route.category,
            content: route.title
          },
          {},
          {}
        )}
		</li>`;
      })}
</ul>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css4, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_MethodList();
    init_CategoryTab();
    css4 = {
      code: "h1.svelte-ustb81{font-weight:500;font-size:1.25em;margin:1em 0;width:100%;text-align:center}@media only screen and (min-width: 1280px){h1.svelte-ustb81{text-align:left;margin-left:0}}",
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$result.css.add(css4);
      return `${$$result.head += `${$$result.title = `<title>ICT Research Methods \u2014 Research Methods for Design-Oriented Research in ICT</title>`, ""}`, ""}

<h1 class="${"site-title svelte-ustb81"}">Methods</h1>
${validate_component(CategoryTab, "CategoryTab").$$render($$result, {}, {}, {})}
${validate_component(MethodList, "MethodList").$$render($$result, { methodsArray: data.methodsArray }, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  shared: () => page_ts_exports,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_ts();
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file4 = "_app/immutable/components/pages/_page.svelte-d48ce096.js";
    imports4 = ["_app/immutable/components/pages/_page.svelte-d48ce096.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/MethodList-31f61645.js", "_app/immutable/chunks/index-200b2f94.js", "_app/immutable/chunks/index-ac47b0ac.js", "_app/immutable/chunks/CategoryTab-27da8331.js", "_app/immutable/chunks/stores-207da6c2.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/routes-0654de87.js", "_app/immutable/modules/pages/_page.ts-264006ac.js", "_app/immutable/chunks/index-56c348ce.js", "_app/immutable/chunks/index-200b2f94.js", "_app/immutable/chunks/index-ac47b0ac.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/_page-007177ed.js"];
    stylesheets4 = ["_app/immutable/assets/_page-1ac7fb01.css", "_app/immutable/assets/MethodList-dc4386ad.css", "_app/immutable/assets/CategoryTab-d379e72f.css"];
  }
});

// .svelte-kit/output/server/entries/pages/_category_category_/_page.ts.js
var page_ts_exports2 = {};
__export(page_ts_exports2, {
  load: () => load2
});
var load2;
var init_page_ts2 = __esm({
  ".svelte-kit/output/server/entries/pages/_category_category_/_page.ts.js"() {
    init_index2();
    load2 = async ({ fetch: fetch2, params }) => {
      const res = await fetch2(`${params.category}.json`);
      if (res.ok) {
        const result = await res.json();
        if (result.length === 0) {
          throw error(404);
        }
        return {
          result
        };
      }
      const { message } = await res.json();
      throw error(500, `[category/+page.ts]: ${message}`);
    };
  }
});

// .svelte-kit/output/server/entries/pages/_category_category_/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var css5, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/_category_category_/_page.svelte.js"() {
    init_chunks();
    init_MethodList();
    init_CategoryTab();
    css5 = {
      code: "h1.svelte-17bxio1{font-weight:500;font-size:1.25em;margin:1em;width:100%;text-align:center}@media only screen and (min-width: 1280px){h1.svelte-17bxio1{text-align:left;margin-left:0}}",
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$result.css.add(css5);
      return `${$$result.head += `${$$result.title = `<title>Category ${escape(data.result[0].category)} \u2014 ICT Research Methods</title>`, ""}`, ""}

<h1 class="${"site-title svelte-17bxio1"}">Methods</h1>
${validate_component(CategoryTab, "CategoryTab").$$render($$result, {}, {}, {})}
${validate_component(MethodList, "MethodList").$$render($$result, { methodsArray: data.result }, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  shared: () => page_ts_exports2,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_page_ts2();
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file5 = "_app/immutable/components/pages/_category_category_/_page.svelte-b1f8799b.js";
    imports5 = ["_app/immutable/components/pages/_category_category_/_page.svelte-b1f8799b.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/MethodList-31f61645.js", "_app/immutable/chunks/index-200b2f94.js", "_app/immutable/chunks/index-ac47b0ac.js", "_app/immutable/chunks/CategoryTab-27da8331.js", "_app/immutable/chunks/stores-207da6c2.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/routes-0654de87.js", "_app/immutable/modules/pages/_category_category_/_page.ts-076c0460.js", "_app/immutable/chunks/index-56c348ce.js", "_app/immutable/chunks/_page-3d7c743c.js"];
    stylesheets5 = ["_app/immutable/assets/_page-3fcea53d.css", "_app/immutable/assets/MethodList-dc4386ad.css", "_app/immutable/assets/CategoryTab-d379e72f.css"];
  }
});

// .svelte-kit/output/server/entries/pages/_category_category_/_method_/_page.ts.js
var page_ts_exports3 = {};
__export(page_ts_exports3, {
  load: () => load3
});
var load3;
var init_page_ts3 = __esm({
  ".svelte-kit/output/server/entries/pages/_category_category_/_method_/_page.ts.js"() {
    init_index2();
    load3 = async ({ fetch: fetch2, params }) => {
      const res = await fetch2(`/${params.category}/${params.method}.json`);
      if (res.ok) {
        const result = await res.json();
        if (result.length === 0) {
          throw error(404);
        }
        return {
          result
        };
      }
      if (res.status === 404) {
        throw error(404);
      }
      const { message } = await res.json();
      throw error(500, `[method.+page.ts]: ${message} `);
    };
  }
});

// .svelte-kit/output/server/entries/pages/_category_category_/_method_/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var css6, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/_category_category_/_method_/_page.svelte.js"() {
    init_chunks();
    css6 = {
      code: "section.svelte-1w7kmjm.svelte-1w7kmjm{background-color:var(--color-white);border-radius:1em;padding:0.5em 2em}img.svelte-1w7kmjm.svelte-1w7kmjm{border-radius:1em;background-color:#eee;height:20rem;width:auto}@media only screen and (min-width: 768px){img.svelte-1w7kmjm.svelte-1w7kmjm{height:22.5rem}}@media only screen and (min-width: 1280px){img.svelte-1w7kmjm.svelte-1w7kmjm{height:25rem}}h1.svelte-1w7kmjm.svelte-1w7kmjm,h2.svelte-1w7kmjm.svelte-1w7kmjm{margin:0}h1.svelte-1w7kmjm.svelte-1w7kmjm{margin-bottom:1.25em}h2.svelte-1w7kmjm.svelte-1w7kmjm{text-transform:capitalize;color:var(--color-primary);font-weight:400;font-size:1.1em;margin-bottom:0.5em}h2.svelte-1w7kmjm a.svelte-1w7kmjm{text-decoration:none;color:var(--color-primary)}h3.svelte-1w7kmjm.svelte-1w7kmjm{margin:0}p.svelte-1w7kmjm.svelte-1w7kmjm{max-width:90vw;line-height:1.5em;letter-spacing:0.2px;margin-top:0.35em}@media only screen and (min-width: 1280px){p.svelte-1w7kmjm.svelte-1w7kmjm{max-width:50vw}}.detail__details.svelte-1w7kmjm.svelte-1w7kmjm{color:var(--color-black);font-size:1.5em;font-weight:500;display:flex;gap:0.75em;align-items:center}.detail__details.svelte-1w7kmjm a.svelte-1w7kmjm{text-decoration:none;font-size:1.5em;color:var(--color-black);font-weight:normal}.detail__details.svelte-1w7kmjm a.svelte-1w7kmjm:hover{transform:scale(1.15)}.detail__heading.svelte-1w7kmjm.svelte-1w7kmjm{display:flex;flex-direction:column-reverse}",
      map: null
    };
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let previousRoute;
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$result.css.add(css6);
      return `${$$result.head += `${$$result.title = `<title>${escape(data.result.name)} \u2014 ICT Research Methods</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.result.how.slice(0, 150), 0)} data-svelte="svelte-tvk6dg">`, ""}

<section class="${"svelte-1w7kmjm"}"><p class="${"detail__details svelte-1w7kmjm"}"><a${add_attribute("href", previousRoute, 0)} class="${"svelte-1w7kmjm"}">${escape("<")}</a>Details
	</p>

	<picture><source type="${"image/webp"}"${add_attribute("srcset", `/img/${data.result.category}/${data.result.slug}.webp`, 0)}>
		<source type="${"image/jpeg"}"${add_attribute("srcset", `/img/${data.result.category}/${data.result.slug}.jpg`, 0)}>
		<img${add_attribute("src", `/img/${data.result.category}/${data.result.slug}.jpg`, 0)} class="${"img svelte-1w7kmjm"}" alt="${""}" width="${"240"}" height="${"360"}" decoding="${"async"}"></picture>

	<div class="${"detail__heading svelte-1w7kmjm"}"><h1 class="${"svelte-1w7kmjm"}">${escape(data.result.name)}</h1>
		<h2 class="${"svelte-1w7kmjm"}"><a${add_attribute("href", "/" + data.result.category, 0)} class="${"svelte-1w7kmjm"}">${escape(data.result.category)}</a></h2></div>

	<h3 class="${"svelte-1w7kmjm"}">Why?</h3>
	<p class="${"svelte-1w7kmjm"}">${escape(data.result.why)}</p>

	<h3 class="${"svelte-1w7kmjm"}">How?</h3>
	<p class="${"svelte-1w7kmjm"}">${escape(data.result.how)}</p>

	<h3 class="${"svelte-1w7kmjm"}">Ingredients</h3>
	<ul>${each(data.result.ingredients, (ingredient) => {
        return `<li>${escape(ingredient)}</li>`;
      })}</ul>

	<h3 class="${"svelte-1w7kmjm"}">In practice</h3>
	<p class="${"svelte-1w7kmjm"}">${escape(data.result.practice)}</p>

	<h3 class="${"svelte-1w7kmjm"}">Phase(s) of use</h3>
	<p class="${"svelte-1w7kmjm"}">In the following project phase(s) ${escape(data.result.name.toLowerCase())} can be used:</p>
	<ul>${each(data.result.phases, (phase) => {
        return `<li>${escape(capitalizeFirstLetter(phase))}</li>`;
      })}</ul>
</section>`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  imports: () => imports6,
  index: () => index6,
  shared: () => page_ts_exports3,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page_ts3();
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file6 = "_app/immutable/components/pages/_category_category_/_method_/_page.svelte-8cddb16a.js";
    imports6 = ["_app/immutable/components/pages/_category_category_/_method_/_page.svelte-8cddb16a.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/navigation-016cb094.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/index-ac47b0ac.js", "_app/immutable/modules/pages/_category_category_/_method_/_page.ts-da554907.js", "_app/immutable/chunks/index-56c348ce.js", "_app/immutable/chunks/_page-0bb8f231.js"];
    stylesheets6 = ["_app/immutable/assets/_page-0f2a8d59.css"];
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.ts.js
var page_ts_exports4 = {};
__export(page_ts_exports4, {
  csr: () => csr
});
var csr;
var init_page_ts4 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.ts.js"() {
    csr = false;
  }
});

// .svelte-kit/output/server/chunks/EditPage.js
var Edit, css7, EditPage;
var init_EditPage = __esm({
  ".svelte-kit/output/server/chunks/EditPage.js"() {
    init_chunks();
    Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg fill="${"currentColor"}" height="${"20"}" width="${"20"}" viewBox="${"0 0 40 40"}" class="${"iconEdit_IMw_"}" aria-hidden="${"true"}"><g><path d="${"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}"></path></g></svg>`;
    });
    css7 = {
      code: ".edit-page-container.svelte-4nz734{margin-top:2em}a.svelte-4nz734{display:flex;gap:0.2em}",
      map: null
    };
    EditPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { editRoute } = $$props;
      if ($$props.editRoute === void 0 && $$bindings.editRoute && editRoute !== void 0)
        $$bindings.editRoute(editRoute);
      $$result.css.add(css7);
      return `<div class="${"edit-page-container svelte-4nz734"}"><a${add_attribute("href", `https://github.com/jochemvogel/ictmethods.nl/edit/development/src/routes/${editRoute}/%2Bpage.svelte`, 0)} target="${"_blank"}" title="${"Edit page on Github"}" class="${"svelte-4nz734"}">${validate_component(Edit, "Edit").$$render($$result, {}, {}, {})}Edit this page</a>
</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var css8, Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.svelte.js"() {
    init_chunks();
    init_EditPage();
    css8 = {
      code: "h1.svelte-16lehpd,h2.svelte-16lehpd{margin-bottom:0}@media only screen and (min-width: 1280px){li.svelte-16lehpd{font-size:1em}}p.svelte-16lehpd{margin-top:0.5em}@media only screen and (min-width: 1280px){p.svelte-16lehpd{font-size:1em}}a.svelte-16lehpd{color:var(--color-black);font-weight:bold}a.svelte-16lehpd:hover{font-style:italic}",
      map: null
    };
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css8);
      return `${$$result.head += `${$$result.title = `<title>About \u2014 ICT Research Methods</title>`, ""}<meta name="${"description"}" content="${"The ICT Research Methods Pack is a card set with research methods for\n	design-oriented research within ICT, developed by HBO-i"}" data-svelte="svelte-ejypeu">`, ""}

<h1 class="${"svelte-16lehpd"}">About</h1>
<p class="${"svelte-16lehpd"}">As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the
	questions and tackling the problems or opportunities of your ICT project requires research and
	often a combination of various ICT research methods. The toolkit on this website offers you a set
	of possible research methods and a framework to select the appropriate (combination of) methods.
</p>

<p class="${"svelte-16lehpd"}">The ICT Research Methods Pack is a card set with research methods for design-oriented research
	within ICT, developed by <a href="${"https://www.hbo-i.nl/"}" target="${"_blank"}" class="${"svelte-16lehpd"}">HBO-i </a>. The set is
	suitable for use within ICT courses such as the broad ICT bachelor, business informatics or
	technical information. With the set you can orientate yourself on research methods and plan your
	project. The methods contained in the map set fit with the different research strategies of the
	Methods Map Practical Research, an internationally recognized framework for design research.
</p>

<h2 class="${"svelte-16lehpd"}">Disclaimer</h2>

<p class="${"svelte-16lehpd"}">The creator of this app does not own any of this content. All the ICT Research Methods on this
	website are a digital copy of the research methods in the physical ICT Methodspack. That one can
	be purchased via
	<a href="${"https://www.studystore.nl/p/9990002067426/ict-methodspack"}" target="${"_blank"}" class="${"ellipsis svelte-16lehpd"}">https://www.studystore.nl/p/9990002067426/ict-methodspack.</a></p>

<h2 class="${"svelte-16lehpd"}">Licensing</h2>

<p class="${"svelte-16lehpd"}">All of its contents and the physical Methods pack have been realised as, and are maintained by
	<a href="${"https://www.hbo-i.nl/"}" target="${"_blank"}" class="${"svelte-16lehpd"}">HBO-i </a> projects.
</p>
<p class="${"svelte-16lehpd"}">The Method cards (except the domain specific cards) were written by:</p>

<ul><li class="${"svelte-16lehpd"}">Wilco Bonestroo</li>
	<li class="${"svelte-16lehpd"}">Marcel Meesters</li>
	<li class="${"svelte-16lehpd"}">Ralph Niels</li>
	<li class="${"svelte-16lehpd"}">Jan Dirk Schagen</li>
	<li class="${"svelte-16lehpd"}">Koen van Turnhout</li></ul>
<p class="${"svelte-16lehpd"}">All Method cards were illustrated by Laura Henneke</p>

<h2 class="${"svelte-16lehpd"}">How to cite</h2>

<p class="${"svelte-16lehpd"}">If you want to refer to the physical card set, please use this citation:</p>

<p class="${"svelte-16lehpd"}">Bonestroo, W.J., Meesters, M., Niels, R., Schagen, J.D., Henneke, L., Turnhout, K. van (2018): ICT
	Research Methods. HBO-i, Amsterdam. ISBN/EAN: 9990002067426. Available from: <a href="${"https://www.studystore.nl/p/9990002067426/ict-methodspack"}" class="${"ellipsis svelte-16lehpd"}" target="${"_blank"}">https://www.studystore.nl/p/9990002067426/ict-methodspack.</a></p>

<h2 class="${"svelte-16lehpd"}">About this app</h2>

<p class="${"svelte-16lehpd"}">As mentioned before: all the content is already available, so why this app? Well.. personally I
	don&#39;t bring the physical pack with me all the time. Now I can access the ICT Research Methods all
	the time. Besides that not every bought the physical methods pack. I mean. You should, but you
	don&#39;t have to.
</p>

<p class="${"svelte-16lehpd"}">With this app I hope I can encourage students to use the ICT Research Methods in a fun way. You
	can easily search for methods, use the app as PWA on your phone and even view your saved methods
	offline.
</p>
<p class="${"svelte-16lehpd"}">Oh and btw, there is a <kbd>CMD</kbd>
	+ <kbd>K</kbd> search and a dark mode. I mean: what else do you need?
</p>

<h2 class="${"svelte-16lehpd"}">Future</h2>

<p class="${"svelte-16lehpd"}">This app is still in development, so you might see some changes in the near future.</p>

<h2 class="${"svelte-16lehpd"}">Contributing</h2>

<p class="${"svelte-16lehpd"}">I <a href="${"https://github.com/jochemvogel/ictmethods.nl"}" target="${"_blank"}" class="${"svelte-16lehpd"}">open sourced</a> the project,
	so other people can implement their own improvements. Enjoy! \u270C\uFE0F
</p>

${validate_component(EditPage, "EditPage").$$render($$result, { editRoute: "about" }, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  imports: () => imports7,
  index: () => index7,
  shared: () => page_ts_exports4,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_page_ts4();
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file7 = "_app/immutable/components/pages/about/_page.svelte-d50e2f19.js";
    imports7 = ["_app/immutable/components/pages/about/_page.svelte-d50e2f19.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/EditPage-c5db950a.js", "_app/immutable/modules/pages/about/_page.ts-af123707.js", "_app/immutable/chunks/_page-91f64307.js"];
    stylesheets7 = ["_app/immutable/assets/_page-330be00c.css", "_app/immutable/assets/EditPage-950d9c67.css"];
  }
});

// .svelte-kit/output/server/entries/pages/dot-framework/_page.ts.js
var page_ts_exports5 = {};
__export(page_ts_exports5, {
  csr: () => csr2
});
var csr2;
var init_page_ts5 = __esm({
  ".svelte-kit/output/server/entries/pages/dot-framework/_page.ts.js"() {
    csr2 = false;
  }
});

// .svelte-kit/output/server/entries/pages/dot-framework/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var css9, Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/dot-framework/_page.svelte.js"() {
    init_chunks();
    init_EditPage();
    css9 = {
      code: "h2.svelte-vc54pd.svelte-vc54pd{line-height:0;font-size:1.2em}section.svelte-vc54pd h1.svelte-vc54pd{margin:1em 0 0 0}a.svelte-vc54pd.svelte-vc54pd{color:var(--color-black);font-weight:bold}p.svelte-vc54pd.svelte-vc54pd{margin-top:0.25em;font-size:1em}q.svelte-vc54pd.svelte-vc54pd{font-style:italic;font-size:1em}.strategies-methods.svelte-vc54pd>p.svelte-vc54pd{margin-bottom:2rem}",
      map: null
    };
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css9);
      return `${$$result.head += `${$$result.title = `<title>DOT Framework \u2014 ICT Research Methods</title>`, ""}<meta name="${"description"}" content="${"To help you in your ICT research, we advise the use of the	Development Oriented Triangulation (DOT) Framework"}" data-svelte="svelte-2da63b">`, ""}

<h1>The DOT Framework</h1>
<section class="${"svelte-vc54pd"}"><h1 class="${"svelte-vc54pd"}">Research in ICT</h1>
	<p class="${"svelte-vc54pd"}">As a bachelor of ICT, your research aims at creating an ICT product which fits its needs (in
		this context an ICT product can be a software product, or an ICT design or advise/report). The
		research is focused on the product, and not per se on creating new knowledge which is the aim in
		most scientific research.
	</p>
	<p class="${"svelte-vc54pd"}">To give you a glimpse of possible ICT research:</p>
	<ul><li>investigating the stakeholders&#39; wishes</li>
		<li>choosing the most appropriate technology for a (part of) ICT system</li>
		<li>investigating the usefulness of a certain technology or framework</li>
		<li>testing the quality of an ICT product</li></ul></section>

<section class="${"svelte-vc54pd"}"><h1 class="${"svelte-vc54pd"}">The Development Oriented Triangulation Framework</h1>
	<p class="${"svelte-vc54pd"}">To help you in your ICT research, we advise the use of the <i>Development Oriented Triangulation</i>
		(DOT) framework (<a rel="${"nofollow"}" href="${"https://www.researchgate.net/publication/266684802_Design_Patterns_for_Mixed-Method_Research_in_HCI"}" target="${"_blank"}" class="${"svelte-vc54pd"}">[1]</a>). The DOT framework can help you to structure your research and to communicate about it. The
		Development Oriented Triangulation (DOT) framework consists of three levels:
	</p>
	<ul><li>The &quot;What&quot; of your research (the domains)</li>
		<li>The &quot;Why&quot;of your research (the trade-offs)</li>
		<li>The &quot;How&quot; of your research (the strategies and methods)</li></ul></section>

<section class="${"svelte-vc54pd"}"><h1 class="${"svelte-vc54pd"}"><span>The &quot;What&quot;of your research (the domains)</span></h1>
	<p class="${"svelte-vc54pd"}">You can research both the specific application context of your project and the more general
		knowledge available that can help your project. Both types of research will help you, and are
		necessary to create your own &quot;innovation&quot;, your new product/advice/report. We can express this
		by three domains. The first domain is the &quot;application domain&quot;. This is the domain of the
		specific context that the ICT project takes place. The second domain is of &quot;available work&quot;. All
		available theory, models and other artefacts that you can use are part of the available work
		domain. Thirdly is the &quot;innovation domain&quot;, where your actual innovation takes place and all of
		the research is done.
	</p></section>

<section class="${"svelte-vc54pd"}"><h1 class="${"svelte-vc54pd"}"><span>The &quot;Why&quot; of your research</span></h1>
	<p class="${"svelte-vc54pd"}">Explaining what you want to obtain with your research will help you to better structure your
		research. If you do research in the application context your reason for research will probably
		be to obtain a product which is relevant for the stakeholders. You are trying to optimise the <b>fit</b>
		between your product and the application context. Oftentimes you want to assure that your product
		is up to contemporary quality standards. In those cases you want to use all the <b>expertise</b>
		available to create your product. You do this by doing research in the &quot;available work&quot; domain. As
		there are few methods that simultaneously optimise fit and expertise it is often needed to combine
		both types of methods in the project.
	</p>
	<p class="${"svelte-vc54pd"}">Similarly there is a tradeoff between optimising <b>overview</b> and <b>certainty</b>. Often,
		mostly in the beginning you want to gain a good overview over what is needed or what is
		available. At other times you want to test specific aspects of your work, making sure it works.
		In these cases you try to configure your research to optimise &quot;certainty&quot; about your hypotheses
		or goals.
	</p>
	<p class="${"svelte-vc54pd"}">Lastly, in most cases your research might require a <b>data</b> oriented approach to justify
		your choices, prove completeness and so on. Sometimes, however, it is a good idea to choose a
		more
		<b>inspiration</b>
		based method, like the <a href="${"/workshop/brainstorm"}" title="${"Brainstorm"}" class="${"svelte-vc54pd"}">Brainstorm</a> method.
	</p></section>

<section class="${"strategies-methods svelte-vc54pd"}"><h1 class="${"svelte-vc54pd"}">The &quot;How&quot; of your research (the strategies and methods)</h1>
	<p class="${"svelte-vc54pd"}">So during a project you try to learn as much as you can about the context of available work, the
		application context and the innovation space. What are ways of learning these things? The
		DOT-Framework has 5 research strategies.
	</p>

	<h2 class="${"svelte-vc54pd"}"><a href="${"/library"}" class="${"svelte-vc54pd"}">Library</a></h2>
	<q class="${"svelte-vc54pd"}">Standing on the shoulds of giants.</q>
	<p class="${"svelte-vc54pd"}">Library research is done to explore what is already done and what guidelines and theories exist
		that could help you further your design. Since the advent of the internet library research is
		also called desk research.
	</p>

	<h2 class="${"svelte-vc54pd"}"><a href="${"/field"}" class="${"svelte-vc54pd"}">Field</a></h2>
	<q class="${"svelte-vc54pd"}">Understand your users.</q>
	<p class="${"svelte-vc54pd"}">Field research is done to explore the application context. You apply a field strategy to get to
		know your end users, their needs, desires and limitations as organizational and physical
		contexts in which they will use your product.
	</p>

	<h2 class="${"svelte-vc54pd"}"><a href="${"/lab"}" class="${"svelte-vc54pd"}">Lab</a></h2>
	<q class="${"svelte-vc54pd"}">To measure is to know.</q>
	<p class="${"svelte-vc54pd"}">Lab research is done to test parts or concepts of your product, of the final product. You use
		lab research to learn if things work out the way you intended them, or to test different
		scenarios.
	</p>

	<h2 class="${"svelte-vc54pd"}"><a href="${"/showroom"}" class="${"svelte-vc54pd"}">Showroom</a></h2>
	<q class="${"svelte-vc54pd"}">Know &amp; show your contribution.</q>
	<p class="${"svelte-vc54pd"}">Showroom research is done to test your ideas in relation to existing work. Showing your
		prototype to experts can be a form of showroom research or spelling out how your product is
		different from the competition. Also testing your product to general guidelines is a form of
		showroom research.
	</p>

	<h2 class="${"svelte-vc54pd"}"><a href="${"/workshop"}" class="${"svelte-vc54pd"}">Workshop</a></h2>
	<q class="${"svelte-vc54pd"}">Seek variation and improvement!</q>
	<p class="${"svelte-vc54pd"}">Workshop research is done to explore opportunities. Prototyping, designing and co-creation
		activities are all ways to gain insights in what is possible and how things could work.
	</p></section>

<section class="${"svelte-vc54pd"}"><h1 class="${"svelte-vc54pd"}">Triangulation</h1>
	<p class="${"svelte-vc54pd"}">Most projects require a mix of methods to get answers to your research questions. In most cases,
		both &quot;fit&quot; and &quot;expertise&quot; are of importance, and the same holds for &quot;overview&quot; and &quot;certainty&quot;.
		Therefore, combining the appropriate methods to cover for the different views is important.
		Combining methods with opposing goals is sometimes called &quot;method triangulation&quot;. Some of the
		more common combinations of methods have been defined as design patterns.
	</p></section>

${validate_component(EditPage, "EditPage").$$render($$result, { editRoute: "dot-framework" }, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  file: () => file8,
  imports: () => imports8,
  index: () => index8,
  shared: () => page_ts_exports5,
  stylesheets: () => stylesheets8
});
var index8, component8, file8, imports8, stylesheets8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_page_ts5();
    index8 = 7;
    component8 = async () => (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    file8 = "_app/immutable/components/pages/dot-framework/_page.svelte-8213d348.js";
    imports8 = ["_app/immutable/components/pages/dot-framework/_page.svelte-8213d348.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/EditPage-c5db950a.js", "_app/immutable/modules/pages/dot-framework/_page.ts-3b1e2d0d.js", "_app/immutable/chunks/_page-34fca3f8.js"];
    stylesheets8 = ["_app/immutable/assets/_page-36935058.css", "_app/immutable/assets/EditPage-950d9c67.css"];
  }
});

// .svelte-kit/output/server/entries/pages/offline/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => Page6
});
var Page6;
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/offline/_page.svelte.js"() {
    init_chunks();
    Page6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<header><h1>Offline</h1></header>
<main><p>General offline</p>
	<a href="${"/"}">\u2190 Go back home</a></main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  file: () => file9,
  imports: () => imports9,
  index: () => index9,
  stylesheets: () => stylesheets9
});
var index9, component9, file9, imports9, stylesheets9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    index9 = 8;
    component9 = async () => (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default;
    file9 = "_app/immutable/components/pages/offline/_page.svelte-0be9af7b.js";
    imports9 = ["_app/immutable/components/pages/offline/_page.svelte-0be9af7b.js", "_app/immutable/chunks/index-ddba650a.js"];
    stylesheets9 = [];
  }
});

// .svelte-kit/output/server/entries/pages/search/_page.ts.js
var page_ts_exports6 = {};
__export(page_ts_exports6, {
  prerender: () => prerender2
});
var prerender2;
var init_page_ts6 = __esm({
  ".svelte-kit/output/server/entries/pages/search/_page.ts.js"() {
    prerender2 = false;
  }
});

// .svelte-kit/output/server/entries/pages/search/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => Page7
});
var css10, Page7;
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/search/_page.svelte.js"() {
    init_chunks();
    init_stores();
    init_index4();
    init_MethodList();
    css10 = {
      code: "p.svelte-1hnyhn0{font-size:1.2em}",
      map: null
    };
    Page7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let searchedMethodsArray;
      let isValidQuery;
      let $allMethods, $$unsubscribe_allMethods;
      let $page, $$unsubscribe_page;
      $$unsubscribe_allMethods = subscribe(allMethods, (value) => $allMethods = value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      const queryString = $page.url.search;
      const searchQuery = queryString.split("=")[1] ?? "";
      const formattedSearchQuery = searchQuery.toLowerCase().replace("+", " ");
      $$result.css.add(css10);
      searchedMethodsArray = $allMethods.filter(function(method) {
        const lowerCasedMethodName = method.name.toLowerCase();
        return lowerCasedMethodName.includes(formattedSearchQuery);
      });
      isValidQuery = searchedMethodsArray.length > 0 && formattedSearchQuery !== "";
      $$unsubscribe_allMethods();
      $$unsubscribe_page();
      return `${$$result.head += `${$$result.title = `<title>Search for: ${escape(formattedSearchQuery)} \u2014 ICT Research Methods</title>`, ""}`, ""}

<a href="${"/"}">\u2190 Back home</a>
<h1>Search for: ${escape(formattedSearchQuery)}</h1>

${isValidQuery ? `${validate_component(MethodList, "MethodList").$$render($$result, { methodsArray: searchedMethodsArray }, {}, {})}` : `<p class="${"svelte-1hnyhn0"}">Nothing found. Are you sure this is a valid search query? Please try again or go back to <a href="${"/"}">home</a>.
	</p>`}

<noscript>Unfortunately the search doesn&#39;t work yet without JavaScript. We are working on it, but for now:
	please <a href="${"https://www.enable-javascript.com/"}" target="${"_blank"}">enable JavaScript</a> in your browser
	if you want to search.
</noscript>`;
    });
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  component: () => component10,
  file: () => file10,
  imports: () => imports10,
  index: () => index10,
  shared: () => page_ts_exports6,
  stylesheets: () => stylesheets10
});
var index10, component10, file10, imports10, stylesheets10;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    init_page_ts6();
    index10 = 9;
    component10 = async () => (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default;
    file10 = "_app/immutable/components/pages/search/_page.svelte-7e555797.js";
    imports10 = ["_app/immutable/components/pages/search/_page.svelte-7e555797.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/stores-207da6c2.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/index-ac47b0ac.js", "_app/immutable/chunks/index-200b2f94.js", "_app/immutable/chunks/MethodList-31f61645.js", "_app/immutable/modules/pages/search/_page.ts-d53d7830.js", "_app/immutable/chunks/_page-b239ddf8.js"];
    stylesheets10 = ["_app/immutable/assets/_page-d153103a.css", "_app/immutable/assets/MethodList-dc4386ad.css"];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();
init_index2();

// node_modules/devalue/devalue.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// .svelte-kit/output/server/index.js
init_index3();
var cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { errors } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, errors }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, errors }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, errors }, {}, {})}`}

${``}`;
});
var DATA_SUFFIX = "/__data.js";
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function serialize_error(error2, get_stack) {
  return JSON.stringify(error_to_pojo(error2, get_stack));
}
function error_to_pojo(error2, get_stack) {
  if (error2 instanceof HttpError) {
    return {
      message: error2.message,
      status: error2.status,
      __is_http_error: true
    };
  }
  const {
    name,
    message,
    stack,
    cause,
    ...custom
  } = error2;
  const object = { name, message, stack: get_stack(error2) };
  if (cause)
    object.cause = error_to_pojo(cause, get_stack);
  for (const key2 in custom) {
    object[key2] = custom[key2];
  }
  return object;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data) {
  try {
    return new Response(`window.__sveltekit_data = ${devalue(data)}`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  } catch (e) {
    const error2 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `${error2.message} (data.${match[2]})` : error2.message;
    return new Response(`throw new Error(${JSON.stringify(message)})`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options, error2) {
  let status = 500;
  if (error2 instanceof HttpError) {
    status = error2.status;
  } else {
    options.handle_error(error2, event);
  }
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(serialize_error(error2, options.get_stack), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, error2.message);
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender3 = mod.prerender ?? state.prerender_default;
  if (prerender3 && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender3) {
    throw new Error(`${event.routeId} is not prerenderable`);
  }
  try {
    const response = await handler2(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-routeid", event.routeId);
      response.headers.set("x-sveltekit-prerender", String(prerender3));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    }
    throw error2;
  }
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, prerendering = false) {
  const safe_payload = JSON.stringify(fetched.response).replace(
    pattern,
    (match) => replacements[match]
  );
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.body))}`);
  }
  if (!prerendering && fetched.method === "GET") {
    const cache_control = fetched.response.headers["cache-control"];
    if (cache_control) {
      const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
      if (match) {
        const age = fetched.response.headers["age"] ?? "0";
        const ttl = +match[1] - +age;
        attrs.push(`data-ttl="${ttl}"`);
      }
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender: prerender3, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender3;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  validation_errors
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets11 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const stack = error2 instanceof HttpError ? void 0 : error2 == null ? void 0 : error2.stack;
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = options.get_stack(error2);
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component()))
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data
    };
    if (validation_errors) {
      props.errors = validation_errors;
    }
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets11.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", errors: "null" };
  try {
    serialized.data = devalue(branch.map(({ server_data }) => server_data));
  } catch (e) {
    const error3 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match)
      throw new Error(`${error3.message} (data.${match[2]})`);
    throw error3;
  }
  if (validation_errors) {
    try {
      serialized.errors = devalue(validation_errors);
    } catch (e) {
      const error3 = e;
      if (error3.path)
        throw new Error(`${error3.message} (errors.${error3.path})`);
      throw error3;
    }
  }
  const init_app = `
		import { start } from ${s(prefixed(entry.file))};

		start({
			env: ${s(options.public_env)},
			hydrate: ${page_config.ssr ? `{
				status: ${status},
				error: ${error2 && serialize_error(error2, (e) => e.stack)},
				node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)},
				data: ${serialized.data},
				errors: ${serialized.errors}
			}` : "null"},
			paths: ${s(options.paths)},
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			trailing_slash: ${s(options.trailing_slash)}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets11) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map((item) => serialize_data(item, !!state.prerendering)).join("\n	")}`;
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    for (const new_cookie of cookies) {
      const { name, value, ...options2 } = new_cookie;
      headers.append("set-cookie", cookie.serialize(name, value, options2));
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = stack;
  }
  return new Response(html, {
    status,
    headers
  });
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
    return inspect(url, opts);
  };
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({ event, fetcher, node, parent, server_data_promise }) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
async function unwrap_promises(object) {
  const unwrapped = {};
  for (const key2 in object) {
    unwrapped[key2] = await object[key2];
  }
  return unwrapped;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function create_fetch({ event, options, state, route, prerender_default }) {
  const fetched = [];
  const initial_cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const set_cookies = [];
  function get_cookie_header(url, header) {
    const new_cookies = {};
    for (const cookie2 of set_cookies) {
      if (!domain_matches(url.hostname, cookie2.domain))
        continue;
      if (!path_matches(url.pathname, cookie2.path))
        continue;
      new_cookies[cookie2.name] = cookie2.value;
    }
    const combined_cookies = {
      ...initial_cookies,
      ...new_cookies,
      ...cookie.parse(header ?? "")
    };
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const fetcher = async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    let dependency;
    const response = await options.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request2.url);
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
            if (cookie2)
              request2.headers.set("cookie", cookie2);
          }
          let response3 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response3 = new Response("", {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers
            });
          } else {
            if (url.origin !== event.url.origin) {
              const acao = response3.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response3;
        }
        let response2;
        const prefix2 = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file11 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file11), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
          if (cookie2) {
            request2.headers.set("cookie", cookie2);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string") {
          throw new Error("Request body must be a string");
        }
        response2 = await respond(request2, options, {
          prerender_default,
          ...state,
          initiator: route
        });
        if (state.prerendering) {
          dependency = { response: response2, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
        return response2;
      }
    });
    const set_cookie = response.headers.get("set-cookie");
    if (set_cookie) {
      set_cookies.push(
        ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => set_cookie_parser.parseString(str))
      );
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body = await response2.text();
          const headers = {};
          for (const [key3, value] of response2.headers) {
            if (key3 !== "set-cookie" && key3 !== "etag") {
              headers[key3] = value;
            }
          }
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: request.url.startsWith(event.url.origin) ? request.url.slice(event.url.origin.length) : request.url,
              method: request.method,
              body: request_body,
              response: {
                status: status_number,
                statusText: response2.statusText,
                headers,
                body
              }
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies: set_cookies };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR
  });
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    if (ssr) {
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: error2,
      branch,
      fetched,
      cookies,
      event,
      resolve_opts,
      validation_errors: void 0
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return static_error_page(options, 500, error3.message);
  }
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  const accept = negotiate(event.request.headers.get("accept") || "text/html", [
    "text/html",
    "application/json"
  ]);
  if (accept === "application/json" && event.request.method !== "GET" && event.request.method !== "HEAD") {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let mutation_error;
    let validation_errors;
    if (leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD") {
      try {
        const method = event.request.method;
        const handler2 = leaf_node.server[method];
        if (handler2) {
          const result = await handler2.call(null, event);
          if (result == null ? void 0 : result.errors) {
            validation_errors = result.errors;
            status = result.status ?? 400;
          }
          if (event.request.method === "POST" && (result == null ? void 0 : result.location)) {
            return redirect_response(303, result.location);
          }
        } else {
          event.setHeaders({
            allow: allowed_methods(leaf_node.server).join(", ")
          });
          mutation_error = error(405, "Method not allowed");
        }
      } catch (e) {
        if (e instanceof Redirect) {
          return redirect_response(e.status, e.location);
        }
        mutation_error = e;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && (mod.POST || mod.PUT || mod.DELETE || mod.PATCH)) {
        throw new Error("Cannot prerender pages that have mutative methods");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    const { fetcher, fetched, cookies } = create_fetch({
      event,
      options,
      state,
      route,
      prerender_default: should_prerender
    });
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        validation_errors: void 0,
        fetched,
        cookies,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && mutation_error) {
            throw mutation_error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            server_data_promise: server_promises[i],
            state
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const error2 = normalize_error(e);
          if (error2 instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = `window.__sveltekit_data = ${JSON.stringify({
                type: "redirect",
                location: error2.location
              })}`;
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(error2.status, error2.location);
          }
          if (!(error2 instanceof HttpError)) {
            options.handle_error(error2, event);
          }
          const status2 = error2 instanceof HttpError ? error2.status : 500;
          while (i--) {
            if (page2.errors[i]) {
              const index11 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index11]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies,
                validation_errors: void 0
              });
            }
          }
          return static_error_page(
            options,
            status2,
            error2.message
          );
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `window.__sveltekit_data = ${devalue({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      })}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      validation_errors,
      fetched,
      cookies
    });
  } catch (error2) {
    options.handle_error(error2, event);
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
async function handle_json_request(event, options, mod) {
  const method = event.request.method;
  const handler2 = mod[method];
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  try {
    const result = await handler2.call(null, event);
    if (result == null ? void 0 : result.errors) {
      return json({ errors: result.errors }, { status: result.status || 400 });
    }
    return new Response(void 0, {
      status: 204,
      headers: (result == null ? void 0 : result.location) ? { location: result.location } : void 0
    });
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_response(error2.status, error2.location);
    }
    if (!(error2 instanceof HttpError)) {
      options.handle_error(error2, event);
    }
    return json(error_to_pojo(error2, options.get_stack), {
      status: error2 instanceof HttpError ? error2.status : 500
    });
  }
}
function redirect_response(status, location) {
  return new Response(void 0, {
    status,
    headers: { location }
  });
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, route, options, state) {
  var _a;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a = event.url.searchParams.get("__invalid")) == null ? void 0 : _a.split("").map((x) => x === "y")) ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(
      url.pathname.slice(0, -DATA_SUFFIX.length),
      options.trailing_slash
    );
    url.searchParams.delete("__invalid");
    url.searchParams.delete("__id");
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch((e) => {
          const error2 = normalize_error(e);
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          if (error2 instanceof HttpError) {
            return {
              type: "error",
              httperror: { ...error2 }
            };
          }
          options.handle_error(error2, event);
          return {
            type: "error",
            error: error_to_pojo(error2, options.get_stack)
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data);
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error2.location
      };
      return data_response(server_data);
    } else {
      return data_response(error_to_pojo(error2, options.get_stack));
    }
  }
}
var default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a, _b, _c, _d, _e;
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const type = (_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";")[0];
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && (type === "application/x-www-form-urlencoded" || type === "multipart/form-data");
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  const { parameter, allowed } = options.method_override;
  const method_override = (_b = url.searchParams.get(parameter)) == null ? void 0 : _b.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !((_e = state.prerendering) == null ? void 0 : _e.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const headers = {};
  const cookies = [];
  if (state.prerendering)
    disable_search(url);
  const event = {
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          const new_cookies = Array.isArray(value) ? value : [value];
          for (const cookie2 of new_cookies) {
            if (cookies.includes(cookie2)) {
              throw new Error(`"${key2}" header already has cookie with same value`);
            }
            cookies.push(cookie2);
          }
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform
  };
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          validation_errors: void 0,
          cookies: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else if (route.endpoint) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else {
          throw new Error("This should never happen");
        }
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response.headers.set(key2, value);
          }
        }
        for (const cookie2 of cookies) {
          response.headers.append("set-cookie", cookie2);
        }
        if (response.status === 200 && response.headers.has("etag")) {
          let if_none_match_value = request.headers.get("if-none-match");
          if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
            if_none_match_value = if_none_match_value.substring(2);
          }
          const etag = response.headers.get("etag");
          if (if_none_match_value === etag) {
            const headers2 = new Headers({ etag });
            for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
              const value = response.headers.get(key2);
              if (value)
                headers2.set(key2, value);
            }
            return new Response(void 0, {
              status: 304,
              headers: headers2
            });
          }
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      const error2 = coalesce_to_error(e);
      return handle_fatal_error(event2, options, error2);
    }
  }
  try {
    return await options.hooks.handle({
      event,
      resolve,
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
  } catch (e) {
    const error2 = coalesce_to_error(e);
    return handle_fatal_error(event, options, error2);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Global site tag (gtag.js) - Google Analytics ^^ -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131569519-18"><\/script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'UA-131569519-18');
		<\/script>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta
			name="description"
			content="The ICT Research Methods is a set with research methods for design-oriented research within ICT, developed by HBO-i. "
		/>
		<meta name="keywords" content="ictmethods, ict research methods, ict research" />
		<meta name="robots" content="index, follow" />
		<meta name="language" content="English" />
		<meta name="author" content="Jochem Vogel" />
		<meta name="theme-color" content="#4458E8" />
		<link rel="preconnect" href="//www.google-analytics.com" crossorigin />
		<link rel="icon" href="/favicon.png" />
		<link rel="manifest" href="/manifest.webmanifest" />
		<link rel="apple-touch-icon" href="/img/icons/icon-512x512.png" />
		<!-- iPhone Xs Max (1242px x 2688px) -->
		<link
			rel="apple-touch-startup-image"
			media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
			href="/img/icons/apple-launch-1242x2688.png"
		/>
		<!-- iPhone Xr (828px x 1792px) -->
		<link
			rel="apple-touch-startup-image"
			media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
			href="/img/icons/apple-launch-828x1792.png"
		/>
		<!-- iPhone X, Xs (1125px x 2436px) -->
		<link
			rel="apple-touch-startup-image"
			media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
			href="/img/icons/apple-launch-1125x2436.png"
		/>
		<!-- iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus (1242px x 2208px) -->
		<link
			rel="apple-touch-startup-image"
			media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
			href="/img/icons/apple-launch-1242x2208.png"
		/>
		<!-- iPhone 8, 7, 6s, 6 (750px x 1334px) -->
		<link
			rel="apple-touch-startup-image"
			media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
			href="/img/icons/apple-launch-750x1334.png"
		/>
		<title>ICT Research Methods \u2014 Methods Pack for Research in ICT</title>
		` + head + '\n	</head>\n	<body data-sveltekit-prefetch>\n		<noscript>\n			<p style="width: 100%; text-align: center">\n				Please turn on JavaScript for the best experience. Here are the\n				<a target="_blank" href="https://www.enable-javascript.com/">\n					instructions how to enable JavaScript in your web browser</a\n				>. :)\n			</p>\n		</noscript>\n		<div>' + body + "</div>\n	</body>\n</html>\n";
var error_template = ({ status, message }) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Global site tag (gtag.js) - Google Analytics ^^ -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131569519-18"><\/script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'UA-131569519-18');
		<\/script>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Error - ICT Methods</title>
	</head>
	<body>
		<h1>An error occured</h1>
		<p>Something went wrong. We're sorry.</p>
		<p>
			Please let us know
			<a
				href="https://github.com/jochemvogel/ictmethods.nl/issues/new?assignees=&labels=&template=bug_report.yml"
				>what happened</a
			>and go back <a href="/">to the home page</a>
		</p>
	</body>
</html>
`;
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: base + "/service-worker.js",
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "fallback.png", "favicon.png", "fonts/manrope-v12-latin/manrope-v12-latin-500.eot", "fonts/manrope-v12-latin/manrope-v12-latin-500.svg", "fonts/manrope-v12-latin/manrope-v12-latin-500.ttf", "fonts/manrope-v12-latin/manrope-v12-latin-500.woff", "fonts/manrope-v12-latin/manrope-v12-latin-500.woff2", "fonts/manrope-v12-latin/manrope-v12-latin-600.eot", "fonts/manrope-v12-latin/manrope-v12-latin-600.svg", "fonts/manrope-v12-latin/manrope-v12-latin-600.ttf", "fonts/manrope-v12-latin/manrope-v12-latin-600.woff", "fonts/manrope-v12-latin/manrope-v12-latin-600.woff2", "fonts/manrope-v12-latin/manrope-v12-latin-700.eot", "fonts/manrope-v12-latin/manrope-v12-latin-700.svg", "fonts/manrope-v12-latin/manrope-v12-latin-700.ttf", "fonts/manrope-v12-latin/manrope-v12-latin-700.woff", "fonts/manrope-v12-latin/manrope-v12-latin-700.woff2", "fonts/manrope-v12-latin/manrope-v12-latin-regular.eot", "fonts/manrope-v12-latin/manrope-v12-latin-regular.svg", "fonts/manrope-v12-latin/manrope-v12-latin-regular.ttf", "fonts/manrope-v12-latin/manrope-v12-latin-regular.woff", "fonts/manrope-v12-latin/manrope-v12-latin-regular.woff2", "ictmethods-dark.png", "ictmethods-dark.webp", "ictmethods.png", "ictmethods.svg", "ictmethods.webp", "img/.DS_Store", "img/extra/.DS_Store", "img/extra/joker.jpg", "img/extra/joker.webp", "img/extra/thumbnail/.DS_Store", "img/extra/thumbnail/joker.jpg", "img/extra/thumbnail/joker.webp", "img/field/.DS_Store", "img/field/descriptive-statistics.jpg", "img/field/descriptive-statistics.webp", "img/field/document-analysis.jpg", "img/field/document-analysis.webp", "img/field/domain-modelling.jpg", "img/field/domain-modelling.webp", "img/field/explore-user-requirements.jpg", "img/field/explore-user-requirements.webp", "img/field/focus-group.jpg", "img/field/focus-group.webp", "img/field/interview.jpg", "img/field/interview.webp", "img/field/observation.jpg", "img/field/observation.webp", "img/field/problem-analysis.jpg", "img/field/problem-analysis.webp", "img/field/stakeholder-analysis.jpg", "img/field/stakeholder-analysis.webp", "img/field/survey.jpg", "img/field/survey.webp", "img/field/task-analysis.jpg", "img/field/task-analysis.webp", "img/field/thumbnail/.DS_Store", "img/field/thumbnail/descriptive-statistics.jpg", "img/field/thumbnail/descriptive-statistics.webp", "img/field/thumbnail/document-analysis.jpg", "img/field/thumbnail/document-analysis.webp", "img/field/thumbnail/domain-modelling.jpg", "img/field/thumbnail/domain-modelling.webp", "img/field/thumbnail/explore-user-requirements.jpg", "img/field/thumbnail/explore-user-requirements.webp", "img/field/thumbnail/focus-group.jpg", "img/field/thumbnail/focus-group.webp", "img/field/thumbnail/interview.jpg", "img/field/thumbnail/interview.webp", "img/field/thumbnail/observation.jpg", "img/field/thumbnail/observation.webp", "img/field/thumbnail/problem-analysis.jpg", "img/field/thumbnail/problem-analysis.webp", "img/field/thumbnail/stakeholder-analysis.jpg", "img/field/thumbnail/stakeholder-analysis.webp", "img/field/thumbnail/survey.jpg", "img/field/thumbnail/survey.webp", "img/field/thumbnail/task-analysis.jpg", "img/field/thumbnail/task-analysis.webp", "img/icons/apple-launch-1125x2436.png", "img/icons/apple-launch-1242x2208.png", "img/icons/apple-launch-1242x2688.png", "img/icons/apple-launch-750x1334.png", "img/icons/apple-launch-828x1792.png", "img/icons/icon-128x128.png", "img/icons/icon-144x144.png", "img/icons/icon-152x152.png", "img/icons/icon-192x192.png", "img/icons/icon-256x256.png", "img/icons/icon-384x384.png", "img/icons/icon-512x512.png", "img/icons/icon-72x72.png", "img/icons/icon-96x96.png", "img/icons/maskable_icon.png", "img/lab/.DS_Store", "img/lab/a-b-testing.jpg", "img/lab/a-b-testing.webp", "img/lab/component-test.jpg", "img/lab/component-test.webp", "img/lab/computer-simulation.jpg", "img/lab/computer-simulation.webp", "img/lab/data-analytics.jpg", "img/lab/data-analytics.webp", "img/lab/hardware-validation.jpg", "img/lab/hardware-validation.webp", "img/lab/inferential-statistics.jpg", "img/lab/inferential-statistics.webp", "img/lab/non-functional-test.jpg", "img/lab/non-functional-test.webp", "img/lab/security-test.jpg", "img/lab/security-test.webp", "img/lab/system-test.jpg", "img/lab/system-test.webp", "img/lab/thumbnail/.DS_Store", "img/lab/thumbnail/a-b-testing.jpg", "img/lab/thumbnail/a-b-testing.webp", "img/lab/thumbnail/component-test.jpg", "img/lab/thumbnail/component-test.webp", "img/lab/thumbnail/computer-simulation.jpg", "img/lab/thumbnail/computer-simulation.webp", "img/lab/thumbnail/data-analytics.jpg", "img/lab/thumbnail/data-analytics.webp", "img/lab/thumbnail/hardware-validation.jpg", "img/lab/thumbnail/hardware-validation.webp", "img/lab/thumbnail/inferential-statistics.jpg", "img/lab/thumbnail/inferential-statistics.webp", "img/lab/thumbnail/non-functional-test.jpg", "img/lab/thumbnail/non-functional-test.webp", "img/lab/thumbnail/security-test.jpg", "img/lab/thumbnail/security-test.webp", "img/lab/thumbnail/system-test.jpg", "img/lab/thumbnail/system-test.webp", "img/lab/thumbnail/unit-test.jpg", "img/lab/thumbnail/unit-test.webp", "img/lab/thumbnail/usability-testing.jpg", "img/lab/thumbnail/usability-testing.webp", "img/lab/unit-test.jpg", "img/lab/unit-test.webp", "img/lab/usability-testing.jpg", "img/lab/usability-testing.webp", "img/library/.DS_Store", "img/library/available-product-analysis.jpg", "img/library/available-product-analysis.webp", "img/library/best-good-and-bad-practices.jpg", "img/library/best-good-and-bad-practices.webp", "img/library/community-research.jpg", "img/library/community-research.webp", "img/library/competitive-analysis.jpg", "img/library/competitive-analysis.webp", "img/library/design-pattern-research.jpg", "img/library/design-pattern-research.webp", "img/library/expert-interview.jpg", "img/library/expert-interview.webp", "img/library/literature-study.jpg", "img/library/literature-study.webp", "img/library/swot-analysis.jpg", "img/library/swot-analysis.webp", "img/library/thumbnail/.DS_Store", "img/library/thumbnail/available-product-analysis.jpg", "img/library/thumbnail/available-product-analysis.webp", "img/library/thumbnail/best-good-and-bad-practices.jpg", "img/library/thumbnail/best-good-and-bad-practices.webp", "img/library/thumbnail/community-research.jpg", "img/library/thumbnail/community-research.webp", "img/library/thumbnail/competitive-analysis.jpg", "img/library/thumbnail/competitive-analysis.webp", "img/library/thumbnail/design-pattern-research.jpg", "img/library/thumbnail/design-pattern-research.webp", "img/library/thumbnail/expert-interview.jpg", "img/library/thumbnail/expert-interview.webp", "img/library/thumbnail/literature-study.jpg", "img/library/thumbnail/literature-study.webp", "img/library/thumbnail/swot-analysis.jpg", "img/library/thumbnail/swot-analysis.webp", "img/showroom/.DS_Store", "img/showroom/benchmark-test.jpg", "img/showroom/benchmark-test.webp", "img/showroom/ethical-check.jpg", "img/showroom/ethical-check.webp", "img/showroom/guideline-conformity-analysis.jpg", "img/showroom/guideline-conformity-analysis.webp", "img/showroom/peer-review.jpg", "img/showroom/peer-review.webp", "img/showroom/pitch.jpg", "img/showroom/pitch.webp", "img/showroom/product-review.jpg", "img/showroom/product-review.webp", "img/showroom/static-program-analysis.jpg", "img/showroom/static-program-analysis.webp", "img/showroom/thumbnail/.DS_Store", "img/showroom/thumbnail/benchmark-test.jpg", "img/showroom/thumbnail/benchmark-test.webp", "img/showroom/thumbnail/ethical-check.jpg", "img/showroom/thumbnail/ethical-check.webp", "img/showroom/thumbnail/guideline-conformity-analysis.jpg", "img/showroom/thumbnail/guideline-conformity-analysis.webp", "img/showroom/thumbnail/peer-review.jpg", "img/showroom/thumbnail/peer-review.webp", "img/showroom/thumbnail/pitch.jpg", "img/showroom/thumbnail/pitch.webp", "img/showroom/thumbnail/product-review.jpg", "img/showroom/thumbnail/product-review.webp", "img/showroom/thumbnail/static-program-analysis.jpg", "img/showroom/thumbnail/static-program-analysis.webp", "img/workshop/.DS_Store", "img/workshop/brainstorm.jpg", "img/workshop/brainstorm.webp", "img/workshop/business-case-exploration.jpg", "img/workshop/business-case-exploration.webp", "img/workshop/co-creation.jpg", "img/workshop/co-creation.webp", "img/workshop/code-review.jpg", "img/workshop/code-review.webp", "img/workshop/decomposition.jpg", "img/workshop/decomposition.webp", "img/workshop/gap-analysis.jpg", "img/workshop/gap-analysis.webp", "img/workshop/hackathon.jpg", "img/workshop/hackathon.webp", "img/workshop/it-architecture-sketching.jpg", "img/workshop/it-architecture-sketching.webp", "img/workshop/multi-criteria-decision-making.jpg", "img/workshop/multi-criteria-decision-making.webp", "img/workshop/prototyping.jpg", "img/workshop/prototyping.webp", "img/workshop/requirements-engineering.jpg", "img/workshop/requirements-engineering.webp", "img/workshop/root-cause-analysis.jpg", "img/workshop/root-cause-analysis.webp", "img/workshop/thumbnail/.DS_Store", "img/workshop/thumbnail/brainstorm.jpg", "img/workshop/thumbnail/brainstorm.webp", "img/workshop/thumbnail/business-case-exploration.jpg", "img/workshop/thumbnail/business-case-exploration.webp", "img/workshop/thumbnail/co-creation.jpg", "img/workshop/thumbnail/co-creation.webp", "img/workshop/thumbnail/code-review.jpg", "img/workshop/thumbnail/code-review.webp", "img/workshop/thumbnail/decomposition.jpg", "img/workshop/thumbnail/decomposition.webp", "img/workshop/thumbnail/gap-analysis.jpg", "img/workshop/thumbnail/gap-analysis.webp", "img/workshop/thumbnail/hackathon.jpg", "img/workshop/thumbnail/hackathon.webp", "img/workshop/thumbnail/it-architecture-sketching.jpg", "img/workshop/thumbnail/it-architecture-sketching.webp", "img/workshop/thumbnail/multi-criteria-decision-making.jpg", "img/workshop/thumbnail/multi-criteria-decision-making.webp", "img/workshop/thumbnail/prototyping.jpg", "img/workshop/thumbnail/prototyping.webp", "img/workshop/thumbnail/requirements-engineering.jpg", "img/workshop/thumbnail/requirements-engineering.webp", "img/workshop/thumbnail/root-cause-analysis.jpg", "img/workshop/thumbnail/root-cause-analysis.webp", "manifest.webmanifest", "robots.txt", "sitemap.xml", "service-worker.js"]),
  mimeTypes: { ".png": "image/png", ".eot": "application/vnd.ms-fontobject", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".woff": "font/woff", ".woff2": "font/woff2", ".webp": "image/webp", ".jpg": "image/jpeg", ".webmanifest": "application/manifest+json", ".txt": "text/plain", ".xml": "application/xml" },
  _: {
    entry: { "file": "_app/immutable/start-073a16dc.js", "imports": ["_app/immutable/start-073a16dc.js", "_app/immutable/chunks/index-ddba650a.js", "_app/immutable/chunks/singletons-a07f3bf3.js", "_app/immutable/chunks/index-ac47b0ac.js", "_app/immutable/chunks/index-56c348ce.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8)),
      () => Promise.resolve().then(() => (init__9(), __exports9)),
      () => Promise.resolve().then(() => (init__10(), __exports10))
    ],
    routes: [
      {
        id: "search",
        pattern: /^\/search\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 9 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set(["/", "/methods.json", "/about", "/dot-framework", "/offline", "/library", "/library.json", "/field", "/field.json", "/lab", "/lab.json", "/showroom", "/showroom.json", "/workshop", "/workshop.json", "/extra", "/extra.json", "/library/available-product-analysis", "/library/available-product-analysis.json", "/library/best-good-and-bad-practices", "/library/best-good-and-bad-practices.json", "/library/community-research", "/library/community-research.json", "/library/competitive-analysis", "/library/competitive-analysis.json", "/library/design-pattern-research", "/library/design-pattern-research.json", "/library/expert-interview", "/library/expert-interview.json", "/library/literature-study", "/library/literature-study.json", "/library/swot-analysis", "/library/swot-analysis.json", "/field/descriptive-statistics", "/field/descriptive-statistics.json", "/field/document-analysis", "/field/document-analysis.json", "/field/domain-modelling", "/field/domain-modelling.json", "/field/explore-user-requirements", "/field/explore-user-requirements.json", "/field/focus-group", "/field/focus-group.json", "/field/interview", "/field/interview.json", "/field/observation", "/field/observation.json", "/field/problem-analysis", "/field/problem-analysis.json", "/field/stakeholder-analysis", "/field/stakeholder-analysis.json", "/field/survey", "/field/survey.json", "/field/task-analysis", "/field/task-analysis.json", "/lab/a-b-testing", "/lab/a-b-testing.json", "/lab/component-test", "/lab/component-test.json", "/lab/computer-simulation", "/lab/computer-simulation.json", "/lab/data-analytics", "/lab/data-analytics.json", "/lab/hardware-validation", "/lab/hardware-validation.json", "/lab/inferential-statistics", "/lab/inferential-statistics.json", "/lab/non-functional-test", "/lab/non-functional-test.json", "/lab/security-test", "/lab/security-test.json", "/lab/system-test", "/lab/system-test.json", "/lab/unit-test", "/lab/unit-test.json", "/lab/usability-testing", "/lab/usability-testing.json", "/showroom/benchmark-test", "/showroom/benchmark-test.json", "/showroom/ethical-check", "/showroom/ethical-check.json", "/showroom/guideline-conformity-analysis", "/showroom/guideline-conformity-analysis.json", "/showroom/peer-review", "/showroom/peer-review.json", "/showroom/pitch", "/showroom/pitch.json", "/showroom/product-review", "/showroom/product-review.json", "/showroom/static-program-analysis", "/showroom/static-program-analysis.json", "/workshop/brainstorm", "/workshop/brainstorm.json", "/workshop/business-case-exploration", "/workshop/business-case-exploration.json", "/workshop/co-creation", "/workshop/co-creation.json", "/workshop/code-review", "/workshop/code-review.json", "/workshop/decomposition", "/workshop/decomposition.json", "/workshop/gap-analysis", "/workshop/gap-analysis.json", "/workshop/hackathon", "/workshop/hackathon.json", "/workshop/it-architecture-sketching", "/workshop/it-architecture-sketching.json", "/workshop/multi-criteria-decision-making", "/workshop/multi-criteria-decision-making.json", "/workshop/prototyping", "/workshop/prototyping.json", "/workshop/requirements-engineering", "/workshop/requirements-engineering.json", "/workshop/root-cause-analysis", "/workshop/root-cause-analysis.json", "/extra/joker", "/extra/joker.json"]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
var initialized = server.init({
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file11 = pathname.substring(1);
  try {
    file11 = decodeURIComponent(file11);
  } catch (err) {
  }
  return manifest.assets.has(file11) || manifest.assets.has(file11 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=render.js.map
