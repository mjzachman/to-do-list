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

/***/ "./src/DOM-methods.js":
/*!****************************!*\
  !*** ./src/DOM-methods.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayToDo\": () => (/* binding */ displayToDo)\n/* harmony export */ });\nconst displayToDo = (obj) => {\n    const content = document.getElementById('content');\n\n    const dispToDo = document.createElement('div');\n    dispToDo.classList.add('todo');\n\n    const toDoTitle = document.createElement('p');\n    toDoTitle.classList.add('title');\n\n    const toDoDesc = document.createElement('p');\n    toDoDesc.classList.add('desc');\n\n    toDoTitle.textContent = obj.title;\n    toDoDesc.textContent = obj.desc;\n\n    dispToDo.appendChild(toDoTitle);\n    dispToDo.appendChild(toDoDesc);\n    content.appendChild(dispToDo);\n }\n\n \n\n//# sourceURL=webpack://to-do-list/./src/DOM-methods.js?");

/***/ }),

/***/ "./src/app-logic.js":
/*!**************************!*\
  !*** ./src/app-logic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project),\n/* harmony export */   \"toDo\": () => (/* binding */ toDo)\n/* harmony export */ });\nconst toDo = (title, desc, dueDate, prio) => {\n    return { title, desc, dueDate, prio };\n}\n\nconst project = (title) => {\n    const toDos = [];\n    const addToDo = (obj) => {\n        toDos.push(obj);\n    }\n    const deleteToDo = () => {\n        console.log('delete');\n    }\n    return { title, toDos, addToDo, deleteToDo  }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/app-logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ \"./src/load-page.js\");\n/* harmony import */ var _app_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-logic */ \"./src/app-logic.js\");\n/* harmony import */ var _DOM_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-methods */ \"./src/DOM-methods.js\");\n\n\n\n\n   (0,_load_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const newTodo = (0,_app_logic__WEBPACK_IMPORTED_MODULE_1__.toDo)('Task 1', 'This thing I should do', 'tomorrow', 0 );\n    const toDo2 = (0,_app_logic__WEBPACK_IMPORTED_MODULE_1__.toDo)('Task 2', 'buy a birthday present', 'Jan 11th', 1);\n    const lowTodo = (0,_app_logic__WEBPACK_IMPORTED_MODULE_1__.toDo)('Task 3', 'Something i dont wanna do', 'eventually', -1);\n    const myProject = (0,_app_logic__WEBPACK_IMPORTED_MODULE_1__.project)('Big Project', '1 month');\n\n    myProject.addToDo(newTodo);\n    myProject.addToDo(toDo2);\n    myProject.addToDo(lowTodo);\n\n   (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_2__.displayToDo)(newTodo);\n   (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_2__.displayToDo)(toDo2);\n   (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_2__.displayToDo)(lowTodo);\n\n\n   const addBtn = document.querySelector('#add');\n   const modal = document.querySelector('#add-modal');\n   const span = document.querySelector('.close');\n   addBtn.addEventListener('click', () => {\n      modal.style.display = 'block';\n   });\n\n   span.addEventListener('click', () => {\n      modal.style.display = 'none';\n   })\n\n    \n\n    \n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadPage = () => {\n    const body = document.querySelector('body');\n    const header = document.createElement('header');\n    const page = document.createElement('div');\n    const sidebar = document.createElement('div');\n    const content = document.createElement('div');\n    const footer = document.createElement('footer');\n    const buttons = document.createElement('div');\n    const addBtn = document.createElement('button');\n    const addModal = document.createElement('div');\n    const addModalContent = document.createElement('div');\n    const words = document.createElement('p');\n    const span = document.createElement('span');\n    const menuBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n    \n    page.setAttribute('id', 'page');\n    sidebar.setAttribute('id', 'sidebar');\n    content.setAttribute('id', 'content');\n\n    buttons.setAttribute('id', 'buttons');\n\n    addBtn.setAttribute('id', 'add');\n    addBtn.textContent = 'Add New';\n\n    addModal.setAttribute('id', 'add-modal');\n\n    addModalContent.setAttribute('id', 'add-modal-content');\n    words.textContent = 'modal works!!';\n\n    span.classList.add('close');\n    span.textContent = 'x';\n\n\n    menuBtn.setAttribute('id', 'sort');\n    menuBtn.textContent = 'Sort';\n    \n    contactBtn.setAttribute('id', 'delete');\n    contactBtn.textContent = 'Delete';\n\n    buttons.appendChild(addBtn);\n    buttons.appendChild(menuBtn);\n    buttons.appendChild(contactBtn);\n    sidebar.appendChild(buttons);\n    page.appendChild(sidebar);\n    page.appendChild(content);\n    body.appendChild(header);\n    body.appendChild(page);\n    body.appendChild(footer);\n    \n    addModal.appendChild(addModalContent);\n    addModalContent.appendChild(words);\n    addModalContent.appendChild(span);\n    body.appendChild(addModal);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://to-do-list/./src/load-page.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;