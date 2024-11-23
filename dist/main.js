/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles/editScreen.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles/editScreen.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.edit-screen {\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border: 2px solid rgba(255, 255, 255, 0.2);\r\n  border-radius: 10px;\r\n}\r\n\r\n.edit-screen > h2 {\r\n  padding-top: 1em;\r\n  text-align: center;\r\n}\r\n.board-to-edit {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: start;\r\n  justify-content: center;\r\n  gap: 4em;\r\n  padding: 2em 3em 1em 3em;\r\n}\r\n\r\n.board-to-edit > .gameboard {\r\n  flex: 1;\r\n}\r\n\r\n.ships-container {\r\n  max-width: 420px;\r\n  flex: 1;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  gap: 2px;\r\n}\r\n\r\n.drag-instructions {\r\n  width: 100%;\r\n}\r\n\r\n.ship {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  border-radius: 0.4em;\r\n  cursor: grab;\r\n  user-select: none;\r\n  transition: background-color 0.3s ease;\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.ship:first-of-type {\r\n  grid-column: span var(--ship-length);\r\n  grid-row: 1;\r\n}\r\n\r\n.ship:nth-of-type(2) {\r\n  grid-column: span var(--ship-length);\r\n  grid-row: 3;\r\n}\r\n\r\n.ship:nth-of-type(3) {\r\n  grid-column: 1 / span var(--ship-length);\r\n  grid-row: 5;\r\n}\r\n\r\n.ship:nth-of-type(4) {\r\n  grid-column: 5 / span var(--ship-length);\r\n  grid-row: 5;\r\n}\r\n\r\n.ship:nth-of-type(5) {\r\n  grid-column: 1 / span var(--ship-length);\r\n  grid-row: 7;\r\n}\r\n\r\n.ship:nth-of-type(6) {\r\n  grid-column: 4 / span var(--ship-length);\r\n  grid-row: 7;\r\n}\r\n\r\n.ship:active {\r\n  cursor: grabbing;\r\n}\r\n\r\n.ship.dragging {\r\n  opacity: 0.6;\r\n}\r\n\r\n.ship-placed {\r\n  background: red; /* Color to indicate the ship's placement */\r\n}\r\n/* Hover effect for potential ship placement */\r\n.board-cell.hover {\r\n  background: rgba(255, 0, 0, 0.3); /* Light red to indicate placement */\r\n}\r\n\r\n/* Mark cells occupied by ships */\r\n.board-cell.ship-placed {\r\n  background: red; /* Solid red for placed ships */\r\n}\r\n\r\n.edit-screen .button-container {\r\n  padding: 1em 0 2em 0;\r\n  margin: 0;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .board-to-edit {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n  }\r\n\r\n  .ships-container {\r\n    width: 100%;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(7, 1fr);\r\n  }\r\n\r\n  .ship {\r\n    aspect-ratio: var(--ship-length) / 1;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/editScreen.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles/gameboard.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles/gameboard.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Game Container */\r\n.game-container {\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  padding: 2em;\r\n  border-radius: 10px;\r\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Header */\r\n.game-header {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.game-header h1 {\r\n  font-size: 2.5em;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.game-header #game-status {\r\n  font-size: 1.2em;\r\n}\r\n\r\n/* Gameboards */\r\n.gameboards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 2em;\r\n}\r\n\r\n.gameboard-container {\r\n  flex: 1 1 45%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2% 5%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border: 2px solid rgba(255, 255, 255, 0.2);\r\n  border-radius: 10px;\r\n}\r\n\r\n.gameboard-container h2 {\r\n  text-align: center;\r\n  margin-bottom: 1.5em;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.gameboard {\r\n  max-width: 420px;\r\n  width: 100%;\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Individual Cell Styling */\r\n.board-table {\r\n  width: 100%;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n.board-row {\r\n  height: 10%;\r\n}\r\n\r\n.board-cell {\r\n  width: 10%;\r\n  height: 0;\r\n  position: relative;\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.board-cell:hover {\r\n  background: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.gameboard-1 .board-cell {\r\n  pointer-events: none;\r\n}\r\n\r\n.gameboard .hit {\r\n  background: red;\r\n}\r\n\r\n.gameboard .miss {\r\n  background: lightblue;\r\n}\r\n\r\n.indicator {\r\n  position: absolute;\r\n  font-size: 0.7em;\r\n}\r\n.row-indicator {\r\n  top: -2em;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.col-indicator {\r\n  left: -3em;\r\n  width: 2em;\r\n  text-align: right;\r\n  top: 1em;\r\n  height: 1em;\r\n}\r\n\r\n/* Buttons Styling */\r\n.button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2em;\r\n  margin-top: 1em;\r\n}\r\n\r\n.button-container > button {\r\n  padding: 0.5em 1em;\r\n  border-radius: 7px;\r\n  border: none;\r\n  background-color: rgb(171, 222, 253);\r\n  color: rgb(46, 49, 51);\r\n  font-size: 0.8em;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: opacity 200ms ease-in;\r\n}\r\n\r\n.button-container > button:hover {\r\n  opacity: 0.85;\r\n}\r\n\r\n.button-container > button:active {\r\n  background-color: #fdfdfd;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  body {\r\n    font-size: 12px;\r\n  }\r\n  .gameboards {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .gameboard-container {\r\n    width: 100%;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/gameboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles/general.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles/general.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../dist/50748c452ab29a2bf67d.jpg */ \"./dist/50748c452ab29a2bf67d.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General Reset */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Body Styling */\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  color: white;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center\r\n    fixed;\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/general.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/ui/styles/editScreen.css":
/*!**************************************!*\
  !*** ./src/ui/styles/editScreen.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_editScreen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./editScreen.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ui/styles/editScreen.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_editScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_editScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_editScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_editScreen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/editScreen.css?");

/***/ }),

/***/ "./src/ui/styles/gameboard.css":
/*!*************************************!*\
  !*** ./src/ui/styles/gameboard.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ui/styles/gameboard.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/gameboard.css?");

/***/ }),

/***/ "./src/ui/styles/general.css":
/*!***********************************!*\
  !*** ./src/ui/styles/general.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./general.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ui/styles/general.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/general.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nconst Gameboard = function () {\r\n  const board = Array(10)\r\n    .fill(null)\r\n    .map(() => Array(10).fill(null));\r\n\r\n  const ships = [];\r\n\r\n  function placeShip(x, y, ship, direction) {\r\n    if (direction == \"h\") {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        board[x][y + i] = ship;\r\n        ship.positions.push([x, y + i]);\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        board[x + i][y] = ship;\r\n        ship.positions.push([x + i, y]);\r\n      }\r\n    }\r\n    ships.push(ship);\r\n  }\r\n\r\n  function receiveAttack(x, y) {\r\n    const target = board[x][y];\r\n    if (target == null) {\r\n      board[x][y] = \"miss\";\r\n      return { hit: false, sunk: false };\r\n    } else if (target !== \"miss\") {\r\n      target.hit();\r\n      return { hit: true, sunk: target.isSunk(), ship: target };\r\n    }\r\n    return { hit: false, sunk: false };\r\n  }\r\n\r\n  function allShipsSunk() {\r\n    return ships.every((ship) => {\r\n      return ship.isSunk();\r\n    });\r\n  }\r\n\r\n  return { placeShip, receiveAttack, allShipsSunk, ships, board };\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/handleAttack.js":
/*!*****************************!*\
  !*** ./src/handleAttack.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAttack: () => (/* binding */ handleAttack)\n/* harmony export */ });\n/* harmony import */ var _ui_renderAttack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/renderAttack */ \"./src/ui/renderAttack.js\");\n/* harmony import */ var _ui_helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/helperFunctions */ \"./src/ui/helperFunctions.js\");\n/* harmony import */ var _pubSupPattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSupPattern */ \"./src/pubSupPattern.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst handleAttack = function ([\r\n  player,\r\n  gameboard,\r\n  cell,\r\n  gameboardSelector,\r\n]) {\r\n  const [x, y] = (0,_ui_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getCors)(cell);\r\n  const attackResult = player.attackEnemy(gameboard, x, y);\r\n\r\n  if (attackResult.hit) {\r\n    (0,_ui_renderAttack__WEBPACK_IMPORTED_MODULE_0__.renderHit)(cell);\r\n\r\n    if (attackResult.sunk) {\r\n      markSurroundingCellsAsMiss(\r\n        attackResult.ship,\r\n        gameboard,\r\n        gameboardSelector\r\n      );\r\n    } else {\r\n      (0,_ui_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getImmediateDiagonalCells)(x, y).forEach(([dx, dy]) => {\r\n        markMiss(dx, dy, gameboardSelector);\r\n      });\r\n    }\r\n  } else {\r\n    (0,_ui_renderAttack__WEBPACK_IMPORTED_MODULE_0__.renderMiss)(cell);\r\n    _pubSupPattern__WEBPACK_IMPORTED_MODULE_2__.events.emit(\"changeTurn\");\r\n  }\r\n\r\n  if (gameboard.allShipsSunk()) {\r\n    console.log(\"win\"); // Show win message\r\n  }\r\n};\r\n\r\nfunction markMiss(x, y, gameboardSelector) {\r\n  const cell = document.querySelector(\r\n    `${gameboardSelector} [data-cors=\"${x},${y}\"]`\r\n  );\r\n  if (cell && !cell.classList.contains(\"hit\")) {\r\n    (0,_ui_renderAttack__WEBPACK_IMPORTED_MODULE_0__.renderMiss)(cell);\r\n    removeEL(cell);\r\n  }\r\n}\r\n\r\nfunction markSurroundingCellsAsMiss(ship, gameboard, gameboardSelector) {\r\n  // Get first and last positions of the ship to mark only necessary surrounding cells\r\n  const firstPos = ship.positions[0];\r\n  const lastPos = ship.positions[ship.positions.length - 1];\r\n\r\n  [firstPos, lastPos].forEach(([x, y]) => {\r\n    (0,_ui_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getAllNeighboringCells)(x, y).forEach(([nx, ny]) => {\r\n      const neighborCell = document.querySelector(\r\n        `${gameboardSelector} [data-cors=\"${nx},${ny}\"]`\r\n      );\r\n\r\n      // Only mark as miss if the cell is empty (not a ship part) and not already hit\r\n      if (neighborCell && !gameboard.receiveAttack(nx, ny).hit) {\r\n        (0,_ui_renderAttack__WEBPACK_IMPORTED_MODULE_0__.renderMiss)(neighborCell);\r\n        removeEL(neighborCell);\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction removeEL(originalElement) {\r\n  const clonedElement = originalElement.cloneNode(true);\r\n  originalElement.parentNode.replaceChild(clonedElement, originalElement);\r\n}\r\n\r\n_pubSupPattern__WEBPACK_IMPORTED_MODULE_2__.events.on(\"submit-attack\", handleAttack);\r\n\n\n//# sourceURL=webpack://battleship/./src/handleAttack.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_styles_general_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/styles/general.css */ \"./src/ui/styles/general.css\");\n/* harmony import */ var _ui_styles_gameboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/styles/gameboard.css */ \"./src/ui/styles/gameboard.css\");\n/* harmony import */ var _ui_styles_editScreen_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/styles/editScreen.css */ \"./src/ui/styles/editScreen.css\");\n/* harmony import */ var _src_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/player */ \"./src/player.js\");\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _src_ships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/ships */ \"./src/ships.js\");\n/* harmony import */ var _ui_renderBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/renderBoard */ \"./src/ui/renderBoard.js\");\n/* harmony import */ var _handleAttack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handleAttack */ \"./src/handleAttack.js\");\n/* harmony import */ var _pubSupPattern__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pubSupPattern */ \"./src/pubSupPattern.js\");\n/* harmony import */ var _ui_changeTurns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/changeTurns */ \"./src/ui/changeTurns.js\");\n/* harmony import */ var _ui_renderEditScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/renderEditScreen */ \"./src/ui/renderEditScreen.js\");\n/* harmony import */ var _ui_setDragAndDrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/setDragAndDrop */ \"./src/ui/setDragAndDrop.js\");\n/* harmony import */ var _randomiseShips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./randomiseShips */ \"./src/randomiseShips.js\");\n/* harmony import */ var _revealShips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./revealShips */ \"./src/revealShips.js\");\n//import styles\r\n\r\n\r\n\r\n\r\n//import js modules\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction newGame() {\r\n  const player1 = (0,_src_player__WEBPACK_IMPORTED_MODULE_3__.Player)();\r\n  const player2 = (0,_src_player__WEBPACK_IMPORTED_MODULE_3__.Player)();\r\n\r\n  const gameboard1 = (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_4__.Gameboard)();\r\n  const gameboard2 = (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_4__.Gameboard)();\r\n\r\n  // By default place the ships randomly\r\n  const shipLengths = [5, 4, 3, 3, 2, 2];\r\n  (0,_randomiseShips__WEBPACK_IMPORTED_MODULE_12__.randomiseShips)(gameboard1, shipLengths);\r\n  (0,_randomiseShips__WEBPACK_IMPORTED_MODULE_12__.randomiseShips)(gameboard2, shipLengths);\r\n\r\n  (0,_ui_renderBoard__WEBPACK_IMPORTED_MODULE_6__.renderBoard)();\r\n\r\n  /*const ships = [\r\n    { length: 5, x: 1, y: 1, direction: \"h\" },\r\n    { length: 4, x: 1, y: 8, direction: \"v\" },\r\n    { length: 3, x: 4, y: 2, direction: \"h\" },\r\n    { length: 3, x: 6, y: 9, direction: \"v\" },\r\n    { length: 2, x: 7, y: 6, direction: \"v\" },\r\n    { length: 2, x: 8, y: 1, direction: \"h\" },\r\n  ];\r\n\r\n  ships.forEach(({ length, x, y, direction }) => {\r\n    gameboard1.placeShip(x, y, Ship(length), direction);\r\n    gameboard2.placeShip(x, y, Ship(length), direction);\r\n  });*/\r\n\r\n  let currentPlayer = player1;\r\n  let currentGameboard = gameboard2;\r\n  let currentGameboardSelector = \".gameboard-2\";\r\n\r\n  function setEventListeners() {\r\n    document.querySelectorAll(\".board-cell\").forEach((cell) => {\r\n      cell.removeEventListener(\"click\", handleCellClick);\r\n    });\r\n\r\n    const cells =\r\n      currentPlayer === player1\r\n        ? document.querySelectorAll(\".gameboard-2 .board-cell\")\r\n        : document.querySelectorAll(\".gameboard-1 .board-cell\");\r\n\r\n    cells.forEach((cell) => {\r\n      cell.addEventListener(\"click\", handleCellClick);\r\n    });\r\n  }\r\n\r\n  // Add event listeners at the buttons\r\n  const randomiseBtn = document.getElementById(\"randomise-gameboard\");\r\n  const resetBtn = document.querySelectorAll(\"#reset-gameboard\");\r\n  const revealShipsBtn = document.querySelectorAll(\"#reveal-ships\");\r\n\r\n  // Reset gameboard\r\n  resetBtn.forEach((btn) => {\r\n    btn.addEventListener(\r\n      \"click\",\r\n      (e) => {\r\n        (0,_ui_renderEditScreen__WEBPACK_IMPORTED_MODULE_10__.renderEditScreen)(e);\r\n        (0,_ui_setDragAndDrop__WEBPACK_IMPORTED_MODULE_11__.setDragAndDrop)();\r\n      },\r\n      { once: true }\r\n    );\r\n  });\r\n\r\n  // Reveal ships\r\n  revealShipsBtn.forEach((btn) => {\r\n    if (btn.dataset.gameboard == \"1\") {\r\n      const gameboardSelector = \".gameboard-1\";\r\n      btn.addEventListener(\"click\", () => {\r\n        (0,_revealShips__WEBPACK_IMPORTED_MODULE_13__.revealShips)(gameboard1, gameboardSelector);\r\n      });\r\n    } else {\r\n      const gameboardSelector = \".gameboard-2\";\r\n      btn.addEventListener(\"click\", () => {\r\n        (0,_revealShips__WEBPACK_IMPORTED_MODULE_13__.revealShips)(gameboard2, gameboardSelector);\r\n      });\r\n    }\r\n  });\r\n\r\n  // Handle board attacks\r\n  function handleCellClick(event) {\r\n    const cell = event.currentTarget;\r\n    (0,_handleAttack__WEBPACK_IMPORTED_MODULE_7__.handleAttack)([\r\n      currentPlayer,\r\n      currentGameboard,\r\n      cell,\r\n      currentGameboardSelector,\r\n    ]);\r\n    cell.removeEventListener(\"click\", handleCellClick);\r\n  }\r\n\r\n  function changeTurn() {\r\n    currentPlayer = currentPlayer === player1 ? player2 : player1;\r\n    currentGameboard = currentPlayer === player1 ? gameboard2 : gameboard1;\r\n    currentGameboardSelector =\r\n      currentPlayer === player1 ? \".gameboard-2\" : \".gameboard-1\";\r\n    setEventListeners();\r\n    (0,_ui_changeTurns__WEBPACK_IMPORTED_MODULE_9__.updateUi)();\r\n  }\r\n\r\n  _pubSupPattern__WEBPACK_IMPORTED_MODULE_8__.events.on(\"changeTurn\", changeTurn);\r\n  setEventListeners();\r\n}\r\n\r\nnewGame();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nconst Player = function () {\r\n  function attackEnemy(board, x, y) {\r\n    return board.receiveAttack(x, y);\r\n  }\r\n\r\n  return { attackEnemy };\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/pubSupPattern.js":
