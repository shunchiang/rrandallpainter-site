webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n //modal styles\n\nvar customStyles = {\n  content: {\n    top: \"50%\",\n    right: \"auto\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"rgb(58, 58, 58)\",\n    borderRadius: \"8px\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      clickedImage = _useState2[0],\n      setClickedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      modalIsOpen = _useState3[0],\n      setIsOpen = _useState3[1];\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: customStyles,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: clickedImage,\n    alt: \"gallery modal\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clickedImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, \"Full Gallery\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      onClick: function onClick() {\n        openModal();\n        setClickedImage(url);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }\n    });\n  })))));\n}\n\n_s(Gallery, \"ZoraSLerWGEiXToIr6wo83OJ5l4=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmxheSIsIkdhbGxlcnkiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiY2xpY2tlZEltYWdlIiwic2V0Q2xpY2tlZEltYWdlIiwibW9kYWxJc09wZW4iLCJzZXRJc09wZW4iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsInN0eWxlIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJncmlkIiwicm93cyIsIm1hcCIsInVybCIsImluZGV4IiwiZ2FsbGVyeUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRTtBQUNQQyxPQUFHLEVBQUUsS0FERTtBQUVQQyxTQUFLLEVBQUUsTUFGQTtBQUdQQyxVQUFNLEVBQUUsTUFIRDtBQUlQQyxlQUFXLEVBQUUsTUFKTjtBQUtQQyxtQkFBZSxFQUFFLGlCQUxWO0FBTVBDLGdCQUFZLEVBQUU7QUFOUCxHQURVO0FBU25CQyxTQUFPLEVBQUU7QUFDUEYsbUJBQWUsRUFBRTtBQURWO0FBVFUsQ0FBckI7QUFjZSxTQUFTRyxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ3pCQyxhQUR5QjtBQUFBLE1BQ1ZDLGdCQURVOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUV6QkcsWUFGeUI7QUFBQSxNQUVYQyxlQUZXOztBQUFBLG1CQUdDSixzREFBUSxDQUFDLEtBQUQsQ0FIVDtBQUFBLE1BR3pCSyxXQUh5QjtBQUFBLE1BR1pDLFNBSFk7O0FBS2hDLFdBQVNDLFNBQVQsR0FBcUI7QUFDbkJELGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTRSxVQUFULEdBQXNCO0FBQ3BCRixhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7O0FBRURHLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUNGQyxJQURILENBRUksK0JBRkosRUFHSSxFQUhKLEVBSUk7QUFDRUMsYUFBTyxFQUFFO0FBQ1AsdUNBQStCO0FBRHhCO0FBRFgsS0FKSixFQVVHQyxJQVZILENBVVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FmLHNCQUFnQixDQUFDWSxHQUFHLENBQUNHLElBQUwsQ0FBaEI7QUFDRCxLQWJILFdBY1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RILGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaO0FBQ0QsS0FoQkg7QUFpQkQsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVDtBQW9CQSxTQUNFLG1FQUNFLE1BQUMsa0RBQUQ7QUFDRSxVQUFNLEVBQUViLFdBRFY7QUFFRSxrQkFBYyxFQUFFRyxVQUZsQjtBQUdFLFNBQUssRUFBRWxCLFlBSFQ7QUFJRSxnQkFBWSxFQUFDLE9BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRWEsWUFEUDtBQUVFLE9BQUcsRUFBQyxlQUZOO0FBR0UsYUFBUyxFQUFFZ0Isb0VBQUssQ0FBQ2hCLFlBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREYsRUFlRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQWdCRTtBQUFLLGFBQVMsRUFBRWdCLG9FQUFLLENBQUNDLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUQsb0VBQUssQ0FBQ0UsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUssYUFBUyxFQUFFRixvRUFBSyxDQUFDRyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVILG9FQUFLLENBQUNJLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3RCLGFBQWEsQ0FBQ3VCLEdBQWQsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ2pDLFdBQ0U7QUFDRSxTQUFHLEVBQUVELEdBRFA7QUFFRSxlQUFTLEVBQUVOLG9FQUFLLENBQUNRLFlBRm5CO0FBR0UsU0FBRyw2QkFBc0JELEtBQXRCLENBSEw7QUFJRSxhQUFPLEVBQUUsbUJBQU07QUFDYm5CLGlCQUFTO0FBQ1RILHVCQUFlLENBQUNxQixHQUFELENBQWY7QUFDRCxPQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBWkEsQ0FESCxDQURGLENBRkYsQ0FoQkYsQ0FERjtBQXVDRDs7R0F4RXVCMUIsTzs7S0FBQUEsTyIsImZpbGUiOiIuL3BhZ2VzL2dhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5cbi8vbW9kYWwgc3R5bGVzXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB0b3A6IFwiNTAlXCIsXG4gICAgcmlnaHQ6IFwiYXV0b1wiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiLTUwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoNTgsIDU4LCA1OClcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeSgpIHtcbiAgY29uc3QgW2dhbGxlcnlJbWFnZXMsIHNldEdhbGxlcnlJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2xpY2tlZEltYWdlLCBzZXRDbGlja2VkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDgwL2ltYWdlcy9cIixcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0R2FsbGVyeUltYWdlcyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtjbGlja2VkSW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJnYWxsZXJ5IG1vZGFsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2xpY2tlZEltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5UGFnZX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cbiAgICAgICAgICAgIHtnYWxsZXJ5SW1hZ2VzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})