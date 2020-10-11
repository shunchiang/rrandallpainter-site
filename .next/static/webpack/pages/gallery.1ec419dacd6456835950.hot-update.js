webpackHotUpdate_N_E("pages/gallery",{

/***/ "./utils/modalStyles.js":
/*!******************************!*\
  !*** ./utils/modalStyles.js ***!
  \******************************/
/*! exports provided: photoModalStyle, uploadModalStyle, tagsModalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoModalStyle", function() { return photoModalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadModalStyle", function() { return uploadModalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagsModalStyle", function() { return tagsModalStyle; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useWindowSize */ "./utils/useWindowSize.js");


var _content;


var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_1__["default"])();
var photoModalStyle = {
  content: {
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    bottom: 0,
    right: 0,
    transform: "translate(-50%,-50%)",
    padding: 0,
    border: "none",
    overflow: "hidden",
    backgroundColor: "transparent",
    borderColor: "transparent",
    pointerEvents: "none"
  },
  overlay: {
    zIndex: 5,
    backgroundColor: "rgba(255, 255, 255, 0.37)"
  }
};
var uploadModalStyle = {
  content: (_content = {
    width: "95%",
    position: "absolute",
    bottom: "0",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, "bottom", "auto"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, "backgroundColor", "#3a3a3a"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, "borderRadius", "0"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, "borderColor", "transparent"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_content, "maxHeight", "80vh"), _content),
  overlay: {
    zIndex: 5,
    backgroundColor: "rgba(255, 255, 255, 0.37)"
  }
};
var tagsModalStyle = {
  content: {
    width: size.width < 600 ? "95%" : "60%",
    height: "80%",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    bottom: 0,
    right: 0,
    backgroundColor: "#3a3a3a",
    transform: "translate(-50%,-50%)",
    padding: "0.5em",
    border: "none",
    boxSizing: "border-box"
  },
  overlay: {
    zIndex: 5,
    backgroundColor: "rgba(255, 255, 255, 0.37)"
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbW9kYWxTdHlsZXMuanMiXSwibmFtZXMiOlsic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJwaG90b01vZGFsU3R5bGUiLCJjb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nIiwiYm9yZGVyIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsInBvaW50ZXJFdmVudHMiLCJvdmVybGF5IiwiekluZGV4IiwidXBsb2FkTW9kYWxTdHlsZSIsInBvc2l0aW9uIiwidGFnc01vZGFsU3R5bGUiLCJib3hTaXppbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG9FQUFhLEVBQTFCO0FBRU8sSUFBTUMsZUFBZSxHQUM1QjtBQUNJQyxTQUFPLEVBQUU7QUFDTEMsU0FBSyxFQUFFLE1BREY7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsT0FBRyxFQUFFLEtBSEE7QUFJTEMsUUFBSSxFQUFFLEtBSkQ7QUFLTEMsVUFBTSxFQUFFLENBTEg7QUFNTEMsU0FBSyxFQUFFLENBTkY7QUFPTEMsYUFBUyxFQUFFLHNCQVBOO0FBUUxDLFdBQU8sRUFBRSxDQVJKO0FBU0xDLFVBQU0sRUFBRSxNQVRIO0FBVUxDLFlBQVEsRUFBRSxRQVZMO0FBV0xDLG1CQUFlLEVBQUUsYUFYWjtBQVlMQyxlQUFXLEVBQUUsYUFaUjtBQWFMQyxpQkFBYSxFQUFFO0FBYlYsR0FEYjtBQWdCSUMsU0FBTyxFQUFFO0FBQ0xDLFVBQU0sRUFBRSxDQURIO0FBRUxKLG1CQUFlLEVBQUU7QUFGWjtBQWhCYixDQURPO0FBdUJBLElBQU1LLGdCQUFnQixHQUM3QjtBQUNJaEIsU0FBTztBQUNIQyxTQUFLLEVBQUUsS0FESjtBQUVIZ0IsWUFBUSxFQUFFLFVBRlA7QUFHSFosVUFBTSxFQUFFLEdBSEw7QUFJSEYsT0FBRyxFQUFFLEtBSkY7QUFLSEMsUUFBSSxFQUFFLEtBTEg7QUFNSEcsYUFBUyxFQUFFLHVCQU5SO0FBT0hHLFlBQVEsRUFBRTtBQVBQLG1IQVFLLE1BUkwsMEhBU2MsU0FUZCx1SEFVVyxHQVZYLHNIQVdVLGFBWFYsb0hBWVEsTUFaUixZQURYO0FBZUlJLFNBQU8sRUFBRTtBQUNMQyxVQUFNLEVBQUUsQ0FESDtBQUVMSixtQkFBZSxFQUFFO0FBRlo7QUFmYixDQURPO0FBc0JBLElBQU1PLGNBQWMsR0FDM0I7QUFDSWxCLFNBQU8sRUFBRTtBQUNMQyxTQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBTCxHQUFhLEdBQWIsR0FBbUIsS0FBbkIsR0FBMkIsS0FEN0I7QUFFTEMsVUFBTSxFQUFFLEtBRkg7QUFHTEMsT0FBRyxFQUFFLEtBSEE7QUFJTEMsUUFBSSxFQUFFLEtBSkQ7QUFLTE0sWUFBUSxFQUFFLFFBTEw7QUFNTEwsVUFBTSxFQUFFLENBTkg7QUFPTEMsU0FBSyxFQUFFLENBUEY7QUFRTEssbUJBQWUsRUFBRSxTQVJaO0FBU0xKLGFBQVMsRUFBRSxzQkFUTjtBQVVMQyxXQUFPLEVBQUUsT0FWSjtBQVdMQyxVQUFNLEVBQUUsTUFYSDtBQVlMVSxhQUFTLEVBQUU7QUFaTixHQURiO0FBZUlMLFNBQU8sRUFBRTtBQUNMQyxVQUFNLEVBQUUsQ0FESDtBQUVMSixtQkFBZSxFQUFFO0FBRlo7QUFmYixDQURPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuMWVjNDE5ZGFjZDY0NTY4MzU5NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91dGlscy91c2VXaW5kb3dTaXplXCI7XHJcblxyXG5jb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvTW9kYWxTdHlsZSA9IFxyXG57XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwtNTAlKVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXHJcbiAgICB9LFxyXG4gICAgb3ZlcmxheToge1xyXG4gICAgICAgIHpJbmRleDogNSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KVwiLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRNb2RhbFN0eWxlID0gXHJcbntcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICBib3R0b206IFwiYXV0b1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2EzYTNhXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIG1heEhlaWdodDogXCI4MHZoXCIsXHJcbiAgICB9LFxyXG4gICAgb3ZlcmxheToge1xyXG4gICAgICAgIHpJbmRleDogNSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KVwiLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0YWdzTW9kYWxTdHlsZSA9IFxyXG57XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgd2lkdGg6IHNpemUud2lkdGggPCA2MDAgPyBcIjk1JVwiIDogXCI2MCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2EzYTNhXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLC01MCUpXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwLjVlbVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxufSxcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICB6SW5kZXg6IDUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNylcIlxyXG59XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9