/*!******************************!*\
  !*** ./src/pubSupPattern.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   events: () => (/* binding */ events)\n/* harmony export */ });\nconst events = {\r\n  events: {},\r\n  on: function (eventName, fn) {\r\n    this.events[eventName] = this.events[eventName] || [];\r\n    this.events[eventName].push(fn);\r\n  },\r\n  emit: function (eventName, data) {\r\n    if (this.events[eventName]) {\r\n      this.events[eventName].forEach(function (fn) {\r\n        fn(data);\r\n      });\r\n    }\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/pubSupPattern.js?");

/***/ }),

/***/ "./src/randomiseShips.js":
/*!*******************************!*\
  !*** ./src/randomiseShips.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomiseShips: () => (/* binding */ randomiseShips)\n/* harmony export */ });\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _src_ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ships */ \"./src/ships.js\");\n/* harmony import */ var _ui_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/helperFunctions */ \"./src/ui/helperFunctions.js\");\n\r\n\r\n\r\n\r\nconst randomiseShips = function (gameboard, shipLengths) {\r\n  const getRandomInt = (max) => Math.floor(Math.random() * max);\r\n\r\n  // Validate if a ship can be placed\r\n  function isValidPlacement(x, y, length, direction) {\r\n    const shipCells = [];\r\n    for (let i = 0; i < length; i++) {\r\n      const checkX = direction === \"h\" ? x : x + i;\r\n      const checkY = direction === \"h\" ? y + i : y;\r\n\r\n      // Out of bounds\r\n      if (checkX < 0 || checkX >= 10 || checkY < 0 || checkY >= 10) {\r\n        return false;\r\n      }\r\n\r\n      // Cell is already occupied\r\n      if (gameboard.board[checkX][checkY] !== null) {\r\n        return false;\r\n      }\r\n\r\n      shipCells.push([checkX, checkY]);\r\n    }\r\n\r\n    // Ensure ships are not sticking to each other\r\n    const allNeighboringCells = shipCells\r\n      .flatMap(([cellX, cellY]) => (0,_ui_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.getAllNeighboringCells)(cellX, cellY))\r\n      .map(([neighborX, neighborY]) => `${neighborX},${neighborY}`);\r\n\r\n    for (const neighbor of allNeighboringCells) {\r\n      const [neighborX, neighborY] = neighbor.split(\",\").map(Number);\r\n      if (gameboard.board[neighborX]?.[neighborY] !== null) {\r\n        return false;\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  // Place a ship on the board\r\n  function placeShipRandomly(length) {\r\n    let placed = false;\r\n\r\n    while (!placed) {\r\n      const x = getRandomInt(10); // Random row\r\n      const y = getRandomInt(10); // Random column\r\n      const direction = Math.random() < 0.5 ? \"h\" : \"v\"; // Horizontal or Vertical\r\n\r\n      if (isValidPlacement(x, y, length, direction)) {\r\n        const ship = (0,_src_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(length); // Create a new ship\r\n        gameboard.placeShip(x, y, ship, direction);\r\n        placed = true;\r\n      }\r\n    }\r\n  }\r\n\r\n  // Place all ships\r\n  shipLengths.forEach((length) => placeShipRandomly(length));\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/randomiseShips.js?");

