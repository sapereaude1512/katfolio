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
})({"j2YDk":[function(require,module,exports) {
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _referrals = require("./referrals/referrals");
var _referralsDefault = parcelHelpers.interopDefault(_referrals);
var _sendEmail = require("./email/send_email");
var _sendEmailDefault = parcelHelpers.interopDefault(_sendEmail);
var _projects = require("./projects/projects");
var _projectsDefault = parcelHelpers.interopDefault(_projects);
// show header
let lastScrollTop = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    let scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, 0);
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // console.log(maxScroll)
    // Check if the nav menu is open
    if (navMobileLinks.classList.contains("open")) return;
    if (scrollTop >= maxScroll) header.style.top = "-90px"; // Adjust based on header height
    else if (scrollTop > lastScrollTop) // Scroll down - hide header
    header.style.top = "-90px"; // Adjust based on header height
    else // Scroll up - show header
    header.style.top = "0";
    lastScrollTop = scrollTop;
});
// mobile nav
let navBtn = document.getElementById("menuBtn");
let navMobileLinks = document.getElementById("nav-mobile-links");
let navOpened = false;
const mobileCta = document.getElementById("mobile-cta");
function setNavState() {
    if (navOpened) {
        navOpened = false;
        navBtn.classList.add("open");
        navMobileLinks.classList.add("open");
    } else {
        navOpened = true;
        navBtn.classList.remove("open");
        navMobileLinks.classList.remove("open");
    }
}
setNavState(); // initial state
mobileCta.addEventListener("click", ()=>{
    navOpened = false;
    setNavState();
});
navBtn.onclick = function() {
    setNavState();
};
navMobileLinks.querySelectorAll("a").forEach((link)=>{
    link.onclick = function() {
        navOpened = false;
        setNavState();
    };
});
// project view
(0, _projectsDefault.default)();
window.addEventListener("resize", (0, _projectsDefault.default));
(0, _referralsDefault.default)();
(0, _sendEmailDefault.default)();

},{"./referrals/referrals":"hpsI6","./email/send_email":"kiOme","./projects/projects":"f9o8O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpsI6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const referrals = require("1b1b93a66a59139b");
function referralSlider() {
    let currentSlideIndex = 0;
    const showSlide = (slide, index, is_left = null)=>{
        const projectContainer = document.getElementById(slide);
        projectContainer.classList.remove("fade-out");
        projectContainer.classList.remove("fade-in");
        projectContainer.offsetWidth;
        if (is_left === false) projectContainer.classList.add("fade-out");
        else if (is_left === true) projectContainer.classList.add("fade-in");
        setTimeout(()=>{
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
        }, is_left == null ? 0 : 600);
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
            showSlide("slide1", currentSlideIndex, true);
            const isSlide2 = document.getElementById("slide2").offsetParent === null;
            if (!isSlide2) {
                currentSlideIndex = (currentSlideIndex - 1 + referrals.length) % referrals.length;
                showSlide("slide2", currentSlideIndex, true);
            }
        });
        caretLeft.addEventListener("dblclick", preventGetInTouch);
    }
    if (caretRight) {
        caretRight.addEventListener("click", ()=>{
            currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
            showSlide("slide1", currentSlideIndex, false);
            const isSlide2 = document.getElementById("slide2").offsetParent === null;
            if (!isSlide2) {
                currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
                showSlide("slide2", currentSlideIndex, false);
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
exports.default = referralSlider;

},{"1b1b93a66a59139b":"9QuiM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QuiM":[function(require,module,exports) {
module.exports = [
    {
        "title": {
            "text": "Dusan Bulatovic",
            "href": "https://www.linkedin.com/in/dusan-bulatovic-236112199/"
        },
        "about": [
            {
                "text": "Frontend Developer"
            },
            {
                "text": "Worked on the same team at Groschopp"
            }
        ],
        "quote": {
            "text": "Katarina has showcased remarkable talent, displaying a strong grasp of front-end technologies. She delivers high-quality interfaces that meet and exceed expectations. Her proactive approach and eagerness to collaborate have greatly contributed to our team's success."
        }
    },
    {
        "title": {
            "text": "Sebastian B.",
            "href": "https://www.linkedin.com/in/sebastian-brenninkmeijer-144305b8/"
        },
        "about": [
            {
                "text": "Art Director"
            },
            {
                "text": "Worked on the same team at Ink"
            }
        ],
        "quote": {
            "text": "Having managed Katarina for over a year I can say that she is a great asset for any company to have. She strives for perfection in everything she does and is always expanding her knowledge. I can say with great confidence that she is a true expert in her field with a lightning fast skill set."
        }
    },
    {
        "title": {
            "text": "Stefan Jovasevic",
            "href": "https://www.linkedin.com/in/stefan-jovasevic/"
        },
        "about": [
            {
                "text": "Frontend Developer"
            },
            {
                "text": "Worked on the same team at Ink"
            }
        ],
        "quote": {
            "text": "As a Frontend developer, it is important to work with a good designer. I had the pleasure of working with Katarina and I am impressed with her professionalism and dedication. Also, her communication skills and working ethics are amazing. I\u2019d highly recommend her."
        }
    },
    {
        "title": {
            "text": "Marko Milosavljevic",
            "href": "https://www.linkedin.com/in/marko-milosavljevi%C4%87-a73891173/"
        },
        "about": [
            {
                "text": "Product Designer"
            },
            {
                "text": "Worked on the same team at Brom"
            }
        ],
        "quote": {
            "text": "Katarina is outstanding person, always cheerful and ready to help. During time we worked together (she was a manager on few projects I worked at) her efforts and energy were off the charts. Her ability to look things through various perspectives served as a catalyst in many situations."
        }
    },
    {
        "title": {
            "text": "Mahmoud Ibrahim",
            "href": "https://www.linkedin.com/in/imahmoudibrahim/"
        },
        "about": [
            {
                "text": "Product Design Lead"
            },
            {
                "text": "Cooperated at ADPList"
            }
        ],
        "quote": {
            "text": "Not only is she talented and ambitious but her delightful personality makes her a pleasure to work with. Her skills are unmatched, and she approaches challenges with persistence and diligence. Her dedication and hard work make her an invaluable asset to any company."
        }
    },
    {
        "title": {
            "text": "Chris Cheng",
            "href": "https://www.linkedin.com/in/chris-cheng-hk/"
        },
        "about": [
            {
                "text": "Creative Director"
            },
            {
                "text": "Worked on the same team at Ink"
            }
        ],
        "quote": {
            "text": "I had the pleasure of working with Katarina as a UX/UI designer and highly recommend her for her exceptional design skills. Katarina has the unique ability to design visually appealing and effective UX/UI for a variety of media, including apps and specific device screens."
        }
    }
];

},{}],"gkKU3":[function(require,module,exports) {
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

},{}],"kiOme":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _emailjsCom = require("emailjs-com");
var _emailjsComDefault = parcelHelpers.interopDefault(_emailjsCom);
function initializeMailService() {
    // Initialize EmailJS
    const errorMessage = document.getElementById("errorMessageLbl");
    const submitButton = document.getElementById("submitBtn");
    const errorSvg = document.getElementById("emailErrorSvg");
    const successSvg = document.getElementById("emailSuccessSvg");
    const hideAll = ()=>{
        errorSvg.style.display = "none";
        successSvg.style.display = "none";
        errorMessage.textContent = "  ";
        submitButton.textContent = "Send an email";
    };
    const showError = (errorMsg)=>{
        errorSvg.style.display = "flex";
        successSvg.style.display = "none";
        errorMessage.classList.remove("success");
        errorMessage.textContent = errorMsg;
        submitButton.textContent = "Send an email";
        setTimeout(()=>hideAll(), 10000);
    };
    const showSuccess = ()=>{
        errorSvg.style.display = "none";
        successSvg.style.display = "flex";
        errorMessage.classList.add("success");
        errorMessage.textContent = "Email has been successfully sent.";
        submitButton.textContent = "Send an email";
        setTimeout(()=>hideAll(), 10000);
    };
    (0, _emailjsComDefault.default).init("IzMq_xMg2idAmujzL"); // Replace with your EmailJS public key
    document.getElementById("contactForm").addEventListener("submit", async function(e) {
        e.preventDefault(); // Prevent default form submission
        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value; //.trim();
        // Form validation
        if (!name || !email || !message) {
            showError("Check the inputs and resend an email.");
            return;
        }
        // Hide any previous error message
        hideAll();
        // Disable the button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        const templateParams = {
            to_name: "Katarina",
            from_name: name,
            message: message,
            from_mail: email,
            email: "katarinamaric1512@gmail.com"
        };
        (0, _emailjsComDefault.default).send("service_5n33lwg", "template_qow2oc2", templateParams).then((response)=>{
            // console.log("Email sent successfully!", response.status, response.text);
            showSuccess();
        }, (error)=>{
            // Show the error message if the email fails to send
            showError("Something went wrong while sending your email. Please try again later.");
            console.error("Failed to send email:", error);
        }).finally(()=>{
            // Re-enable the button and hide the spinner
            submitButton.disabled = false;
            submitButton.textContent = "Send an email";
        });
    });
}
exports.default = initializeMailService;

},{"emailjs-com":"18oDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"18oDj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>(0, _init.init));
parcelHelpers.export(exports, "send", ()=>(0, _send.send));
parcelHelpers.export(exports, "sendForm", ()=>(0, _sendForm.sendForm));
var _init = require("./methods/init/init");
var _send = require("./methods/send/send");
var _sendForm = require("./methods/sendForm/sendForm");
exports.default = {
    init: (0, _init.init),
    send: (0, _send.send),
    sendForm: (0, _sendForm.sendForm)
};

},{"./methods/init/init":"67aa8","./methods/send/send":"8d53v","./methods/sendForm/sendForm":"5YW33","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67aa8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _store = require("../../store/store");
const init = (userID, origin = "https://api.emailjs.com")=>{
    (0, _store.store)._userID = userID;
    (0, _store.store)._origin = origin;
};

},{"../../store/store":"bpIqO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpIqO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store);
const store = {
    _origin: "https://api.emailjs.com"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8d53v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "send", ()=>send);
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
const send = (serviceID, templateID, templatePrams, userID)=>{
    const uID = userID || (0, _store.store)._userID;
    (0, _validateParams.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: "3.2.0",
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams
    };
    return (0, _sendPost.sendPost)("/api/v1.0/email/send", JSON.stringify(params), {
        "Content-type": "application/json"
    });
};

},{"../../store/store":"bpIqO","../../utils/validateParams":"l47ah","../../api/sendPost":"etqkd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l47ah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateParams", ()=>validateParams);
const validateParams = (userID, serviceID, templateID)=>{
    if (!userID) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!serviceID) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!templateID) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etqkd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendPost", ()=>sendPost);
