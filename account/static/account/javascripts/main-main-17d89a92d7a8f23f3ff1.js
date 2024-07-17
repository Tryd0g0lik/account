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

/***/ "./src/scripts/Validators/index.ts":
/*!*****************************************!*\
  !*** ./src/scripts/Validators/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ targetValidater)\n/* harmony export */ });\nfunction targetValidater(target, text) {\n  const targetHtmlElement = target;\n  if (!targetHtmlElement.localName.includes('button') && (targetHtmlElement.lastChild === null || targetHtmlElement.lastChild !== null || !(typeof targetHtmlElement.innerText).includes('string') || (typeof targetHtmlElement.innerText).includes('string') && !targetHtmlElement.innerText.includes(text))) {\n    return false;\n  }\n  return true;\n}\n\n//# sourceURL=webpack://account/./src/scripts/Validators/index.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   APP_ACCOUNTS_PATHNAME: () => (/* binding */ APP_ACCOUNTS_PATHNAME),\n/* harmony export */   APP_INFO_FORM_REGIST_USER: () => (/* binding */ APP_INFO_FORM_REGIST_USER),\n/* harmony export */   APP_LOGIN_URL: () => (/* binding */ APP_LOGIN_URL),\n/* harmony export */   APP_PAGE_AUTHORIZSTION: () => (/* binding */ APP_PAGE_AUTHORIZSTION),\n/* harmony export */   APP_SERVER_HOST: () => (/* binding */ APP_SERVER_HOST),\n/* harmony export */   APP_SERVER_PORT: () => (/* binding */ APP_SERVER_PORT),\n/* harmony export */   APP_WS_URL: () => (/* binding */ APP_WS_URL)\n/* harmony export */ });\nconst APP_WS_URL = 'ws://localhost:8000/ws';\nconst APP_SERVER_PORT = '8000';\nconst APP_SERVER_HOST = 'http://127.0.0.1';\nconst APP_ACCOUNTS_PATHNAME = '/api/v1/accounts/';\nconst APP_PAGE_AUTHORIZSTION = '/account/';\n// куда переходим после не успешной авторизации\nconst APP_LOGIN_URL = 'http://127.0.0.1/account/';\n\n// форма регистрации аккаунта\nconst pHtml = document.createElement('p');\npHtml.className = 'attention';\npHtml.innerText = 'пользователь с таким email уже существует.';\nconst APP_INFO_FORM_REGIST_USER = pHtml;\n\n//# sourceURL=webpack://account/./src/scripts/env.js?");

/***/ }),

/***/ "./src/scripts/handler/Athorisation/index.ts":
/*!***************************************************!*\
  !*** ./src/scripts/handler/Athorisation/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handlerAuthorisation)\n/* harmony export */ });\n/* harmony import */ var _Validaors_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Validaors/index.ts */ \"./src/scripts/Validators/index.ts\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env */ \"./src/scripts/env.js\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @interfaces */ \"./src/scripts/interfaces.ts\");\n/* harmony import */ var _Postman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Postman */ \"./src/scripts/oop/Postman/index.ts\");\n\n\n\n\nasync function handlerAuthorisation(e) {\n  e.preventDefault();\n  const target = e.target;\n  const resp = (0,_Validaors_index_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, 'Авторизоваться');\n  if (resp !== true) {\n    return false;\n  }\n  if (_env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST === null || _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST === undefined || _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_PORT === null || _env__WEBPACK_IMPORTED_MODULE_1__.APP_ACCOUNTS_PATHNAME === null) {\n    return false;\n  }\n  ;\n  const host = _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST.substring(0);\n  const port = _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_PORT.substring(0);\n  const urls = host + ':' + port + '/profile/page/';\n\n  // There data of forms will geting\n  const formHtml = target.parentElement;\n  const emailForms = formHtml.querySelector('input[name=\"email\"]');\n  const passwordForms = formHtml.querySelector('input[name=\"password\"]');\n  let props = {\n    password: passwordForms.value,\n    email: emailForms.value\n  };\n  const postman = new _Postman__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    ...props\n  });\n  props = {\n    url: urls,\n    requestsView: _interfaces__WEBPACK_IMPORTED_MODULE_2__.RequstsView.get\n  };\n  const result = await postman.request(props);\n}\n\n//# sourceURL=webpack://account/./src/scripts/handler/Athorisation/index.ts?");

/***/ }),