/***/ }),

/***/ "./src/revealShips.js":
/*!****************************!*\
  !*** ./src/revealShips.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revealShips: () => (/* binding */ revealShips)\n/* harmony export */ });\nconst revealShips = function (gameboard, selector) {\r\n  gameboard.ships.forEach((ship) => {\r\n    ship.positions.forEach(([x, y]) => {\r\n      const cell = document.querySelector(\r\n        `${selector} .board-cell[data-cors=\"${x},${y}\"]`\r\n      );\r\n      if (cell) {\r\n        cell.style.backgroundColor = \"red\"; // Highlight ship cells\r\n      }\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/revealShips.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = function (length) {\r\n  let hits = 0;\r\n  const positions = [];\r\n\r\n  const hit = () => {\r\n    hits++;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    return hits >= length;\r\n  };\r\n\r\n  return { length, hit, isSunk, positions };\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

/***/ }),

/***/ "./src/ui/changeTurns.js":
/*!*******************************!*\
  !*** ./src/ui/changeTurns.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateUi: () => (/* binding */ updateUi)\n/* harmony export */ });\nconst updateUi = function () {\r\n  const gameStatus = document.getElementById(\"game-status\");\r\n  const cells1 = document.querySelectorAll(\".gameboard-1 .board-cell\");\r\n  const cells2 = document.querySelectorAll(\".gameboard-2 .board-cell\");\r\n\r\n  if (gameStatus.textContent == \"Player 1's Turn\") {\r\n    gameStatus.textContent = \"Player 2's Turn\";\r\n    cells2.forEach((cell) => {\r\n      cell.style.pointerEvents = \"none\";\r\n    });\r\n\r\n    cells1.forEach((cell) => {\r\n      cell.style.pointerEvents = \"all\";\r\n    });\r\n  } else {\r\n    gameStatus.textContent = \"Player 1's Turn\";\r\n    cells2.forEach((cell) => {\r\n      cell.style.pointerEvents = \"all\";\r\n    });\r\n\r\n    cells1.forEach((cell) => {\r\n      cell.style.pointerEvents = \"none\";\r\n    });\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/changeTurns.js?");

/***/ }),

