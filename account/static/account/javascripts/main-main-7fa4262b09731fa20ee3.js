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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handlerAuthorisation)\n/* harmony export */ });\nasync function handlerAuthorisation(e) {\n  e.preventDefault();\n  // const target = e.target as HTMLButtonElement;\n  // const resp = targetValidater(target, 'Авторизоваться');\n  // if (resp !== true) {\n  //   return false;\n  // }\n\n  // if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||\n  //   (APP_SERVER_PORT === null) ||\n  //   (APP_ACCOUNTS_PATHNAME === null)) {\n  //   return false;\n  // };\n  // const host = APP_SERVER_HOST.substring(0);\n  // const port = APP_SERVER_PORT.substring(0);\n  // const urls: string = host + ':' + port + '/account/authorization/';\n\n  // // There data of forms will geting\n  // const formHtml = target.parentElement as HTMLFormElement;\n  // const emailForms = formHtml.querySelector('input[name=\"email\"]') as HTMLInputElement;\n  // const passwordForms = formHtml.querySelector('input[name=\"password\"]') as HTMLInputElement;\n  // let props: Context | PostmansRequest = {\n  //   password: passwordForms.value,\n  //   email: emailForms.value\n  // };\n\n  // const postman = new Postman({ ...props });\n  // const urlParams = new URL('http://127.0.0.1:8000/account/form/');\n  // // urlParams.searchParams.set('password', props.password as string);\n  // // urlParams.searchParams.set('email', props.email as string);\n  // props = {\n  //   url: urlParams.toString(),\n  //   requestsView: RequstsView.post\n  // };\n  // const result = await postman.request({ ...props });\n}\n\n//# sourceURL=webpack://account/./src/scripts/handler/Athorisation/index.ts?");

/***/ }),

/***/ "./src/scripts/handler/Registration/index.ts":
/*!***************************************************!*\
  !*** ./src/scripts/handler/Registration/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handlerRegistration)\n/* harmony export */ });\n/* harmony import */ var _Validaors_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Validaors/index.ts */ \"./src/scripts/Validators/index.ts\");\n\n// const dotenv = require('dotenv');\n// require(dotenv).config();\nasync function handlerRegistration(e) {\n  const target = e.target;\n  const resp = (0,_Validaors_index_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, 'Зарегистрироваться');\n  if (!resp) {\n    return false;\n  }\n  // e.preventDefault();\n  // There data of forms will geting\n  const formHtml = target.parentElement;\n  const usernameForms = formHtml.querySelector('input[name=\"email\"]');\n  const password1Forms = formHtml.querySelector('input[name=\"password1\"]');\n  const password2Forms = formHtml.querySelector('input[name=\"repassword2\"]');\n  // const emailForms = formHtml.querySelector('input[name=\"email\"]') as HTMLInputElement;\n\n  // if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||\n  //   (APP_SERVER_PORT === null) ||\n  //   (APP_ACCOUNTS_PATHNAME === null)) {\n  //   return false;\n  // };\n\n  // const host = APP_SERVER_HOST as string;\n  // const pathnames = APP_ACCOUNTS_PATHNAME as string;\n  // const port = APP_SERVER_PORT as string;\n  // const url: string = host + ':' + port + pathnames;\n  // const h = {\n  //   'X-CSRFToken': getCookie('csrftoken') as string,\n  //   'Content-Type': 'application/json' // contentType\n  // };\n  // const context = {\n  //   username: usernameForms.value,\n  //   password: passwordForms.value,\n  //   repassword: repasswordForms.value,\n  //   email: emailForms.value,\n  //   is_superuser: false\n  // };\n\n  // fetch(url, {\n  //   method: 'POST',\n  //   headers: h,\n  //   body: JSON.stringify(context)\n  // })\n  //   .then(async (resp_) => {\n  //     if (!resp_.ok) {\n  //       return false;\n  //     }\n  //     return await resp_.json();\n  //   })\n  //   .catch(() => {\n  //     target.insertAdjacentElement('beforebegin', APP_INFO_FORM_REGIST_USER);\n  //     console.log('[handlerRegistration > post]: POST-request is a FALSE');\n  //     return false;\n  //   })\n  //   .then((resppon) => {\n  //     if (\n  //       (resppon === false) ||\n  //       ((typeof resppon).includes('object') &&\n  //         (typeof resppon.username).includes('object') &&\n  //         (typeof resppon.username[0]).includes(String(undefined))) ||\n  //       ((typeof resppon).includes('object') &&\n  //         (typeof resppon.username).includes('object') &&\n  //         !(typeof resppon.username[0]).includes(String(undefined)) &&\n  //         String(resppon.username[0]).includes('invalid'))\n  //     ) {\n  //       // The check has no passed and 'resp=false'\n  //       return false;\n  //     }\n  //     console.log(resppon);\n  //     const pathname = 'account/form/'; // ${resppon.id}\n  //     const url_ = window.location.href.replace('account/registration/', pathname);\n  //     const urlRelocztion = new URL(url_);\n  //     urlRelocztion.search = window.location.search;\n  //     urlRelocztion.hash = window.location.hash;\n  //     window.location.assign(urlRelocztion.toString());\n  //     // location.assign(urlRelocztion.toString());\n  //   });\n  // return true;\n}\n\n//# sourceURL=webpack://account/./src/scripts/handler/Registration/index.ts?");

/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handler_Registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler/Registration */ \"./src/scripts/handler/Registration/index.ts\");\n/* harmony import */ var _handler_Athorisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler/Athorisation */ \"./src/scripts/handler/Athorisation/index.ts\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ \"./src/scripts/env.js\");\n\n\n\n// export const reAuthorPage = /\\/account\\/[0-9]+\\//;\n\nconst handlerLoadPage = () => {\n  const pathname = location.pathname;\n  const bodyHtml = document.querySelectorAll('body');\n  if (bodyHtml === null) {\n    return;\n  }\n  const match = pathname.match('account/registration/'); // /form\n  if (match !== null) {\n    // there is page for user registration\n    bodyHtml[0].removeEventListener('click', _handler_Registration__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    bodyHtml[0].addEventListener('click', _handler_Registration__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  } else if (pathname.includes(_env__WEBPACK_IMPORTED_MODULE_2__.APP_PAGE_AUTHORIZSTION)) {\n    // there is page for uthorization\n    bodyHtml[0].removeEventListener('click', _handler_Athorisation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    bodyHtml[0].addEventListener('click', _handler_Athorisation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n  ;\n};\n// document.removeEventListener('DOMContentLoaded', handlerLoadPage);\ndocument.addEventListener('DOMContentLoaded', handlerLoadPage);\n\n//# sourceURL=webpack://account/./src/scripts/index.ts?");

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