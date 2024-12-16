// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8rYT3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
// sticky header
const { info } = require("96edd3ffae3fbb2b");
let lastScrollTop = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Check if the nav menu is open
    if (navMobileLinks.classList.contains("open")) return;
    if (scrollTop > lastScrollTop) // Scroll down - hide header
    header.style.top = "-90px"; // Adjust based on header height
    else // Scroll up - show header
    header.style.top = "0";
    lastScrollTop = scrollTop;
});
// mobile nav
let navClosedBtn = document.getElementById("nav-closed");
let navOpenedBtn = document.getElementById("nav-opened");
let navMobileLinks = document.getElementById("nav-mobile-links");
let navOpened = false;
const mobileCta = document.getElementById("mobile-cta");
function setNavState() {
    if (navOpened) {
        navClosedBtn.style.display = "none";
        navOpenedBtn.style.display = "flex";
        navMobileLinks.classList.add("open");
    } else {
        navClosedBtn.style.display = "flex";
        navOpenedBtn.style.display = "none";
        navMobileLinks.classList.remove("open");
    }
}
setNavState(); // initial state
mobileCta.addEventListener("click", ()=>{
    navOpened = false;
    setNavState();
});
navClosedBtn.onclick = function() {
    navOpened = true;
    setNavState();
};
navOpenedBtn.onclick = function() {
    navOpened = false;
    setNavState();
};
navMobileLinks.querySelectorAll("a").forEach((link)=>{
    link.onclick = function() {
        navOpened = false;
        setNavState();
    };
});
// referrals slider
const referrals = [
    {
        title: {
            text: "Dusan Bulatovic",
            href: "https://www.linkedin.com/in/dusan-bulatovic-236112199/"
        },
        about: [
            {
                text: "Frontend Developer"
            },
            {
                text: "Worked on the same team at Groschopp"
            }
        ],
        quote: {
            text: "Katarina has showcased remarkable talent, displaying a strong grasp of front-end technologies such as HTML, CSS, JavaScript, and React. Her ability to quickly learn and apply these skills has allowed her to deliver high-quality interfaces that meet and exceed expectations. Her proactive approach and eagerness to collaborate have greatly contributed to our team's success.\xa0"
        }
    },
    {
        title: {
            text: "Sebastian B.",
            href: "https://www.linkedin.com/in/sebastian-brenninkmeijer-144305b8/"
        },
        about: [
            {
                text: "Art Director"
            },
            {
                text: "Worked on the same team at Ink Innovation"
            }
        ],
        quote: {
            text: "Having managed Katarina for over a year I can say that she is a great asset for any company to have. She strives for perfection in everything she does and is always expanding her knowledge. I can say with great confidence that she is a true expert in her field with a lightning fast skill set."
        }
    },
    {
        title: {
            text: "Stefan Jovasevic",
            href: "https://www.linkedin.com/in/stefan-jovasevic/"
        },
        about: [
            {
                text: "Frontend Developer"
            },
            {
                text: "Worked on the same team at Ink Innovation"
            }
        ],
        quote: {
            text: "As a Frontend developer, it is very important to work with a good designer. I had the pleasure of working with Katarina on a few projects and I am impressed with her professionalism and dedication. Also, her communication skills and working ethics are amazing. I\u2019d highly recommend her."
        }
    },
    {
        title: {
            text: "Marko Milosavljevic",
            href: "https://www.linkedin.com/in/marko-milosavljevi%C4%87-a73891173/"
        },
        about: [
            {
                text: "Product Designer"
            },
            {
                text: "Worked on the same team at Brom Studio"
            }
        ],
        quote: {
            text: "Katarina is simply outstanding person, always cheerful and ready to help. During time we worked together (she was a manager on few projects I worked at) her efforts and energy were off the charts. Her ability to look things through various perspectives served as a catalyst in many situations. Her fast researching skills doubled down my time."
        }
    },
    {
        title: {
            text: "Mahmoud Ibrahim",
            href: "https://www.linkedin.com/in/imahmoudibrahim/"
        },
        about: [
            {
                text: "Product Design Lead"
            },
            {
                text: "Cooperated at ADPList"
            }
        ],
        quote: {
            text: "Not only is she exceptionally talented and ambitious but her delightful personality makes her a pleasure to work with. Her skills are unmatched, and she approaches challenges with unwavering persistence and diligence. Her dedication and hard work make her an invaluable asset to any company."
        }
    },
    {
        title: {
            text: "Chris Cheng",
            href: "https://www.linkedin.com/in/chris-cheng-hk/"
        },
        about: [
            {
                text: "Creative Director"
            },
            {
                text: "Worked on the same team at Ink Innovation"
            }
        ],
        quote: {
            text: "I had the pleasure of working with Katarina as a UX/UI designer and highly recommend her for her exceptional design skills. Katarina has the unique ability to design visually appealing and effective UX/UI for a variety of media, including apps and specific device screens."
        }
    }
];
function referralSlider() {
    let currentSlideIndex = 0;
    const showSlide = (slide, index)=>{
        let referral = referrals[index];
        // Get the h5 element with the link
        const h5Element = document.getElementById(slide).querySelector("h5 a");
        // Get all p2 elements within the slide2 div
        const p2Elements = document.getElementById(slide).querySelectorAll("p.p2");
        // Get the p1 element within the slide2 div
        const p1Element = document.getElementById(slide).querySelector("p.p1");
        // Example usage (modify as needed)
        if (h5Element) {
            // Change the link text and href
            h5Element.textContent = referral.title.text;
            h5Element.href = referral.title.href;
        }
        if (p2Elements.length == 2) {
            // Update text for each p2 element
            p2Elements[0].textContent = referral.about[0].text;
            p2Elements[1].textContent = referral.about[1].text;
        }
        if (p1Element) // Update text for the p1 element
        p1Element.textContent = referral.quote.text;
    };
    function preventGetInTouch(event) {
        // does not disable selection
        event.preventDefault();
    }
    const caretLeft = document.getElementById("caretLeftRef");
    const caretRight = document.getElementById("caretRightRef");
    if (caretLeft) {
        caretLeft.addEventListener("click", ()=>{
            currentSlideIndex = (currentSlideIndex - 1 + referrals.length) % referrals.length;
            showSlide("slide1", currentSlideIndex);
            const isSlide2 = document.getElementById("slide2").offsetParent === null;
            if (!isSlide2) {
                currentSlideIndex = (currentSlideIndex - 1 + referrals.length) % referrals.length;
                showSlide("slide2", currentSlideIndex);
            }
        });
        caretLeft.addEventListener("dblclick", preventGetInTouch);
    }
    if (caretRight) {
        caretRight.addEventListener("click", ()=>{
            currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
            showSlide("slide1", currentSlideIndex);
            const isSlide2 = document.getElementById("slide2").offsetParent === null;
            if (!isSlide2) {
                currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
                showSlide("slide2", currentSlideIndex);
            }
        });
        caretRight.addEventListener("dblclick", preventGetInTouch);
    }
    // Initial call to display the first slide
    showSlide("slide1", currentSlideIndex);
    const isSlide2 = document.getElementById("slide2").offsetParent === null;
    if (!isSlide2) {
        currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
        showSlide("slide2", currentSlideIndex);
    }
}
referralSlider();
const projects = [
    {
        title: `Software solution for<br> cutting machine`,
        client: [
            {
                text: "Sormac",
                href: "https://www.sormac.eu/en/"
            },
            {
                text: "Foodcons",
                href: "https://www.foodcons.de/"
            }
        ],
        timeframe: "2023-2024",
        stack: [
            "js.svg",
            "python.svg",
            "flask.svg",
            "jinja.svg",
            "html5.svg",
            "css3.svg",
            "figma.svg"
        ],
        overview: {
            text: `<a href="https://www.foodcons.de/en/maschinen-typen/fs-3600-multisystem-slice-wedging-cutter" target="_blank">FS-3600</a> machine allows precise cutting of fruits and vegetables into wedges, slices, or sticks, depending on the desired size. The software, implemented on a Raspberry Pi, facilitates the seamless operation of the machine.`
        },
        role: {
            text: `I played a key role in designing and developing the client side of the software for this machine. Our software was presented this year on <a href="https://sormac.com/en-gb/knowledge-center/sormac-stand-packed-full-of-technological-innovations" target="_blank">fair in Berlin</a> and <a href="https://www.anugafoodtec.com/exhibitor/foodcons_gmbh_-_co/" target="_blank">fair in Cologne</a>. It gained a great amount of positive feedback. In\xa0parallel with this, I\xa0developed a\xa0UI\xa0Kit with scalability in\xa0mind, which greatly impacted the speed of\xa0product development and shortened the time to\xa0market entry.`
        },
        achievements: [
            "Reduced 2x the training time for factory workers",
            "Attracted attention at two major fairs in Germany",
            "Sped up 2x total cutting time of products",
            "Implemented feedback to improve 10+ features",
            "Achieved 22% reduction in development time"
        ]
    },
    {
        title: `Mentoring juniors and<br>expanding my knowledge`,
        client: [
            {
                text: "ADPList",
                href: "https://adplist.org/"
            },
            {
                text: "IxDF",
                href: "http://www.interaction-design.org/"
            }
        ],
        timeframe: "2022-Present",
        stack: [
            "js.svg",
            "google.svg",
            "webflow.svg",
            "notion.svg",
            "html5.svg",
            "css3.svg",
            "figma.svg"
        ],
        overview: {
            text: `ADPList is a global community of mentors from 150 countries that offer <a href="https://adplist.org/mentors/katarina-popovic" target="_blank">1:1 expert guidance</a>. This knowledge-sharing platform is excellent for learning and connecting with colleagues. Interaction Design Foundation or IxDF offers a comprehensive range of online UX design courses taught by experts. I\u{2019}m grateful for all <a href="https://drive.google.com/drive/folders/15G2dxj33D1k3MTmBJ0pwayBLE8BmylzB?usp=drive_link" target="_blank">industry-recognized certificates</a> I gained. This platform is an excellent resource for advancing skills and staying updated with the latest trends.`
        },
        role: {
            text: `As a mentor at ADPList, I enjoyed sharing my personal experiences and knowledge with mentees, while learning from their interesting insights. These online sessions were incredibly fulfilling, as I genuinely love helping people, especially knowing how challenging the beginning of a career can be. At the IxDF, I completed numerous courses and several master classes. My hard work paid off as I applied these new skills at work, garnering recognition. This dedication led to an <a href="https://www.linkedin.com/posts/the-interaction-design-foundation_katarina-finished-30-ixdf-courses-while-working-activity-7023342257634246656-Gwdg?utm_source=share&utm_medium=member_desktop" target="_blank">interview with the IxDF team</a>, where I shared my journey to inspire others to keep learning.`
        },
        achievements: [
            "Provided  with 650+ minutes of mentorship",
            "Made connection with 40+ mentees and mentors",
            "Ranked in top 10 mentors in industrial design",
            "Mentoring juniors resulted in enhanced human skills",
            "Completed 30+ courses in less than 6 months"
        ]
    },
    {
        title: `On-chain social<br>media marketplace`,
        client: [
            {
                text: "Adora Promo",
                href: "https://github.com/AdoraPromo"
            }
        ],
        timeframe: "2023-2024",
        stack: [
            "webflow.svg",
            "atlasian.svg",
            "slack.svg",
            "discord.svg",
            "google.svg",
            "figma.svg"
        ],
        overview: {
            text: `Adora Promo is on-chain social media marketplace that uses AI to verify sponsored content. Advertisers send offers to creators with natural language requirements. Creators are paid based on the engagement their post receives. This project was a price winner at ETHOnline2023 hackathon. We tested this idea by launching a startup, however, we pivoted to focus on other opportunities.`
        },
        role: {
            text: `Collaborating as a frontend developer and designer included conducting comprehensive UX research, defining target market, creating a robust branding and design system. Seamless user experiences was ensured by producing wireframes, low-fidelity, and high-fidelity prototypes. I was continuously driving improvements in frontend code to enhance user engagement.`
        },
        achievements: [
            "Reduced twice required time for making matches",
            "Made collaboration with world-wide influencers",
            "Sped up post verification time to 30 seconds",
            "Implementing feedback resulted in rebranding",
            "Over 15% of reduction in development time"
        ]
    },
    {
        title: `Reshaping the future<br>of aviation industry`,
        client: [
            {
                text: "Ink Innovation",
                href: "https://www.innovation.ink/"
            }
        ],
        timeframe: "2023-2024",
        stack: [
            "notion.svg",
            "discord.svg",
            "google.svg",
            "figma.svg"
        ],
        overview: {
            text: `Ink Innovation is a provider of unique ecosystem of biometrics, mobile and cloud systems for the travel industry and organizations, which is handling around 57 million passengers annually, and is spread on 460 airports world-wide, with 200+ carriers set up in the system. Ink projects I contributed to were advanced cloud-hosted departure control system (<a href="https://www.innovation.ink/ecosystem/ink-dcs" target="_blank">Ink DCS</a>) with 1000+ functionalities, Ink Baggage reconciliation system (<a href="https://dcs.aero/product/baggage-reconciliation-system-brs-ink-innovation/" target="_blank">Ink BRS</a>) and <a href="https://www.airline-suppliers.com/product/self-service-ink-kiosk/" target="_blank">Ink Self-Service devices</a> (Kiosk, Bag Drop, Totem) that I designed from scratch, as well as <a href="https://www.health.ink/" target="_blank">Ink Health.</a> `
        },
        role: {
            text: `As a digital product designer, I was engaged in 4 major projects and my role consisted of: translating business needs and requirements into intuitive user experiences, designing comprehensive UX strategies, collaborating with the international teams, participating in rebranding, developing UI kit with scalability in mind, mentoring junior designers, and providing design process to create optimal solutions for interactive designs.`
        },
        achievements: [
            "Training time for agents reduced to around 3 hours",
            "Facilitated collaboration with 3 new clients",
            "Sped up total check-in time to 2-3 minutes",
            "Enhanced over 350 features in a year",
            "Over 15% of reduction in development time"
        ]
    },
    {
        title: `Gamified<br>NFT App`,
        client: [
            {
                text: "NFT Flipper",
                href: "https://taikai.network/ethbelgrade/hackathons/hackathon-2023/projects/cliinujot00g9wn011g01mj7s/idea"
            }
        ],
        timeframe: "During 2023",
        stack: [
            "notion.svg",
            "discord.svg",
            "google.svg",
            "figma.svg"
        ],
        overview: {
            text: `NFT Flipper is NFT matchmaking gambling dApp built at ETHBelgrade2023 hackathon. It delivers an innovative solution to the problem of fragmented NFT utility and limited gameplay opportunities by providing a platform that combines staking, randomness, and winner-takes-all mechanics. Users stake their NFTs in matches, and the smart contract autonomously selects a random winner. The winner takes possession of staked NFTs, creating an exciting element of risk.`
        },
        role: {
            text: `As a UX/UI designer, I conducted extensive UX research, defined target market, established branding and design system. I ensured high-quality user experiences by creating wireframes, low-fidelity, and high-fidelity prototypes, while continuously driving design enhancements to boost platform functionality. Additionally, I\xa0was integral in\xa0the creation and development of\xa0the product\u{2019}s\xa0visual style and I worked closely with the development team to\xa0ensure optimal implementation.`
        },
        achievements: [
            "Made a MVP version of the app in just 3 days",
            "Connected with two potential investors",
            "Pitched successfully  in less than 10 minutes",
            "Crafted interactive design for 30+ screens ",
            "Reduced development with simple design system"
        ]
    }
];
let currentProjectIndex = 0;
const showProject = (index)=>{
    const project = projects[index];
    if (!project) return;
    document.querySelector(".row-left h4").innerHTML = project.title;
    const clientLinks = project.client.map((client)=>`<a href="${client.href}" target="_blank">${client.text}</a>`).join(" ; ");
    document.querySelector(".row-right .p2").innerHTML = `Client: ${clientLinks}`;
    document.querySelector(".row-right .p2:nth-of-type(4)").textContent = project.timeframe;
    const stackContainer = document.querySelector(".row-stack");
    const images = stackContainer.querySelectorAll("img");
    images.forEach((img)=>{
        img.style.display = "none";
    });
    project.stack.forEach((tech)=>{
        const img = stackContainer.querySelector(`img[alt="${tech.split(".")[0]}"]`);
        if (img) img.style.display = "inline-block"; // Make the image visible
    });
    document.querySelector(".column-content:first-child p").innerHTML = project.overview.text;
    document.querySelector(".column-content:nth-of-type(2) p").innerHTML = project.role.text;
    const achievementsContainer = document.querySelectorAll(".achievements .row-wrap .column .p1");
    achievementsContainer.forEach((element, index)=>{
        if (project.achievements[index]) element.textContent = project.achievements[index];
        else element.textContent = ""; // Clear text if no corresponding achievement
    });
};
document.getElementById("caretLeftProj").addEventListener("click", ()=>{
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
});
document.getElementById("caretRightProj").addEventListener("click", ()=>{
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
});
// Initialize with the first project
showProject(currentProjectIndex);

},{"96edd3ffae3fbb2b":"3mKf2"}],"3mKf2":[function(require,module,exports) {
var process = require("f91382627304e5e5");
let browserslist = require("f027a13ded972043");
let { agents } = require("9aff224e825e7232");
let pico = require("49d27feab5ebc710");
let Browsers = require("e77049c087cc0404");
let Prefixes = require("46d61e09f7ad6f79");
let dataPrefixes = require("2e5dd2aa4570cb6c");
let getInfo = require("d5165508aec7752c");
let autoprefixerData = {
    browsers: agents,
    prefixes: dataPrefixes
};
const WARNING = "\n  Replace Autoprefixer `browsers` option to Browserslist config.\n  Use `browserslist` key in `package.json` or `.browserslistrc` file.\n\n  Using `browsers` option can cause errors. Browserslist config can\n  be used for Babel, Autoprefixer, postcss-normalize and other tools.\n\n  If you really need to use option, rename it to `overrideBrowserslist`.\n\n  Learn more at:\n  https://github.com/browserslist/browserslist#readme\n  https://twitter.com/browserslist\n\n";
function isPlainObject(obj) {
    return Object.prototype.toString.apply(obj) === "[object Object]";
}
let cache = new Map();
function timeCapsule(result, prefixes) {
    if (prefixes.browsers.selected.length === 0) return;
    if (prefixes.add.selectors.length > 0) return;
    if (Object.keys(prefixes.add).length > 2) return;
    /* c8 ignore next 11 */ result.warn("Autoprefixer target browsers do not need any prefixes.You do not need Autoprefixer anymore.\nCheck your Browserslist config to be sure that your targets are set up correctly.\n\n  Learn more at:\n  https://github.com/postcss/autoprefixer#readme\n  https://github.com/browserslist/browserslist#readme\n\n");
}
module.exports = plugin;
function plugin(...reqs) {
    let options;
    if (reqs.length === 1 && isPlainObject(reqs[0])) {
        options = reqs[0];
        reqs = undefined;
    } else if (reqs.length === 0 || reqs.length === 1 && !reqs[0]) reqs = undefined;
    else if (reqs.length <= 2 && (Array.isArray(reqs[0]) || !reqs[0])) {
        options = reqs[1];
        reqs = reqs[0];
    } else if (typeof reqs[reqs.length - 1] === "object") options = reqs.pop();
    if (!options) options = {};
    if (options.browser) throw new Error("Change `browser` option to `overrideBrowserslist` in Autoprefixer");
    else if (options.browserslist) throw new Error("Change `browserslist` option to `overrideBrowserslist` in Autoprefixer");
    if (options.overrideBrowserslist) reqs = options.overrideBrowserslist;
    else if (options.browsers) {
        if (typeof console !== "undefined" && console.warn) console.warn(pico.red(WARNING.replace(/`[^`]+`/g, (i)=>pico.yellow(i.slice(1, -1)))));
        reqs = options.browsers;
    }
    let brwlstOpts = {
        env: options.env,
        ignoreUnknownVersions: options.ignoreUnknownVersions,
        stats: options.stats
    };
    function loadPrefixes(opts) {
        let d = autoprefixerData;
        let browsers = new Browsers(d.browsers, reqs, opts, brwlstOpts);
        let key = browsers.selected.join(", ") + JSON.stringify(options);
        if (!cache.has(key)) cache.set(key, new Prefixes(d.prefixes, browsers, options));
        return cache.get(key);
    }
    return {
        browsers: reqs,
        info (opts) {
            opts = opts || {};
            opts.from = opts.from || process.cwd();
            return getInfo(loadPrefixes(opts));
        },
        options,
        postcssPlugin: "autoprefixer",
        prepare (result) {
            let prefixes = loadPrefixes({
                env: options.env,
                from: result.opts.from
            });
            return {
                OnceExit (root) {
                    timeCapsule(result, prefixes);
                    if (options.remove !== false) prefixes.processor.remove(root, result);
                    if (options.add !== false) prefixes.processor.add(root, result);
                }
            };
        }
    };
}
plugin.postcss = true;
/**
 * Autoprefixer data
 */ plugin.data = autoprefixerData;
/**
 * Autoprefixer default browsers
 */ plugin.defaults = browserslist.defaults;
/**
 * Inspect with default Autoprefixer
 */ plugin.info = ()=>plugin().info();

},{"f91382627304e5e5":"d5jf4","f027a13ded972043":"h32Zo","9aff224e825e7232":"1o0P3","49d27feab5ebc710":"1298x","e77049c087cc0404":"dGs5H","46d61e09f7ad6f79":"1EIhI","2e5dd2aa4570cb6c":"eWph3","d5165508aec7752c":"bGWG3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"h32Zo":[function(require,module,exports) {
var jsReleases = require("92e3660602ae04ac");
var agents = require("cbe20b3656de85b3").agents;
var jsEOL = require("86a87d707b63a4a0");
var path = require("16d9435aac8c9c34");
var e2c = require("f94f671dcbf096f7");
var BrowserslistError = require("a610b394abe6d220");
var parse = require("3d001556e62ae7c7");
var env = require("d933602907f19a21") // Will load browser.js in webpack
;
var YEAR = 365.259641 * 86400000;
var ANDROID_EVERGREEN_FIRST = "37";
var OP_MOB_BLINK_FIRST = 14;
// Helpers
function isVersionsMatch(versionA, versionB) {
    return (versionA + ".").indexOf(versionB + ".") === 0;
}
function isEolReleased(name) {
    var version = name.slice(1);
    return browserslist.nodeVersions.some(function(i) {
        return isVersionsMatch(i, version);
    });
}
function normalize(versions) {
    return versions.filter(function(version) {
        return typeof version === "string";
    });
}
function normalizeElectron(version) {
    var versionToUse = version;
    if (version.split(".").length === 3) versionToUse = version.split(".").slice(0, -1).join(".");
    return versionToUse;
}
function nameMapper(name) {
    return function mapName(version) {
        return name + " " + version;
    };
}
function getMajor(version) {
    return parseInt(version.split(".")[0]);
}
function getMajorVersions(released, number) {
    if (released.length === 0) return [];
    var majorVersions = uniq(released.map(getMajor));
    var minimum = majorVersions[majorVersions.length - number];
    if (!minimum) return released;
    var selected = [];
    for(var i = released.length - 1; i >= 0; i--){
        if (minimum > getMajor(released[i])) break;
        selected.unshift(released[i]);
    }
    return selected;
}
function uniq(array) {
    var filtered = [];
    for(var i = 0; i < array.length; i++)if (filtered.indexOf(array[i]) === -1) filtered.push(array[i]);
    return filtered;
}
function fillUsage(result, name, data) {
    for(var i in data)result[name + " " + i] = data[i];
}
function generateFilter(sign, version) {
    version = parseFloat(version);
    if (sign === ">") return function(v) {
        return parseFloat(v) > version;
    };
    else if (sign === ">=") return function(v) {
        return parseFloat(v) >= version;
    };
    else if (sign === "<") return function(v) {
        return parseFloat(v) < version;
    };
    else return function(v) {
        return parseFloat(v) <= version;
    };
}
function generateSemverFilter(sign, version) {
    version = version.split(".").map(parseSimpleInt);
    version[1] = version[1] || 0;
    version[2] = version[2] || 0;
    if (sign === ">") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version) > 0;
    };
    else if (sign === ">=") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version) >= 0;
    };
    else if (sign === "<") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version, v) > 0;
    };
    else return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version, v) >= 0;
    };
}
function parseSimpleInt(x) {
    return parseInt(x);
}
function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function compareSemver(a, b) {
    return compare(parseInt(a[0]), parseInt(b[0])) || compare(parseInt(a[1] || "0"), parseInt(b[1] || "0")) || compare(parseInt(a[2] || "0"), parseInt(b[2] || "0"));
}
// this follows the npm-like semver behavior
function semverFilterLoose(operator, range) {
    range = range.split(".").map(parseSimpleInt);
    if (typeof range[1] === "undefined") range[1] = "x";
    // ignore any patch version because we only return minor versions
    // range[2] = 'x'
    switch(operator){
        case "<=":
            return function(version) {
                version = version.split(".").map(parseSimpleInt);
                return compareSemverLoose(version, range) <= 0;
            };
        case ">=":
        default:
            return function(version) {
                version = version.split(".").map(parseSimpleInt);
                return compareSemverLoose(version, range) >= 0;
            };
    }
}
// this follows the npm-like semver behavior
function compareSemverLoose(version, range) {
    if (version[0] !== range[0]) return version[0] < range[0] ? -1 : 1;
    if (range[1] === "x") return 0;
    if (version[1] !== range[1]) return version[1] < range[1] ? -1 : 1;
    return 0;
}
function resolveVersion(data, version) {
    if (data.versions.indexOf(version) !== -1) return version;
    else if (browserslist.versionAliases[data.name][version]) return browserslist.versionAliases[data.name][version];
    else return false;
}
function normalizeVersion(data, version) {
    var resolved = resolveVersion(data, version);
    if (resolved) return resolved;
    else if (data.versions.length === 1) return data.versions[0];
    else return false;
}
function filterByYear(since, context) {
    since = since / 1000;
    return Object.keys(agents).reduce(function(selected, name) {
        var data = byName(name, context);
        if (!data) return selected;
        var versions = Object.keys(data.releaseDate).filter(function(v) {
            var date = data.releaseDate[v];
            return date !== null && date >= since;
        });
        return selected.concat(versions.map(nameMapper(data.name)));
    }, []);
}
function cloneData(data) {
    return {
        name: data.name,
        versions: data.versions,
        released: data.released,
        releaseDate: data.releaseDate
    };
}
function byName(name, context) {
    name = name.toLowerCase();
    name = browserslist.aliases[name] || name;
    if (context.mobileToDesktop && browserslist.desktopNames[name]) {
        var desktop = browserslist.data[browserslist.desktopNames[name]];
        if (name === "android") return normalizeAndroidData(cloneData(browserslist.data[name]), desktop);
        else {
            var cloned = cloneData(desktop);
            cloned.name = name;
            return cloned;
        }
    }
    return browserslist.data[name];
}
function normalizeAndroidVersions(androidVersions, chromeVersions) {
    var iFirstEvergreen = chromeVersions.indexOf(ANDROID_EVERGREEN_FIRST);
    return androidVersions.filter(function(version) {
        return /^(?:[2-4]\.|[34]$)/.test(version);
    }).concat(chromeVersions.slice(iFirstEvergreen));
}
function copyObject(obj) {
    var copy = {};
    for(var key in obj)copy[key] = obj[key];
    return copy;
}
function normalizeAndroidData(android, chrome) {
    android.released = normalizeAndroidVersions(android.released, chrome.released);
    android.versions = normalizeAndroidVersions(android.versions, chrome.versions);
    android.releaseDate = copyObject(android.releaseDate);
    android.released.forEach(function(v) {
        if (android.releaseDate[v] === undefined) android.releaseDate[v] = chrome.releaseDate[v];
    });
    return android;
}
function checkName(name, context) {
    var data = byName(name, context);
    if (!data) throw new BrowserslistError("Unknown browser " + name);
    return data;
}
function unknownQuery(query) {
    return new BrowserslistError("Unknown browser query `" + query + "`. " + "Maybe you are using old Browserslist or made typo in query.");
}
// Adjusts last X versions queries for some mobile browsers,
// where caniuse data jumps from a legacy version to the latest
function filterJumps(list, name, nVersions, context) {
    var jump = 1;
    switch(name){
        case "android":
            if (context.mobileToDesktop) return list;
            var released = browserslist.data.chrome.released;
            jump = released.length - released.indexOf(ANDROID_EVERGREEN_FIRST);
            break;
        case "op_mob":
            var latest = browserslist.data.op_mob.released.slice(-1)[0];
            jump = getMajor(latest) - OP_MOB_BLINK_FIRST + 1;
            break;
        default:
            return list;
    }
    if (nVersions <= jump) return list.slice(-1);
    return list.slice(jump - 1 - nVersions);
}
function isSupported(flags, withPartial) {
    return typeof flags === "string" && (flags.indexOf("y") >= 0 || withPartial && flags.indexOf("a") >= 0);
}
function resolve(queries, context) {
    return parse(QUERIES, queries).reduce(function(result, node, index) {
        if (node.not && index === 0) throw new BrowserslistError("Write any browsers query (for instance, `defaults`) before `" + node.query + "`");
        var type = QUERIES[node.type];
        var array = type.select.call(browserslist, context, node).map(function(j) {
            var parts = j.split(" ");
            if (parts[1] === "0") return parts[0] + " " + byName(parts[0], context).versions[0];
            else return j;
        });
        if (node.compose === "and") {
            if (node.not) return result.filter(function(j) {
                return array.indexOf(j) === -1;
            });
            else return result.filter(function(j) {
                return array.indexOf(j) !== -1;
            });
        } else {
            if (node.not) {
                var filter = {};
                array.forEach(function(j) {
                    filter[j] = true;
                });
                return result.filter(function(j) {
                    return !filter[j];
                });
            }
            return result.concat(array);
        }
    }, []);
}
function prepareOpts(opts) {
    if (typeof opts === "undefined") opts = {};
    if (typeof opts.path === "undefined") opts.path = path.resolve ? path.resolve(".") : ".";
    return opts;
}
function prepareQueries(queries, opts) {
    if (typeof queries === "undefined" || queries === null) {
        var config = browserslist.loadConfig(opts);
        if (config) queries = config;
        else queries = browserslist.defaults;
    }
    return queries;
}
function checkQueries(queries) {
    if (!(typeof queries === "string" || Array.isArray(queries))) throw new BrowserslistError("Browser queries must be an array or string. Got " + typeof queries + ".");
}
var cache = {};
function browserslist(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    var context = {
        ignoreUnknownVersions: opts.ignoreUnknownVersions,
        dangerousExtend: opts.dangerousExtend,
        mobileToDesktop: opts.mobileToDesktop,
        path: opts.path,
        env: opts.env
    };
    env.oldDataWarning(browserslist.data);
    var stats = env.getStat(opts, browserslist.data);
    if (stats) {
        context.customUsage = {};
        for(var browser in stats)fillUsage(context.customUsage, browser, stats[browser]);
    }
    var cacheKey = JSON.stringify([
        queries,
        context
    ]);
    if (cache[cacheKey]) return cache[cacheKey];
    var result = uniq(resolve(queries, context)).sort(function(name1, name2) {
        name1 = name1.split(" ");
        name2 = name2.split(" ");
        if (name1[0] === name2[0]) {
            // assumptions on caniuse data
            // 1) version ranges never overlaps
            // 2) if version is not a range, it never contains `-`
            var version1 = name1[1].split("-")[0];
            var version2 = name2[1].split("-")[0];
            return compareSemver(version2.split("."), version1.split("."));
        } else return compare(name1[0], name2[0]);
    });
    if (!env.env.BROWSERSLIST_DISABLE_CACHE) cache[cacheKey] = result;
    return result;
}
browserslist.parse = function(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    return parse(QUERIES, queries);
};
// Will be filled by Can I Use data below
browserslist.cache = {};
browserslist.data = {};
browserslist.usage = {
    global: {},
    custom: null
};
// Default browsers query
browserslist.defaults = [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead"
];
// Browser names aliases
browserslist.aliases = {
    fx: "firefox",
    ff: "firefox",
    ios: "ios_saf",
    explorer: "ie",
    blackberry: "bb",
    explorermobile: "ie_mob",
    operamini: "op_mini",
    operamobile: "op_mob",
    chromeandroid: "and_chr",
    firefoxandroid: "and_ff",
    ucandroid: "and_uc",
    qqandroid: "and_qq"
};
// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
// Note op_mob is not included as its chromium versions are not in sync with Opera desktop
browserslist.desktopNames = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    android: "chrome" // has extra processing logic
};
// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = {};
browserslist.clearCaches = env.clearCaches;
browserslist.parseConfig = env.parseConfig;
browserslist.readConfig = env.readConfig;
browserslist.findConfig = env.findConfig;
browserslist.loadConfig = env.loadConfig;
browserslist.coverage = function(browsers, stats) {
    var data;
    if (typeof stats === "undefined") data = browserslist.usage.global;
    else if (stats === "my stats") {
        var opts = {};
        opts.path = path.resolve ? path.resolve(".") : ".";
        var customStats = env.getStat(opts);
        if (!customStats) throw new BrowserslistError("Custom usage statistics was not provided");
        data = {};
        for(var browser in customStats)fillUsage(data, browser, customStats[browser]);
    } else if (typeof stats === "string") {
        if (stats.length > 2) stats = stats.toLowerCase();
        else stats = stats.toUpperCase();
        env.loadCountry(browserslist.usage, stats, browserslist.data);
        data = browserslist.usage[stats];
    } else {
        if ("dataByBrowser" in stats) stats = stats.dataByBrowser;
        data = {};
        for(var name in stats)for(var version in stats[name])data[name + " " + version] = stats[name][version];
    }
    return browsers.reduce(function(all, i) {
        var usage = data[i];
        if (usage === undefined) usage = data[i.replace(/ \S+$/, " 0")];
        return all + (usage || 0);
    }, 0);
};
function nodeQuery(context, node) {
    var matched = browserslist.nodeVersions.filter(function(i) {
        return isVersionsMatch(i, node.version);
    });
    if (matched.length === 0) {
        if (context.ignoreUnknownVersions) return [];
        else throw new BrowserslistError("Unknown version " + node.version + " of Node.js");
    }
    return [
        "node " + matched[matched.length - 1]
    ];
}
function sinceQuery(context, node) {
    var year = parseInt(node.year);
    var month = parseInt(node.month || "01") - 1;
    var day = parseInt(node.day || "01");
    return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context);
}
function coverQuery(context, node) {
    var coverage = parseFloat(node.coverage);
    var usage = browserslist.usage.global;
    if (node.place) {
        if (node.place.match(/^my\s+stats$/i)) {
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            usage = context.customUsage;
        } else {
            var place;
            if (node.place.length === 2) place = node.place.toUpperCase();
            else place = node.place.toLowerCase();
            env.loadCountry(browserslist.usage, place, browserslist.data);
            usage = browserslist.usage[place];
        }
    }
    var versions = Object.keys(usage).sort(function(a, b) {
        return usage[b] - usage[a];
    });
    var coveraged = 0;
    var result = [];
    var version;
    for(var i = 0; i < versions.length; i++){
        version = versions[i];
        if (usage[version] === 0) break;
        coveraged += usage[version];
        result.push(version);
        if (coveraged >= coverage) break;
    }
    return result;
}
var QUERIES = {
    last_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = getMajorVersions(data.released, node.versions);
                list = list.map(nameMapper(data.name));
                list = filterJumps(list, data.name, node.versions, context);
                return selected.concat(list);
            }, []);
        }
    },
    last_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = data.released.slice(-node.versions);
                list = list.map(nameMapper(data.name));
                list = filterJumps(list, data.name, node.versions, context);
                return selected.concat(list);
            }, []);
        }
    },
    last_electron_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
        select: function(context, node) {
            var validVersions = getMajorVersions(Object.keys(e2c), node.versions);
            return validVersions.map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    last_node_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
        select: function(context, node) {
            return getMajorVersions(browserslist.nodeVersions, node.versions).map(function(version) {
                return "node " + version;
            });
        }
    },
    last_browser_major_versions: {
        matches: [
            "versions",
            "browser"
        ],
        regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var validVersions = getMajorVersions(data.released, node.versions);
            var list = validVersions.map(nameMapper(data.name));
            list = filterJumps(list, data.name, node.versions, context);
            return list;
        }
    },
    last_electron_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(e2c).slice(-node.versions).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    last_node_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.slice(-node.versions).map(function(version) {
                return "node " + version;
            });
        }
    },
    last_browser_versions: {
        matches: [
            "versions",
            "browser"
        ],
        regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var list = data.released.slice(-node.versions).map(nameMapper(data.name));
            list = filterJumps(list, data.name, node.versions, context);
            return list;
        }
    },
    unreleased_versions: {
        matches: [],
        regexp: /^unreleased\s+versions$/i,
        select: function(context) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = data.versions.filter(function(v) {
                    return data.released.indexOf(v) === -1;
                });
                list = list.map(nameMapper(data.name));
                return selected.concat(list);
            }, []);
        }
    },
    unreleased_electron_versions: {
        matches: [],
        regexp: /^unreleased\s+electron\s+versions?$/i,
        select: function() {
            return [];
        }
    },
    unreleased_browser_versions: {
        matches: [
            "browser"
        ],
        regexp: /^unreleased\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            return data.versions.filter(function(v) {
                return data.released.indexOf(v) === -1;
            }).map(nameMapper(data.name));
        }
    },
    last_years: {
        matches: [
            "years"
        ],
        regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
        select: function(context, node) {
            return filterByYear(Date.now() - YEAR * node.years, context);
        }
    },
    since_y: {
        matches: [
            "year"
        ],
        regexp: /^since (\d+)$/i,
        select: sinceQuery
    },
    since_y_m: {
        matches: [
            "year",
            "month"
        ],
        regexp: /^since (\d+)-(\d+)$/i,
        select: sinceQuery
    },
    since_y_m_d: {
        matches: [
            "year",
            "month",
            "day"
        ],
        regexp: /^since (\d+)-(\d+)-(\d+)$/i,
        select: sinceQuery
    },
    popularity: {
        matches: [
            "sign",
            "popularity"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var usage = browserslist.usage.global;
            return Object.keys(usage).reduce(function(result, version) {
                if (node.sign === ">") {
                    if (usage[version] > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (usage[version] < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (usage[version] <= popularity) result.push(version);
                } else if (usage[version] >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_my_stats: {
        matches: [
            "sign",
            "popularity"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_config_stats: {
        matches: [
            "sign",
            "popularity",
            "config"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var stats = env.loadStat(context, node.config, browserslist.data);
            if (stats) {
                context.customUsage = {};
                for(var browser in stats)fillUsage(context.customUsage, browser, stats[browser]);
            }
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_place: {
        matches: [
            "sign",
            "popularity",
            "place"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var place = node.place;
            if (place.length === 2) place = place.toUpperCase();
            else place = place.toLowerCase();
            env.loadCountry(browserslist.usage, place, browserslist.data);
            var usage = browserslist.usage[place];
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    cover: {
        matches: [
            "coverage"
        ],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
        select: coverQuery
    },
    cover_in: {
        matches: [
            "coverage",
            "place"
        ],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
        select: coverQuery
    },
    supports: {
        matches: [
            "supportType",
            "feature"
        ],
        regexp: /^(?:(fully|partially)\s+)?supports\s+([\w-]+)$/,
        select: function(context, node) {
            env.loadFeature(browserslist.cache, node.feature);
            var withPartial = node.supportType !== "fully";
            var features = browserslist.cache[node.feature];
            var result = [];
            for(var name in features){
                var data = byName(name, context);
                // Only check desktop when latest released mobile has support
                var checkDesktop = context.mobileToDesktop && name in browserslist.desktopNames && isSupported(features[name][data.released.slice(-1)[0]], withPartial);
                data.versions.forEach(function(version) {
                    var flags = features[name][version];
                    if (flags === undefined && checkDesktop) flags = features[browserslist.desktopNames[name]][version];
                    if (isSupported(flags, withPartial)) result.push(name + " " + version);
                });
            }
            return result;
        }
    },
    electron_range: {
        matches: [
            "from",
            "to"
        ],
        regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            var fromToUse = normalizeElectron(node.from);
            var toToUse = normalizeElectron(node.to);
            var from = parseFloat(node.from);
            var to = parseFloat(node.to);
            if (!e2c[fromToUse]) throw new BrowserslistError("Unknown version " + from + " of electron");
            if (!e2c[toToUse]) throw new BrowserslistError("Unknown version " + to + " of electron");
            return Object.keys(e2c).filter(function(i) {
                var parsed = parseFloat(i);
                return parsed >= from && parsed <= to;
            }).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    node_range: {
        matches: [
            "from",
            "to"
        ],
        regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.filter(semverFilterLoose(">=", node.from)).filter(semverFilterLoose("<=", node.to)).map(function(v) {
                return "node " + v;
            });
        }
    },
    browser_range: {
        matches: [
            "browser",
            "from",
            "to"
        ],
        regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var from = parseFloat(normalizeVersion(data, node.from) || node.from);
            var to = parseFloat(normalizeVersion(data, node.to) || node.to);
            function filter(v) {
                var parsed = parseFloat(v);
                return parsed >= from && parsed <= to;
            }
            return data.released.filter(filter).map(nameMapper(data.name));
        }
    },
    electron_ray: {
        matches: [
            "sign",
            "version"
        ],
        regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
            var versionToUse = normalizeElectron(node.version);
            return Object.keys(e2c).filter(generateFilter(node.sign, versionToUse)).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    node_ray: {
        matches: [
            "sign",
            "version"
        ],
        regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.filter(generateSemverFilter(node.sign, node.version)).map(function(v) {
                return "node " + v;
            });
        }
    },
    browser_ray: {
        matches: [
            "browser",
            "sign",
            "version"
        ],
        regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
        select: function(context, node) {
            var version = node.version;
            var data = checkName(node.browser, context);
            var alias = browserslist.versionAliases[data.name][version];
            if (alias) version = alias;
            return data.released.filter(generateFilter(node.sign, version)).map(function(v) {
                return data.name + " " + v;
            });
        }
    },
    firefox_esr: {
        matches: [],
        regexp: /^(firefox|ff|fx)\s+esr$/i,
        select: function() {
            return [
                "firefox 115"
            ];
        }
    },
    opera_mini_all: {
        matches: [],
        regexp: /(operamini|op_mini)\s+all/i,
        select: function() {
            return [
                "op_mini all"
            ];
        }
    },
    electron_version: {
        matches: [
            "version"
        ],
        regexp: /^electron\s+([\d.]+)$/i,
        select: function(context, node) {
            var versionToUse = normalizeElectron(node.version);
            var chrome = e2c[versionToUse];
            if (!chrome) throw new BrowserslistError("Unknown version " + node.version + " of electron");
            return [
                "chrome " + chrome
            ];
        }
    },
    node_major_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+)$/i,
        select: nodeQuery
    },
    node_minor_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+\.\d+)$/i,
        select: nodeQuery
    },
    node_patch_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
        select: nodeQuery
    },
    current_node: {
        matches: [],
        regexp: /^current\s+node$/i,
        select: function(context) {
            return [
                env.currentNode(resolve, context)
            ];
        }
    },
    maintained_node: {
        matches: [],
        regexp: /^maintained\s+node\s+versions$/i,
        select: function(context) {
            var now = Date.now();
            var queries = Object.keys(jsEOL).filter(function(key) {
                return now < Date.parse(jsEOL[key].end) && now > Date.parse(jsEOL[key].start) && isEolReleased(key);
            }).map(function(key) {
                return "node " + key.slice(1);
            });
            return resolve(queries, context);
        }
    },
    phantomjs_1_9: {
        matches: [],
        regexp: /^phantomjs\s+1.9$/i,
        select: function() {
            return [
                "safari 5"
            ];
        }
    },
    phantomjs_2_1: {
        matches: [],
        regexp: /^phantomjs\s+2.1$/i,
        select: function() {
            return [
                "safari 6"
            ];
        }
    },
    browser_version: {
        matches: [
            "browser",
            "version"
        ],
        regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
        select: function(context, node) {
            var version = node.version;
            if (/^tp$/i.test(version)) version = "TP";
            var data = checkName(node.browser, context);
            var alias = normalizeVersion(data, version);
            if (alias) version = alias;
            else {
                if (version.indexOf(".") === -1) alias = version + ".0";
                else alias = version.replace(/\.0$/, "");
                alias = normalizeVersion(data, alias);
                if (alias) version = alias;
                else if (context.ignoreUnknownVersions) return [];
                else throw new BrowserslistError("Unknown version " + version + " of " + node.browser);
            }
            return [
                data.name + " " + version
            ];
        }
    },
    browserslist_config: {
        matches: [],
        regexp: /^browserslist config$/i,
        select: function(context) {
            return browserslist(undefined, context);
        }
    },
    extends: {
        matches: [
            "config"
        ],
        regexp: /^extends (.+)$/i,
        select: function(context, node) {
            return resolve(env.loadQueries(context, node.config), context);
        }
    },
    defaults: {
        matches: [],
        regexp: /^defaults$/i,
        select: function(context) {
            return resolve(browserslist.defaults, context);
        }
    },
    dead: {
        matches: [],
        regexp: /^dead$/i,
        select: function(context) {
            var dead = [
                "Baidu >= 0",
                "ie <= 11",
                "ie_mob <= 11",
                "bb <= 10",
                "op_mob <= 12.1",
                "samsung 4"
            ];
            return resolve(dead, context);
        }
    },
    unknown: {
        matches: [],
        regexp: /^(\w+)$/i,
        select: function(context, node) {
            if (byName(node.query, context)) throw new BrowserslistError("Specify versions in Browserslist query for browser " + node.query);
            else throw unknownQuery(node.query);
        }
    }
};
(function() {
    for(var name in agents){
        var browser = agents[name];
        browserslist.data[name] = {
            name: name,
            versions: normalize(agents[name].versions),
            released: normalize(agents[name].versions.slice(0, -3)),
            releaseDate: agents[name].release_date
        };
        fillUsage(browserslist.usage.global, name, browser.usage_global);
        browserslist.versionAliases[name] = {};
        for(var i = 0; i < browser.versions.length; i++){
            var full = browser.versions[i];
            if (!full) continue;
            if (full.indexOf("-") !== -1) {
                var interval = full.split("-");
                for(var j = 0; j < interval.length; j++)browserslist.versionAliases[name][interval[j]] = full;
            }
        }
    }
    browserslist.nodeVersions = jsReleases.map(function(release) {
        return release.version;
    });
})();
module.exports = browserslist;

},{"92e3660602ae04ac":"qrnUB","cbe20b3656de85b3":"1o0P3","86a87d707b63a4a0":"b7Kzh","16d9435aac8c9c34":"jhUEF","f94f671dcbf096f7":"i95xm","a610b394abe6d220":"4GzM4","3d001556e62ae7c7":"a4Lkh","d933602907f19a21":"hteYL"}],"qrnUB":[function(require,module,exports) {
module.exports = JSON.parse('[{"name":"nodejs","version":"0.2.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.3.8.0"},{"name":"nodejs","version":"0.3.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.5.1.0"},{"name":"nodejs","version":"0.4.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.2.0"},{"name":"nodejs","version":"0.5.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.8.25"},{"name":"nodejs","version":"0.6.0","date":"2011-11-04","lts":false,"security":false,"v8":"3.6.6.6"},{"name":"nodejs","version":"0.7.0","date":"2012-01-17","lts":false,"security":false,"v8":"3.8.6.0"},{"name":"nodejs","version":"0.8.0","date":"2012-06-22","lts":false,"security":false,"v8":"3.11.10.10"},{"name":"nodejs","version":"0.9.0","date":"2012-07-20","lts":false,"security":false,"v8":"3.11.10.15"},{"name":"nodejs","version":"0.10.0","date":"2013-03-11","lts":false,"security":false,"v8":"3.14.5.8"},{"name":"nodejs","version":"0.11.0","date":"2013-03-28","lts":false,"security":false,"v8":"3.17.13.0"},{"name":"nodejs","version":"0.12.0","date":"2015-02-06","lts":false,"security":false,"v8":"3.28.73.0"},{"name":"nodejs","version":"4.0.0","date":"2015-09-08","lts":false,"security":false,"v8":"4.5.103.30"},{"name":"nodejs","version":"4.1.0","date":"2015-09-17","lts":false,"security":false,"v8":"4.5.103.33"},{"name":"nodejs","version":"4.2.0","date":"2015-10-12","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.3.0","date":"2016-02-09","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.4.0","date":"2016-03-08","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.5.0","date":"2016-08-16","lts":"Argon","security":false,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.6.0","date":"2016-09-27","lts":"Argon","security":true,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.7.0","date":"2016-12-06","lts":"Argon","security":false,"v8":"4.5.103.43"},{"name":"nodejs","version":"4.8.0","date":"2017-02-21","lts":"Argon","security":false,"v8":"4.5.103.45"},{"name":"nodejs","version":"4.9.0","date":"2018-03-28","lts":"Argon","security":true,"v8":"4.5.103.53"},{"name":"nodejs","version":"5.0.0","date":"2015-10-29","lts":false,"security":false,"v8":"4.6.85.28"},{"name":"nodejs","version":"5.1.0","date":"2015-11-17","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.2.0","date":"2015-12-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.3.0","date":"2015-12-15","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.4.0","date":"2016-01-06","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.5.0","date":"2016-01-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.6.0","date":"2016-02-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.7.0","date":"2016-02-23","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.8.0","date":"2016-03-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.9.0","date":"2016-03-16","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.10.0","date":"2016-04-01","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.11.0","date":"2016-04-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.12.0","date":"2016-06-23","lts":false,"security":false,"v8":"4.6.85.32"},{"name":"nodejs","version":"6.0.0","date":"2016-04-26","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.1.0","date":"2016-05-05","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.2.0","date":"2016-05-17","lts":false,"security":false,"v8":"5.0.71.47"},{"name":"nodejs","version":"6.3.0","date":"2016-07-06","lts":false,"security":false,"v8":"5.0.71.52"},{"name":"nodejs","version":"6.4.0","date":"2016-08-12","lts":false,"security":false,"v8":"5.0.71.60"},{"name":"nodejs","version":"6.5.0","date":"2016-08-26","lts":false,"security":false,"v8":"5.1.281.81"},{"name":"nodejs","version":"6.6.0","date":"2016-09-14","lts":false,"security":false,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.7.0","date":"2016-09-27","lts":false,"security":true,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.8.0","date":"2016-10-12","lts":false,"security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.9.0","date":"2016-10-18","lts":"Boron","security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.10.0","date":"2017-02-21","lts":"Boron","security":false,"v8":"5.1.281.93"},{"name":"nodejs","version":"6.11.0","date":"2017-06-06","lts":"Boron","security":false,"v8":"5.1.281.102"},{"name":"nodejs","version":"6.12.0","date":"2017-11-06","lts":"Boron","security":false,"v8":"5.1.281.108"},{"name":"nodejs","version":"6.13.0","date":"2018-02-10","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.14.0","date":"2018-03-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.15.0","date":"2018-11-27","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.16.0","date":"2018-12-26","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.17.0","date":"2019-02-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"7.0.0","date":"2016-10-25","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.1.0","date":"2016-11-08","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.2.0","date":"2016-11-22","lts":false,"security":false,"v8":"5.4.500.43"},{"name":"nodejs","version":"7.3.0","date":"2016-12-20","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.4.0","date":"2017-01-04","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.5.0","date":"2017-01-31","lts":false,"security":false,"v8":"5.4.500.48"},{"name":"nodejs","version":"7.6.0","date":"2017-02-21","lts":false,"security":false,"v8":"5.5.372.40"},{"name":"nodejs","version":"7.7.0","date":"2017-02-28","lts":false,"security":false,"v8":"5.5.372.41"},{"name":"nodejs","version":"7.8.0","date":"2017-03-29","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.9.0","date":"2017-04-11","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.10.0","date":"2017-05-02","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"8.0.0","date":"2017-05-30","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.1.0","date":"2017-06-08","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.2.0","date":"2017-07-19","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.3.0","date":"2017-08-08","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.4.0","date":"2017-08-15","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.5.0","date":"2017-09-12","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.6.0","date":"2017-09-26","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.7.0","date":"2017-10-11","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.8.0","date":"2017-10-24","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.9.0","date":"2017-10-31","lts":"Carbon","security":false,"v8":"6.1.534.46"},{"name":"nodejs","version":"8.10.0","date":"2018-03-06","lts":"Carbon","security":false,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.11.0","date":"2018-03-28","lts":"Carbon","security":true,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.12.0","date":"2018-09-10","lts":"Carbon","security":false,"v8":"6.2.414.66"},{"name":"nodejs","version":"8.13.0","date":"2018-11-20","lts":"Carbon","security":false,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.14.0","date":"2018-11-27","lts":"Carbon","security":true,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.15.0","date":"2018-12-26","lts":"Carbon","security":false,"v8":"6.2.414.75"},{"name":"nodejs","version":"8.16.0","date":"2019-04-16","lts":"Carbon","security":false,"v8":"6.2.414.77"},{"name":"nodejs","version":"8.17.0","date":"2019-12-17","lts":"Carbon","security":true,"v8":"6.2.414.78"},{"name":"nodejs","version":"9.0.0","date":"2017-10-31","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.1.0","date":"2017-11-07","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.2.0","date":"2017-11-14","lts":false,"security":false,"v8":"6.2.414.44"},{"name":"nodejs","version":"9.3.0","date":"2017-12-12","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.4.0","date":"2018-01-10","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.5.0","date":"2018-01-31","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.6.0","date":"2018-02-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.7.0","date":"2018-03-01","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.8.0","date":"2018-03-07","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.9.0","date":"2018-03-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.10.0","date":"2018-03-28","lts":false,"security":true,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.11.0","date":"2018-04-04","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"10.0.0","date":"2018-04-24","lts":false,"security":false,"v8":"6.6.346.24"},{"name":"nodejs","version":"10.1.0","date":"2018-05-08","lts":false,"security":false,"v8":"6.6.346.27"},{"name":"nodejs","version":"10.2.0","date":"2018-05-23","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.3.0","date":"2018-05-29","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.4.0","date":"2018-06-06","lts":false,"security":false,"v8":"6.7.288.43"},{"name":"nodejs","version":"10.5.0","date":"2018-06-20","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.6.0","date":"2018-07-04","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.7.0","date":"2018-07-18","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.8.0","date":"2018-08-01","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.9.0","date":"2018-08-15","lts":false,"security":false,"v8":"6.8.275.24"},{"name":"nodejs","version":"10.10.0","date":"2018-09-06","lts":false,"security":false,"v8":"6.8.275.30"},{"name":"nodejs","version":"10.11.0","date":"2018-09-19","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.12.0","date":"2018-10-10","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.13.0","date":"2018-10-30","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.14.0","date":"2018-11-27","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.15.0","date":"2018-12-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.16.0","date":"2019-05-28","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.17.0","date":"2019-10-22","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.18.0","date":"2019-12-17","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.19.0","date":"2020-02-05","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.20.0","date":"2020-03-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.21.0","date":"2020-06-02","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.22.0","date":"2020-07-21","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.23.0","date":"2020-10-27","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.24.0","date":"2021-02-23","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"11.0.0","date":"2018-10-23","lts":false,"security":false,"v8":"7.0.276.28"},{"name":"nodejs","version":"11.1.0","date":"2018-10-30","lts":false,"security":false,"v8":"7.0.276.32"},{"name":"nodejs","version":"11.2.0","date":"2018-11-15","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.3.0","date":"2018-11-27","lts":false,"security":true,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.4.0","date":"2018-12-07","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.5.0","date":"2018-12-18","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.6.0","date":"2018-12-26","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.7.0","date":"2019-01-17","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.8.0","date":"2019-01-24","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.9.0","date":"2019-01-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.10.0","date":"2019-02-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.11.0","date":"2019-03-05","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.12.0","date":"2019-03-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.13.0","date":"2019-03-28","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.14.0","date":"2019-04-10","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.15.0","date":"2019-04-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"12.0.0","date":"2019-04-23","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.1.0","date":"2019-04-29","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.2.0","date":"2019-05-07","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.3.0","date":"2019-05-21","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.4.0","date":"2019-06-04","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.5.0","date":"2019-06-26","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.6.0","date":"2019-07-03","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.7.0","date":"2019-07-23","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.8.0","date":"2019-08-06","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.9.0","date":"2019-08-20","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.10.0","date":"2019-09-04","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.11.0","date":"2019-09-25","lts":false,"security":false,"v8":"7.7.299.11"},{"name":"nodejs","version":"12.12.0","date":"2019-10-11","lts":false,"security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.13.0","date":"2019-10-21","lts":"Erbium","security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.14.0","date":"2019-12-17","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.15.0","date":"2020-02-05","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.16.0","date":"2020-02-11","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.17.0","date":"2020-05-26","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.18.0","date":"2020-06-02","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.19.0","date":"2020-10-06","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.20.0","date":"2020-11-24","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.21.0","date":"2021-02-23","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.22.0","date":"2021-03-30","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"13.0.0","date":"2019-10-22","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.1.0","date":"2019-11-05","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.2.0","date":"2019-11-21","lts":false,"security":false,"v8":"7.9.317.23"},{"name":"nodejs","version":"13.3.0","date":"2019-12-03","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.4.0","date":"2019-12-17","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.5.0","date":"2019-12-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.6.0","date":"2020-01-07","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.7.0","date":"2020-01-21","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.8.0","date":"2020-02-05","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.9.0","date":"2020-02-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.10.0","date":"2020-03-04","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.11.0","date":"2020-03-12","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.12.0","date":"2020-03-26","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.13.0","date":"2020-04-14","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.14.0","date":"2020-04-29","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"14.0.0","date":"2020-04-21","lts":false,"security":false,"v8":"8.1.307.30"},{"name":"nodejs","version":"14.1.0","date":"2020-04-29","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.2.0","date":"2020-05-05","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.3.0","date":"2020-05-19","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.4.0","date":"2020-06-02","lts":false,"security":true,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.5.0","date":"2020-06-30","lts":false,"security":false,"v8":"8.3.110.9"},{"name":"nodejs","version":"14.6.0","date":"2020-07-20","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.7.0","date":"2020-07-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.8.0","date":"2020-08-11","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.9.0","date":"2020-08-27","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.10.0","date":"2020-09-08","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.11.0","date":"2020-09-15","lts":false,"security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.12.0","date":"2020-09-22","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.13.0","date":"2020-09-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.14.0","date":"2020-10-15","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.15.0","date":"2020-10-27","lts":"Fermium","security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.16.0","date":"2021-02-23","lts":"Fermium","security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.17.0","date":"2021-05-11","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.18.0","date":"2021-09-28","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.19.0","date":"2022-02-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.20.0","date":"2022-07-07","lts":"Fermium","security":true,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.21.0","date":"2022-11-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"15.0.0","date":"2020-10-20","lts":false,"security":false,"v8":"8.6.395.16"},{"name":"nodejs","version":"15.1.0","date":"2020-11-04","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.2.0","date":"2020-11-10","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.3.0","date":"2020-11-24","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.4.0","date":"2020-12-09","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.5.0","date":"2020-12-22","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.6.0","date":"2021-01-14","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.7.0","date":"2021-01-25","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.8.0","date":"2021-02-02","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.9.0","date":"2021-02-18","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.10.0","date":"2021-02-23","lts":false,"security":true,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.11.0","date":"2021-03-03","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.12.0","date":"2021-03-17","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.13.0","date":"2021-03-31","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.14.0","date":"2021-04-06","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"16.0.0","date":"2021-04-20","lts":false,"security":false,"v8":"9.0.257.17"},{"name":"nodejs","version":"16.1.0","date":"2021-05-04","lts":false,"security":false,"v8":"9.0.257.24"},{"name":"nodejs","version":"16.2.0","date":"2021-05-19","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.3.0","date":"2021-06-03","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.4.0","date":"2021-06-23","lts":false,"security":false,"v8":"9.1.269.36"},{"name":"nodejs","version":"16.5.0","date":"2021-07-14","lts":false,"security":false,"v8":"9.1.269.38"},{"name":"nodejs","version":"16.6.0","date":"2021-07-29","lts":false,"security":true,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.7.0","date":"2021-08-18","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.8.0","date":"2021-08-25","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.9.0","date":"2021-09-07","lts":false,"security":false,"v8":"9.3.345.16"},{"name":"nodejs","version":"16.10.0","date":"2021-09-22","lts":false,"security":false,"v8":"9.3.345.19"},{"name":"nodejs","version":"16.11.0","date":"2021-10-08","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.12.0","date":"2021-10-20","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.13.0","date":"2021-10-26","lts":"Gallium","security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.14.0","date":"2022-02-08","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.15.0","date":"2022-04-26","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.16.0","date":"2022-07-07","lts":"Gallium","security":true,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.17.0","date":"2022-08-16","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.18.0","date":"2022-10-12","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.19.0","date":"2022-12-13","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.20.0","date":"2023-03-28","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"17.0.0","date":"2021-10-19","lts":false,"security":false,"v8":"9.5.172.21"},{"name":"nodejs","version":"17.1.0","date":"2021-11-09","lts":false,"security":false,"v8":"9.5.172.25"},{"name":"nodejs","version":"17.2.0","date":"2021-11-30","lts":false,"security":false,"v8":"9.6.180.14"},{"name":"nodejs","version":"17.3.0","date":"2021-12-17","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.4.0","date":"2022-01-18","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.5.0","date":"2022-02-10","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.6.0","date":"2022-02-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.7.0","date":"2022-03-09","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.8.0","date":"2022-03-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.9.0","date":"2022-04-07","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"18.0.0","date":"2022-04-18","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.1.0","date":"2022-05-03","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.2.0","date":"2022-05-17","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.3.0","date":"2022-06-02","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.4.0","date":"2022-06-16","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.5.0","date":"2022-07-06","lts":false,"security":true,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.6.0","date":"2022-07-13","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.7.0","date":"2022-07-26","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.8.0","date":"2022-08-24","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.9.0","date":"2022-09-07","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.10.0","date":"2022-09-28","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.11.0","date":"2022-10-13","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.12.0","date":"2022-10-25","lts":"Hydrogen","security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.13.0","date":"2023-01-05","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.14.0","date":"2023-02-01","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.15.0","date":"2023-03-05","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.16.0","date":"2023-04-12","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.17.0","date":"2023-07-18","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.18.0","date":"2023-09-18","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.19.0","date":"2023-11-29","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"19.0.0","date":"2022-10-17","lts":false,"security":false,"v8":"10.7.193.13"},{"name":"nodejs","version":"19.1.0","date":"2022-11-14","lts":false,"security":false,"v8":"10.7.193.20"},{"name":"nodejs","version":"19.2.0","date":"2022-11-29","lts":false,"security":false,"v8":"10.8.168.20"},{"name":"nodejs","version":"19.3.0","date":"2022-12-14","lts":false,"security":false,"v8":"10.8.168.21"},{"name":"nodejs","version":"19.4.0","date":"2023-01-05","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.5.0","date":"2023-01-24","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.6.0","date":"2023-02-01","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.7.0","date":"2023-02-21","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.8.0","date":"2023-03-14","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.9.0","date":"2023-04-10","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"20.0.0","date":"2023-04-17","lts":false,"security":false,"v8":"11.3.244.4"},{"name":"nodejs","version":"20.1.0","date":"2023-05-03","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.2.0","date":"2023-05-16","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.3.0","date":"2023-06-08","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.4.0","date":"2023-07-04","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.5.0","date":"2023-07-19","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.6.0","date":"2023-08-23","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.7.0","date":"2023-09-18","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.8.0","date":"2023-09-28","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.9.0","date":"2023-10-24","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.10.0","date":"2023-11-22","lts":"Iron","security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"21.0.0","date":"2023-10-17","lts":false,"security":false,"v8":"11.8.172.13"},{"name":"nodejs","version":"21.1.0","date":"2023-10-24","lts":false,"security":false,"v8":"11.8.172.15"},{"name":"nodejs","version":"21.2.0","date":"2023-11-14","lts":false,"security":false,"v8":"11.8.172.17"},{"name":"nodejs","version":"21.3.0","date":"2023-11-30","lts":false,"security":false,"v8":"11.8.172.17"}]');

},{}],"1o0P3":[function(require,module,exports) {
"use strict";
const browsers = require("761a276a9b325335").browsers;
const versions = require("2a3221c2ff64becb").browserVersions;
const agentsData = require("923f718a75e41a18");
function unpackBrowserVersions(versionsData) {
    return Object.keys(versionsData).reduce((usage, version)=>{
        usage[versions[version]] = versionsData[version];
        return usage;
    }, {});
}
module.exports.agents = Object.keys(agentsData).reduce((map, key)=>{
    let versionsData = agentsData[key];
    map[browsers[key]] = Object.keys(versionsData).reduce((data, entry)=>{
        if (entry === "A") data.usage_global = unpackBrowserVersions(versionsData[entry]);
        else if (entry === "C") data.versions = versionsData[entry].reduce((list, version)=>{
            if (version === "") list.push(null);
            else list.push(versions[version]);
            return list;
        }, []);
        else if (entry === "D") data.prefix_exceptions = unpackBrowserVersions(versionsData[entry]);
        else if (entry === "E") data.browser = versionsData[entry];
        else if (entry === "F") data.release_date = Object.keys(versionsData[entry]).reduce((map2, key2)=>{
            map2[versions[key2]] = versionsData[entry][key2];
            return map2;
        }, {});
        else // entry is B
        data.prefix = versionsData[entry];
        return data;
    }, {});
    return map;
}, {});

},{"761a276a9b325335":"1klRD","2a3221c2ff64becb":"gSgrO","923f718a75e41a18":"dwIbB"}],"1klRD":[function(require,module,exports) {
module.exports.browsers = require("b08db31f4e727e49");

},{"b08db31f4e727e49":"dD80h"}],"dD80h":[function(require,module,exports) {
module.exports = {
    A: "ie",
    B: "edge",
    C: "firefox",
    D: "chrome",
    E: "safari",
    F: "opera",
    G: "ios_saf",
    H: "op_mini",
    I: "android",
    J: "bb",
    K: "op_mob",
    L: "and_chr",
    M: "and_ff",
    N: "ie_mob",
    O: "and_uc",
    P: "samsung",
    Q: "and_qq",
    R: "baidu",
    S: "kaios"
};

},{}],"gSgrO":[function(require,module,exports) {
module.exports.browserVersions = require("36214008d1c0abda");

},{"36214008d1c0abda":"jocZZ"}],"jocZZ":[function(require,module,exports) {
module.exports = {
    "0": "111",
    "1": "112",
    "2": "113",
    "3": "114",
    "4": "115",
    "5": "116",
    "6": "117",
    "7": "118",
    "8": "119",
    "9": "120",
    A: "10",
    B: "11",
    C: "12",
    D: "7",
    E: "8",
    F: "9",
    G: "15",
    H: "80",
    I: "124",
    J: "4",
    K: "6",
    L: "13",
    M: "14",
    N: "16",
    O: "17",
    P: "18",
    Q: "79",
    R: "81",
    S: "83",
    T: "84",
    U: "85",
    V: "86",
    W: "87",
    X: "88",
    Y: "89",
    Z: "90",
    a: "91",
    b: "92",
    c: "93",
    d: "94",
    e: "95",
    f: "96",
    g: "97",
    h: "98",
    i: "99",
    j: "100",
    k: "101",
    l: "102",
    m: "103",
    n: "104",
    o: "105",
    p: "106",
    q: "107",
    r: "108",
    s: "109",
    t: "125",
    u: "20",
    v: "21",
    w: "22",
    x: "23",
    y: "24",
    z: "110",
    AB: "121",
    BB: "122",
    CB: "123",
    DB: "5",
    EB: "19",
    FB: "25",
    GB: "26",
    HB: "27",
    IB: "28",
    JB: "29",
    KB: "30",
    LB: "31",
    MB: "32",
    NB: "33",
    OB: "34",
    PB: "35",
    QB: "36",
    RB: "37",
    SB: "38",
    TB: "39",
    UB: "40",
    VB: "41",
    WB: "42",
    XB: "43",
    YB: "44",
    ZB: "45",
    aB: "46",
    bB: "47",
    cB: "48",
    dB: "49",
    eB: "50",
    fB: "51",
    gB: "52",
    hB: "53",
    iB: "54",
    jB: "55",
    kB: "56",
    lB: "57",
    mB: "58",
    nB: "60",
    oB: "62",
    pB: "63",
    qB: "64",
    rB: "65",
    sB: "66",
    tB: "67",
    uB: "68",
    vB: "69",
    wB: "70",
    xB: "71",
    yB: "72",
    zB: "73",
    "0B": "74",
    "1B": "75",
    "2B": "76",
    "3B": "77",
    "4B": "78",
    "5B": "11.1",
    "6B": "12.1",
    "7B": "15.5",
    "8B": "16.0",
    "9B": "17.0",
    AC: "3",
    BC: "59",
    CC: "61",
    DC: "82",
    EC: "126",
    FC: "127",
    GC: "128",
    HC: "3.2",
    IC: "10.1",
    JC: "15.2-15.3",
    KC: "15.4",
    LC: "16.1",
    MC: "16.2",
    NC: "16.3",
    OC: "16.4",
    PC: "16.5",
    QC: "17.1",
    RC: "17.2",
    SC: "17.3",
    TC: "17.4",
    UC: "17.5",
    VC: "17.6",
    WC: "11.5",
    XC: "4.2-4.3",
    YC: "5.5",
    ZC: "2",
    aC: "129",
    bC: "3.5",
    cC: "3.6",
    dC: "3.1",
    eC: "5.1",
    fC: "6.1",
    gC: "7.1",
    hC: "9.1",
    iC: "13.1",
    jC: "14.1",
    kC: "15.1",
    lC: "15.6",
    mC: "16.6",
    nC: "TP",
    oC: "9.5-9.6",
    pC: "10.0-10.1",
    qC: "10.5",
    rC: "10.6",
    sC: "11.6",
    tC: "4.0-4.1",
    uC: "5.0-5.1",
    vC: "6.0-6.1",
    wC: "7.0-7.1",
    xC: "8.1-8.4",
    yC: "9.0-9.2",
    zC: "9.3",
    "0C": "10.0-10.2",
    "1C": "10.3",
    "2C": "11.0-11.2",
    "3C": "11.3-11.4",
    "4C": "12.0-12.1",
    "5C": "12.2-12.5",
    "6C": "13.0-13.1",
    "7C": "13.2",
    "8C": "13.3",
    "9C": "13.4-13.7",
    AD: "14.0-14.4",
    BD: "14.5-14.8",
    CD: "15.0-15.1",
    DD: "15.6-15.8",
    ED: "16.6-16.7",
    FD: "all",
    GD: "2.1",
    HD: "2.2",
    ID: "2.3",
    JD: "4.1",
    KD: "4.4",
    LD: "4.4.3-4.4.4",
    MD: "5.0-5.4",
    ND: "6.2-6.4",
    OD: "7.2-7.4",
    PD: "8.2",
    QD: "9.2",
    RD: "11.1-11.2",
    SD: "12.0",
    TD: "13.0",
    UD: "14.0",
    VD: "15.0",
    WD: "18.0",
    XD: "19.0",
    YD: "14.9",
    ZD: "13.52",
    aD: "2.5",
    bD: "3.0-3.1"
};

},{}],"dwIbB":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            K: 0,
            D: 0,
            E: 0.0239157,
            F: 0.0597892,
            A: 0,
            B: 0.55006,
            YC: 0
        },
        B: "ms",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "YC",
            "K",
            "D",
            "E",
            "F",
            "A",
            "B",
            "",
            "",
            ""
        ],
        E: "IE",
        F: {
            YC: 962323200,
            K: 998870400,
            D: 1161129600,
            E: 1237420800,
            F: 1300060800,
            A: 1346716800,
            B: 1381968000
        }
    },
    B: {
        A: {
            "0": 0.007682,
            "1": 0.007682,
            "2": 0.015364,
            "3": 0.015364,
            "4": 0.007682,
            "5": 0.007682,
            "6": 0.011523,
            "7": 0.011523,
            "8": 0.019205,
            "9": 0.042251,
            C: 0,
            L: 0,
            M: 0,
            G: 0,
            N: 0,
            O: 0.003841,
            P: 0.034569,
            Q: 0,
            H: 0,
            R: 0,
            S: 0,
            T: 0,
            U: 0,
            V: 0,
            W: 0,
            X: 0,
            Y: 0,
            Z: 0,
            a: 0,
            b: 0.011523,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 0,
            l: 0,
            m: 0,
            n: 0,
            o: 0,
            p: 0,
            q: 0.003841,
            r: 0.007682,
            s: 0.069138,
            z: 0.007682,
            AB: 0.042251,
            BB: 0.280393,
            CB: 3.02671,
            I: 1.35587,
            t: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "C",
            "L",
            "M",
            "G",
            "N",
            "O",
            "P",
            "Q",
            "H",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "I",
            "t",
            "",
            "",
            ""
        ],
        E: "Edge",
        F: {
            "0": 1678665600,
            "1": 1680825600,
            "2": 1683158400,
            "3": 1685664000,
            "4": 1689897600,
            "5": 1692576000,
            "6": 1694649600,
            "7": 1697155200,
            "8": 1698969600,
            "9": 1701993600,
            C: 1438128000,
            L: 1447286400,
            M: 1470096000,
            G: 1491868800,
            N: 1508198400,
            O: 1525046400,
            P: 1542067200,
            Q: 1579046400,
            H: 1581033600,
            R: 1586736000,
            S: 1590019200,
            T: 1594857600,
            U: 1598486400,
            V: 1602201600,
            W: 1605830400,
            X: 1611360000,
            Y: 1614816000,
            Z: 1618358400,
            a: 1622073600,
            b: 1626912000,
            c: 1630627200,
            d: 1632441600,
            e: 1634774400,
            f: 1637539200,
            g: 1641427200,
            h: 1643932800,
            i: 1646265600,
            j: 1649635200,
            k: 1651190400,
            l: 1653955200,
            m: 1655942400,
            n: 1659657600,
            o: 1661990400,
            p: 1664755200,
            q: 1666915200,
            r: 1670198400,
            s: 1673481600,
            z: 1675900800,
            AB: 1706227200,
            BB: 1708732800,
            CB: 1711152000,
            I: 1713398400,
            t: 1715990400
        },
        D: {
            C: "ms",
            L: "ms",
            M: "ms",
            G: "ms",
            N: "ms",
            O: "ms",
            P: "ms"
        }
    },
    C: {
        A: {
            "0": 0,
            "1": 0,
            "2": 0.007682,
            "3": 0,
            "4": 0.372577,
            "5": 0,
            "6": 0.007682,
            "7": 0.099866,
            "8": 0.003841,
            "9": 0.011523,
            ZC: 0,
            AC: 0,
            J: 0.007682,
            DB: 0,
            K: 0,
            D: 0,
            E: 0,
            F: 0,
            A: 0,
            B: 0.011523,
            C: 0,
            L: 0,
            M: 0,
            G: 0,
            N: 0,
            O: 0,
            P: 0,
            EB: 0,
            u: 0,
            v: 0,
            w: 0,
            x: 0,
            y: 0,
            FB: 0,
            GB: 0,
            HB: 0,
            IB: 0,
            JB: 0,
            KB: 0,
            LB: 0,
            MB: 0,
            NB: 0,
            OB: 0,
            PB: 0,
            QB: 0,
            RB: 0,
            SB: 0,
            TB: 0,
            UB: 0,
            VB: 0,
            WB: 0,
            XB: 0.007682,
            YB: 0.007682,
            ZB: 0.007682,
            aB: 0,
            bB: 0,
            cB: 0,
            dB: 0,
            eB: 0.007682,
            fB: 0,
            gB: 0.049933,
            hB: 0.007682,
            iB: 0.007682,
            jB: 0,
            kB: 0.019205,
            lB: 0,
            mB: 0,
            BC: 0.003841,
            nB: 0,
            CC: 0,
            oB: 0,
            pB: 0,
            qB: 0,
            rB: 0,
            sB: 0,
            tB: 0,
            uB: 0,
            vB: 0,
            wB: 0,
            xB: 0,
            yB: 0,
            zB: 0,
            "0B": 0,
            "1B": 0,
            "2B": 0,
            "3B": 0,
            "4B": 0.015364,
            Q: 0,
            H: 0,
            R: 0,
            DC: 0,
            S: 0,
            T: 0,
            U: 0,
            V: 0,
            W: 0,
            X: 0.007682,
            Y: 0,
            Z: 0,
            a: 0,
            b: 0,
            c: 0,
            d: 0.003841,
            e: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 0,
            l: 0.026887,
            m: 0.107548,
            n: 0.007682,
            o: 0,
            p: 0,
            q: 0,
            r: 0.003841,
            s: 0.007682,
            z: 0,
            AB: 0.011523,
            BB: 0.019205,
            CB: 0.049933,
            I: 1.04475,
            t: 0.530058,
            EC: 0.003841,
            FC: 0,
            GC: 0,
            aC: 0,
            bC: 0,
            cC: 0
        },
        B: "moz",
        C: [
            "ZC",
            "AC",
            "bC",
            "cC",
            "J",
            "DB",
            "K",
            "D",
            "E",
            "F",
            "A",
            "B",
            "C",
            "L",
            "M",
            "G",
            "N",
            "O",
            "P",
            "EB",
            "u",
            "v",
            "w",
            "x",
            "y",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "SB",
            "TB",
            "UB",
            "VB",
            "WB",
            "XB",
            "YB",
            "ZB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "jB",
            "kB",
            "lB",
            "mB",
            "BC",
            "nB",
            "CC",
            "oB",
            "pB",
            "qB",
            "rB",
            "sB",
            "tB",
            "uB",
            "vB",
            "wB",
            "xB",
            "yB",
            "zB",
            "0B",
            "1B",
            "2B",
            "3B",
            "4B",
            "Q",
            "H",
            "R",
            "DC",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "I",
            "t",
            "EC",
            "FC",
            "GC",
            "aC"
        ],
        E: "Firefox",
        F: {
            "0": 1678752000,
            "1": 1681171200,
            "2": 1683590400,
            "3": 1686009600,
            "4": 1688428800,
            "5": 1690848000,
            "6": 1693267200,
            "7": 1695686400,
            "8": 1698105600,
            "9": 1700524800,
            ZC: 1161648000,
            AC: 1213660800,
            bC: 1246320000,
            cC: 1264032000,
            J: 1300752000,
            DB: 1308614400,
            K: 1313452800,
            D: 1317081600,
            E: 1317081600,
            F: 1320710400,
            A: 1324339200,
            B: 1327968000,
            C: 1331596800,
            L: 1335225600,
            M: 1338854400,
            G: 1342483200,
            N: 1346112000,
            O: 1349740800,
            P: 1353628800,
            EB: 1357603200,
            u: 1361232000,
            v: 1364860800,
            w: 1368489600,
            x: 1372118400,
            y: 1375747200,
            FB: 1379376000,
            GB: 1386633600,
            HB: 1391472000,
            IB: 1395100800,
            JB: 1398729600,
            KB: 1402358400,
            LB: 1405987200,
            MB: 1409616000,
            NB: 1413244800,
            OB: 1417392000,
            PB: 1421107200,
            QB: 1424736000,
            RB: 1428278400,
            SB: 1431475200,
            TB: 1435881600,
            UB: 1439251200,
            VB: 1442880000,
            WB: 1446508800,
            XB: 1450137600,
            YB: 1453852800,
            ZB: 1457395200,
            aB: 1461628800,
            bB: 1465257600,
            cB: 1470096000,
            dB: 1474329600,
            eB: 1479168000,
            fB: 1485216000,
            gB: 1488844800,
            hB: 1492560000,
            iB: 1497312000,
            jB: 1502150400,
            kB: 1506556800,
            lB: 1510617600,
            mB: 1516665600,
            BC: 1520985600,
            nB: 1525824000,
            CC: 1529971200,
            oB: 1536105600,
            pB: 1540252800,
            qB: 1544486400,
            rB: 1548720000,
            sB: 1552953600,
            tB: 1558396800,
            uB: 1562630400,
            vB: 1567468800,
            wB: 1571788800,
            xB: 1575331200,
            yB: 1578355200,
            zB: 1581379200,
            "0B": 1583798400,
            "1B": 1586304000,
            "2B": 1588636800,
            "3B": 1591056000,
            "4B": 1593475200,
            Q: 1595894400,
            H: 1598313600,
            R: 1600732800,
            DC: 1603152000,
            S: 1605571200,
            T: 1607990400,
            U: 1611619200,
            V: 1614038400,
            W: 1616457600,
            X: 1618790400,
            Y: 1622505600,
            Z: 1626134400,
            a: 1628553600,
            b: 1630972800,
            c: 1633392000,
            d: 1635811200,
            e: 1638835200,
            f: 1641859200,
            g: 1644364800,
            h: 1646697600,
            i: 1649116800,
            j: 1651536000,
            k: 1653955200,
            l: 1656374400,
            m: 1658793600,
            n: 1661212800,
            o: 1663632000,
            p: 1666051200,
            q: 1668470400,
            r: 1670889600,
            s: 1673913600,
            z: 1676332800,
            AB: 1702944000,
            BB: 1705968000,
            CB: 1708387200,
            I: 1710806400,
            t: 1713225600,
            EC: 1715644800,
            FC: null,
            GC: null,
            aC: null
        }
    },
    D: {
        A: {
            "0": 0.03841,
            "1": 0.03841,
            "2": 0.07682,
            "3": 0.092184,
            "4": 0.053774,
            "5": 0.203573,
            "6": 0.119071,
            "7": 0.103707,
            "8": 0.134435,
            "9": 0.257347,
            J: 0,
            DB: 0,
            K: 0,
            D: 0,
            E: 0,
            F: 0,
            A: 0,
            B: 0,
            C: 0,
            L: 0,
            M: 0,
            G: 0,
            N: 0,
            O: 0,
            P: 0,
            EB: 0,
            u: 0,
            v: 0,
            w: 0,
            x: 0,
            y: 0,
            FB: 0,
            GB: 0,
            HB: 0,
            IB: 0,
            JB: 0,
            KB: 0,
            LB: 0,
            MB: 0,
            NB: 0,
            OB: 0.007682,
            PB: 0,
            QB: 0,
            RB: 0,
            SB: 0.019205,
            TB: 0,
            UB: 0,
            VB: 0,
            WB: 0,
            XB: 0,
            YB: 0,
            ZB: 0,
            aB: 0,
            bB: 0.007682,
            cB: 0.023046,
            dB: 0.026887,
            eB: 0.007682,
            fB: 0,
            gB: 0,
            hB: 0.007682,
            iB: 0,
            jB: 0,
            kB: 0.011523,
            lB: 0,
            mB: 0.007682,
            BC: 0,
            nB: 0,
            CC: 0.003841,
            oB: 0,
            pB: 0.003841,
            qB: 0,
            rB: 0,
            sB: 0.026887,
            tB: 0.003841,
            uB: 0,
            vB: 0.030728,
            wB: 0.061456,
            xB: 0.003841,
            yB: 0.003841,
            zB: 0.011523,
            "0B": 0.007682,
            "1B": 0.007682,
            "2B": 0.007682,
            "3B": 0.015364,
            "4B": 0.015364,
            Q: 0.122912,
            H: 0.011523,
            R: 0.023046,
            S: 0.03841,
            T: 0.007682,
            U: 0.023046,
            V: 0.149799,
            W: 0.072979,
            X: 0.019205,
            Y: 0.011523,
            Z: 0.011523,
            a: 0.042251,
            b: 0.015364,
            c: 0.026887,
            d: 0.042251,
            e: 0.011523,
            f: 0.011523,
            g: 0.015364,
            h: 0.072979,
            i: 0.030728,
            j: 0.145958,
            k: 0.26887,
            l: 0.145958,
            m: 0.284234,
            n: 0.184368,
            o: 0.03841,
            p: 0.03841,
            q: 0.026887,
            r: 0.046092,
            s: 1.52488,
            z: 0.026887,
            AB: 0.472443,
            BB: 1.27905,
            CB: 12.1606,
            I: 4.72443,
            t: 0.030728,
            EC: 0.007682,
            FC: 0,
            GC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "J",
            "DB",
            "K",
            "D",
            "E",
            "F",
            "A",
            "B",
            "C",
            "L",
            "M",
            "G",
            "N",
            "O",
            "P",
            "EB",
            "u",
            "v",
            "w",
            "x",
            "y",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "SB",
            "TB",
            "UB",
            "VB",
            "WB",
            "XB",
            "YB",
            "ZB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "jB",
            "kB",
            "lB",
            "mB",
            "BC",
            "nB",
            "CC",
            "oB",
            "pB",
            "qB",
            "rB",
            "sB",
            "tB",
            "uB",
            "vB",
            "wB",
            "xB",
            "yB",
            "zB",
            "0B",
            "1B",
            "2B",
            "3B",
            "4B",
            "Q",
            "H",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "I",
            "t",
            "EC",
            "FC",
            "GC"
        ],
        E: "Chrome",
        F: {
            "0": 1678147200,
            "1": 1680566400,
            "2": 1682985600,
            "3": 1685404800,
            "4": 1689724800,
            "5": 1692057600,
            "6": 1694476800,
            "7": 1696896000,
            "8": 1698710400,
            "9": 1701993600,
            J: 1264377600,
            DB: 1274745600,
            K: 1283385600,
            D: 1287619200,
            E: 1291248000,
            F: 1296777600,
            A: 1299542400,
            B: 1303862400,
            C: 1307404800,
            L: 1312243200,
            M: 1316131200,
            G: 1316131200,
            N: 1319500800,
            O: 1323734400,
            P: 1328659200,
            EB: 1332892800,
            u: 1337040000,
            v: 1340668800,
            w: 1343692800,
            x: 1348531200,
            y: 1352246400,
            FB: 1357862400,
            GB: 1361404800,
            HB: 1364428800,
            IB: 1369094400,
            JB: 1374105600,
            KB: 1376956800,
            LB: 1384214400,
            MB: 1389657600,
            NB: 1392940800,
            OB: 1397001600,
            PB: 1400544000,
            QB: 1405468800,
            RB: 1409011200,
            SB: 1412640000,
            TB: 1416268800,
            UB: 1421798400,
            VB: 1425513600,
            WB: 1429401600,
            XB: 1432080000,
            YB: 1437523200,
            ZB: 1441152000,
            aB: 1444780800,
            bB: 1449014400,
            cB: 1453248000,
            dB: 1456963200,
            eB: 1460592000,
            fB: 1464134400,
            gB: 1469059200,
            hB: 1472601600,
            iB: 1476230400,
            jB: 1480550400,
            kB: 1485302400,
            lB: 1489017600,
            mB: 1492560000,
            BC: 1496707200,
            nB: 1500940800,
            CC: 1504569600,
            oB: 1508198400,
            pB: 1512518400,
            qB: 1516752000,
            rB: 1520294400,
            sB: 1523923200,
            tB: 1527552000,
            uB: 1532390400,
            vB: 1536019200,
            wB: 1539648000,
            xB: 1543968000,
            yB: 1548720000,
            zB: 1552348800,
            "0B": 1555977600,
            "1B": 1559606400,
            "2B": 1564444800,
            "3B": 1568073600,
            "4B": 1571702400,
            Q: 1575936000,
            H: 1580860800,
            R: 1586304000,
            S: 1589846400,
            T: 1594684800,
            U: 1598313600,
            V: 1601942400,
            W: 1605571200,
            X: 1611014400,
            Y: 1614556800,
            Z: 1618272000,
            a: 1621987200,
            b: 1626739200,
            c: 1630368000,
            d: 1632268800,
            e: 1634601600,
            f: 1637020800,
            g: 1641340800,
            h: 1643673600,
            i: 1646092800,
            j: 1648512000,
            k: 1650931200,
            l: 1653350400,
            m: 1655769600,
            n: 1659398400,
            o: 1661817600,
            p: 1664236800,
            q: 1666656000,
            r: 1669680000,
            s: 1673308800,
            z: 1675728000,
            AB: 1705968000,
            BB: 1708387200,
            CB: 1710806400,
            I: 1713225600,
            t: 1715644800,
            EC: null,
            FC: null,
            GC: null
        }
    },
    E: {
        A: {
            J: 0,
            DB: 0,
            K: 0,
            D: 0,
            E: 0.007682,
            F: 0.003841,
            A: 0,
            B: 0,
            C: 0,
            L: 0.007682,
            M: 0.03841,
            G: 0.007682,
            dC: 0,
            HC: 0,
            eC: 0,
            fC: 0,
            gC: 0,
            hC: 0.007682,
            IC: 0,
            "5B": 0.007682,
            "6B": 0.015364,
            iC: 0.065297,
            jC: 0.096025,
            kC: 0.034569,
            JC: 0.011523,
            KC: 0.026887,
            "7B": 0.034569,
            lC: 0.245824,
            "8B": 0.030728,
            LC: 0.049933,
            MC: 0.046092,
            NC: 0.107548,
            OC: 0.034569,
            PC: 0.065297,
            mC: 0.361054,
            "9B": 0.042251,
            QC: 0.092184,
            RC: 0.142117,
            SC: 0.418669,
            TC: 1.15614,
            UC: 0.007682,
            VC: 0,
            nC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "dC",
            "HC",
            "J",
            "DB",
            "eC",
            "K",
            "fC",
            "D",
            "gC",
            "E",
            "F",
            "hC",
            "A",
            "IC",
            "B",
            "5B",
            "C",
            "6B",
            "L",
            "iC",
            "M",
            "jC",
            "G",
            "kC",
            "JC",
            "KC",
            "7B",
            "lC",
            "8B",
            "LC",
            "MC",
            "NC",
            "OC",
            "PC",
            "mC",
            "9B",
            "QC",
            "RC",
            "SC",
            "TC",
            "UC",
            "VC",
            "nC",
            ""
        ],
        E: "Safari",
        F: {
            dC: 1205798400,
            HC: 1226534400,
            J: 1244419200,
            DB: 1275868800,
            eC: 1311120000,
            K: 1343174400,
            fC: 1382400000,
            D: 1382400000,
            gC: 1410998400,
            E: 1413417600,
            F: 1443657600,
            hC: 1458518400,
            A: 1474329600,
            IC: 1490572800,
            B: 1505779200,
            "5B": 1522281600,
            C: 1537142400,
            "6B": 1553472000,
            L: 1568851200,
            iC: 1585008000,
            M: 1600214400,
            jC: 1619395200,
            G: 1632096000,
            kC: 1635292800,
            JC: 1639353600,
            KC: 1647216000,
            "7B": 1652745600,
            lC: 1658275200,
            "8B": 1662940800,
            LC: 1666569600,
            MC: 1670889600,
            NC: 1674432000,
            OC: 1679875200,
            PC: 1684368000,
            mC: 1690156800,
            "9B": 1695686400,
            QC: 1698192000,
            RC: 1702252800,
            SC: 1705881600,
            TC: 1709596800,
            UC: 1715558400,
            VC: null,
            nC: null
        }
    },
    F: {
        A: {
            F: 0,
            B: 0,
            C: 0,
            G: 0,
            N: 0,
            O: 0,
            P: 0,
            EB: 0,
            u: 0,
            v: 0,
            w: 0,
            x: 0,
            y: 0,
            FB: 0,
            GB: 0,
            HB: 0,
            IB: 0,
            JB: 0,
            KB: 0,
            LB: 0,
            MB: 0,
            NB: 0,
            OB: 0,
            PB: 0,
            QB: 0,
            RB: 0,
            SB: 0,
            TB: 0,
            UB: 0.003841,
            VB: 0,
            WB: 0,
            XB: 0,
            YB: 0,
            ZB: 0,
            aB: 0.015364,
            bB: 0,
            cB: 0,
            dB: 0,
            eB: 0,
            fB: 0,
            gB: 0,
            hB: 0,
            iB: 0,
            jB: 0,
            kB: 0,
            lB: 0,
            mB: 0,
            nB: 0,
            oB: 0,
            pB: 0,
            qB: 0,
            rB: 0,
            sB: 0,
            tB: 0,
            uB: 0,
            vB: 0,
            wB: 0,
            xB: 0,
            yB: 0,
            zB: 0,
            "0B": 0,
            "1B": 0,
            "2B": 0,
            "3B": 0,
            "4B": 0,
            Q: 0,
            H: 0,
            R: 0,
            DC: 0,
            S: 0,
            T: 0,
            U: 0,
            V: 0,
            W: 0,
            X: 0,
            Y: 0,
            Z: 0,
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0.046092,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 0,
            l: 0.03841,
            m: 0,
            n: 0,
            o: 0,
            p: 0.007682,
            q: 0.564627,
            r: 0.291916,
            s: 0.11523,
            oC: 0,
            pC: 0,
            qC: 0,
            rC: 0,
            "5B": 0,
            WC: 0,
            sC: 0,
            "6B": 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "F",
            "oC",
            "pC",
            "qC",
            "rC",
            "B",
            "5B",
            "WC",
            "sC",
            "C",
            "6B",
            "G",
            "N",
            "O",
            "P",
            "EB",
            "u",
            "v",
            "w",
            "x",
            "y",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "SB",
            "TB",
            "UB",
            "VB",
            "WB",
            "XB",
            "YB",
            "ZB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "jB",
            "kB",
            "lB",
            "mB",
            "nB",
            "oB",
            "pB",
            "qB",
            "rB",
            "sB",
            "tB",
            "uB",
            "vB",
            "wB",
            "xB",
            "yB",
            "zB",
            "0B",
            "1B",
            "2B",
            "3B",
            "4B",
            "Q",
            "H",
            "R",
            "DC",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "",
            "",
            ""
        ],
        E: "Opera",
        F: {
            F: 1150761600,
            oC: 1223424000,
            pC: 1251763200,
            qC: 1267488000,
            rC: 1277942400,
            B: 1292457600,
            "5B": 1302566400,
            WC: 1309219200,
            sC: 1323129600,
            C: 1323129600,
            "6B": 1352073600,
            G: 1372723200,
            N: 1377561600,
            O: 1381104000,
            P: 1386288000,
            EB: 1390867200,
            u: 1393891200,
            v: 1399334400,
            w: 1401753600,
            x: 1405987200,
            y: 1409616000,
            FB: 1413331200,
            GB: 1417132800,
            HB: 1422316800,
            IB: 1425945600,
            JB: 1430179200,
            KB: 1433808000,
            LB: 1438646400,
            MB: 1442448000,
            NB: 1445904000,
            OB: 1449100800,
            PB: 1454371200,
            QB: 1457308800,
            RB: 1462320000,
            SB: 1465344000,
            TB: 1470096000,
            UB: 1474329600,
            VB: 1477267200,
            WB: 1481587200,
            XB: 1486425600,
            YB: 1490054400,
            ZB: 1494374400,
            aB: 1498003200,
            bB: 1502236800,
            cB: 1506470400,
            dB: 1510099200,
            eB: 1515024000,
            fB: 1517961600,
            gB: 1521676800,
            hB: 1525910400,
            iB: 1530144000,
            jB: 1534982400,
            kB: 1537833600,
            lB: 1543363200,
            mB: 1548201600,
            nB: 1554768000,
            oB: 1561593600,
            pB: 1566259200,
            qB: 1570406400,
            rB: 1573689600,
            sB: 1578441600,
            tB: 1583971200,
            uB: 1587513600,
            vB: 1592956800,
            wB: 1595894400,
            xB: 1600128000,
            yB: 1603238400,
            zB: 1613520000,
            "0B": 1612224000,
            "1B": 1616544000,
            "2B": 1619568000,
            "3B": 1623715200,
            "4B": 1627948800,
            Q: 1631577600,
            H: 1633392000,
            R: 1635984000,
            DC: 1638403200,
            S: 1642550400,
            T: 1644969600,
            U: 1647993600,
            V: 1650412800,
            W: 1652745600,
            X: 1654646400,
            Y: 1657152000,
            Z: 1660780800,
            a: 1663113600,
            b: 1668816000,
            c: 1668643200,
            d: 1671062400,
            e: 1675209600,
            f: 1677024000,
            g: 1679529600,
            h: 1681948800,
            i: 1684195200,
            j: 1687219200,
            k: 1690329600,
            l: 1692748800,
            m: 1696204800,
            n: 1699920000,
            o: 1699920000,
            p: 1702944000,
            q: 1707264000,
            r: 1710115200,
            s: 1711497600
        },
        D: {
            F: "o",
            B: "o",
            C: "o",
            oC: "o",
            pC: "o",
            qC: "o",
            rC: "o",
            "5B": "o",
            WC: "o",
            sC: "o",
            "6B": "o"
        }
    },
    G: {
        A: {
            E: 0,
            HC: 0,
            tC: 0,
            XC: 0.00291444,
            uC: 0.00291444,
            vC: 0.0072861,
            wC: 0.0116578,
            xC: 0.00291444,
            yC: 0.0072861,
            zC: 0.0364305,
            "0C": 0.0072861,
            "1C": 0.0582888,
            "2C": 0.0495455,
            "3C": 0.0145722,
            "4C": 0.0116578,
            "5C": 0.237527,
            "6C": 0.00437166,
            "7C": 0.0480882,
            "8C": 0.0116578,
            "9C": 0.0451738,
            AD: 0.112206,
            BD: 0.135521,
            CD: 0.0626604,
            JC: 0.0714037,
            KC: 0.0816043,
            "7B": 0.102005,
            DD: 0.902019,
            "8B": 0.211297,
            LC: 0.44008,
            MC: 0.20984,
            NC: 0.371591,
            OC: 0.0772326,
            PC: 0.161751,
            ED: 1.27652,
            "9B": 0.153008,
            QC: 0.282701,
            RC: 0.378877,
            SC: 2.74249,
            TC: 6.17424,
            UC: 0.0568316,
            VC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "HC",
            "tC",
            "XC",
            "uC",
            "vC",
            "wC",
            "E",
            "xC",
            "yC",
            "zC",
            "0C",
            "1C",
            "2C",
            "3C",
            "4C",
            "5C",
            "6C",
            "7C",
            "8C",
            "9C",
            "AD",
            "BD",
            "CD",
            "JC",
            "KC",
            "7B",
            "DD",
            "8B",
            "LC",
            "MC",
            "NC",
            "OC",
            "PC",
            "ED",
            "9B",
            "QC",
            "RC",
            "SC",
            "TC",
            "UC",
            "VC",
            "",
            ""
        ],
        E: "Safari on iOS",
        F: {
            HC: 1270252800,
            tC: 1283904000,
            XC: 1299628800,
            uC: 1331078400,
            vC: 1359331200,
            wC: 1394409600,
            E: 1410912000,
            xC: 1413763200,
            yC: 1442361600,
            zC: 1458518400,
            "0C": 1473724800,
            "1C": 1490572800,
            "2C": 1505779200,
            "3C": 1522281600,
            "4C": 1537142400,
            "5C": 1553472000,
            "6C": 1568851200,
            "7C": 1572220800,
            "8C": 1580169600,
            "9C": 1585008000,
            AD: 1600214400,
            BD: 1619395200,
            CD: 1632096000,
            JC: 1639353600,
            KC: 1647216000,
            "7B": 1652659200,
            DD: 1658275200,
            "8B": 1662940800,
            LC: 1666569600,
            MC: 1670889600,
            NC: 1674432000,
            OC: 1679875200,
            PC: 1684368000,
            ED: 1690156800,
            "9B": 1694995200,
            QC: 1698192000,
            RC: 1702252800,
            SC: 1705881600,
            TC: 1709596800,
            UC: 1715558400,
            VC: null
        }
    },
    H: {
        A: {
            FD: 0.09
        },
        B: "o",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "FD",
            "",
            "",
            ""
        ],
        E: "Opera Mini",
        F: {
            FD: 1426464000
        }
    },
    I: {
        A: {
            AC: 0,
            J: 0.0000566628,
            I: 0.564305,
            GD: 0,
            HD: 0,
            ID: 0,
            JD: 0.000113326,
            XC: 0.000339977,
            KD: 0,
            LD: 0.00141657
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "GD",
            "HD",
            "ID",
            "AC",
            "J",
            "JD",
            "XC",
            "KD",
            "LD",
            "I",
            "",
            "",
            ""
        ],
        E: "Android Browser",
        F: {
            GD: 1256515200,
            HD: 1274313600,
            ID: 1291593600,
            AC: 1298332800,
            J: 1318896000,
            JD: 1341792000,
            XC: 1374624000,
            KD: 1386547200,
            LD: 1401667200,
            I: 1713225600
        }
    },
    J: {
        A: {
            D: 0,
            A: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "D",
            "A",
            "",
            "",
            ""
        ],
        E: "Blackberry Browser",
        F: {
            D: 1325376000,
            A: 1359504000
        }
    },
    K: {
        A: {
            A: 0,
            B: 0,
            C: 0,
            H: 1.23418,
            "5B": 0,
            WC: 0,
            "6B": 0
        },
        B: "o",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "A",
            "B",
            "5B",
            "WC",
            "C",
            "6B",
            "H",
            "",
            "",
            ""
        ],
        E: "Opera Mobile",
        F: {
            A: 1287100800,
            B: 1300752000,
            "5B": 1314835200,
            WC: 1318291200,
            C: 1330300800,
            "6B": 1349740800,
            H: 1709769600
        },
        D: {
            H: "webkit"
        }
    },
    L: {
        A: {
            I: 41.8185
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "I",
            "",
            "",
            ""
        ],
        E: "Chrome for Android",
        F: {
            I: 1713225600
        }
    },
    M: {
        A: {
            t: 0.301791
        },
        B: "moz",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "t",
            "",
            "",
            ""
        ],
        E: "Firefox for Android",
        F: {
            t: 1713225600
        }
    },
    N: {
        A: {
            A: 0,
            B: 0
        },
        B: "ms",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "A",
            "B",
            "",
            "",
            ""
        ],
        E: "IE Mobile",
        F: {
            A: 1340150400,
            B: 1353456000
        }
    },
    O: {
        A: {
            "7B": 0.886896
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "7B",
            "",
            "",
            ""
        ],
        E: "UC Browser for Android",
        F: {
            "7B": 1710115200
        },
        D: {
            "7B": "webkit"
        }
    },
    P: {
        A: {
            J: 0.140685,
            u: 0.0216438,
            v: 0.0649313,
            w: 0.0649313,
            x: 0.216438,
            y: 1.88301,
            MD: 0.0108219,
            ND: 0,
            OD: 0.0432875,
            PD: 0,
            QD: 0,
            IC: 0,
            RD: 0.0108219,
            SD: 0,
            TD: 0.0108219,
            UD: 0,
            VD: 0,
            "8B": 0,
            "9B": 0.0216438,
            WD: 0.0108219,
            XD: 0.0324657
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "J",
            "MD",
            "ND",
            "OD",
            "PD",
            "QD",
            "IC",
            "RD",
            "SD",
            "TD",
            "UD",
            "VD",
            "8B",
            "9B",
            "WD",
            "XD",
            "u",
            "v",
            "w",
            "x",
            "y",
            "",
            "",
            ""
        ],
        E: "Samsung Internet",
        F: {
            J: 1461024000,
            MD: 1481846400,
            ND: 1509408000,
            OD: 1528329600,
            PD: 1546128000,
            QD: 1554163200,
            IC: 1567900800,
            RD: 1582588800,
            SD: 1593475200,
            TD: 1605657600,
            UD: 1618531200,
            VD: 1629072000,
            "8B": 1640736000,
            "9B": 1651708800,
            WD: 1659657600,
            XD: 1667260800,
            u: 1677369600,
            v: 1684454400,
            w: 1689292800,
            x: 1697587200,
            y: 1711497600
        }
    },
    Q: {
        A: {
            YD: 0.283314
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "YD",
            "",
            "",
            ""
        ],
        E: "QQ Browser",
        F: {
            YD: 1710288000
        }
    },
    R: {
        A: {
            ZD: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "ZD",
            "",
            "",
            ""
        ],
        E: "Baidu Browser",
        F: {
            ZD: 1710201600
        }
    },
    S: {
        A: {
            aD: 0.073908,
            bD: 0
        },
        B: "moz",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "aD",
            "bD",
            "",
            "",
            ""
        ],
        E: "KaiOS Browser",
        F: {
            aD: 1527811200,
            bD: 1631664000
        }
    }
};

},{}],"b7Kzh":[function(require,module,exports) {
module.exports = JSON.parse('{"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2023-09-11","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":"Hydrogen"},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":"Iron"},"v21":{"start":"2023-10-17","maintenance":"2024-04-01","end":"2024-06-01"},"v22":{"start":"2024-04-23","lts":"2024-10-29","maintenance":"2025-10-21","end":"2027-04-30","codename":""},"v23":{"start":"2024-10-15","maintenance":"2025-04-01","end":"2025-06-01"},"v24":{"start":"2025-04-22","lts":"2025-10-28","maintenance":"2026-10-20","end":"2028-04-30","codename":""}}');

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"i95xm":[function(require,module,exports) {
module.exports = {
    "0.20": "39",
    "0.21": "41",
    "0.22": "41",
    "0.23": "41",
    "0.24": "41",
    "0.25": "42",
    "0.26": "42",
    "0.27": "43",
    "0.28": "43",
    "0.29": "43",
    "0.30": "44",
    "0.31": "45",
    "0.32": "45",
    "0.33": "45",
    "0.34": "45",
    "0.35": "45",
    "0.36": "47",
    "0.37": "49",
    "1.0": "49",
    "1.1": "50",
    "1.2": "51",
    "1.3": "52",
    "1.4": "53",
    "1.5": "54",
    "1.6": "56",
    "1.7": "58",
    "1.8": "59",
    "2.0": "61",
    "2.1": "61",
    "3.0": "66",
    "3.1": "66",
    "4.0": "69",
    "4.1": "69",
    "4.2": "69",
    "5.0": "73",
    "6.0": "76",
    "6.1": "76",
    "7.0": "78",
    "7.1": "78",
    "7.2": "78",
    "7.3": "78",
    "8.0": "80",
    "8.1": "80",
    "8.2": "80",
    "8.3": "80",
    "8.4": "80",
    "8.5": "80",
    "9.0": "83",
    "9.1": "83",
    "9.2": "83",
    "9.3": "83",
    "9.4": "83",
    "10.0": "85",
    "10.1": "85",
    "10.2": "85",
    "10.3": "85",
    "10.4": "85",
    "11.0": "87",
    "11.1": "87",
    "11.2": "87",
    "11.3": "87",
    "11.4": "87",
    "11.5": "87",
    "12.0": "89",
    "12.1": "89",
    "12.2": "89",
    "13.0": "91",
    "13.1": "91",
    "13.2": "91",
    "13.3": "91",
    "13.4": "91",
    "13.5": "91",
    "13.6": "91",
    "14.0": "93",
    "14.1": "93",
    "14.2": "93",
    "15.0": "94",
    "15.1": "94",
    "15.2": "94",
    "15.3": "94",
    "15.4": "94",
    "15.5": "94",
    "16.0": "96",
    "16.1": "96",
    "16.2": "96",
    "17.0": "98",
    "17.1": "98",
    "17.2": "98",
    "17.3": "98",
    "17.4": "98",
    "18.0": "100",
    "18.1": "100",
    "18.2": "100",
    "18.3": "100",
    "19.0": "102",
    "19.1": "102",
    "20.0": "104",
    "20.1": "104",
    "20.2": "104",
    "20.3": "104",
    "21.0": "106",
    "21.1": "106",
    "21.2": "106",
    "21.3": "106",
    "21.4": "106",
    "22.0": "108",
    "22.1": "108",
    "22.2": "108",
    "22.3": "108",
    "23.0": "110",
    "23.1": "110",
    "23.2": "110",
    "23.3": "110",
    "24.0": "112",
    "24.1": "112",
    "24.2": "112",
    "24.3": "112",
    "24.4": "112",
    "24.5": "112",
    "24.6": "112",
    "24.7": "112",
    "24.8": "112",
    "25.0": "114",
    "25.1": "114",
    "25.2": "114",
    "25.3": "114",
    "25.4": "114",
    "25.5": "114",
    "25.6": "114",
    "25.7": "114",
    "25.8": "114",
    "25.9": "114",
    "26.0": "116",
    "26.1": "116",
    "26.2": "116",
    "26.3": "116",
    "26.4": "116",
    "26.5": "116",
    "26.6": "116",
    "27.0": "118",
    "27.1": "118",
    "27.2": "118",
    "27.3": "118",
    "28.0": "120",
    "28.1": "120",
    "28.2": "120",
    "28.3": "120",
    "29.0": "122",
    "29.1": "122",
    "29.2": "122",
    "29.3": "122",
    "29.4": "122",
    "30.0": "124",
    "31.0": "126"
};

},{}],"4GzM4":[function(require,module,exports) {
function BrowserslistError(message) {
    this.name = "BrowserslistError";
    this.message = message;
    this.browserslist = true;
    if (Error.captureStackTrace) Error.captureStackTrace(this, BrowserslistError);
}
BrowserslistError.prototype = Error.prototype;
module.exports = BrowserslistError;

},{}],"a4Lkh":[function(require,module,exports) {
var AND_REGEXP = /^\s+and\s+(.*)/i;
var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i;
function flatten(array) {
    if (!Array.isArray(array)) return [
        array
    ];
    return array.reduce(function(a, b) {
        return a.concat(flatten(b));
    }, []);
}
function find(string, predicate) {
    for(var n = 1, max = string.length; n <= max; n++){
        var parsed = string.substr(-n, n);
        if (predicate(parsed, n, max)) return string.slice(0, -n);
    }
    return "";
}
function matchQuery(all, query) {
    var node = {
        query: query
    };
    if (query.indexOf("not ") === 0) {
        node.not = true;
        query = query.slice(4);
    }
    for(var name in all){
        var type = all[name];
        var match = query.match(type.regexp);
        if (match) {
            node.type = name;
            for(var i = 0; i < type.matches.length; i++)node[type.matches[i]] = match[i + 1];
            return node;
        }
    }
    node.type = "unknown";
    return node;
}
function matchBlock(all, string, qs) {
    var node;
    return find(string, function(parsed, n, max) {
        if (AND_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(AND_REGEXP)[1]);
            node.compose = "and";
            qs.unshift(node);
            return true;
        } else if (OR_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(OR_REGEXP)[1]);
            node.compose = "or";
            qs.unshift(node);
            return true;
        } else if (n === max) {
            node = matchQuery(all, parsed.trim());
            node.compose = "or";
            qs.unshift(node);
            return true;
        }
        return false;
    });
}
module.exports = function parse(all, queries) {
    if (!Array.isArray(queries)) queries = [
        queries
    ];
    return flatten(queries.map(function(block) {
        var qs = [];
        do block = matchBlock(all, block, qs);
        while (block);
        return qs;
    }));
};

},{}],"hteYL":[function(require,module,exports) {
var BrowserslistError = require("6932a7c7f3ac3c02");
function noop() {}
module.exports = {
    loadQueries: function loadQueries() {
        throw new BrowserslistError("Sharable configs are not supported in client-side build of Browserslist");
    },
    getStat: function getStat(opts) {
        return opts.stats;
    },
    loadConfig: function loadConfig(opts) {
        if (opts.config) throw new BrowserslistError("Browserslist config are not supported in client-side build");
    },
    loadCountry: function loadCountry() {
        throw new BrowserslistError("Country statistics are not supported in client-side build of Browserslist");
    },
    loadFeature: function loadFeature() {
        throw new BrowserslistError("Supports queries are not available in client-side build of Browserslist");
    },
    currentNode: function currentNode(resolve, context) {
        return resolve([
            "maintained node versions"
        ], context)[0];
    },
    parseConfig: noop,
    readConfig: noop,
    findConfig: noop,
    clearCaches: noop,
    oldDataWarning: noop,
    env: {}
};

},{"6932a7c7f3ac3c02":"4GzM4"}],"1298x":[function(require,module,exports) {
var x = String;
var create = function() {
    return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x
    };
};
module.exports = create();
module.exports.createColors = create;

},{}],"dGs5H":[function(require,module,exports) {
let browserslist = require("eb7ef4ff888a9850");
let { agents } = require("d1fee5d87feee14d");
let utils = require("28b73a9cdc116c77");
class Browsers {
    constructor(data, requirements, options, browserslistOpts){
        this.data = data;
        this.options = options || {};
        this.browserslistOpts = browserslistOpts || {};
        this.selected = this.parse(requirements);
    }
    /**
   * Return all prefixes for default browser data
   */ static prefixes() {
        if (this.prefixesCache) return this.prefixesCache;
        this.prefixesCache = [];
        for(let name in agents)this.prefixesCache.push(`-${agents[name].prefix}-`);
        this.prefixesCache = utils.uniq(this.prefixesCache).sort((a, b)=>b.length - a.length);
        return this.prefixesCache;
    }
    /**
   * Check is value contain any possible prefix
   */ static withPrefix(value) {
        if (!this.prefixesRegexp) this.prefixesRegexp = new RegExp(this.prefixes().join("|"));
        return this.prefixesRegexp.test(value);
    }
    /**
   * Is browser is selected by requirements
   */ isSelected(browser) {
        return this.selected.includes(browser);
    }
    /**
   * Return browsers selected by requirements
   */ parse(requirements) {
        let opts = {};
        for(let i in this.browserslistOpts)opts[i] = this.browserslistOpts[i];
        opts.path = this.options.from;
        return browserslist(requirements, opts);
    }
    /**
   * Return prefix for selected browser
   */ prefix(browser) {
        let [name, version] = browser.split(" ");
        let data = this.data[name];
        let prefix = data.prefix_exceptions && data.prefix_exceptions[version];
        if (!prefix) prefix = data.prefix;
        return `-${prefix}-`;
    }
}
module.exports = Browsers;

},{"eb7ef4ff888a9850":"h32Zo","d1fee5d87feee14d":"1o0P3","28b73a9cdc116c77":"j2sRV"}],"j2sRV":[function(require,module,exports) {
let { list } = require("29e1343774d16e86");
/**
 * Throw special error, to tell beniary,
 * that this error is from Autoprefixer.
 */ module.exports.error = function(text) {
    let err = new Error(text);
    err.autoprefixer = true;
    throw err;
};
/**
 * Return array, that doesn’t contain duplicates.
 */ module.exports.uniq = function(array) {
    return [
        ...new Set(array)
    ];
};
/**
 * Return "-webkit-" on "-webkit- old"
 */ module.exports.removeNote = function(string) {
    if (!string.includes(" ")) return string;
    return string.split(" ")[0];
};
/**
 * Escape RegExp symbols
 */ module.exports.escapeRegexp = function(string) {
    return string.replace(/[$()*+-.?[\\\]^{|}]/g, "\\$&");
};
/**
 * Return regexp to check, that CSS string contain word
 */ module.exports.regexp = function(word, escape = true) {
    if (escape) word = this.escapeRegexp(word);
    return new RegExp(`(^|[\\s,(])(${word}($|[\\s(,]))`, "gi");
};
/**
 * Change comma list
 */ module.exports.editList = function(value, callback) {
    let origin = list.comma(value);
    let changed = callback(origin, []);
    if (origin === changed) return value;
    let join = value.match(/,\s*/);
    join = join ? join[0] : ", ";
    return changed.join(join);
};
/**
 * Split the selector into parts.
 * It returns 3 level deep array because selectors can be comma
 * separated (1), space separated (2), and combined (3)
 * @param {String} selector selector string
 * @return {Array<Array<Array>>} 3 level deep array of split selector
 * @see utils.test.js for examples
 */ module.exports.splitSelector = function(selector) {
    return list.comma(selector).map((i)=>{
        return list.space(i).map((k)=>{
            return k.split(/(?=\.|#)/g);
        });
    });
};
/**
 * Return true if a given value only contains numbers.
 * @param {*} value
 * @returns {boolean}
 */ module.exports.isPureNumber = function(value) {
    if (typeof value === "number") return true;
    if (typeof value === "string") return /^[0-9]+$/.test(value);
    return false;
};

},{"29e1343774d16e86":"gauyy"}],"gauyy":[function(require,module,exports) {
"use strict";
let CssSyntaxError = require("b94c122da89285cf");
let Declaration = require("58b9b695b5cdec4f");
let LazyResult = require("28800b7f609eacb4");
let Container = require("53e8dbf4303f6b2");
let Processor = require("74e2939a62033b88");
let stringify = require("423052f41b6923a8");
let fromJSON = require("265270fe03ed0453");
let Document = require("6d045fa42be054c3");
let Warning = require("5e8938f8ea2bde5c");
let Comment = require("a80a0398f4ef418a");
let AtRule = require("3d45f8dbf6f865b3");
let Result = require("7861cd83b55ece93");
let Input = require("88cc225cd57b2cfd");
let parse = require("d869a996a852aa7b");
let list = require("b9cbb1c1f8b97b6d");
let Rule = require("885ac03c34871ebd");
let Root = require("4e735dfb84c57321");
let Node = require("f911e43317d4d41c");
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) plugins = plugins[0];
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        // eslint-disable-next-line no-console
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            // eslint-disable-next-line no-console
            console.warn(name + ": postcss.plugin was deprecated. Migration guide:\n" + "https://evilmartians.com/chronicles/postcss-8-plugin-migration");
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, "postcss", {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults);
postcss.atRule = (defaults)=>new AtRule(defaults);
postcss.decl = (defaults)=>new Declaration(defaults);
postcss.rule = (defaults)=>new Rule(defaults);
postcss.root = (defaults)=>new Root(defaults);
postcss.document = (defaults)=>new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;

},{"b94c122da89285cf":"5TKyW","58b9b695b5cdec4f":"2mU8a","28800b7f609eacb4":"580Su","53e8dbf4303f6b2":"1gj6C","74e2939a62033b88":"lU6wZ","423052f41b6923a8":"a0MwE","265270fe03ed0453":"iiNZS","6d045fa42be054c3":"dK3sP","5e8938f8ea2bde5c":"lw5j2","a80a0398f4ef418a":"5CBjv","3d45f8dbf6f865b3":"kbVAt","7861cd83b55ece93":"dmoqr","88cc225cd57b2cfd":"fb1UO","d869a996a852aa7b":"ioa1B","b9cbb1c1f8b97b6d":"hZo3l","885ac03c34871ebd":"4SFJx","4e735dfb84c57321":"hsDFv","f911e43317d4d41c":"5azBO"}],"5TKyW":[function(require,module,exports) {
"use strict";
let pico = require("9ad9103a933bde56");
let terminalHighlight = require("76818616dc2728aa");
class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin){
        super(message);
        this.name = "CssSyntaxError";
        this.reason = message;
        if (file) this.file = file;
        if (source) this.source = source;
        if (plugin) this.plugin = plugin;
        if (typeof line !== "undefined" && typeof column !== "undefined") {
            if (typeof line === "number") {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) Error.captureStackTrace(this, CssSyntaxError);
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        if (typeof this.line !== "undefined") this.message += ":" + this.line + ":" + this.column;
        this.message += ": " + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return "";
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        if (terminalHighlight) {
            if (color) css = terminalHighlight(css);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        let mark, aside;
        if (color) {
            let { bold, gray, red } = pico.createColors(true);
            mark = (text)=>bold(red(text));
            aside = (text)=>gray(text);
        } else mark = aside = (str)=>str;
        return lines.slice(start, end).map((line, index)=>{
            let number = start + 1 + index;
            let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
            if (number === this.line) {
                let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
            }
            return " " + aside(gutter) + line;
        }).join("\n");
    }
    toString() {
        let code = this.showSourceCode();
        if (code) code = "\n\n" + code + "\n";
        return this.name + ": " + this.message + code;
    }
}
module.exports = CssSyntaxError;
CssSyntaxError.default = CssSyntaxError;

},{"9ad9103a933bde56":"1298x","76818616dc2728aa":"jhUEF"}],"2mU8a":[function(require,module,exports) {
"use strict";
let Node = require("943ca4e816e55fa8");
class Declaration extends Node {
    constructor(defaults){
        if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") defaults = {
            ...defaults,
            value: String(defaults.value)
        };
        super(defaults);
        this.type = "decl";
    }
    get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
    }
}
module.exports = Declaration;
Declaration.default = Declaration;

},{"943ca4e816e55fa8":"5azBO"}],"5azBO":[function(require,module,exports) {
"use strict";
let { isClean, my } = require("2a4266f65f480cdb");
let CssSyntaxError = require("c1e82465b8844d24");
let Stringifier = require("b3be92e0a68c8c98");
let stringify = require("5a353b155add93c7");
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        if (i === "proxyCache") continue;
        let value = obj[i];
        let type = typeof value;
        if (i === "parent" && type === "object") {
            if (parent) cloned[i] = parent;
        } else if (i === "source") cloned[i] = value;
        else if (Array.isArray(value)) cloned[i] = value.map((j)=>cloneNode(j, cloned));
        else {
            if (type === "object" && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }
    return cloned;
}
class Node {
    constructor(defaults = {}){
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for(let name in defaults)if (name === "nodes") {
            this.nodes = [];
            for (let node of defaults[name])if (typeof node.clone === "function") this.append(node.clone());
            else this.append(node);
        } else this[name] = defaults[name];
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    assign(overrides = {}) {
        for(let name in overrides)this[name] = overrides[name];
        return this;
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides)cloned[name] = overrides[name];
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    error(message, opts = {}) {
        if (this.source) {
            let { end, start } = this.rangeBy(opts);
            return this.source.input.error(message, {
                column: start.column,
                line: start.line
            }, {
                column: end.column,
                line: end.line
            }, opts);
        }
        return new CssSyntaxError(message);
    }
    getProxyProcessor() {
        return {
            get (node, prop) {
                if (prop === "proxyOf") return node;
                else if (prop === "root") return ()=>node.root().toProxy();
                else return node[prop];
            },
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */ prop === "text") node.markDirty();
                return true;
            }
        };
    }
    markDirty() {
        if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while(next = next.parent)next[isClean] = false;
        }
    }
    next() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
    }
    positionBy(opts, stringRepresentation) {
        let pos = this.source.start;
        if (opts.index) pos = this.positionInside(opts.index, stringRepresentation);
        else if (opts.word) {
            stringRepresentation = this.toString();
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) pos = this.positionInside(index, stringRepresentation);
        }
        return pos;
    }
    positionInside(index, stringRepresentation) {
        let string = stringRepresentation || this.toString();
        let column = this.source.start.column;
        let line = this.source.start.line;
        for(let i = 0; i < index; i++)if (string[i] === "\n") {
            column = 1;
            line += 1;
        } else column += 1;
        return {
            column,
            line
        };
    }
    prev() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
    }
    rangeBy(opts) {
        let start = {
            column: this.source.start.column,
            line: this.source.start.line
        };
        let end = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
        } : {
            column: start.column + 1,
            line: start.line
        };
        if (opts.word) {
            let stringRepresentation = this.toString();
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) {
                start = this.positionInside(index, stringRepresentation);
                end = this.positionInside(index + opts.word.length, stringRepresentation);
            }
        } else {
            if (opts.start) start = {
                column: opts.start.column,
                line: opts.start.line
            };
            else if (opts.index) start = this.positionInside(opts.index);
            if (opts.end) end = {
                column: opts.end.column,
                line: opts.end.line
            };
            else if (typeof opts.endIndex === "number") end = this.positionInside(opts.endIndex);
            else if (opts.index) end = this.positionInside(opts.index + 1);
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) end = {
            column: start.column + 1,
            line: start.line
        };
        return {
            end,
            start
        };
    }
    raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
    }
    remove() {
        if (this.parent) this.parent.removeChild(this);
        this.parent = undefined;
        return this;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes){
                if (node === this) foundSelf = true;
                else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node);
                    bookmark = node;
                } else this.parent.insertBefore(bookmark, node);
            }
            if (!foundSelf) this.remove();
        }
        return this;
    }
    root() {
        let result = this;
        while(result.parent && result.parent.type !== "document")result = result.parent;
        return result;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) continue;
            if (name === "parent" || name === "proxyCache") continue;
            let value = this[name];
            if (Array.isArray(value)) fixed[name] = value.map((i)=>{
                if (typeof i === "object" && i.toJSON) return i.toJSON(null, inputs);
                else return i;
            });
            else if (typeof value === "object" && value.toJSON) fixed[name] = value.toJSON(null, inputs);
            else if (name === "source") {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    end: value.end,
                    inputId,
                    start: value.start
                };
            } else fixed[name] = value;
        }
        if (emitInputs) fixed.inputs = [
            ...inputs.keys()
        ].map((input)=>input.toJSON());
        return fixed;
    }
    toProxy() {
        if (!this.proxyCache) this.proxyCache = new Proxy(this, this.getProxyProcessor());
        return this.proxyCache;
    }
    toString(stringifier = stringify) {
        if (stringifier.stringify) stringifier = stringifier.stringify;
        let result = "";
        stringifier(this, (i)=>{
            result += i;
        });
        return result;
    }
    warn(result, text, opts) {
        let data = {
            node: this
        };
        for(let i in opts)data[i] = opts[i];
        return result.warn(text, data);
    }
    get proxyOf() {
        return this;
    }
}
module.exports = Node;
Node.default = Node;

},{"2a4266f65f480cdb":"9Ej2B","c1e82465b8844d24":"5TKyW","b3be92e0a68c8c98":"ebmGP","5a353b155add93c7":"a0MwE"}],"9Ej2B":[function(require,module,exports) {
"use strict";
module.exports.isClean = Symbol("isClean");
module.exports.my = Symbol("my");

},{}],"ebmGP":[function(require,module,exports) {
"use strict";
const DEFAULT_RAW = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: false
};
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
class Stringifier {
    constructor(builder){
        this.builder = builder;
    }
    atrule(node, semicolon) {
        let name = "@" + node.name;
        let params = node.params ? this.rawValue(node, "params") : "";
        if (typeof node.raws.afterName !== "undefined") name += node.raws.afterName;
        else if (params) name += " ";
        if (node.nodes) this.block(node, name + params);
        else {
            let end = (node.raws.between || "") + (semicolon ? ";" : "");
            this.builder(name + params + end, node);
        }
    }
    beforeAfter(node, detect) {
        let value;
        if (node.type === "decl") value = this.raw(node, null, "beforeDecl");
        else if (node.type === "comment") value = this.raw(node, null, "beforeComment");
        else if (detect === "before") value = this.raw(node, null, "beforeRule");
        else value = this.raw(node, null, "beforeClose");
        let buf = node.parent;
        let depth = 0;
        while(buf && buf.type !== "root"){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes("\n")) {
            let indent = this.raw(node, null, "indent");
            if (indent.length) for(let step = 0; step < depth; step++)value += indent;
        }
        return value;
    }
    block(node, start) {
        let between = this.raw(node, "between", "beforeOpen");
        this.builder(start + between + "{", node, "start");
        let after;
        if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, "after");
        } else after = this.raw(node, "after", "emptyBody");
        if (after) this.builder(after);
        this.builder("}", node, "end");
    }
    body(node) {
        let last = node.nodes.length - 1;
        while(last > 0){
            if (node.nodes[last].type !== "comment") break;
            last -= 1;
        }
        let semicolon = this.raw(node, "semicolon");
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            let before = this.raw(child, "before");
            if (before) this.builder(before);
            this.stringify(child, last !== i || semicolon);
        }
    }
    comment(node) {
        let left = this.raw(node, "left", "commentLeft");
        let right = this.raw(node, "right", "commentRight");
        this.builder("/*" + left + node.text + right + "*/", node);
    }
    decl(node, semicolon) {
        let between = this.raw(node, "between", "colon");
        let string = node.prop + between + this.rawValue(node, "value");
        if (node.important) string += node.raws.important || " !important";
        if (semicolon) string += ";";
        this.builder(string, node);
    }
    document(node) {
        this.body(node);
    }
    raw(node, own, detect) {
        let value;
        if (!detect) detect = own;
        // Already had
        if (own) {
            value = node.raws[own];
            if (typeof value !== "undefined") return value;
        }
        let parent = node.parent;
        if (detect === "before") {
            // Hack for first rule in CSS
            if (!parent || parent.type === "root" && parent.first === node) return "";
            // `root` nodes in `document` should use only their own raws
            if (parent && parent.type === "document") return "";
        }
        // Floating child without parent
        if (!parent) return DEFAULT_RAW[detect];
        // Detect style by other nodes
        let root = node.root();
        if (!root.rawCache) root.rawCache = {};
        if (typeof root.rawCache[detect] !== "undefined") return root.rawCache[detect];
        if (detect === "before" || detect === "after") return this.beforeAfter(node, detect);
        else {
            let method = "raw" + capitalize(detect);
            if (this[method]) value = this[method](root, node);
            else root.walk((i)=>{
                value = i.raws[own];
                if (typeof value !== "undefined") return false;
            });
        }
        if (typeof value === "undefined") value = DEFAULT_RAW[detect];
        root.rawCache[detect] = value;
        return value;
    }
    rawBeforeClose(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length > 0) {
                if (typeof i.raws.after !== "undefined") {
                    value = i.raws.after;
                    if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeComment(root, node) {
        let value;
        root.walkComments((i)=>{
            if (typeof i.raws.before !== "undefined") {
                value = i.raws.before;
                if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                return false;
            }
        });
        if (typeof value === "undefined") value = this.raw(node, null, "beforeDecl");
        else if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeDecl(root, node) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.before !== "undefined") {
                value = i.raws.before;
                if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                return false;
            }
        });
        if (typeof value === "undefined") value = this.raw(node, null, "beforeRule");
        else if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeOpen(root) {
        let value;
        root.walk((i)=>{
            if (i.type !== "decl") {
                value = i.raws.between;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawBeforeRule(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && (i.parent !== root || root.first !== i)) {
                if (typeof i.raws.before !== "undefined") {
                    value = i.raws.before;
                    if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawColon(root) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.between !== "undefined") {
                value = i.raws.between.replace(/[^\s:]/g, "");
                return false;
            }
        });
        return value;
    }
    rawEmptyBody(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length === 0) {
                value = i.raws.after;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawIndent(root) {
        if (root.raws.indent) return root.raws.indent;
        let value;
        root.walk((i)=>{
            let p = i.parent;
            if (p && p !== root && p.parent && p.parent === root) {
                if (typeof i.raws.before !== "undefined") {
                    let parts = i.raws.before.split("\n");
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, "");
                    return false;
                }
            }
        });
        return value;
    }
    rawSemicolon(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length && i.last.type === "decl") {
                value = i.raws.semicolon;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawValue(node, prop) {
        let value = node[prop];
        let raw = node.raws[prop];
        if (raw && raw.value === value) return raw.raw;
        return value;
    }
    root(node) {
        this.body(node);
        if (node.raws.after) this.builder(node.raws.after);
    }
    rule(node) {
        this.block(node, this.rawValue(node, "selector"));
        if (node.raws.ownSemicolon) this.builder(node.raws.ownSemicolon, node, "end");
    }
    stringify(node, semicolon) {
        /* c8 ignore start */ if (!this[node.type]) throw new Error("Unknown AST node type " + node.type + ". " + "Maybe you need to change PostCSS stringifier.");
        /* c8 ignore stop */ this[node.type](node, semicolon);
    }
}
module.exports = Stringifier;
Stringifier.default = Stringifier;

},{}],"a0MwE":[function(require,module,exports) {
"use strict";
let Stringifier = require("f7559227119e51ac");
function stringify(node, builder) {
    let str = new Stringifier(builder);
    str.stringify(node);
}
module.exports = stringify;
stringify.default = stringify;

},{"f7559227119e51ac":"ebmGP"}],"580Su":[function(require,module,exports) {
"use strict";
let { isClean, my } = require("784df17aa24f7eff");
let MapGenerator = require("66ac869ca9d5e2f0");
let stringify = require("d3d5a028585e9913");
let Container = require("cde52f575286bb6");
let Document = require("681b63fe9d05e426");
let warnOnce = require("139c0704f6de1f4e");
let Result = require("9fd200a8479a5908");
let parse = require("4ddbb908fc5050d1");
let Root = require("b7ad0485699a64e0");
const TYPE_TO_CLASS_NAME = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
};
const PLUGIN_PROPS = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
};
const NOT_VISITORS = {
    Once: true,
    postcssPlugin: true,
    prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
    return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node.type];
    if (node.type === "decl") key = node.prop.toLowerCase();
    else if (node.type === "atrule") key = node.name.toLowerCase();
    if (key && node.append) return [
        type,
        type + "-" + key,
        CHILDREN,
        type + "Exit",
        type + "Exit-" + key
    ];
    else if (key) return [
        type,
        type + "-" + key,
        type + "Exit",
        type + "Exit-" + key
    ];
    else if (node.append) return [
        type,
        CHILDREN,
        type + "Exit"
    ];
    else return [
        type,
        type + "Exit"
    ];
}
function toStack(node) {
    let events;
    if (node.type === "document") events = [
        "Document",
        CHILDREN,
        "DocumentExit"
    ];
    else if (node.type === "root") events = [
        "Root",
        CHILDREN,
        "RootExit"
    ];
    else events = getEvents(node);
    return {
        eventIndex: 0,
        events,
        iterator: 0,
        node,
        visitorIndex: 0,
        visitors: []
    };
}
function cleanMarks(node) {
    node[isClean] = false;
    if (node.nodes) node.nodes.forEach((i)=>cleanMarks(i));
    return node;
}
let postcss = {};
class LazyResult {
    constructor(processor, css, opts){
        this.stringified = false;
        this.processed = false;
        let root;
        if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) root = cleanMarks(css);
        else if (css instanceof LazyResult || css instanceof Result) {
            root = cleanMarks(css.root);
            if (css.map) {
                if (typeof opts.map === "undefined") opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser = parse;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;
            try {
                root = parser(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root && !root[my]) /* c8 ignore next 2 */ Container.rebuild(root);
        }
        this.result = new Result(processor, root, opts);
        this.helpers = {
            ...postcss,
            postcss,
            result: this.result
        };
        this.plugins = this.processor.plugins.map((plugin)=>{
            if (typeof plugin === "object" && plugin.prepare) return {
                ...plugin,
                ...plugin.prepare(this.result)
            };
            else return plugin;
        });
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) this.processing = this.runAsync();
        return this.processing;
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(error, node) {
        let plugin = this.result.lastPlugin;
        try {
            if (node) node.addToError(error);
            this.error = error;
            if (error.name === "CssSyntaxError" && !error.plugin) {
                error.plugin = plugin.postcssPlugin;
                error.setMessage();
            } else if (plugin.postcssVersion) {
                let pluginName = plugin.postcssPlugin;
                let pluginVer = plugin.postcssVersion;
                let runtimeVer = this.result.processor.version;
                let a = pluginVer.split(".");
                let b = runtimeVer.split(".");
                if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) // eslint-disable-next-line no-console
                console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
            }
        } catch (err) {
            /* c8 ignore next 3 */ // eslint-disable-next-line no-console
            if (console && console.error) console.error(err);
        }
        return error;
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin,
                cb
            ]);
        };
        for (let plugin of this.plugins){
            if (typeof plugin === "object") for(let event in plugin){
                if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. ` + `Try to update PostCSS (${this.processor.version} now).`);
                if (!NOT_VISITORS[event]) {
                    if (typeof plugin[event] === "object") {
                        for(let filter in plugin[event])if (filter === "*") add(plugin, event, plugin[event][filter]);
                        else add(plugin, event + "-" + filter.toLowerCase(), plugin[event][filter]);
                    } else if (typeof plugin[event] === "function") add(plugin, event, plugin[event]);
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i = 0; i < this.plugins.length; i++){
            let plugin = this.plugins[i];
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) try {
                await promise;
            } catch (error) {
                throw this.handleError(error);
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                let stack = [
                    toStack(root)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise(promise)) try {
                        await promise;
                    } catch (e) {
                        let node = stack[stack.length - 1].node;
                        throw this.handleError(e, node);
                    }
                }
            }
            if (this.listeners.OnceExit) for (let [plugin, visitor] of this.listeners.OnceExit){
                this.result.lastPlugin = plugin;
                try {
                    if (root.type === "document") {
                        let roots = root.nodes.map((subRoot)=>visitor(subRoot, this.helpers));
                        await Promise.all(roots);
                    } else await visitor(root, this.helpers);
                } catch (e) {
                    throw this.handleError(e);
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    runOnRoot(plugin) {
        this.result.lastPlugin = plugin;
        try {
            if (typeof plugin === "object" && plugin.Once) {
                if (this.result.root.type === "document") {
                    let roots = this.result.root.nodes.map((root)=>plugin.Once(root, this.helpers));
                    if (isPromise(roots[0])) return Promise.all(roots);
                    return roots;
                }
                return plugin.Once(this.result.root, this.helpers);
            } else if (typeof plugin === "function") return plugin(this.result.root, this.result);
        } catch (error) {
            throw this.handleError(error);
        }
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) throw this.getAsyncError();
        for (let plugin of this.plugins){
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) throw this.getAsyncError();
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                this.walkSync(root);
            }
            if (this.listeners.OnceExit) {
                if (root.type === "document") for (let subRoot of root.nodes)this.visitSync(this.listeners.OnceExit, subRoot);
                else this.visitSync(this.listeners.OnceExit, root);
            }
        }
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if (!("from" in this.opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this.css;
    }
    visitSync(visitors, node) {
        for (let [plugin, visitor] of visitors){
            this.result.lastPlugin = plugin;
            let promise;
            try {
                promise = visitor(node, this.helpers);
            } catch (e) {
                throw this.handleError(e, node.proxyOf);
            }
            if (node.type !== "root" && node.type !== "document" && !node.parent) return true;
            if (isPromise(promise)) throw this.getAsyncError();
        }
    }
    visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node, visitors } = visit;
        if (node.type !== "root" && node.type !== "document" && !node.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
                visit.visitors = [];
                visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin;
            try {
                return visitor(node.toProxy(), this.helpers);
            } catch (e) {
                throw this.handleError(e, node);
            }
        }
        if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while(child = node.nodes[node.indexes[iterator]]){
                node.indexes[iterator] += 1;
                if (!child[isClean]) {
                    child[isClean] = true;
                    stack.push(toStack(child));
                    return;
                }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
        }
        let events = visit.events;
        while(visit.eventIndex < events.length){
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
                if (node.nodes && node.nodes.length) {
                    node[isClean] = true;
                    visit.iterator = node.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
    walkSync(node) {
        node[isClean] = true;
        let events = getEvents(node);
        for (let event of events){
            if (event === CHILDREN) {
                if (node.nodes) node.each((child)=>{
                    if (!child[isClean]) this.walkSync(child);
                });
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node.toProxy())) return;
                }
            }
        }
    }
    warnings() {
        return this.sync().warnings();
    }
    get content() {
        return this.stringify().content;
    }
    get css() {
        return this.stringify().css;
    }
    get map() {
        return this.stringify().map;
    }
    get messages() {
        return this.sync().messages;
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        return this.sync().root;
    }
    get [Symbol.toStringTag]() {
        return "LazyResult";
    }
}
LazyResult.registerPostcss = (dependant)=>{
    postcss = dependant;
};
module.exports = LazyResult;
LazyResult.default = LazyResult;
Root.registerLazyResult(LazyResult);
Document.registerLazyResult(LazyResult);

},{"784df17aa24f7eff":"9Ej2B","66ac869ca9d5e2f0":"ghfT0","d3d5a028585e9913":"a0MwE","cde52f575286bb6":"1gj6C","681b63fe9d05e426":"dK3sP","139c0704f6de1f4e":"dpzGz","9fd200a8479a5908":"dmoqr","4ddbb908fc5050d1":"ioa1B","b7ad0485699a64e0":"hsDFv"}],"ghfT0":[function(require,module,exports) {
var Buffer = require("91ad75e9856644d").Buffer;
"use strict";
let { SourceMapConsumer, SourceMapGenerator } = require("d7d3f4b3c85e89c0");
let { dirname, relative, resolve, sep } = require("4b1599d5a5511897");
let { pathToFileURL } = require("b3f2b26b354a6135");
let Input = require("376c58899937cbfc");
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator {
    constructor(stringify, root, opts, cssString){
        this.stringify = stringify;
        this.mapOpts = opts.map || {};
        this.root = root;
        this.opts = opts;
        this.css = cssString;
        this.originalCSS = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
        this.memoizedFileURLs = new Map();
        this.memoizedPaths = new Map();
        this.memoizedURLs = new Map();
    }
    addAnnotation() {
        let content;
        if (this.isInline()) content = "data:application/json;base64," + this.toBase64(this.map.toString());
        else if (typeof this.mapOpts.annotation === "string") content = this.mapOpts.annotation;
        else if (typeof this.mapOpts.annotation === "function") content = this.mapOpts.annotation(this.opts.to, this.root);
        else content = this.outputFile() + ".map";
        let eol = "\n";
        if (this.css.includes("\r\n")) eol = "\r\n";
        this.css += eol + "/*# sourceMappingURL=" + content + " */";
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer(prev.text);
                if (map.sourcesContent) map.sourcesContent = null;
            } else map = prev.consumer();
            this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node;
            for(let i = this.root.nodes.length - 1; i >= 0; i--){
                node = this.root.nodes[i];
                if (node.type !== "comment") continue;
                if (node.text.indexOf("# sourceMappingURL=") === 0) this.root.removeChild(i);
            }
        } else if (this.css) this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) return this.generateMap();
        else {
            let result = "";
            this.stringify(this.root, (i)=>{
                result += i;
            });
            return [
                result
            ];
        }
    }
    generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev, {
                ignoreInvalidMapping: true
            });
        } else {
            this.map = new SourceMapGenerator({
                file: this.outputFile(),
                ignoreInvalidMapping: true
            });
            this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) return [
            this.css
        ];
        else return [
            this.css,
            this.map
        ];
    }
    generateString() {
        this.css = "";
        this.map = new SourceMapGenerator({
            file: this.outputFile(),
            ignoreInvalidMapping: true
        });
        let line = 1;
        let column = 1;
        let noSource = "<no source>";
        let mapping = {
            generated: {
                column: 0,
                line: 0
            },
            original: {
                column: 0,
                line: 0
            },
            source: ""
        };
        let lines, last;
        this.stringify(this.root, (str, node, type)=>{
            this.css += str;
            if (node && type !== "end") {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node.source && node.source.start) {
                    mapping.source = this.sourcePath(node);
                    mapping.original.line = node.source.start.line;
                    mapping.original.column = node.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf("\n");
                column = str.length - last;
            } else column += str.length;
            if (node && type !== "start") {
                let p = node.parent || {
                    raws: {}
                };
                let childless = node.type === "decl" || node.type === "atrule" && !node.nodes;
                if (!childless || node !== p.last || p.raws.semicolon) {
                    if (node.source && node.source.end) {
                        mapping.source = this.sourcePath(node);
                        mapping.original.line = node.source.end.line;
                        mapping.original.column = node.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    isAnnotation() {
        if (this.isInline()) return true;
        if (typeof this.mapOpts.annotation !== "undefined") return this.mapOpts.annotation;
        if (this.previous().length) return this.previous().some((i)=>i.annotation);
        return true;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== "undefined") return this.mapOpts.inline;
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== "undefined" && annotation !== true) return false;
        if (this.previous().length) return this.previous().some((i)=>i.inline);
        return true;
    }
    isMap() {
        if (typeof this.opts.map !== "undefined") return !!this.opts.map;
        return this.previous().length > 0;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== "undefined") return this.mapOpts.sourcesContent;
        if (this.previous().length) return this.previous().some((i)=>i.withContent());
        return true;
    }
    outputFile() {
        if (this.opts.to) return this.path(this.opts.to);
        else if (this.opts.from) return this.path(this.opts.from);
        else return "to.css";
    }
    path(file) {
        if (this.mapOpts.absolute) return file;
        if (file.charCodeAt(0) === 60 /* `<` */ ) return file;
        if (/^\w+:\/\//.test(file)) return file;
        let cached = this.memoizedPaths.get(file);
        if (cached) return cached;
        let from = this.opts.to ? dirname(this.opts.to) : ".";
        if (typeof this.mapOpts.annotation === "string") from = dirname(resolve(from, this.mapOpts.annotation));
        let path = relative(from, file);
        this.memoizedPaths.set(file, path);
        return path;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) this.root.walk((node)=>{
                if (node.source && node.source.input.map) {
                    let map = node.source.input.map;
                    if (!this.previousMaps.includes(map)) this.previousMaps.push(map);
                }
            });
            else {
                let input = new Input(this.originalCSS, this.opts);
                if (input.map) this.previousMaps.push(input.map);
            }
        }
        return this.previousMaps;
    }
    setSourcesContent() {
        let already = {};
        if (this.root) this.root.walk((node)=>{
            if (node.source) {
                let from = node.source.input.from;
                if (from && !already[from]) {
                    already[from] = true;
                    let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                    this.map.setSourceContent(fromUrl, node.source.input.css);
                }
            }
        });
        else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(from, this.css);
        }
    }
    sourcePath(node) {
        if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
        else if (this.usesFileUrls) return this.toFileUrl(node.source.input.from);
        else return this.toUrl(this.path(node.source.input.from));
    }
    toBase64(str) {
        if (Buffer) return Buffer.from(str).toString("base64");
        else return window.btoa(unescape(encodeURIComponent(str)));
    }
    toFileUrl(path) {
        let cached = this.memoizedFileURLs.get(path);
        if (cached) return cached;
        if (pathToFileURL) {
            let fileURL = pathToFileURL(path).toString();
            this.memoizedFileURLs.set(path, fileURL);
            return fileURL;
        } else throw new Error("`map.absolute` option is not available in this PostCSS build");
    }
    toUrl(path) {
        let cached = this.memoizedURLs.get(path);
        if (cached) return cached;
        if (sep === "\\") path = path.replace(/\\/g, "/");
        let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
        this.memoizedURLs.set(path, url);
        return url;
    }
}
module.exports = MapGenerator;

},{"91ad75e9856644d":"fCgem","d7d3f4b3c85e89c0":"jhUEF","4b1599d5a5511897":"jhUEF","b3f2b26b354a6135":"jhUEF","376c58899937cbfc":"fb1UO"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"fb1UO":[function(require,module,exports) {
"use strict";
let { SourceMapConsumer, SourceMapGenerator } = require("308bf4f109b473bc");
let { fileURLToPath, pathToFileURL } = require("fa4f50e6e68066fb");
let { isAbsolute, resolve } = require("f14874183395e1da");
let { nanoid } = require("1dfe3269871ea6b2");
let terminalHighlight = require("d3580bd2efb2d622");
let CssSyntaxError = require("fdd5724c326bf7ae");
let PreviousMap = require("2fce709b45ddf48f");
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(resolve && isAbsolute);
class Input {
    constructor(css, opts = {}){
        if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) throw new Error(`PostCSS received ${css} instead of CSS string`);
        this.css = css.toString();
        if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else this.hasBOM = false;
        if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) this.file = opts.from;
            else this.file = resolve(opts.from);
        }
        if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) this.id = "<input css " + nanoid(6) + ">";
        if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
        let result, endLine, endColumn;
        if (line && typeof line === "object") {
            let start = line;
            let end = column;
            if (typeof start.offset === "number") {
                let pos = this.fromOffset(start.offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
            }
            if (typeof end.offset === "number") {
                let pos = this.fromOffset(end.offset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
            }
        } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) result = new CssSyntaxError(message, origin.endLine === undefined ? origin.line : {
            column: origin.column,
            line: origin.line
        }, origin.endLine === undefined ? origin.column : {
            column: origin.endColumn,
            line: origin.endLine
        }, origin.source, origin.file, opts.plugin);
        else result = new CssSyntaxError(message, endLine === undefined ? line : {
            column,
            line
        }, endLine === undefined ? column : {
            column: endColumn,
            line: endLine
        }, this.css, this.file, opts.plugin);
        result.input = {
            column,
            endColumn,
            endLine,
            line,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL) result.input.url = pathToFileURL(this.file).toString();
            result.input.file = this.file;
        }
        return result;
    }
    fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
            let lines = this.css.split("\n");
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for(let i = 0, l = lines.length; i < l; i++){
                lineToIndex[i] = prevIndex;
                prevIndex += lines[i].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
        } else lineToIndex = this[fromOffsetCache];
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) min = lineToIndex.length - 1;
        else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) max = mid - 1;
                else if (offset >= lineToIndex[mid + 1]) min = mid + 1;
                else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            col: offset - lineToIndex[min] + 1,
            line: min + 1
        };
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) return file;
        return resolve(this.map.consumer().sourceRoot || this.map.root || ".", file);
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            column,
            line
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === "number") to = consumer.originalPositionFor({
            column: endColumn,
            line: endLine
        });
        let fromUrl;
        if (isAbsolute(from.source)) fromUrl = pathToFileURL(from.source);
        else fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        let result = {
            column: from.column,
            endColumn: to && to.column,
            endLine: to && to.line,
            line: from.line,
            url: fromUrl.toString()
        };
        if (fromUrl.protocol === "file:") {
            if (fileURLToPath) result.file = fileURLToPath(fromUrl);
            else /* c8 ignore next 2 */ throw new Error(`file: protocol is not available in this PostCSS build`);
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result.source = source;
        return result;
    }
    toJSON() {
        let json = {};
        for (let name of [
            "hasBOM",
            "css",
            "file",
            "id"
        ])if (this[name] != null) json[name] = this[name];
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) json.map.consumerCache = undefined;
        }
        return json;
    }
    get from() {
        return this.file || this.id;
    }
}
module.exports = Input;
Input.default = Input;
if (terminalHighlight && terminalHighlight.registerInput) terminalHighlight.registerInput(Input);

},{"308bf4f109b473bc":"jhUEF","fa4f50e6e68066fb":"jhUEF","f14874183395e1da":"jhUEF","1dfe3269871ea6b2":"fO50M","d3580bd2efb2d622":"jhUEF","fdd5724c326bf7ae":"5TKyW","2fce709b45ddf48f":"cmiCo"}],"fO50M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = "";
        let i = size;
        while(i--)id += alphabet[Math.random() * alphabet.length | 0];
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = "";
    let i = size;
    while(i--)id += urlAlphabet[Math.random() * 64 | 0];
    return id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cmiCo":[function(require,module,exports) {
var Buffer = require("9942fa10d1030c5e").Buffer;
"use strict";
let { SourceMapConsumer, SourceMapGenerator } = require("a9cf17802fe70727");
let { existsSync, readFileSync } = require("8be0c628120271f3");
let { dirname, join } = require("d1a375d7fefead4e");
function fromBase64(str) {
    if (Buffer) return Buffer.from(str, "base64").toString();
    else /* c8 ignore next 2 */ return window.atob(str);
}
class PreviousMap {
    constructor(css, opts){
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, "data:");
        let prev = opts.map ? opts.map.prev : undefined;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) this.mapFile = opts.from;
        if (this.mapFile) this.root = dirname(this.mapFile);
        if (text) this.text = text;
    }
    consumer() {
        if (!this.consumerCache) this.consumerCache = new SourceMapConsumer(this.text);
        return this.consumerCache;
    }
    decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        if (charsetUri.test(text) || uri.test(text)) return decodeURIComponent(text.substr(RegExp.lastMatch.length));
        if (baseCharsetUri.test(text) || baseUri.test(text)) return fromBase64(text.substr(RegExp.lastMatch.length));
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + encoding);
    }
    getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(map) {
        if (typeof map !== "object") return false;
        return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
    }
    loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!comments) return;
        // sourceMappingURLs from comments, strings, etc.
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf("*/", start);
        if (start > -1 && end > -1) // Locate the last sourceMappingURL to avoid pickin
        this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
    loadFile(path) {
        this.root = dirname(path);
        if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, "utf-8").toString().trim();
        }
    }
    loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
            if (typeof prev === "string") return prev;
            else if (typeof prev === "function") {
                let prevPath = prev(file);
                if (prevPath) {
                    let map = this.loadFile(prevPath);
                    if (!map) throw new Error("Unable to load previous source map: " + prevPath.toString());
                    return map;
                }
            } else if (prev instanceof SourceMapConsumer) return SourceMapGenerator.fromSourceMap(prev).toString();
            else if (prev instanceof SourceMapGenerator) return prev.toString();
            else if (this.isMap(prev)) return JSON.stringify(prev);
            else throw new Error("Unsupported previous source map format: " + prev.toString());
        } else if (this.inline) return this.decodeInline(this.annotation);
        else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join(dirname(file), map);
            return this.loadFile(map);
        }
    }
    startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
}
module.exports = PreviousMap;
PreviousMap.default = PreviousMap;

},{"9942fa10d1030c5e":"fCgem","a9cf17802fe70727":"jhUEF","8be0c628120271f3":"jhUEF","d1a375d7fefead4e":"jhUEF"}],"1gj6C":[function(require,module,exports) {
"use strict";
let { isClean, my } = require("fe19f7ecb9c04826");
let Declaration = require("612b113f57da6436");
let Comment = require("7b441fc27c320a2c");
let Node = require("f2754be16c7a4192");
let parse, Rule, AtRule, Root;
function cleanSource(nodes) {
    return nodes.map((i)=>{
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}
function markDirtyUp(node) {
    node[isClean] = false;
    if (node.proxyOf.nodes) for (let i of node.proxyOf.nodes)markDirtyUp(i);
}
class Container extends Node {
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node of nodes)this.proxyOf.nodes.push(node);
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) for (let node of this.nodes)node.cleanRaws(keepBetween);
    }
    each(callback) {
        if (!this.proxyOf.nodes) return undefined;
        let iterator = this.getIterator();
        let index, result;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index], index);
            if (result === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
    getProxyProcessor() {
        return {
            get (node, prop) {
                if (prop === "proxyOf") return node;
                else if (!node[prop]) return node[prop];
                else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) return (...args)=>{
                    return node[prop](...args.map((i)=>{
                        if (typeof i === "function") return (child, index)=>i(child.toProxy(), index);
                        else return i;
                    }));
                };
                else if (prop === "every" || prop === "some") return (cb)=>{
                    return node[prop]((child, ...other)=>cb(child.toProxy(), ...other));
                };
                else if (prop === "root") return ()=>node.root().toProxy();
                else if (prop === "nodes") return node.nodes.map((i)=>i.toProxy());
                else if (prop === "first" || prop === "last") return node[prop].toProxy();
                else return node[prop];
            },
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === "name" || prop === "params" || prop === "selector") node.markDirty();
                return true;
            }
        };
    }
    index(child) {
        if (typeof child === "number") return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex + 1, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex < index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type = existIndex === 0 ? "prepend" : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex <= index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    normalize(nodes, sample) {
        if (typeof nodes === "string") nodes = cleanSource(parse(nodes).nodes);
        else if (typeof nodes === "undefined") nodes = [];
        else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, "ignore");
        } else if (nodes.type === "root" && this.type !== "document") {
            nodes = nodes.nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, "ignore");
        } else if (nodes.type) nodes = [
            nodes
        ];
        else if (nodes.prop) {
            if (typeof nodes.value === "undefined") throw new Error("Value field is missed in node creation");
            else if (typeof nodes.value !== "string") nodes.value = String(nodes.value);
            nodes = [
                new Declaration(nodes)
            ];
        } else if (nodes.selector) nodes = [
            new Rule(nodes)
        ];
        else if (nodes.name) nodes = [
            new AtRule(nodes)
        ];
        else if (nodes.text) nodes = [
            new Comment(nodes)
        ];
        else throw new Error("Unknown node type in node creation");
        let processed = nodes.map((i)=>{
            /* c8 ignore next */ if (!i[my]) Container.rebuild(i);
            i = i.proxyOf;
            if (i.parent) i.parent.removeChild(i);
            if (i[isClean]) markDirtyUp(i);
            if (typeof i.raws.before === "undefined") {
                if (sample && typeof sample.raws.before !== "undefined") i.raws.before = sample.raws.before.replace(/\S/g, "");
            }
            i.parent = this.proxyOf;
            return i;
        });
        return processed;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, "prepend").reverse();
            for (let node of nodes)this.proxyOf.nodes.unshift(node);
            for(let id in this.indexes)this.indexes[id] = this.indexes[id] + nodes.length;
        }
        this.markDirty();
        return this;
    }
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    removeAll() {
        for (let node of this.proxyOf.nodes)node.parent = undefined;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = undefined;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (index >= child) this.indexes[id] = index - 1;
        }
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    walk(callback) {
        return this.each((child, i)=>{
            let result;
            try {
                result = callback(child, i);
            } catch (e) {
                throw child.addToError(e);
            }
            if (result !== false && child.walk) result = child.walk(callback);
            return result;
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i)=>{
                if (child.type === "atrule") return callback(child, i);
            });
        }
        if (name instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === "atrule" && name.test(child.name)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === "atrule" && child.name === name) return callback(child, i);
        });
    }
    walkComments(callback) {
        return this.walk((child, i)=>{
            if (child.type === "comment") return callback(child, i);
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i)=>{
                if (child.type === "decl") return callback(child, i);
            });
        }
        if (prop instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === "decl" && prop.test(child.prop)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === "decl" && child.prop === prop) return callback(child, i);
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i)=>{
                if (child.type === "rule") return callback(child, i);
            });
        }
        if (selector instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === "rule" && selector.test(child.selector)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === "rule" && child.selector === selector) return callback(child, i);
        });
    }
    get first() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
}
Container.registerParse = (dependant)=>{
    parse = dependant;
};
Container.registerRule = (dependant)=>{
    Rule = dependant;
};
Container.registerAtRule = (dependant)=>{
    AtRule = dependant;
};
Container.registerRoot = (dependant)=>{
    Root = dependant;
};
module.exports = Container;
Container.default = Container;
/* c8 ignore start */ Container.rebuild = (node)=>{
    if (node.type === "atrule") Object.setPrototypeOf(node, AtRule.prototype);
    else if (node.type === "rule") Object.setPrototypeOf(node, Rule.prototype);
    else if (node.type === "decl") Object.setPrototypeOf(node, Declaration.prototype);
    else if (node.type === "comment") Object.setPrototypeOf(node, Comment.prototype);
    else if (node.type === "root") Object.setPrototypeOf(node, Root.prototype);
    node[my] = true;
    if (node.nodes) node.nodes.forEach((child)=>{
        Container.rebuild(child);
    });
} /* c8 ignore stop */ ;

},{"fe19f7ecb9c04826":"9Ej2B","612b113f57da6436":"2mU8a","7b441fc27c320a2c":"5CBjv","f2754be16c7a4192":"5azBO"}],"5CBjv":[function(require,module,exports) {
"use strict";
let Node = require("7f4ce483d6e184ba");
class Comment extends Node {
    constructor(defaults){
        super(defaults);
        this.type = "comment";
    }
}
module.exports = Comment;
Comment.default = Comment;

},{"7f4ce483d6e184ba":"5azBO"}],"dK3sP":[function(require,module,exports) {
"use strict";
let Container = require("4ddefed8be3a5f1");
let LazyResult, Processor;
class Document extends Container {
    constructor(defaults){
        // type needs to be passed to super, otherwise child roots won't be normalized correctly
        super({
            type: "document",
            ...defaults
        });
        if (!this.nodes) this.nodes = [];
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Document.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Document.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Document;
Document.default = Document;

},{"4ddefed8be3a5f1":"1gj6C"}],"dpzGz":[function(require,module,exports) {
/* eslint-disable no-console */ "use strict";
let printed = {};
module.exports = function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== "undefined" && console.warn) console.warn(message);
};

},{}],"dmoqr":[function(require,module,exports) {
"use strict";
let Warning = require("733eab9114813576");
class Result {
    constructor(processor, root, opts){
        this.processor = processor;
        this.messages = [];
        this.root = root;
        this.opts = opts;
        this.css = undefined;
        this.map = undefined;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) opts.plugin = this.lastPlugin.postcssPlugin;
        }
        let warning = new Warning(text, opts);
        this.messages.push(warning);
        return warning;
    }
    warnings() {
        return this.messages.filter((i)=>i.type === "warning");
    }
    get content() {
        return this.css;
    }
}
module.exports = Result;
Result.default = Result;

},{"733eab9114813576":"lw5j2"}],"lw5j2":[function(require,module,exports) {
"use strict";
class Warning {
    constructor(text, opts = {}){
        this.type = "warning";
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) return this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
        }).message;
        if (this.plugin) return this.plugin + ": " + this.text;
        return this.text;
    }
}
module.exports = Warning;
Warning.default = Warning;

},{}],"ioa1B":[function(require,module,exports) {
"use strict";
let Container = require("6494fda586fb17a1");
let Parser = require("61509346b7c32406");
let Input = require("b776f2c6c62c9360");
function parse(css, opts) {
    let input = new Input(css, opts);
    let parser = new Parser(input);
    try {
        parser.parse();
    } catch (e) {
        if (e.name === "CssSyntaxError" && opts && opts.from) {
            if (/\.scss$/i.test(opts.from)) e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
            else if (/\.sass/i.test(opts.from)) e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
            else if (/\.less$/i.test(opts.from)) e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
        throw e;
    }
    return parser.root;
}
module.exports = parse;
parse.default = parse;
Container.registerParse(parse);

},{"6494fda586fb17a1":"1gj6C","61509346b7c32406":"flcRV","b776f2c6c62c9360":"fb1UO"}],"flcRV":[function(require,module,exports) {
"use strict";
let Declaration = require("47ad52a08a7a676e");
let tokenizer = require("4a9961ca361e4099");
let Comment = require("149094ae0d56f3fb");
let AtRule = require("53d9a3501469ebf8");
let Root = require("df12142db9f2ac4");
let Rule = require("fca2d5ee75ced31e");
const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
};
function findLastWithPosition(tokens) {
    for(let i = tokens.length - 1; i >= 0; i--){
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
class Parser {
    constructor(input){
        this.input = input;
        this.root = new Root();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = false;
        this.createTokenizer();
        this.root.source = {
            input,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        };
    }
    atrule(token) {
        let node = new AtRule();
        node.name = token[1].slice(1);
        if (node.name === "") this.unnamedAtrule(node, token);
        this.init(node, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === "(" || type === "[") brackets.push(type === "(" ? ")" : "]");
            else if (type === "{" && brackets.length > 0) brackets.push("}");
            else if (type === brackets[brackets.length - 1]) brackets.pop();
            if (brackets.length === 0) {
                if (type === ";") {
                    node.source.end = this.getPosition(token[2]);
                    node.source.end.offset++;
                    this.semicolon = true;
                    break;
                } else if (type === "{") {
                    open = true;
                    break;
                } else if (type === "}") {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === "space")prev = params[--shift];
                        if (prev) {
                            node.source.end = this.getPosition(prev[3] || prev[2]);
                            node.source.end.offset++;
                        }
                    }
                    this.end(token);
                    break;
                } else params.push(token);
            } else params.push(token);
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, "params", params);
            if (last) {
                token = params[params.length - 1];
                node.source.end = this.getPosition(token[3] || token[2]);
                node.source.end.offset++;
                this.spaces = node.raws.between;
                node.raws.between = "";
            }
        } else {
            node.raws.afterName = "";
            node.params = "";
        }
        if (open) {
            node.nodes = [];
            this.current = node;
        }
    }
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== "space") {
                founded += 1;
                if (founded === 2) break;
            }
        }
        // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
        // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
        // And because we need it after that one we do +1 to get the next one.
        throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
    }
    colon(tokens) {
        let brackets = 0;
        let token, type, prev;
        for (let [i, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === "(") brackets += 1;
            if (type === ")") brackets -= 1;
            if (brackets === 0 && type === ":") {
                if (!prev) this.doubleColon(token);
                else if (prev[0] === "word" && prev[1] === "progid") continue;
                else return i;
            }
            prev = token;
        }
        return false;
    }
    comment(token) {
        let node = new Comment();
        this.init(node, token[2]);
        node.source.end = this.getPosition(token[3] || token[2]);
        node.source.end.offset++;
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node.text = "";
            node.raws.left = text;
            node.raws.right = "";
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
        }
    }
    createTokenizer() {
        this.tokenizer = tokenizer(this.input);
    }
    decl(tokens, customProperty) {
        let node = new Declaration();
        this.init(node, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ";") {
            this.semicolon = true;
            tokens.pop();
        }
        node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        node.source.end.offset++;
        while(tokens[0][0] !== "word"){
            if (tokens.length === 1) this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
        }
        node.source.start = this.getPosition(tokens[0][2]);
        node.prop = "";
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ":" || type === "space" || type === "comment") break;
            node.prop += tokens.shift()[1];
        }
        node.raws.between = "";
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ":") {
                node.raws.between += token[1];
                break;
            } else {
                if (token[0] === "word" && /\w/.test(token[1])) this.unknownWord([
                    token
                ]);
                node.raws.between += token[1];
            }
        }
        if (node.prop[0] === "_" || node.prop[0] === "*") {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i = tokens.length - 1; i >= 0; i--){
            token = tokens[i];
            if (token[1].toLowerCase() === "!important") {
                node.important = true;
                let string = this.stringFrom(tokens, i);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== " !important") node.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === "important") {
                let cache = tokens.slice(0);
                let str = "";
                for(let j = i; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().indexOf("!") === 0 && type !== "space") break;
                    str = cache.pop()[1] + str;
                }
                if (str.trim().indexOf("!") === 0) {
                    node.important = true;
                    node.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== "space" && token[0] !== "comment") break;
        }
        let hasWord = tokens.some((i)=>i[0] !== "space" && i[0] !== "comment");
        if (hasWord) {
            node.raws.between += firstSpaces.map((i)=>i[1]).join("");
            firstSpaces = [];
        }
        this.raw(node, "value", firstSpaces.concat(tokens), customProperty);
        if (node.value.includes(":") && !customProperty) this.checkMissedSemicolon(tokens);
    }
    doubleColon(token) {
        throw this.input.error("Double colon", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    emptyRule(token) {
        let node = new Rule();
        this.init(node, token[2]);
        node.selector = "";
        node.raws.between = "";
        this.current = node;
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current.source.end.offset++;
            this.current = this.current.parent;
        } else this.unexpectedClose(token);
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = "";
            }
        }
    }
    // Helpers
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            column: pos.col,
            line: pos.line,
            offset
        };
    }
    init(node, offset) {
        this.current.push(node);
        node.source = {
            input: this.input,
            start: this.getPosition(offset)
        };
        node.raws.before = this.spaces;
        this.spaces = "";
        if (node.type !== "comment") this.semicolon = false;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith("--");
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === "(" || type === "[") {
                if (!bracket) bracket = token;
                brackets.push(type === "(" ? ")" : "]");
            } else if (customProperty && colon && type === "{") {
                if (!bracket) bracket = token;
                brackets.push("}");
            } else if (brackets.length === 0) {
                if (type === ";") {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else break;
                } else if (type === "{") {
                    this.rule(tokens);
                    return;
                } else if (type === "}") {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ":") colon = true;
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) while(tokens.length){
                token = tokens[tokens.length - 1][0];
                if (token !== "space" && token !== "comment") break;
                this.tokenizer.back(tokens.pop());
            }
            this.decl(tokens, customProperty);
        } else this.unknownWord(tokens);
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case "space":
                    this.spaces += token[1];
                    break;
                case ";":
                    this.freeSemicolon(token);
                    break;
                case "}":
                    this.end(token);
                    break;
                case "comment":
                    this.comment(token);
                    break;
                case "at-word":
                    this.atrule(token);
                    break;
                case "{":
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    precheckMissedSemicolon() {
    // Hook for Safe Parser
    }
    raw(node, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = "";
        let clean = true;
        let next, prev;
        for(let i = 0; i < length; i += 1){
            token = tokens[i];
            type = token[0];
            if (type === "space" && i === length - 1 && !customProperty) clean = false;
            else if (type === "comment") {
                prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
                next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
                if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                    if (value.slice(-1) === ",") clean = false;
                    else value += token[1];
                } else clean = false;
            } else value += token[1];
        }
        if (!clean) {
            let raw = tokens.reduce((all, i)=>all + i[1], "");
            node.raws[prop] = {
                raw,
                value
            };
        }
        node[prop] = value;
    }
    rule(tokens) {
        tokens.pop();
        let node = new Rule();
        this.init(node, tokens[0][2]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, "selector", tokens);
        this.current = node;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space" && lastTokenType !== "comment") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = "";
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result = "";
        for(let i = from; i < tokens.length; i++)result += tokens[i][1];
        tokens.splice(from, tokens.length - from);
        return result;
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error("Unclosed block", pos.line, pos.column);
    }
    unclosedBracket(bracket) {
        throw this.input.error("Unclosed bracket", {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unexpectedClose(token) {
        throw this.input.error("Unexpected }", {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error("Unknown word", {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unnamedAtrule(node, token) {
        throw this.input.error("At-rule without name", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
}
module.exports = Parser;

},{"47ad52a08a7a676e":"2mU8a","4a9961ca361e4099":"bLUE2","149094ae0d56f3fb":"5CBjv","53d9a3501469ebf8":"kbVAt","df12142db9f2ac4":"hsDFv","fca2d5ee75ced31e":"4SFJx"}],"bLUE2":[function(require,module,exports) {
"use strict";
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
module.exports = function tokenizer(input, options = {}) {
    let css = input.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input.error("Unclosed " + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                }while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
                currentToken = [
                    "space",
                    css.slice(pos, next)
                ];
                pos = next - 1;
                break;
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES:
                prev = buffer.length ? buffer.pop()[1] : "";
                n = css.charCodeAt(pos + 1);
                if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(")", next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos;
                                break;
                            } else unclosed("bracket");
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped);
                    currentToken = [
                        "brackets",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    next = css.indexOf(")", pos + 1);
                    content = css.slice(pos, next + 1);
                    if (next === -1 || RE_BAD_BRACKET.test(content)) currentToken = [
                        "(",
                        "(",
                        pos
                    ];
                    else {
                        currentToken = [
                            "brackets",
                            content,
                            pos,
                            next
                        ];
                        pos = next;
                    }
                }
                break;
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                quote = code === SINGLE_QUOTE ? "'" : '"';
                next = pos;
                do {
                    escaped = false;
                    next = css.indexOf(quote, next + 1);
                    if (next === -1) {
                        if (ignore || ignoreUnclosed) {
                            next = pos + 1;
                            break;
                        } else unclosed("string");
                    }
                    escapePos = next;
                    while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                        escapePos -= 1;
                        escaped = !escaped;
                    }
                }while (escaped);
                currentToken = [
                    "string",
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case AT:
                RE_AT_END.lastIndex = pos + 1;
                RE_AT_END.test(css);
                if (RE_AT_END.lastIndex === 0) next = css.length - 1;
                else next = RE_AT_END.lastIndex - 2;
                currentToken = [
                    "at-word",
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case BACKSLASH:
                next = pos;
                escape = true;
                while(css.charCodeAt(next + 1) === BACKSLASH){
                    next += 1;
                    escape = !escape;
                }
                code = css.charCodeAt(next + 1);
                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                    next += 1;
                    if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                        while(RE_HEX_ESCAPE.test(css.charAt(next + 1)))next += 1;
                        if (css.charCodeAt(next + 1) === SPACE) next += 1;
                    }
                }
                currentToken = [
                    "word",
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            default:
                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                    next = css.indexOf("*/", pos + 2) + 1;
                    if (next === 0) {
                        if (ignore || ignoreUnclosed) next = css.length;
                        else unclosed("comment");
                    }
                    currentToken = [
                        "comment",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    RE_WORD_END.lastIndex = pos + 1;
                    RE_WORD_END.test(css);
                    if (RE_WORD_END.lastIndex === 0) next = css.length - 1;
                    else next = RE_WORD_END.lastIndex - 2;
                    currentToken = [
                        "word",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    buffer.push(currentToken);
                    pos = next;
                }
                break;
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        endOfFile,
        nextToken,
        position
    };
};

},{}],"kbVAt":[function(require,module,exports) {
"use strict";
let Container = require("70faab7fa86a1d67");
class AtRule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = "atrule";
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
}
module.exports = AtRule;
AtRule.default = AtRule;
Container.registerAtRule(AtRule);

},{"70faab7fa86a1d67":"1gj6C"}],"hsDFv":[function(require,module,exports) {
"use strict";
let Container = require("560b8aa33e20ea3e");
let LazyResult, Processor;
class Root extends Container {
    constructor(defaults){
        super(defaults);
        this.type = "root";
        if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === "prepend") {
                if (this.nodes.length > 1) sample.raws.before = this.nodes[1].raws.before;
                else delete sample.raws.before;
            } else if (this.first !== sample) for (let node of nodes)node.raws.before = sample.raws.before;
        }
        return nodes;
    }
    removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) this.nodes[1].raws.before = this.nodes[index].raws.before;
        return super.removeChild(child);
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Root.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Root.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Root;
Root.default = Root;
Container.registerRoot(Root);

},{"560b8aa33e20ea3e":"1gj6C"}],"4SFJx":[function(require,module,exports) {
"use strict";
let Container = require("d5e0f5e0b325cedb");
let list = require("221e506798aa56d3");
class Rule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = "rule";
        if (!this.nodes) this.nodes = [];
    }
    get selectors() {
        return list.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : "," + this.raw("between", "beforeOpen");
        this.selector = values.join(sep);
    }
}
module.exports = Rule;
Rule.default = Rule;
Container.registerRule(Rule);

},{"d5e0f5e0b325cedb":"1gj6C","221e506798aa56d3":"hZo3l"}],"hZo3l":[function(require,module,exports) {
"use strict";
let list = {
    comma (string) {
        return list.split(string, [
            ","
        ], true);
    },
    space (string) {
        let spaces = [
            " ",
            "\n",
            "	"
        ];
        return list.split(string, spaces);
    },
    split (string, separators, last) {
        let array = [];
        let current = "";
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = "";
        let escape = false;
        for (let letter of string){
            if (escape) escape = false;
            else if (letter === "\\") escape = true;
            else if (inQuote) {
                if (letter === prevQuote) inQuote = false;
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === "(") func += 1;
            else if (letter === ")") {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== "") array.push(current.trim());
                current = "";
                split = false;
            } else current += letter;
        }
        if (last || current !== "") array.push(current.trim());
        return array;
    }
};
module.exports = list;
list.default = list;

},{}],"lU6wZ":[function(require,module,exports) {
"use strict";
let NoWorkResult = require("b4049d0a3e372cb2");
let LazyResult = require("9231cbb213c02603");
let Document = require("6f637386b6c47461");
let Root = require("1b2885e293f24ac6");
class Processor {
    constructor(plugins = []){
        this.version = "8.4.39";
        this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i of plugins){
            if (i.postcss === true) i = i();
            else if (i.postcss) i = i.postcss;
            if (typeof i === "object" && Array.isArray(i.plugins)) normalized = normalized.concat(i.plugins);
            else if (typeof i === "object" && i.postcssPlugin) normalized.push(i);
            else if (typeof i === "function") normalized.push(i);
            else if (typeof i === "object" && (i.parse || i.stringify)) throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
            else throw new Error(i + " is not a PostCSS plugin");
        }
        return normalized;
    }
    process(css, opts = {}) {
        if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) return new NoWorkResult(this, css, opts);
        else return new LazyResult(this, css, opts);
    }
    use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin
        ]));
        return this;
    }
}
module.exports = Processor;
Processor.default = Processor;
Root.registerProcessor(Processor);
Document.registerProcessor(Processor);

},{"b4049d0a3e372cb2":"4PfYq","9231cbb213c02603":"580Su","6f637386b6c47461":"dK3sP","1b2885e293f24ac6":"hsDFv"}],"4PfYq":[function(require,module,exports) {
"use strict";
let MapGenerator = require("cac8a030679fbad6");
let stringify = require("9be69d36458d582b");
let warnOnce = require("791f97720f0dd0ae");
let parse = require("910fc79234e1506a");
const Result = require("96a14b02aaa17183");
class NoWorkResult {
    constructor(processor, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor;
        this._css = css;
        this._opts = opts;
        this._map = undefined;
        let root;
        let str = stringify;
        this.result = new Result(this._processor, root, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, "root", {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator(str, root, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) this.result.css = generatedCSS;
            if (generatedMap) this.result.map = generatedMap;
        } else {
            map.clearAnnotation();
            this.result.css = map.css;
        }
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if (!("from" in this._opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this._css;
    }
    warnings() {
        return [];
    }
    get content() {
        return this.result.css;
    }
    get css() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get messages() {
        return [];
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        if (this._root) return this._root;
        let root;
        let parser = parse;
        try {
            root = parser(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) throw this.error;
        else {
            this._root = root;
            return root;
        }
    }
    get [Symbol.toStringTag]() {
        return "NoWorkResult";
    }
}
module.exports = NoWorkResult;
NoWorkResult.default = NoWorkResult;

},{"cac8a030679fbad6":"ghfT0","9be69d36458d582b":"a0MwE","791f97720f0dd0ae":"dpzGz","910fc79234e1506a":"ioa1B","96a14b02aaa17183":"dmoqr"}],"iiNZS":[function(require,module,exports) {
"use strict";
let Declaration = require("4b43ae4fd3737621");
let PreviousMap = require("60700dde8b5be836");
let Comment = require("accf7cbbccc760da");
let AtRule = require("3cdc0b706b482706");
let Input = require("58554d265ddb6611");
let Root = require("c11a715055f82a3b");
let Rule = require("e55fa67de2c8e0eb");
function fromJSON(json, inputs) {
    if (Array.isArray(json)) return json.map((n)=>fromJSON(n));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input of ownInputs){
            let inputHydrated = {
                ...input,
                __proto__: Input.prototype
            };
            if (inputHydrated.map) inputHydrated.map = {
                ...inputHydrated.map,
                __proto__: PreviousMap.prototype
            };
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) defaults.nodes = json.nodes.map((n)=>fromJSON(n, inputs));
    if (defaults.source) {
        let { inputId, ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) defaults.source.input = inputs[inputId];
    }
    if (defaults.type === "root") return new Root(defaults);
    else if (defaults.type === "decl") return new Declaration(defaults);
    else if (defaults.type === "rule") return new Rule(defaults);
    else if (defaults.type === "comment") return new Comment(defaults);
    else if (defaults.type === "atrule") return new AtRule(defaults);
    else throw new Error("Unknown node type: " + json.type);
}
module.exports = fromJSON;
fromJSON.default = fromJSON;

},{"4b43ae4fd3737621":"2mU8a","60700dde8b5be836":"cmiCo","accf7cbbccc760da":"5CBjv","3cdc0b706b482706":"kbVAt","58554d265ddb6611":"fb1UO","c11a715055f82a3b":"hsDFv","e55fa67de2c8e0eb":"4SFJx"}],"1EIhI":[function(require,module,exports) {
let vendor = require("bfb3e9c70d13bb9b");
let Declaration = require("4c4b43637affc738");
let Resolution = require("ff076df3c71aa86");
let Transition = require("ecd7363190237b80");
let Processor = require("de69a76ba9a21516");
let Supports = require("e75d19467b86c89c");
let Browsers = require("1915fd16453fc356");
let Selector = require("d66828ac5e0ffd72");
let AtRule = require("4f1d46331977b479");
let Value = require("a6e809279cb6f5a0");
let utils = require("d84f478cb5dd21ef");
let hackFullscreen = require("597085795c15941d");
let hackPlaceholder = require("5b13bcd4d58e4644");
let hackPlaceholderShown = require("7b4c03e0bacf7500");
let hackFileSelectorButton = require("7a8082447cef2d86");
let hackFlex = require("8a4b3ddee1873eb3");
let hackOrder = require("a0c1b72c5981cc99");
let hackFilter = require("c9c8e98cda924a45");
let hackGridEnd = require("2af937782fc41dc");
let hackAnimation = require("d8ec7482deae1c1c");
let hackFlexFlow = require("82c2cc88f607627");
let hackFlexGrow = require("e80b8752488918ea");
let hackFlexWrap = require("4cfb3f41ec689a0d");
let hackGridArea = require("b3a63c4496b0877");
let hackPlaceSelf = require("14a809e23bf25fc6");
let hackGridStart = require("6c5ddb3bc705d1e1");
let hackAlignSelf = require("f19e010fd6d7e25a");
let hackAppearance = require("9529f6e5e87cf285");
let hackFlexBasis = require("833af5c0c234b23");
let hackMaskBorder = require("e80167f1af27537");
let hackMaskComposite = require("fb7981a4e9f5d5b9");
let hackAlignItems = require("36ca2fd5e1052c76");
let hackUserSelect = require("4f8365f024defa31");
let hackFlexShrink = require("54ee004a55f578bd");
let hackBreakProps = require("df670eaa89841443");
let hackWritingMode = require("e82f798be6f7719a");
let hackBorderImage = require("abb69a908111a5c6");
let hackAlignContent = require("dac8b02212fcafac");
let hackBorderRadius = require("bf98849af5a9dfce");
let hackBlockLogical = require("925802d1534d0132");
let hackGridTemplate = require("fc963f6404d59ac8");
let hackInlineLogical = require("e1b1c25054ecd160");
let hackGridRowAlign = require("7e1388b53f27875c");
let hackTransformDecl = require("891b4abb1fa6fd11");
let hackFlexDirection = require("1d49964532d1bfab");
let hackImageRendering = require("78555e1bccbe47b9");
let hackBackdropFilter = require("dcc1c2fb1c19a5bc");
let hackBackgroundClip = require("5c93ecce3f7d289a");
let hackTextDecoration = require("a8b86e243617729e");
let hackJustifyContent = require("a2ee14bc9d18344e");
let hackBackgroundSize = require("c46e66506f6864a");
let hackGridRowColumn = require("d72b3ff9ad6d46ae");
let hackGridRowsColumns = require("d5f74666ba0f828");
let hackGridColumnAlign = require("2ba4debf49a69241");
let hackPrintColorAdjust = require("bff770c76944b36e");
let hackOverscrollBehavior = require("f8f9df922cc0b747");
let hackGridTemplateAreas = require("4f614c8b85945ce3");
let hackTextEmphasisPosition = require("ca204ef3cb719de3");
let hackTextDecorationSkipInk = require("9b36851a79c62dfd");
let hackGradient = require("e76e705287930e0f");
let hackIntrinsic = require("8cfa01c7986056a4");
let hackPixelated = require("8523bdcf1a76e989");
let hackImageSet = require("e48967354adee700");
let hackCrossFade = require("4ec7b7f8e4e58b74");
let hackDisplayFlex = require("c78d232feb79addf");
let hackDisplayGrid = require("882f78e5804192af");
let hackFilterValue = require("f4e1628f76d184fb");
let hackAutofill = require("ac1eb8811e2db884");
Selector.hack(hackAutofill);
Selector.hack(hackFullscreen);
Selector.hack(hackPlaceholder);
Selector.hack(hackPlaceholderShown);
Selector.hack(hackFileSelectorButton);
Declaration.hack(hackFlex);
Declaration.hack(hackOrder);
Declaration.hack(hackFilter);
Declaration.hack(hackGridEnd);
Declaration.hack(hackAnimation);
Declaration.hack(hackFlexFlow);
Declaration.hack(hackFlexGrow);
Declaration.hack(hackFlexWrap);
Declaration.hack(hackGridArea);
Declaration.hack(hackPlaceSelf);
Declaration.hack(hackGridStart);
Declaration.hack(hackAlignSelf);
Declaration.hack(hackAppearance);
Declaration.hack(hackFlexBasis);
Declaration.hack(hackMaskBorder);
Declaration.hack(hackMaskComposite);
Declaration.hack(hackAlignItems);
Declaration.hack(hackUserSelect);
Declaration.hack(hackFlexShrink);
Declaration.hack(hackBreakProps);
Declaration.hack(hackWritingMode);
Declaration.hack(hackBorderImage);
Declaration.hack(hackAlignContent);
Declaration.hack(hackBorderRadius);
Declaration.hack(hackBlockLogical);
Declaration.hack(hackGridTemplate);
Declaration.hack(hackInlineLogical);
Declaration.hack(hackGridRowAlign);
Declaration.hack(hackTransformDecl);
Declaration.hack(hackFlexDirection);
Declaration.hack(hackImageRendering);
Declaration.hack(hackBackdropFilter);
Declaration.hack(hackBackgroundClip);
Declaration.hack(hackTextDecoration);
Declaration.hack(hackJustifyContent);
Declaration.hack(hackBackgroundSize);
Declaration.hack(hackGridRowColumn);
Declaration.hack(hackGridRowsColumns);
Declaration.hack(hackGridColumnAlign);
Declaration.hack(hackOverscrollBehavior);
Declaration.hack(hackGridTemplateAreas);
Declaration.hack(hackPrintColorAdjust);
Declaration.hack(hackTextEmphasisPosition);
Declaration.hack(hackTextDecorationSkipInk);
Value.hack(hackGradient);
Value.hack(hackIntrinsic);
Value.hack(hackPixelated);
Value.hack(hackImageSet);
Value.hack(hackCrossFade);
Value.hack(hackDisplayFlex);
Value.hack(hackDisplayGrid);
Value.hack(hackFilterValue);
let declsCache = new Map();
class Prefixes {
    constructor(data, browsers, options = {}){
        this.data = data;
        this.browsers = browsers;
        this.options = options;
        [this.add, this.remove] = this.preprocess(this.select(this.data));
        this.transition = new Transition(this);
        this.processor = new Processor(this);
    }
    /**
   * Return clone instance to remove all prefixes
   */ cleaner() {
        if (this.cleanerCache) return this.cleanerCache;
        if (this.browsers.selected.length) {
            let empty = new Browsers(this.browsers.data, []);
            this.cleanerCache = new Prefixes(this.data, empty, this.options);
        } else return this;
        return this.cleanerCache;
    }
    /**
   * Declaration loader with caching
   */ decl(prop) {
        if (!declsCache.has(prop)) declsCache.set(prop, Declaration.load(prop));
        return declsCache.get(prop);
    }
    /**
   * Group declaration by unprefixed property to check them
   */ group(decl) {
        let rule = decl.parent;
        let index = rule.index(decl);
        let { length } = rule.nodes;
        let unprefixed = this.unprefixed(decl.prop);
        let checker = (step, callback)=>{
            index += step;
            while(index >= 0 && index < length){
                let other = rule.nodes[index];
                if (other.type === "decl") {
                    if (step === -1 && other.prop === unprefixed) {
                        if (!Browsers.withPrefix(other.value)) break;
                    }
                    if (this.unprefixed(other.prop) !== unprefixed) break;
                    else if (callback(other) === true) return true;
                    if (step === 1 && other.prop === unprefixed) {
                        if (!Browsers.withPrefix(other.value)) break;
                    }
                }
                index += step;
            }
            return false;
        };
        return {
            down (callback) {
                return checker(1, callback);
            },
            up (callback) {
                return checker(-1, callback);
            }
        };
    }
    /**
   * Normalize prefix for remover
   */ normalize(prop) {
        return this.decl(prop).normalize(prop);
    }
    /**
   * Return prefixed version of property
   */ prefixed(prop, prefix) {
        prop = vendor.unprefixed(prop);
        return this.decl(prop).prefixed(prop, prefix);
    }
    /**
   * Cache prefixes data to fast CSS processing
   */ preprocess(selected) {
        let add = {
            "@supports": new Supports(Prefixes, this),
            "selectors": []
        };
        for(let name in selected.add){
            let prefixes = selected.add[name];
            if (name === "@keyframes" || name === "@viewport") add[name] = new AtRule(name, prefixes, this);
            else if (name === "@resolution") add[name] = new Resolution(name, prefixes, this);
            else if (this.data[name].selector) add.selectors.push(Selector.load(name, prefixes, this));
            else {
                let props = this.data[name].props;
                if (props) {
                    let value = Value.load(name, prefixes, this);
                    for (let prop of props){
                        if (!add[prop]) add[prop] = {
                            values: []
                        };
                        add[prop].values.push(value);
                    }
                } else {
                    let values = add[name] && add[name].values || [];
                    add[name] = Declaration.load(name, prefixes, this);
                    add[name].values = values;
                }
            }
        }
        let remove = {
            selectors: []
        };
        for(let name in selected.remove){
            let prefixes = selected.remove[name];
            if (this.data[name].selector) {
                let selector = Selector.load(name, prefixes);
                for (let prefix of prefixes)remove.selectors.push(selector.old(prefix));
            } else if (name === "@keyframes" || name === "@viewport") for (let prefix of prefixes){
                let prefixed = `@${prefix}${name.slice(1)}`;
                remove[prefixed] = {
                    remove: true
                };
            }
            else if (name === "@resolution") remove[name] = new Resolution(name, prefixes, this);
            else {
                let props = this.data[name].props;
                if (props) {
                    let value = Value.load(name, [], this);
                    for (let prefix of prefixes){
                        let old = value.old(prefix);
                        if (old) for (let prop of props){
                            if (!remove[prop]) remove[prop] = {};
                            if (!remove[prop].values) remove[prop].values = [];
                            remove[prop].values.push(old);
                        }
                    }
                } else for (let p of prefixes){
                    let olds = this.decl(name).old(name, p);
                    if (name === "align-self") {
                        let a = add[name] && add[name].prefixes;
                        if (a) {
                            if (p === "-webkit- 2009" && a.includes("-webkit-")) continue;
                            else if (p === "-webkit-" && a.includes("-webkit- 2009")) continue;
                        }
                    }
                    for (let prefixed of olds){
                        if (!remove[prefixed]) remove[prefixed] = {};
                        remove[prefixed].remove = true;
                    }
                }
            }
        }
        return [
            add,
            remove
        ];
    }
    /**
   * Select prefixes from data, which is necessary for selected browsers
   */ select(list) {
        let selected = {
            add: {},
            remove: {}
        };
        for(let name in list){
            let data = list[name];
            let add = data.browsers.map((i)=>{
                let params = i.split(" ");
                return {
                    browser: `${params[0]} ${params[1]}`,
                    note: params[2]
                };
            });
            let notes = add.filter((i)=>i.note).map((i)=>`${this.browsers.prefix(i.browser)} ${i.note}`);
            notes = utils.uniq(notes);
            add = add.filter((i)=>this.browsers.isSelected(i.browser)).map((i)=>{
                let prefix = this.browsers.prefix(i.browser);
                if (i.note) return `${prefix} ${i.note}`;
                else return prefix;
            });
            add = this.sort(utils.uniq(add));
            if (this.options.flexbox === "no-2009") add = add.filter((i)=>!i.includes("2009"));
            let all = data.browsers.map((i)=>this.browsers.prefix(i));
            if (data.mistakes) all = all.concat(data.mistakes);
            all = all.concat(notes);
            all = utils.uniq(all);
            if (add.length) {
                selected.add[name] = add;
                if (add.length < all.length) selected.remove[name] = all.filter((i)=>!add.includes(i));
            } else selected.remove[name] = all;
        }
        return selected;
    }
    /**
   * Sort vendor prefixes
   */ sort(prefixes) {
        return prefixes.sort((a, b)=>{
            let aLength = utils.removeNote(a).length;
            let bLength = utils.removeNote(b).length;
            if (aLength === bLength) return b.length - a.length;
            else return bLength - aLength;
        });
    }
    /**
   * Return unprefixed version of property
   */ unprefixed(prop) {
        let value = this.normalize(vendor.unprefixed(prop));
        if (value === "flex-direction") value = "flex-flow";
        return value;
    }
    /**
   * Return values, which must be prefixed in selected property
   */ values(type, prop) {
        let data = this[type];
        let global = data["*"] && data["*"].values;
        let values = data[prop] && data[prop].values;
        if (global && values) return utils.uniq(global.concat(values));
        else return global || values || [];
    }
}
module.exports = Prefixes;

},{"bfb3e9c70d13bb9b":"926uR","4c4b43637affc738":"eJRSt","ff076df3c71aa86":"96Ywp","ecd7363190237b80":"ltOi8","de69a76ba9a21516":"iYSwf","e75d19467b86c89c":"cjWll","1915fd16453fc356":"dGs5H","d66828ac5e0ffd72":"lFkyP","4f1d46331977b479":"ixGmX","a6e809279cb6f5a0":"i2bKe","d84f478cb5dd21ef":"j2sRV","597085795c15941d":"21WlU","5b13bcd4d58e4644":"bfROY","7b4c03e0bacf7500":"04bRS","7a8082447cef2d86":"ceDQf","8a4b3ddee1873eb3":"5MJC9","a0c1b72c5981cc99":"kLOI0","c9c8e98cda924a45":"gsORo","2af937782fc41dc":"cfQIf","d8ec7482deae1c1c":"d89n7","82c2cc88f607627":"k7XCm","e80b8752488918ea":"dOvfz","4cfb3f41ec689a0d":"anJJ4","b3a63c4496b0877":"eSHPG","14a809e23bf25fc6":"foJhB","6c5ddb3bc705d1e1":"i40p5","f19e010fd6d7e25a":"eXAFe","9529f6e5e87cf285":"9zbtj","833af5c0c234b23":"713c3","e80167f1af27537":"2cBxP","fb7981a4e9f5d5b9":"lxxEp","36ca2fd5e1052c76":"hkwVN","4f8365f024defa31":"hxScT","54ee004a55f578bd":"ifLgz","df670eaa89841443":"8Pghi","e82f798be6f7719a":"5UHlb","abb69a908111a5c6":"2AMig","dac8b02212fcafac":"ethY1","bf98849af5a9dfce":"eopNU","925802d1534d0132":"2hr4f","fc963f6404d59ac8":"eQved","e1b1c25054ecd160":"4YDcH","7e1388b53f27875c":"b4Fjv","891b4abb1fa6fd11":"8hBMV","1d49964532d1bfab":"7AQT7","78555e1bccbe47b9":"61pla","dcc1c2fb1c19a5bc":"ifsLa","5c93ecce3f7d289a":"cTKQe","a8b86e243617729e":"2iGjq","a2ee14bc9d18344e":"120gd","c46e66506f6864a":"bsqmB","d72b3ff9ad6d46ae":"iKZkA","d5f74666ba0f828":"7qdUR","2ba4debf49a69241":"1L0m2","bff770c76944b36e":"6vDh7","f8f9df922cc0b747":"cCD0L","4f614c8b85945ce3":"l1eeB","ca204ef3cb719de3":"2288K","9b36851a79c62dfd":"i4nj3","e76e705287930e0f":"eKE95","8cfa01c7986056a4":"82TVI","8523bdcf1a76e989":"6JN8P","e48967354adee700":"22xbR","4ec7b7f8e4e58b74":"6PHL0","c78d232feb79addf":"jbk0I","882f78e5804192af":"mUeq2","f4e1628f76d184fb":"c8hJ9","ac1eb8811e2db884":"kD0Tm"}],"926uR":[function(require,module,exports) {
module.exports = {
    prefix (prop) {
        let match = prop.match(/^(-\w+-)/);
        if (match) return match[0];
        return "";
    },
    unprefixed (prop) {
        return prop.replace(/^-\w+-/, "");
    }
};

},{}],"eJRSt":[function(require,module,exports) {
let Prefixer = require("e0f4cfcb95e80469");
let Browsers = require("955f17c66e40b195");
let utils = require("d513829705a1885f");
class Declaration extends Prefixer {
    /**
   * Clone and add prefixes for declaration
   */ add(decl, prefix, prefixes, result) {
        let prefixed = this.prefixed(decl.prop, prefix);
        if (this.isAlready(decl, prefixed) || this.otherPrefixes(decl.value, prefix)) return undefined;
        return this.insert(decl, prefix, prefixes, result);
    }
    /**
   * Calculate indentation to create visual cascade
   */ calcBefore(prefixes, decl, prefix = "") {
        let max = this.maxPrefixed(prefixes, decl);
        let diff = max - utils.removeNote(prefix).length;
        let before = decl.raw("before");
        if (diff > 0) before += Array(diff).fill(" ").join("");
        return before;
    }
    /**
   * Always true, because we already get prefixer by property name
   */ check() {
        return true;
    }
    /**
   * Clone and insert new declaration
   */ insert(decl, prefix, prefixes) {
        let cloned = this.set(this.clone(decl), prefix);
        if (!cloned) return undefined;
        let already = decl.parent.some((i)=>i.prop === cloned.prop && i.value === cloned.value);
        if (already) return undefined;
        if (this.needCascade(decl)) cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        return decl.parent.insertBefore(decl, cloned);
    }
    /**
   * Did this declaration has this prefix above
   */ isAlready(decl, prefixed) {
        let already = this.all.group(decl).up((i)=>i.prop === prefixed);
        if (!already) already = this.all.group(decl).down((i)=>i.prop === prefixed);
        return already;
    }
    /**
   * Return maximum length of possible prefixed property
   */ maxPrefixed(prefixes, decl) {
        if (decl._autoprefixerMax) return decl._autoprefixerMax;
        let max = 0;
        for (let prefix of prefixes){
            prefix = utils.removeNote(prefix);
            if (prefix.length > max) max = prefix.length;
        }
        decl._autoprefixerMax = max;
        return decl._autoprefixerMax;
    }
    /**
   * Should we use visual cascade for prefixes
   */ needCascade(decl) {
        if (!decl._autoprefixerCascade) decl._autoprefixerCascade = this.all.options.cascade !== false && decl.raw("before").includes("\n");
        return decl._autoprefixerCascade;
    }
    /**
   * Return unprefixed version of property
   */ normalize(prop) {
        return prop;
    }
    /**
   * Return list of prefixed properties to clean old prefixes
   */ old(prop, prefix) {
        return [
            this.prefixed(prop, prefix)
        ];
    }
    /**
   * Check `value`, that it contain other prefixes, rather than `prefix`
   */ otherPrefixes(value, prefix) {
        for (let other of Browsers.prefixes()){
            if (other === prefix) continue;
            if (value.includes(other)) return value.replace(/var\([^)]+\)/, "").includes(other);
        }
        return false;
    }
    /**
   * Return prefixed version of property
   */ prefixed(prop, prefix) {
        return prefix + prop;
    }
    /**
   * Add spaces for visual cascade
   */ process(decl, result) {
        if (!this.needCascade(decl)) {
            super.process(decl, result);
            return;
        }
        let prefixes = super.process(decl, result);
        if (!prefixes || !prefixes.length) return;
        this.restoreBefore(decl);
        decl.raws.before = this.calcBefore(prefixes, decl);
    }
    /**
   * Remove visual cascade
   */ restoreBefore(decl) {
        let lines = decl.raw("before").split("\n");
        let min = lines[lines.length - 1];
        this.all.group(decl).up((prefixed)=>{
            let array = prefixed.raw("before").split("\n");
            let last = array[array.length - 1];
            if (last.length < min.length) min = last;
        });
        lines[lines.length - 1] = min;
        decl.raws.before = lines.join("\n");
    }
    /**
   * Set prefix to declaration
   */ set(decl, prefix) {
        decl.prop = this.prefixed(decl.prop, prefix);
        return decl;
    }
}
module.exports = Declaration;

},{"e0f4cfcb95e80469":"6bcfc","955f17c66e40b195":"dGs5H","d513829705a1885f":"j2sRV"}],"6bcfc":[function(require,module,exports) {
let Browsers = require("895e8d0fbd53807c");
let vendor = require("3a0b7ca054c66c89");
let utils = require("62a8c2f4e4964d64");
/**
 * Recursively clone objects
 */ function clone(obj, parent) {
    let cloned = new obj.constructor();
    for (let i of Object.keys(obj || {})){
        let value = obj[i];
        if (i === "parent" && typeof value === "object") {
            if (parent) cloned[i] = parent;
        } else if (i === "source" || i === null) cloned[i] = value;
        else if (Array.isArray(value)) cloned[i] = value.map((x)=>clone(x, cloned));
        else if (i !== "_autoprefixerPrefix" && i !== "_autoprefixerValues" && i !== "proxyCache") {
            if (typeof value === "object" && value !== null) value = clone(value, cloned);
            cloned[i] = value;
        }
    }
    return cloned;
}
class Prefixer {
    constructor(name, prefixes, all){
        this.prefixes = prefixes;
        this.name = name;
        this.all = all;
    }
    /**
   * Clone node and clean autprefixer custom caches
   */ static clone(node, overrides) {
        let cloned = clone(node);
        for(let name in overrides)cloned[name] = overrides[name];
        return cloned;
    }
    /**
   * Add hack to selected names
   */ static hack(klass) {
        if (!this.hacks) this.hacks = {};
        return klass.names.map((name)=>{
            this.hacks[name] = klass;
            return this.hacks[name];
        });
    }
    /**
   * Load hacks for some names
   */ static load(name, prefixes, all) {
        let Klass = this.hacks && this.hacks[name];
        if (Klass) return new Klass(name, prefixes, all);
        else return new this(name, prefixes, all);
    }
    /**
   * Shortcut for Prefixer.clone
   */ clone(node, overrides) {
        return Prefixer.clone(node, overrides);
    }
    /**
   * Find prefix in node parents
   */ parentPrefix(node) {
        let prefix;
        if (typeof node._autoprefixerPrefix !== "undefined") prefix = node._autoprefixerPrefix;
        else if (node.type === "decl" && node.prop[0] === "-") prefix = vendor.prefix(node.prop);
        else if (node.type === "root") prefix = false;
        else if (node.type === "rule" && node.selector.includes(":-") && /:(-\w+-)/.test(node.selector)) prefix = node.selector.match(/:(-\w+-)/)[1];
        else if (node.type === "atrule" && node.name[0] === "-") prefix = vendor.prefix(node.name);
        else prefix = this.parentPrefix(node.parent);
        if (!Browsers.prefixes().includes(prefix)) prefix = false;
        node._autoprefixerPrefix = prefix;
        return node._autoprefixerPrefix;
    }
    /**
   * Clone node with prefixes
   */ process(node, result) {
        if (!this.check(node)) return undefined;
        let parent = this.parentPrefix(node);
        let prefixes = this.prefixes.filter((prefix)=>!parent || parent === utils.removeNote(prefix));
        let added = [];
        for (let prefix of prefixes)if (this.add(node, prefix, added.concat([
            prefix
        ]), result)) added.push(prefix);
        return added;
    }
}
module.exports = Prefixer;

},{"895e8d0fbd53807c":"dGs5H","3a0b7ca054c66c89":"926uR","62a8c2f4e4964d64":"j2sRV"}],"96Ywp":[function(require,module,exports) {
let FractionJs = require("a0f204c5cb0a9db9");
let Prefixer = require("63637d3d5e990eb6");
let utils = require("6e922249ef276bea");
const REGEXP = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpcm|dpi|x)/gi;
const SPLIT = /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpcm|dpi|x)/i;
class Resolution extends Prefixer {
    /**
   * Remove prefixed queries
   */ clean(rule) {
        if (!this.bad) {
            this.bad = [];
            for (let prefix of this.prefixes){
                this.bad.push(this.prefixName(prefix, "min"));
                this.bad.push(this.prefixName(prefix, "max"));
            }
        }
        rule.params = utils.editList(rule.params, (queries)=>{
            return queries.filter((query)=>this.bad.every((i)=>!query.includes(i)));
        });
    }
    /**
   * Return prefixed query name
   */ prefixName(prefix, name) {
        if (prefix === "-moz-") return name + "--moz-device-pixel-ratio";
        else return prefix + name + "-device-pixel-ratio";
    }
    /**
   * Return prefixed query
   */ prefixQuery(prefix, name, colon, value, units) {
        value = new FractionJs(value);
        // 1dpcm = 2.54dpi
        // 1dppx = 96dpi
        if (units === "dpi") value = value.div(96);
        else if (units === "dpcm") value = value.mul(2.54).div(96);
        value = value.simplify();
        if (prefix === "-o-") value = value.n + "/" + value.d;
        return this.prefixName(prefix, name) + colon + value;
    }
    /**
   * Add prefixed queries
   */ process(rule) {
        let parent = this.parentPrefix(rule);
        let prefixes = parent ? [
            parent
        ] : this.prefixes;
        rule.params = utils.editList(rule.params, (origin, prefixed)=>{
            for (let query of origin){
                if (!query.includes("min-resolution") && !query.includes("max-resolution")) {
                    prefixed.push(query);
                    continue;
                }
                for (let prefix of prefixes){
                    let processed = query.replace(REGEXP, (str)=>{
                        let parts = str.match(SPLIT);
                        return this.prefixQuery(prefix, parts[1], parts[2], parts[3], parts[4]);
                    });
                    prefixed.push(processed);
                }
                prefixed.push(query);
            }
            return utils.uniq(prefixed);
        });
    }
}
module.exports = Resolution;

},{"a0f204c5cb0a9db9":"2jXBf","63637d3d5e990eb6":"6bcfc","6e922249ef276bea":"j2sRV"}],"2jXBf":[function(require,module,exports) {
/**
 * @license Fraction.js v4.3.7 31/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/ /**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <numerator>, 1 => <denominator> ]
 * [ n => <numerator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */ (function(root) {
    "use strict";
    // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
    // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
    // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
    var MAX_CYCLE_LEN = 2000;
    // Parsed data to avoid calling "new" all the time
    var P = {
        "s": 1,
        "n": 0,
        "d": 1
    };
    function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) throw InvalidParameter();
        return n * s;
    }
    // Creates a new Fraction internally without the need of the bulky constructor
    function newFraction(n, d) {
        if (d === 0) throw DivisionByZero();
        var f = Object.create(Fraction.prototype);
        f["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d);
        f["n"] = n / a;
        f["d"] = d / a;
        return f;
    }
    function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while(s <= n){
            while(n % i === 0){
                n /= i;
                factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
        }
        if (n !== num) {
            if (n > 1) factors[n] = (factors[n] || 0) + 1;
        } else factors[num] = (factors[num] || 0) + 1;
        return factors;
    }
    var parse = function(p1, p2) {
        var n = 0, d = 1, s = 1;
        var v = 0, w = 0, x = 0, y = 1, z = 1;
        var A = 0, B = 1;
        var C = 1, D = 1;
        var N = 10000000;
        var M;
        if (p1 === undefined || p1 === null) ;
        else if (p2 !== undefined) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) throw NonIntegerParameter();
        } else switch(typeof p1){
            case "object":
                if ("d" in p1 && "n" in p1) {
                    n = p1["n"];
                    d = p1["d"];
                    if ("s" in p1) n *= p1["s"];
                } else if (0 in p1) {
                    n = p1[0];
                    if (1 in p1) d = p1[1];
                } else throw InvalidParameter();
                s = n * d;
                break;
            case "number":
                if (p1 < 0) {
                    s = p1;
                    p1 = -p1;
                }
                if (p1 % 1 === 0) n = p1;
                else if (p1 > 0) {
                    if (p1 >= 1) {
                        z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                        p1 /= z;
                    }
                    // Using Farey Sequences
                    // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
                    while(B <= N && D <= N){
                        M = (A + C) / (B + D);
                        if (p1 === M) {
                            if (B + D <= N) {
                                n = A + C;
                                d = B + D;
                            } else if (D > B) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                            break;
                        } else {
                            if (p1 > M) {
                                A += C;
                                B += D;
                            } else {
                                C += A;
                                D += B;
                            }
                            if (B > N) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                        }
                    }
                    n *= z;
                } else if (isNaN(p1) || isNaN(p2)) d = n = NaN;
                break;
            case "string":
                B = p1.match(/\d+|./g);
                if (B === null) throw InvalidParameter();
                if (B[A] === "-") {
                    s = -1;
                    A++;
                } else if (B[A] === "+") A++;
                if (B.length === A + 1) w = assign(B[A++], s);
                else if (B[A + 1] === "." || B[A] === ".") {
                    if (B[A] !== ".") v = assign(B[A++], s);
                    A++;
                    // Check for decimal places
                    if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
                        w = assign(B[A], s);
                        y = Math.pow(10, B[A].length);
                        A++;
                    }
                    // Check for repeating places
                    if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
                        x = assign(B[A + 1], s);
                        z = Math.pow(10, B[A + 1].length) - 1;
                        A += 3;
                    }
                } else if (B[A + 1] === "/" || B[A + 1] === ":") {
                    w = assign(B[A], s);
                    y = assign(B[A + 2], 1);
                    A += 3;
                } else if (B[A + 3] === "/" && B[A + 1] === " ") {
                    v = assign(B[A], s);
                    w = assign(B[A + 2], s);
                    y = assign(B[A + 4], 1);
                    A += 5;
                }
                if (B.length <= A) {
                    d = y * z;
                    s = /* void */ n = x + d * v + z * w;
                    break;
                }
            default:
                throw InvalidParameter();
        }
        if (d === 0) throw DivisionByZero();
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d);
    };
    function modpow(b, e, m) {
        var r = 1;
        for(; e > 0; b = b * b % m, e >>= 1)if (e & 1) r = r * b % m;
        return r;
    }
    function cycleLen(n, d) {
        for(; d % 2 === 0; d /= 2);
        for(; d % 5 === 0; d /= 5);
        if (d === 1) return 0;
        // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
        // 10^(d-1) % d == 1
        // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
        // as we want to translate the numbers to strings.
        var rem = 10 % d;
        var t = 1;
        for(; rem !== 1; t++){
            rem = rem * 10 % d;
            if (t > MAX_CYCLE_LEN) return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
        }
        return t;
    }
    function cycleStart(n, d, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d);
        for(var t = 0; t < 300; t++){
            // Solve 10^s == 10^(s+t) (mod d)
            if (rem1 === rem2) return t;
            rem1 = rem1 * 10 % d;
            rem2 = rem2 * 10 % d;
        }
        return 0;
    }
    function gcd(a, b) {
        if (!a) return b;
        if (!b) return a;
        while(true){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */ function Fraction(a, b) {
        parse(a, b);
        if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]); // Abuse variable a
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
        } else return newFraction(P["s"] * P["n"], P["d"]);
    }
    var DivisionByZero = function() {
        return new Error("Division by Zero");
    };
    var InvalidParameter = function() {
        return new Error("Invalid argument");
    };
    var NonIntegerParameter = function() {
        return new Error("Parameters must be integer");
    };
    Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/ "abs": function() {
            return newFraction(this["n"], this["d"]);
        },
        /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/ "neg": function() {
            return newFraction(-this["s"] * this["n"], this["d"]);
        },
        /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/ "add": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/ "sub": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/ "mul": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/ "div": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/ "clone": function() {
            return newFraction(this["s"] * this["n"], this["d"]);
        },
        /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/ "mod": function(a, b) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            if (a === undefined) return newFraction(this["s"] * this["n"] % this["d"], 1);
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) throw DivisionByZero();
            /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/ /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */ return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */ "gcd": function(a, b) {
            parse(a, b);
            // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
            return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */ "lcm": function(a, b) {
            parse(a, b);
            // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
            if (P["n"] === 0 && this["n"] === 0) return newFraction(0, 1);
            return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/ "ceil": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/ "floor": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/ "round": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational number to a multiple of another rational number
     *
     * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
     **/ "roundTo": function(a, b) {
            /*
      k * x/y ≤ a/b < (k+1) * x/y
      ⇔ k ≤ a/b / (x/y) < (k+1)
      ⇔ k = floor(a/b * y/x)
      */ parse(a, b);
            return newFraction(this["s"] * Math.round(this["n"] * P["d"] / (this["d"] * P["n"])) * P["n"], P["d"]);
        },
        /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/ "inverse": function() {
            return newFraction(this["s"] * this["d"], this["n"]);
        },
        /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */ "pow": function(a, b) {
            parse(a, b);
            // Trivial case when exp is an integer
            if (P["d"] === 1) {
                if (P["s"] < 0) return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
                else return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
            }
            // Negative roots become complex
            //     (-a/b)^(c/d) = x
            // <=> (-1)^(c/d) * (a/b)^(c/d) = x
            // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
            // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
            // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
            if (this["s"] < 0) return null;
            // Now prime factor n and d
            var N = factorize(this["n"]);
            var D = factorize(this["d"]);
            // Exponentiate and take root for n and d individually
            var n = 1;
            var d = 1;
            for(var k in N){
                if (k === "1") continue;
                if (k === "0") {
                    n = 0;
                    break;
                }
                N[k] *= P["n"];
                if (N[k] % P["d"] === 0) N[k] /= P["d"];
                else return null;
                n *= Math.pow(k, N[k]);
            }
            for(var k in D){
                if (k === "1") continue;
                D[k] *= P["n"];
                if (D[k] % P["d"] === 0) D[k] /= P["d"];
                else return null;
                d *= Math.pow(k, D[k]);
            }
            if (P["s"] < 0) return newFraction(d, n);
            return newFraction(n, d);
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "equals": function(a, b) {
            parse(a, b);
            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "compare": function(a, b) {
            parse(a, b);
            var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
        },
        "simplify": function(eps) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return this;
            eps = eps || 0.001;
            var thisABS = this["abs"]();
            var cont = thisABS["toContinued"]();
            for(var i = 1; i < cont.length; i++){
                var s = newFraction(cont[i - 1], 1);
                for(var k = i - 2; k >= 0; k--)s = s["inverse"]()["add"](cont[k]);
                if (Math.abs(s["sub"](thisABS).valueOf()) < eps) return s["mul"](this["s"]);
            }
            return this;
        },
        /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */ "divisible": function(a, b) {
            parse(a, b);
            return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/ "valueOf": function() {
            return this["s"] * this["n"] / this["d"];
        },
        /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/ "toFraction": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    str += " ";
                    n %= d;
                }
                str += n;
                str += "/";
                str += d;
            }
            return str;
        },
        /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/ "toLatex": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    n %= d;
                }
                str += "\\frac{";
                str += n;
                str += "}{";
                str += d;
                str += "}";
            }
            return str;
        },
        /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */ "toContinued": function() {
            var t;
            var a = this["n"];
            var b = this["d"];
            var res = [];
            if (isNaN(a) || isNaN(b)) return res;
            do {
                res.push(Math.floor(a / b));
                t = a % b;
                a = b;
                b = t;
            }while (a !== 1);
            return res;
        },
        /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/ "toString": function(dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) return "NaN";
            dec = dec || 15; // 15 = decimal places when no repetation
            var cycLen = cycleLen(N, D); // Cycle length
            var cycOff = cycleStart(N, D, cycLen); // Cycle start
            var str = this["s"] < 0 ? "-" : "";
            str += N / D | 0;
            N %= D;
            N *= 10;
            if (N) str += ".";
            if (cycLen) {
                for(var i = cycOff; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += "(";
                for(var i = cycLen; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += ")";
            } else for(var i = dec; N && i--;){
                str += N / D | 0;
                N %= D;
                N *= 10;
            }
            return str;
        }
    };
    Object.defineProperty(exports, "__esModule", {
        "value": true
    });
    exports["default"] = Fraction;
    module["exports"] = Fraction;
})(this);

},{}],"ltOi8":[function(require,module,exports) {
let { list } = require("8b36db8dc3d1c90f");
let parser = require("2ebe72c47fa5742e");
let Browsers = require("640642ee28215a80");
let vendor = require("6f59a380fb0bf8b0");
class Transition {
    constructor(prefixes){
        this.props = [
            "transition",
            "transition-property"
        ];
        this.prefixes = prefixes;
    }
    /**
   * Process transition and add prefixes for all necessary properties
   */ add(decl, result) {
        let prefix, prop;
        let add = this.prefixes.add[decl.prop];
        let vendorPrefixes = this.ruleVendorPrefixes(decl);
        let declPrefixes = vendorPrefixes || add && add.prefixes || [];
        let params = this.parse(decl.value);
        let names = params.map((i)=>this.findProp(i));
        let added = [];
        if (names.some((i)=>i[0] === "-")) return;
        for (let param of params){
            prop = this.findProp(param);
            if (prop[0] === "-") continue;
            let prefixer = this.prefixes.add[prop];
            if (!prefixer || !prefixer.prefixes) continue;
            for (prefix of prefixer.prefixes){
                if (vendorPrefixes && !vendorPrefixes.some((p)=>prefix.includes(p))) continue;
                let prefixed = this.prefixes.prefixed(prop, prefix);
                if (prefixed !== "-ms-transform" && !names.includes(prefixed)) {
                    if (!this.disabled(prop, prefix)) added.push(this.clone(prop, prefixed, param));
                }
            }
        }
        params = params.concat(added);
        let value = this.stringify(params);
        let webkitClean = this.stringify(this.cleanFromUnprefixed(params, "-webkit-"));
        if (declPrefixes.includes("-webkit-")) this.cloneBefore(decl, `-webkit-${decl.prop}`, webkitClean);
        this.cloneBefore(decl, decl.prop, webkitClean);
        if (declPrefixes.includes("-o-")) {
            let operaClean = this.stringify(this.cleanFromUnprefixed(params, "-o-"));
            this.cloneBefore(decl, `-o-${decl.prop}`, operaClean);
        }
        for (prefix of declPrefixes)if (prefix !== "-webkit-" && prefix !== "-o-") {
            let prefixValue = this.stringify(this.cleanOtherPrefixes(params, prefix));
            this.cloneBefore(decl, prefix + decl.prop, prefixValue);
        }
        if (value !== decl.value && !this.already(decl, decl.prop, value)) {
            this.checkForWarning(result, decl);
            decl.cloneBefore();
            decl.value = value;
        }
    }
    /**
   * Does we already have this declaration
   */ already(decl, prop, value) {
        return decl.parent.some((i)=>i.prop === prop && i.value === value);
    }
    /**
   * Show transition-property warning
   */ checkForWarning(result, decl) {
        if (decl.prop !== "transition-property") return;
        let isPrefixed = false;
        let hasAssociatedProp = false;
        decl.parent.each((i)=>{
            if (i.type !== "decl") return undefined;
            if (i.prop.indexOf("transition-") !== 0) return undefined;
            let values = list.comma(i.value);
            // check if current Rule's transition-property comma separated value list needs prefixes
            if (i.prop === "transition-property") {
                values.forEach((value)=>{
                    let lookup = this.prefixes.add[value];
                    if (lookup && lookup.prefixes && lookup.prefixes.length > 0) isPrefixed = true;
                });
                return undefined;
            }
            // check if another transition-* prop in current Rule has comma separated value list
            hasAssociatedProp = hasAssociatedProp || values.length > 1;
            return false;
        });
        if (isPrefixed && hasAssociatedProp) decl.warn(result, "Replace transition-property to transition, because Autoprefixer could not support any cases of transition-property and other transition-*");
    }
    /**
   * Remove all non-webkit prefixes and unprefixed params if we have prefixed
   */ cleanFromUnprefixed(params, prefix) {
        let remove = params.map((i)=>this.findProp(i)).filter((i)=>i.slice(0, prefix.length) === prefix).map((i)=>this.prefixes.unprefixed(i));
        let result = [];
        for (let param of params){
            let prop = this.findProp(param);
            let p = vendor.prefix(prop);
            if (!remove.includes(prop) && (p === prefix || p === "")) result.push(param);
        }
        return result;
    }
    cleanOtherPrefixes(params, prefix) {
        return params.filter((param)=>{
            let current = vendor.prefix(this.findProp(param));
            return current === "" || current === prefix;
        });
    }
    /**
   * Return new param array with different name
   */ clone(origin, name, param) {
        let result = [];
        let changed = false;
        for (let i of param)if (!changed && i.type === "word" && i.value === origin) {
            result.push({
                type: "word",
                value: name
            });
            changed = true;
        } else result.push(i);
        return result;
    }
    /**
   * Add declaration if it is not exist
   */ cloneBefore(decl, prop, value) {
        if (!this.already(decl, prop, value)) decl.cloneBefore({
            prop,
            value
        });
    }
    /**
   * Check property for disabled by option
   */ disabled(prop, prefix) {
        let other = [
            "order",
            "justify-content",
            "align-self",
            "align-content"
        ];
        if (prop.includes("flex") || other.includes(prop)) {
            if (this.prefixes.options.flexbox === false) return true;
            if (this.prefixes.options.flexbox === "no-2009") return prefix.includes("2009");
        }
        return undefined;
    }
    /**
   * Find or create separator
   */ div(params) {
        for (let param of params)for (let node of param){
            if (node.type === "div" && node.value === ",") return node;
        }
        return {
            after: " ",
            type: "div",
            value: ","
        };
    }
    /**
   * Find property name
   */ findProp(param) {
        let prop = param[0].value;
        if (/^\d/.test(prop)) for (let [i, token] of param.entries()){
            if (i !== 0 && token.type === "word") return token.value;
        }
        return prop;
    }
    /**
   * Parse properties list to array
   */ parse(value) {
        let ast = parser(value);
        let result = [];
        let param = [];
        for (let node of ast.nodes){
            param.push(node);
            if (node.type === "div" && node.value === ",") {
                result.push(param);
                param = [];
            }
        }
        result.push(param);
        return result.filter((i)=>i.length > 0);
    }
    /**
   * Process transition and remove all unnecessary properties
   */ remove(decl) {
        let params = this.parse(decl.value);
        params = params.filter((i)=>{
            let prop = this.prefixes.remove[this.findProp(i)];
            return !prop || !prop.remove;
        });
        let value = this.stringify(params);
        if (decl.value === value) return;
        if (params.length === 0) {
            decl.remove();
            return;
        }
        let double = decl.parent.some((i)=>{
            return i.prop === decl.prop && i.value === value;
        });
        let smaller = decl.parent.some((i)=>{
            return i !== decl && i.prop === decl.prop && i.value.length > value.length;
        });
        if (double || smaller) {
            decl.remove();
            return;
        }
        decl.value = value;
    }
    /**
   * Check if transition prop is inside vendor specific rule
   */ ruleVendorPrefixes(decl) {
        let { parent } = decl;
        if (parent.type !== "rule") return false;
        else if (!parent.selector.includes(":-")) return false;
        let selectors = Browsers.prefixes().filter((s)=>parent.selector.includes(":" + s));
        return selectors.length > 0 ? selectors : false;
    }
    /**
   * Return properties string from array
   */ stringify(params) {
        if (params.length === 0) return "";
        let nodes = [];
        for (let param of params){
            if (param[param.length - 1].type !== "div") param.push(this.div(params));
            nodes = nodes.concat(param);
        }
        if (nodes[0].type === "div") nodes = nodes.slice(1);
        if (nodes[nodes.length - 1].type === "div") nodes = nodes.slice(0, -1);
        return parser.stringify({
            nodes
        });
    }
}
module.exports = Transition;

},{"8b36db8dc3d1c90f":"gauyy","2ebe72c47fa5742e":"blMr1","640642ee28215a80":"dGs5H","6f59a380fb0bf8b0":"926uR"}],"blMr1":[function(require,module,exports) {
var parse = require("d2e3a4bb74d92b09");
var walk = require("4328bd2e3723e3e");
var stringify = require("861e318110eda059");
function ValueParser(value) {
    if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
    }
    return new ValueParser(value);
}
ValueParser.prototype.toString = function() {
    return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};
ValueParser.prototype.walk = function(cb, bubble) {
    walk(this.nodes, cb, bubble);
    return this;
};
ValueParser.unit = require("f3475aed26482d6");
ValueParser.walk = walk;
ValueParser.stringify = stringify;
module.exports = ValueParser;

},{"d2e3a4bb74d92b09":"8c0jO","4328bd2e3723e3e":"5phvw","861e318110eda059":"hal54","f3475aed26482d6":"lebww"}],"8c0jO":[function(require,module,exports) {
var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;
module.exports = function(input) {
    var tokens = [];
    var value = input;
    var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
    var pos = 0;
    var code = value.charCodeAt(pos);
    var max = value.length;
    var stack = [
        {
            nodes: tokens
        }
    ];
    var balanced = 0;
    var parent;
    var name = "";
    var before = "";
    var after = "";
    while(pos < max){
        // Whitespaces
        if (code <= 32) {
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32);
            token = value.slice(pos, next);
            prev = tokens[tokens.length - 1];
            if (code === closeParentheses && balanced) after = token;
            else if (prev && prev.type === "div") {
                prev.after = token;
                prev.sourceEndIndex += token.length;
            } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) before = token;
            else tokens.push({
                type: "space",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token
            });
            pos = next;
        // Quotes
        } else if (code === singleQuote || code === doubleQuote) {
            next = pos;
            quote = code === singleQuote ? "'" : '"';
            token = {
                type: "string",
                sourceIndex: pos,
                quote: quote
            };
            do {
                escape = false;
                next = value.indexOf(quote, next + 1);
                if (~next) {
                    escapePos = next;
                    while(value.charCodeAt(escapePos - 1) === backslash){
                        escapePos -= 1;
                        escape = !escape;
                    }
                } else {
                    value += quote;
                    next = value.length - 1;
                    token.unclosed = true;
                }
            }while (escape);
            token.value = value.slice(pos + 1, next);
            token.sourceEndIndex = token.unclosed ? next : next + 1;
            tokens.push(token);
            pos = next + 1;
            code = value.charCodeAt(pos);
        // Comments
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
            next = value.indexOf("*/", pos);
            token = {
                type: "comment",
                sourceIndex: pos,
                sourceEndIndex: next + 2
            };
            if (next === -1) {
                token.unclosed = true;
                next = value.length;
                token.sourceEndIndex = next;
            }
            token.value = value.slice(pos + 2, next);
            tokens.push(token);
            pos = next + 2;
            code = value.charCodeAt(pos);
        // Operation within calc
        } else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
            token = value[pos];
            tokens.push({
                type: "word",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token
            });
            pos += 1;
            code = value.charCodeAt(pos);
        // Dividers
        } else if (code === slash || code === comma || code === colon) {
            token = value[pos];
            tokens.push({
                type: "div",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token,
                before: before,
                after: ""
            });
            before = "";
            pos += 1;
            code = value.charCodeAt(pos);
        // Open parentheses
        } else if (openParentheses === code) {
            // Whitespaces after open parentheses
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32);
            parenthesesOpenPos = pos;
            token = {
                type: "function",
                sourceIndex: pos - name.length,
                value: name,
                before: value.slice(parenthesesOpenPos + 1, next)
            };
            pos = next;
            if (name === "url" && code !== singleQuote && code !== doubleQuote) {
                next -= 1;
                do {
                    escape = false;
                    next = value.indexOf(")", next + 1);
                    if (~next) {
                        escapePos = next;
                        while(value.charCodeAt(escapePos - 1) === backslash){
                            escapePos -= 1;
                            escape = !escape;
                        }
                    } else {
                        value += ")";
                        next = value.length - 1;
                        token.unclosed = true;
                    }
                }while (escape);
                // Whitespaces before closed
                whitespacePos = next;
                do {
                    whitespacePos -= 1;
                    code = value.charCodeAt(whitespacePos);
                }while (code <= 32);
                if (parenthesesOpenPos < whitespacePos) {
                    if (pos !== whitespacePos + 1) token.nodes = [
                        {
                            type: "word",
                            sourceIndex: pos,
                            sourceEndIndex: whitespacePos + 1,
                            value: value.slice(pos, whitespacePos + 1)
                        }
                    ];
                    else token.nodes = [];
                    if (token.unclosed && whitespacePos + 1 !== next) {
                        token.after = "";
                        token.nodes.push({
                            type: "space",
                            sourceIndex: whitespacePos + 1,
                            sourceEndIndex: next,
                            value: value.slice(whitespacePos + 1, next)
                        });
                    } else {
                        token.after = value.slice(whitespacePos + 1, next);
                        token.sourceEndIndex = next;
                    }
                } else {
                    token.after = "";
                    token.nodes = [];
                }
                pos = next + 1;
                token.sourceEndIndex = token.unclosed ? next : pos;
                code = value.charCodeAt(pos);
                tokens.push(token);
            } else {
                balanced += 1;
                token.after = "";
                token.sourceEndIndex = pos + 1;
                tokens.push(token);
                stack.push(token);
                tokens = token.nodes = [];
                parent = token;
            }
            name = "";
        // Close parentheses
        } else if (closeParentheses === code && balanced) {
            pos += 1;
            code = value.charCodeAt(pos);
            parent.after = after;
            parent.sourceEndIndex += after.length;
            after = "";
            balanced -= 1;
            stack[stack.length - 1].sourceEndIndex = pos;
            stack.pop();
            parent = stack[balanced];
            tokens = parent.nodes;
        // Words
        } else {
            next = pos;
            do {
                if (code === backslash) next += 1;
                next += 1;
                code = value.charCodeAt(next);
            }while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced));
            token = value.slice(pos, next);
            if (openParentheses === code) name = token;
            else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) tokens.push({
                type: "unicode-range",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token
            });
            else tokens.push({
                type: "word",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token
            });
            pos = next;
        }
    }
    for(pos = stack.length - 1; pos; pos -= 1){
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
    }
    return stack[0].nodes;
};

},{}],"5phvw":[function(require,module,exports) {
module.exports = function walk(nodes, cb, bubble) {
    var i, max, node, result;
    for(i = 0, max = nodes.length; i < max; i += 1){
        node = nodes[i];
        if (!bubble) result = cb(node, i, nodes);
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) walk(node.nodes, cb, bubble);
        if (bubble) cb(node, i, nodes);
    }
};

},{}],"hal54":[function(require,module,exports) {
function stringifyNode(node, custom) {
    var type = node.type;
    var value = node.value;
    var buf;
    var customResult;
    if (custom && (customResult = custom(node)) !== undefined) return customResult;
    else if (type === "word" || type === "space") return value;
    else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
    } else if (type === "comment") return "/*" + value + (node.unclosed ? "" : "*/");
    else if (type === "div") return (node.before || "") + value + (node.after || "");
    else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") return buf;
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
    }
    return value;
}
function stringify(nodes, custom) {
    var result, i;
    if (Array.isArray(nodes)) {
        result = "";
        for(i = nodes.length - 1; ~i; i -= 1)result = stringifyNode(nodes[i], custom) + result;
        return result;
    }
    return stringifyNode(nodes, custom);
}
module.exports = stringify;

},{}],"lebww":[function(require,module,exports) {
var minus = "-".charCodeAt(0);
var plus = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);
// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
    var code = value.charCodeAt(0);
    var nextCode;
    if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) return true;
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) return true;
        return false;
    }
    if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) return true;
        return false;
    }
    if (code >= 48 && code <= 57) return true;
    return false;
}
// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
module.exports = function(value) {
    var pos = 0;
    var length = value.length;
    var code;
    var nextCode;
    var nextNextCode;
    if (length === 0 || !likeNumber(value)) return false;
    code = value.charCodeAt(pos);
    if (code === plus || code === minus) pos++;
    while(pos < length){
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) break;
        pos += 1;
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) break;
            pos += 1;
        }
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    nextNextCode = value.charCodeAt(pos + 2);
    if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) break;
            pos += 1;
        }
    }
    return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
    };
};

},{}],"iYSwf":[function(require,module,exports) {
let parser = require("bec51482b51f86c3");
let Value = require("bff53d7bb385b6bf");
let insertAreas = require("3b438bd3252e3e5e").insertAreas;
const OLD_LINEAR = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i;
const OLD_RADIAL = /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i;
const IGNORE_NEXT = /(!\s*)?autoprefixer:\s*ignore\s+next/i;
const GRID_REGEX = /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i;
const SIZES = [
    "width",
    "height",
    "min-width",
    "max-width",
    "min-height",
    "max-height",
    "inline-size",
    "min-inline-size",
    "max-inline-size",
    "block-size",
    "min-block-size",
    "max-block-size"
];
function hasGridTemplate(decl) {
    return decl.parent.some((i)=>i.prop === "grid-template" || i.prop === "grid-template-areas");
}
function hasRowsAndColumns(decl) {
    let hasRows = decl.parent.some((i)=>i.prop === "grid-template-rows");
    let hasColumns = decl.parent.some((i)=>i.prop === "grid-template-columns");
    return hasRows && hasColumns;
}
class Processor {
    constructor(prefixes){
        this.prefixes = prefixes;
    }
    /**
   * Add necessary prefixes
   */ add(css, result) {
        // At-rules
        let resolution = this.prefixes.add["@resolution"];
        let keyframes = this.prefixes.add["@keyframes"];
        let viewport = this.prefixes.add["@viewport"];
        let supports = this.prefixes.add["@supports"];
        css.walkAtRules((rule)=>{
            if (rule.name === "keyframes") {
                if (!this.disabled(rule, result)) return keyframes && keyframes.process(rule);
            } else if (rule.name === "viewport") {
                if (!this.disabled(rule, result)) return viewport && viewport.process(rule);
            } else if (rule.name === "supports") {
                if (this.prefixes.options.supports !== false && !this.disabled(rule, result)) return supports.process(rule);
            } else if (rule.name === "media" && rule.params.includes("-resolution")) {
                if (!this.disabled(rule, result)) return resolution && resolution.process(rule);
            }
            return undefined;
        });
        // Selectors
        css.walkRules((rule)=>{
            if (this.disabled(rule, result)) return undefined;
            return this.prefixes.add.selectors.map((selector)=>{
                return selector.process(rule, result);
            });
        });
        function insideGrid(decl) {
            return decl.parent.nodes.some((node)=>{
                if (node.type !== "decl") return false;
                let displayGrid = node.prop === "display" && /(inline-)?grid/.test(node.value);
                let gridTemplate = node.prop.startsWith("grid-template");
                let gridGap = /^grid-([A-z]+-)?gap/.test(node.prop);
                return displayGrid || gridTemplate || gridGap;
            });
        }
        let gridPrefixes = this.gridStatus(css, result) && this.prefixes.add["grid-area"] && this.prefixes.add["grid-area"].prefixes;
        css.walkDecls((decl)=>{
            if (this.disabledDecl(decl, result)) return undefined;
            let parent = decl.parent;
            let prop = decl.prop;
            let value = decl.value;
            if (prop === "color-adjust") {
                if (parent.every((i)=>i.prop !== "print-color-adjust")) result.warn("Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.", {
                    node: decl
                });
            } else if (prop === "grid-row-span") {
                result.warn("grid-row-span is not part of final Grid Layout. Use grid-row.", {
                    node: decl
                });
                return undefined;
            } else if (prop === "grid-column-span") {
                result.warn("grid-column-span is not part of final Grid Layout. Use grid-column.", {
                    node: decl
                });
                return undefined;
            } else if (prop === "display" && value === "box") {
                result.warn("You should write display: flex by final spec instead of display: box", {
                    node: decl
                });
                return undefined;
            } else if (prop === "text-emphasis-position") {
                if (value === "under" || value === "over") result.warn("You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.", {
                    node: decl
                });
            } else if (prop === "text-decoration-skip" && value === "ink") result.warn("Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed", {
                node: decl
            });
            else {
                if (gridPrefixes && this.gridStatus(decl, result)) {
                    if (decl.value === "subgrid") result.warn("IE does not support subgrid", {
                        node: decl
                    });
                    if (/^(align|justify|place)-items$/.test(prop) && insideGrid(decl)) {
                        let fixed = prop.replace("-items", "-self");
                        result.warn(`IE does not support ${prop} on grid containers. ` + `Try using ${fixed} on child elements instead: ` + `${decl.parent.selector} > * { ${fixed}: ${decl.value} }`, {
                            node: decl
                        });
                    } else if (/^(align|justify|place)-content$/.test(prop) && insideGrid(decl)) result.warn(`IE does not support ${decl.prop} on grid containers`, {
                        node: decl
                    });
                    else if (prop === "display" && decl.value === "contents") {
                        result.warn("Please do not use display: contents; if you have grid setting enabled", {
                            node: decl
                        });
                        return undefined;
                    } else if (decl.prop === "grid-gap") {
                        let status = this.gridStatus(decl, result);
                        if (status === "autoplace" && !hasRowsAndColumns(decl) && !hasGridTemplate(decl)) result.warn("grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid", {
                            node: decl
                        });
                        else if ((status === true || status === "no-autoplace") && !hasGridTemplate(decl)) result.warn("grid-gap only works if grid-template(-areas) is being used", {
                            node: decl
                        });
                    } else if (prop === "grid-auto-columns") {
                        result.warn("grid-auto-columns is not supported by IE", {
                            node: decl
                        });
                        return undefined;
                    } else if (prop === "grid-auto-rows") {
                        result.warn("grid-auto-rows is not supported by IE", {
                            node: decl
                        });
                        return undefined;
                    } else if (prop === "grid-auto-flow") {
                        let hasRows = parent.some((i)=>i.prop === "grid-template-rows");
                        let hasCols = parent.some((i)=>i.prop === "grid-template-columns");
                        if (hasGridTemplate(decl)) result.warn("grid-auto-flow is not supported by IE", {
                            node: decl
                        });
                        else if (value.includes("dense")) result.warn("grid-auto-flow: dense is not supported by IE", {
                            node: decl
                        });
                        else if (!hasRows && !hasCols) result.warn("grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule", {
                            node: decl
                        });
                        return undefined;
                    } else if (value.includes("auto-fit")) {
                        result.warn("auto-fit value is not supported by IE", {
                            node: decl,
                            word: "auto-fit"
                        });
                        return undefined;
                    } else if (value.includes("auto-fill")) {
                        result.warn("auto-fill value is not supported by IE", {
                            node: decl,
                            word: "auto-fill"
                        });
                        return undefined;
                    } else if (prop.startsWith("grid-template") && value.includes("[")) result.warn("Autoprefixer currently does not support line names. Try using grid-template-areas instead.", {
                        node: decl,
                        word: "["
                    });
                }
                if (value.includes("radial-gradient")) {
                    if (OLD_RADIAL.test(decl.value)) result.warn("Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.", {
                        node: decl
                    });
                    else {
                        let ast = parser(value);
                        for (let i of ast.nodes)if (i.type === "function" && i.value === "radial-gradient") {
                            for (let word of i.nodes)if (word.type === "word") {
                                if (word.value === "cover") result.warn("Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.", {
                                    node: decl
                                });
                                else if (word.value === "contain") result.warn("Gradient has outdated direction syntax. Replace `contain` to `closest-side`.", {
                                    node: decl
                                });
                            }
                        }
                    }
                }
                if (value.includes("linear-gradient")) {
                    if (OLD_LINEAR.test(value)) result.warn("Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.", {
                        node: decl
                    });
                }
            }
            if (SIZES.includes(decl.prop)) {
                if (!decl.value.includes("-fill-available")) {
                    if (decl.value.includes("fill-available")) result.warn("Replace fill-available to stretch, because spec had been changed", {
                        node: decl
                    });
                    else if (decl.value.includes("fill")) {
                        let ast = parser(value);
                        if (ast.nodes.some((i)=>i.type === "word" && i.value === "fill")) result.warn("Replace fill to stretch, because spec had been changed", {
                            node: decl
                        });
                    }
                }
            }
            let prefixer;
            if (decl.prop === "transition" || decl.prop === "transition-property") // Transition
            return this.prefixes.transition.add(decl, result);
            else if (decl.prop === "align-self") {
                // align-self flexbox or grid
                let display = this.displayType(decl);
                if (display !== "grid" && this.prefixes.options.flexbox !== false) {
                    prefixer = this.prefixes.add["align-self"];
                    if (prefixer && prefixer.prefixes) prefixer.process(decl);
                }
                if (this.gridStatus(decl, result) !== false) {
                    prefixer = this.prefixes.add["grid-row-align"];
                    if (prefixer && prefixer.prefixes) return prefixer.process(decl, result);
                }
            } else if (decl.prop === "justify-self") // justify-self flexbox or grid
            {
                if (this.gridStatus(decl, result) !== false) {
                    prefixer = this.prefixes.add["grid-column-align"];
                    if (prefixer && prefixer.prefixes) return prefixer.process(decl, result);
                }
            } else if (decl.prop === "place-self") {
                prefixer = this.prefixes.add["place-self"];
                if (prefixer && prefixer.prefixes && this.gridStatus(decl, result) !== false) return prefixer.process(decl, result);
            } else {
                // Properties
                prefixer = this.prefixes.add[decl.prop];
                if (prefixer && prefixer.prefixes) return prefixer.process(decl, result);
            }
            return undefined;
        });
        // Insert grid-area prefixes. We need to be able to store the different
        // rules as a data and hack API is not enough for this
        if (this.gridStatus(css, result)) insertAreas(css, this.disabled);
        // Values
        return css.walkDecls((decl)=>{
            if (this.disabledValue(decl, result)) return;
            let unprefixed = this.prefixes.unprefixed(decl.prop);
            let list = this.prefixes.values("add", unprefixed);
            if (Array.isArray(list)) {
                for (let value of list)if (value.process) value.process(decl, result);
            }
            Value.save(this.prefixes, decl);
        });
    }
    /**
   * Check for control comment and global options
   */ disabled(node, result) {
        if (!node) return false;
        if (node._autoprefixerDisabled !== undefined) return node._autoprefixerDisabled;
        if (node.parent) {
            let p = node.prev();
            if (p && p.type === "comment" && IGNORE_NEXT.test(p.text)) {
                node._autoprefixerDisabled = true;
                node._autoprefixerSelfDisabled = true;
                return true;
            }
        }
        let value = null;
        if (node.nodes) {
            let status;
            node.each((i)=>{
                if (i.type !== "comment") return;
                if (/(!\s*)?autoprefixer:\s*(off|on)/i.test(i.text)) {
                    if (typeof status !== "undefined") result.warn("Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.", {
                        node: i
                    });
                    else status = /on/i.test(i.text);
                }
            });
            if (status !== undefined) value = !status;
        }
        if (!node.nodes || value === null) {
            if (node.parent) {
                let isParentDisabled = this.disabled(node.parent, result);
                if (node.parent._autoprefixerSelfDisabled === true) value = false;
                else value = isParentDisabled;
            } else value = false;
        }
        node._autoprefixerDisabled = value;
        return value;
    }
    /**
   * Check for grid/flexbox options.
   */ disabledDecl(node, result) {
        if (node.type === "decl" && this.gridStatus(node, result) === false) {
            if (node.prop.includes("grid") || node.prop === "justify-items") return true;
        }
        if (node.type === "decl" && this.prefixes.options.flexbox === false) {
            let other = [
                "order",
                "justify-content",
                "align-items",
                "align-content"
            ];
            if (node.prop.includes("flex") || other.includes(node.prop)) return true;
        }
        return this.disabled(node, result);
    }
    /**
   * Check for grid/flexbox options.
   */ disabledValue(node, result) {
        if (this.gridStatus(node, result) === false && node.type === "decl") {
            if (node.prop === "display" && node.value.includes("grid")) return true;
        }
        if (this.prefixes.options.flexbox === false && node.type === "decl") {
            if (node.prop === "display" && node.value.includes("flex")) return true;
        }
        if (node.type === "decl" && node.prop === "content") return true;
        return this.disabled(node, result);
    }
    /**
   * Is it flebox or grid rule
   */ displayType(decl) {
        for (let i of decl.parent.nodes){
            if (i.prop !== "display") continue;
            if (i.value.includes("flex")) return "flex";
            if (i.value.includes("grid")) return "grid";
        }
        return false;
    }
    /**
   * Set grid option via control comment
   */ gridStatus(node, result) {
        if (!node) return false;
        if (node._autoprefixerGridStatus !== undefined) return node._autoprefixerGridStatus;
        let value = null;
        if (node.nodes) {
            let status;
            node.each((i)=>{
                if (i.type !== "comment") return;
                if (GRID_REGEX.test(i.text)) {
                    let hasAutoplace = /:\s*autoplace/i.test(i.text);
                    let noAutoplace = /no-autoplace/i.test(i.text);
                    if (typeof status !== "undefined") result.warn("Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.", {
                        node: i
                    });
                    else if (hasAutoplace) status = "autoplace";
                    else if (noAutoplace) status = true;
                    else status = /on/i.test(i.text);
                }
            });
            if (status !== undefined) value = status;
        }
        if (node.type === "atrule" && node.name === "supports") {
            let params = node.params;
            if (params.includes("grid") && params.includes("auto")) value = false;
        }
        if (!node.nodes || value === null) {
            if (node.parent) {
                let isParentGrid = this.gridStatus(node.parent, result);
                if (node.parent._autoprefixerSelfDisabled === true) value = false;
                else value = isParentGrid;
            } else if (typeof this.prefixes.options.grid !== "undefined") value = this.prefixes.options.grid;
            else value = false;
        }
        node._autoprefixerGridStatus = value;
        return value;
    }
    /**
   * Normalize spaces in cascade declaration group
   */ reduceSpaces(decl) {
        let stop = false;
        this.prefixes.group(decl).up(()=>{
            stop = true;
            return true;
        });
        if (stop) return;
        let parts = decl.raw("before").split("\n");
        let prevMin = parts[parts.length - 1].length;
        let diff = false;
        this.prefixes.group(decl).down((other)=>{
            parts = other.raw("before").split("\n");
            let last = parts.length - 1;
            if (parts[last].length > prevMin) {
                if (diff === false) diff = parts[last].length - prevMin;
                parts[last] = parts[last].slice(0, -diff);
                other.raws.before = parts.join("\n");
            }
        });
    }
    /**
   * Remove unnecessary pefixes
   */ remove(css, result) {
        // At-rules
        let resolution = this.prefixes.remove["@resolution"];
        css.walkAtRules((rule, i)=>{
            if (this.prefixes.remove[`@${rule.name}`]) {
                if (!this.disabled(rule, result)) rule.parent.removeChild(i);
            } else if (rule.name === "media" && rule.params.includes("-resolution") && resolution) resolution.clean(rule);
        });
        // Selectors
        css.walkRules((rule, i)=>{
            if (this.disabled(rule, result)) return;
            for (let checker of this.prefixes.remove.selectors)if (checker.check(rule)) {
                rule.parent.removeChild(i);
                return;
            }
        });
        return css.walkDecls((decl, i)=>{
            if (this.disabled(decl, result)) return;
            let rule = decl.parent;
            let unprefixed = this.prefixes.unprefixed(decl.prop);
            // Transition
            if (decl.prop === "transition" || decl.prop === "transition-property") this.prefixes.transition.remove(decl);
            // Properties
            if (this.prefixes.remove[decl.prop] && this.prefixes.remove[decl.prop].remove) {
                let notHack = this.prefixes.group(decl).down((other)=>{
                    return this.prefixes.normalize(other.prop) === unprefixed;
                });
                if (unprefixed === "flex-flow") notHack = true;
                if (decl.prop === "-webkit-box-orient") {
                    let hacks = {
                        "flex-direction": true,
                        "flex-flow": true
                    };
                    if (!decl.parent.some((j)=>hacks[j.prop])) return;
                }
                if (notHack && !this.withHackValue(decl)) {
                    if (decl.raw("before").includes("\n")) this.reduceSpaces(decl);
                    rule.removeChild(i);
                    return;
                }
            }
            // Values
            for (let checker of this.prefixes.values("remove", unprefixed)){
                if (!checker.check) continue;
                if (!checker.check(decl.value)) continue;
                unprefixed = checker.unprefixed;
                let notHack = this.prefixes.group(decl).down((other)=>{
                    return other.value.includes(unprefixed);
                });
                if (notHack) {
                    rule.removeChild(i);
                    return;
                }
            }
        });
    }
    /**
   * Some rare old values, which is not in standard
   */ withHackValue(decl) {
        return decl.prop === "-webkit-background-clip" && decl.value === "text" || // Do not remove -webkit-box-orient when -webkit-line-clamp is present.
        // https://github.com/postcss/autoprefixer/issues/1510
        decl.prop === "-webkit-box-orient" && decl.parent.some((d)=>d.prop === "-webkit-line-clamp");
    }
}
module.exports = Processor;

},{"bec51482b51f86c3":"blMr1","bff53d7bb385b6bf":"i2bKe","3b438bd3252e3e5e":"b4Ecd"}],"i2bKe":[function(require,module,exports) {
let Prefixer = require("2cb4670115f41c9f");
let OldValue = require("8eb1a399f8edd9e7");
let vendor = require("39bd7b8317aa31b0");
let utils = require("83cead24abc4c3cd");
class Value extends Prefixer {
    /**
   * Clone decl for each prefixed values
   */ static save(prefixes, decl) {
        let prop = decl.prop;
        let result = [];
        for(let prefix in decl._autoprefixerValues){
            let value = decl._autoprefixerValues[prefix];
            if (value === decl.value) continue;
            let item;
            let propPrefix = vendor.prefix(prop);
            if (propPrefix === "-pie-") continue;
            if (propPrefix === prefix) {
                item = decl.value = value;
                result.push(item);
                continue;
            }
            let prefixed = prefixes.prefixed(prop, prefix);
            let rule = decl.parent;
            if (!rule.every((i)=>i.prop !== prefixed)) {
                result.push(item);
                continue;
            }
            let trimmed = value.replace(/\s+/, " ");
            let already = rule.some((i)=>i.prop === decl.prop && i.value.replace(/\s+/, " ") === trimmed);
            if (already) {
                result.push(item);
                continue;
            }
            let cloned = this.clone(decl, {
                value
            });
            item = decl.parent.insertBefore(decl, cloned);
            result.push(item);
        }
        return result;
    }
    /**
   * Save values with next prefixed token
   */ add(decl, prefix) {
        if (!decl._autoprefixerValues) decl._autoprefixerValues = {};
        let value = decl._autoprefixerValues[prefix] || this.value(decl);
        let before;
        do {
            before = value;
            value = this.replace(value, prefix);
            if (value === false) return;
        }while (value !== before);
        decl._autoprefixerValues[prefix] = value;
    }
    /**
   * Is declaration need to be prefixed
   */ check(decl) {
        let value = decl.value;
        if (!value.includes(this.name)) return false;
        return !!value.match(this.regexp());
    }
    /**
   * Return function to fast find prefixed value
   */ old(prefix) {
        return new OldValue(this.name, prefix + this.name);
    }
    /**
   * Lazy regexp loading
   */ regexp() {
        return this.regexpCache || (this.regexpCache = utils.regexp(this.name));
    }
    /**
   * Add prefix to values in string
   */ replace(string, prefix) {
        return string.replace(this.regexp(), `$1${prefix}$2`);
    }
    /**
   * Get value with comments if it was not changed
   */ value(decl) {
        if (decl.raws.value && decl.raws.value.value === decl.value) return decl.raws.value.raw;
        else return decl.value;
    }
}
module.exports = Value;

},{"2cb4670115f41c9f":"6bcfc","8eb1a399f8edd9e7":"9k0Aa","39bd7b8317aa31b0":"926uR","83cead24abc4c3cd":"j2sRV"}],"9k0Aa":[function(require,module,exports) {
let utils = require("f860da7b7c47e812");
class OldValue {
    constructor(unprefixed, prefixed, string, regexp){
        this.unprefixed = unprefixed;
        this.prefixed = prefixed;
        this.string = string || prefixed;
        this.regexp = regexp || utils.regexp(prefixed);
    }
    /**
   * Check, that value contain old value
   */ check(value) {
        if (value.includes(this.string)) return !!value.match(this.regexp);
        return false;
    }
}
module.exports = OldValue;

},{"f860da7b7c47e812":"j2sRV"}],"b4Ecd":[function(require,module,exports) {
let parser = require("a891bc712a0603e1");
let list = require("c95c3c13e4db8500").list;
let uniq = require("9f22ee0a1315be58").uniq;
let escapeRegexp = require("9f22ee0a1315be58").escapeRegexp;
let splitSelector = require("9f22ee0a1315be58").splitSelector;
function convert(value) {
    if (value && value.length === 2 && value[0] === "span" && parseInt(value[1], 10) > 0) return [
        false,
        parseInt(value[1], 10)
    ];
    if (value && value.length === 1 && parseInt(value[0], 10) > 0) return [
        parseInt(value[0], 10),
        false
    ];
    return [
        false,
        false
    ];
}
exports.translate = translate;
function translate(values, startIndex, endIndex) {
    let startValue = values[startIndex];
    let endValue = values[endIndex];
    if (!startValue) return [
        false,
        false
    ];
    let [start, spanStart] = convert(startValue);
    let [end, spanEnd] = convert(endValue);
    if (start && !endValue) return [
        start,
        false
    ];
    if (spanStart && end) return [
        end - spanStart,
        spanStart
    ];
    if (start && spanEnd) return [
        start,
        spanEnd
    ];
    if (start && end) return [
        start,
        end - start
    ];
    return [
        false,
        false
    ];
}
exports.parse = parse;
function parse(decl) {
    let node = parser(decl.value);
    let values = [];
    let current = 0;
    values[current] = [];
    for (let i of node.nodes){
        if (i.type === "div") {
            current += 1;
            values[current] = [];
        } else if (i.type === "word") values[current].push(i.value);
    }
    return values;
}
exports.insertDecl = insertDecl;
function insertDecl(decl, prop, value) {
    if (value && !decl.parent.some((i)=>i.prop === `-ms-${prop}`)) decl.cloneBefore({
        prop: `-ms-${prop}`,
        value: value.toString()
    });
}
// Track transforms
exports.prefixTrackProp = prefixTrackProp;
function prefixTrackProp({ prefix, prop }) {
    return prefix + prop.replace("template-", "");
}
function transformRepeat({ nodes }, { gap }) {
    let { count, size } = nodes.reduce((result, node)=>{
        if (node.type === "div" && node.value === ",") result.key = "size";
        else result[result.key].push(parser.stringify(node));
        return result;
    }, {
        count: [],
        key: "count",
        size: []
    });
    // insert gap values
    if (gap) {
        size = size.filter((i)=>i.trim());
        let val = [];
        for(let i = 1; i <= count; i++)size.forEach((item, index)=>{
            if (index > 0 || i > 1) val.push(gap);
            val.push(item);
        });
        return val.join(" ");
    }
    return `(${size.join("")})[${count.join("")}]`;
}
exports.prefixTrackValue = prefixTrackValue;
function prefixTrackValue({ gap, value }) {
    let result = parser(value).nodes.reduce((nodes, node)=>{
        if (node.type === "function" && node.value === "repeat") return nodes.concat({
            type: "word",
            value: transformRepeat(node, {
                gap
            })
        });
        if (gap && node.type === "space") return nodes.concat({
            type: "space",
            value: " "
        }, {
            type: "word",
            value: gap
        }, node);
        return nodes.concat(node);
    }, []);
    return parser.stringify(result);
}
// Parse grid-template-areas
let DOTS = /^\.+$/;
function track(start, end) {
    return {
        end,
        span: end - start,
        start
    };
}
function getColumns(line) {
    return line.trim().split(/\s+/g);
}
exports.parseGridAreas = parseGridAreas;
function parseGridAreas({ gap, rows }) {
    return rows.reduce((areas, line, rowIndex)=>{
        if (gap.row) rowIndex *= 2;
        if (line.trim() === "") return areas;
        getColumns(line).forEach((area, columnIndex)=>{
            if (DOTS.test(area)) return;
            if (gap.column) columnIndex *= 2;
            if (typeof areas[area] === "undefined") areas[area] = {
                column: track(columnIndex + 1, columnIndex + 2),
                row: track(rowIndex + 1, rowIndex + 2)
            };
            else {
                let { column, row } = areas[area];
                column.start = Math.min(column.start, columnIndex + 1);
                column.end = Math.max(column.end, columnIndex + 2);
                column.span = column.end - column.start;
                row.start = Math.min(row.start, rowIndex + 1);
                row.end = Math.max(row.end, rowIndex + 2);
                row.span = row.end - row.start;
            }
        });
        return areas;
    }, {});
}
// Parse grid-template
function testTrack(node) {
    return node.type === "word" && /^\[.+]$/.test(node.value);
}
function verifyRowSize(result) {
    if (result.areas.length > result.rows.length) result.rows.push("auto");
    return result;
}
exports.parseTemplate = parseTemplate;
function parseTemplate({ decl, gap }) {
    let gridTemplate = parser(decl.value).nodes.reduce((result, node)=>{
        let { type, value } = node;
        if (testTrack(node) || type === "space") return result;
        // area
        if (type === "string") {
            result = verifyRowSize(result);
            result.areas.push(value);
        }
        // values and function
        if (type === "word" || type === "function") result[result.key].push(parser.stringify(node));
        // divider(/)
        if (type === "div" && value === "/") {
            result.key = "columns";
            result = verifyRowSize(result);
        }
        return result;
    }, {
        areas: [],
        columns: [],
        key: "rows",
        rows: []
    });
    return {
        areas: parseGridAreas({
            gap,
            rows: gridTemplate.areas
        }),
        columns: prefixTrackValue({
            gap: gap.column,
            value: gridTemplate.columns.join(" ")
        }),
        rows: prefixTrackValue({
            gap: gap.row,
            value: gridTemplate.rows.join(" ")
        })
    };
}
// Insert parsed grid areas
/**
 * Get an array of -ms- prefixed props and values
 * @param  {Object} [area] area object with column and row data
 * @param  {Boolean} [addRowSpan] should we add grid-column-row value?
 * @param  {Boolean} [addColumnSpan] should we add grid-column-span value?
 * @return {Array<Object>}
 */ function getMSDecls(area, addRowSpan = false, addColumnSpan = false) {
    let result = [
        {
            prop: "-ms-grid-row",
            value: String(area.row.start)
        }
    ];
    if (area.row.span > 1 || addRowSpan) result.push({
        prop: "-ms-grid-row-span",
        value: String(area.row.span)
    });
    result.push({
        prop: "-ms-grid-column",
        value: String(area.column.start)
    });
    if (area.column.span > 1 || addColumnSpan) result.push({
        prop: "-ms-grid-column-span",
        value: String(area.column.span)
    });
    return result;
}
function getParentMedia(parent) {
    if (parent.type === "atrule" && parent.name === "media") return parent;
    if (!parent.parent) return false;
    return getParentMedia(parent.parent);
}
/**
 * change selectors for rules with duplicate grid-areas.
 * @param  {Array<Rule>} rules
 * @param  {Array<String>} templateSelectors
 * @return {Array<Rule>} rules with changed selectors
 */ function changeDuplicateAreaSelectors(ruleSelectors, templateSelectors) {
    ruleSelectors = ruleSelectors.map((selector)=>{
        let selectorBySpace = list.space(selector);
        let selectorByComma = list.comma(selector);
        if (selectorBySpace.length > selectorByComma.length) selector = selectorBySpace.slice(-1).join("");
        return selector;
    });
    return ruleSelectors.map((ruleSelector)=>{
        let newSelector = templateSelectors.map((tplSelector, index)=>{
            let space = index === 0 ? "" : " ";
            return `${space}${tplSelector} > ${ruleSelector}`;
        });
        return newSelector;
    });
}
/**
 * check if selector of rules are equal
 * @param  {Rule} ruleA
 * @param  {Rule} ruleB
 * @return {Boolean}
 */ function selectorsEqual(ruleA, ruleB) {
    return ruleA.selectors.some((sel)=>{
        return ruleB.selectors.includes(sel);
    });
}
/**
 * Parse data from all grid-template(-areas) declarations
 * @param  {Root} css css root
 * @return {Object} parsed data
 */ function parseGridTemplatesData(css) {
    let parsed = [];
    // we walk through every grid-template(-areas) declaration and store
    // data with the same area names inside the item
    css.walkDecls(/grid-template(-areas)?$/, (d)=>{
        let rule = d.parent;
        let media = getParentMedia(rule);
        let gap = getGridGap(d);
        let inheritedGap = inheritGridGap(d, gap);
        let { areas } = parseTemplate({
            decl: d,
            gap: inheritedGap || gap
        });
        let areaNames = Object.keys(areas);
        // skip node if it doesn't have areas
        if (areaNames.length === 0) return true;
        // check parsed array for item that include the same area names
        // return index of that item
        let index = parsed.reduce((acc, { allAreas }, idx)=>{
            let hasAreas = allAreas && areaNames.some((area)=>allAreas.includes(area));
            return hasAreas ? idx : acc;
        }, null);
        if (index !== null) {
            // index is found, add the grid-template data to that item
            let { allAreas, rules } = parsed[index];
            // check if rule has no duplicate area names
            let hasNoDuplicates = rules.some((r)=>{
                return r.hasDuplicates === false && selectorsEqual(r, rule);
            });
            let duplicatesFound = false;
            // check need to gather all duplicate area names
            let duplicateAreaNames = rules.reduce((acc, r)=>{
                if (!r.params && selectorsEqual(r, rule)) {
                    duplicatesFound = true;
                    return r.duplicateAreaNames;
                }
                if (!duplicatesFound) areaNames.forEach((name)=>{
                    if (r.areas[name]) acc.push(name);
                });
                return uniq(acc);
            }, []);
            // update grid-row/column-span values for areas with duplicate
            // area names. @see #1084 and #1146
            rules.forEach((r)=>{
                areaNames.forEach((name)=>{
                    let area = r.areas[name];
                    if (area && area.row.span !== areas[name].row.span) areas[name].row.updateSpan = true;
                    if (area && area.column.span !== areas[name].column.span) areas[name].column.updateSpan = true;
                });
            });
            parsed[index].allAreas = uniq([
                ...allAreas,
                ...areaNames
            ]);
            parsed[index].rules.push({
                areas,
                duplicateAreaNames,
                hasDuplicates: !hasNoDuplicates,
                node: rule,
                params: media.params,
                selectors: rule.selectors
            });
        } else // index is NOT found, push the new item to the parsed array
        parsed.push({
            allAreas: areaNames,
            areasCount: 0,
            rules: [
                {
                    areas,
                    duplicateAreaNames: [],
                    duplicateRules: [],
                    hasDuplicates: false,
                    node: rule,
                    params: media.params,
                    selectors: rule.selectors
                }
            ]
        });
        return undefined;
    });
    return parsed;
}
/**
 * insert prefixed grid-area declarations
 * @param  {Root}  css css root
 * @param  {Function} isDisabled check if the rule is disabled
 * @return {void}
 */ exports.insertAreas = insertAreas;
function insertAreas(css, isDisabled) {
    // parse grid-template declarations
    let gridTemplatesData = parseGridTemplatesData(css);
    // return undefined if no declarations found
    if (gridTemplatesData.length === 0) return undefined;
    // we need to store the rules that we will insert later
    let rulesToInsert = {};
    css.walkDecls("grid-area", (gridArea)=>{
        let gridAreaRule = gridArea.parent;
        let hasPrefixedRow = gridAreaRule.first.prop === "-ms-grid-row";
        let gridAreaMedia = getParentMedia(gridAreaRule);
        if (isDisabled(gridArea)) return undefined;
        let gridAreaRuleIndex = css.index(gridAreaMedia || gridAreaRule);
        let value = gridArea.value;
        // found the data that matches grid-area identifier
        let data = gridTemplatesData.filter((d)=>d.allAreas.includes(value))[0];
        if (!data) return true;
        let lastArea = data.allAreas[data.allAreas.length - 1];
        let selectorBySpace = list.space(gridAreaRule.selector);
        let selectorByComma = list.comma(gridAreaRule.selector);
        let selectorIsComplex = selectorBySpace.length > 1 && selectorBySpace.length > selectorByComma.length;
        // prevent doubling of prefixes
        if (hasPrefixedRow) return false;
        // create the empty object with the key as the last area name
        // e.g if we have templates with "a b c" values, "c" will be the last area
        if (!rulesToInsert[lastArea]) rulesToInsert[lastArea] = {};
        let lastRuleIsSet = false;
        // walk through every grid-template rule data
        for (let rule of data.rules){
            let area = rule.areas[value];
            let hasDuplicateName = rule.duplicateAreaNames.includes(value);
            // if we can't find the area name, update lastRule and continue
            if (!area) {
                let lastRule = rulesToInsert[lastArea].lastRule;
                let lastRuleIndex;
                if (lastRule) lastRuleIndex = css.index(lastRule);
                else /* c8 ignore next 2 */ lastRuleIndex = -1;
                if (gridAreaRuleIndex > lastRuleIndex) rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule;
                continue;
            }
            // for grid-templates inside media rule we need to create empty
            // array to push prefixed grid-area rules later
            if (rule.params && !rulesToInsert[lastArea][rule.params]) rulesToInsert[lastArea][rule.params] = [];
            if ((!rule.hasDuplicates || !hasDuplicateName) && !rule.params) {
                // grid-template has no duplicates and not inside media rule
                getMSDecls(area, false, false).reverse().forEach((i)=>gridAreaRule.prepend(Object.assign(i, {
                        raws: {
                            between: gridArea.raws.between
                        }
                    })));
                rulesToInsert[lastArea].lastRule = gridAreaRule;
                lastRuleIsSet = true;
            } else if (rule.hasDuplicates && !rule.params && !selectorIsComplex) {
                // grid-template has duplicates and not inside media rule
                let cloned = gridAreaRule.clone();
                cloned.removeAll();
                getMSDecls(area, area.row.updateSpan, area.column.updateSpan).reverse().forEach((i)=>cloned.prepend(Object.assign(i, {
                        raws: {
                            between: gridArea.raws.between
                        }
                    })));
                cloned.selectors = changeDuplicateAreaSelectors(cloned.selectors, rule.selectors);
                if (rulesToInsert[lastArea].lastRule) rulesToInsert[lastArea].lastRule.after(cloned);
                rulesToInsert[lastArea].lastRule = cloned;
                lastRuleIsSet = true;
            } else if (rule.hasDuplicates && !rule.params && selectorIsComplex && gridAreaRule.selector.includes(rule.selectors[0])) {
                // grid-template has duplicates and not inside media rule
                // and the selector is complex
                gridAreaRule.walkDecls(/-ms-grid-(row|column)/, (d)=>d.remove());
                getMSDecls(area, area.row.updateSpan, area.column.updateSpan).reverse().forEach((i)=>gridAreaRule.prepend(Object.assign(i, {
                        raws: {
                            between: gridArea.raws.between
                        }
                    })));
            } else if (rule.params) {
                // grid-template is inside media rule
                // if we're inside media rule, we need to store prefixed rules
                // inside rulesToInsert object to be able to preserve the order of media
                // rules and merge them easily
                let cloned = gridAreaRule.clone();
                cloned.removeAll();
                getMSDecls(area, area.row.updateSpan, area.column.updateSpan).reverse().forEach((i)=>cloned.prepend(Object.assign(i, {
                        raws: {
                            between: gridArea.raws.between
                        }
                    })));
                if (rule.hasDuplicates && hasDuplicateName) cloned.selectors = changeDuplicateAreaSelectors(cloned.selectors, rule.selectors);
                cloned.raws = rule.node.raws;
                if (css.index(rule.node.parent) > gridAreaRuleIndex) // append the prefixed rules right inside media rule
                // with grid-template
                rule.node.parent.append(cloned);
                else // store the rule to insert later
                rulesToInsert[lastArea][rule.params].push(cloned);
                // set new rule as last rule ONLY if we didn't set lastRule for
                // this grid-area before
                if (!lastRuleIsSet) rulesToInsert[lastArea].lastRule = gridAreaMedia || gridAreaRule;
            }
        }
        return undefined;
    });
    // append stored rules inside the media rules
    Object.keys(rulesToInsert).forEach((area)=>{
        let data = rulesToInsert[area];
        let lastRule = data.lastRule;
        Object.keys(data).reverse().filter((p)=>p !== "lastRule").forEach((params)=>{
            if (data[params].length > 0 && lastRule) {
                lastRule.after({
                    name: "media",
                    params
                });
                lastRule.next().append(data[params]);
            }
        });
    });
    return undefined;
}
/**
 * Warn user if grid area identifiers are not found
 * @param  {Object} areas
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */ exports.warnMissedAreas = warnMissedAreas;
function warnMissedAreas(areas, decl, result) {
    let missed = Object.keys(areas);
    decl.root().walkDecls("grid-area", (gridArea)=>{
        missed = missed.filter((e)=>e !== gridArea.value);
    });
    if (missed.length > 0) decl.warn(result, "Can not find grid areas: " + missed.join(", "));
    return undefined;
}
/**
 * compare selectors with grid-area rule and grid-template rule
 * show warning if grid-template selector is not found
 * (this function used for grid-area rule)
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */ exports.warnTemplateSelectorNotFound = warnTemplateSelectorNotFound;
function warnTemplateSelectorNotFound(decl, result) {
    let rule = decl.parent;
    let root = decl.root();
    let duplicatesFound = false;
    // slice selector array. Remove the last part (for comparison)
    let slicedSelectorArr = list.space(rule.selector).filter((str)=>str !== ">").slice(0, -1);
    // we need to compare only if selector is complex.
    // e.g '.grid-cell' is simple, but '.parent > .grid-cell' is complex
    if (slicedSelectorArr.length > 0) {
        let gridTemplateFound = false;
        let foundAreaSelector = null;
        root.walkDecls(/grid-template(-areas)?$/, (d)=>{
            let parent = d.parent;
            let templateSelectors = parent.selectors;
            let { areas } = parseTemplate({
                decl: d,
                gap: getGridGap(d)
            });
            let hasArea = areas[decl.value];
            // find the the matching selectors
            for (let tplSelector of templateSelectors){
                if (gridTemplateFound) break;
                let tplSelectorArr = list.space(tplSelector).filter((str)=>str !== ">");
                gridTemplateFound = tplSelectorArr.every((item, idx)=>item === slicedSelectorArr[idx]);
            }
            if (gridTemplateFound || !hasArea) return true;
            if (!foundAreaSelector) foundAreaSelector = parent.selector;
            // if we found the duplicate area with different selector
            if (foundAreaSelector && foundAreaSelector !== parent.selector) duplicatesFound = true;
            return undefined;
        });
        // warn user if we didn't find template
        if (!gridTemplateFound && duplicatesFound) decl.warn(result, "Autoprefixer cannot find a grid-template " + `containing the duplicate grid-area "${decl.value}" ` + `with full selector matching: ${slicedSelectorArr.join(" ")}`);
    }
}
/**
 * warn user if both grid-area and grid-(row|column)
 * declarations are present in the same rule
 * @param  {Declaration} decl
 * @param  {Result} result
 * @return {void}
 */ exports.warnIfGridRowColumnExists = warnIfGridRowColumnExists;
function warnIfGridRowColumnExists(decl, result) {
    let rule = decl.parent;
    let decls = [];
    rule.walkDecls(/^grid-(row|column)/, (d)=>{
        if (!d.prop.endsWith("-end") && !d.value.startsWith("span") && !d.prop.endsWith("-gap")) decls.push(d);
    });
    if (decls.length > 0) decls.forEach((d)=>{
        d.warn(result, "You already have a grid-area declaration present in the rule. " + `You should use either grid-area or ${d.prop}, not both`);
    });
    return undefined;
}
// Gap utils
exports.getGridGap = getGridGap;
function getGridGap(decl) {
    let gap = {};
    // try to find gap
    let testGap = /^(grid-)?((row|column)-)?gap$/;
    decl.parent.walkDecls(testGap, ({ prop, value })=>{
        if (/^(grid-)?gap$/.test(prop)) {
            let [row, , column] = parser(value).nodes;
            gap.row = row && parser.stringify(row);
            gap.column = column ? parser.stringify(column) : gap.row;
        }
        if (/^(grid-)?row-gap$/.test(prop)) gap.row = value;
        if (/^(grid-)?column-gap$/.test(prop)) gap.column = value;
    });
    return gap;
}
/**
 * parse media parameters (for example 'min-width: 500px')
 * @param  {String} params parameter to parse
 * @return {}
 */ function parseMediaParams(params) {
    if (!params) return [];
    let parsed = parser(params);
    let prop;
    let value;
    parsed.walk((node)=>{
        if (node.type === "word" && /min|max/g.test(node.value)) prop = node.value;
        else if (node.value.includes("px")) value = parseInt(node.value.replace(/\D/g, ""));
    });
    return [
        prop,
        value
    ];
}
/**
 * Compare the selectors and decide if we
 * need to inherit gap from compared selector or not.
 * @type {String} selA
 * @type {String} selB
 * @return {Boolean}
 */ function shouldInheritGap(selA, selB) {
    let result;
    // get arrays of selector split in 3-deep array
    let splitSelectorArrA = splitSelector(selA);
    let splitSelectorArrB = splitSelector(selB);
    if (splitSelectorArrA[0].length < splitSelectorArrB[0].length) // abort if selectorA has lower descendant specificity then selectorB
    // (e.g '.grid' and '.hello .world .grid')
    return false;
    else if (splitSelectorArrA[0].length > splitSelectorArrB[0].length) {
        // if selectorA has higher descendant specificity then selectorB
        // (e.g '.foo .bar .grid' and '.grid')
        let idx = splitSelectorArrA[0].reduce((res, [item], index)=>{
            let firstSelectorPart = splitSelectorArrB[0][0][0];
            if (item === firstSelectorPart) return index;
            return false;
        }, false);
        if (idx) result = splitSelectorArrB[0].every((arr, index)=>{
            return arr.every((part, innerIndex)=>// because selectorA has more space elements, we need to slice
                // selectorA array by 'idx' number to compare them
                splitSelectorArrA[0].slice(idx)[index][innerIndex] === part);
        });
    } else // if selectorA has the same descendant specificity as selectorB
    // this condition covers cases such as: '.grid.foo.bar' and '.grid'
    result = splitSelectorArrB.some((byCommaArr)=>{
        return byCommaArr.every((bySpaceArr, index)=>{
            return bySpaceArr.every((part, innerIndex)=>splitSelectorArrA[0][index][innerIndex] === part);
        });
    });
    return result;
}
/**
 * inherit grid gap values from the closest rule above
 * with the same selector
 * @param  {Declaration} decl
 * @param  {Object} gap gap values
 * @return {Object | Boolean} return gap values or false (if not found)
 */ exports.inheritGridGap = inheritGridGap;
function inheritGridGap(decl, gap) {
    let rule = decl.parent;
    let mediaRule = getParentMedia(rule);
    let root = rule.root();
    // get an array of selector split in 3-deep array
    let splitSelectorArr = splitSelector(rule.selector);
    // abort if the rule already has gaps
    if (Object.keys(gap).length > 0) return false;
    // e.g ['min-width']
    let [prop] = parseMediaParams(mediaRule.params);
    let lastBySpace = splitSelectorArr[0];
    // get escaped value from the selector
    // if we have '.grid-2.foo.bar' selector, will be '\.grid\-2'
    let escaped = escapeRegexp(lastBySpace[lastBySpace.length - 1][0]);
    let regexp = new RegExp(`(${escaped}$)|(${escaped}[,.])`);
    // find the closest rule with the same selector
    let closestRuleGap;
    root.walkRules(regexp, (r)=>{
        let gridGap;
        // abort if are checking the same rule
        if (rule.toString() === r.toString()) return false;
        // find grid-gap values
        r.walkDecls("grid-gap", (d)=>gridGap = getGridGap(d));
        // skip rule without gaps
        if (!gridGap || Object.keys(gridGap).length === 0) return true;
        // skip rules that should not be inherited from
        if (!shouldInheritGap(rule.selector, r.selector)) return true;
        let media = getParentMedia(r);
        if (media) {
            // if we are inside media, we need to check that media props match
            // e.g ('min-width' === 'min-width')
            let propToCompare = parseMediaParams(media.params)[0];
            if (propToCompare === prop) {
                closestRuleGap = gridGap;
                return true;
            }
        } else {
            closestRuleGap = gridGap;
            return true;
        }
        return undefined;
    });
    // if we find the closest gap object
    if (closestRuleGap && Object.keys(closestRuleGap).length > 0) return closestRuleGap;
    return false;
}
exports.warnGridGap = warnGridGap;
function warnGridGap({ decl, gap, hasColumns, result }) {
    let hasBothGaps = gap.row && gap.column;
    if (!hasColumns && (hasBothGaps || gap.column && !gap.row)) {
        delete gap.column;
        decl.warn(result, "Can not implement grid-gap without grid-template-columns");
    }
}
/**
 * normalize the grid-template-rows/columns values
 * @param  {String} str grid-template-rows/columns value
 * @return {Array} normalized array with values
 * @example
 * let normalized = normalizeRowColumn('1fr repeat(2, 20px 50px) 1fr')
 * normalized // <= ['1fr', '20px', '50px', '20px', '50px', '1fr']
 */ function normalizeRowColumn(str) {
    let normalized = parser(str).nodes.reduce((result, node)=>{
        if (node.type === "function" && node.value === "repeat") {
            let key = "count";
            let [count, value] = node.nodes.reduce((acc, n)=>{
                if (n.type === "word" && key === "count") {
                    acc[0] = Math.abs(parseInt(n.value));
                    return acc;
                }
                if (n.type === "div" && n.value === ",") {
                    key = "value";
                    return acc;
                }
                if (key === "value") acc[1] += parser.stringify(n);
                return acc;
            }, [
                0,
                ""
            ]);
            if (count) for(let i = 0; i < count; i++)result.push(value);
            return result;
        }
        if (node.type === "space") return result;
        return result.concat(parser.stringify(node));
    }, []);
    return normalized;
}
exports.autoplaceGridItems = autoplaceGridItems;
/**
 * Autoplace grid items
 * @param {Declaration} decl
 * @param {Result} result
 * @param {Object} gap gap values
 * @param {String} autoflowValue grid-auto-flow value
 * @return {void}
 * @see https://github.com/postcss/autoprefixer/issues/1148
 */ function autoplaceGridItems(decl, result, gap, autoflowValue = "row") {
    let { parent } = decl;
    let rowDecl = parent.nodes.find((i)=>i.prop === "grid-template-rows");
    let rows = normalizeRowColumn(rowDecl.value);
    let columns = normalizeRowColumn(decl.value);
    // Build array of area names with dummy values. If we have 3 columns and
    // 2 rows, filledRows will be equal to ['1 2 3', '4 5 6']
    let filledRows = rows.map((_, rowIndex)=>{
        return Array.from({
            length: columns.length
        }, (v, k)=>k + rowIndex * columns.length + 1).join(" ");
    });
    let areas = parseGridAreas({
        gap,
        rows: filledRows
    });
    let keys = Object.keys(areas);
    let items = keys.map((i)=>areas[i]);
    // Change the order of cells if grid-auto-flow value is 'column'
    if (autoflowValue.includes("column")) items = items.sort((a, b)=>a.column.start - b.column.start);
    // Insert new rules
    items.reverse().forEach((item, index)=>{
        let { column, row } = item;
        let nodeSelector = parent.selectors.map((sel)=>sel + ` > *:nth-child(${keys.length - index})`).join(", ");
        // create new rule
        let node = parent.clone().removeAll();
        // change rule selector
        node.selector = nodeSelector;
        // insert prefixed row/column values
        node.append({
            prop: "-ms-grid-row",
            value: row.start
        });
        node.append({
            prop: "-ms-grid-column",
            value: column.start
        });
        // insert rule
        parent.after(node);
    });
    return undefined;
}

},{"a891bc712a0603e1":"blMr1","c95c3c13e4db8500":"gauyy","9f22ee0a1315be58":"j2sRV"}],"cjWll":[function(require,module,exports) {
let featureQueries = require("3513c82b2e4cdd15");
let feature = require("52cef2e69e5fb2c5");
let { parse } = require("fa6b47a9febaaac8");
let Browsers = require("d2025c2406fbca0a");
let brackets = require("a683604b4b5f9c0f");
let Value = require("e8dd5f73e9c22775");
let utils = require("ddb94a243e928a61");
let data = feature(featureQueries);
let supported = [];
for(let browser in data.stats){
    let versions = data.stats[browser];
    for(let version in versions){
        let support = versions[version];
        if (/y/.test(support)) supported.push(browser + " " + version);
    }
}
class Supports {
    constructor(Prefixes, all){
        this.Prefixes = Prefixes;
        this.all = all;
    }
    /**
   * Add prefixes
   */ add(nodes, all) {
        return nodes.map((i)=>{
            if (this.isProp(i)) {
                let prefixed = this.prefixed(i[0]);
                if (prefixed.length > 1) return this.convert(prefixed);
                return i;
            }
            if (typeof i === "object") return this.add(i, all);
            return i;
        });
    }
    /**
   * Clean brackets with one child
   */ cleanBrackets(nodes) {
        return nodes.map((i)=>{
            if (typeof i !== "object") return i;
            if (i.length === 1 && typeof i[0] === "object") return this.cleanBrackets(i[0]);
            return this.cleanBrackets(i);
        });
    }
    /**
   * Add " or " between properties and convert it to brackets format
   */ convert(progress) {
        let result = [
            ""
        ];
        for (let i of progress){
            result.push([
                `${i.prop}: ${i.value}`
            ]);
            result.push(" or ");
        }
        result[result.length - 1] = "";
        return result;
    }
    /**
   * Check global options
   */ disabled(node) {
        if (!this.all.options.grid) {
            if (node.prop === "display" && node.value.includes("grid")) return true;
            if (node.prop.includes("grid") || node.prop === "justify-items") return true;
        }
        if (this.all.options.flexbox === false) {
            if (node.prop === "display" && node.value.includes("flex")) return true;
            let other = [
                "order",
                "justify-content",
                "align-items",
                "align-content"
            ];
            if (node.prop.includes("flex") || other.includes(node.prop)) return true;
        }
        return false;
    }
    /**
   * Return true if prefixed property has no unprefixed
   */ isHack(all, unprefixed) {
        let check = new RegExp(`(\\(|\\s)${utils.escapeRegexp(unprefixed)}:`);
        return !check.test(all);
    }
    /**
   * Return true if brackets node is "not" word
   */ isNot(node) {
        return typeof node === "string" && /not\s*/i.test(node);
    }
    /**
   * Return true if brackets node is "or" word
   */ isOr(node) {
        return typeof node === "string" && /\s*or\s*/i.test(node);
    }
    /**
   * Return true if brackets node is (prop: value)
   */ isProp(node) {
        return typeof node === "object" && node.length === 1 && typeof node[0] === "string";
    }
    /**
   * Compress value functions into a string nodes
   */ normalize(nodes) {
        if (typeof nodes !== "object") return nodes;
        nodes = nodes.filter((i)=>i !== "");
        if (typeof nodes[0] === "string") {
            let firstNode = nodes[0].trim();
            if (firstNode.includes(":") || firstNode === "selector" || firstNode === "not selector") return [
                brackets.stringify(nodes)
            ];
        }
        return nodes.map((i)=>this.normalize(i));
    }
    /**
   * Parse string into declaration property and value
   */ parse(str) {
        let parts = str.split(":");
        let prop = parts[0];
        let value = parts[1];
        if (!value) value = "";
        return [
            prop.trim(),
            value.trim()
        ];
    }
    /**
   * Return array of Declaration with all necessary prefixes
   */ prefixed(str) {
        let rule = this.virtual(str);
        if (this.disabled(rule.first)) return rule.nodes;
        let result = {
            warn: ()=>null
        };
        let prefixer = this.prefixer().add[rule.first.prop];
        prefixer && prefixer.process && prefixer.process(rule.first, result);
        for (let decl of rule.nodes){
            for (let value of this.prefixer().values("add", rule.first.prop))value.process(decl);
            Value.save(this.all, decl);
        }
        return rule.nodes;
    }
    /**
   * Return prefixer only with @supports supported browsers
   */ prefixer() {
        if (this.prefixerCache) return this.prefixerCache;
        let filtered = this.all.browsers.selected.filter((i)=>{
            return supported.includes(i);
        });
        let browsers = new Browsers(this.all.browsers.data, filtered, this.all.options);
        this.prefixerCache = new this.Prefixes(this.all.data, browsers, this.all.options);
        return this.prefixerCache;
    }
    /**
   * Add prefixed declaration
   */ process(rule) {
        let ast = brackets.parse(rule.params);
        ast = this.normalize(ast);
        ast = this.remove(ast, rule.params);
        ast = this.add(ast, rule.params);
        ast = this.cleanBrackets(ast);
        rule.params = brackets.stringify(ast);
    }
    /**
   * Remove all unnecessary prefixes
   */ remove(nodes, all) {
        let i = 0;
        while(i < nodes.length){
            if (!this.isNot(nodes[i - 1]) && this.isProp(nodes[i]) && this.isOr(nodes[i + 1])) {
                if (this.toRemove(nodes[i][0], all)) {
                    nodes.splice(i, 2);
                    continue;
                }
                i += 2;
                continue;
            }
            if (typeof nodes[i] === "object") nodes[i] = this.remove(nodes[i], all);
            i += 1;
        }
        return nodes;
    }
    /**
   * Return true if we need to remove node
   */ toRemove(str, all) {
        let [prop, value] = this.parse(str);
        let unprefixed = this.all.unprefixed(prop);
        let cleaner = this.all.cleaner();
        if (cleaner.remove[prop] && cleaner.remove[prop].remove && !this.isHack(all, unprefixed)) return true;
        for (let checker of cleaner.values("remove", unprefixed)){
            if (checker.check(value)) return true;
        }
        return false;
    }
    /**
   * Create virtual rule to process it by prefixer
   */ virtual(str) {
        let [prop, value] = this.parse(str);
        let rule = parse("a{}").first;
        rule.append({
            prop,
            raws: {
                before: ""
            },
            value
        });
        return rule;
    }
}
module.exports = Supports;

},{"3513c82b2e4cdd15":"eURwk","52cef2e69e5fb2c5":"8Fe8m","fa6b47a9febaaac8":"gauyy","d2025c2406fbca0a":"dGs5H","a683604b4b5f9c0f":"fBvJC","e8dd5f73e9c22775":"i2bKe","ddb94a243e928a61":"j2sRV"}],"eURwk":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D E dC HC eC fC gC"
        },
        F: {
            "1": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F B C oC pC qC rC 5B WC sC"
        },
        G: {
            "1": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC"
        },
        H: {
            "1": "FD"
        },
        I: {
            "1": "I KD LD",
            "2": "AC J GD HD ID JD XC"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS Feature Queries",
    D: true
};

},{}],"8Fe8m":[function(require,module,exports) {
"use strict";
const statuses = require("6049d9f006090ec1");
const supported = require("6829894733354f96");
const browsers = require("e087109c7d9f75af").browsers;
const versions = require("534ad0cd8ef5d61f").browserVersions;
const MATH2LOG = Math.log(2);
function unpackSupport(cipher) {
    // bit flags
    let stats = Object.keys(supported).reduce((list, support)=>{
        if (cipher & supported[support]) list.push(support);
        return list;
    }, []);
    // notes
    let notes = cipher >> 7;
    let notesArray = [];
    while(notes){
        let note = Math.floor(Math.log(notes) / MATH2LOG) + 1;
        notesArray.unshift(`#${note}`);
        notes -= Math.pow(2, note - 1);
    }
    return stats.concat(notesArray).join(" ");
}
function unpackFeature(packed) {
    let unpacked = {
        status: statuses[packed.B],
        title: packed.C,
        shown: packed.D
    };
    unpacked.stats = Object.keys(packed.A).reduce((browserStats, key)=>{
        let browser = packed.A[key];
        browserStats[browsers[key]] = Object.keys(browser).reduce((stats, support)=>{
            let packedVersions = browser[support].split(" ");
            let unpacked2 = unpackSupport(support);
            packedVersions.forEach((v)=>stats[versions[v]] = unpacked2);
            return stats;
        }, {});
        return browserStats;
    }, {});
    return unpacked;
}
module.exports = unpackFeature;
module.exports.default = unpackFeature;

},{"6049d9f006090ec1":"2ZxWW","6829894733354f96":"dMYWv","e087109c7d9f75af":"1klRD","534ad0cd8ef5d61f":"gSgrO"}],"2ZxWW":[function(require,module,exports) {
module.exports = {
    1: "ls",
    2: "rec",
    3: "pr",
    4: "cr",
    5: "wd",
    6: "other",
    7: "unoff" // Unofficial, Editor's Draft or W3C "Note"
};

},{}],"dMYWv":[function(require,module,exports) {
module.exports = {
    y: 1,
    n: 2,
    a: 4,
    p: 8,
    u: 16,
    x: 32,
    d: 64
};

},{}],"fBvJC":[function(require,module,exports) {
function last(array) {
    return array[array.length - 1];
}
let brackets = {
    /**
   * Parse string to nodes tree
   */ parse (str) {
        let current = [
            ""
        ];
        let stack = [
            current
        ];
        for (let sym of str){
            if (sym === "(") {
                current = [
                    ""
                ];
                last(stack).push(current);
                stack.push(current);
                continue;
            }
            if (sym === ")") {
                stack.pop();
                current = last(stack);
                current.push("");
                continue;
            }
            current[current.length - 1] += sym;
        }
        return stack[0];
    },
    /**
   * Generate output string by nodes tree
   */ stringify (ast) {
        let result = "";
        for (let i of ast){
            if (typeof i === "object") {
                result += `(${brackets.stringify(i)})`;
                continue;
            }
            result += i;
        }
        return result;
    }
};
module.exports = brackets;

},{}],"lFkyP":[function(require,module,exports) {
let { list } = require("7b552ea9446bc2bc");
let OldSelector = require("342f993faec02e89");
let Prefixer = require("9d478dd5398b03d6");
let Browsers = require("a94ed2f3211e3b18");
let utils = require("6c02944623c45270");
class Selector extends Prefixer {
    constructor(name, prefixes, all){
        super(name, prefixes, all);
        this.regexpCache = new Map();
    }
    /**
   * Clone and add prefixes for at-rule
   */ add(rule, prefix) {
        let prefixeds = this.prefixeds(rule);
        if (this.already(rule, prefixeds, prefix)) return;
        let cloned = this.clone(rule, {
            selector: prefixeds[this.name][prefix]
        });
        rule.parent.insertBefore(rule, cloned);
    }
    /**
   * Is rule already prefixed before
   */ already(rule, prefixeds, prefix) {
        let index = rule.parent.index(rule) - 1;
        while(index >= 0){
            let before = rule.parent.nodes[index];
            if (before.type !== "rule") return false;
            let some = false;
            for(let key in prefixeds[this.name]){
                let prefixed = prefixeds[this.name][key];
                if (before.selector === prefixed) {
                    if (prefix === key) return true;
                    else {
                        some = true;
                        break;
                    }
                }
            }
            if (!some) return false;
            index -= 1;
        }
        return false;
    }
    /**
   * Is rule selectors need to be prefixed
   */ check(rule) {
        if (rule.selector.includes(this.name)) return !!rule.selector.match(this.regexp());
        return false;
    }
    /**
   * Return function to fast find prefixed selector
   */ old(prefix) {
        return new OldSelector(this, prefix);
    }
    /**
   * All possible prefixes
   */ possible() {
        return Browsers.prefixes();
    }
    /**
   * Return prefixed version of selector
   */ prefixed(prefix) {
        return this.name.replace(/^(\W*)/, `$1${prefix}`);
    }
    /**
   * Return all possible selector prefixes
   */ prefixeds(rule) {
        if (rule._autoprefixerPrefixeds) {
            if (rule._autoprefixerPrefixeds[this.name]) return rule._autoprefixerPrefixeds;
        } else rule._autoprefixerPrefixeds = {};
        let prefixeds = {};
        if (rule.selector.includes(",")) {
            let ruleParts = list.comma(rule.selector);
            let toProcess = ruleParts.filter((el)=>el.includes(this.name));
            for (let prefix of this.possible())prefixeds[prefix] = toProcess.map((el)=>this.replace(el, prefix)).join(", ");
        } else for (let prefix of this.possible())prefixeds[prefix] = this.replace(rule.selector, prefix);
        rule._autoprefixerPrefixeds[this.name] = prefixeds;
        return rule._autoprefixerPrefixeds;
    }
    /**
   * Lazy loadRegExp for name
   */ regexp(prefix) {
        if (!this.regexpCache.has(prefix)) {
            let name = prefix ? this.prefixed(prefix) : this.name;
            this.regexpCache.set(prefix, new RegExp(`(^|[^:"'=])${utils.escapeRegexp(name)}`, "gi"));
        }
        return this.regexpCache.get(prefix);
    }
    /**
   * Replace selectors by prefixed one
   */ replace(selector, prefix) {
        return selector.replace(this.regexp(), `$1${this.prefixed(prefix)}`);
    }
}
module.exports = Selector;

},{"7b552ea9446bc2bc":"gauyy","342f993faec02e89":"dh6iT","9d478dd5398b03d6":"6bcfc","a94ed2f3211e3b18":"dGs5H","6c02944623c45270":"j2sRV"}],"dh6iT":[function(require,module,exports) {
class OldSelector {
    constructor(selector, prefix){
        this.prefix = prefix;
        this.prefixed = selector.prefixed(this.prefix);
        this.regexp = selector.regexp(this.prefix);
        this.prefixeds = selector.possible().map((x)=>[
                selector.prefixed(x),
                selector.regexp(x)
            ]);
        this.unprefixed = selector.name;
        this.nameRegexp = selector.regexp();
    }
    /**
   * Does rule contain an unnecessary prefixed selector
   */ check(rule) {
        if (!rule.selector.includes(this.prefixed)) return false;
        if (!rule.selector.match(this.regexp)) return false;
        if (this.isHack(rule)) return false;
        return true;
    }
    /**
   * Is rule a hack without unprefixed version bottom
   */ isHack(rule) {
        let index = rule.parent.index(rule) + 1;
        let rules = rule.parent.nodes;
        while(index < rules.length){
            let before = rules[index].selector;
            if (!before) return true;
            if (before.includes(this.unprefixed) && before.match(this.nameRegexp)) return false;
            let some = false;
            for (let [string, regexp] of this.prefixeds)if (before.includes(string) && before.match(regexp)) {
                some = true;
                break;
            }
            if (!some) return true;
            index += 1;
        }
        return true;
    }
}
module.exports = OldSelector;

},{}],"ixGmX":[function(require,module,exports) {
let Prefixer = require("51d00360ce5ac52d");
class AtRule extends Prefixer {
    /**
   * Clone and add prefixes for at-rule
   */ add(rule, prefix) {
        let prefixed = prefix + rule.name;
        let already = rule.parent.some((i)=>i.name === prefixed && i.params === rule.params);
        if (already) return undefined;
        let cloned = this.clone(rule, {
            name: prefixed
        });
        return rule.parent.insertBefore(rule, cloned);
    }
    /**
   * Clone node with prefixes
   */ process(node) {
        let parent = this.parentPrefix(node);
        for (let prefix of this.prefixes)if (!parent || parent === prefix) this.add(node, prefix);
    }
}
module.exports = AtRule;

},{"51d00360ce5ac52d":"6bcfc"}],"21WlU":[function(require,module,exports) {
let Selector = require("39ea6f4ad3340730");
class Fullscreen extends Selector {
    /**
   * Return different selectors depend on prefix
   */ prefixed(prefix) {
        if (prefix === "-webkit-") return ":-webkit-full-screen";
        if (prefix === "-moz-") return ":-moz-full-screen";
        return `:${prefix}fullscreen`;
    }
}
Fullscreen.names = [
    ":fullscreen"
];
module.exports = Fullscreen;

},{"39ea6f4ad3340730":"lFkyP"}],"bfROY":[function(require,module,exports) {
let Selector = require("d86017aa14cf66a1");
class Placeholder extends Selector {
    /**
   * Add old mozilla to possible prefixes
   */ possible() {
        return super.possible().concat([
            "-moz- old",
            "-ms- old"
        ]);
    }
    /**
   * Return different selectors depend on prefix
   */ prefixed(prefix) {
        if (prefix === "-webkit-") return "::-webkit-input-placeholder";
        if (prefix === "-ms-") return "::-ms-input-placeholder";
        if (prefix === "-ms- old") return ":-ms-input-placeholder";
        if (prefix === "-moz- old") return ":-moz-placeholder";
        return `::${prefix}placeholder`;
    }
}
Placeholder.names = [
    "::placeholder"
];
module.exports = Placeholder;

},{"d86017aa14cf66a1":"lFkyP"}],"04bRS":[function(require,module,exports) {
let Selector = require("1252579d5666dabf");
class PlaceholderShown extends Selector {
    /**
   * Return different selectors depend on prefix
   */ prefixed(prefix) {
        if (prefix === "-ms-") return ":-ms-input-placeholder";
        return `:${prefix}placeholder-shown`;
    }
}
PlaceholderShown.names = [
    ":placeholder-shown"
];
module.exports = PlaceholderShown;

},{"1252579d5666dabf":"lFkyP"}],"ceDQf":[function(require,module,exports) {
let Selector = require("f67ecbea45639841");
let utils = require("e1d7889c7572c472");
class FileSelectorButton extends Selector {
    constructor(name, prefixes, all){
        super(name, prefixes, all);
        if (this.prefixes) this.prefixes = utils.uniq(this.prefixes.map(()=>"-webkit-"));
    }
    /**
   * Return different selectors depend on prefix
   */ prefixed(prefix) {
        if (prefix === "-webkit-") return "::-webkit-file-upload-button";
        return `::${prefix}file-selector-button`;
    }
}
FileSelectorButton.names = [
    "::file-selector-button"
];
module.exports = FileSelectorButton;

},{"f67ecbea45639841":"lFkyP","e1d7889c7572c472":"j2sRV"}],"5MJC9":[function(require,module,exports) {
let list = require("3facb4602d301d95").list;
let flexSpec = require("145580568d472101");
let Declaration = require("f2813ce7ee0060e7");
class Flex extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "flex";
    }
    /**
   * Change property name for 2009 spec
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2009) return prefix + "box-flex";
        return super.prefixed(prop, prefix);
    }
    /**
   * Spec 2009 supports only first argument
   * Spec 2012 disallows unitless basis
   */ set(decl, prefix) {
        let spec = flexSpec(prefix)[0];
        if (spec === 2009) {
            decl.value = list.space(decl.value)[0];
            decl.value = Flex.oldValues[decl.value] || decl.value;
            return super.set(decl, prefix);
        }
        if (spec === 2012) {
            let components = list.space(decl.value);
            if (components.length === 3 && components[2] === "0") decl.value = components.slice(0, 2).concat("0px").join(" ");
        }
        return super.set(decl, prefix);
    }
}
Flex.names = [
    "flex",
    "box-flex"
];
Flex.oldValues = {
    auto: "1",
    none: "0"
};
module.exports = Flex;

},{"3facb4602d301d95":"gauyy","145580568d472101":"at1Im","f2813ce7ee0060e7":"eJRSt"}],"at1Im":[function(require,module,exports) {
/**
 * Return flexbox spec versions by prefix
 */ module.exports = function(prefix) {
    let spec;
    if (prefix === "-webkit- 2009" || prefix === "-moz-") spec = 2009;
    else if (prefix === "-ms-") spec = 2012;
    else if (prefix === "-webkit-") spec = "final";
    if (prefix === "-webkit- 2009") prefix = "-webkit-";
    return [
        spec,
        prefix
    ];
};

},{}],"kLOI0":[function(require,module,exports) {
let flexSpec = require("6b216798b3a9dd6f");
let Declaration = require("12904640d1a0fc79");
class Order extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "order";
    }
    /**
   * Change property name for 2009 and 2012 specs
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2009) return prefix + "box-ordinal-group";
        if (spec === 2012) return prefix + "flex-order";
        return super.prefixed(prop, prefix);
    }
    /**
   * Fix value for 2009 spec
   */ set(decl, prefix) {
        let spec = flexSpec(prefix)[0];
        if (spec === 2009 && /\d/.test(decl.value)) {
            decl.value = (parseInt(decl.value) + 1).toString();
            return super.set(decl, prefix);
        }
        return super.set(decl, prefix);
    }
}
Order.names = [
    "order",
    "flex-order",
    "box-ordinal-group"
];
module.exports = Order;

},{"6b216798b3a9dd6f":"at1Im","12904640d1a0fc79":"eJRSt"}],"gsORo":[function(require,module,exports) {
let Declaration = require("82856f3d55f8a353");
class Filter extends Declaration {
    /**
   * Check is it Internet Explorer filter
   */ check(decl) {
        let v = decl.value;
        return !v.toLowerCase().includes("alpha(") && !v.includes("DXImageTransform.Microsoft") && !v.includes("data:image/svg+xml");
    }
}
Filter.names = [
    "filter"
];
module.exports = Filter;

},{"82856f3d55f8a353":"eJRSt"}],"cfQIf":[function(require,module,exports) {
let Declaration = require("2f2a0c9e35423c30");
let { isPureNumber } = require("4f783e63d3e1379");
class GridEnd extends Declaration {
    /**
   * Change repeating syntax for IE
   */ insert(decl, prefix, prefixes, result) {
        if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
        let clonedDecl = this.clone(decl);
        let startProp = decl.prop.replace(/end$/, "start");
        let spanProp = prefix + decl.prop.replace(/end$/, "span");
        if (decl.parent.some((i)=>i.prop === spanProp)) return undefined;
        clonedDecl.prop = spanProp;
        if (decl.value.includes("span")) clonedDecl.value = decl.value.replace(/span\s/i, "");
        else {
            let startDecl;
            decl.parent.walkDecls(startProp, (d)=>{
                startDecl = d;
            });
            if (startDecl) {
                if (isPureNumber(startDecl.value)) {
                    let value = Number(decl.value) - Number(startDecl.value) + "";
                    clonedDecl.value = value;
                } else return undefined;
            } else decl.warn(result, `Can not prefix ${decl.prop} (${startProp} is not found)`);
        }
        decl.cloneBefore(clonedDecl);
        return undefined;
    }
}
GridEnd.names = [
    "grid-row-end",
    "grid-column-end"
];
module.exports = GridEnd;

},{"2f2a0c9e35423c30":"eJRSt","4f783e63d3e1379":"j2sRV"}],"d89n7":[function(require,module,exports) {
let Declaration = require("bb1231c913fbb30f");
class Animation extends Declaration {
    /**
   * Don’t add prefixes for modern values.
   */ check(decl) {
        return !decl.value.split(/\s+/).some((i)=>{
            let lower = i.toLowerCase();
            return lower === "reverse" || lower === "alternate-reverse";
        });
    }
}
Animation.names = [
    "animation",
    "animation-direction"
];
module.exports = Animation;

},{"bb1231c913fbb30f":"eJRSt"}],"k7XCm":[function(require,module,exports) {
let flexSpec = require("b600b8cdbe9297c7");
let Declaration = require("929da8da3c8e219d");
class FlexFlow extends Declaration {
    /**
   * Use two properties for 2009 spec
   */ insert(decl, prefix, prefixes) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec !== 2009) return super.insert(decl, prefix, prefixes);
        let values = decl.value.split(/\s+/).filter((i)=>i !== "wrap" && i !== "nowrap" && "wrap-reverse");
        if (values.length === 0) return undefined;
        let already = decl.parent.some((i)=>i.prop === prefix + "box-orient" || i.prop === prefix + "box-direction");
        if (already) return undefined;
        let value = values[0];
        let orient = value.includes("row") ? "horizontal" : "vertical";
        let dir = value.includes("reverse") ? "reverse" : "normal";
        let cloned = this.clone(decl);
        cloned.prop = prefix + "box-orient";
        cloned.value = orient;
        if (this.needCascade(decl)) cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        decl.parent.insertBefore(decl, cloned);
        cloned = this.clone(decl);
        cloned.prop = prefix + "box-direction";
        cloned.value = dir;
        if (this.needCascade(decl)) cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        return decl.parent.insertBefore(decl, cloned);
    }
}
FlexFlow.names = [
    "flex-flow",
    "box-direction",
    "box-orient"
];
module.exports = FlexFlow;

},{"b600b8cdbe9297c7":"at1Im","929da8da3c8e219d":"eJRSt"}],"dOvfz":[function(require,module,exports) {
let flexSpec = require("e7daf33de4552635");
let Declaration = require("20ec425b586873cf");
class Flex extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "flex";
    }
    /**
   * Return flex property for 2009 and 2012 specs
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2009) return prefix + "box-flex";
        if (spec === 2012) return prefix + "flex-positive";
        return super.prefixed(prop, prefix);
    }
}
Flex.names = [
    "flex-grow",
    "flex-positive"
];
module.exports = Flex;

},{"e7daf33de4552635":"at1Im","20ec425b586873cf":"eJRSt"}],"anJJ4":[function(require,module,exports) {
let flexSpec = require("cb862a02397df743");
let Declaration = require("d72f399f7a59c1f2");
class FlexWrap extends Declaration {
    /**
   * Don't add prefix for 2009 spec
   */ set(decl, prefix) {
        let spec = flexSpec(prefix)[0];
        if (spec !== 2009) return super.set(decl, prefix);
        return undefined;
    }
}
FlexWrap.names = [
    "flex-wrap"
];
module.exports = FlexWrap;

},{"cb862a02397df743":"at1Im","d72f399f7a59c1f2":"eJRSt"}],"eSHPG":[function(require,module,exports) {
let Declaration = require("a7d1aed648e74cf0");
let utils = require("820151b2832e0efe");
class GridArea extends Declaration {
    /**
   * Translate grid-area to separate -ms- prefixed properties
   */ insert(decl, prefix, prefixes, result) {
        if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
        let values = utils.parse(decl);
        let [rowStart, rowSpan] = utils.translate(values, 0, 2);
        let [columnStart, columnSpan] = utils.translate(values, 1, 3);
        [
            [
                "grid-row",
                rowStart
            ],
            [
                "grid-row-span",
                rowSpan
            ],
            [
                "grid-column",
                columnStart
            ],
            [
                "grid-column-span",
                columnSpan
            ]
        ].forEach(([prop, value])=>{
            utils.insertDecl(decl, prop, value);
        });
        utils.warnTemplateSelectorNotFound(decl, result);
        utils.warnIfGridRowColumnExists(decl, result);
        return undefined;
    }
}
GridArea.names = [
    "grid-area"
];
module.exports = GridArea;

},{"a7d1aed648e74cf0":"eJRSt","820151b2832e0efe":"b4Ecd"}],"foJhB":[function(require,module,exports) {
let Declaration = require("76868ceddd9a6f7b");
let utils = require("de7533d24538c416");
class PlaceSelf extends Declaration {
    /**
   * Translate place-self to separate -ms- prefixed properties
   */ insert(decl, prefix, prefixes) {
        if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
        // prevent doubling of prefixes
        if (decl.parent.some((i)=>i.prop === "-ms-grid-row-align")) return undefined;
        let [[first, second]] = utils.parse(decl);
        if (second) {
            utils.insertDecl(decl, "grid-row-align", first);
            utils.insertDecl(decl, "grid-column-align", second);
        } else {
            utils.insertDecl(decl, "grid-row-align", first);
            utils.insertDecl(decl, "grid-column-align", first);
        }
        return undefined;
    }
}
PlaceSelf.names = [
    "place-self"
];
module.exports = PlaceSelf;

},{"76868ceddd9a6f7b":"eJRSt","de7533d24538c416":"b4Ecd"}],"i40p5":[function(require,module,exports) {
let Declaration = require("a5461a5f709f9704");
class GridStart extends Declaration {
    /**
   * Do not add prefix for unsupported value in IE
   */ check(decl) {
        let value = decl.value;
        return !value.includes("/") && !value.includes("span");
    }
    /**
   * Return a final spec property
   */ normalize(prop) {
        return prop.replace("-start", "");
    }
    /**
   * Change property name for IE
   */ prefixed(prop, prefix) {
        let result = super.prefixed(prop, prefix);
        if (prefix === "-ms-") result = result.replace("-start", "");
        return result;
    }
}
GridStart.names = [
    "grid-row-start",
    "grid-column-start"
];
module.exports = GridStart;

},{"a5461a5f709f9704":"eJRSt"}],"eXAFe":[function(require,module,exports) {
let flexSpec = require("495c0ef882b01f4c");
let Declaration = require("a2ba1d6ab4d7bd72");
class AlignSelf extends Declaration {
    check(decl) {
        return decl.parent && !decl.parent.some((i)=>{
            return i.prop && i.prop.startsWith("grid-");
        });
    }
    /**
   * Return property name by final spec
   */ normalize() {
        return "align-self";
    }
    /**
   * Change property name for 2012 specs
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012) return prefix + "flex-item-align";
        return super.prefixed(prop, prefix);
    }
    /**
   * Change value for 2012 spec and ignore prefix for 2009
   */ set(decl, prefix) {
        let spec = flexSpec(prefix)[0];
        if (spec === 2012) {
            decl.value = AlignSelf.oldValues[decl.value] || decl.value;
            return super.set(decl, prefix);
        }
        if (spec === "final") return super.set(decl, prefix);
        return undefined;
    }
}
AlignSelf.names = [
    "align-self",
    "flex-item-align"
];
AlignSelf.oldValues = {
    "flex-end": "end",
    "flex-start": "start"
};
module.exports = AlignSelf;

},{"495c0ef882b01f4c":"at1Im","a2ba1d6ab4d7bd72":"eJRSt"}],"9zbtj":[function(require,module,exports) {
let Declaration = require("fd82426aaefc8f8");
let utils = require("e78e498a65448c27");
class Appearance extends Declaration {
    constructor(name, prefixes, all){
        super(name, prefixes, all);
        if (this.prefixes) this.prefixes = utils.uniq(this.prefixes.map((i)=>{
            if (i === "-ms-") return "-webkit-";
            return i;
        }));
    }
}
Appearance.names = [
    "appearance"
];
module.exports = Appearance;

},{"fd82426aaefc8f8":"eJRSt","e78e498a65448c27":"j2sRV"}],"713c3":[function(require,module,exports) {
let flexSpec = require("ad6eb59125e251a9");
let Declaration = require("197405036555b1d6");
class FlexBasis extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "flex-basis";
    }
    /**
   * Return flex property for 2012 spec
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012) return prefix + "flex-preferred-size";
        return super.prefixed(prop, prefix);
    }
    /**
   * Ignore 2009 spec and use flex property for 2012
   */ set(decl, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012 || spec === "final") return super.set(decl, prefix);
        return undefined;
    }
}
FlexBasis.names = [
    "flex-basis",
    "flex-preferred-size"
];
module.exports = FlexBasis;

},{"ad6eb59125e251a9":"at1Im","197405036555b1d6":"eJRSt"}],"2cBxP":[function(require,module,exports) {
let Declaration = require("cddb25a1e60806fa");
class MaskBorder extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return this.name.replace("box-image", "border");
    }
    /**
   * Return flex property for 2012 spec
   */ prefixed(prop, prefix) {
        let result = super.prefixed(prop, prefix);
        if (prefix === "-webkit-") result = result.replace("border", "box-image");
        return result;
    }
}
MaskBorder.names = [
    "mask-border",
    "mask-border-source",
    "mask-border-slice",
    "mask-border-width",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-box-image",
    "mask-box-image-source",
    "mask-box-image-slice",
    "mask-box-image-width",
    "mask-box-image-outset",
    "mask-box-image-repeat"
];
module.exports = MaskBorder;

},{"cddb25a1e60806fa":"eJRSt"}],"lxxEp":[function(require,module,exports) {
let Declaration = require("b69f21d517abb1d4");
class MaskComposite extends Declaration {
    /**
   * Prefix mask-composite for webkit
   */ insert(decl, prefix, prefixes) {
        let isCompositeProp = decl.prop === "mask-composite";
        let compositeValues;
        if (isCompositeProp) compositeValues = decl.value.split(",");
        else compositeValues = decl.value.match(MaskComposite.regexp) || [];
        compositeValues = compositeValues.map((el)=>el.trim()).filter((el)=>el);
        let hasCompositeValues = compositeValues.length;
        let compositeDecl;
        if (hasCompositeValues) {
            compositeDecl = this.clone(decl);
            compositeDecl.value = compositeValues.map((value)=>MaskComposite.oldValues[value] || value).join(", ");
            if (compositeValues.includes("intersect")) compositeDecl.value += ", xor";
            compositeDecl.prop = prefix + "mask-composite";
        }
        if (isCompositeProp) {
            if (!hasCompositeValues) return undefined;
            if (this.needCascade(decl)) compositeDecl.raws.before = this.calcBefore(prefixes, decl, prefix);
            return decl.parent.insertBefore(decl, compositeDecl);
        }
        let cloned = this.clone(decl);
        cloned.prop = prefix + cloned.prop;
        if (hasCompositeValues) cloned.value = cloned.value.replace(MaskComposite.regexp, "");
        if (this.needCascade(decl)) cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        decl.parent.insertBefore(decl, cloned);
        if (!hasCompositeValues) return decl;
        if (this.needCascade(decl)) compositeDecl.raws.before = this.calcBefore(prefixes, decl, prefix);
        return decl.parent.insertBefore(decl, compositeDecl);
    }
}
MaskComposite.names = [
    "mask",
    "mask-composite"
];
MaskComposite.oldValues = {
    add: "source-over",
    exclude: "xor",
    intersect: "source-in",
    subtract: "source-out"
};
MaskComposite.regexp = new RegExp(`\\s+(${Object.keys(MaskComposite.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`, "ig");
module.exports = MaskComposite;

},{"b69f21d517abb1d4":"eJRSt"}],"hkwVN":[function(require,module,exports) {
let flexSpec = require("ef93c0b8c49e63da");
let Declaration = require("67f9a0a266a18893");
class AlignItems extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "align-items";
    }
    /**
   * Change property name for 2009 and 2012 specs
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2009) return prefix + "box-align";
        if (spec === 2012) return prefix + "flex-align";
        return super.prefixed(prop, prefix);
    }
    /**
   * Change value for 2009 and 2012 specs
   */ set(decl, prefix) {
        let spec = flexSpec(prefix)[0];
        if (spec === 2009 || spec === 2012) decl.value = AlignItems.oldValues[decl.value] || decl.value;
        return super.set(decl, prefix);
    }
}
AlignItems.names = [
    "align-items",
    "flex-align",
    "box-align"
];
AlignItems.oldValues = {
    "flex-end": "end",
    "flex-start": "start"
};
module.exports = AlignItems;

},{"ef93c0b8c49e63da":"at1Im","67f9a0a266a18893":"eJRSt"}],"hxScT":[function(require,module,exports) {
let Declaration = require("86db5a3d96187ef7");
class UserSelect extends Declaration {
    /**
   * Avoid prefixing all in IE
   */ insert(decl, prefix, prefixes) {
        if (decl.value === "all" && prefix === "-ms-") return undefined;
        else if (decl.value === "contain" && (prefix === "-moz-" || prefix === "-webkit-")) return undefined;
        else return super.insert(decl, prefix, prefixes);
    }
    /**
   * Change prefixed value for IE
   */ set(decl, prefix) {
        if (prefix === "-ms-" && decl.value === "contain") decl.value = "element";
        return super.set(decl, prefix);
    }
}
UserSelect.names = [
    "user-select"
];
module.exports = UserSelect;

},{"86db5a3d96187ef7":"eJRSt"}],"ifLgz":[function(require,module,exports) {
let flexSpec = require("967f473f5bcf4c77");
let Declaration = require("c0a485b04111246b");
class FlexShrink extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "flex-shrink";
    }
    /**
   * Return flex property for 2012 spec
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012) return prefix + "flex-negative";
        return super.prefixed(prop, prefix);
    }
    /**
   * Ignore 2009 spec and use flex property for 2012
   */ set(decl, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012 || spec === "final") return super.set(decl, prefix);
        return undefined;
    }
}
FlexShrink.names = [
    "flex-shrink",
    "flex-negative"
];
module.exports = FlexShrink;

},{"967f473f5bcf4c77":"at1Im","c0a485b04111246b":"eJRSt"}],"8Pghi":[function(require,module,exports) {
let Declaration = require("d0c78e00013bbc16");
class BreakProps extends Declaration {
    /**
   * Don’t prefix some values
   */ insert(decl, prefix, prefixes) {
        if (decl.prop !== "break-inside") return super.insert(decl, prefix, prefixes);
        if (/region/i.test(decl.value) || /page/i.test(decl.value)) return undefined;
        return super.insert(decl, prefix, prefixes);
    }
    /**
   * Return property name by final spec
   */ normalize(prop) {
        if (prop.includes("inside")) return "break-inside";
        if (prop.includes("before")) return "break-before";
        return "break-after";
    }
    /**
   * Change name for -webkit- and -moz- prefix
   */ prefixed(prop, prefix) {
        return `${prefix}column-${prop}`;
    }
    /**
   * Change prefixed value for avoid-column and avoid-page
   */ set(decl, prefix) {
        if (decl.prop === "break-inside" && decl.value === "avoid-column" || decl.value === "avoid-page") decl.value = "avoid";
        return super.set(decl, prefix);
    }
}
BreakProps.names = [
    "break-inside",
    "page-break-inside",
    "column-break-inside",
    "break-before",
    "page-break-before",
    "column-break-before",
    "break-after",
    "page-break-after",
    "column-break-after"
];
module.exports = BreakProps;

},{"d0c78e00013bbc16":"eJRSt"}],"5UHlb":[function(require,module,exports) {
let Declaration = require("6033483f3e4f469");
class WritingMode extends Declaration {
    insert(decl, prefix, prefixes) {
        if (prefix === "-ms-") {
            let cloned = this.set(this.clone(decl), prefix);
            if (this.needCascade(decl)) cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
            let direction = "ltr";
            decl.parent.nodes.forEach((i)=>{
                if (i.prop === "direction") {
                    if (i.value === "rtl" || i.value === "ltr") direction = i.value;
                }
            });
            cloned.value = WritingMode.msValues[direction][decl.value] || decl.value;
            return decl.parent.insertBefore(decl, cloned);
        }
        return super.insert(decl, prefix, prefixes);
    }
}
WritingMode.names = [
    "writing-mode"
];
WritingMode.msValues = {
    ltr: {
        "horizontal-tb": "lr-tb",
        "vertical-lr": "tb-lr",
        "vertical-rl": "tb-rl"
    },
    rtl: {
        "horizontal-tb": "rl-tb",
        "vertical-lr": "bt-lr",
        "vertical-rl": "bt-rl"
    }
};
module.exports = WritingMode;

},{"6033483f3e4f469":"eJRSt"}],"2AMig":[function(require,module,exports) {
let Declaration = require("6162b8916a667ec1");
class BorderImage extends Declaration {
    /**
   * Remove fill parameter for prefixed declarations
   */ set(decl, prefix) {
        decl.value = decl.value.replace(/\s+fill(\s)/, "$1");
        return super.set(decl, prefix);
    }
}
BorderImage.names = [
    "border-image"
];
module.exports = BorderImage;

},{"6162b8916a667ec1":"eJRSt"}],"ethY1":[function(require,module,exports) {
let flexSpec = require("7e1bc017c220287d");
let Declaration = require("49dee6c8be180c06");
class AlignContent extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "align-content";
    }
    /**
   * Change property name for 2012 spec
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012) return prefix + "flex-line-pack";
        return super.prefixed(prop, prefix);
    }
    /**
   * Change value for 2012 spec and ignore prefix for 2009
   */ set(decl, prefix) {
        let spec = flexSpec(prefix)[0];
        if (spec === 2012) {
            decl.value = AlignContent.oldValues[decl.value] || decl.value;
            return super.set(decl, prefix);
        }
        if (spec === "final") return super.set(decl, prefix);
        return undefined;
    }
}
AlignContent.names = [
    "align-content",
    "flex-line-pack"
];
AlignContent.oldValues = {
    "flex-end": "end",
    "flex-start": "start",
    "space-around": "distribute",
    "space-between": "justify"
};
module.exports = AlignContent;

},{"7e1bc017c220287d":"at1Im","49dee6c8be180c06":"eJRSt"}],"eopNU":[function(require,module,exports) {
let Declaration = require("3bb0b88b84f0108e");
class BorderRadius extends Declaration {
    /**
   * Return unprefixed version of property
   */ normalize(prop) {
        return BorderRadius.toNormal[prop] || prop;
    }
    /**
   * Change syntax, when add Mozilla prefix
   */ prefixed(prop, prefix) {
        if (prefix === "-moz-") return prefix + (BorderRadius.toMozilla[prop] || prop);
        return super.prefixed(prop, prefix);
    }
}
BorderRadius.names = [
    "border-radius"
];
BorderRadius.toMozilla = {};
BorderRadius.toNormal = {};
for (let ver of [
    "top",
    "bottom"
])for (let hor of [
    "left",
    "right"
]){
    let normal = `border-${ver}-${hor}-radius`;
    let mozilla = `border-radius-${ver}${hor}`;
    BorderRadius.names.push(normal);
    BorderRadius.names.push(mozilla);
    BorderRadius.toMozilla[normal] = mozilla;
    BorderRadius.toNormal[mozilla] = normal;
}
module.exports = BorderRadius;

},{"3bb0b88b84f0108e":"eJRSt"}],"2hr4f":[function(require,module,exports) {
let Declaration = require("306b771e4c822f78");
class BlockLogical extends Declaration {
    /**
   * Return property name by spec
   */ normalize(prop) {
        if (prop.includes("-before")) return prop.replace("-before", "-block-start");
        return prop.replace("-after", "-block-end");
    }
    /**
   * Use old syntax for -moz- and -webkit-
   */ prefixed(prop, prefix) {
        if (prop.includes("-start")) return prefix + prop.replace("-block-start", "-before");
        return prefix + prop.replace("-block-end", "-after");
    }
}
BlockLogical.names = [
    "border-block-start",
    "border-block-end",
    "margin-block-start",
    "margin-block-end",
    "padding-block-start",
    "padding-block-end",
    "border-before",
    "border-after",
    "margin-before",
    "margin-after",
    "padding-before",
    "padding-after"
];
module.exports = BlockLogical;

},{"306b771e4c822f78":"eJRSt"}],"eQved":[function(require,module,exports) {
let Declaration = require("a44c7701a93b58a6");
let { getGridGap, inheritGridGap, parseTemplate, warnGridGap, warnMissedAreas } = require("5a72b0d9a2ee7682");
class GridTemplate extends Declaration {
    /**
   * Translate grid-template to separate -ms- prefixed properties
   */ insert(decl, prefix, prefixes, result) {
        if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
        if (decl.parent.some((i)=>i.prop === "-ms-grid-rows")) return undefined;
        let gap = getGridGap(decl);
        /**
     * we must insert inherited gap values in some cases:
     * if we are inside media query && if we have no grid-gap value
     */ let inheritedGap = inheritGridGap(decl, gap);
        let { areas, columns, rows } = parseTemplate({
            decl,
            gap: inheritedGap || gap
        });
        let hasAreas = Object.keys(areas).length > 0;
        let hasRows = Boolean(rows);
        let hasColumns = Boolean(columns);
        warnGridGap({
            decl,
            gap,
            hasColumns,
            result
        });
        warnMissedAreas(areas, decl, result);
        if (hasRows && hasColumns || hasAreas) decl.cloneBefore({
            prop: "-ms-grid-rows",
            raws: {},
            value: rows
        });
        if (hasColumns) decl.cloneBefore({
            prop: "-ms-grid-columns",
            raws: {},
            value: columns
        });
        return decl;
    }
}
GridTemplate.names = [
    "grid-template"
];
module.exports = GridTemplate;

},{"a44c7701a93b58a6":"eJRSt","5a72b0d9a2ee7682":"b4Ecd"}],"4YDcH":[function(require,module,exports) {
let Declaration = require("83954edbf58fe815");
class InlineLogical extends Declaration {
    /**
   * Return property name by spec
   */ normalize(prop) {
        return prop.replace(/(margin|padding|border)-(start|end)/, "$1-inline-$2");
    }
    /**
   * Use old syntax for -moz- and -webkit-
   */ prefixed(prop, prefix) {
        return prefix + prop.replace("-inline", "");
    }
}
InlineLogical.names = [
    "border-inline-start",
    "border-inline-end",
    "margin-inline-start",
    "margin-inline-end",
    "padding-inline-start",
    "padding-inline-end",
    "border-start",
    "border-end",
    "margin-start",
    "margin-end",
    "padding-start",
    "padding-end"
];
module.exports = InlineLogical;

},{"83954edbf58fe815":"eJRSt"}],"b4Fjv":[function(require,module,exports) {
let Declaration = require("5a6354ba227ab442");
class GridRowAlign extends Declaration {
    /**
   * Do not prefix flexbox values
   */ check(decl) {
        return !decl.value.includes("flex-") && decl.value !== "baseline";
    }
    /**
   * Change IE property back
   */ normalize() {
        return "align-self";
    }
    /**
   * Change property name for IE
   */ prefixed(prop, prefix) {
        return prefix + "grid-row-align";
    }
}
GridRowAlign.names = [
    "grid-row-align"
];
module.exports = GridRowAlign;

},{"5a6354ba227ab442":"eJRSt"}],"8hBMV":[function(require,module,exports) {
let Declaration = require("a2bd2134dd1c248a");
class TransformDecl extends Declaration {
    /**
   * Is transform contain 3D commands
   */ contain3d(decl) {
        if (decl.prop === "transform-origin") return false;
        for (let func of TransformDecl.functions3d){
            if (decl.value.includes(`${func}(`)) return true;
        }
        return false;
    }
    /**
   * Don't add prefix for IE in keyframes
   */ insert(decl, prefix, prefixes) {
        if (prefix === "-ms-") {
            if (!this.contain3d(decl) && !this.keyframeParents(decl)) return super.insert(decl, prefix, prefixes);
        } else if (prefix === "-o-") {
            if (!this.contain3d(decl)) return super.insert(decl, prefix, prefixes);
        } else return super.insert(decl, prefix, prefixes);
        return undefined;
    }
    /**
   * Recursively check all parents for @keyframes
   */ keyframeParents(decl) {
        let { parent } = decl;
        while(parent){
            if (parent.type === "atrule" && parent.name === "keyframes") return true;
            ({ parent } = parent);
        }
        return false;
    }
    /**
   * Replace rotateZ to rotate for IE 9
   */ set(decl, prefix) {
        decl = super.set(decl, prefix);
        if (prefix === "-ms-") decl.value = decl.value.replace(/rotatez/gi, "rotate");
        return decl;
    }
}
TransformDecl.names = [
    "transform",
    "transform-origin"
];
TransformDecl.functions3d = [
    "matrix3d",
    "translate3d",
    "translateZ",
    "scale3d",
    "scaleZ",
    "rotate3d",
    "rotateX",
    "rotateY",
    "perspective"
];
module.exports = TransformDecl;

},{"a2bd2134dd1c248a":"eJRSt"}],"7AQT7":[function(require,module,exports) {
let flexSpec = require("c37a4ea7d3a89c64");
let Declaration = require("908718cc6d9e8247");
class FlexDirection extends Declaration {
    /**
   * Use two properties for 2009 spec
   */ insert(decl, prefix, prefixes) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec !== 2009) return super.insert(decl, prefix, prefixes);
        let already = decl.parent.some((i)=>i.prop === prefix + "box-orient" || i.prop === prefix + "box-direction");
        if (already) return undefined;
        let v = decl.value;
        let orient, dir;
        if (v === "inherit" || v === "initial" || v === "unset") {
            orient = v;
            dir = v;
        } else {
            orient = v.includes("row") ? "horizontal" : "vertical";
            dir = v.includes("reverse") ? "reverse" : "normal";
        }
        let cloned = this.clone(decl);
        cloned.prop = prefix + "box-orient";
        cloned.value = orient;
        if (this.needCascade(decl)) cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        decl.parent.insertBefore(decl, cloned);
        cloned = this.clone(decl);
        cloned.prop = prefix + "box-direction";
        cloned.value = dir;
        if (this.needCascade(decl)) cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        return decl.parent.insertBefore(decl, cloned);
    }
    /**
   * Return property name by final spec
   */ normalize() {
        return "flex-direction";
    }
    /**
   * Clean two properties for 2009 spec
   */ old(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2009) return [
            prefix + "box-orient",
            prefix + "box-direction"
        ];
        else return super.old(prop, prefix);
    }
}
FlexDirection.names = [
    "flex-direction",
    "box-direction",
    "box-orient"
];
module.exports = FlexDirection;

},{"c37a4ea7d3a89c64":"at1Im","908718cc6d9e8247":"eJRSt"}],"61pla":[function(require,module,exports) {
let Declaration = require("8162f9426a74fdb9");
class ImageRendering extends Declaration {
    /**
   * Add hack only for crisp-edges
   */ check(decl) {
        return decl.value === "pixelated";
    }
    /**
   * Return property name by spec
   */ normalize() {
        return "image-rendering";
    }
    /**
   * Change property name for IE
   */ prefixed(prop, prefix) {
        if (prefix === "-ms-") return "-ms-interpolation-mode";
        return super.prefixed(prop, prefix);
    }
    /**
   * Warn on old value
   */ process(node, result) {
        return super.process(node, result);
    }
    /**
   * Change property and value for IE
   */ set(decl, prefix) {
        if (prefix !== "-ms-") return super.set(decl, prefix);
        decl.prop = "-ms-interpolation-mode";
        decl.value = "nearest-neighbor";
        return decl;
    }
}
ImageRendering.names = [
    "image-rendering",
    "interpolation-mode"
];
module.exports = ImageRendering;

},{"8162f9426a74fdb9":"eJRSt"}],"ifsLa":[function(require,module,exports) {
let Declaration = require("4308144f33bd851f");
let utils = require("606955712459e6c2");
class BackdropFilter extends Declaration {
    constructor(name, prefixes, all){
        super(name, prefixes, all);
        if (this.prefixes) this.prefixes = utils.uniq(this.prefixes.map((i)=>{
            return i === "-ms-" ? "-webkit-" : i;
        }));
    }
}
BackdropFilter.names = [
    "backdrop-filter"
];
module.exports = BackdropFilter;

},{"4308144f33bd851f":"eJRSt","606955712459e6c2":"j2sRV"}],"cTKQe":[function(require,module,exports) {
let Declaration = require("53e72af4a24d9609");
let utils = require("bb3e4cc0032d4cba");
class BackgroundClip extends Declaration {
    constructor(name, prefixes, all){
        super(name, prefixes, all);
        if (this.prefixes) this.prefixes = utils.uniq(this.prefixes.map((i)=>{
            return i === "-ms-" ? "-webkit-" : i;
        }));
    }
    check(decl) {
        return decl.value.toLowerCase() === "text";
    }
}
BackgroundClip.names = [
    "background-clip"
];
module.exports = BackgroundClip;

},{"53e72af4a24d9609":"eJRSt","bb3e4cc0032d4cba":"j2sRV"}],"2iGjq":[function(require,module,exports) {
let Declaration = require("42b897d0086dc363");
const BASIC = [
    "none",
    "underline",
    "overline",
    "line-through",
    "blink",
    "inherit",
    "initial",
    "unset"
];
class TextDecoration extends Declaration {
    /**
   * Do not add prefixes for basic values.
   */ check(decl) {
        return decl.value.split(/\s+/).some((i)=>!BASIC.includes(i));
    }
}
TextDecoration.names = [
    "text-decoration"
];
module.exports = TextDecoration;

},{"42b897d0086dc363":"eJRSt"}],"120gd":[function(require,module,exports) {
let flexSpec = require("46b32d438eaf0564");
let Declaration = require("526d2e59cf7d19fa");
class JustifyContent extends Declaration {
    /**
   * Return property name by final spec
   */ normalize() {
        return "justify-content";
    }
    /**
   * Change property name for 2009 and 2012 specs
   */ prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2009) return prefix + "box-pack";
        if (spec === 2012) return prefix + "flex-pack";
        return super.prefixed(prop, prefix);
    }
    /**
   * Change value for 2009 and 2012 specs
   */ set(decl, prefix) {
        let spec = flexSpec(prefix)[0];
        if (spec === 2009 || spec === 2012) {
            let value = JustifyContent.oldValues[decl.value] || decl.value;
            decl.value = value;
            if (spec !== 2009 || value !== "distribute") return super.set(decl, prefix);
        } else if (spec === "final") return super.set(decl, prefix);
        return undefined;
    }
}
JustifyContent.names = [
    "justify-content",
    "flex-pack",
    "box-pack"
];
JustifyContent.oldValues = {
    "flex-end": "end",
    "flex-start": "start",
    "space-around": "distribute",
    "space-between": "justify"
};
module.exports = JustifyContent;

},{"46b32d438eaf0564":"at1Im","526d2e59cf7d19fa":"eJRSt"}],"bsqmB":[function(require,module,exports) {
let Declaration = require("56491ca57ba62a54");
class BackgroundSize extends Declaration {
    /**
   * Duplication parameter for -webkit- browsers
   */ set(decl, prefix) {
        let value = decl.value.toLowerCase();
        if (prefix === "-webkit-" && !value.includes(" ") && value !== "contain" && value !== "cover") decl.value = decl.value + " " + decl.value;
        return super.set(decl, prefix);
    }
}
BackgroundSize.names = [
    "background-size"
];
module.exports = BackgroundSize;

},{"56491ca57ba62a54":"eJRSt"}],"iKZkA":[function(require,module,exports) {
let Declaration = require("d9dadf4004f594fd");
let utils = require("ed4ba80f59ba8ebc");
class GridRowColumn extends Declaration {
    /**
   * Translate grid-row / grid-column to separate -ms- prefixed properties
   */ insert(decl, prefix, prefixes) {
        if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
        let values = utils.parse(decl);
        let [start, span] = utils.translate(values, 0, 1);
        let hasStartValueSpan = values[0] && values[0].includes("span");
        if (hasStartValueSpan) span = values[0].join("").replace(/\D/g, "");
        [
            [
                decl.prop,
                start
            ],
            [
                `${decl.prop}-span`,
                span
            ]
        ].forEach(([prop, value])=>{
            utils.insertDecl(decl, prop, value);
        });
        return undefined;
    }
}
GridRowColumn.names = [
    "grid-row",
    "grid-column"
];
module.exports = GridRowColumn;

},{"d9dadf4004f594fd":"eJRSt","ed4ba80f59ba8ebc":"b4Ecd"}],"7qdUR":[function(require,module,exports) {
let Declaration = require("72c28542ef06127c");
let { autoplaceGridItems, getGridGap, inheritGridGap, prefixTrackProp, prefixTrackValue } = require("db65b9ba652e6b25");
let Processor = require("2859ddd35fcc4bdb");
class GridRowsColumns extends Declaration {
    insert(decl, prefix, prefixes, result) {
        if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
        let { parent, prop, value } = decl;
        let isRowProp = prop.includes("rows");
        let isColumnProp = prop.includes("columns");
        let hasGridTemplate = parent.some((i)=>i.prop === "grid-template" || i.prop === "grid-template-areas");
        /**
     * Not to prefix rows declaration if grid-template(-areas) is present
     */ if (hasGridTemplate && isRowProp) return false;
        let processor = new Processor({
            options: {}
        });
        let status = processor.gridStatus(parent, result);
        let gap = getGridGap(decl);
        gap = inheritGridGap(decl, gap) || gap;
        let gapValue = isRowProp ? gap.row : gap.column;
        if ((status === "no-autoplace" || status === true) && !hasGridTemplate) gapValue = null;
        let prefixValue = prefixTrackValue({
            gap: gapValue,
            value
        });
        /**
     * Insert prefixes
     */ decl.cloneBefore({
            prop: prefixTrackProp({
                prefix,
                prop
            }),
            value: prefixValue
        });
        let autoflow = parent.nodes.find((i)=>i.prop === "grid-auto-flow");
        let autoflowValue = "row";
        if (autoflow && !processor.disabled(autoflow, result)) autoflowValue = autoflow.value.trim();
        if (status === "autoplace") {
            /**
       * Show warning if grid-template-rows decl is not found
       */ let rowDecl = parent.nodes.find((i)=>i.prop === "grid-template-rows");
            if (!rowDecl && hasGridTemplate) return undefined;
            else if (!rowDecl && !hasGridTemplate) {
                decl.warn(result, "Autoplacement does not work without grid-template-rows property");
                return undefined;
            }
            /**
       * Show warning if grid-template-columns decl is not found
       */ let columnDecl = parent.nodes.find((i)=>{
                return i.prop === "grid-template-columns";
            });
            if (!columnDecl && !hasGridTemplate) decl.warn(result, "Autoplacement does not work without grid-template-columns property");
            /**
       * Autoplace grid items
       */ if (isColumnProp && !hasGridTemplate) autoplaceGridItems(decl, result, gap, autoflowValue);
        }
        return undefined;
    }
    /**
   * Change IE property back
   */ normalize(prop) {
        return prop.replace(/^grid-(rows|columns)/, "grid-template-$1");
    }
    /**
   * Change property name for IE
   */ prefixed(prop, prefix) {
        if (prefix === "-ms-") return prefixTrackProp({
            prefix,
            prop
        });
        return super.prefixed(prop, prefix);
    }
}
GridRowsColumns.names = [
    "grid-template-rows",
    "grid-template-columns",
    "grid-rows",
    "grid-columns"
];
module.exports = GridRowsColumns;

},{"72c28542ef06127c":"eJRSt","db65b9ba652e6b25":"b4Ecd","2859ddd35fcc4bdb":"iYSwf"}],"1L0m2":[function(require,module,exports) {
let Declaration = require("fb77376d4189f29");
class GridColumnAlign extends Declaration {
    /**
   * Do not prefix flexbox values
   */ check(decl) {
        return !decl.value.includes("flex-") && decl.value !== "baseline";
    }
    /**
   * Change IE property back
   */ normalize() {
        return "justify-self";
    }
    /**
   * Change property name for IE
   */ prefixed(prop, prefix) {
        return prefix + "grid-column-align";
    }
}
GridColumnAlign.names = [
    "grid-column-align"
];
module.exports = GridColumnAlign;

},{"fb77376d4189f29":"eJRSt"}],"6vDh7":[function(require,module,exports) {
let Declaration = require("4f0bb197cd2f7034");
class PrintColorAdjust extends Declaration {
    /**
   * Return property name by spec
   */ normalize() {
        return "print-color-adjust";
    }
    /**
   * Change property name for WebKit-based browsers
   */ prefixed(prop, prefix) {
        if (prefix === "-moz-") return "color-adjust";
        else return prefix + "print-color-adjust";
    }
}
PrintColorAdjust.names = [
    "print-color-adjust",
    "color-adjust"
];
module.exports = PrintColorAdjust;

},{"4f0bb197cd2f7034":"eJRSt"}],"cCD0L":[function(require,module,exports) {
let Declaration = require("92c7011fd1a55ea1");
class OverscrollBehavior extends Declaration {
    /**
   * Return property name by spec
   */ normalize() {
        return "overscroll-behavior";
    }
    /**
   * Change property name for IE
   */ prefixed(prop, prefix) {
        return prefix + "scroll-chaining";
    }
    /**
   * Change value for IE
   */ set(decl, prefix) {
        if (decl.value === "auto") decl.value = "chained";
        else if (decl.value === "none" || decl.value === "contain") decl.value = "none";
        return super.set(decl, prefix);
    }
}
OverscrollBehavior.names = [
    "overscroll-behavior",
    "scroll-chaining"
];
module.exports = OverscrollBehavior;

},{"92c7011fd1a55ea1":"eJRSt"}],"l1eeB":[function(require,module,exports) {
let Declaration = require("de527bb646a7c989");
let { getGridGap, inheritGridGap, parseGridAreas, prefixTrackProp, prefixTrackValue, warnGridGap, warnMissedAreas } = require("4cf9315f32790ae2");
function getGridRows(tpl) {
    return tpl.trim().slice(1, -1).split(/["']\s*["']?/g);
}
class GridTemplateAreas extends Declaration {
    /**
   * Translate grid-template-areas to separate -ms- prefixed properties
   */ insert(decl, prefix, prefixes, result) {
        if (prefix !== "-ms-") return super.insert(decl, prefix, prefixes);
        let hasColumns = false;
        let hasRows = false;
        let parent = decl.parent;
        let gap = getGridGap(decl);
        gap = inheritGridGap(decl, gap) || gap;
        // remove already prefixed rows
        // to prevent doubling prefixes
        parent.walkDecls(/-ms-grid-rows/, (i)=>i.remove());
        // add empty tracks to rows
        parent.walkDecls(/grid-template-(rows|columns)/, (trackDecl)=>{
            if (trackDecl.prop === "grid-template-rows") {
                hasRows = true;
                let { prop, value } = trackDecl;
                trackDecl.cloneBefore({
                    prop: prefixTrackProp({
                        prefix,
                        prop
                    }),
                    value: prefixTrackValue({
                        gap: gap.row,
                        value
                    })
                });
            } else hasColumns = true;
        });
        let gridRows = getGridRows(decl.value);
        if (hasColumns && !hasRows && gap.row && gridRows.length > 1) decl.cloneBefore({
            prop: "-ms-grid-rows",
            raws: {},
            value: prefixTrackValue({
                gap: gap.row,
                value: `repeat(${gridRows.length}, auto)`
            })
        });
        // warnings
        warnGridGap({
            decl,
            gap,
            hasColumns,
            result
        });
        let areas = parseGridAreas({
            gap,
            rows: gridRows
        });
        warnMissedAreas(areas, decl, result);
        return decl;
    }
}
GridTemplateAreas.names = [
    "grid-template-areas"
];
module.exports = GridTemplateAreas;

},{"de527bb646a7c989":"eJRSt","4cf9315f32790ae2":"b4Ecd"}],"2288K":[function(require,module,exports) {
let Declaration = require("97e107f6174c7fd7");
class TextEmphasisPosition extends Declaration {
    set(decl, prefix) {
        if (prefix === "-webkit-") decl.value = decl.value.replace(/\s*(right|left)\s*/i, "");
        return super.set(decl, prefix);
    }
}
TextEmphasisPosition.names = [
    "text-emphasis-position"
];
module.exports = TextEmphasisPosition;

},{"97e107f6174c7fd7":"eJRSt"}],"i4nj3":[function(require,module,exports) {
let Declaration = require("c87a7703544ccd66");
class TextDecorationSkipInk extends Declaration {
    /**
   * Change prefix for ink value
   */ set(decl, prefix) {
        if (decl.prop === "text-decoration-skip-ink" && decl.value === "auto") {
            decl.prop = prefix + "text-decoration-skip";
            decl.value = "ink";
            return decl;
        } else return super.set(decl, prefix);
    }
}
TextDecorationSkipInk.names = [
    "text-decoration-skip-ink",
    "text-decoration-skip"
];
module.exports = TextDecorationSkipInk;

},{"c87a7703544ccd66":"eJRSt"}],"eKE95":[function(require,module,exports) {
let parser = require("634a7dd10d9e55c3");
let range = require("f5109df4f53c6475");
let OldValue = require("9b0943b25fc23ef0");
let Value = require("9d2c0798b451b05d");
let utils = require("5a483e3b19a5e325");
let IS_DIRECTION = /top|left|right|bottom/gi;
class Gradient extends Value {
    /**
   * Do not add non-webkit prefixes for list-style and object
   */ add(decl, prefix) {
        let p = decl.prop;
        if (p.includes("mask")) {
            if (prefix === "-webkit-" || prefix === "-webkit- old") return super.add(decl, prefix);
        } else if (p === "list-style" || p === "list-style-image" || p === "content") {
            if (prefix === "-webkit-" || prefix === "-webkit- old") return super.add(decl, prefix);
        } else return super.add(decl, prefix);
        return undefined;
    }
    /**
   * Get div token from exists parameters
   */ cloneDiv(params) {
        for (let i of params){
            if (i.type === "div" && i.value === ",") return i;
        }
        return {
            after: " ",
            type: "div",
            value: ","
        };
    }
    /**
   * Change colors syntax to old webkit
   */ colorStops(params) {
        let result = [];
        for(let i = 0; i < params.length; i++){
            let pos;
            let param = params[i];
            let item;
            if (i === 0) continue;
            let color = parser.stringify(param[0]);
            if (param[1] && param[1].type === "word") pos = param[1].value;
            else if (param[2] && param[2].type === "word") pos = param[2].value;
            let stop;
            if (i === 1 && (!pos || pos === "0%")) stop = `from(${color})`;
            else if (i === params.length - 1 && (!pos || pos === "100%")) stop = `to(${color})`;
            else if (pos) stop = `color-stop(${pos}, ${color})`;
            else stop = `color-stop(${color})`;
            let div = param[param.length - 1];
            params[i] = [
                {
                    type: "word",
                    value: stop
                }
            ];
            if (div.type === "div" && div.value === ",") item = params[i].push(div);
            result.push(item);
        }
        return result;
    }
    /**
   * Change new direction to old
   */ convertDirection(params) {
        if (params.length > 0) {
            if (params[0].value === "to") this.fixDirection(params);
            else if (params[0].value.includes("deg")) this.fixAngle(params);
            else if (this.isRadial(params)) this.fixRadial(params);
        }
        return params;
    }
    /**
   * Add 90 degrees
   */ fixAngle(params) {
        let first = params[0].value;
        first = parseFloat(first);
        first = Math.abs(450 - first) % 360;
        first = this.roundFloat(first, 3);
        params[0].value = `${first}deg`;
    }
    /**
   * Replace `to top left` to `bottom right`
   */ fixDirection(params) {
        params.splice(0, 2);
        for (let param of params){
            if (param.type === "div") break;
            if (param.type === "word") param.value = this.revertDirection(param.value);
        }
    }
    /**
   * Fix radial direction syntax
   */ fixRadial(params) {
        let first = [];
        let second = [];
        let a, b, c, i, next;
        for(i = 0; i < params.length - 2; i++){
            a = params[i];
            b = params[i + 1];
            c = params[i + 2];
            if (a.type === "space" && b.value === "at" && c.type === "space") {
                next = i + 3;
                break;
            } else first.push(a);
        }
        let div;
        for(i = next; i < params.length; i++)if (params[i].type === "div") {
            div = params[i];
            break;
        } else second.push(params[i]);
        params.splice(0, i, ...second, div, ...first);
    }
    /**
   * Look for at word
   */ isRadial(params) {
        let state = "before";
        for (let param of params){
            if (state === "before" && param.type === "space") state = "at";
            else if (state === "at" && param.value === "at") state = "after";
            else if (state === "after" && param.type === "space") return true;
            else if (param.type === "div") break;
            else state = "before";
        }
        return false;
    }
    /**
   * Replace old direction to new
   */ newDirection(params) {
        if (params[0].value === "to") return params;
        IS_DIRECTION.lastIndex = 0 // reset search index of global regexp
        ;
        if (!IS_DIRECTION.test(params[0].value)) return params;
        params.unshift({
            type: "word",
            value: "to"
        }, {
            type: "space",
            value: " "
        });
        for(let i = 2; i < params.length; i++){
            if (params[i].type === "div") break;
            if (params[i].type === "word") params[i].value = this.revertDirection(params[i].value);
        }
        return params;
    }
    /**
   * Normalize angle
   */ normalize(nodes, gradientName) {
        if (!nodes[0]) return nodes;
        if (/-?\d+(.\d+)?grad/.test(nodes[0].value)) nodes[0].value = this.normalizeUnit(nodes[0].value, 400);
        else if (/-?\d+(.\d+)?rad/.test(nodes[0].value)) nodes[0].value = this.normalizeUnit(nodes[0].value, 2 * Math.PI);
        else if (/-?\d+(.\d+)?turn/.test(nodes[0].value)) nodes[0].value = this.normalizeUnit(nodes[0].value, 1);
        else if (nodes[0].value.includes("deg")) {
            let num = parseFloat(nodes[0].value);
            num = range.wrap(0, 360, num);
            nodes[0].value = `${num}deg`;
        }
        if (gradientName === "linear-gradient" || gradientName === "repeating-linear-gradient") {
            let direction = nodes[0].value;
            // Unitless zero for `<angle>` values are allowed in CSS gradients and transforms.
            // Spec: https://github.com/w3c/csswg-drafts/commit/602789171429b2231223ab1e5acf8f7f11652eb3
            if (direction === "0deg" || direction === "0") nodes = this.replaceFirst(nodes, "to", " ", "top");
            else if (direction === "90deg") nodes = this.replaceFirst(nodes, "to", " ", "right");
            else if (direction === "180deg") nodes = this.replaceFirst(nodes, "to", " ", "bottom") // default value
            ;
            else if (direction === "270deg") nodes = this.replaceFirst(nodes, "to", " ", "left");
        }
        return nodes;
    }
    /**
   * Convert angle unit to deg
   */ normalizeUnit(str, full) {
        let num = parseFloat(str);
        let deg = num / full * 360;
        return `${deg}deg`;
    }
    /**
   * Remove old WebKit gradient too
   */ old(prefix) {
        if (prefix === "-webkit-") {
            let type;
            if (this.name === "linear-gradient") type = "linear";
            else if (this.name === "repeating-linear-gradient") type = "repeating-linear";
            else if (this.name === "repeating-radial-gradient") type = "repeating-radial";
            else type = "radial";
            let string = "-gradient";
            let regexp = utils.regexp(`-webkit-(${type}-gradient|gradient\\(\\s*${type})`, false);
            return new OldValue(this.name, prefix + this.name, string, regexp);
        } else return super.old(prefix);
    }
    /**
   * Change direction syntax to old webkit
   */ oldDirection(params) {
        let div = this.cloneDiv(params[0]);
        if (params[0][0].value !== "to") return params.unshift([
            {
                type: "word",
                value: Gradient.oldDirections.bottom
            },
            div
        ]);
        else {
            let words = [];
            for (let node of params[0].slice(2))if (node.type === "word") words.push(node.value.toLowerCase());
            words = words.join(" ");
            let old = Gradient.oldDirections[words] || words;
            params[0] = [
                {
                    type: "word",
                    value: old
                },
                div
            ];
            return params[0];
        }
    }
    /**
   * Convert to old webkit syntax
   */ oldWebkit(node) {
        let { nodes } = node;
        let string = parser.stringify(node.nodes);
        if (this.name !== "linear-gradient") return false;
        if (nodes[0] && nodes[0].value.includes("deg")) return false;
        if (string.includes("px") || string.includes("-corner") || string.includes("-side")) return false;
        let params = [
            []
        ];
        for (let i of nodes){
            params[params.length - 1].push(i);
            if (i.type === "div" && i.value === ",") params.push([]);
        }
        this.oldDirection(params);
        this.colorStops(params);
        node.nodes = [];
        for (let param of params)node.nodes = node.nodes.concat(param);
        node.nodes.unshift({
            type: "word",
            value: "linear"
        }, this.cloneDiv(node.nodes));
        node.value = "-webkit-gradient";
        return true;
    }
    /**
   * Change degrees for webkit prefix
   */ replace(string, prefix) {
        let ast = parser(string);
        for (let node of ast.nodes){
            let gradientName = this.name // gradient name
            ;
            if (node.type === "function" && node.value === gradientName) {
                node.nodes = this.newDirection(node.nodes);
                node.nodes = this.normalize(node.nodes, gradientName);
                if (prefix === "-webkit- old") {
                    let changes = this.oldWebkit(node);
                    if (!changes) return false;
                } else {
                    node.nodes = this.convertDirection(node.nodes);
                    node.value = prefix + node.value;
                }
            }
        }
        return ast.toString();
    }
    /**
   * Replace first token
   */ replaceFirst(params, ...words) {
        let prefix = words.map((i)=>{
            if (i === " ") return {
                type: "space",
                value: i
            };
            return {
                type: "word",
                value: i
            };
        });
        return prefix.concat(params.slice(1));
    }
    revertDirection(word) {
        return Gradient.directions[word.toLowerCase()] || word;
    }
    /**
   * Round float and save digits under dot
   */ roundFloat(float, digits) {
        return parseFloat(float.toFixed(digits));
    }
}
Gradient.names = [
    "linear-gradient",
    "repeating-linear-gradient",
    "radial-gradient",
    "repeating-radial-gradient"
];
Gradient.directions = {
    bottom: "top",
    left: "right",
    right: "left",
    top: "bottom" // default value
};
// Direction to replace
Gradient.oldDirections = {
    "bottom": "left top, left bottom",
    "bottom left": "right top, left bottom",
    "bottom right": "left top, right bottom",
    "left": "right top, left top",
    "left bottom": "right top, left bottom",
    "left top": "right bottom, left top",
    "right": "left top, right top",
    "right bottom": "left top, right bottom",
    "right top": "left bottom, right top",
    "top": "left bottom, left top",
    "top left": "right bottom, left top",
    "top right": "left bottom, right top"
};
module.exports = Gradient;

},{"634a7dd10d9e55c3":"blMr1","f5109df4f53c6475":"gBkXT","9b0943b25fc23ef0":"9k0Aa","9d2c0798b451b05d":"i2bKe","5a483e3b19a5e325":"j2sRV"}],"gBkXT":[function(require,module,exports) {
"use strict";
module.exports = {
    wrap: wrapRange,
    limit: limitRange,
    validate: validateRange,
    test: testRange,
    curry: curry,
    name: name
};
function wrapRange(min, max, value) {
    var maxLessMin = max - min;
    return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min;
}
function limitRange(min, max, value) {
    return Math.max(min, Math.min(max, value));
}
function validateRange(min, max, value, minExclusive, maxExclusive) {
    if (!testRange(min, max, value, minExclusive, maxExclusive)) throw new Error(value + " is outside of range [" + min + "," + max + ")");
    return value;
}
function testRange(min, max, value, minExclusive, maxExclusive) {
    return !(value < min || value > max || maxExclusive && value === max || minExclusive && value === min);
}
function name(min, max, minExcl, maxExcl) {
    return (minExcl ? "(" : "[") + min + "," + max + (maxExcl ? ")" : "]");
}
function curry(min, max, minExclusive, maxExclusive) {
    var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive);
    return {
        wrap: wrapRange.bind(null, min, max),
        limit: limitRange.bind(null, min, max),
        validate: function(value) {
            return validateRange(min, max, value, minExclusive, maxExclusive);
        },
        test: function(value) {
            return testRange(min, max, value, minExclusive, maxExclusive);
        },
        toString: boundNameFn,
        name: boundNameFn
    };
}

},{}],"82TVI":[function(require,module,exports) {
let OldValue = require("6f8bea42189aacad");
let Value = require("d79a8af6fc94e4f1");
function regexp(name) {
    return new RegExp(`(^|[\\s,(])(${name}($|[\\s),]))`, "gi");
}
class Intrinsic extends Value {
    add(decl, prefix) {
        if (decl.prop.includes("grid") && prefix !== "-webkit-") return undefined;
        return super.add(decl, prefix);
    }
    isStretch() {
        return this.name === "stretch" || this.name === "fill" || this.name === "fill-available";
    }
    old(prefix) {
        let prefixed = prefix + this.name;
        if (this.isStretch()) {
            if (prefix === "-moz-") prefixed = "-moz-available";
            else if (prefix === "-webkit-") prefixed = "-webkit-fill-available";
        }
        return new OldValue(this.name, prefixed, prefixed, regexp(prefixed));
    }
    regexp() {
        if (!this.regexpCache) this.regexpCache = regexp(this.name);
        return this.regexpCache;
    }
    replace(string, prefix) {
        if (prefix === "-moz-" && this.isStretch()) return string.replace(this.regexp(), "$1-moz-available$3");
        if (prefix === "-webkit-" && this.isStretch()) return string.replace(this.regexp(), "$1-webkit-fill-available$3");
        return super.replace(string, prefix);
    }
}
Intrinsic.names = [
    "max-content",
    "min-content",
    "fit-content",
    "fill",
    "fill-available",
    "stretch"
];
module.exports = Intrinsic;

},{"6f8bea42189aacad":"9k0Aa","d79a8af6fc94e4f1":"i2bKe"}],"6JN8P":[function(require,module,exports) {
let OldValue = require("e9fe6bcf3f89d667");
let Value = require("b966cdcd5dd13899");
class Pixelated extends Value {
    /**
   * Different name for WebKit and Firefox
   */ old(prefix) {
        if (prefix === "-webkit-") return new OldValue(this.name, "-webkit-optimize-contrast");
        if (prefix === "-moz-") return new OldValue(this.name, "-moz-crisp-edges");
        return super.old(prefix);
    }
    /**
   * Use non-standard name for WebKit and Firefox
   */ replace(string, prefix) {
        if (prefix === "-webkit-") return string.replace(this.regexp(), "$1-webkit-optimize-contrast");
        if (prefix === "-moz-") return string.replace(this.regexp(), "$1-moz-crisp-edges");
        return super.replace(string, prefix);
    }
}
Pixelated.names = [
    "pixelated"
];
module.exports = Pixelated;

},{"e9fe6bcf3f89d667":"9k0Aa","b966cdcd5dd13899":"i2bKe"}],"22xbR":[function(require,module,exports) {
let Value = require("d35f757602144894");
class ImageSet extends Value {
    /**
   * Use non-standard name for WebKit and Firefox
   */ replace(string, prefix) {
        let fixed = super.replace(string, prefix);
        if (prefix === "-webkit-") fixed = fixed.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, "url($1)$2");
        return fixed;
    }
}
ImageSet.names = [
    "image-set"
];
module.exports = ImageSet;

},{"d35f757602144894":"i2bKe"}],"6PHL0":[function(require,module,exports) {
let list = require("9a58da467ae94979").list;
let Value = require("fb7e453ae2c98742");
class CrossFade extends Value {
    replace(string, prefix) {
        return list.space(string).map((value)=>{
            if (value.slice(0, +this.name.length + 1) !== this.name + "(") return value;
            let close = value.lastIndexOf(")");
            let after = value.slice(close + 1);
            let args = value.slice(this.name.length + 1, close);
            if (prefix === "-webkit-") {
                let match = args.match(/\d*.?\d+%?/);
                if (match) {
                    args = args.slice(match[0].length).trim();
                    args += `, ${match[0]}`;
                } else args += ", 0.5";
            }
            return prefix + this.name + "(" + args + ")" + after;
        }).join(" ");
    }
}
CrossFade.names = [
    "cross-fade"
];
module.exports = CrossFade;

},{"9a58da467ae94979":"gauyy","fb7e453ae2c98742":"i2bKe"}],"jbk0I":[function(require,module,exports) {
let flexSpec = require("3d17f9adf5f97543");
let OldValue = require("e2de4a2234cad15c");
let Value = require("a6017105b56c1b15");
class DisplayFlex extends Value {
    constructor(name, prefixes){
        super(name, prefixes);
        if (name === "display-flex") this.name = "flex";
    }
    /**
   * Faster check for flex value
   */ check(decl) {
        return decl.prop === "display" && decl.value === this.name;
    }
    /**
   * Change value for old specs
   */ old(prefix) {
        let prefixed = this.prefixed(prefix);
        if (!prefixed) return undefined;
        return new OldValue(this.name, prefixed);
    }
    /**
   * Return value by spec
   */ prefixed(prefix) {
        let spec, value;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2009) {
            if (this.name === "flex") value = "box";
            else value = "inline-box";
        } else if (spec === 2012) {
            if (this.name === "flex") value = "flexbox";
            else value = "inline-flexbox";
        } else if (spec === "final") value = this.name;
        return prefix + value;
    }
    /**
   * Add prefix to value depend on flebox spec version
   */ replace(string, prefix) {
        return this.prefixed(prefix);
    }
}
DisplayFlex.names = [
    "display-flex",
    "inline-flex"
];
module.exports = DisplayFlex;

},{"3d17f9adf5f97543":"at1Im","e2de4a2234cad15c":"9k0Aa","a6017105b56c1b15":"i2bKe"}],"mUeq2":[function(require,module,exports) {
let Value = require("7501467e58d8c3f4");
class DisplayGrid extends Value {
    constructor(name, prefixes){
        super(name, prefixes);
        if (name === "display-grid") this.name = "grid";
    }
    /**
   * Faster check for flex value
   */ check(decl) {
        return decl.prop === "display" && decl.value === this.name;
    }
}
DisplayGrid.names = [
    "display-grid",
    "inline-grid"
];
module.exports = DisplayGrid;

},{"7501467e58d8c3f4":"i2bKe"}],"c8hJ9":[function(require,module,exports) {
let Value = require("9b2b79fdf3381432");
class FilterValue extends Value {
    constructor(name, prefixes){
        super(name, prefixes);
        if (name === "filter-function") this.name = "filter";
    }
}
FilterValue.names = [
    "filter",
    "filter-function"
];
module.exports = FilterValue;

},{"9b2b79fdf3381432":"i2bKe"}],"kD0Tm":[function(require,module,exports) {
let Selector = require("71e9ff1a5ee9577f");
let utils = require("c3c2cad72fb44f18");
class Autofill extends Selector {
    constructor(name, prefixes, all){
        super(name, prefixes, all);
        if (this.prefixes) this.prefixes = utils.uniq(this.prefixes.map(()=>"-webkit-"));
    }
    /**
   * Return different selectors depend on prefix
   */ prefixed(prefix) {
        if (prefix === "-webkit-") return ":-webkit-autofill";
        return `:${prefix}autofill`;
    }
}
Autofill.names = [
    ":autofill"
];
module.exports = Autofill;

},{"71e9ff1a5ee9577f":"lFkyP","c3c2cad72fb44f18":"j2sRV"}],"eWph3":[function(require,module,exports) {
let unpack = require("99a19e28a61129e2");
function browsersSort(a, b) {
    a = a.split(" ");
    b = b.split(" ");
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else return Math.sign(parseFloat(a[1]) - parseFloat(b[1]));
}
// Convert Can I Use data
function f(data, opts, callback) {
    data = unpack(data);
    if (!callback) [callback, opts] = [
        opts,
        {}
    ];
    let match = opts.match || /\sx($|\s)/;
    let need = [];
    for(let browser in data.stats){
        let versions = data.stats[browser];
        for(let version in versions){
            let support = versions[version];
            if (support.match(match)) need.push(browser + " " + version);
        }
    }
    callback(need.sort(browsersSort));
}
// Add data for all properties
let result = {};
function prefix(names, data) {
    for (let name of names)result[name] = Object.assign({}, data);
}
function add(names, data) {
    for (let name of names)result[name].browsers = result[name].browsers.concat(data.browsers).sort(browsersSort);
}
module.exports = result;
// Border Radius
let prefixBorderRadius = require("b035850e458a350c");
f(prefixBorderRadius, (browsers)=>prefix([
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius"
    ], {
        browsers,
        feature: "border-radius",
        mistakes: [
            "-khtml-",
            "-ms-",
            "-o-"
        ]
    }));
// Box Shadow
let prefixBoxshadow = require("e39d14bc5293b3f4");
f(prefixBoxshadow, (browsers)=>prefix([
        "box-shadow"
    ], {
        browsers,
        feature: "css-boxshadow",
        mistakes: [
            "-khtml-"
        ]
    }));
// Animation
let prefixAnimation = require("b3bd29e205d34453");
f(prefixAnimation, (browsers)=>prefix([
        "animation",
        "animation-name",
        "animation-duration",
        "animation-delay",
        "animation-direction",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-play-state",
        "animation-timing-function",
        "@keyframes"
    ], {
        browsers,
        feature: "css-animation",
        mistakes: [
            "-khtml-",
            "-ms-"
        ]
    }));
// Transition
let prefixTransition = require("2999dd7f2e63ef13");
f(prefixTransition, (browsers)=>prefix([
        "transition",
        "transition-property",
        "transition-duration",
        "transition-delay",
        "transition-timing-function"
    ], {
        browsers,
        feature: "css-transitions",
        mistakes: [
            "-khtml-",
            "-ms-"
        ]
    }));
// Transform 2D
let prefixTransform2d = require("286c0b408df5d1be");
f(prefixTransform2d, (browsers)=>prefix([
        "transform",
        "transform-origin"
    ], {
        browsers,
        feature: "transforms2d"
    }));
// Transform 3D
let prefixTransforms3d = require("569b1488407ec85a");
f(prefixTransforms3d, (browsers)=>{
    prefix([
        "perspective",
        "perspective-origin"
    ], {
        browsers,
        feature: "transforms3d"
    });
    return prefix([
        "transform-style"
    ], {
        browsers,
        feature: "transforms3d",
        mistakes: [
            "-ms-",
            "-o-"
        ]
    });
});
f(prefixTransforms3d, {
    match: /y\sx|y\s#2/
}, (browsers)=>prefix([
        "backface-visibility"
    ], {
        browsers,
        feature: "transforms3d",
        mistakes: [
            "-ms-",
            "-o-"
        ]
    }));
// Gradients
let prefixGradients = require("df57827c6269a176");
f(prefixGradients, {
    match: /y\sx/
}, (browsers)=>prefix([
        "linear-gradient",
        "repeating-linear-gradient",
        "radial-gradient",
        "repeating-radial-gradient"
    ], {
        browsers,
        feature: "css-gradients",
        mistakes: [
            "-ms-"
        ],
        props: [
            "background",
            "background-image",
            "border-image",
            "mask",
            "list-style",
            "list-style-image",
            "content",
            "mask-image"
        ]
    }));
f(prefixGradients, {
    match: /a\sx/
}, (browsers)=>{
    browsers = browsers.map((i)=>{
        if (/firefox|op/.test(i)) return i;
        else return `${i} old`;
    });
    return add([
        "linear-gradient",
        "repeating-linear-gradient",
        "radial-gradient",
        "repeating-radial-gradient"
    ], {
        browsers,
        feature: "css-gradients"
    });
});
// Box sizing
let prefixBoxsizing = require("1987114b97aa6b95");
f(prefixBoxsizing, (browsers)=>prefix([
        "box-sizing"
    ], {
        browsers,
        feature: "css3-boxsizing"
    }));
// Filter Effects
let prefixFilters = require("61b67130255aa4ea");
f(prefixFilters, (browsers)=>prefix([
        "filter"
    ], {
        browsers,
        feature: "css-filters"
    }));
// filter() function
let prefixFilterFunction = require("2f20eb8138b9c801");
f(prefixFilterFunction, (browsers)=>prefix([
        "filter-function"
    ], {
        browsers,
        feature: "css-filter-function",
        props: [
            "background",
            "background-image",
            "border-image",
            "mask",
            "list-style",
            "list-style-image",
            "content",
            "mask-image"
        ]
    }));
// Backdrop-filter
let prefixBackdropFilter = require("cc477886a5d970b5");
f(prefixBackdropFilter, {
    match: /y\sx|y\s#2/
}, (browsers)=>prefix([
        "backdrop-filter"
    ], {
        browsers,
        feature: "css-backdrop-filter"
    }));
// element() function
let prefixElementFunction = require("7de45ce5d22a4304");
f(prefixElementFunction, (browsers)=>prefix([
        "element"
    ], {
        browsers,
        feature: "css-element-function",
        props: [
            "background",
            "background-image",
            "border-image",
            "mask",
            "list-style",
            "list-style-image",
            "content",
            "mask-image"
        ]
    }));
// Multicolumns
let prefixMulticolumns = require("8ed2b1efa9d7d9c8");
f(prefixMulticolumns, (browsers)=>{
    prefix([
        "columns",
        "column-width",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-width",
        "column-count",
        "column-rule-style",
        "column-span",
        "column-fill"
    ], {
        browsers,
        feature: "multicolumn"
    });
    let noff = browsers.filter((i)=>!/firefox/.test(i));
    prefix([
        "break-before",
        "break-after",
        "break-inside"
    ], {
        browsers: noff,
        feature: "multicolumn"
    });
});
// User select
let prefixUserSelect = require("fee73e0db9e79125");
f(prefixUserSelect, (browsers)=>prefix([
        "user-select"
    ], {
        browsers,
        feature: "user-select-none",
        mistakes: [
            "-khtml-"
        ]
    }));
// Flexible Box Layout
let prefixFlexbox = require("39a07feee3fd7566");
f(prefixFlexbox, {
    match: /a\sx/
}, (browsers)=>{
    browsers = browsers.map((i)=>{
        if (/ie|firefox/.test(i)) return i;
        else return `${i} 2009`;
    });
    prefix([
        "display-flex",
        "inline-flex"
    ], {
        browsers,
        feature: "flexbox",
        props: [
            "display"
        ]
    });
    prefix([
        "flex",
        "flex-grow",
        "flex-shrink",
        "flex-basis"
    ], {
        browsers,
        feature: "flexbox"
    });
    prefix([
        "flex-direction",
        "flex-wrap",
        "flex-flow",
        "justify-content",
        "order",
        "align-items",
        "align-self",
        "align-content"
    ], {
        browsers,
        feature: "flexbox"
    });
});
f(prefixFlexbox, {
    match: /y\sx/
}, (browsers)=>{
    add([
        "display-flex",
        "inline-flex"
    ], {
        browsers,
        feature: "flexbox"
    });
    add([
        "flex",
        "flex-grow",
        "flex-shrink",
        "flex-basis"
    ], {
        browsers,
        feature: "flexbox"
    });
    add([
        "flex-direction",
        "flex-wrap",
        "flex-flow",
        "justify-content",
        "order",
        "align-items",
        "align-self",
        "align-content"
    ], {
        browsers,
        feature: "flexbox"
    });
});
// calc() unit
let prefixCalc = require("c8f9dab3ca36028e");
f(prefixCalc, (browsers)=>prefix([
        "calc"
    ], {
        browsers,
        feature: "calc",
        props: [
            "*"
        ]
    }));
// Background options
let prefixBackgroundOptions = require("89838ba3eb709d68");
f(prefixBackgroundOptions, (browsers)=>prefix([
        "background-origin",
        "background-size"
    ], {
        browsers,
        feature: "background-img-opts"
    }));
// background-clip: text
let prefixBackgroundClipText = require("abe67a58efc73ba0");
f(prefixBackgroundClipText, (browsers)=>prefix([
        "background-clip"
    ], {
        browsers,
        feature: "background-clip-text"
    }));
// Font feature settings
let prefixFontFeature = require("f053ca332c55774b");
f(prefixFontFeature, (browsers)=>prefix([
        "font-feature-settings",
        "font-variant-ligatures",
        "font-language-override"
    ], {
        browsers,
        feature: "font-feature"
    }));
// CSS font-kerning property
let prefixFontKerning = require("ad30601cfae1c0c3");
f(prefixFontKerning, (browsers)=>prefix([
        "font-kerning"
    ], {
        browsers,
        feature: "font-kerning"
    }));
// Border image
let prefixBorderImage = require("976cbd312ec5e6c8");
f(prefixBorderImage, (browsers)=>prefix([
        "border-image"
    ], {
        browsers,
        feature: "border-image"
    }));
// Selection selector
let prefixSelection = require("8e83a905b768c399");
f(prefixSelection, (browsers)=>prefix([
        "::selection"
    ], {
        browsers,
        feature: "css-selection",
        selector: true
    }));
// Placeholder selector
let prefixPlaceholder = require("34efdb36ecfe42a7");
f(prefixPlaceholder, (browsers)=>{
    prefix([
        "::placeholder"
    ], {
        browsers: browsers.concat([
            "ie 10 old",
            "ie 11 old",
            "firefox 18 old"
        ]),
        feature: "css-placeholder",
        selector: true
    });
});
// Placeholder-shown selector
let prefixPlaceholderShown = require("c15979c26d40d357");
f(prefixPlaceholderShown, (browsers)=>{
    prefix([
        ":placeholder-shown"
    ], {
        browsers,
        feature: "css-placeholder-shown",
        selector: true
    });
});
// Hyphenation
let prefixHyphens = require("61b293a3af841ae5");
f(prefixHyphens, (browsers)=>prefix([
        "hyphens"
    ], {
        browsers,
        feature: "css-hyphens"
    }));
// Fullscreen selector
let prefixFullscreen = require("a0d58f3fcb9086f0");
f(prefixFullscreen, (browsers)=>prefix([
        ":fullscreen"
    ], {
        browsers,
        feature: "fullscreen",
        selector: true
    }));
// ::backdrop pseudo-element
// https://caniuse.com/mdn-css_selectors_backdrop
let prefixBackdrop = require("702e718d85c398ee");
f(prefixBackdrop, (browsers)=>prefix([
        "::backdrop"
    ], {
        browsers,
        feature: "backdrop",
        selector: true
    }));
// File selector button
let prefixFileSelectorButton = require("8fec301951787a84");
f(prefixFileSelectorButton, (browsers)=>prefix([
        "::file-selector-button"
    ], {
        browsers,
        feature: "file-selector-button",
        selector: true
    }));
// :autofill
let prefixAutofill = require("e2e07ab159ea14f7");
f(prefixAutofill, (browsers)=>prefix([
        ":autofill"
    ], {
        browsers,
        feature: "css-autofill",
        selector: true
    }));
// Tab size
let prefixTabsize = require("2028e463c58bcc62");
f(prefixTabsize, (browsers)=>prefix([
        "tab-size"
    ], {
        browsers,
        feature: "css3-tabsize"
    }));
// Intrinsic & extrinsic sizing
let prefixIntrinsic = require("1c4f8fd2ebe9e25c");
let sizeProps = [
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height",
    "inline-size",
    "min-inline-size",
    "max-inline-size",
    "block-size",
    "min-block-size",
    "max-block-size",
    "grid",
    "grid-template",
    "grid-template-rows",
    "grid-template-columns",
    "grid-auto-columns",
    "grid-auto-rows"
];
f(prefixIntrinsic, (browsers)=>prefix([
        "max-content",
        "min-content"
    ], {
        browsers,
        feature: "intrinsic-width",
        props: sizeProps
    }));
f(prefixIntrinsic, {
    match: /x|\s#4/
}, (browsers)=>prefix([
        "fill",
        "fill-available"
    ], {
        browsers,
        feature: "intrinsic-width",
        props: sizeProps
    }));
f(prefixIntrinsic, {
    match: /x|\s#5/
}, (browsers)=>prefix([
        "fit-content"
    ], {
        browsers,
        feature: "intrinsic-width",
        props: sizeProps
    }));
// Stretch value
let prefixStretch = require("bc6113b3669f374b");
f(prefixStretch, (browsers)=>prefix([
        "stretch"
    ], {
        browsers,
        feature: "css-width-stretch",
        props: sizeProps
    }));
// Zoom cursors
let prefixCursorsNewer = require("dd6e7f745f59223f");
f(prefixCursorsNewer, (browsers)=>prefix([
        "zoom-in",
        "zoom-out"
    ], {
        browsers,
        feature: "css3-cursors-newer",
        props: [
            "cursor"
        ]
    }));
// Grab cursors
let prefixCursorsGrab = require("7023784dae640551");
f(prefixCursorsGrab, (browsers)=>prefix([
        "grab",
        "grabbing"
    ], {
        browsers,
        feature: "css3-cursors-grab",
        props: [
            "cursor"
        ]
    }));
// Sticky position
let prefixSticky = require("80f4eb961089e3f5");
f(prefixSticky, (browsers)=>prefix([
        "sticky"
    ], {
        browsers,
        feature: "css-sticky",
        props: [
            "position"
        ]
    }));
// Pointer Events
let prefixPointer = require("3a4fe6f8cb485bb5");
f(prefixPointer, (browsers)=>prefix([
        "touch-action"
    ], {
        browsers,
        feature: "pointer"
    }));
// Text decoration
let prefixDecoration = require("b734329c6641bc96");
f(prefixDecoration, {
    match: /x.*#[235]/
}, (browsers)=>prefix([
        "text-decoration-skip",
        "text-decoration-skip-ink"
    ], {
        browsers,
        feature: "text-decoration"
    }));
let prefixDecorationShorthand = require("33ee6e27203bc25b");
f(prefixDecorationShorthand, (browsers)=>prefix([
        "text-decoration"
    ], {
        browsers,
        feature: "text-decoration"
    }));
let prefixDecorationColor = require("e22cfb39aaa80187");
f(prefixDecorationColor, (browsers)=>prefix([
        "text-decoration-color"
    ], {
        browsers,
        feature: "text-decoration"
    }));
let prefixDecorationLine = require("9be3e91980608c88");
f(prefixDecorationLine, (browsers)=>prefix([
        "text-decoration-line"
    ], {
        browsers,
        feature: "text-decoration"
    }));
let prefixDecorationStyle = require("dc218af6bc9da6cc");
f(prefixDecorationStyle, (browsers)=>prefix([
        "text-decoration-style"
    ], {
        browsers,
        feature: "text-decoration"
    }));
// Text Size Adjust
let prefixTextSizeAdjust = require("f088e18ce91f955e");
f(prefixTextSizeAdjust, (browsers)=>prefix([
        "text-size-adjust"
    ], {
        browsers,
        feature: "text-size-adjust"
    }));
// CSS Masks
let prefixCssMasks = require("fbe71b54565e6ea7");
f(prefixCssMasks, (browsers)=>{
    prefix([
        "mask-clip",
        "mask-composite",
        "mask-image",
        "mask-origin",
        "mask-repeat",
        "mask-border-repeat",
        "mask-border-source"
    ], {
        browsers,
        feature: "css-masks"
    });
    prefix([
        "mask",
        "mask-position",
        "mask-size",
        "mask-border",
        "mask-border-outset",
        "mask-border-width",
        "mask-border-slice"
    ], {
        browsers,
        feature: "css-masks"
    });
});
// CSS clip-path property
let prefixClipPath = require("b0d453cd4d4214cf");
f(prefixClipPath, (browsers)=>prefix([
        "clip-path"
    ], {
        browsers,
        feature: "css-clip-path"
    }));
// Fragmented Borders and Backgrounds
let prefixBoxdecoration = require("171c6bd2beec8044");
f(prefixBoxdecoration, (browsers)=>prefix([
        "box-decoration-break"
    ], {
        browsers,
        feature: "css-boxdecorationbreak"
    }));
// CSS3 object-fit/object-position
let prefixObjectFit = require("4158e7957b6a91de");
f(prefixObjectFit, (browsers)=>prefix([
        "object-fit",
        "object-position"
    ], {
        browsers,
        feature: "object-fit"
    }));
// CSS Shapes
let prefixShapes = require("af57849329dbd876");
f(prefixShapes, (browsers)=>prefix([
        "shape-margin",
        "shape-outside",
        "shape-image-threshold"
    ], {
        browsers,
        feature: "css-shapes"
    }));
// CSS3 text-overflow
let prefixTextOverflow = require("e04a05e79b4e7f0f");
f(prefixTextOverflow, (browsers)=>prefix([
        "text-overflow"
    ], {
        browsers,
        feature: "text-overflow"
    }));
// Viewport at-rule
let prefixDeviceadaptation = require("96611be0719de70b");
f(prefixDeviceadaptation, (browsers)=>prefix([
        "@viewport"
    ], {
        browsers,
        feature: "css-deviceadaptation"
    }));
// Resolution Media Queries
let prefixResolut = require("d4027e002a43009d");
f(prefixResolut, {
    match: /( x($| )|a #2)/
}, (browsers)=>prefix([
        "@resolution"
    ], {
        browsers,
        feature: "css-media-resolution"
    }));
// CSS text-align-last
let prefixTextAlignLast = require("45fb2ace7d08ba8");
f(prefixTextAlignLast, (browsers)=>prefix([
        "text-align-last"
    ], {
        browsers,
        feature: "css-text-align-last"
    }));
// Crisp Edges Image Rendering Algorithm
let prefixCrispedges = require("83cdfb6625869403");
f(prefixCrispedges, {
    match: /y x|a x #1/
}, (browsers)=>prefix([
        "pixelated"
    ], {
        browsers,
        feature: "css-crisp-edges",
        props: [
            "image-rendering"
        ]
    }));
f(prefixCrispedges, {
    match: /a x #2/
}, (browsers)=>prefix([
        "image-rendering"
    ], {
        browsers,
        feature: "css-crisp-edges"
    }));
// Logical Properties
let prefixLogicalProps = require("1f31111071997426");
f(prefixLogicalProps, (browsers)=>prefix([
        "border-inline-start",
        "border-inline-end",
        "margin-inline-start",
        "margin-inline-end",
        "padding-inline-start",
        "padding-inline-end"
    ], {
        browsers,
        feature: "css-logical-props"
    }));
f(prefixLogicalProps, {
    match: /x\s#2/
}, (browsers)=>prefix([
        "border-block-start",
        "border-block-end",
        "margin-block-start",
        "margin-block-end",
        "padding-block-start",
        "padding-block-end"
    ], {
        browsers,
        feature: "css-logical-props"
    }));
// CSS appearance
let prefixAppearance = require("37fb493ccfe247e0");
f(prefixAppearance, {
    match: /#2|x/
}, (browsers)=>prefix([
        "appearance"
    ], {
        browsers,
        feature: "css-appearance"
    }));
// CSS Scroll snap points
let prefixSnappoints = require("ccba5afeae2eef5b");
f(prefixSnappoints, (browsers)=>prefix([
        "scroll-snap-type",
        "scroll-snap-coordinate",
        "scroll-snap-destination",
        "scroll-snap-points-x",
        "scroll-snap-points-y"
    ], {
        browsers,
        feature: "css-snappoints"
    }));
// CSS Regions
let prefixRegions = require("5bc38cf6327a4cda");
f(prefixRegions, (browsers)=>prefix([
        "flow-into",
        "flow-from",
        "region-fragment"
    ], {
        browsers,
        feature: "css-regions"
    }));
// CSS image-set
let prefixImageSet = require("14fab534b2344319");
f(prefixImageSet, (browsers)=>prefix([
        "image-set"
    ], {
        browsers,
        feature: "css-image-set",
        props: [
            "background",
            "background-image",
            "border-image",
            "cursor",
            "mask",
            "mask-image",
            "list-style",
            "list-style-image",
            "content"
        ]
    }));
// Writing Mode
let prefixWritingMode = require("865d3d49fcd42073");
f(prefixWritingMode, {
    match: /a|x/
}, (browsers)=>prefix([
        "writing-mode"
    ], {
        browsers,
        feature: "css-writing-mode"
    }));
// Cross-Fade Function
let prefixCrossFade = require("44b978989beade12");
f(prefixCrossFade, (browsers)=>prefix([
        "cross-fade"
    ], {
        browsers,
        feature: "css-cross-fade",
        props: [
            "background",
            "background-image",
            "border-image",
            "mask",
            "list-style",
            "list-style-image",
            "content",
            "mask-image"
        ]
    }));
// Read Only selector
let prefixReadOnly = require("9944501936850e95");
f(prefixReadOnly, (browsers)=>prefix([
        ":read-only",
        ":read-write"
    ], {
        browsers,
        feature: "css-read-only-write",
        selector: true
    }));
// Text Emphasize
let prefixTextEmphasis = require("7585591375b6a735");
f(prefixTextEmphasis, (browsers)=>prefix([
        "text-emphasis",
        "text-emphasis-position",
        "text-emphasis-style",
        "text-emphasis-color"
    ], {
        browsers,
        feature: "text-emphasis"
    }));
// CSS Grid Layout
let prefixGrid = require("881f2d0a842a5494");
f(prefixGrid, (browsers)=>{
    prefix([
        "display-grid",
        "inline-grid"
    ], {
        browsers,
        feature: "css-grid",
        props: [
            "display"
        ]
    });
    prefix([
        "grid-template-columns",
        "grid-template-rows",
        "grid-row-start",
        "grid-column-start",
        "grid-row-end",
        "grid-column-end",
        "grid-row",
        "grid-column",
        "grid-area",
        "grid-template",
        "grid-template-areas",
        "place-self"
    ], {
        browsers,
        feature: "css-grid"
    });
});
f(prefixGrid, {
    match: /a x/
}, (browsers)=>prefix([
        "grid-column-align",
        "grid-row-align"
    ], {
        browsers,
        feature: "css-grid"
    }));
// CSS text-spacing
let prefixTextSpacing = require("aa9393bc1c07f75a");
f(prefixTextSpacing, (browsers)=>prefix([
        "text-spacing"
    ], {
        browsers,
        feature: "css-text-spacing"
    }));
// :any-link selector
let prefixAnyLink = require("cde76a47a708fb5d");
f(prefixAnyLink, (browsers)=>prefix([
        ":any-link"
    ], {
        browsers,
        feature: "css-any-link",
        selector: true
    }));
// unicode-bidi
let bidiIsolate = require("4c42611f7a159bbd");
f(bidiIsolate, (browsers)=>prefix([
        "isolate"
    ], {
        browsers,
        feature: "css-unicode-bidi",
        props: [
            "unicode-bidi"
        ]
    }));
let bidiPlaintext = require("664e67c70e918a06");
f(bidiPlaintext, (browsers)=>prefix([
        "plaintext"
    ], {
        browsers,
        feature: "css-unicode-bidi",
        props: [
            "unicode-bidi"
        ]
    }));
let bidiOverride = require("d2b9b57a3e6da222");
f(bidiOverride, {
    match: /y x/
}, (browsers)=>prefix([
        "isolate-override"
    ], {
        browsers,
        feature: "css-unicode-bidi",
        props: [
            "unicode-bidi"
        ]
    }));
// overscroll-behavior selector
let prefixOverscroll = require("8eb28da30c966653");
f(prefixOverscroll, {
    match: /a #1/
}, (browsers)=>prefix([
        "overscroll-behavior"
    ], {
        browsers,
        feature: "css-overscroll-behavior"
    }));
// text-orientation
let prefixTextOrientation = require("6fbd83676c2ea0fd");
f(prefixTextOrientation, (browsers)=>prefix([
        "text-orientation"
    ], {
        browsers,
        feature: "css-text-orientation"
    }));
// print-color-adjust
let prefixPrintAdjust = require("4a8235548c1a19b4");
f(prefixPrintAdjust, (browsers)=>prefix([
        "print-color-adjust",
        "color-adjust"
    ], {
        browsers,
        feature: "css-print-color-adjust"
    }));

},{"99a19e28a61129e2":"8Fe8m","b035850e458a350c":"2uKlP","e39d14bc5293b3f4":"gfUB6","b3bd29e205d34453":"8bbL1","2999dd7f2e63ef13":"aYGPv","286c0b408df5d1be":"8cbBD","569b1488407ec85a":"fyeoH","df57827c6269a176":"ehCDb","1987114b97aa6b95":"anuF4","61b67130255aa4ea":"5syfP","2f20eb8138b9c801":"7h55z","cc477886a5d970b5":"jAM4a","7de45ce5d22a4304":"lehVO","8ed2b1efa9d7d9c8":"4N4Wg","fee73e0db9e79125":"i2zHQ","39a07feee3fd7566":"7cT7b","c8f9dab3ca36028e":"cKdsf","89838ba3eb709d68":"2IXvD","abe67a58efc73ba0":"2oaUs","f053ca332c55774b":"3ZZhi","ad30601cfae1c0c3":"6N0Fe","976cbd312ec5e6c8":"8y74w","8e83a905b768c399":"9xVv4","34efdb36ecfe42a7":"3PAh9","c15979c26d40d357":"5Cca0","61b293a3af841ae5":"7uTc6","a0d58f3fcb9086f0":"3Q7QH","702e718d85c398ee":"j2Lfb","8fec301951787a84":"5tdjV","e2e07ab159ea14f7":"8YCh9","2028e463c58bcc62":"9DbFb","1c4f8fd2ebe9e25c":"aLWe9","bc6113b3669f374b":"fdwX5","dd6e7f745f59223f":"jQl58","7023784dae640551":"hfq8O","80f4eb961089e3f5":"86xlT","3a4fe6f8cb485bb5":"af8Nk","b734329c6641bc96":"eWhth","33ee6e27203bc25b":"9qHYr","e22cfb39aaa80187":"67gyf","9be3e91980608c88":"g7tIT","dc218af6bc9da6cc":"xMIiJ","f088e18ce91f955e":"c8z1H","fbe71b54565e6ea7":"320J3","b0d453cd4d4214cf":"6p215","171c6bd2beec8044":"74BrZ","4158e7957b6a91de":"efBNa","af57849329dbd876":"iC7Na","e04a05e79b4e7f0f":"l7Lfq","96611be0719de70b":"2YCOD","d4027e002a43009d":"5ncnY","45fb2ace7d08ba8":"855JK","83cdfb6625869403":"lS0qz","1f31111071997426":"85Pd7","37fb493ccfe247e0":"e6RSr","ccba5afeae2eef5b":"d5kdf","5bc38cf6327a4cda":"550HK","14fab534b2344319":"7mS4b","865d3d49fcd42073":"hdi6D","44b978989beade12":"eTrsm","9944501936850e95":"8B7GT","7585591375b6a735":"bVqf0","881f2d0a842a5494":"e0FO2","aa9393bc1c07f75a":"5pxlz","cde76a47a708fb5d":"1cdXm","4c42611f7a159bbd":"jJrdx","664e67c70e918a06":"akbkN","d2b9b57a3e6da222":"1xazV","8eb28da30c966653":"htcSj","6fbd83676c2ea0fd":"c1ESd","4a8235548c1a19b4":"31QDf"}],"2uKlP":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "F A B",
            "2": "K D E YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "257": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB",
            "289": "AC bC cC",
            "292": "ZC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J"
        },
        E: {
            "1": "DB D E F A B C L M G gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "J dC HC",
            "129": "K eC fC"
        },
        F: {
            "1": "B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s qC rC 5B WC sC 6B",
            "2": "F oC pC"
        },
        G: {
            "1": "E tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "HC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "AC J I HD ID JD XC KD LD",
            "33": "GD"
        },
        J: {
            "1": "D A"
        },
        K: {
            "1": "B C H 5B WC 6B",
            "2": "A"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "257": "aD"
        }
    },
    B: 4,
    C: "CSS3 Border-radius (rounded corners)",
    D: true
};

},{}],"gfUB6":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "F A B",
            "2": "K D E YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC",
            "33": "bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F"
        },
        E: {
            "1": "K D E F A B C L M G eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "DB",
            "164": "J dC HC"
        },
        F: {
            "1": "B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s qC rC 5B WC sC 6B",
            "2": "F oC pC"
        },
        G: {
            "1": "E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "tC XC",
            "164": "HC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "J I JD XC KD LD",
            "164": "AC GD HD ID"
        },
        J: {
            "1": "A",
            "33": "D"
        },
        K: {
            "1": "B C H 5B WC 6B",
            "2": "A"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS3 Box-shadow",
    D: true
};

},{}],"8bbL1":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "A B",
            "2": "K D E F YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J bC cC",
            "33": "DB K D E F A B C L M G"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "dC HC",
            "33": "K D E eC fC gC",
            "292": "J DB"
        },
        F: {
            "1": "KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F B oC pC qC rC 5B WC sC",
            "33": "C G N O P EB u v w x y FB GB HB IB JB"
        },
        G: {
            "1": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "E vC wC xC",
            "164": "HC tC XC uC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "33": "J JD XC KD LD",
            "164": "AC GD HD ID"
        },
        J: {
            "33": "D A"
        },
        K: {
            "1": "H 6B",
            "2": "A B C 5B WC"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 5,
    C: "CSS Animation",
    D: true
};

},{}],"aYGPv":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "A B",
            "2": "K D E F YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC cC",
            "33": "DB K D E F A B C L M G",
            "164": "J"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB"
        },
        E: {
            "1": "D E F A B C L M G fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "K eC",
            "164": "J DB dC HC"
        },
        F: {
            "1": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F oC pC",
            "33": "C",
            "164": "B qC rC 5B WC sC"
        },
        G: {
            "1": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "vC",
            "164": "HC tC XC uC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I KD LD",
            "33": "AC J GD HD ID JD XC"
        },
        J: {
            "1": "A",
            "33": "D"
        },
        K: {
            "1": "H 6B",
            "33": "C",
            "164": "A B 5B WC"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 5,
    C: "CSS3 Transitions",
    D: true
};

},{}],"8cbBD":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "YC",
            "8": "K D E",
            "129": "A B",
            "161": "F"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "129": "C L M G N"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC",
            "33": "J DB K D E F A B C L M G bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "J DB K D E dC HC eC fC gC"
        },
        F: {
            "1": "x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F oC pC",
            "33": "B C G N O P EB u v w qC rC 5B WC sC"
        },
        G: {
            "1": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "E HC tC XC uC vC wC xC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "33": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "33": "D A"
        },
        K: {
            "1": "B C H 5B WC 6B",
            "2": "A"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS3 2D Transforms",
    D: true
};

},{}],"fyeoH":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "132": "A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F bC cC",
            "33": "A B C L M G"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B",
            "33": "C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB"
        },
        E: {
            "1": "KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "dC HC",
            "33": "J DB K D E eC fC gC",
            "257": "F A B C L M G hC IC 5B 6B iC jC kC JC"
        },
        F: {
            "1": "x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w"
        },
        G: {
            "1": "KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "E HC tC XC uC vC wC xC",
            "257": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "GD HD ID",
            "33": "AC J JD XC KD LD"
        },
        J: {
            "33": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "132": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 5,
    C: "CSS3 3D Transforms",
    D: true
};

},{}],"ehCDb":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "A B",
            "2": "K D E F YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC",
            "260": "N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB",
            "292": "J DB K D E F A B C L M G cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "A B C L M G N O P EB u v w x y FB",
            "548": "J DB K D E F"
        },
        E: {
            "1": "KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "dC HC",
            "260": "D E F A B C L M G fC gC hC IC 5B 6B iC jC kC JC",
            "292": "K eC",
            "804": "J DB"
        },
        F: {
            "1": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F B oC pC qC rC",
            "33": "C sC",
            "164": "5B WC"
        },
        G: {
            "1": "KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "260": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC",
            "292": "uC vC",
            "804": "HC tC XC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I KD LD",
            "33": "J JD XC",
            "548": "AC GD HD ID"
        },
        J: {
            "1": "A",
            "548": "D"
        },
        K: {
            "1": "H 6B",
            "2": "A B",
            "33": "C",
            "164": "5B WC"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS Gradients",
    D: true
};

},{}],"anuF4":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "E F A B",
            "8": "K D YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "33": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F"
        },
        E: {
            "1": "K D E F A B C L M G eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "J DB dC HC"
        },
        F: {
            "1": "B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC qC rC 5B WC sC 6B",
            "2": "F"
        },
        G: {
            "1": "E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "HC tC XC"
        },
        H: {
            "1": "FD"
        },
        I: {
            "1": "J I JD XC KD LD",
            "33": "AC GD HD ID"
        },
        J: {
            "1": "A",
            "33": "D"
        },
        K: {
            "1": "A B C H 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 5,
    C: "CSS3 Box-sizing",
    D: true
};

},{}],"5syfP":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "1028": "L M G N O P",
            "1346": "C"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC",
            "196": "OB",
            "516": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O",
            "33": "P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB"
        },
        E: {
            "1": "A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC eC",
            "33": "K D E F fC gC"
        },
        F: {
            "1": "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB"
        },
        G: {
            "1": "zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "33": "E vC wC xC yC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "33": "KD LD"
        },
        J: {
            "2": "D",
            "33": "A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "33": "J MD ND"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 5,
    C: "CSS Filter Effects",
    D: true
};

},{}],"7h55z":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "2": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "2": "0 1 2 3 4 5 6 7 8 9 ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC bC cC"
        },
        D: {
            "2": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "1": "A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D E dC HC eC fC gC",
            "33": "F"
        },
        F: {
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "1": "0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC",
            "33": "yC zC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J I GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A B C H 5B WC 6B"
        },
        L: {
            "2": "I"
        },
        M: {
            "2": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "2": "7B"
        },
        P: {
            "2": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "2": "YD"
        },
        R: {
            "2": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 5,
    C: "CSS filter() function",
    D: true
};

},{}],"jAM4a":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N",
            "257": "O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB bC cC",
            "578": "wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB",
            "194": "bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B"
        },
        E: {
            "2": "J DB K D E dC HC eC fC gC",
            "33": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC"
        },
        F: {
            "1": "qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB oC pC qC rC 5B WC sC 6B",
            "194": "OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC",
            "33": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y SD TD UD VD 8B 9B WD XD",
            "2": "J",
            "194": "MD ND OD PD QD IC RD"
        },
        Q: {
            "2": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 7,
    C: "CSS Backdrop Filter",
    D: true
};

},{}],"lehVO":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "2": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "33": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "164": "ZC AC bC cC"
        },
        D: {
            "2": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "2": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC"
        },
        F: {
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J I GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A B C H 5B WC 6B"
        },
        L: {
            "2": "I"
        },
        M: {
            "33": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "2": "7B"
        },
        P: {
            "2": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "2": "YD"
        },
        R: {
            "2": "ZD"
        },
        S: {
            "33": "aD bD"
        }
    },
    B: 5,
    C: "CSS element() function",
    D: true
};

},{}],"4N4Wg":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "A B",
            "2": "K D E F YC"
        },
        B: {
            "1": "C L M G N O P",
            "516": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "132": "gB hB iB jB kB lB mB BC nB CC oB pB qB",
            "164": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB bC cC",
            "516": "rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a",
            "1028": "0 1 2 3 4 5 6 7 8 9 b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC"
        },
        D: {
            "420": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB",
            "516": "0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "1": "A B C L M G IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "132": "F hC",
            "164": "D E gC",
            "420": "J DB K dC HC eC fC"
        },
        F: {
            "1": "C 5B WC sC 6B",
            "2": "F B oC pC qC rC",
            "420": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB",
            "516": "RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        G: {
            "1": "0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "132": "yC zC",
            "164": "E wC xC",
            "420": "HC tC XC uC vC"
        },
        H: {
            "1": "FD"
        },
        I: {
            "420": "AC J GD HD ID JD XC KD LD",
            "516": "I"
        },
        J: {
            "420": "D A"
        },
        K: {
            "1": "C 5B WC 6B",
            "2": "A B",
            "516": "H"
        },
        L: {
            "516": "I"
        },
        M: {
            "1028": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "516": "7B"
        },
        P: {
            "420": "J",
            "516": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "516": "YD"
        },
        R: {
            "516": "ZD"
        },
        S: {
            "164": "aD bD"
        }
    },
    B: 4,
    C: "CSS3 Multiple column layout",
    D: true
};

},{}],"i2zHQ":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "33": "A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "33": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "33": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB"
        },
        E: {
            "1": "nC",
            "33": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC"
        },
        F: {
            "1": "VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB"
        },
        G: {
            "33": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "33": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "33": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "33": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "33": "J MD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "33": "aD"
        }
    },
    B: 5,
    C: "CSS user-select: none",
    D: true
};

},{}],"7cT7b":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "1028": "B",
            "1316": "A"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "164": "ZC AC J DB K D E F A B C L M G N O P EB u v bC cC",
            "516": "w x y FB GB HB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "v w x y FB GB HB IB",
            "164": "J DB K D E F A B C L M G N O P EB u"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "D E fC gC",
            "164": "J DB K dC HC eC"
        },
        F: {
            "1": "O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F B C oC pC qC rC 5B WC sC",
            "33": "G N"
        },
        G: {
            "1": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "E wC xC",
            "164": "HC tC XC uC vC"
        },
        H: {
            "1": "FD"
        },
        I: {
            "1": "I KD LD",
            "164": "AC J GD HD ID JD XC"
        },
        J: {
            "1": "A",
            "164": "D"
        },
        K: {
            "1": "H 6B",
            "2": "A B C 5B WC"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "B",
            "292": "A"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS Flexible Box Layout Module",
    D: true
};

},{}],"cKdsf":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E YC",
            "260": "F",
            "516": "A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC cC",
            "33": "J DB K D E F A B C L M G"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P",
            "33": "EB u v w x y FB"
        },
        E: {
            "1": "D E F A B C L M G fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC eC",
            "33": "K"
        },
        F: {
            "1": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "1": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "33": "vC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "132": "KD LD"
        },
        J: {
            "1": "A",
            "2": "D"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "calc() as CSS unit value",
    D: true
};

},{}],"2IXvD":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "F A B",
            "2": "K D E YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC",
            "36": "cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "516": "J DB K D E F A B C L M"
        },
        E: {
            "1": "D E F A B C L M G gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "772": "J DB K dC HC eC fC"
        },
        F: {
            "1": "B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s qC rC 5B WC sC 6B",
            "2": "F oC",
            "36": "pC"
        },
        G: {
            "1": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "4": "HC tC XC vC",
            "516": "uC"
        },
        H: {
            "132": "FD"
        },
        I: {
            "1": "I KD LD",
            "36": "GD",
            "516": "AC J JD XC",
            "548": "HD ID"
        },
        J: {
            "1": "D A"
        },
        K: {
            "1": "A B C H 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS3 Background-image options",
    D: true
};

},{}],"2oaUs":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "G N O P",
            "33": "C L M",
            "132": "9 AB BB CB I t",
            "164": "0 1 2 3 4 5 6 7 8 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB bC cC"
        },
        D: {
            "132": "9 AB BB CB I t EC FC GC",
            "164": "0 1 2 3 4 5 6 7 8 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z"
        },
        E: {
            "16": "dC HC",
            "132": "7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "388": "M G jC kC JC KC",
            "420": "J DB K D E F A B C L eC fC gC hC IC 5B 6B iC"
        },
        F: {
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "132": "p q r s",
            "164": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o"
        },
        G: {
            "16": "HC tC XC uC",
            "132": "7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "388": "AD BD CD JC KC",
            "420": "E vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "16": "AC GD HD ID",
            "132": "I",
            "164": "J JD XC KD LD"
        },
        J: {
            "164": "D A"
        },
        K: {
            "16": "A B C 5B WC 6B",
            "132": "H"
        },
        L: {
            "132": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "164": "7B"
        },
        P: {
            "164": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "164": "YD"
        },
        R: {
            "164": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 7,
    C: "Background-clip: text",
    D: true
};

},{}],"3ZZhi":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "A B",
            "2": "K D E F YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC cC",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB",
            "164": "J DB K D E F A B C L M"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G",
            "33": "v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB",
            "292": "N O P EB u"
        },
        E: {
            "1": "A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "D E F dC HC fC gC",
            "4": "J DB K eC"
        },
        F: {
            "1": "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB"
        },
        G: {
            "1": "zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E wC xC yC",
            "4": "HC tC XC uC vC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "33": "KD LD"
        },
        J: {
            "2": "D",
            "33": "A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "33": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 2,
    C: "CSS font-feature-settings",
    D: true
};

},{}],"6N0Fe":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x bC cC",
            "194": "y FB GB HB IB JB KB LB MB NB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB",
            "33": "JB KB LB MB"
        },
        E: {
            "1": "A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K dC HC eC fC",
            "33": "D E F gC"
        },
        F: {
            "1": "u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G oC pC qC rC 5B WC sC 6B",
            "33": "N O P EB"
        },
        G: {
            "1": "4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC wC",
            "33": "E xC yC zC 0C 1C 2C 3C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I LD",
            "2": "AC J GD HD ID JD XC",
            "33": "KD"
        },
        J: {
            "2": "D",
            "33": "A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS3 font-kerning",
    D: true
};

},{}],"8y74w":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "B",
            "2": "K D E F A YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "129": "C L"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC",
            "260": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB",
            "804": "J DB K D E F A B C L M bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "260": "fB gB hB iB jB",
            "388": "KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB",
            "1412": "G N O P EB u v w x y FB GB HB IB JB",
            "1956": "J DB K D E F A B C L M"
        },
        E: {
            "1": "KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "129": "A B C L M G hC IC 5B 6B iC jC kC JC",
            "1412": "K D E F fC gC",
            "1956": "J DB dC HC eC"
        },
        F: {
            "1": "XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F oC pC",
            "260": "SB TB UB VB WB",
            "388": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB",
            "1796": "qC rC",
            "1828": "B C 5B WC sC 6B"
        },
        G: {
            "1": "KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "129": "zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC",
            "1412": "E vC wC xC yC",
            "1956": "HC tC XC uC"
        },
        H: {
            "1828": "FD"
        },
        I: {
            "1": "I",
            "388": "KD LD",
            "1956": "AC J GD HD ID JD XC"
        },
        J: {
            "1412": "A",
            "1924": "D"
        },
        K: {
            "1": "H",
            "2": "A",
            "1828": "B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "B",
            "2": "A"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "260": "MD ND",
            "388": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "260": "aD"
        }
    },
    B: 4,
    C: "CSS3 Border images",
    D: true
};

},{}],"9xVv4":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "F A B",
            "2": "K D E YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "33": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "1": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC"
        },
        F: {
            "1": "B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC qC rC 5B WC sC 6B",
            "2": "F"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I KD LD",
            "2": "AC J GD HD ID JD XC"
        },
        J: {
            "1": "A",
            "2": "D"
        },
        K: {
            "1": "C H WC 6B",
            "16": "A B 5B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "33": "aD"
        }
    },
    B: 5,
    C: "::selection CSS pseudo-element",
    D: true
};

},{}],"3PAh9":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "36": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "33": "EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB",
            "130": "ZC AC J DB K D E F A B C L M G N O P bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "36": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB"
        },
        E: {
            "1": "B C L M G IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J dC HC",
            "36": "DB K D E F A eC fC gC hC"
        },
        F: {
            "1": "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "36": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB"
        },
        G: {
            "1": "1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC",
            "36": "E XC uC vC wC xC yC zC 0C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "36": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "36": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "36": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "36": "J MD ND"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "33": "aD"
        }
    },
    B: 5,
    C: "::placeholder CSS pseudo-element",
    D: true
};

},{}],"5Cca0":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "292": "A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC cC",
            "164": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D E dC HC eC fC gC"
        },
        F: {
            "1": "OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "1": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "164": "aD"
        }
    },
    B: 5,
    C: ":placeholder-shown CSS pseudo-class",
    D: true
};

},{}],"7uTc6":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "33": "A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 o p q r s z AB BB CB I t",
            "33": "C L M G N O P",
            "132": "Q H R S T U V W",
            "260": "X Y Z a b c d e f g h i j k l m n"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB bC cC",
            "33": "K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB",
            "132": "jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W"
        },
        E: {
            "1": "9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC",
            "33": "K D E F A B C L M G eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC"
        },
        F: {
            "1": "a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB oC pC qC rC 5B WC sC 6B",
            "132": "WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z"
        },
        G: {
            "1": "9B QC RC SC TC UC VC",
            "2": "HC tC",
            "33": "E XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J",
            "132": "MD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS Hyphenation",
    D: true
};

},{}],"3Q7QH":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A YC",
            "548": "B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "516": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F bC cC",
            "676": "A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB",
            "1700": "bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M",
            "676": "G N O P EB",
            "804": "u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB"
        },
        E: {
            "1": "OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC",
            "548": "KC 7B lC 8B LC MC NC",
            "676": "eC",
            "804": "K D E F A B C L M G fC gC hC IC 5B 6B iC jC kC JC"
        },
        F: {
            "1": "qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F B C oC pC qC rC 5B WC sC",
            "804": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C",
            "2052": "4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J I GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D",
            "292": "A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A",
            "548": "B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y IC RD SD TD UD VD 8B 9B WD XD",
            "804": "J MD ND OD PD QD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 1,
    C: "Fullscreen API",
    D: true
};

},{}],"j2Lfb":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB",
            "33": "MB NB OB PB QB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "33": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bC cC"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A YC",
            "33": "B"
        },
        F: {
            "1": "y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P oC pC qC rC 5B WC sC 6B",
            "33": "EB u v w x"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC nC"
        },
        G: {
            "1": "KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "33": "KD LD"
        }
    },
    B: 6,
    C: "CSS ::backdrop pseudo-element",
    D: undefined
};

},{}],"5tdjV":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "33": "C L M G N O P Q H R S T U V W X"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R bC cC"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F YC",
            "33": "A B"
        },
        F: {
            "1": "1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "G jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "nC",
            "33": "J DB K D E F A B C L M dC HC eC fC gC hC IC 5B 6B iC"
        },
        G: {
            "1": "BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD"
        },
        P: {
            "1": "u v w x y VD 8B 9B WD XD",
            "33": "J MD ND OD PD QD IC RD SD TD UD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "33": "KD LD"
        }
    },
    B: 6,
    C: "::file-selector-button CSS pseudo-element",
    D: undefined
};

},{}],"8YCh9":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 z AB BB CB I t",
            "2": "C L M G N O P",
            "33": "Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U bC cC"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "G kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "nC",
            "33": "J DB K D E F A B C L M dC HC eC fC gC hC IC 5B 6B iC jC"
        },
        G: {
            "1": "CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD"
        },
        P: {
            "1": "v w x y",
            "33": "J u MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "33": "KD LD"
        }
    },
    B: 6,
    C: ":autofill CSS pseudo-class",
    D: undefined
};

},{}],"9DbFb":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC cC",
            "33": "hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z",
            "164": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u",
            "132": "v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB"
        },
        E: {
            "1": "M G iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K dC HC eC",
            "132": "D E F A B C L fC gC hC IC 5B 6B"
        },
        F: {
            "1": "JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F oC pC qC",
            "132": "G N O P EB u v w x y FB GB HB IB",
            "164": "B C rC 5B WC sC 6B"
        },
        G: {
            "1": "9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC",
            "132": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C"
        },
        H: {
            "164": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "132": "KD LD"
        },
        J: {
            "132": "D A"
        },
        K: {
            "1": "H",
            "2": "A",
            "164": "B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "164": "aD bD"
        }
    },
    B: 4,
    C: "CSS3 tab-size",
    D: true
};

},{}],"aLWe9":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "2": "C L M G N O P",
            "1025": "0 1 2 3 4 5 6 7 8 9 d e f g h i j k l m n o p q r s z AB BB CB I t",
            "1537": "Q H R S T U V W X Y Z a b c"
        },
        C: {
            "2": "ZC",
            "932": "AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB bC cC",
            "2308": "0 1 2 3 4 5 6 7 8 9 sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC"
        },
        D: {
            "2": "J DB K D E F A B C L M G N O P EB u v",
            "545": "w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB",
            "1025": "0 1 2 3 4 5 6 7 8 9 d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "1537": "aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c"
        },
        E: {
            "1": "8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K dC HC eC",
            "516": "B C L M G 5B 6B iC jC kC JC KC 7B lC",
            "548": "F A hC IC",
            "676": "D E fC gC"
        },
        F: {
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "513": "OB",
            "545": "G N O P EB u v w x y FB GB HB IB JB KB LB MB",
            "1025": "e f g h i j k l m n o p q r s",
            "1537": "NB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d"
        },
        G: {
            "1": "8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC",
            "516": "AD BD CD JC KC 7B DD",
            "548": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C",
            "676": "E wC xC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J GD HD ID JD XC",
            "545": "KD LD",
            "1025": "I"
        },
        J: {
            "2": "D",
            "545": "A"
        },
        K: {
            "2": "A B C 5B WC 6B",
            "1025": "H"
        },
        L: {
            "1025": "I"
        },
        M: {
            "2308": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1537": "7B"
        },
        P: {
            "545": "J",
            "1025": "u v w x y 9B WD XD",
            "1537": "MD ND OD PD QD IC RD SD TD UD VD 8B"
        },
        Q: {
            "1537": "YD"
        },
        R: {
            "1537": "ZD"
        },
        S: {
            "932": "aD",
            "2308": "bD"
        }
    },
    B: 5,
    C: "Intrinsic & Extrinsic Sizing",
    D: true
};

},{}],"fdwX5":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "2": "J DB K D E F A B C L M G N O P EB u v",
            "33": "0 1 2 3 4 5 6 7 8 9 w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        L: {
            "33": "I"
        },
        B: {
            "2": "C L M G N O P",
            "33": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "2": "ZC",
            "33": "0 1 2 3 4 5 6 7 8 9 AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC bC cC"
        },
        M: {
            "33": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        K: {
            "2": "A B C 5B WC 6B",
            "33": "H"
        },
        E: {
            "2": "J DB K dC HC eC fC nC",
            "33": "D E F A B C L M G gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC"
        },
        G: {
            "2": "HC tC XC uC vC",
            "33": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        P: {
            "2": "J",
            "33": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        I: {
            "2": "AC J GD HD ID JD XC",
            "33": "I KD LD"
        }
    },
    B: 6,
    C: "width: stretch property",
    D: undefined
};

},{}],"jQl58":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "33": "ZC AC J DB K D E F A B C L M G N O P EB u v w x bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "J DB K D E dC HC eC fC gC"
        },
        F: {
            "1": "C y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s sC 6B",
            "2": "F B oC pC qC rC 5B WC",
            "33": "G N O P EB u v w x"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "33": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "2": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "2": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 2,
    C: "CSS3 Cursors: zoom-in & zoom-out",
    D: true
};

},{}],"hfq8O":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "33": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB"
        },
        E: {
            "1": "B C L M G 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "J DB K D E F A dC HC eC fC gC hC IC"
        },
        F: {
            "1": "C jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s sC 6B",
            "2": "F B oC pC qC rC 5B WC",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "33": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "2": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "2": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 2,
    C: "CSS grab & grabbing cursors",
    D: true
};

},{}],"86xlT":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G",
            "1028": "Q H R S T U V W X Y Z",
            "4100": "N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB bC cC",
            "194": "GB HB IB JB KB LB",
            "516": "MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB",
            "322": "x y FB GB HB IB JB KB LB MB NB OB PB QB gB hB iB jB",
            "1028": "kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z"
        },
        E: {
            "1": "L M G iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K dC HC eC",
            "33": "E F A B C gC hC IC 5B 6B",
            "2084": "D fC"
        },
        F: {
            "1": "4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB oC pC qC rC 5B WC sC 6B",
            "322": "TB UB VB",
            "1028": "WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B"
        },
        G: {
            "1": "6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "33": "E xC yC zC 0C 1C 2C 3C 4C 5C",
            "2084": "vC wC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J MD"
        },
        Q: {
            "1028": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "516": "aD"
        }
    },
    B: 5,
    C: "CSS position:sticky",
    D: true
};

},{}],"af8Nk":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "B",
            "2": "K D E F YC",
            "164": "A"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB bC cC",
            "8": "K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB",
            "328": "VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v",
            "8": "w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB",
            "584": "gB hB iB"
        },
        E: {
            "1": "L M G iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K dC HC eC",
            "8": "D E F A B C fC gC hC IC 5B",
            "1096": "6B"
        },
        F: {
            "1": "WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "8": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB",
            "584": "TB UB VB"
        },
        G: {
            "1": "7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "8": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C",
            "6148": "6C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "8": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "8": "D A"
        },
        K: {
            "1": "H",
            "2": "A",
            "8": "B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "B",
            "36": "A"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "MD",
            "8": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "328": "aD"
        }
    },
    B: 2,
    C: "Pointer events",
    D: true
};

},{}],"eWhth":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "2": "C L M G N O P",
            "2052": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "2": "ZC AC J DB bC cC",
            "1028": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "1060": "K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB"
        },
        D: {
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB",
            "226": "GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB",
            "2052": "0 1 2 3 4 5 6 7 8 9 lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "2": "J DB K D dC HC eC fC",
            "772": "L M G 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "804": "E F A B C hC IC 5B",
            "1316": "gC"
        },
        F: {
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB oC pC qC rC 5B WC sC 6B",
            "226": "PB QB RB SB TB UB VB WB XB",
            "2052": "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        G: {
            "2": "HC tC XC uC vC wC",
            "292": "E xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A B C 5B WC 6B",
            "2052": "H"
        },
        L: {
            "2052": "I"
        },
        M: {
            "1028": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "2052": "7B"
        },
        P: {
            "2": "J MD ND",
            "2052": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "2052": "YD"
        },
        R: {
            "2052": "ZD"
        },
        S: {
            "1028": "aD bD"
        }
    },
    B: 4,
    C: "text-decoration styling",
    D: true
};

},{}],"9qHYr":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB bC cC"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB oC pC qC rC 5B WC sC 6B"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "2": "J DB K D dC HC eC fC gC nC",
            "33": "E F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC"
        },
        G: {
            "2": "HC tC XC uC vC wC",
            "33": "E xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        P: {
            "1": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J MD ND"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        }
    },
    B: 6,
    C: "text-decoration shorthand property",
    D: undefined
};

},{}],"67gyf":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB bC cC",
            "33": "K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB oC pC qC rC 5B WC sC 6B"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "L M G 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB K D dC HC eC fC gC nC",
            "33": "E F A B C hC IC 5B"
        },
        G: {
            "1": "5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC wC",
            "33": "E xC yC zC 0C 1C 2C 3C 4C"
        },
        P: {
            "1": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J MD ND"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        }
    },
    B: 6,
    C: "text-decoration-color property",
    D: undefined
};

},{}],"g7tIT":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB bC cC",
            "33": "K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB oC pC qC rC 5B WC sC 6B"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "L M G 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB K D dC HC eC fC gC nC",
            "33": "E F A B C hC IC 5B"
        },
        G: {
            "1": "5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC wC",
            "33": "E xC yC zC 0C 1C 2C 3C 4C"
        },
        P: {
            "1": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J MD ND"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        }
    },
    B: 6,
    C: "text-decoration-line property",
    D: undefined
};

},{}],"xMIiJ":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB bC cC",
            "33": "K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB oC pC qC rC 5B WC sC 6B"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "L M G 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB K D dC HC eC fC gC nC",
            "33": "E F A B C hC IC 5B"
        },
        G: {
            "1": "5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC wC",
            "33": "E xC yC zC 0C 1C 2C 3C 4C"
        },
        P: {
            "1": "u v w x y OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J MD ND"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        }
    },
    B: 6,
    C: "text-decoration-style property",
    D: undefined
};

},{}],"c8z1H":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "33": "C L M G N O P"
        },
        C: {
            "2": "0 1 2 3 4 5 6 7 8 9 ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB",
            "258": "GB"
        },
        E: {
            "2": "J DB K D E F A B C L M G dC HC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "258": "eC"
        },
        F: {
            "1": "XB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB YB oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "2": "HC tC XC",
            "33": "E uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "33": "t"
        },
        N: {
            "161": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 7,
    C: "CSS text-size-adjust",
    D: true
};

},{}],"320J3":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "9 AB BB CB I t",
            "2": "C L M G N",
            "164": "0 1 2 3 4 5 6 7 8 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z",
            "3138": "O",
            "12292": "P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC",
            "260": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB bC cC"
        },
        D: {
            "1": "9 AB BB CB I t EC FC GC",
            "164": "0 1 2 3 4 5 6 7 8 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z"
        },
        E: {
            "1": "KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "dC HC",
            "164": "J DB K D E F A B C L M G eC fC gC hC IC 5B 6B iC jC kC JC"
        },
        F: {
            "1": "p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "164": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o"
        },
        G: {
            "1": "KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "164": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "164": "KD LD",
            "676": "AC J GD HD ID JD XC"
        },
        J: {
            "164": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "164": "7B"
        },
        P: {
            "164": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "164": "YD"
        },
        R: {
            "164": "ZD"
        },
        S: {
            "1": "bD",
            "260": "aD"
        }
    },
    B: 4,
    C: "CSS Masks",
    D: true
};

},{}],"6p215":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "2": "C L M G N O",
            "260": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "3138": "P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC",
            "132": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bC cC",
            "644": "bB cB dB eB fB gB hB"
        },
        D: {
            "2": "J DB K D E F A B C L M G N O P EB u v w x",
            "260": "0 1 2 3 4 5 6 7 8 9 jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "292": "y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB"
        },
        E: {
            "2": "J DB K dC HC eC fC",
            "260": "M G iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "292": "D E F A B C L gC hC IC 5B 6B"
        },
        F: {
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "260": "WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "292": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB"
        },
        G: {
            "2": "HC tC XC uC vC",
            "260": "6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "292": "E wC xC yC zC 0C 1C 2C 3C 4C 5C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J GD HD ID JD XC",
            "260": "I",
            "292": "KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A B C 5B WC 6B",
            "260": "H"
        },
        L: {
            "260": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "260": "7B"
        },
        P: {
            "260": "u v w x y ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "292": "J MD"
        },
        Q: {
            "260": "YD"
        },
        R: {
            "260": "ZD"
        },
        S: {
            "1": "bD",
            "644": "aD"
        }
    },
    B: 4,
    C: "CSS clip-path property (for HTML)",
    D: true
};

},{}],"74BrZ":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "2": "C L M G N O P",
            "164": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB bC cC"
        },
        D: {
            "2": "J DB K D E F A B C L M G N O P EB u v",
            "164": "0 1 2 3 4 5 6 7 8 9 w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "2": "J DB K dC HC eC",
            "164": "D E F A B C L M G fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC"
        },
        F: {
            "2": "F oC pC qC rC",
            "129": "B C 5B WC sC 6B",
            "164": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        G: {
            "2": "HC tC XC uC vC",
            "164": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "132": "FD"
        },
        I: {
            "2": "AC J GD HD ID JD XC",
            "164": "I KD LD"
        },
        J: {
            "2": "D",
            "164": "A"
        },
        K: {
            "2": "A",
            "129": "B C 5B WC 6B",
            "164": "H"
        },
        L: {
            "164": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "164": "7B"
        },
        P: {
            "164": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "164": "YD"
        },
        R: {
            "164": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS box-decoration-break",
    D: true
};

},{}],"efBNa":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G",
            "260": "N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB"
        },
        E: {
            "1": "A B C L M G IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D dC HC eC fC",
            "132": "E F gC hC"
        },
        F: {
            "1": "EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F G N O P oC pC qC",
            "33": "B C rC 5B WC sC 6B"
        },
        G: {
            "1": "0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC wC",
            "132": "E xC yC zC"
        },
        H: {
            "33": "FD"
        },
        I: {
            "1": "I LD",
            "2": "AC J GD HD ID JD XC KD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A",
            "33": "B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS3 object-fit/object-position",
    D: true
};

},{}],"iC7Na":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB bC cC",
            "322": "fB gB hB iB jB kB lB mB BC nB CC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB",
            "194": "OB PB QB"
        },
        E: {
            "1": "B C L M G IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D dC HC eC fC",
            "33": "E F A gC hC"
        },
        F: {
            "1": "y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "1": "1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC wC",
            "33": "E xC yC zC 0C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "2": "aD"
        }
    },
    B: 4,
    C: "CSS Shapes Level 1",
    D: true
};

},{}],"l7Lfq":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "1": "K D E F A B",
            "2": "YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "8": "ZC AC J DB K bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "1": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC"
        },
        F: {
            "1": "B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 5B WC sC 6B",
            "33": "F oC pC qC rC"
        },
        G: {
            "1": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "1": "FD"
        },
        I: {
            "1": "AC J I GD HD ID JD XC KD LD"
        },
        J: {
            "1": "D A"
        },
        K: {
            "1": "H 6B",
            "33": "A B C 5B WC"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "1": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 2,
    C: "CSS3 Text-overflow",
    D: true
};

},{}],"2YCOD":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "164": "A B"
        },
        B: {
            "66": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "164": "C L M G N O P"
        },
        C: {
            "2": "0 1 2 3 4 5 6 7 8 9 ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC bC cC"
        },
        D: {
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB",
            "66": "0 1 2 3 4 5 6 7 8 9 JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "2": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC"
        },
        F: {
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB oC pC qC rC 5B WC sC 6B",
            "66": "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "292": "FD"
        },
        I: {
            "2": "AC J I GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A H",
            "292": "B C 5B WC 6B"
        },
        L: {
            "2": "I"
        },
        M: {
            "2": "t"
        },
        N: {
            "164": "A B"
        },
        O: {
            "2": "7B"
        },
        P: {
            "2": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "66": "YD"
        },
        R: {
            "2": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 5,
    C: "CSS Device Adaptation",
    D: true
};

},{}],"5ncnY":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E YC",
            "132": "F A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "1028": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC",
            "260": "J DB K D E F A B C L M G bC cC",
            "1028": "N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "548": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB",
            "1028": "JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB"
        },
        E: {
            "1": "8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "dC HC",
            "548": "J DB K D E F A B C L M G eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC"
        },
        F: {
            "1": "jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s 6B",
            "2": "F",
            "548": "B C oC pC qC rC 5B WC sC",
            "1028": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB"
        },
        G: {
            "1": "8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "16": "HC",
            "548": "E tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD"
        },
        H: {
            "132": "FD"
        },
        I: {
            "1": "I",
            "16": "GD HD",
            "548": "AC J ID JD XC",
            "1028": "KD LD"
        },
        J: {
            "548": "D A"
        },
        K: {
            "1": "H 6B",
            "548": "A B C 5B WC"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "132": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y IC RD SD TD UD VD 8B 9B WD XD",
            "1028": "J MD ND OD PD QD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "Media Queries: resolution feature",
    D: true
};

},{}],"855JK":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "132": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "4": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B bC cC",
            "33": "C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB",
            "322": "PB QB RB SB TB UB VB WB XB YB ZB aB"
        },
        E: {
            "1": "8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC"
        },
        F: {
            "1": "OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v oC pC qC rC 5B WC sC 6B",
            "578": "w x y FB GB HB IB JB KB LB MB NB"
        },
        G: {
            "1": "8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "132": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "33": "aD"
        }
    },
    B: 4,
    C: "CSS3 text-align-last",
    D: true
};

},{}],"lS0qz":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K YC",
            "2340": "D E F A B"
        },
        B: {
            "2": "C L M G N O P",
            "1025": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC bC",
            "513": "rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b",
            "545": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB cC"
        },
        D: {
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB",
            "1025": "0 1 2 3 4 5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "1": "A B C L M G IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC eC",
            "164": "K",
            "4644": "D E F fC gC hC"
        },
        F: {
            "2": "F B G N O P EB u v w x y FB GB HB oC pC qC rC 5B WC",
            "545": "C sC 6B",
            "1025": "IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        G: {
            "1": "0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC",
            "4260": "uC vC",
            "4644": "E wC xC yC zC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J GD HD ID JD XC KD LD",
            "1025": "I"
        },
        J: {
            "2": "D",
            "4260": "A"
        },
        K: {
            "2": "A B 5B WC",
            "545": "C 6B",
            "1025": "H"
        },
        L: {
            "1025": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2340": "A B"
        },
        O: {
            "1025": "7B"
        },
        P: {
            "1025": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1025": "YD"
        },
        R: {
            "1025": "ZD"
        },
        S: {
            "1": "bD",
            "4097": "aD"
        }
    },
    B: 4,
    C: "Crisp edges/pixelated images",
    D: true
};

},{}],"85Pd7":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P",
            "1028": "W X",
            "1540": "Q H R S T U V"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC",
            "164": "AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB bC cC",
            "1540": "VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "292": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB",
            "1028": "W X",
            "1540": "vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V"
        },
        E: {
            "1": "G kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "292": "J DB K D E F A B C dC HC eC fC gC hC IC 5B",
            "1540": "L M 6B iC",
            "3076": "jC"
        },
        F: {
            "1": "2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "292": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB",
            "1028": "0B 1B",
            "1540": "kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB"
        },
        G: {
            "1": "CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "292": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C",
            "1540": "5C 6C 7C 8C 9C AD",
            "3076": "BD"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "292": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "292": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y VD 8B 9B WD XD",
            "292": "J MD ND OD PD QD",
            "1540": "IC RD SD TD UD"
        },
        Q: {
            "1540": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "1540": "aD"
        }
    },
    B: 5,
    C: "CSS Logical Properties",
    D: true
};

},{}],"e6RSr":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "33": "S",
            "164": "Q H R",
            "388": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "164": "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q",
            "676": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "33": "S",
            "164": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R"
        },
        E: {
            "1": "KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "164": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC"
        },
        F: {
            "1": "zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "wB xB yB",
            "164": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB"
        },
        G: {
            "1": "KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "164": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "164": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "164": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A",
            "388": "B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y UD VD 8B 9B WD XD",
            "164": "J MD ND OD PD QD IC RD SD TD"
        },
        Q: {
            "164": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "164": "aD"
        }
    },
    B: 5,
    C: "CSS Appearance",
    D: true
};

},{}],"d5kdf":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "6308": "A",
            "6436": "B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "6436": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB bC cC",
            "2052": "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB",
            "8258": "sB tB uB"
        },
        E: {
            "1": "B C L M G 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D E dC HC eC fC gC",
            "3108": "F A hC IC"
        },
        F: {
            "1": "qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB oC pC qC rC 5B WC sC 6B",
            "8258": "iB jB kB lB mB nB oB pB"
        },
        G: {
            "1": "2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC",
            "3108": "yC zC 0C 1C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J MD ND OD PD QD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "2052": "aD"
        }
    },
    B: 4,
    C: "CSS Scroll Snap",
    D: true
};

},{}],"550HK":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "420": "A B"
        },
        B: {
            "2": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "420": "C L M G N O P"
        },
        C: {
            "2": "0 1 2 3 4 5 6 7 8 9 ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC bC cC"
        },
        D: {
            "2": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "36": "G N O P",
            "66": "EB u v w x y FB GB HB IB JB KB LB MB NB OB"
        },
        E: {
            "2": "J DB K C L M G dC HC eC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "33": "D E F A B fC gC hC IC"
        },
        F: {
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "2": "HC tC XC uC vC 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "33": "E wC xC yC zC 0C 1C 2C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J I GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A B C H 5B WC 6B"
        },
        L: {
            "2": "I"
        },
        M: {
            "2": "t"
        },
        N: {
            "420": "A B"
        },
        O: {
            "2": "7B"
        },
        P: {
            "2": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "2": "YD"
        },
        R: {
            "2": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 5,
    C: "CSS Regions",
    D: true
};

},{}],"7mS4b":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "3 4 5 6 7 8 9 AB BB CB I t",
            "2": "C L M G N O P",
            "164": "0 1 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z",
            "2049": "2"
        },
        C: {
            "1": "2 3 4 5 6 7 8 9 AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U bC cC",
            "66": "V W",
            "2305": "0 1 Y Z a b c d e f g h i j k l m n o p q r s z",
            "2820": "X"
        },
        D: {
            "1": "3 4 5 6 7 8 9 AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u",
            "164": "0 1 v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z",
            "2049": "2"
        },
        E: {
            "1": "9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC eC",
            "132": "A B C L IC 5B 6B iC",
            "164": "K D E F fC gC hC",
            "1540": "M G jC kC JC KC 7B lC 8B LC MC NC OC PC mC"
        },
        F: {
            "1": "j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "164": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h",
            "2049": "i"
        },
        G: {
            "1": "9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "132": "0C 1C 2C 3C 4C 5C 6C 7C 8C 9C",
            "164": "E vC wC xC yC zC",
            "1540": "AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "164": "KD LD"
        },
        J: {
            "2": "D",
            "164": "A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "164": "7B"
        },
        P: {
            "1": "x y",
            "164": "J u v w MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "164": "YD"
        },
        R: {
            "164": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 5,
    C: "CSS image-set",
    D: true
};

},{}],"hdi6D":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "132": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB bC cC",
            "322": "QB RB SB TB UB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K",
            "16": "D",
            "33": "E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB"
        },
        E: {
            "1": "B C L M G 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J dC HC",
            "16": "DB",
            "33": "K D E F A eC fC gC hC IC"
        },
        F: {
            "1": "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB"
        },
        G: {
            "1": "2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "16": "HC tC XC",
            "33": "E uC vC wC xC yC zC 0C 1C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "GD HD ID",
            "33": "AC J JD XC KD LD"
        },
        J: {
            "33": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "36": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "33": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 2,
    C: "CSS writing-mode property",
    D: true
};

},{}],"eTrsm":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "2": "C L M G N O P",
            "33": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "2": "0 1 2 3 4 5 6 7 8 9 ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC bC cC"
        },
        D: {
            "2": "J DB K D E F A B C L M G N",
            "33": "0 1 2 3 4 5 6 7 8 9 O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "1": "A B C L M G IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC",
            "33": "K D E F eC fC gC hC"
        },
        F: {
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        G: {
            "1": "0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC",
            "33": "E uC vC wC xC yC zC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J GD HD ID JD XC",
            "33": "I KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A B C 5B WC 6B",
            "33": "H"
        },
        L: {
            "33": "I"
        },
        M: {
            "2": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "33": "7B"
        },
        P: {
            "33": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "33": "YD"
        },
        R: {
            "33": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 4,
    C: "CSS Cross-Fade Function",
    D: true
};

},{}],"8B7GT":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "16": "ZC",
            "33": "AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "16": "J DB K D E F A B C L M",
            "132": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "16": "dC HC",
            "132": "J DB K D E eC fC gC"
        },
        F: {
            "1": "x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "16": "F B oC pC qC rC 5B",
            "132": "C G N O P EB u v w WC sC 6B"
        },
        G: {
            "1": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "16": "HC tC",
            "132": "E XC uC vC wC xC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "16": "GD HD",
            "132": "AC J ID JD XC KD LD"
        },
        J: {
            "1": "A",
            "132": "D"
        },
        K: {
            "1": "H",
            "2": "A B 5B",
            "132": "C WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "33": "aD"
        }
    },
    B: 1,
    C: "CSS :read-only and :read-write selectors",
    D: true
};

},{}],"bVqf0":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P",
            "164": "Q H R S T U V W X Y Z a b c d e f g h"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB bC cC",
            "322": "ZB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y",
            "164": "FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h"
        },
        E: {
            "1": "E F A B C L M G gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K dC HC eC",
            "164": "D fC"
        },
        F: {
            "1": "V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "164": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U"
        },
        G: {
            "1": "E wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC",
            "164": "KD LD"
        },
        J: {
            "2": "D",
            "164": "A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y WD XD",
            "164": "J MD ND OD PD QD IC RD SD TD UD VD 8B 9B"
        },
        Q: {
            "164": "YD"
        },
        R: {
            "164": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "text-emphasis styling",
    D: true
};

},{}],"e0FO2":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E YC",
            "8": "F",
            "292": "A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "292": "C L M G"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P bC cC",
            "8": "EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB",
            "584": "UB VB WB XB YB ZB aB bB cB dB eB fB",
            "1025": "gB hB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y",
            "8": "FB GB HB IB",
            "200": "JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB",
            "1025": "lB"
        },
        E: {
            "1": "B C L M G IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB dC HC eC",
            "8": "K D E F A fC gC hC"
        },
        F: {
            "1": "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB oC pC qC rC 5B WC sC 6B",
            "200": "IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB"
        },
        G: {
            "1": "1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "8": "E vC wC xC yC zC 0C"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD",
            "8": "XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "292": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "MD",
            "8": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 4,
    C: "CSS Grid Layout (level 1)",
    D: true
};

},{}],"5pxlz":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D YC",
            "161": "E F A B"
        },
        B: {
            "2": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "161": "C L M G N O P"
        },
        C: {
            "2": "0 1 2 3 4 5 6 7 8 9 ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC bC cC"
        },
        D: {
            "2": "0 1 2 3 4 5 6 7 8 9 J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        E: {
            "2": "J DB K D E F A B C L M G dC HC eC fC gC hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC"
        },
        F: {
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "2": "AC J I GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "2": "A B C H 5B WC 6B"
        },
        L: {
            "2": "I"
        },
        M: {
            "2": "t"
        },
        N: {
            "16": "A B"
        },
        O: {
            "2": "7B"
        },
        P: {
            "2": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        Q: {
            "2": "YD"
        },
        R: {
            "2": "ZD"
        },
        S: {
            "2": "aD bD"
        }
    },
    B: 5,
    C: "CSS Text 4 text-spacing",
    D: false
};

},{}],"1cdXm":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "16": "ZC",
            "33": "AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "16": "J DB K D E F A B C L M",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB"
        },
        E: {
            "1": "F A B C L M G hC IC 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "16": "J DB K dC HC eC",
            "33": "D E fC gC"
        },
        F: {
            "1": "gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB"
        },
        G: {
            "1": "yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "16": "HC tC XC uC",
            "33": "E vC wC xC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "16": "AC J GD HD ID JD XC",
            "33": "KD LD"
        },
        J: {
            "16": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y QD IC RD SD TD UD VD 8B 9B WD XD",
            "16": "J",
            "33": "MD ND OD PD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "33": "aD"
        }
    },
    B: 5,
    C: "CSS :any-link selector",
    D: true
};

},{}],"jJrdx":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G",
            "33": "N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F bC cC",
            "33": "A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "B C L M G 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB dC HC eC nC",
            "33": "K D E F A fC gC hC IC"
        },
        G: {
            "1": "2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "33": "E vC wC xC yC zC 0C 1C"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        }
    },
    B: 6,
    C: "isolate from unicode-bidi",
    D: undefined
};

},{}],"akbkN":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F bC cC",
            "33": "A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB oC pC qC rC 5B WC sC 6B"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "B C L M G 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB dC HC eC nC",
            "33": "K D E F A fC gC hC IC"
        },
        G: {
            "1": "2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "33": "E vC wC xC yC zC 0C 1C"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        }
    },
    B: 6,
    C: "plaintext from unicode-bidi",
    D: undefined
};

},{}],"1xazV":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB"
        },
        L: {
            "1": "I"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N bC cC",
            "33": "O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "1": "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB oC pC qC rC 5B WC sC 6B"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        E: {
            "1": "B C L M G 5B 6B iC jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB K dC HC eC fC nC",
            "33": "D E F A gC hC IC"
        },
        G: {
            "1": "2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC vC",
            "33": "E wC xC yC zC 0C 1C"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        }
    },
    B: 6,
    C: "isolate-override from unicode-bidi",
    D: undefined
};

},{}],"htcSj":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F YC",
            "132": "A B"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "132": "C L M G N O",
            "516": "P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB bC cC"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB",
            "260": "pB qB"
        },
        E: {
            "1": "8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D E F A B C L M dC HC eC fC gC hC IC 5B 6B iC",
            "1090": "G jC kC JC KC 7B lC"
        },
        F: {
            "1": "gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB oC pC qC rC 5B WC sC 6B",
            "260": "eB fB"
        },
        G: {
            "1": "8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD",
            "1090": "BD CD JC KC 7B DD"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "132": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J MD ND OD"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "bD",
            "2": "aD"
        }
    },
    B: 5,
    C: "CSS overscroll-behavior",
    D: true
};

},{}],"c1ESd":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            "2": "K D E F A B YC"
        },
        B: {
            "1": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t",
            "2": "C L M G N O P"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB bC cC",
            "194": "SB TB UB"
        },
        D: {
            "1": "0 1 2 3 4 5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC",
            "2": "J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB"
        },
        E: {
            "1": "M G jC kC JC KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC nC",
            "2": "J DB K D E F dC HC eC fC gC hC",
            "16": "A",
            "33": "B C L IC 5B 6B iC"
        },
        F: {
            "1": "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s",
            "2": "F B C G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB oC pC qC rC 5B WC sC 6B"
        },
        G: {
            "1": "0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "E HC tC XC uC vC wC xC yC zC"
        },
        H: {
            "2": "FD"
        },
        I: {
            "1": "I",
            "2": "AC J GD HD ID JD XC KD LD"
        },
        J: {
            "2": "D A"
        },
        K: {
            "1": "H",
            "2": "A B C 5B WC 6B"
        },
        L: {
            "1": "I"
        },
        M: {
            "1": "t"
        },
        N: {
            "2": "A B"
        },
        O: {
            "1": "7B"
        },
        P: {
            "1": "u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD",
            "2": "J"
        },
        Q: {
            "1": "YD"
        },
        R: {
            "1": "ZD"
        },
        S: {
            "1": "aD bD"
        }
    },
    B: 2,
    C: "CSS text-orientation",
    D: true
};

},{}],"31QDf":[function(require,module,exports) {
module.exports = {
    A: {
        D: {
            "2": "J DB K D E F A B C L M G N",
            "33": "0 1 2 3 4 5 6 7 8 9 O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t EC FC GC"
        },
        L: {
            "33": "I"
        },
        B: {
            "2": "C L M G N O P",
            "33": "0 1 2 3 4 5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s z AB BB CB I t"
        },
        C: {
            "1": "0 1 2 3 4 5 6 7 8 9 g h i j k l m n o p q r s z AB BB CB I t EC FC GC aC",
            "2": "ZC AC J DB K D E F A B C L M G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB bC cC",
            "33": "cB dB eB fB gB hB iB jB kB lB mB BC nB CC oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f"
        },
        M: {
            "1": "t"
        },
        A: {
            "2": "K D E F A B YC"
        },
        F: {
            "2": "F B C oC pC qC rC 5B WC sC 6B",
            "33": "G N O P EB u v w x y FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B Q H R DC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s"
        },
        K: {
            "2": "A B C 5B WC 6B",
            "33": "H"
        },
        E: {
            "1": "KC 7B lC 8B LC MC NC OC PC mC 9B QC RC SC TC UC VC",
            "2": "J DB dC HC eC nC",
            "33": "K D E F A B C L M G fC gC hC IC 5B 6B iC jC kC JC"
        },
        G: {
            "1": "KC 7B DD 8B LC MC NC OC PC ED 9B QC RC SC TC UC VC",
            "2": "HC tC XC uC",
            "33": "E vC wC xC yC zC 0C 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD JC"
        },
        P: {
            "33": "J u v w x y MD ND OD PD QD IC RD SD TD UD VD 8B 9B WD XD"
        },
        I: {
            "2": "AC J GD HD ID JD XC",
            "33": "I KD LD"
        }
    },
    B: 6,
    C: "print-color-adjust property",
    D: undefined
};

},{}],"bGWG3":[function(require,module,exports) {
let browserslist = require("e5b53a9216317f47");
function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
const NAMES = {
    and_chr: "Chrome for Android",
    and_ff: "Firefox for Android",
    and_qq: "QQ Browser",
    and_uc: "UC for Android",
    baidu: "Baidu Browser",
    ie: "IE",
    ie_mob: "IE Mobile",
    ios_saf: "iOS Safari",
    kaios: "KaiOS Browser",
    op_mini: "Opera Mini",
    op_mob: "Opera Mobile",
    samsung: "Samsung Internet"
};
function prefix(name, prefixes, note) {
    let out = `  ${name}`;
    if (note) out += " *";
    out += ": ";
    out += prefixes.map((i)=>i.replace(/^-(.*)-$/g, "$1")).join(", ");
    out += "\n";
    return out;
}
module.exports = function(prefixes) {
    if (prefixes.browsers.selected.length === 0) return "No browsers selected";
    let versions = {};
    for (let browser of prefixes.browsers.selected){
        let parts = browser.split(" ");
        let name = parts[0];
        let version = parts[1];
        name = NAMES[name] || capitalize(name);
        if (versions[name]) versions[name].push(version);
        else versions[name] = [
            version
        ];
    }
    let out = "Browsers:\n";
    for(let browser in versions){
        let list = versions[browser];
        list = list.sort((a, b)=>parseFloat(b) - parseFloat(a));
        out += `  ${browser}: ${list.join(", ")}\n`;
    }
    let coverage = browserslist.coverage(prefixes.browsers.selected);
    let round = Math.round(coverage * 100) / 100.0;
    out += `\nThese browsers account for ${round}% of all users globally\n`;
    let atrules = [];
    for(let name in prefixes.add){
        let data = prefixes.add[name];
        if (name[0] === "@" && data.prefixes) atrules.push(prefix(name, data.prefixes));
    }
    if (atrules.length > 0) out += `\nAt-Rules:\n${atrules.sort().join("")}`;
    let selectors = [];
    for (let selector of prefixes.add.selectors)if (selector.prefixes) selectors.push(prefix(selector.name, selector.prefixes));
    if (selectors.length > 0) out += `\nSelectors:\n${selectors.sort().join("")}`;
    let values = [];
    let props = [];
    let hadGrid = false;
    for(let name in prefixes.add){
        let data = prefixes.add[name];
        if (name[0] !== "@" && data.prefixes) {
            let grid = name.indexOf("grid-") === 0;
            if (grid) hadGrid = true;
            props.push(prefix(name, data.prefixes, grid));
        }
        if (!Array.isArray(data.values)) continue;
        for (let value of data.values){
            let grid = value.name.includes("grid");
            if (grid) hadGrid = true;
            let string = prefix(value.name, value.prefixes, grid);
            if (!values.includes(string)) values.push(string);
        }
    }
    if (props.length > 0) out += `\nProperties:\n${props.sort().join("")}`;
    if (values.length > 0) out += `\nValues:\n${values.sort().join("")}`;
    if (hadGrid) out += "\n* - Prefixes will be added only on grid: true option.\n";
    if (!atrules.length && !selectors.length && !props.length && !values.length) out += "\nAwesome! Your browsers don't require any vendor prefixes.\nNow you can remove Autoprefixer from build steps.";
    return out;
};

},{"e5b53a9216317f47":"h32Zo"}]},["8rYT3","1SICI"], "1SICI", "parcelRequire13c7")

//# sourceMappingURL=index.18dbc454.js.map