/***/ "./src/ui/domHelperFunctions/createBoard.js":
/*!**************************************************!*\
  !*** ./src/ui/domHelperFunctions/createBoard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/ui/domHelperFunctions/createElement.js\");\n\r\n\r\nconst createBoard = function () {\r\n  const table = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"table\", \"board-table\");\r\n  const tableBody = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"tbody\");\r\n\r\n  // Create rows\r\n  for (let i = 0; i < 10; i++) {\r\n    const boardRow = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"tr\", \"board-row\");\r\n\r\n    // Create columns\r\n    for (let j = 0; j < 10; j++) {\r\n      const boardColumn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"td\", \"board-cell\");\r\n      boardColumn.dataset.cors = `${i},${j}`; // Coordinate data attribute\r\n\r\n      // Place indicators in the first row\r\n      if (j <= 10 && i === 0) {\r\n        const indicator = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\r\n          \"div\",\r\n          \"indicator row-indicator\",\r\n          j + 1\r\n        );\r\n        boardColumn.appendChild(indicator);\r\n      }\r\n\r\n      // Place indicators in the first column\r\n      if (j === 0) {\r\n        const indicator = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\r\n          \"div\",\r\n          \"indicator col-indicator\",\r\n          String.fromCharCode(65 + i)\r\n        );\r\n        boardColumn.appendChild(indicator);\r\n      }\r\n\r\n      boardRow.appendChild(boardColumn);\r\n    }\r\n    tableBody.appendChild(boardRow);\r\n  }\r\n\r\n  table.appendChild(tableBody);\r\n  return table;\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/domHelperFunctions/createBoard.js?");

/***/ }),

