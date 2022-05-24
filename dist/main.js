/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/plus-square.svg */ "./src/icons/plus-square.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/trash-2.svg */ "./src/icons/trash-2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Koulen&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-color: rgb(46, 55, 71);\n    --main-color-alpha: rgba(46, 55, 71, 0.267);\n    --main-color-lighter: hsl(218, 21%, 33%);\n    --light-color: rgb(227, 237, 255);\n    --red: rgb(181, 40, 40);\n    --red-lighter: hsl(0, 64%, 63%);\n}\n\n* {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\nheader {\n    z-index: 1;\n    background-color: var(--main-color);\n    color: var(--light-color);\n    padding: 5px 20px;\n    font-family: 'Koulen', cursive;\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n    box-shadow: 0px 3px 5px #2e37479f;\n}\n\nnav {\n    background-color: var(--light-color);\n    color: var(--main-color);\n}\n\nmain {\n    display: flex;\n    flex: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\n.nav-item,\n.project-item {\n    padding: 10px 40px;\n}\n\n.nav-list {\n    display: flex;\n    flex-direction: column;\n    font-weight: 700;\n    font-size: 1.5rem;\n    letter-spacing: 1px;\n    border-bottom: 2px solid var(--main-color);\n    padding: 20px 5px;\n}\n\n.projects {\n    font-size: 1.5rem;\n    padding: 20px 5px;\n}\n\n.project-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project,\n.add-task,\n.remove-project,\n.remove-task {\n    margin-top: 30px;\n    background-color: var(--main-color);\n    border-radius: 15px;\n    color: var(--light-color);\n    padding: 15px 25px;\n    align-self: center;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 1.2rem;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    gap: 3px;\n}\n\n.add-project::before,\n.add-task::before {\n    content: '';\n    display: inline-flex;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 20px 20px;\n    height: 20px;\n    width: 20px;\n}\n\n.add-project:hover,\n.add-task:hover {\n    cursor: pointer;\n    background-color: var(--main-color-lighter);\n}\n\n.remove-project,\n.remove-task {\n    background-color: var(--red);\n}\n\n.remove-project::before,\n.remove-task::before {\n    content: '';\n    display: inline-flex;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 20px 20px;\n    height: 20px;\n    width: 20px;\n}\n\n.remove-project:hover,\n.remove-task:hover {\n    cursor: pointer;\n    background-color: var(--red-lighter);\n}\n\n.remove-task,\n.add-task {\n    margin: 0;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.add-task {\n    padding: 10px 20px;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n    padding: 15px 30px;\n}\n\n.task-item:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n.task-item span {\n    font-size: 1.5rem;\n    color: black;\n}\n\n.task-item .name {\n    flex: 1;\n}\n\n.task-item .date {\n    margin-right: 20px;\n}\n\n.task-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.content {\n    background-color: rgba(0, 0, 0, 0.2);\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n}\n\n.content > h2 {\n    margin-top: 30px;\n    color: var(--main-color);\n    font-size: 2.5rem;\n}\n\n.nav-item:hover,\n.project-item:hover {\n    background-color: var(--main-color-alpha);\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.active {\n    border: 1px solid var(--main-color);\n    border-radius: 5px;\n}\n\n.project-modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%;\n    background-color: rgba(0,0,0,0.6); \n}\n\n.task-modal {\n    display: none;\n    position: fixed;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%;\n    background-color: rgba(0,0,0,0.6); \n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 30px;\n    margin: 15% auto;\n    padding: 10px 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    background-color: var(--light-color);\n    width: 300px;\n}\n\ninput {\n    padding: 10px;\n    margin-top: 20px;\n    font-size: 1.2rem;\n    outline: none;\n}\n\ninput:valid {\n    background-color: rgba(0, 128, 0, 0.185);\n    border: 2px solid rgba(0, 128, 0, 0.075);\n}\n\ninput:invalid {\n    border: 2px solid red;\n  }\n\n.remove-project {\n    margin-top: 100px;\n}\n\n.submit-project,\n.submit-task {\n    align-self: center;\n    padding: 10px 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 1.5rem;\n    font-weight: 300;\n    background-color: var(--main-color);\n    border-radius: 15px;\n    color: var(--light-color);\n}\n\n.submit-project:hover,\n.submit-task:hover {\n    cursor: pointer;\n    background-color: var(--main-color-lighter);\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');\n\n\n:root {\n    --main-color: rgb(46, 55, 71);\n    --main-color-alpha: rgba(46, 55, 71, 0.267);\n    --main-color-lighter: hsl(218, 21%, 33%);\n    --light-color: rgb(227, 237, 255);\n    --red: rgb(181, 40, 40);\n    --red-lighter: hsl(0, 64%, 63%);\n}\n\n* {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\nheader {\n    z-index: 1;\n    background-color: var(--main-color);\n    color: var(--light-color);\n    padding: 5px 20px;\n    font-family: 'Koulen', cursive;\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n    box-shadow: 0px 3px 5px #2e37479f;\n}\n\nnav {\n    background-color: var(--light-color);\n    color: var(--main-color);\n}\n\nmain {\n    display: flex;\n    flex: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\n.nav-item,\n.project-item {\n    padding: 10px 40px;\n}\n\n.nav-list {\n    display: flex;\n    flex-direction: column;\n    font-weight: 700;\n    font-size: 1.5rem;\n    letter-spacing: 1px;\n    border-bottom: 2px solid var(--main-color);\n    padding: 20px 5px;\n}\n\n.projects {\n    font-size: 1.5rem;\n    padding: 20px 5px;\n}\n\n.project-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project,\n.add-task,\n.remove-project,\n.remove-task {\n    margin-top: 30px;\n    background-color: var(--main-color);\n    border-radius: 15px;\n    color: var(--light-color);\n    padding: 15px 25px;\n    align-self: center;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 1.2rem;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    gap: 3px;\n}\n\n.add-project::before,\n.add-task::before {\n    content: '';\n    display: inline-flex;\n    background-image: url('./icons/plus-square.svg');\n    background-size: 20px 20px;\n    height: 20px;\n    width: 20px;\n}\n\n.add-project:hover,\n.add-task:hover {\n    cursor: pointer;\n    background-color: var(--main-color-lighter);\n}\n\n.remove-project,\n.remove-task {\n    background-color: var(--red);\n}\n\n.remove-project::before,\n.remove-task::before {\n    content: '';\n    display: inline-flex;\n    background-image: url('./icons/trash-2.svg');\n    background-size: 20px 20px;\n    height: 20px;\n    width: 20px;\n}\n\n.remove-project:hover,\n.remove-task:hover {\n    cursor: pointer;\n    background-color: var(--red-lighter);\n}\n\n.remove-task,\n.add-task {\n    margin: 0;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.add-task {\n    padding: 10px 20px;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n    padding: 15px 30px;\n}\n\n.task-item:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n.task-item span {\n    font-size: 1.5rem;\n    color: black;\n}\n\n.task-item .name {\n    flex: 1;\n}\n\n.task-item .date {\n    margin-right: 20px;\n}\n\n.task-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.content {\n    background-color: rgba(0, 0, 0, 0.2);\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n}\n\n.content > h2 {\n    margin-top: 30px;\n    color: var(--main-color);\n    font-size: 2.5rem;\n}\n\n.nav-item:hover,\n.project-item:hover {\n    background-color: var(--main-color-alpha);\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.active {\n    border: 1px solid var(--main-color);\n    border-radius: 5px;\n}\n\n.project-modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%;\n    background-color: rgba(0,0,0,0.6); \n}\n\n.task-modal {\n    display: none;\n    position: fixed;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%;\n    background-color: rgba(0,0,0,0.6); \n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 30px;\n    margin: 15% auto;\n    padding: 10px 20px;\n    border: 1px solid #888;\n    border-radius: 10px;\n    background-color: var(--light-color);\n    width: 300px;\n}\n\ninput {\n    padding: 10px;\n    margin-top: 20px;\n    font-size: 1.2rem;\n    outline: none;\n}\n\ninput:valid {\n    background-color: rgba(0, 128, 0, 0.185);\n    border: 2px solid rgba(0, 128, 0, 0.075);\n}\n\ninput:invalid {\n    border: 2px solid red;\n  }\n\n.remove-project {\n    margin-top: 100px;\n}\n\n.submit-project,\n.submit-task {\n    align-self: center;\n    padding: 10px 20px;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 1.5rem;\n    font-weight: 300;\n    background-color: var(--main-color);\n    border-radius: 15px;\n    color: var(--light-color);\n}\n\n.submit-project:hover,\n.submit-task:hover {\n    cursor: pointer;\n    background-color: var(--main-color-lighter);\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _deposit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit */ "./src/deposit.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





const App = (function() {
    let projectList = [];

    const addProject = (value) => {
        const project = new _project__WEBPACK_IMPORTED_MODULE_2__.Project(value);
        projectList.push(project);
        _deposit__WEBPACK_IMPORTED_MODULE_0__.deposit.populateStorage(projectList);
        _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.updateDOM(projectList);
    };

    const removeProject = (value) => {
        projectList.splice(value, 1);
        _deposit__WEBPACK_IMPORTED_MODULE_0__.deposit.populateStorage(projectList);
        _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.updateDOM(projectList);
    };

    const getProject = (index) => {
        return projectList[index];
    };

    const init = () => {
        if (!localStorage.getItem('Projects')) {
            _deposit__WEBPACK_IMPORTED_MODULE_0__.deposit.populateStorage(projectList);
        } else {
            projectList = _deposit__WEBPACK_IMPORTED_MODULE_0__.deposit.getStorage();
        }
        _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.updateDOM(projectList);

    };


    const handleEvents = () => {
        window.addEventListener('click', (e) => {
            if (e.target.className === 'project-item') {
                const index = e.target.dataset.key;
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.selectTab(index);
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.updateDOM(projectList[index]);
            }
            else if (e.target.className === 'add-project') {
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.openModal('project');
            }
            else if (e.target.className === 'add-task') {
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.openModal('task');
            }
            else if (e.target.className === 'remove-project') {
                const project = document.querySelector('.active');
                removeProject(project.dataset.key);
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.clearDOM('.content');
            }
            else if (e.target.className === 'remove-task') {
                const projectIndex = document.querySelector('.active').dataset.key;
                const taskIndex = e.target.parentElement.dataset.key;

                projectList[projectIndex].removeTask(taskIndex);
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.updateDOM(projectList[projectIndex]);
                _deposit__WEBPACK_IMPORTED_MODULE_0__.deposit.populateStorage(projectList);
            }
            else if (e.target.className === 'project-modal') {
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.closeModal('project');
            }
            else if (e.target.className === 'task-modal') {
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.closeModal('task');
            }
            else if (e.target.className === 'submit-project') {
                const input = document.getElementById('title').value;
                if (input === '') {
                    return;
                }
                addProject(input);
              
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.selectTab(projectList.length - 1);
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.updateDOM(projectList[projectList.length - 1]);
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.closeModal('project');
            }
            else if (e.target.className === 'submit-task') {
                const index = document.querySelector('.active').dataset.key;
                const name = document.getElementById('name').value;
                const date = document.getElementById('date').value;
                if (date === '' || name === '') {
                    console.log('error');
                    return;
                }
                const project = getProject(index);
                const task = new _task__WEBPACK_IMPORTED_MODULE_3__.Task(name, date);

                project.addTask(task);
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.updateDOM(project);
                _deposit__WEBPACK_IMPORTED_MODULE_0__.deposit.populateStorage(projectList);
                _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.closeModal('task');
            }
        });
    };

    return { addProject, handleEvents, init };
})();



/***/ }),

