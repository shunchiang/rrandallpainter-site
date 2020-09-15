webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n //modal styles\n\nvar customStyles = {\n  content: {\n    width: \"50%\",\n    top: \"10%\",\n    left: \"20%\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"transparent\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  }\n};\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      clickedImage = _useState2[0],\n      setClickedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      modalIsOpen = _useState3[0],\n      setIsOpen = _useState3[1];\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: customStyles,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: clickedImage,\n    alt: \"gallery modal\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clickedImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, \"Full Gallery\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      onClick: function onClick() {\n        openModal();\n        setClickedImage(url);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }\n    });\n  })))));\n}\n\n_s(Gallery, \"ZoraSLerWGEiXToIr6wo83OJ5l4=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiR2FsbGVyeSIsInVzZVN0YXRlIiwiZ2FsbGVyeUltYWdlcyIsInNldEdhbGxlcnlJbWFnZXMiLCJjbGlja2VkSW1hZ2UiLCJzZXRDbGlja2VkSW1hZ2UiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyIiwic3R5bGUiLCJnYWxsZXJ5UGFnZSIsImdhbGxlcnlUaXRsZSIsImdyaWQiLCJyb3dzIiwibWFwIiwidXJsIiwiaW5kZXgiLCJnYWxsZXJ5SW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxLQURBO0FBRVBDLE9BQUcsRUFBRSxLQUZFO0FBR1BDLFFBQUksRUFBRSxLQUhDO0FBSVBDLFVBQU0sRUFBRSxNQUpEO0FBS1BDLGVBQVcsRUFBRSxNQUxOO0FBTVBDLG1CQUFlLEVBQUUsYUFOVjtBQU9QQyxnQkFBWSxFQUFFLEtBUFA7QUFRUEMsZUFBVyxFQUFFO0FBUk47QUFEVSxDQUFyQjtBQWFlLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDekJDLGFBRHlCO0FBQUEsTUFDVkMsZ0JBRFU7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRXpCRyxZQUZ5QjtBQUFBLE1BRVhDLGVBRlc7O0FBQUEsbUJBR0NKLHNEQUFRLENBQUMsS0FBRCxDQUhUO0FBQUEsTUFHekJLLFdBSHlCO0FBQUEsTUFHWkMsU0FIWTs7QUFLaEMsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQkQsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNFLFVBQVQsR0FBc0I7QUFDcEJGLGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDs7QUFFREcseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGdEQUFLLENBQ0ZDLElBREgsQ0FFSSwrQkFGSixFQUdJLEVBSEosRUFJSTtBQUNFQyxhQUFPLEVBQUU7QUFDUCx1Q0FBK0I7QUFEeEI7QUFEWCxLQUpKLEVBVUdDLElBVkgsQ0FVUSxVQUFDQyxHQUFELEVBQVM7QUFDYkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQWYsc0JBQWdCLENBQUNZLEdBQUcsQ0FBQ0csSUFBTCxDQUFoQjtBQUNELEtBYkgsV0FjUyxVQUFDQyxHQUFELEVBQVM7QUFDZEgsYUFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDRCxLQWhCSDtBQWlCRCxHQWxCUSxFQWtCTixFQWxCTSxDQUFUO0FBb0JBLFNBQ0UsbUVBQ0UsTUFBQyxrREFBRDtBQUNFLFVBQU0sRUFBRWIsV0FEVjtBQUVFLGtCQUFjLEVBQUVHLFVBRmxCO0FBR0UsU0FBSyxFQUFFbkIsWUFIVDtBQUlFLGdCQUFZLEVBQUMsT0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFYyxZQURQO0FBRUUsT0FBRyxFQUFDLGVBRk47QUFHRSxhQUFTLEVBQUVnQixvRUFBSyxDQUFDaEIsWUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FERixFQWVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBZ0JFO0FBQUssYUFBUyxFQUFFZ0Isb0VBQUssQ0FBQ0MsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRCxvRUFBSyxDQUFDRSxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVGLG9FQUFLLENBQUNHLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsb0VBQUssQ0FBQ0ksSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdEIsYUFBYSxDQUFDdUIsR0FBZCxDQUFrQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDakMsV0FDRTtBQUNFLFNBQUcsRUFBRUQsR0FEUDtBQUVFLGVBQVMsRUFBRU4sb0VBQUssQ0FBQ1EsWUFGbkI7QUFHRSxTQUFHLDZCQUFzQkQsS0FBdEIsQ0FITDtBQUlFLGFBQU8sRUFBRSxtQkFBTTtBQUNibkIsaUJBQVM7QUFDVEgsdUJBQWUsQ0FBQ3FCLEdBQUQsQ0FBZjtBQUNELE9BUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBV0QsR0FaQSxDQURILENBREYsQ0FGRixDQWhCRixDQURGO0FBdUNEOztHQXhFdUIxQixPOztLQUFBQSxPIiwiZmlsZSI6Ii4vcGFnZXMvZ2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3Nhc3MvR2FsbGVyeVBhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcblxuLy9tb2RhbCBzdHlsZXNcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgIHRvcDogXCIxMCVcIixcbiAgICBsZWZ0OiBcIjIwJVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiLTUwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeSgpIHtcbiAgY29uc3QgW2dhbGxlcnlJbWFnZXMsIHNldEdhbGxlcnlJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2xpY2tlZEltYWdlLCBzZXRDbGlja2VkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDgwL2ltYWdlcy9cIixcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0R2FsbGVyeUltYWdlcyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtjbGlja2VkSW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJnYWxsZXJ5IG1vZGFsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2xpY2tlZEltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5UGFnZX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cbiAgICAgICAgICAgIHtnYWxsZXJ5SW1hZ2VzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})