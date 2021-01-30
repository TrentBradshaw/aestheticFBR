/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateaestheticreact"]("main",{

/***/ "./src/Login.js":
/*!**********************!*\
  !*** ./src/Login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Login = function Login(_ref) {\n  var email = _ref.email,\n      password = _ref.password,\n      setEmail = _ref.setEmail,\n      setPassword = _ref.setPassword,\n      handleLogin = _ref.handleLogin,\n      handleSignup = _ref.handleSignup,\n      hasaccount = _ref.hasaccount,\n      setHasAccount = _ref.setHasAccount,\n      emailError = _ref.emailError,\n      passWordError = _ref.passWordError;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    autoFocus: true,\n    required: true,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"errorMsg\"\n  }, emailError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"password\",\n    required: true,\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"errorMsg\"\n  }, passWordError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, hasaccount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: handleLogin\n  }, \"Sign in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" Don't have an account? \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    onClick: function onClick() {\n      return setHasAccount(!hasaccount);\n    }\n  }, \"Sign Up\"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: handleSignup\n  }, \"Sign up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Already have an account? \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    onClick: function onClick() {\n      return setHasAccount(!hasaccount);\n    }\n  }, \"Sign in\"))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://aestheticreact/./src/Login.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "3cf1b2c9c13b51483c3a"
/******/ 	})();
/******/ 	
/******/ }
);