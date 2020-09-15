webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Full Gallery\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    });\n  }))));\n}\n\n_s(Gallery, \"I5TNu7uM3FIEQnrX9UwTIDVZs3o=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsInN0eWxlIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJncmlkIiwicm93cyIsIm1hcCIsInVybCIsImluZGV4IiwiZ2FsbGVyeUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUN6QkMsYUFEeUI7QUFBQSxNQUNWQyxnQkFEVTs7QUFHaENDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUNGQyxJQURILENBRUksK0JBRkosRUFHSSxFQUhKLEVBSUk7QUFDRUMsYUFBTyxFQUFFO0FBQ1AsdUNBQStCO0FBRHhCO0FBRFgsS0FKSixFQVVHQyxJQVZILENBVVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FULHNCQUFnQixDQUFDTSxHQUFHLENBQUNHLElBQUwsQ0FBaEI7QUFDRCxLQWJILFdBY1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RILGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaO0FBQ0QsS0FoQkg7QUFpQkQsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVDtBQW9CQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxvRUFBSyxDQUFDQyxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVELG9FQUFLLENBQUNFLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUYsb0VBQUssQ0FBQ0csSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFSCxvRUFBSyxDQUFDSSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doQixhQUFhLENBQUNpQixHQUFkLENBQWtCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNqQyxXQUNFO0FBQ0UsU0FBRyxFQUFFRCxHQURQO0FBRUUsZUFBUyxFQUFFTixvRUFBSyxDQUFDUSxZQUZuQjtBQUdFLFNBQUcsNkJBQXNCRCxLQUF0QixDQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQU9ELEdBUkEsQ0FESCxDQURGLENBRkYsQ0FERjtBQWtCRDs7R0F6Q3VCckIsTzs7S0FBQUEsTyIsImZpbGUiOiIuL3BhZ2VzL2dhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3Nhc3MvR2FsbGVyeVBhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeSgpIHtcbiAgY29uc3QgW2dhbGxlcnlJbWFnZXMsIHNldEdhbGxlcnlJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC9pbWFnZXMvXCIsXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldEdhbGxlcnlJbWFnZXMocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlQYWdlfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJvd3N9PlxuICAgICAgICAgIHtnYWxsZXJ5SW1hZ2VzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})