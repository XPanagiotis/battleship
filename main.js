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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles/gameboard.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles/gameboard.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.gameboard-container {\r\n  display: flex;\r\n}\r\n\r\n.gameboard {\r\n  height: 500px;\r\n  width: 500px;\r\n  border: var(--border);\r\n  padding: 30px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.board-row {\r\n  width: 100%;\r\n}\r\n\r\ntd:first-child,\r\ntr:first-child td {\r\n  border-top: var(--weaher-card-border);\r\n  border-left: var(--weaher-card-border);\r\n}\r\n\r\n.board-cell {\r\n  width: 10%;\r\n  height: 10%;\r\n  border-bottom: var(--weaher-card-border);\r\n  border-right: var(--weaher-card-border);\r\n  position: relative;\r\n}\r\n\r\n.indicator {\r\n  position: absolute;\r\n  font-size: 11px;\r\n}\r\n.row-indicator {\r\n  top: -2em;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.col-indicator {\r\n  left: -3em;\r\n  width: 2em;\r\n  text-align: right;\r\n  top: 1em;\r\n  height: 1em;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/gameboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles/general.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles/general.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  font-family: sans-serif;\r\n}\r\nbody {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n  margin: auto;\r\n}\r\n:root {\r\n  --dark-grey: #333333;\r\n  --medium-grey: #636363;\r\n  --light-grey: #eeeeee;\r\n  --ash: #f4f4f4;\r\n  --primary-color: #1e5ad3;\r\n  --white: white;\r\n  --border: 1px solid var(--light-grey);\r\n  --header-height: 95px;\r\n  --footer-height: 40px;\r\n  --weather-card-width: 680px;\r\n  --weather-card-font-color: #dee2e6;\r\n  --weather-card-padding: 1rem;\r\n  --weaher-card-border: 2px solid rgba(0, 0, 0, 0.432);\r\n  --line-height: 1.4rem;\r\n  --gap: 0.5rem;\r\n}\r\nmain {\r\n  position: relative;\r\n  background-color: var(--primary-color);\r\n  height: calc(100vh - var(--header-height) - var(--footer-height));\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nbutton {\r\n  border: none;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  padding: 0.5rem;\r\n  font-weight: 700;\r\n  border-radius: 1rem;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\ntd {\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np {\r\n  margin: 0;\r\n}\r\nul,\r\nfieldset,\r\nli {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/ui/styles/general.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\r\n\r\nconst Gameboard = function () {\r\n  const board = Array(10)\r\n    .fill(null)\r\n    .map(() => Array(10).fill(null));\r\n\r\n  const ships = [];\r\n\r\n  function placeShip(x, y, ship, direction) {\r\n    if (direction == \"h\") {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        board[x][y + i] = ship;\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        board[x + i][y] = ship;\r\n      }\r\n    }\r\n    ships.push(ship);\r\n  }\r\n\r\n  function receiveAttack(x, y) {\r\n    const target = board[x][y];\r\n    if (target == null) {\r\n      board[x][y] = \"miss\";\r\n      return false;\r\n    } else if (target !== \"miss\") {\r\n      target.hit();\r\n      if (target.isSunk()) console.log(\"sunkkkkk\");\r\n      return true;\r\n    }\r\n  }\r\n\r\n  function allShipsSunk() {\r\n    return ships.every((ship) => ship.isSunk);\r\n  }\r\n\r\n  return { placeShip, receiveAttack, allShipsSunk };\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_styles_general_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/styles/general.css */ \"./src/ui/styles/general.css\");\n/* harmony import */ var _ui_styles_gameboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/styles/gameboard.css */ \"./src/ui/styles/gameboard.css\");\n/* harmony import */ var _src_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/player */ \"./src/player.js\");\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ui_renderBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/renderBoard */ \"./src/ui/renderBoard.js\");\n/* harmony import */ var _src_ships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/ships */ \"./src/ships.js\");\n/* harmony import */ var _ui_renderAttack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/renderAttack */ \"./src/ui/renderAttack.js\");\n/* harmony import */ var _pubSupPattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pubSupPattern */ \"./src/pubSupPattern.js\");\n/* harmony import */ var _ui_helperFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/helperFunctions */ \"./src/ui/helperFunctions.js\");\n//import styles\r\n\r\n\r\n//import js modules\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction newGame() {\r\n  const player1 = (0,_src_player__WEBPACK_IMPORTED_MODULE_2__.Player)();\r\n  const player2 = (0,_src_player__WEBPACK_IMPORTED_MODULE_2__.Player)();\r\n\r\n  const gamenboard1 = (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();\r\n  const gamenboard2 = (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();\r\n\r\n  _pubSupPattern__WEBPACK_IMPORTED_MODULE_7__.events.emit(\"attack your board\", gamenboard1);\r\n  _pubSupPattern__WEBPACK_IMPORTED_MODULE_7__.events.emit(\"attack enemy board\", gamenboard2);\r\n\r\n  (0,_ui_renderBoard__WEBPACK_IMPORTED_MODULE_4__.renderBoard)();\r\n\r\n  //create ships manualy\r\n  const ship5 = (0,_src_ships__WEBPACK_IMPORTED_MODULE_5__.Ship)(5);\r\n  const ship4 = (0,_src_ships__WEBPACK_IMPORTED_MODULE_5__.Ship)(4);\r\n  const ship3 = (0,_src_ships__WEBPACK_IMPORTED_MODULE_5__.Ship)(3);\r\n  const ship3b = (0,_src_ships__WEBPACK_IMPORTED_MODULE_5__.Ship)(3);\r\n  const ship2 = (0,_src_ships__WEBPACK_IMPORTED_MODULE_5__.Ship)(2);\r\n  const ship2b = (0,_src_ships__WEBPACK_IMPORTED_MODULE_5__.Ship)(2);\r\n  //manualy populate each player gameboard\r\n  gamenboard1.placeShip(1, 1, ship5, \"h\");\r\n  gamenboard1.placeShip(4, 2, ship3, \"h\");\r\n  gamenboard1.placeShip(8, 1, ship2, \"h\");\r\n  gamenboard1.placeShip(1, 8, ship4, \"v\");\r\n  gamenboard1.placeShip(6, 9, ship3b, \"v\");\r\n  gamenboard1.placeShip(7, 6, ship2b, \"v\");\r\n  gamenboard2.placeShip(1, 1, ship5, \"h\");\r\n  gamenboard2.placeShip(4, 2, ship3, \"h\");\r\n  gamenboard2.placeShip(8, 1, ship2, \"h\");\r\n  gamenboard2.placeShip(1, 8, ship4, \"v\");\r\n  gamenboard2.placeShip(6, 9, ship3b, \"v\");\r\n  gamenboard2.placeShip(7, 6, ship2b, \"v\");\r\n\r\n  const board = document.querySelectorAll(\".enemy-gameboard .board-cell\");\r\n\r\n  board.forEach((cell) => {\r\n    cell.addEventListener(\"click\", handleAttack);\r\n  });\r\n\r\n  function handleAttack() {\r\n    const attackedCell = (0,_ui_helperFunctions__WEBPACK_IMPORTED_MODULE_8__.getCors)(this);\r\n    const x = attackedCell[0];\r\n    const y = attackedCell[1];\r\n\r\n    if (player1.attackEnemy(gamenboard2, x, y)) {\r\n      (0,_ui_renderAttack__WEBPACK_IMPORTED_MODULE_6__.renderHit)(this);\r\n\r\n      //get the diagonal cells of the hitted cell\r\n      const missedCells = (0,_ui_helperFunctions__WEBPACK_IMPORTED_MODULE_8__.getImmediateDiagonalCells)(x, y);\r\n\r\n      //render the diagonal cells\r\n      missedCells.forEach((cellCors) => {\r\n        //give the \"miss\" value to each cell\r\n        player1.attackEnemy(gamenboard2, cellCors[0], cellCors[1]);\r\n\r\n        //select the cell from the DOM\r\n        const cors = String(cellCors);\r\n        const cell = document.querySelectorAll(\r\n          `.enemy-gameboard [data-cors=\"${cors}\"]`\r\n        )[0];\r\n\r\n        //render the cell\r\n        (0,_ui_renderAttack__WEBPACK_IMPORTED_MODULE_6__.renderMiss)(cell);\r\n\r\n        //remove Event Listener\r\n        cell.removeEventListener(\"click\", handleAttack);\r\n      });\r\n    } else {\r\n      (0,_ui_renderAttack__WEBPACK_IMPORTED_MODULE_6__.renderMiss)(this);\r\n    }\r\n    this.removeEventListener(\"click\", handleAttack);\r\n  }\r\n}\r\n\r\nnewGame();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = function (length) {\r\n  let hits = 0;\r\n\r\n  const hit = () => {\r\n    hits++;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    return hits >= length;\r\n  };\r\n\r\n  return { length, hit, isSunk };\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCors: () => (/* binding */ getCors),\n/* harmony export */   getImmediateDiagonalCells: () => (/* binding */ getImmediateDiagonalCells)\n/* harmony export */ });\nconst getImmediateDiagonalCells = function (row, col) {\r\n  const boardSize = 10;\r\n  const diagonals = [];\r\n\r\n  // Top-left diagonal\r\n  if (row - 1 >= 0 && col - 1 >= 0) {\r\n    diagonals.push([row - 1, col - 1]);\r\n  }\r\n\r\n  // Top-right diagonal\r\n  if (row - 1 >= 0 && col + 1 < boardSize) {\r\n    diagonals.push([row - 1, col + 1]);\r\n  }\r\n\r\n  // Bottom-left diagonal\r\n  if (row + 1 < boardSize && col - 1 >= 0) {\r\n    diagonals.push([row + 1, col - 1]);\r\n  }\r\n\r\n  // Bottom-right diagonal\r\n  if (row + 1 < boardSize && col + 1 < boardSize) {\r\n    diagonals.push([row + 1, col + 1]);\r\n  }\r\n\r\n  return diagonals;\r\n};\r\n\r\nconst getCors = function (cell) {\r\n  let x = Number(cell.getAttribute(\"data-cors\").split(\",\")[0]);\r\n  let y = Number(cell.getAttribute(\"data-cors\").split(\",\")[1]);\r\n  return [x, y];\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/helperFunctions.js?");

/***/ }),

/***/ "./src/ui/renderAttack.js":
/*!********************************!*\
  !*** ./src/ui/renderAttack.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHit: () => (/* binding */ renderHit),\n/* harmony export */   renderMiss: () => (/* binding */ renderMiss)\n/* harmony export */ });\nconst renderHit = function (cell) {\r\n  cell.style.backgroundColor = \"red\";\r\n};\r\n\r\nconst renderMiss = function (cell) {\r\n  cell.style.backgroundColor = \"green\";\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/renderAttack.js?");