/***/ "./src/ui/domHelperFunctions/createElement.js":
/*!****************************************************!*\
  !*** ./src/ui/domHelperFunctions/createElement.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDOMElement: () => (/* binding */ createDOMElement)\n/* harmony export */ });\n//Create DOM element Helper function\r\n//We get the type of element the class name and the content and we create that element\r\n//Then append it as a child to its parent\r\n\r\nconst createDOMElement = function (el, className, content, id) {\r\n  const element = document.createElement(el);\r\n  if (className) element.setAttribute(\"class\", className);\r\n  element.textContent = content;\r\n  if (id) element.id = id;\r\n\r\n  return element;\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/domHelperFunctions/createElement.js?");

/***/ }),

/***/ "./src/ui/helperFunctions.js":
/*!***********************************!*\
  !*** ./src/ui/helperFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllNeighboringCells: () => (/* binding */ getAllNeighboringCells),\n/* harmony export */   getCors: () => (/* binding */ getCors),\n/* harmony export */   getImmediateDiagonalCells: () => (/* binding */ getImmediateDiagonalCells)\n/* harmony export */ });\nconst getImmediateDiagonalCells = function (row, col) {\r\n  const boardSize = 10;\r\n  const diagonals = [];\r\n\r\n  // Top-left diagonal\r\n  if (row - 1 >= 0 && col - 1 >= 0) {\r\n    diagonals.push([row - 1, col - 1]);\r\n  }\r\n\r\n  // Top-right diagonal\r\n  if (row - 1 >= 0 && col + 1 < boardSize) {\r\n    diagonals.push([row - 1, col + 1]);\r\n  }\r\n\r\n  // Bottom-left diagonal\r\n  if (row + 1 < boardSize && col - 1 >= 0) {\r\n    diagonals.push([row + 1, col - 1]);\r\n  }\r\n\r\n  // Bottom-right diagonal\r\n  if (row + 1 < boardSize && col + 1 < boardSize) {\r\n    diagonals.push([row + 1, col + 1]);\r\n  }\r\n\r\n  return diagonals;\r\n};\r\n\r\nconst getAllNeighboringCells = function (row, col) {\r\n  const boardSize = 10;\r\n  return [\r\n    [row - 1, col],\r\n    [row + 1, col],\r\n    [row, col - 1],\r\n    [row, col + 1],\r\n    ...getImmediateDiagonalCells(row, col),\r\n  ].filter(([r, c]) => r >= 0 && c >= 0 && r < boardSize && c < boardSize);\r\n};\r\n\r\nconst getCors = function (cell) {\r\n  let x = Number(cell.getAttribute(\"data-cors\").split(\",\")[0]);\r\n  let y = Number(cell.getAttribute(\"data-cors\").split(\",\")[1]);\r\n  return [x, y];\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/helperFunctions.js?");

/***/ }),

