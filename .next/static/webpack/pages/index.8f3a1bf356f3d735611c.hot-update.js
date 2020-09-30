webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Jumbo.js":
/*!*****************************!*\
  !*** ./components/Jumbo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jumbo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBtn */ "./components/EditBtn.js");
/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/Jumbo.module.scss */ "./sass/Jumbo.module.scss");
/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/kitchen1.png */ "./images/kitchen1.png");
/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/desktopKitchen.jpg */ "./images/desktopKitchen.jpg");
/* harmony import */ var _images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useWindowSize */ "./utils/useWindowSize.js");
var _jsxFileName = "T:\\Documents\\Github Projects\\rrandallpainter-site\\components\\Jumbo.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import axios from "axios";





function Jumbo() {
  _s();

  // Helper to grab window size
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_3___default.a),
      mainPhoto = _useState[0],
      setMainPhoto = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      logged = _useState2[0],
      setLogged = _useState2[1]; // Grab admin logged in state


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLogged(localStorage.getItem("rrandall-authorization"));
  }); // -

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (size.width > 850) {
      setMainPhoto(_images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);
    } else {
      setMainPhoto(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_3___default.a);
    }
  }, [size.width]);
  return __jsx("div", {
    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.jumboTron,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroImage,
    src: mainPhoto,
    alt: "painting sample",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.jumboContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_EditBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.jumboText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Premium craftsmanship", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), "Competitive value", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), "Maximum satisfaction"), __jsx("button", {
    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ctaBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Get Quote")));
}

_s(Jumbo, "pX3aM77hfDUuEq1n3Q+wDQXOmqI=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Jumbo;

var _c;

$RefreshReg$(_c, "Jumbo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9KdW1iby5qcyJdLCJuYW1lcyI6WyJKdW1ibyIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU3RhdGUiLCJraXRjaGVuUGhvdG8iLCJtYWluUGhvdG8iLCJzZXRNYWluUGhvdG8iLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2lkdGgiLCJkZXNrdG9wS2l0Y2hlbiIsInN0eWxlcyIsImp1bWJvVHJvbiIsImhlcm9JbWFnZSIsImp1bWJvQ29udGVudCIsImp1bWJvVGV4dCIsImN0YUJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QjtBQUNBLE1BQU1DLElBQUksR0FBR0Msb0VBQWEsRUFBMUI7O0FBRjhCLGtCQUdJQyxzREFBUSxDQUFDQywyREFBRCxDQUhaO0FBQUEsTUFHdkJDLFNBSHVCO0FBQUEsTUFHWkMsWUFIWTs7QUFBQSxtQkFJRkgsc0RBQVEsQ0FBQyxJQUFELENBSk47QUFBQSxNQUl2QkksTUFKdUI7QUFBQSxNQUlmQyxTQUplLGtCQU05Qjs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxhQUFTLENBQUNFLFlBQVksQ0FBQ0MsT0FBYixDQUFxQix3QkFBckIsQ0FBRCxDQUFUO0FBQ0QsR0FGUSxDQUFULENBUDhCLENBVzlCOztBQUNBRix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJUixJQUFJLENBQUNXLEtBQUwsR0FBYSxHQUFqQixFQUFzQjtBQUNwQk4sa0JBQVksQ0FBQ08saUVBQUQsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMUCxrQkFBWSxDQUFDRiwyREFBRCxDQUFaO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0gsSUFBSSxDQUFDVyxLQUFOLENBTk0sQ0FBVDtBQVFBLFNBQ0U7QUFBSyxhQUFTLEVBQUVFLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsU0FBdkI7QUFBa0MsT0FBRyxFQUFFWCxTQUF2QztBQUFrRCxPQUFHLEVBQUMsaUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFUyw4REFBTSxDQUFDRyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsdUJBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLHlCQUZGLEVBU0U7QUFBUSxhQUFTLEVBQUVKLDhEQUFNLENBQUNLLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsQ0FGRixDQURGO0FBZ0JEOztHQXBDdUJuQixLO1VBRVRFLDREOzs7S0FGU0YsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZjNhMWJmMzU2ZjNkNzM1NjExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEVkaXRCdG4gZnJvbSBcIi4vRWRpdEJ0blwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3Nhc3MvSnVtYm8ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGtpdGNoZW5QaG90byBmcm9tIFwiLi4vaW1hZ2VzL2tpdGNoZW4xLnBuZ1wiO1xyXG5pbXBvcnQgZGVza3RvcEtpdGNoZW4gZnJvbSBcIi4uL2ltYWdlcy9kZXNrdG9wS2l0Y2hlbi5qcGdcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL3VzZVdpbmRvd1NpemVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEp1bWJvKCkge1xyXG4gIC8vIEhlbHBlciB0byBncmFiIHdpbmRvdyBzaXplXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICBjb25zdCBbbWFpblBob3RvLCBzZXRNYWluUGhvdG9dID0gdXNlU3RhdGUoa2l0Y2hlblBob3RvKTtcclxuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIEdyYWIgYWRtaW4gbG9nZ2VkIGluIHN0YXRlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJyYW5kYWxsLWF1dGhvcml6YXRpb25cIikpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaXplLndpZHRoID4gODUwKSB7XHJcbiAgICAgIHNldE1haW5QaG90byhkZXNrdG9wS2l0Y2hlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNYWluUGhvdG8oa2l0Y2hlblBob3RvKTtcclxuICAgIH1cclxuICB9LCBbc2l6ZS53aWR0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qdW1ib1Ryb259PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JbWFnZX0gc3JjPXttYWluUGhvdG99IGFsdD1cInBhaW50aW5nIHNhbXBsZVwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuanVtYm9Db250ZW50fT5cclxuICAgICAgICA8RWRpdEJ0bi8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuanVtYm9UZXh0fT5cclxuICAgICAgICAgIFByZW1pdW0gY3JhZnRzbWFuc2hpcFxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBDb21wZXRpdGl2ZSB2YWx1ZVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBNYXhpbXVtIHNhdGlzZmFjdGlvblxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmN0YUJ0bn0+R2V0IFF1b3RlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9