var _emailJSResponseStatus = require("../models/EmailJSResponseStatus");
var _store = require("../store/store");
const sendPost = (url, data, headers = {})=>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", ({ target })=>{
            const responseStatus = new (0, _emailJSResponseStatus.EmailJSResponseStatus)(target);
            if (responseStatus.status === 200 || responseStatus.text === "OK") resolve(responseStatus);
            else reject(responseStatus);
        });
        xhr.addEventListener("error", ({ target })=>{
            reject(new (0, _emailJSResponseStatus.EmailJSResponseStatus)(target));
        });
        xhr.open("POST", (0, _store.store)._origin + url, true);
        Object.keys(headers).forEach((key)=>{
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};

},{"../models/EmailJSResponseStatus":"7E7PA","../store/store":"bpIqO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7E7PA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmailJSResponseStatus", ()=>EmailJSResponseStatus);
class EmailJSResponseStatus {
    constructor(httpResponse){
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YW33":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendForm", ()=>sendForm);
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
const findHTMLForm = (form)=>{
    let currentForm;
    if (typeof form === "string") currentForm = document.querySelector(form);
    else currentForm = form;
    if (!currentForm || currentForm.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return currentForm;
};
const sendForm = (serviceID, templateID, form, userID)=>{
    const uID = userID || (0, _store.store)._userID;
    const currentForm = findHTMLForm(form);
    (0, _validateParams.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append("lib_version", "3.2.0");
    formData.append("service_id", serviceID);
    formData.append("template_id", templateID);
    formData.append("user_id", uID);
    return (0, _sendPost.sendPost)("/api/v1.0/email/send-form", formData);
};

},{"../../store/store":"bpIqO","../../utils/validateParams":"l47ah","../../api/sendPost":"etqkd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9o8O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageAdapter = require("./image_adapter");
var _imageAdapterDefault = parcelHelpers.interopDefault(_imageAdapter);
const projects = Object.values(require("4bf683fcb950ddf1"))[0];
let currentProjectIndex = 0;
const showProjectDesktop = (index, is_left = null)=>{
    const project = projects[index];
    if (!project) return;
    const projectContainer = document.querySelector(".desktop-project .frame");
    projectContainer.classList.remove("fade-out");
    projectContainer.classList.remove("fade-in");
    projectContainer.offsetWidth;
    if (is_left === true) projectContainer.classList.add("fade-out");
    else if (is_left === false) projectContainer.classList.add("fade-in");
    setTimeout(()=>{
        document.querySelector(".row-left h5").innerHTML = project.title;
        const clientLinks = project.client.map((client)=>`<a href="${client.href}" target="_blank">${client.text}</a>`).join(" ; ");
        document.querySelector(".row-right .p2").innerHTML = `Client: ${clientLinks}`;
        document.querySelector(".row-right .p2:nth-of-type(4)").textContent = project.timeframe;
        let stackContainer = document.querySelector(".row-stack");
        let images = stackContainer.querySelectorAll("img");
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
    }, is_left == null ? 0 : 600);
};
document.getElementById("caretLeftProj").addEventListener("click", ()=>{
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProjectDesktop(currentProjectIndex, true);
});
document.getElementById("caretRightProj").addEventListener("click", ()=>{
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProjectDesktop(currentProjectIndex, false);
});
function showProjectMobile() {
    const container = document.getElementById("mobile-projects");
    projects.forEach((project)=>{
        // Constructing client links dynamically
        const clientLinks = project.client.map((client)=>`<a href="${client.href}" target="_blank">${client.text}</a>`).join("; ");
        // Constructing tech stack images dynamically
        const techStackImages = project.stack.map((tech)=>`<img src=${(0, _imageAdapterDefault.default)[tech]} alt="${tech.split(".")[0]}">`).join("");
        // Adding project HTML dynamically
        container.innerHTML += `
            <input type="checkbox" id="toggle-content-${project.title}" hidden aria-label="Toggle content visibility" />
            <div class="frame">
                <label class="lbl-frame" for="toggle-content-${project.title}">
                    <div class="row-wrap">
                        <div class="row-left">
                            <h5>${project.title}</h5>
                        </div>
                        <svg class="toggle-arrow" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.1156 14.9154C32.2317 14.7993 32.3696 14.7072 32.5213 14.6443C32.6731 14.5815 32.8357 14.5491 33 14.5491C33.1642 14.5491 33.3268 14.5815 33.4786 14.6443C33.6303 14.7072 33.7682 14.7993 33.8843 14.9154C34.0005 15.0316 34.0926 15.1694 34.1555 15.3212C34.2183 15.4729 34.2507 15.6356 34.2507 15.7998C34.2507 15.964 34.2183 16.1267 34.1555 16.2784C34.0926 16.4302 34.0005 16.568 33.8843 16.6842L21.3843 29.1842C21.2682 29.3004 21.1304 29.3926 20.9786 29.4555C20.8269 29.5184 20.6642 29.5508 20.5 29.5508C20.3357 29.5508 20.173 29.5184 20.0213 29.4555C19.8695 29.3926 19.7317 29.3004 19.6156 29.1842L7.11559 16.6842C6.88104 16.4496 6.74927 16.1315 6.74927 15.7998C6.74927 15.4681 6.88104 15.15 7.11559 14.9154C7.35014 14.6809 7.66826 14.5491 7.99996 14.5491C8.33167 14.5491 8.64979 14.6809 8.88434 14.9154L20.5 26.5326L32.1156 14.9154Z" fill="#CBCBCB"/>
                        </svg>
                    </div>
                </label>
            </div>
            <div class="content">
                <div class="column">
                    <div class="row-left">
                        <p class="p2">Client: ${clientLinks}</p>
                        <p class="p2"> | </p>
                        <p class="p2">Time frame:</p>
                        <p class="p2">${project.timeframe}</p>
                    </div>
                    <div class="row-stack">
                        ${techStackImages}
                    </div>
                </div>
                <div class="row-wrap">
                    <div class='column-content'>
                        <h5>Overview</h5>
                        <p class="p1">${project.overview.text}</p>
                    </div>
                    <div class='column-content'>
                        <h5>My role</h5>
                        <p class="p1">${project.role.text}</p>
                    </div>
                </div>
                <div class="achievements">
                    <div class="row-wrap">
                        <div class="column-achievements">
                            <img src=${require("1ed90fcc597973c7")} alt="clock svg">
                            <p class="p1">${project.achievements[0]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("8325f74cbf1ed9f8")} alt="handshake svg">
                            <p class="p1">${project.achievements[1]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("f9a9f396691f6212")} alt="speed svg">
                            <p class="p1">${project.achievements[2]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("6db40155780d1536")} alt="speed svg">
                            <p class="p1">${project.achievements[3]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("63a8d4d90e653e80")} alt="speed svg">
                            <p class="p1">${project.achievements[4]}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.querySelector(".mobile-project");
    const allContents = container.querySelectorAll(".content");
    const allArrows = // Close all other contents
    allContents.forEach((content)=>{
        content.style.opacity = "0";
        content.style.maxHeight = "0";
        content.style.padding = "0";
    });
    container.querySelectorAll(".toggle-arrow").forEach((arrow)=>arrow.classList.remove("rotate"));
    // Handle toggling content visibility
    container.addEventListener("click", (event)=>{
        const toggleLabel = event.target.closest(".lbl-frame");
        if (toggleLabel) {
            const currentFrame = toggleLabel.closest(".frame");
            const currentContent = currentFrame.nextElementSibling;
            const allContents = container.querySelectorAll(".content");
            const toggleArrow = toggleLabel.querySelector(".toggle-arrow");
            let isBefore = true;
            let offset = 0;
            // Close all other contents
            allContents.forEach((content)=>{
                if (content !== currentContent) {
                    if (isBefore && content.style.maxHeight !== "0px") // currentPosition = document.documentElement.scrollTop;  
                    offset += Math.round(content.getBoundingClientRect().top);
                    content.style.opacity = "0";
                    content.style.maxHeight = "0";
                    content.style.padding = "0";
                } else isBefore = false;
            });
            if (offset !== 0) {
                const topPosition = offset + window.scrollY - 100;
                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth"
                });
            }
            container.querySelectorAll(".toggle-arrow").forEach((arrow)=>arrow.classList.remove("rotate"));
            // Toggle the current content
            const isOpen = currentContent.style.maxHeight !== "0px";
            isOpen ? toggleArrow.classList.remove("rotate") : toggleArrow.classList.add("rotate");
            currentContent.style.opacity = isOpen ? "0" : "1";
            currentContent.style.maxHeight = isOpen ? "0" : "400vh";
            currentContent.style.paddingTop = isOpen ? "0" : "2rem";
            currentContent.style.paddingBottom = isOpen ? "0" : "4rem";
        }
    });
});
// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return window.innerWidth <= 768; // Example: Screen width <= 768px is considered mobile
}
// Function to initialize the correct project view
function initializeProjectView() {
    let mobileProjects = document.getElementById("mobile-projects");
    let desktopProjects = document.getElementById("desktop-project");
    if (isMobileDevice()) {
        if (mobileProjects.style.display != "flex") {
            mobileProjects.style.display = "flex";
            desktopProjects.style.display = "none";
        }
    } else if (desktopProjects.style.display != "flex") {
        showProjectDesktop(currentProjectIndex); // Execute this function for desktop devices
        mobileProjects.style.display = "none";
        desktopProjects.style.display = "flex";
    }
}
//initial population of mobile version 
showProjectMobile(); // Execute this function for mobile devices
exports.default = initializeProjectView;

},{"4bf683fcb950ddf1":"ijL96","./image_adapter":"bKT6V","1ed90fcc597973c7":"dkwF6","8325f74cbf1ed9f8":"iomrJ","f9a9f396691f6212":"i72Ql","6db40155780d1536":"cUx0t","63a8d4d90e653e80":"dJJeM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijL96":[function(require,module,exports) {
module.exports = {
    "projects": [
        {
            "title": "Software solution for<br>cutting machine",
            "client": [
                {
                    "text": "Sormac",
                    "href": "https://www.sormac.eu/en/"
                }
            ],
            "timeframe": "2023-Present",
            "stack": [
                "js.svg",
                "python.svg",
                "flask.svg",
                "jinja.svg",
                "html5.svg",
                "css3.svg",
                "figma.svg"
            ],
            "overview": {
                "text": '<a href="https://sormac.com/en-gb/machines/slice-and-wedge-cutter-fs3600" target="_blank">FS-3600</a> machine allows precise cutting of fruits and vegetables into wedges, slices, or sticks, depending on the desired size. The software, implemented on a Raspberry Pi, facilitates the seamless operation of the machine. I have developed the HMI design, which not only enhances the user experience but also facilitates the continuous improvement of the software and overall capabilities. The intuitive interface enables users to easily select and adjust cutting configurations to match specific requirements. This project aims to enhance food preparation efficiency while maintaining high levels of accuracy and consistency.'
            },
            "role": {
                "text": 'I played a key role in designing and developing the client side of the software for this machine. Our software was presented in 2024 on <a href="https://youtu.be/OrGx-mS3buA?si=eO8AiMGt0jUPSjKd" target="_blank">fair in Berlin</a> and <a href="https://www.anugafoodtec.com/exhibitor/foodcons_gmbh_-_co/" target="_blank">fair in Cologne</a>. It gained a great amount of positive feedback. In\xa0parallel with this, I\xa0developed a\xa0UI\xa0Kit with scalability in\xa0mind, which greatly impacted the speed of\xa0product development and shortened the time to\xa0market entry.'
            },
            "achievements": [
                "Reduced 2x the training time for factory workers",
                "Attracted attention at major fairs in Germany",
                "Sped up 2x total cutting time of products",
                "Implemented feedback to improve 10+ features",
                "Achieved 20% reduction in development time"
            ]
        },
        {
            "title": "Reshaping the future<br>of aviation industry",
            "client": [
                {
                    "text": "Ink Innovation",
                    "href": "https://www.innovation.ink/"
                }
            ],
            "timeframe": "2023-2024",
            "stack": [
                "notion.svg",
                "discord.svg",
                "google.svg",
                "figma.svg"
            ],
            "overview": {
                "text": 'Ink Innovation is a provider of <a href="https://www.innovation.ink/solutions" target="_blank">unique ecosystem</a> of biometrics, mobile and cloud systems for the travel industry and organizations, which is handling around 58 million passengers annually, and is spread on 420+ airports world-wide, with 200+ carriers set up in the system. Ink projects I contributed to were advanced cloud-hosted departure control system with 1000+ functionalities, Ink Baggage reconciliation system and Ink Self-Service devices (Kiosk, Bag Drop, Totem) that I designed from scratch, as well as Ink Health.'
            },
            "role": {
                "text": "As a digital product designer, I was engaged in 4 major projects and my role consisted of: translating business needs and requirements into intuitive user experiences, designing comprehensive UX strategies, collaborating with the international teams, participating in rebranding, developing UI kit with scalability in mind, mentoring junior designers, and providing design process to create optimal solutions for interactive designs."
            },
            "achievements": [
                "Training time for agents reduced to around 3 hours",
                "Facilitated collaboration with 3 new clients",
                "Sped up total check-in time to 2-3 minutes",
                "Enhanced hundreds of features in a year",
                "Over 15% of reduction in development time"
            ]
        },
        {
            "title": "On-chain social<br>media marketplace",
            "client": [
                {
                    "text": "Adora Promo",
                    "href": "https://github.com/AdoraPromo"
                }
            ],
            "timeframe": "2023-2024",
            "stack": [
                "webflow.svg",
                "atlassian.svg",
                "slack.svg",
                "discord.svg",
                "google.svg",
                "figma.svg"
            ],
            "overview": {
                "text": '<a href="https://ethglobal.com/showcase/adora-promo-ia4yu" target="_blank">Adora Promo</a> is on-chain social media marketplace that uses AI to verify sponsored content. Advertisers send offers to creators with natural language requirements. Creators are paid based on the engagement their post receives. This project was a price winner at ETHOnline2023 hackathon. We tested this idea by launching a startup, however, we pivoted to focus on other opportunities.'
            },
            "role": {
                "text": "Collaborating as a frontend developer and designer included conducting comprehensive UX research, defining target market, creating a robust branding and design system. Seamless user experiences was ensured by producing wireframes, low-fidelity, and high-fidelity prototypes. I was continuously driving improvements in frontend code to enhance user engagement."
            },
            "achievements": [
                "Reduced twice required time for making matches",
                "Made collaboration with 5+ influencers",
                "Sped up post verification time to 30 seconds",
                "Implementing feedback resulted in rebranding",
                "Over 15% of reduction in development time"
            ]
        },
        {
            "title": "Mentoring juniors and<br>expanding knowledge",
            "client": [
                {
                    "text": "ADPList",
                    "href": "https://adplist.org/"
                },
                {
                    "text": "IxDF",
                    "href": "http://www.interaction-design.org/"
                }
            ],
            "timeframe": "2022-Present",
            "stack": [
                "js.svg",
                "google.svg",
                "webflow.svg",
                "notion.svg",
                "html5.svg",
                "css3.svg",
                "figma.svg"
            ],
            "overview": {
                "text": 'ADPList is a global community of mentors from 150 countries that offer <a href="https://adplist.org/mentors/katarina-popovic" target="_blank">1:1 expert guidance</a>. This knowledge-sharing platform is excellent for learning and connecting with colleagues. Interaction Design Foundation or IxDF offers a comprehensive range of online UX design courses taught by experts. I\u2019m grateful for all <a href="https://drive.google.com/drive/folders/15G2dxj33D1k3MTmBJ0pwayBLE8BmylzB?usp=drive_link" target="_blank">industry-recognized certificates</a> I gained. This platform is an excellent resource for advancing skills and staying updated with the latest trends.'
            },
            "role": {
                "text": 'As a mentor at ADPList, I enjoyed sharing my personal experiences and knowledge with mentees, while learning from their interesting insights. These online sessions were incredibly fulfilling, as I genuinely love helping people, especially knowing how challenging the beginning of a career can be. At the IxDF, I completed numerous courses and several master classes. My hard work paid off as I applied these new skills at work, garnering recognition. This dedication led to an <a href="https://www.linkedin.com/posts/the-interaction-design-foundation_katarina-finished-30-ixdf-courses-while-working-activity-7023342257634246656-Gwdg?utm_source=share&utm_medium=member_desktop" target="_blank">interview with the IxDF team</a>, where I shared my journey to inspire others to keep learning.'
            },
            "achievements": [
                "Provided with 700+ minutes of mentorship",
                "Made connection with 40+ mentees",
                "Ranked in top 10 mentors in industrial design",
                "Mentoring juniors resulted in enhanced skills",
                "Completed 30+ courses in less than 6 months"
            ]
        },
        {
            "title": "Gamified<br>NFT App",
            "client": [
                {
                    "text": "NFT Flipper",
                    "href": "https://taikai.network/ethbelgrade/hackathons/hackathon-2023/projects/cliinujot00g9wn011g01mj7s/idea"
                }
            ],
            "timeframe": "During 2023",
            "stack": [
                "notion.svg",
                "discord.svg",
                "google.svg",
                "figma.svg"
            ],
            "overview": {
                "text": 'NFT Flipper is an NFT matchmaking gambling dApp built at <a href="https://2023.ethbelgrade.rs/" target="_blank">ETHBelgrade2023 hackathon</a>. It provides an innovative solution to fragmented NFT utility and limited gameplay opportunities by combining staking, randomness, and winner-takes-all mechanics. Users stake their NFTs in matches, and the smart contract autonomously selects a random winner. The winner takes possession of staked NFTs, introducing an exciting element of risk.'
            },
            "role": {
                "text": "As a UX/UI designer, I conducted extensive UX research, defined the target market, and established branding and a design system. I ensured high-quality user experiences by creating wireframes, low-fidelity, and high-fidelity prototypes while continuously driving design enhancements to boost platform functionality. Also, I collaborated closely with developers to align design and technical aspects."
            },
            "achievements": [
                "Enhanced engagement through intuitive design",
                "Conducted user research and applied feedback",
                "Boosted platform usability and aesthetics",
                "Reduced user onboarding time by 25%",
                "Delivered fully functional prototype in 48 hours"
            ]
        }
    ]
};

},{}],"bKT6V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const image_adapter = {
    "html5.svg": require("d0a49e097802f847"),
    "css3.svg": require("e1bcd574bdb9c303"),
    "webflow.svg": require("98cd546a1f0945d5"),
    "figma.svg": require("cb6094989b70d204"),
    "python.svg": require("e5150ef2fc574f8c"),
    "flask.svg": require("6d350d50a1204d50"),
    "jinja.svg": require("c54c57da18ba7f14"),
    "atlassian.svg": require("cc54d7cceb704779"),
    "typescript.svg": require("4f0705472d434e38"),
    "notion.svg": require("1ec031c7ba4c5bc6"),
    "slack.svg": require("50b58b950a7c8795"),
    "discord.svg": require("8b0767b6ab72ce28"),
    "google.svg": require("762a4dd419a2cae0"),
    "js.svg": require("48dc419a412dc2df")
};
exports.default = image_adapter;

},{"d0a49e097802f847":"ebTaA","e1bcd574bdb9c303":"8gfLS","98cd546a1f0945d5":"kPSqB","cb6094989b70d204":"55N6P","e5150ef2fc574f8c":"cqmby","6d350d50a1204d50":"fRNzS","c54c57da18ba7f14":"dLbdY","cc54d7cceb704779":"3fKfT","4f0705472d434e38":"4SKEs","1ec031c7ba4c5bc6":"3qNQX","50b58b950a7c8795":"91P7C","8b0767b6ab72ce28":"1SPBs","762a4dd419a2cae0":"ihcbw","48dc419a412dc2df":"gOSBO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebTaA":[function(require,module,exports) {
module.exports = require("1f7b3be1b5960926").getBundleURL("10Mjw") + "html5.c36b348c.svg" + "?" + Date.now();

},{"1f7b3be1b5960926":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8gfLS":[function(require,module,exports) {
module.exports = require("45513b92644b1798").getBundleURL("10Mjw") + "css3.edce82ed.svg" + "?" + Date.now();

},{"45513b92644b1798":"lgJ39"}],"kPSqB":[function(require,module,exports) {
module.exports = require("9000db41cce28913").getBundleURL("10Mjw") + "webflow.f31033a0.svg" + "?" + Date.now();

},{"9000db41cce28913":"lgJ39"}],"55N6P":[function(require,module,exports) {
module.exports = require("377599ab77d3b9af").getBundleURL("10Mjw") + "figma.f22dd3e3.svg" + "?" + Date.now();

},{"377599ab77d3b9af":"lgJ39"}],"cqmby":[function(require,module,exports) {
module.exports = require("7fe713d3e202caa8").getBundleURL("10Mjw") + "python.a56c2fa5.svg" + "?" + Date.now();

},{"7fe713d3e202caa8":"lgJ39"}],"fRNzS":[function(require,module,exports) {
module.exports = require("33017ad2a750bf68").getBundleURL("10Mjw") + "flask.ad15b681.svg" + "?" + Date.now();

},{"33017ad2a750bf68":"lgJ39"}],"dLbdY":[function(require,module,exports) {
module.exports = require("1d50e43550023613").getBundleURL("10Mjw") + "jinja.dedde6cb.svg" + "?" + Date.now();

},{"1d50e43550023613":"lgJ39"}],"3fKfT":[function(require,module,exports) {
module.exports = require("2b2cf2eec7059843").getBundleURL("10Mjw") + "atlassian.6f9b9ec8.svg" + "?" + Date.now();

},{"2b2cf2eec7059843":"lgJ39"}],"4SKEs":[function(require,module,exports) {
module.exports = require("9653c4858e46764e").getBundleURL("10Mjw") + "typescript.9dbf7e35.svg" + "?" + Date.now();

},{"9653c4858e46764e":"lgJ39"}],"3qNQX":[function(require,module,exports) {
module.exports = require("b422418fc4b1d1ce").getBundleURL("10Mjw") + "notion.5967af3a.svg" + "?" + Date.now();

},{"b422418fc4b1d1ce":"lgJ39"}],"91P7C":[function(require,module,exports) {
module.exports = require("f338142c5c8e34db").getBundleURL("10Mjw") + "slack.8ebd4fd6.svg" + "?" + Date.now();

},{"f338142c5c8e34db":"lgJ39"}],"1SPBs":[function(require,module,exports) {
module.exports = require("31c26ed79a9a6f47").getBundleURL("10Mjw") + "discord.2d2c0caf.svg" + "?" + Date.now();

},{"31c26ed79a9a6f47":"lgJ39"}],"ihcbw":[function(require,module,exports) {
module.exports = require("812998e600a1665").getBundleURL("10Mjw") + "google.39d0783a.svg" + "?" + Date.now();

},{"812998e600a1665":"lgJ39"}],"gOSBO":[function(require,module,exports) {
module.exports = require("ded1d28a7d70cd4d").getBundleURL("10Mjw") + "js.d83e7333.svg" + "?" + Date.now();

},{"ded1d28a7d70cd4d":"lgJ39"}],"dkwF6":[function(require,module,exports) {
module.exports = require("947c7d8aeafee104").getBundleURL("10Mjw") + "clock.a54fd22c.svg" + "?" + Date.now();

},{"947c7d8aeafee104":"lgJ39"}],"iomrJ":[function(require,module,exports) {
module.exports = require("14d2bbf5a13067f2").getBundleURL("10Mjw") + "handshake.80417952.svg" + "?" + Date.now();

},{"14d2bbf5a13067f2":"lgJ39"}],"i72Ql":[function(require,module,exports) {
module.exports = require("19a04fe2ee6a4aca").getBundleURL("10Mjw") + "speed.93c14de6.svg" + "?" + Date.now();

},{"19a04fe2ee6a4aca":"lgJ39"}],"cUx0t":[function(require,module,exports) {
module.exports = require("61bc896492506919").getBundleURL("10Mjw") + "monitor.4732fdae.svg" + "?" + Date.now();

},{"61bc896492506919":"lgJ39"}],"dJJeM":[function(require,module,exports) {
module.exports = require("440618ceb1538eb2").getBundleURL("10Mjw") + "code.26576831.svg" + "?" + Date.now();

},{"440618ceb1538eb2":"lgJ39"}]},["j2YDk","1SICI"], "1SICI", "parcelRequire13c7")

//# sourceMappingURL=index.18dbc454.js.map