/***/ }),

/***/ "./src/ui/renderBoard.js":
/*!*******************************!*\
  !*** ./src/ui/renderBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\n/* harmony import */ var _domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelperFunctions/createElement */ \"./src/ui/domHelperFunctions/createElement.js\");\n\r\n\r\nconst renderBoard = function () {\r\n  const yourBoard = document.querySelector(\".your-gameboard\");\r\n  const enemyBoard = document.querySelector(\".enemy-gameboard\");\r\n\r\n  yourBoard.appendChild(createBoard());\r\n  enemyBoard.appendChild(createBoard());\r\n};\r\n\r\nfunction createBoard() {\r\n  const table = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"table\", \"board-table\");\r\n  const tableBody = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"tbody\");\r\n\r\n  //create rows\r\n  for (var i = 0; i < 10; i++) {\r\n    var boardRow = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"tr\", \"board-row\");\r\n\r\n    //create columns\r\n    for (var j = 0; j < 10; j++) {\r\n      var boardColumn = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\"td\", \"board-cell\");\r\n      boardColumn.dataset.cors = `${[i, j]}`;\r\n      //place indicators in the first row\r\n      if (j <= 10 && i === 0) {\r\n        const indicator = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\r\n          \"div\",\r\n          \"indicator row-indicator\",\r\n          j + 1\r\n        );\r\n        boardColumn.appendChild(indicator);\r\n      }\r\n\r\n      //place indicators in the first column\r\n      if (j === 0) {\r\n        const indicator = (0,_domHelperFunctions_createElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(\r\n          \"div\",\r\n          \"indicator col-indicator\",\r\n          String.fromCharCode(65 + i)\r\n        );\r\n        boardColumn.appendChild(indicator);\r\n      }\r\n\r\n      boardRow.appendChild(boardColumn);\r\n    }\r\n    tableBody.appendChild(boardRow);\r\n  }\r\n  table.appendChild(tableBody);\r\n\r\n  return table;\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/renderBoard.js?");

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