/***/ "./src/scripts/handler/Registration/index.ts":
/*!***************************************************!*\
  !*** ./src/scripts/handler/Registration/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handlerRegistration)\n/* harmony export */ });\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cookies */ \"./src/scripts/cookies.ts\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env */ \"./src/scripts/env.js\");\n/* harmony import */ var _Validaors_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Validaors/index.ts */ \"./src/scripts/Validators/index.ts\");\n\n\n\n// const dotenv = require('dotenv');\n// require(dotenv).config();\nasync function handlerRegistration(e) {\n  e.preventDefault();\n  const target = e.target;\n  const resp = (0,_Validaors_index_ts__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, 'Зарегистрироваться');\n  if (resp !== true) {\n    return false;\n  }\n  // There data of forms will geting\n  const formHtml = target.parentElement;\n  const usernameForms = formHtml.querySelector('input[name=\"username\"]');\n  const passwordForms = formHtml.querySelector('input[name=\"password\"]');\n  const repasswordForms = formHtml.querySelector('input[name=\"repassword\"]');\n  const emailForms = formHtml.querySelector('input[name=\"email\"]');\n  if (_env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST === null || _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST === undefined || _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_PORT === null || _env__WEBPACK_IMPORTED_MODULE_1__.APP_ACCOUNTS_PATHNAME === null) {\n    return false;\n  }\n  ;\n  const host = _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_HOST;\n  const pathnames = _env__WEBPACK_IMPORTED_MODULE_1__.APP_ACCOUNTS_PATHNAME;\n  const port = _env__WEBPACK_IMPORTED_MODULE_1__.APP_SERVER_PORT;\n  const url = host + ':' + port + pathnames;\n  const h = {\n    'X-CSRFToken': (0,_cookies__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('csrftoken'),\n    'Content-Type': 'application/json' // contentType\n  };\n  const context = {\n    username: usernameForms.value,\n    password: passwordForms.value,\n    repassword: repasswordForms.value,\n    email: emailForms.value,\n    is_superuser: false\n  };\n  fetch(url, {\n    method: 'POST',\n    headers: h,\n    body: JSON.stringify(context)\n  }).then(async resp_ => {\n    return await resp_.json();\n  }).catch(() => {\n    target.insertAdjacentElement('beforebegin', _env__WEBPACK_IMPORTED_MODULE_1__.APP_INFO_FORM_REGIST_USER);\n    console.log('[handlerRegistration > post]: POST-request is a FALSE');\n    return false;\n  }).then(resppon => {\n    if (resppon === false || (typeof resppon).includes('object') && (typeof resppon.username).includes('object') && (typeof resppon.username[0]).includes(String(undefined)) || (typeof resppon).includes('object') && (typeof resppon.username).includes('object') && !(typeof resppon.username[0]).includes(String(undefined)) && String(resppon.username[0]).includes('invalid')) {\n      // The check has no passed and 'resp=false'\n      return false;\n    }\n    console.log(resppon);\n    const pathname = \"profile/\".concat(resppon.id, \"/\");\n    const url_ = window.location.href.replace('account/', pathname);\n    const urlRelocztion = new URL(url_);\n    urlRelocztion.search = window.location.search;\n    urlRelocztion.hash = window.location.hash;\n    window.location.assign(urlRelocztion.toString());\n    // location.assign(urlRelocztion.toString());\n  });\n  return true;\n}\n\n//# sourceURL=webpack://account/./src/scripts/handler/Registration/index.ts?");

/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reAuthorPage: () => (/* binding */ reAuthorPage)\n/* harmony export */ });\n/* harmony import */ var _handler_Registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler/Registration */ \"./src/scripts/handler/Registration/index.ts\");\n/* harmony import */ var _handler_Athorisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler/Athorisation */ \"./src/scripts/handler/Athorisation/index.ts\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ \"./src/scripts/env.js\");\n\n\n\nconst reAuthorPage = /\\/profile\\/[0-9]+\\//;\nconst handlerLoadPage = () => {\n  const pathname = location.pathname;\n  const bodyHtml = document.querySelectorAll('body');\n  if (bodyHtml === null) {\n    return;\n  }\n  const match = pathname.match(reAuthorPage);\n  if (pathname.includes(_env__WEBPACK_IMPORTED_MODULE_2__.APP_PAGE_AUTHORIZSTION)) {\n    // there is page for user registration\n    bodyHtml[0].removeEventListener('click', _handler_Registration__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    bodyHtml[0].addEventListener('click', _handler_Registration__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  } else if (match !== null) {\n    // there is page for uthorization\n    bodyHtml[0].removeEventListener('click', _handler_Athorisation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    bodyHtml[0].addEventListener('click', _handler_Athorisation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n};\n\n// document.removeEventListener('DOMContentLoaded', handlerLoadPage);\ndocument.addEventListener('DOMContentLoaded', handlerLoadPage);\n\n//# sourceURL=webpack://account/./src/scripts/index.ts?");

