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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/EditTags.module.scss */ "./sass/EditTags.module.scss");
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tags */ "./utils/tags.js");
var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\components\\Modal_EditTags.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function EditTags(props) {
  _s();

  var _this = this;

  // State Declarations
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    "Residential": false,
    "Commercial": false,
    "Interior": false,
    "Exterior": false,
    "Cabinets": false
  }),
      tags = _useState[0],
      setTags = _useState[1]; // Toggling Tags Logic


  function toggleTag(tag) {
    var newTags = tags;
    if (newTags[tag] === true) newTags[tag] = false;else newTags[tag] = true;
    setTags(newTags);
  }

  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    withCredentials: true
  });

  function onSubmit(e) {// axiosInstance
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Form,
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, _utils_tags__WEBPACK_IMPORTED_MODULE_3__["Tags"].map(function (e) {
    return __jsx("li", {
      onClick: toggleTag(e),
      style: {
        color: tags[e] ? "green" : "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "".concat(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.taggedIcon, " fas fa-tag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 41
      }
    }), "e"));
  }))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Confirm"))));
}

_s(EditTags, "RioOVpOKSdueTew+cim9G9f3PVc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsInRvZ2dsZVRhZyIsInRhZyIsIm5ld1RhZ3MiLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvblN1Ym1pdCIsImUiLCJzdHlsZSIsIkZvcm0iLCJCb2R5IiwiVGl0bGUiLCJTdGFnZSIsIlRhZ3MiLCJtYXAiLCJjb2xvciIsInRhZ2dlZEljb24iLCJJbWFnZVByZXZpZXciLCJpbWciLCJJZCIsImlkIiwiQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFFcEM7QUFGb0Msa0JBR1pDLHNEQUFRLENBQzVCO0FBQ0ksbUJBQWdCLEtBRHBCO0FBRUksa0JBQWUsS0FGbkI7QUFHSSxnQkFBYSxLQUhqQjtBQUlJLGdCQUFhLEtBSmpCO0FBS0ksZ0JBQWE7QUFMakIsR0FENEIsQ0FISTtBQUFBLE1BRzdCQyxJQUg2QjtBQUFBLE1BR3ZCQyxPQUh1QixpQkFhcEM7OztBQUNBLFdBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQ0E7QUFDSSxRQUFJQyxPQUFPLEdBQUdKLElBQWQ7QUFDQSxRQUFLSSxPQUFPLENBQUNELEdBQUQsQ0FBUCxLQUFpQixJQUF0QixFQUE2QkMsT0FBTyxDQUFDRCxHQUFELENBQVAsR0FBZSxLQUFmLENBQTdCLEtBQ0tDLE9BQU8sQ0FBQ0QsR0FBRCxDQUFQLEdBQWUsSUFBZjtBQUNMRixXQUFPLENBQUNHLE9BQUQsQ0FBUDtBQUNIOztBQUVELE1BQU1DLGFBQWEsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQy9CQyxtQkFBZSxFQUFFO0FBRGMsR0FBYixDQUF0Qjs7QUFJQSxXQUFTQyxRQUFULENBQWtCQyxDQUFsQixFQUNBLENBQ0k7QUFDSDs7QUFFRCxTQUNJLG1FQUNJO0FBQU0sYUFBUyxFQUFFQyxpRUFBSyxDQUFDQyxJQUF2QjtBQUE2QixZQUFRLEVBQUVILFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUUsaUVBQUssQ0FBQ0UsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFFRixpRUFBSyxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUVILGlFQUFLLENBQUNJLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUosaUVBQUssQ0FBQ0ssSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsZ0RBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNQLENBQUQ7QUFBQSxXQUNOO0FBQUksYUFBTyxFQUFFUixTQUFTLENBQUNRLENBQUQsQ0FBdEI7QUFBMkIsV0FBSyxFQUFFO0FBQUNRLGFBQUssRUFBRWxCLElBQUksQ0FBQ1UsQ0FBRCxDQUFKLEdBQVUsT0FBVixHQUFvQjtBQUE1QixPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsZUFBUyxZQUFLQyxpRUFBSyxDQUFDUSxVQUFYLGdCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixNQURBLENBRE07QUFBQSxHQUFULENBREwsQ0FGSixDQURKLEVBY0k7QUFBSyxhQUFTLEVBQUVSLGlFQUFLLENBQUNTLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRXRCLEtBQUssQ0FBQ3VCLEdBQWhCO0FBQXFCLE9BQUcsRUFBQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRVYsaUVBQUssQ0FBQ1csRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBc0N4QixLQUFLLENBQUN5QixFQUE1QyxDQUZKLENBZEosQ0FISixFQXNCSTtBQUFRLGFBQVMsRUFBRVosaUVBQUssQ0FBQ2EsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCSixDQURKLENBREosQ0FESjtBQWdDSDs7R0EvRHVCM0IsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LjM4NzU2OTkyNTRiYjZmYzI3ZWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0VkaXRUYWdzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBUYWdzIH0gZnJvbSBcIi4uL3V0aWxzL3RhZ3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRUYWdzKHByb3BzKSB7XHJcblxyXG4gICAgLy8gU3RhdGUgRGVjbGFyYXRpb25zXHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiUmVzaWRlbnRpYWxcIiA6IGZhbHNlLFxyXG4gICAgICAgICAgICBcIkNvbW1lcmNpYWxcIiA6IGZhbHNlLFxyXG4gICAgICAgICAgICBcIkludGVyaW9yXCIgOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJFeHRlcmlvclwiIDogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiQ2FiaW5ldHNcIiA6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gVG9nZ2xpbmcgVGFncyBMb2dpY1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZylcclxuICAgIHtcclxuICAgICAgICBsZXQgbmV3VGFncyA9IHRhZ3M7XHJcbiAgICAgICAgaWYgKCBuZXdUYWdzW3RhZ10gPT09IHRydWUgKSBuZXdUYWdzW3RhZ10gPSBmYWxzZTtcclxuICAgICAgICBlbHNlIG5ld1RhZ3NbdGFnXSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGFncyhuZXdUYWdzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Ym1pdChlKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGF4aW9zSW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGUuRm9ybX0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Cb2R5fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5UaXRsZX0+RWRpdGluZyBUYWdzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlN0YWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7VGFncy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RvZ2dsZVRhZyhlKX0gc3R5bGU9e3tjb2xvcjogdGFnc1tlXSA/IFwiZ3JlZW5cIiA6IFwid2hpdGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c3R5bGUudGFnZ2VkSWNvbn0gZmFzIGZhLXRhZ2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkltYWdlUHJldmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1nfSBhbHQ9XCJwcmV2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLklkfT5wdWJsaWNfaWQ6IHtwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLkJ1dHRvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==