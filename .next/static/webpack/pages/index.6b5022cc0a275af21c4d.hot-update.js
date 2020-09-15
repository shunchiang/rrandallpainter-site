webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Jumbo.js":
/*!*****************************!*\
  !*** ./components/Jumbo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Jumbo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/Jumbo.module.scss */ \"./sass/Jumbo.module.scss\");\n/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/kitchen1.png */ \"./images/kitchen1.png\");\n/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/desktopKitchen.jpg */ \"./images/desktopKitchen.jpg\");\n/* harmony import */ var _images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useWindowSize */ \"./utils/useWindowSize.js\");\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/components/Jumbo.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import axios from \"axios\";\n\n\n\n\n\nfunction Jumbo() {\n  _s();\n\n  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default.a),\n      mainPhoto = _useState[0],\n      setMainPhoto = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (size.width > 850) {\n      setMainPhoto(_images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);\n    } else {\n      setMainPhoto(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n    }\n  }, [size.width]);\n  return __jsx(\"div\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboTron,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heroImage,\n    src: mainPhoto,\n    alt: \"painting sample\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Premium craftsmanship\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }), \"Competitive value\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }), \"Maximum satisfaction\"), __jsx(\"button\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ctaBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Get Quote\")));\n}\n\n_s(Jumbo, \"OCaXXYP7OPO+MsNXPula+71gc1Y=\", false, function () {\n  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Jumbo;\n\nvar _c;\n\n$RefreshReg$(_c, \"Jumbo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9KdW1iby5qcz9hYjU5Il0sIm5hbWVzIjpbIkp1bWJvIiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImtpdGNoZW5QaG90byIsIm1haW5QaG90byIsInNldE1haW5QaG90byIsInVzZUVmZmVjdCIsIndpZHRoIiwiZGVza3RvcEtpdGNoZW4iLCJzdHlsZXMiLCJqdW1ib1Ryb24iLCJoZXJvSW1hZ2UiLCJqdW1ib0NvbnRlbnQiLCJqdW1ib1RleHQiLCJjdGFCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixNQUFNQyxJQUFJLEdBQUdDLG9FQUFhLEVBQTFCOztBQUQ4QixrQkFFSUMsc0RBQVEsQ0FBQ0MsMkRBQUQsQ0FGWjtBQUFBLE1BRXZCQyxTQUZ1QjtBQUFBLE1BRVpDLFlBRlk7O0FBSTlCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixJQUFJLENBQUNPLEtBQUwsR0FBYSxHQUFqQixFQUFzQjtBQUNwQkYsa0JBQVksQ0FBQ0csaUVBQUQsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMSCxrQkFBWSxDQUFDRiwyREFBRCxDQUFaO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0gsSUFBSSxDQUFDTyxLQUFOLENBTk0sQ0FBVDtBQVFBLFNBQ0U7QUFBSyxhQUFTLEVBQUVFLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsU0FBdkI7QUFBa0MsT0FBRyxFQUFFUCxTQUF2QztBQUFrRCxPQUFHLEVBQUMsaUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFSyw4REFBTSxDQUFDRyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHVCQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRix5QkFERixFQVFFO0FBQVEsYUFBUyxFQUFFSiw4REFBTSxDQUFDSyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLENBRkYsQ0FERjtBQWVEOztHQTNCdUJmLEs7VUFDVEUsNEQ7OztLQURTRixLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9KdW1iby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zYXNzL0p1bWJvLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQga2l0Y2hlblBob3RvIGZyb20gXCIuLi9pbWFnZXMva2l0Y2hlbjEucG5nXCI7XG5pbXBvcnQgZGVza3RvcEtpdGNoZW4gZnJvbSBcIi4uL2ltYWdlcy9kZXNrdG9wS2l0Y2hlbi5qcGdcIjtcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91dGlscy91c2VXaW5kb3dTaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEp1bWJvKCkge1xuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICBjb25zdCBbbWFpblBob3RvLCBzZXRNYWluUGhvdG9dID0gdXNlU3RhdGUoa2l0Y2hlblBob3RvKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaXplLndpZHRoID4gODUwKSB7XG4gICAgICBzZXRNYWluUGhvdG8oZGVza3RvcEtpdGNoZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNYWluUGhvdG8oa2l0Y2hlblBob3RvKTtcbiAgICB9XG4gIH0sIFtzaXplLndpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmp1bWJvVHJvbn0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JbWFnZX0gc3JjPXttYWluUGhvdG99IGFsdD1cInBhaW50aW5nIHNhbXBsZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmp1bWJvQ29udGVudH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmp1bWJvVGV4dH0+XG4gICAgICAgICAgUHJlbWl1bSBjcmFmdHNtYW5zaGlwXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgQ29tcGV0aXRpdmUgdmFsdWVcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBNYXhpbXVtIHNhdGlzZmFjdGlvblxuICAgICAgICA8L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY3RhQnRufT5HZXQgUXVvdGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Jumbo.js\n");

/***/ }),

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false

})