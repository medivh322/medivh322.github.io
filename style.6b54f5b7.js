// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"fonts/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Mont-Thin.eot":[["Mont-Thin.d6ef3773.eot","fonts/Mont-Thin.eot"],"fonts/Mont-Thin.eot"],"./Mont-Thin.woff2":[["Mont-Thin.810c2793.woff2","fonts/Mont-Thin.woff2"],"fonts/Mont-Thin.woff2"],"./Mont-Thin.woff":[["Mont-Thin.7e44b754.woff","fonts/Mont-Thin.woff"],"fonts/Mont-Thin.woff"],"./Mont-Thin.ttf":[["Mont-Thin.9633a16e.ttf","fonts/Mont-Thin.ttf"],"fonts/Mont-Thin.ttf"],"./Mont-ExtraLight.eot":[["Mont-ExtraLight.3c306630.eot","fonts/Mont-ExtraLight.eot"],"fonts/Mont-ExtraLight.eot"],"./Mont-ExtraLight.woff2":[["Mont-ExtraLight.41dd4404.woff2","fonts/Mont-ExtraLight.woff2"],"fonts/Mont-ExtraLight.woff2"],"./Mont-ExtraLight.woff":[["Mont-ExtraLight.a3f0f81c.woff","fonts/Mont-ExtraLight.woff"],"fonts/Mont-ExtraLight.woff"],"./Mont-ExtraLight.ttf":[["Mont-ExtraLight.e338c855.ttf","fonts/Mont-ExtraLight.ttf"],"fonts/Mont-ExtraLight.ttf"],"./Mont-Light.eot":[["Mont-Light.9d79ba6e.eot","fonts/Mont-Light.eot"],"fonts/Mont-Light.eot"],"./Mont-Light.woff2":[["Mont-Light.0661da23.woff2","fonts/Mont-Light.woff2"],"fonts/Mont-Light.woff2"],"./Mont-Light.woff":[["Mont-Light.17ad3777.woff","fonts/Mont-Light.woff"],"fonts/Mont-Light.woff"],"./Mont-Light.ttf":[["Mont-Light.8ce3196d.ttf","fonts/Mont-Light.ttf"],"fonts/Mont-Light.ttf"],"./Mont-Regular.eot":[["Mont-Regular.635ca77b.eot","fonts/Mont-Regular.eot"],"fonts/Mont-Regular.eot"],"./Mont-Regular.woff2":[["Mont-Regular.059864fd.woff2","fonts/Mont-Regular.woff2"],"fonts/Mont-Regular.woff2"],"./Mont-Regular.woff":[["Mont-Regular.06bfd4e7.woff","fonts/Mont-Regular.woff"],"fonts/Mont-Regular.woff"],"./Mont-Regular.ttf":[["Mont-Regular.8f9e9b9f.ttf","fonts/Mont-Regular.ttf"],"fonts/Mont-Regular.ttf"],"./Mont-SemiBold.eot":[["Mont-SemiBold.e1de865e.eot","fonts/Mont-SemiBold.eot"],"fonts/Mont-SemiBold.eot"],"./Mont-SemiBold.woff2":[["Mont-SemiBold.d4b532fd.woff2","fonts/Mont-SemiBold.woff2"],"fonts/Mont-SemiBold.woff2"],"./Mont-SemiBold.woff":[["Mont-SemiBold.fa0d9d06.woff","fonts/Mont-SemiBold.woff"],"fonts/Mont-SemiBold.woff"],"./Mont-SemiBold.ttf":[["Mont-SemiBold.e41bce94.ttf","fonts/Mont-SemiBold.ttf"],"fonts/Mont-SemiBold.ttf"],"./Mont-Bold.eot":[["Mont-Bold.bdc11a31.eot","fonts/Mont-Bold.eot"],"fonts/Mont-Bold.eot"],"./Mont-Bold.woff2":[["Mont-Bold.986d696d.woff2","fonts/Mont-Bold.woff2"],"fonts/Mont-Bold.woff2"],"./Mont-Bold.woff":[["Mont-Bold.bf820966.woff","fonts/Mont-Bold.woff"],"fonts/Mont-Bold.woff"],"./Mont-Bold.ttf":[["Mont-Bold.ad2e3723.ttf","fonts/Mont-Bold.ttf"],"fonts/Mont-Bold.ttf"],"./Mont-Heavy.eot":[["Mont-Heavy.986663e9.eot","fonts/Mont-Heavy.eot"],"fonts/Mont-Heavy.eot"],"./Mont-Heavy.woff2":[["Mont-Heavy.281f1c06.woff2","fonts/Mont-Heavy.woff2"],"fonts/Mont-Heavy.woff2"],"./Mont-Heavy.woff":[["Mont-Heavy.aab8b25d.woff","fonts/Mont-Heavy.woff"],"fonts/Mont-Heavy.woff"],"./Mont-Heavy.ttf":[["Mont-Heavy.2d48ecc9.ttf","fonts/Mont-Heavy.ttf"],"fonts/Mont-Heavy.ttf"],"./Mont-Black.eot":[["Mont-Black.1a88ae20.eot","fonts/Mont-Black.eot"],"fonts/Mont-Black.eot"],"./Mont-Black.woff2":[["Mont-Black.aa3bacdc.woff2","fonts/Mont-Black.woff2"],"fonts/Mont-Black.woff2"],"./Mont-Black.woff":[["Mont-Black.2d620f42.woff","fonts/Mont-Black.woff"],"fonts/Mont-Black.woff"],"./Mont-Black.ttf":[["Mont-Black.b8a007e2.ttf","fonts/Mont-Black.ttf"],"fonts/Mont-Black.ttf"],"_css_loader":"../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/bootstrap.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../fonts/stylesheet.css":"fonts/stylesheet.css","./bootstrap.css":"css/bootstrap.css","./..\\img\\bg-comp.png":[["bg-comp.71e74896.png","img/bg-comp.png"],"img/bg-comp.png"],"./..\\img\\bg-mobile.png":[["bg-mobile.55454341.png","img/bg-mobile.png"],"img/bg-mobile.png"],"./..\\img\\burger-open.svg":[["burger-open.5128a728.svg","img/burger-open.svg"],"img/burger-open.svg"],"./..\\img\\header-transparent.png":[["header-transparent.5f81b21d.png","img/header-transparent.png"],"img/header-transparent.png"],"./..\\img\\burger-no-open.svg":[["burger-no-open.679c858d.svg","img/burger-no-open.svg"],"img/burger-no-open.svg"],"./..\\img\\galochka.svg":[["galochka.43fc5a00.svg","img/galochka.svg"],"img/galochka.svg"],"./..\\img\\arrow-right.svg":[["arrow-right.77e558a1.svg","img/arrow-right.svg"],"img/arrow-right.svg"],"C:\\projects\\elizaveta_kirenko\\img\\about-1.svg":[["about-1.01eaf7b8.svg","img/about-1.svg"],"img/about-1.svg"],"C:\\projects\\elizaveta_kirenko\\img\\about-2.svg":[["about-2.d69d39c6.svg","img/about-2.svg"],"img/about-2.svg"],"./..\\img\\form-bg.png":[["form-bg.b0acd48d.png","img/form-bg.png"],"img/form-bg.png"],"./..\\img\\email_icon-2.svg":[["email_icon-2.bb58bda3.svg","img/email_icon-2.svg"],"img/email_icon-2.svg"],"./..\\img\\tel_icon.svg":[["tel_icon.06872358.svg","img/tel_icon.svg"],"img/tel_icon.svg"],"./..\\img\\personal_icon.svg":[["personal_icon.05ab5f7b.svg","img/personal_icon.svg"],"img/personal_icon.svg"],"_css_loader":"../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64804" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../Users/Emil/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.6b54f5b7.js.map