/***/ "./src/deposit.js":
/*!************************!*\
  !*** ./src/deposit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deposit": () => (/* binding */ deposit)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



const deposit = (function() {
    const populateStorage = (data) => {
        localStorage.setItem('Projects', JSON.stringify(data, null, " "));
    };
    
    const getStorage = () => {
        const data = JSON.parse(localStorage.getItem('Projects'));
        const projects = data.map((item) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(), item));
        for (let i = 0; i < projects.length; i++) {
            projects[i].tasks = projects[i].tasks.map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_1__.Task(), task));
        }
        return projects;
    };

    return { populateStorage, getStorage };
})();


 

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
const DOM = (function() {
    const updateDOM = (data) => {
        if (Array.isArray(data)) {
            //test if sending an array of objects i.e. a project list.
            const dom = clearDOM('.project-list');
            const button = createButton('Add', 'Project');

            data.forEach((item, index) => {
                const element = createNewItem(item, 'Project', index);
                dom.appendChild(element);
            });
            dom.appendChild(button);
        }
        else if ('tasks' in data) {
            //test if sending an object i.e a project that has a tasks attribute.
            const dom = clearDOM('.content');
    
            const addTaskBtn = createButton('Add', 'Task');
            const removeProjectBtn = createButton('Remove', 'Project');
    
            dom.innerHTML = `<h2>${data.name}</h2><ul class='task-list'></ul>`;
            const ul = document.querySelector('.task-list');
            console.log(ul);

            data.tasks.forEach((item, index) => {
                const element = createNewItem(item, 'Task', index);
                const removeTaskBtn = createButton('Remove', 'Task');
                element.appendChild(removeTaskBtn);
                ul.appendChild(element);
            });
            dom.appendChild(addTaskBtn);
            dom.appendChild(removeProjectBtn);
        }
    };

    const clearDOM = (element) => {
        const dom = document.querySelector(`${element}`);
        dom.innerHTML = ''; 
        return dom;
    };

    const openModal = (type) => {
        emptyInput();
        const modal = document.querySelector(`.${type}-modal`);
        modal.style.display = 'block';
    };

    const closeModal = (type) => {
        const modal = document.querySelector(`.${type}-modal`);
        modal.style.display = 'none';
    };

    const emptyInput = () => {
        const input = document.getElementById('title');
        input.value = '';
    };

    const createButton = (type, category) => {
        const button = document.createElement('button');
        if (category === 'Project') {
            button.innerText = `${type} ${category}`;
        }
        else {
            button.innerText = ``;
        }
        button.classList.add(`${type.toLowerCase()}-${category.toLowerCase()}`);

        return button;
    };

    const createNewItem = (item, category, index) => {
        const element = document.createElement('li');
        element.classList.add(`${category.toLowerCase()}-item`);
        element.innerHTML = (category === 'Task') ? `<span class='name'>${item.name}</span> <span class='date'>${item.dueDate}</span>` : `${item.name}`;
        element.dataset.key = index;

        return element;
    };

    const selectTab = (index) => {
        const tabs = document.querySelectorAll('.project-item');
        tabs.forEach((item) => {
            item.classList.remove('active');
        });
        const tab = document.querySelector(`.project-item[data-key='${index}']`);
        tab.classList.add('active');
    };

    return { updateDOM, openModal, closeModal, selectTab, clearDOM, };
})();



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }
    
    addTask(value) {
        this.tasks.push(value);
    }

    removeTask(value) {
        this.tasks.splice(value, 1);
    }
};



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }

    sayMyName() {
        console.log(this.name);
    }
};



