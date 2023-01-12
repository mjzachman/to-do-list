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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"expand\": () => (/* binding */ expand),\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\nconst display = (obj) => {\n    const content = document.getElementById('content');\n\n    const dispToDo = document.createElement('div');\n    const toDoTitle = document.createElement('p');\n    const toDoDesc = document.createElement('p');\n    const del = document.createElement('span');\n\n    dispToDo.classList.add('todo');\n    toDoTitle.classList.add('title');\n    toDoDesc.classList.add('desc');\n    del.classList.add('close');\n    del.classList.add('to-do-close');\n\n    toDoTitle.textContent = obj.title;\n    toDoDesc.textContent = obj.desc;\n    del.textContent = 'x';\n\n    dispToDo.appendChild(toDoTitle);\n    dispToDo.appendChild(toDoDesc);\n    dispToDo.appendChild(del);\n    content.appendChild(dispToDo);\n }\n\n const expand = (obj) => {\n    // given a selected to-do, expand the display to show all hidden information\n }\n\n const remove = (obj) => {\n    console.log('remove');\n    //given a selected to-do, remove the display of that object\n }\n\n \n\n//# sourceURL=webpack://to-do-list/./src/DOM-methods.js?");

/***/ }),

/***/ "./src/app-logic.js":
/*!**************************!*\
  !*** ./src/app-logic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project),\n/* harmony export */   \"toDo\": () => (/* binding */ toDo),\n/* harmony export */   \"validate\": () => (/* binding */ validate)\n/* harmony export */ });\nconst toDo = (title, desc, dueDate, prio) => {\n    return { title, desc, dueDate, prio };\n}\n\nconst project = (title) => {\n    const toDos = [];\n    const add = (obj) => {\n        toDos.push(obj);\n    }\n    const remove = () => {\n        console.log('delete');\n    }\n    return { title, toDos, add, remove  }\n}\n\nconst validate = (event) => {\n    event.preventDefault();\n    \n    const form = document.querySelector('form');\n    const taskName = document.querySelector('#task_name').value;\n    const taskDesc = document.querySelector('#task_desc').value;\n    const taskDate = document.querySelector('#task_date').value;\n    let taskPrio = document.querySelector('input[name=\"task_prio\"]:checked').value;\n\n    switch (taskPrio) {\n        case 'high':\n            taskPrio = 1;\n            break;\n        case 'norm':\n            taskPrio = 0;\n            break;\n        case 'low':\n            taskPrio = -1;\n            break;\n        default:\n            taskPrio = 0;\n    }\n\n    const userToDo = toDo(taskName, taskDesc, taskDate, taskPrio)\n    clearForm(form);\n    return userToDo;\n}\n\nconst clearForm = (oForm) => {\n   \n        var elements = oForm.elements;\n         \n        oForm.reset();\n      \n        for(let i=0; i<elements.length; i++) {\n           \n        const field_type = elements[i].type.toLowerCase();\n       \n        switch(field_type) {\n       \n          case \"text\":\n          case \"password\":\n          case \"textarea\":\n                case \"hidden\":  \n           \n            elements[i].value = \"\";\n            break;\n             \n          case \"radio\":\n          case \"checkbox\":\n              if (elements[i].checked) {\n                elements[i].checked = false;\n            }\n            break;\n      \n          case \"select-one\":\n          case \"select-multi\":\n                      elements[i].selectedIndex = -1;\n            break;\n      \n          default:\n            break;\n        }\n          }\n      }  \n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/app-logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-logic */ \"./src/app-logic.js\");\n/* harmony import */ var _DOM_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-methods */ \"./src/DOM-methods.js\");\n\n\n\n    const chores = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.toDo)('Task 1', 'clean my room', 'tomorrow', -1);\n    const birthday = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.toDo)('Task 2', 'buy a birthday present', 'Jan 11th', 1);\n    const practice = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.toDo)('Task 3', 'practice my code', 'everyday', 0);\n    const apply = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.toDo)('Task 4', 'apply for jobs', 'end of january', 1);\n\n    const project1 = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.project)('Personal');\n    const project2 = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.project)('Professional');\n\n    const projectList = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.project)('Project List')\n\n    project1.add(chores);\n    project1.add(birthday);\n    project2.add(practice);\n    project2.add(apply);\n\n    projectList.add(project1);\n    projectList.add(project2);\n\n   (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_1__.display)(chores);\n   (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_1__.display)(birthday);\n   (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_1__.display)(practice);\n   (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_1__.display)(apply);\n\n\n   const addBtn = document.querySelector('#add');\n   const modal = document.querySelector('#modal');\n   const modalClose = document.querySelector('#modal-close');\n   const submit = document.querySelector('#submit');\n   const toDoClose = document.querySelectorAll('.to-do-close')\n   \n   addBtn.addEventListener('click', () => {\n      modal.style.display = 'block';\n   });\n\n   modalClose.addEventListener('click', () => {\n      modal.style.display = 'none';\n   })\n\n   submit.addEventListener('click', (e) => {\n      const userInput = (0,_app_logic__WEBPACK_IMPORTED_MODULE_0__.validate)(e);\n      (0,_DOM_methods__WEBPACK_IMPORTED_MODULE_1__.display)(userInput);\n      project1.add(userInput);\n      modal.style.display = 'none';\n   })\n    \n   toDoClose.forEach((button) => {\n      button.addEventListener('click', () => {\n      ;(0,_DOM_methods__WEBPACK_IMPORTED_MODULE_1__.remove)(newTodo);\n      // remove to do from memory\n      // remove to do display\n      })\n   })\n    \n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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