/***/ }),

/***/ "./src/scripts/interfaces.ts":
/*!***********************************!*\
  !*** ./src/scripts/interfaces.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RequstsView: () => (/* binding */ RequstsView)\n/* harmony export */ });\nlet RequstsView = /*#__PURE__*/function (RequstsView) {\n  RequstsView[\"post\"] = \"POST\";\n  RequstsView[\"get\"] = \"GET\";\n  RequstsView[\"patch\"] = \"PATCH\";\n  RequstsView[\"delete\"] = \"DELETE\";\n  return RequstsView;\n}({});\n\n//# sourceURL=webpack://account/./src/scripts/interfaces.ts?");

/***/ }),

/***/ "./src/scripts/oop/Postman/index.ts":
/*!******************************************!*\
  !*** ./src/scripts/oop/Postman/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cookies */ \"./src/scripts/cookies.ts\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @interfaces */ \"./src/scripts/interfaces.ts\");\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nconst headers = {\n  'X-CSRFToken': (0,_cookies__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('csrftoken'),\n  'Content-Type': 'application/json' // contentType\n};\nclass Postman {\n  constructor(obj) {\n    // private readonly email: string | undefined = undefined;\n    // private readonly sername: string | undefined = undefined;\n    // private readonly password: string | undefined = undefined;\n    // private readonly repassword: string | undefined = undefined;\n    _defineProperty(this, \"headers\", void 0);\n    _defineProperty(this, \"context\", {\n      username: undefined,\n      password: undefined,\n      repassword: undefined,\n      email: undefined,\n      is_superuser: false\n    });\n    _defineProperty(this, \"is_superuser\", void 0);\n    this.is_superuser = false;\n    this.headers = headers;\n    this.context = obj;\n  }\n\n  /**\n   * TODO: Отправляем запросы на серверю\n   * @param props: `{ url, requestsView, context }` \\\n   * props.url type string. 'http:// .....'. \\\n   * props.requestsView type request 'post/get/...'. \\\n   * props.context type 'interfaces.Context'\n   * @returns Promise<boolean | object> .\n   */\n  async post(props) {\n    const {\n      url,\n      requestsView\n    } = {\n      ...props\n    };\n    if (requestsView.includes(_interfaces__WEBPACK_IMPORTED_MODULE_1__.RequstsView.post)) {\n      const request = await fetch(url, {\n        method: requestsView,\n        headers: {\n          ...this.headers\n        },\n        body: JSON.stringify(this.context)\n      });\n      if (!request.ok) {\n        console.log('[Postman > post]: POST-request is a FALSE');\n        return false;\n      }\n      console.log('[Postman > post]: POST-request is a TRUE');\n      return await request.json();\n    } else if (requestsView.includes(_interfaces__WEBPACK_IMPORTED_MODULE_1__.RequstsView.get)) {\n      const urlParams = new URL('http://127.0.0.1:8000/profile/page/');\n      urlParams.searchParams.set('password', this.context.password);\n      urlParams.searchParams.set('email', this.context.email);\n      const headler = {\n        ...this.headers\n      };\n      const obj = Object(headler);\n      if (Object.prototype.hasOwnProperty.call(obj, 'X-CSRFToken')) {\n        delete obj['X-CSRFToken'];\n      }\n      ;\n      fetch(urlParams.toString(), {\n        method: requestsView,\n        headers: obj\n      });\n      //     .then(async (request) => {\n      //       return await request.json();\n      //     });\n    }\n  }\n  async request(props) {\n    try {\n      const response = await this.post(props);\n      if (response === false) {\n        throw new Error('[Postman > requesty]: Something what wrong!');\n      }\n      return response;\n    } catch (er) {\n      throw new Error(\"[Postman > requesty]: Something what wrong - \".concat(er));\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Postman);\n\n//# sourceURL=webpack://account/./src/scripts/oop/Postman/index.ts?");

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