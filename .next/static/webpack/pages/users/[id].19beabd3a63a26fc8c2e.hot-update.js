/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/dell/Documentos/GitHub/NextJs/pages/users/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction User(_ref) {\n  _s();\n\n  var user = _ref.user;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  console.log(router);\n\n  if (router.isFallback) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"CARGANDO...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 16\n    }, this);\n  } // /users/1, /users/2\n  // /users/[id]\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [\"User ID \", user.id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"User\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Name: \", user.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Email: \", user.email]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Phone: \", user.phone]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Website: \", user.website]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\n\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = User;\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8yY2ViIl0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsImlzRmFsbGJhY2siLCJpZCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwid2Vic2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsSUFBVCxPQUFxQjtBQUFBOztBQUFBLE1BQU5DLElBQU0sUUFBTkEsSUFBTTtBQUNoQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaOztBQUNBLE1BQUdBLE1BQU0sQ0FBQ0ksVUFBVixFQUFzQjtBQUNsQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0gsR0FMK0IsQ0FNaEM7QUFDQTs7O0FBQ0Esc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw0QkFDSSw4REFBQyxzREFBRDtBQUFBLDZCQUFnQkwsSUFBSSxDQUFDTSxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLDJCQUFVTixJQUFJLENBQUNPLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLDRCQUFXUCxJQUFJLENBQUNRLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0k7QUFBQSw0QkFBV1IsSUFBSSxDQUFDUyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JO0FBQUEsOEJBQWFULElBQUksQ0FBQ1UsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0FsQnVCWCxJO1VBQ0xHLGtEOzs7S0FES0gsSSIsImZpbGUiOiIuL3BhZ2VzL3VzZXJzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aXRsZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoe3VzZXJ9KXtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuICAgIGlmKHJvdXRlci5pc0ZhbGxiYWNrICl7XG4gICAgICAgIHJldHVybiA8ZGl2PkNBUkdBTkRPLi4uPC9kaXY+XG4gICAgfVxuICAgIC8vIC91c2Vycy8xLCAvdXNlcnMvMlxuICAgIC8vIC91c2Vycy9baWRdXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPFRpdGxlPlVzZXIgSUQge3VzZXIuaWR9PC9UaXRsZT5cbiAgICAgICAgICAgIDxoMz5Vc2VyPC9oMz5cbiAgICAgICAgICAgIDxwPk5hbWU6IHt1c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDxwPlBob25lOiB7dXNlci5waG9uZX08L3A+XG4gICAgICAgICAgICA8cD5XZWJzaXRlOiB7dXNlci53ZWJzaXRlfTwvcD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XG5cbiAgICBjb25zdCBwYXRocyA9IFtcbiAgICAgICAgeyAgIHBhcmFtczogeyBpZDogJzEnIH0gfSxcbiAgICAgICAgeyAgIHBhcmFtczogeyBpZDogJzInIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzMnIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzQnIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzUnIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzYnIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzcnIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzgnIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzknIH0gfSxcbiAgICAgICAgLy8geyAgIHBhcmFtczogeyBpZDogJzEwJyB9IH0sXG4gICAgXTtcbiAgICByZXR1cm57XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pe1xuICAgIC8vY29udGV4dC5wYXJhbXMuaWRcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWA7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCB1c2VyID0gcmVzLmpzb24oKTtcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgdXNlclxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

});