/***/ }),

/***/ "./src/icons/plus-square.svg":
/*!***********************************!*\
  !*** ./src/icons/plus-square.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9580852e97e1bf931c5d.svg";

/***/ }),

/***/ "./src/icons/trash-2.svg":
/*!*******************************!*\
  !*** ./src/icons/trash-2.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7a2996e429128c182be.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


 


/*App.addProject('Default');
App.addProject('Default2');
App.addProject('Default3');*/

_app__WEBPACK_IMPORTED_MODULE_0__.App.init();
_app__WEBPACK_IMPORTED_MODULE_0__.App.handleEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVB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ZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlcG9zaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9wbHVzLXNxdWFyZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL3RyYXNoLTIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogcmdiKDQ2LCA1NSwgNzEpO1xcbiAgICAtLW1haW4tY29sb3ItYWxwaGE6IHJnYmEoNDYsIDU1LCA3MSwgMC4yNjcpO1xcbiAgICAtLW1haW4tY29sb3ItbGlnaHRlcjogaHNsKDIxOCwgMjElLCAzMyUpO1xcbiAgICAtLWxpZ2h0LWNvbG9yOiByZ2IoMjI3LCAyMzcsIDI1NSk7XFxuICAgIC0tcmVkOiByZ2IoMTgxLCA0MCwgNDApO1xcbiAgICAtLXJlZC1saWdodGVyOiBoc2woMCwgNjQlLCA2MyUpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdLb3VsZW4nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggIzJlMzc0NzlmO1xcbn1cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm5hdi1pdGVtLFxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXByb2plY3QsXFxuLmFkZC10YXNrLFxcbi5yZW1vdmUtcHJvamVjdCxcXG4ucmVtb3ZlLXRhc2sge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0OjpiZWZvcmUsXFxuLmFkZC10YXNrOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIsXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0ZXIpO1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3QsXFxuLnJlbW92ZS10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0OjpiZWZvcmUsXFxuLnJlbW92ZS10YXNrOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3Q6aG92ZXIsXFxuLnJlbW92ZS10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtbGlnaHRlcik7XFxufVxcblxcbi5yZW1vdmUtdGFzayxcXG4uYWRkLXRhc2sge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxufVxcblxcbi50YXNrLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrLWl0ZW0gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrLWl0ZW0gLm5hbWUge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udGFzay1pdGVtIC5kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLmNvbnRlbnQgPiBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlcixcXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1hbHBoYSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgXFxufVxcblxcbi50YXNrLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IFxcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC4xODUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDEyOCwgMCwgMC4wNzUpO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgfVxcblxcbi5yZW1vdmUtcHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uc3VibWl0LXByb2plY3QsXFxuLnN1Ym1pdC10YXNrIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0OmhvdmVyLFxcbi5zdWJtaXQtdGFzazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1saWdodGVyKTtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLDZCQUE2QjtJQUM3QiwyQ0FBMkM7SUFDM0Msd0NBQXdDO0lBQ3hDLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksU0FBUztDQUNaLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxVQUFV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aEIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLDJDQUEyQztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb3VsZW4mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6IHJnYig0NiwgNTUsIDcxKTtcXG4gICAgLS1tYWluLWNvbG9yLWFscGhhOiByZ2JhKDQ2LCA1NSwgNzEsIDAuMjY3KTtcXG4gICAgLS1tYWluLWNvbG9yLWxpZ2h0ZXI6IGhzbCgyMTgsIDIxJSwgMzMlKTtcXG4gICAgLS1saWdodC1jb2xvcjogcmdiKDIyNywgMjM3LCAyNTUpO1xcbiAgICAtLXJlZDogcmdiKDE4MSwgNDAsIDQwKTtcXG4gICAgLS1yZWQtbGlnaHRlcjogaHNsKDAsIDY0JSwgNjMlKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnS291bGVuJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4ICMyZTM3NDc5ZjtcXG59XFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5uYXYtaXRlbSxcXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LFxcbi5hZGQtdGFzayxcXG4ucmVtb3ZlLXByb2plY3QsXFxuLnJlbW92ZS10YXNrIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdDo6YmVmb3JlLFxcbi5hZGQtdGFzazo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaWNvbnMvcGx1cy1zcXVhcmUuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIsXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0ZXIpO1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3QsXFxuLnJlbW92ZS10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0OjpiZWZvcmUsXFxuLnJlbW92ZS10YXNrOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pY29ucy90cmFzaC0yLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0OmhvdmVyLFxcbi5yZW1vdmUtdGFzazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWxpZ2h0ZXIpO1xcbn1cXG5cXG4ucmVtb3ZlLXRhc2ssXFxuLmFkZC10YXNrIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbn1cXG5cXG4udGFzay1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFzay1pdGVtIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFzay1pdGVtIC5uYW1lIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2staXRlbSAuZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5jb250ZW50ID4gaDIge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXIsXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItYWxwaGEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IFxcbn1cXG5cXG4udGFzay1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpOyBcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0OnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuMTg1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAxMjgsIDAsIDAuMDc1KTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIH1cXG5cXG4ucmVtb3ZlLXByb2plY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0LFxcbi5zdWJtaXQtdGFzayB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdDpob3ZlcixcXG4uc3VibWl0LXRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItbGlnaHRlcik7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkZXBvc2l0IH0gZnJvbSBcIi4vZGVwb3NpdFwiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgQXBwID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodmFsdWUpO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICBkZXBvc2l0LnBvcHVsYXRlU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgICAgIERPTS51cGRhdGVET00ocHJvamVjdExpc3QpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgICAgIGRlcG9zaXQucG9wdWxhdGVTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICAgICAgRE9NLnVwZGF0ZURPTShwcm9qZWN0TGlzdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0W2luZGV4XTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSkge1xuICAgICAgICAgICAgZGVwb3NpdC5wb3B1bGF0ZVN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdExpc3QgPSBkZXBvc2l0LmdldFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBET00udXBkYXRlRE9NKHByb2plY3RMaXN0KTtcblxuICAgIH07XG5cblxuICAgIGNvbnN0IGhhbmRsZUV2ZW50cyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwcm9qZWN0LWl0ZW0nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmtleTtcbiAgICAgICAgICAgICAgICBET00uc2VsZWN0VGFiKGluZGV4KTtcbiAgICAgICAgICAgICAgICBET00udXBkYXRlRE9NKHByb2plY3RMaXN0W2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdhZGQtcHJvamVjdCcpIHtcbiAgICAgICAgICAgICAgICBET00ub3Blbk1vZGFsKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdhZGQtdGFzaycpIHtcbiAgICAgICAgICAgICAgICBET00ub3Blbk1vZGFsKCd0YXNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdyZW1vdmUtcHJvamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdC5kYXRhc2V0LmtleSk7XG4gICAgICAgICAgICAgICAgRE9NLmNsZWFyRE9NKCcuY29udGVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncmVtb3ZlLXRhc2snKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmRhdGFzZXQua2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5rZXk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnJlbW92ZVRhc2sodGFza0luZGV4KTtcbiAgICAgICAgICAgICAgICBET00udXBkYXRlRE9NKHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0pO1xuICAgICAgICAgICAgICAgIGRlcG9zaXQucG9wdWxhdGVTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2plY3QtbW9kYWwnKSB7XG4gICAgICAgICAgICAgICAgRE9NLmNsb3NlTW9kYWwoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Rhc2stbW9kYWwnKSB7XG4gICAgICAgICAgICAgICAgRE9NLmNsb3NlTW9kYWwoJ3Rhc2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3N1Ym1pdC1wcm9qZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0ID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFByb2plY3QoaW5wdXQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBET00uc2VsZWN0VGFiKHByb2plY3RMaXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIERPTS51cGRhdGVET00ocHJvamVjdExpc3RbcHJvamVjdExpc3QubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIERPTS5jbG9zZU1vZGFsKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdzdWJtaXQtdGFzaycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5kYXRhc2V0LmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gJycgfHwgbmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhuYW1lLCBkYXRlKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICBET00udXBkYXRlRE9NKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGRlcG9zaXQucG9wdWxhdGVTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICAgICAgICAgICAgICBET00uY2xvc2VNb2RhbCgndGFzaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgaGFuZGxlRXZlbnRzLCBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBBcHAgfTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgZGVwb3NpdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwb3B1bGF0ZVN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCBcIiBcIikpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZ2V0U3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEubWFwKChpdGVtKSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIGl0ZW0pKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3MgPSBwcm9qZWN0c1tpXS50YXNrcy5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgcG9wdWxhdGVTdG9yYWdlLCBnZXRTdG9yYWdlIH07XG59KSgpO1xuXG5leHBvcnQgeyBkZXBvc2l0IH07XG4gIiwiY29uc3QgRE9NID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHVwZGF0ZURPTSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAvL3Rlc3QgaWYgc2VuZGluZyBhbiBhcnJheSBvZiBvYmplY3RzIGkuZS4gYSBwcm9qZWN0IGxpc3QuXG4gICAgICAgICAgICBjb25zdCBkb20gPSBjbGVhckRPTSgnLnByb2plY3QtbGlzdCcpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdBZGQnLCAnUHJvamVjdCcpO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZU5ld0l0ZW0oaXRlbSwgJ1Byb2plY3QnLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb20uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgndGFza3MnIGluIGRhdGEpIHtcbiAgICAgICAgICAgIC8vdGVzdCBpZiBzZW5kaW5nIGFuIG9iamVjdCBpLmUgYSBwcm9qZWN0IHRoYXQgaGFzIGEgdGFza3MgYXR0cmlidXRlLlxuICAgICAgICAgICAgY29uc3QgZG9tID0gY2xlYXJET00oJy5jb250ZW50Jyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gY3JlYXRlQnV0dG9uKCdBZGQnLCAnVGFzaycpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGNyZWF0ZUJ1dHRvbignUmVtb3ZlJywgJ1Byb2plY3QnKTtcbiAgICBcbiAgICAgICAgICAgIGRvbS5pbm5lckhUTUwgPSBgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+PHVsIGNsYXNzPSd0YXNrLWxpc3QnPjwvdWw+YDtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codWwpO1xuXG4gICAgICAgICAgICBkYXRhLnRhc2tzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZU5ld0l0ZW0oaXRlbSwgJ1Rhc2snLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlVGFza0J0biA9IGNyZWF0ZUJ1dHRvbignUmVtb3ZlJywgJ1Rhc2snKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb20uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgICAgICAgICBkb20uYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJET00gPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnR9YCk7XG4gICAgICAgIGRvbS5pbm5lckhUTUwgPSAnJzsgXG4gICAgICAgIHJldHVybiBkb207XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGVtcHR5SW5wdXQoKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfS1tb2RhbGApO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dHlwZX0tbW9kYWxgKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuXG4gICAgY29uc3QgZW1wdHlJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09ICdQcm9qZWN0Jykge1xuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IGAke3R5cGV9ICR7Y2F0ZWdvcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBgYDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgJHt0eXBlLnRvTG93ZXJDYXNlKCl9LSR7Y2F0ZWdvcnkudG9Mb3dlckNhc2UoKX1gKTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVOZXdJdGVtID0gKGl0ZW0sIGNhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NhdGVnb3J5LnRvTG93ZXJDYXNlKCl9LWl0ZW1gKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAoY2F0ZWdvcnkgPT09ICdUYXNrJykgPyBgPHNwYW4gY2xhc3M9J25hbWUnPiR7aXRlbS5uYW1lfTwvc3Bhbj4gPHNwYW4gY2xhc3M9J2RhdGUnPiR7aXRlbS5kdWVEYXRlfTwvc3Bhbj5gIDogYCR7aXRlbS5uYW1lfWA7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5rZXkgPSBpbmRleDtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0VGFiID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJyk7XG4gICAgICAgIHRhYnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWl0ZW1bZGF0YS1rZXk9JyR7aW5kZXh9J11gKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyB1cGRhdGVET00sIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgc2VsZWN0VGFiLCBjbGVhckRPTSwgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERPTSB9OyIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tzID0gW10pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH1cbiAgICBcbiAgICBhZGRUYXNrKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgUHJvamVjdCB9OyIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzYXlNeU5hbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgVGFzayB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnOyBcblxuXG4vKkFwcC5hZGRQcm9qZWN0KCdEZWZhdWx0Jyk7XG5BcHAuYWRkUHJvamVjdCgnRGVmYXVsdDInKTtcbkFwcC5hZGRQcm9qZWN0KCdEZWZhdWx0MycpOyovXG5cbkFwcC5pbml0KCk7XG5BcHAuaGFuZGxlRXZlbnRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=