/***/ "./src/ui/renderAttack.js":
/*!********************************!*\
  !*** ./src/ui/renderAttack.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHit: () => (/* binding */ renderHit),\n/* harmony export */   renderMiss: () => (/* binding */ renderMiss)\n/* harmony export */ });\nconst renderHit = function (cell) {\r\n  cell.classList.add(\"hit\");\r\n};\r\n\r\nconst renderMiss = function (cell) {\r\n  cell.classList.add(\"miss\");\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/renderAttack.js?");

/***/ }),

/***/ "./src/ui/renderBoard.js":
/*!*******************************!*\
  !*** ./src/ui/renderBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\n/* harmony import */ var _domHelperFunctions_createBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelperFunctions/createBoard */ \"./src/ui/domHelperFunctions/createBoard.js\");\n\r\n\r\nconst renderBoard = function () {\r\n  const yourBoard = document.querySelector(\".gameboard-1\");\r\n  const enemyBoard = document.querySelector(\".gameboard-2\");\r\n\r\n  // Render boards for Player 1 and Player 2\r\n  yourBoard.appendChild((0,_domHelperFunctions_createBoard__WEBPACK_IMPORTED_MODULE_0__.createBoard)());\r\n  enemyBoard.appendChild((0,_domHelperFunctions_createBoard__WEBPACK_IMPORTED_MODULE_0__.createBoard)());\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/renderBoard.js?");

