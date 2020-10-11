webpackHotUpdate_N_E("pages/gallery",{

/***/ "./components/Modal_EditTags.js":
/*!**************************************!*\
  !*** ./components/Modal_EditTags.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditTags; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/EditTags.module.scss */ "./sass/EditTags.module.scss");
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/tags */ "./utils/tags.js");


var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\components\\Modal_EditTags.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function EditTags(props) {
  _s();

  var _this = this;

  // State Declarations
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tags = _useState[0],
      setTags = _useState[1]; // Toggling Tags Logic


  function toggleTag(tag) {
    var newTags = tags;
    if (newTags[tag] === true) newTags[tag] = false;else newTags[tag] = true;
    setTags(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newTags));
    console.log(newTags);
  }

  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    withCredentials: true
  });

  function onSubmit(e) {// axiosInstance
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Form,
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, _utils_tags__WEBPACK_IMPORTED_MODULE_4__["Tags"].map(function (e) {
    return __jsx("li", {
      onClick: function onClick() {
        return toggleTag(e);
      },
      style: {
        color: tags[e] ? "green" : "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "".concat(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taggedIcon, " fas fa-tag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 41
      }
    }), e));
  }))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "Confirm"))));
}

_s(EditTags, "DL0uTSUGlGEljgppeJDEmbue1U0=");

_c = EditTags;

var _c;

$RefreshReg$(_c, "EditTags");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsInRvZ2dsZVRhZyIsInRhZyIsIm5ld1RhZ3MiLCJjb25zb2xlIiwibG9nIiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwid2l0aENyZWRlbnRpYWxzIiwib25TdWJtaXQiLCJlIiwic3R5bGUiLCJGb3JtIiwiQm9keSIsIlRpdGxlIiwiU3RhZ2UiLCJUYWdzIiwibWFwIiwiY29sb3IiLCJ0YWdnZWRJY29uIiwiSW1hZ2VQcmV2aWV3IiwiaW1nIiwiSWQiLCJpZCIsIkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBRXBDO0FBRm9DLGtCQUdaQyxzREFBUSxDQUFDLEVBQUQsQ0FISTtBQUFBLE1BRzdCQyxJQUg2QjtBQUFBLE1BR3ZCQyxPQUh1QixpQkFLcEM7OztBQUNBLFdBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQ0E7QUFDSSxRQUFJQyxPQUFPLEdBQUdKLElBQWQ7QUFDQSxRQUFLSSxPQUFPLENBQUNELEdBQUQsQ0FBUCxLQUFpQixJQUF0QixFQUE2QkMsT0FBTyxDQUFDRCxHQUFELENBQVAsR0FBZSxLQUFmLENBQTdCLEtBQ0tDLE9BQU8sQ0FBQ0QsR0FBRCxDQUFQLEdBQWUsSUFBZjtBQUNMRixXQUFPLENBQUMsNkZBQUlHLE9BQUwsRUFBUDtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNIOztBQUVELE1BQU1HLGFBQWEsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQy9CQyxtQkFBZSxFQUFFO0FBRGMsR0FBYixDQUF0Qjs7QUFJQSxXQUFTQyxRQUFULENBQWtCQyxDQUFsQixFQUNBLENBQ0k7QUFDSDs7QUFFRCxTQUNJLG1FQUNJO0FBQU0sYUFBUyxFQUFFQyxpRUFBSyxDQUFDQyxJQUF2QjtBQUE2QixZQUFRLEVBQUVILFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUUsaUVBQUssQ0FBQ0UsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRixpRUFBSyxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVILGlFQUFLLENBQUNJLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUosaUVBQUssQ0FBQ0ssSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsZ0RBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNQLENBQUQ7QUFBQSxXQUNOO0FBQUksYUFBTyxFQUFFO0FBQUEsZUFBTVYsU0FBUyxDQUFDVSxDQUFELENBQWY7QUFBQSxPQUFiO0FBQWlDLFdBQUssRUFBRTtBQUFDUSxhQUFLLEVBQUVwQixJQUFJLENBQUNZLENBQUQsQ0FBSixHQUFVLE9BQVYsR0FBb0I7QUFBNUIsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsWUFBS0MsaUVBQUssQ0FBQ1EsVUFBWCxnQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFS1QsQ0FGTCxDQURBLENBRE07QUFBQSxHQUFULENBREwsQ0FGSixDQURKLEVBY0k7QUFBSyxhQUFTLEVBQUVDLGlFQUFLLENBQUNTLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRXhCLEtBQUssQ0FBQ3lCLEdBQWhCO0FBQXFCLE9BQUcsRUFBQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRVYsaUVBQUssQ0FBQ1csRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBc0MxQixLQUFLLENBQUMyQixFQUE1QyxDQUZKLENBZEosQ0FGSixFQXFCSTtBQUFRLGFBQVMsRUFBRVosaUVBQUssQ0FBQ2EsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSixDQURKLENBREosQ0FESjtBQStCSDs7R0F2RHVCN0IsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LjI5MzZhYjczMzRkY2M1NTZmMjZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0VkaXRUYWdzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBUYWdzIH0gZnJvbSBcIi4uL3V0aWxzL3RhZ3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRUYWdzKHByb3BzKSB7XHJcblxyXG4gICAgLy8gU3RhdGUgRGVjbGFyYXRpb25zXHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gVG9nZ2xpbmcgVGFncyBMb2dpY1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZylcclxuICAgIHtcclxuICAgICAgICBsZXQgbmV3VGFncyA9IHRhZ3M7XHJcbiAgICAgICAgaWYgKCBuZXdUYWdzW3RhZ10gPT09IHRydWUgKSBuZXdUYWdzW3RhZ10gPSBmYWxzZTtcclxuICAgICAgICBlbHNlIG5ld1RhZ3NbdGFnXSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGFncyhbLi4ubmV3VGFnc10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RhZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJtaXQoZSlcclxuICAgIHtcclxuICAgICAgICAvLyBheGlvc0luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlLkZvcm19IG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlRpdGxlfT5FZGl0aW5nIFRhZ3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuU3RhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWdzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtUYWdzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gdG9nZ2xlVGFnKGUpfSBzdHlsZT17e2NvbG9yOiB0YWdzW2VdID8gXCJncmVlblwiIDogXCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtzdHlsZS50YWdnZWRJY29ufSBmYXMgZmEtdGFnYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JbWFnZVByZXZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PVwicHJldmlld1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JZH0+cHVibGljX2lkOiB7cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5CdXR0b259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=