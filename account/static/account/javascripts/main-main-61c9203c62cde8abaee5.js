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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/index.ts */ \"./src/scripts/index.ts\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n//# sourceURL=webpack://account/./src/index.ts?");

/***/ }),

/***/ "./src/scripts/cookies.ts":
/*!********************************!*\
  !*** ./src/scripts/cookies.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getCookie(name) {\n  let cookieValue = null;\n  if (document.cookie !== undefined && document.cookie !== '') {\n    const cookies = document.cookie.split(';');\n    for (let i = 0; i < cookies.length; i++) {\n      const cookie = cookies[i].trim();\n      // Does this cookie string begin with the name we want?\n      if (cookie.substring(0, name.length + 1) === name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n  return cookieValue;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCookie);\n\n//# sourceURL=webpack://account/./src/scripts/cookies.ts?");

/***/ }),

/***/ "./src/scripts/env.js":
/*!****************************!*\
  !*** ./src/scripts/env.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   APP_ACCOUNTS_PATHNAME: () => (/* binding */ APP_ACCOUNTS_PATHNAME),\n/* harmony export */   APP_INFO_FORM_REGIST_USER: () => (/* binding */ APP_INFO_FORM_REGIST_USER),\n/* harmony export */   APP_SERVER_HOST: () => (/* binding */ APP_SERVER_HOST),\n/* harmony export */   APP_SERVER_PORT: () => (/* binding */ APP_SERVER_PORT),\n/* harmony export */   APP_WS_URL: () => (/* binding */ APP_WS_URL)\n/* harmony export */ });\nconst APP_WS_URL = 'ws://localhost:8000/ws';\nconst APP_SERVER_PORT = '8000';\nconst APP_SERVER_HOST = 'http://127.0.0.1';\nconst APP_ACCOUNTS_PATHNAME = '/api/v1/accounts/';\n\n// форма регистрации аккаунта\nconst pHtml = document.createElement('p');\npHtml.className = 'helptext';\npHtml.innerText = 'пользователь с таким email уже существует.';\nconst APP_INFO_FORM_REGIST_USER = pHtml;\n\n//# sourceURL=webpack://account/./src/scripts/env.js?");

/***/ }),

/***/ "./src/scripts/handler/Registration/index.ts":
/*!***************************************************!*\
  !*** ./src/scripts/handler/Registration/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handlerRegistration)\n/* harmony export */ });\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cookies */ \"./src/scripts/cookies.ts\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env */ \"./src/scripts/env.js\");\n\n\n// const dotenv = require('dotenv');\n// require(dotenv).config();\nasync function handlerRegistration(e) {\n  e.preventDefault();\n  const target = e.target;\n  if (!target.localName.includes('button') && (target.lastChild === null || target.lastChild !== null || !(typeof target.innerText).includes('string') || (typeof target.innerText).includes('string') && !target.innerText.includes('Зарегистрироваться'))) {\n    return false;\n  }\n\n  // There data of forms will geting\n  const formHtml = target.parentElement;\n  const usernameForms = formHtml.querySelector('input[name=\"username\"]');\n  const passwordForms = formHtml.querySelector('input[name=\"password\"]');\n  const repasswordForms = formHtml.querySelector('input[name=\"repassword\"]');\n  const emailForms = formHtml.querySelector('input[name=\"email\"]');\n\n  // const { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME } = process.env;\n  if (_env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST === null || _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST === undefined || _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_PORT === null || _env__WEBPACK_IMPORTED_MODULE_1__.APP_ACCOUNTS_PATHNAME === null) {\n    return false;\n  }\n  ;\n  const host = _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST;\n  const pathnames = _env__WEBPACK_IMPORTED_MODULE_1__.APP_ACCOUNTS_PATHNAME;\n  const port = _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_PORT;\n  let url = host + ':' + port + pathnames;\n  const h = {\n    'X-CSRFToken': (0,_cookies__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('csrftoken'),\n    'Content-Type': 'application/json' // contentType\n  };\n  const context = {\n    username: usernameForms.value,\n    password: passwordForms.value,\n    repassword: repasswordForms.value,\n    email: emailForms.value,\n    is_superuser: false\n  };\n  fetch(url, {\n    method: 'POST',\n    headers: h,\n    body: JSON.stringify(context)\n  }).then(resp => {\n    return resp.json();\n  }).catch(() => {\n    target.insertAdjacentElement('beforebegin', _env__WEBPACK_IMPORTED_MODULE_1__.APP_INFO_FORM_REGIST_USER);\n    console.log('[handlerRegistration > post]: POST-request is a False');\n    return false;\n  }).then(resp => {\n    console.log(resp);\n    // const urlRelocation = `http://127.0.0.1:8000/api/v1/accounts/${resp.id}`;// `http://${host}':'${port}/profile/`;\n    const urlRelocation = \"http://\".concat(host, \":\").concat(port, \"/profile/\").concat(resp.id);\n    // url = host + ':' + port + pathnames;\n    // request = await fetch(urlRelocation, {\n    //   method: 'POST',\n    //   headers: h,\n    //   body: JSON.stringify(context)\n    // });\n    location.assign(urlRelocation);\n  });\n  // if (!request.ok) {\n  //   target.insertAdjacentElement('beforebegin', APP_INFO_FORM_REGIST_USER);\n  //   console.log('[handlerRegistration > post]: POST-request is a False');\n  //   return false;\n  // }\n  // const responseBody = await request.json();\n  // try {\n  //   const dataJson = JSON.parse(responseBody);\n  //   const url_relocation = `http://127.0.0.1:8000/api/v1/accounts/${dataJson.id}`;// `http://${host}':'${port}/profile/`;\n  // } catch (er) {\n  //   console.error(`[handlerRegistration >> fetch ]Error ${er as string}`);\n  // };\n\n  // if (request.ok) {\n  //   return false;\n  // }\n  // location.assign(url_relocation);\n  return true;\n}\n\n//# sourceURL=webpack://account/./src/scripts/handler/Registration/index.ts?");

/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handler_Registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler/Registration */ \"./src/scripts/handler/Registration/index.ts\");\n\nconst handlerLoadPage = () => {\n  // setTimeout(() => {\n  const bodyHtml = document.querySelectorAll('body');\n  if (bodyHtml === null) {\n    return;\n  }\n  bodyHtml[0].removeEventListener('click', _handler_Registration__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  bodyHtml[0].addEventListener('click', _handler_Registration__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  // }, 300);\n};\ndocument.removeEventListener('DOMContentLoaded', handlerLoadPage);\ndocument.addEventListener('DOMContentLoaded', handlerLoadPage);\n\n//# sourceURL=webpack://account/./src/scripts/index.ts?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://account/./src/styles/style.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;