/***/ }),

/***/ "./src/ui/renderEditScreen.js":
/*!************************************!*\
  !*** ./src/ui/renderEditScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderEditScreen: () => (/* binding */ renderEditScreen)\n/* harmony export */ });\n/* harmony import */ var _domHelperFunctions_createBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelperFunctions/createBoard */ \"./src/ui/domHelperFunctions/createBoard.js\");\n/* harmony import */ var _domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelperFunctions/createElement */ \"./src/ui/domHelperFunctions/createElement.js\");\n\r\n\r\n\r\nconst renderEditScreen = function (e) {\r\n  document.getElementById(\"game-status\").textContent =\r\n    \"Drag the ships to the grrid and then click to rotate\";\r\n\r\n  const gameboardToEdit = e.target.attributes[\"data-gameboard\"].value;\r\n\r\n  const gameboardContainers = document.querySelectorAll(\".gameboard-container\");\r\n\r\n  gameboardContainers.forEach((gameboard) => {\r\n    gameboard.style.display = \"none\";\r\n  });\r\n\r\n  const containerParent = document.querySelector(\".gameboards\");\r\n  const container = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__.createDOMElement)(\"section\", \"edit-screen\");\r\n  const wrapper = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__.createDOMElement)(\"div\", \"board-to-edit\");\r\n  const btnContainer = document.querySelector(\".button-container\");\r\n  const shipsContainer = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__.createDOMElement)(\"div\", \"ships-container\");\r\n  const gameboard = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__.createDOMElement)(\"div\", \"gameboard\");\r\n  const table = (0,_domHelperFunctions_createBoard__WEBPACK_IMPORTED_MODULE_0__.createBoard)();\r\n\r\n  for (let i = 0; i <= 5; i++) {\r\n    let ship = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__.createDOMElement)(\"div\", \"ship\", \"\", \"ship\");\r\n    ship.setAttribute(\"draggable\", true);\r\n    shipsContainer.appendChild(ship);\r\n    if (i == 0) {\r\n      ship.setAttribute(\"data-lenght\", 5);\r\n      ship.setAttribute(\"style\", \"--ship-length: 5;\");\r\n    } else if (i == 1) {\r\n      ship.setAttribute(\"data-lenght\", 4);\r\n      ship.setAttribute(\"style\", \"--ship-length: 4;\");\r\n    } else if (i == 2 || i == 3) {\r\n      ship.setAttribute(\"data-lenght\", 3);\r\n      ship.setAttribute(\"style\", \"--ship-length: 3;\");\r\n    } else {\r\n      ship.setAttribute(\"data-lenght\", 2);\r\n      ship.setAttribute(\"style\", \"--ship-length: 2;\");\r\n    }\r\n  }\r\n\r\n  if (gameboardToEdit == \"1\") {\r\n    var title = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__.createDOMElement)(\"h2\", \"\", \"Player's 1 Gameboard\");\r\n  } else {\r\n    var title = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_1__.createDOMElement)(\"h2\", \"\", \"Player's 2 Gameboard\");\r\n  }\r\n\r\n  gameboard.appendChild(table);\r\n  wrapper.appendChild(gameboard);\r\n  wrapper.appendChild(shipsContainer);\r\n  container.appendChild(title);\r\n  container.appendChild(wrapper);\r\n  container.appendChild(btnContainer);\r\n  containerParent.appendChild(container);\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/renderEditScreen.js?");

/***/ }),

/***/ "./src/ui/setDragAndDrop.js":
/*!**********************************!*\
  !*** ./src/ui/setDragAndDrop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setDragAndDrop: () => (/* binding */ setDragAndDrop)\n/* harmony export */ });\nconst setDragAndDrop = function () {\r\n  const ships = document.querySelectorAll(\".ship\");\r\n  const boardCells = document.querySelectorAll(\".board-cell\");\r\n\r\n  let draggedShip = null;\r\n  let shipLength = 0;\r\n\r\n  // Drag Start\r\n  ships.forEach((ship) => {\r\n    ship.addEventListener(\"dragstart\", (e) => {\r\n      draggedShip = ship;\r\n      shipLength = parseInt(ship.dataset.lenght, 10); // Store ship length\r\n      e.dataTransfer.setData(\"text/plain\", shipLength); // Pass ship length to drop\r\n      ship.classList.add(\"dragging\");\r\n    });\r\n\r\n    ship.addEventListener(\"dragend\", () => {\r\n      ship.classList.remove(\"dragging\");\r\n      draggedShip = null; // Reset after dragging ends\r\n    });\r\n  });\r\n\r\n  // Drag Over Gameboard Cells\r\n  boardCells.forEach((cell) => {\r\n    cell.addEventListener(\"dragover\", (e) => {\r\n      e.preventDefault(); // Allow dropping\r\n      highlightPlacement(cell); // Highlight potential ship placement\r\n    });\r\n\r\n    cell.addEventListener(\"dragleave\", (e) => {\r\n      clearHighlights();\r\n    });\r\n\r\n    // Drop Ship\r\n    cell.addEventListener(\"drop\", (e) => {\r\n      e.preventDefault();\r\n\r\n      if (!draggedShip) return; // Ensure a ship is being dragged\r\n\r\n      const [row, col] = cell.dataset.cors.split(\",\").map(Number);\r\n\r\n      placeShipOnBoard(row, col, shipLength);\r\n      draggedShip.remove(); // Remove ship from the container after placement\r\n      // Remove hover highlights\r\n    });\r\n  });\r\n\r\n  // Highlight Placement\r\n  function highlightPlacement(cell) {\r\n    const [row, col] = cell.dataset.cors.split(\",\").map(Number);\r\n\r\n    for (let i = 0; i < shipLength; i++) {\r\n      const targetCell = document.querySelector(\r\n        `.board-cell[data-cors=\"${row},${col + i}\"]`\r\n      );\r\n\r\n      if (targetCell) {\r\n        targetCell.classList.add(\"hover\"); // Add hover effect\r\n      }\r\n    }\r\n  }\r\n\r\n  // Clear Highlighted Cells\r\n  function clearHighlights() {\r\n    document.querySelectorAll(\".board-cell.hover\").forEach((cell) => {\r\n      cell.classList.remove(\"hover\");\r\n    });\r\n  }\r\n\r\n  // Place Ship on the Board\r\n  function placeShipOnBoard(row, col, length) {\r\n    console.log(`Placing ship of length ${length} at (${row}, ${col})`);\r\n\r\n    for (let i = 0; i < length; i++) {\r\n      const targetCell = document.querySelector(\r\n        `.board-cell[data-cors=\"${row},${col + i}\"]`\r\n      );\r\n\r\n      if (targetCell) {\r\n        targetCell.classList.add(\"ship-placed\"); // Mark cell as ship\r\n        targetCell.style.backgroundColor = \"red\"; // Visual indicator\r\n      } else {\r\n        console.error(`Cell (${row}, ${col + i}) is out of bounds.`);\r\n      }\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/setDragAndDrop.js?");

/***/ }),

/***/ "./dist/50748c452ab29a2bf67d.jpg":
/*!***************************************!*\
  !*** ./dist/50748c452ab29a2bf67d.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50748c452ab29a2bf67d.jpg\";\n\n//# sourceURL=webpack://battleship/./dist/50748c452ab29a2bf67d.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;