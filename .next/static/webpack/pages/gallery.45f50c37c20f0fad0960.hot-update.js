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
      setTags = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _utils_tags__WEBPACK_IMPORTED_MODULE_4__["Tags"].map(function (e) {
      var newTags = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tags);

      newTags.push(e);
      newTags[e] = false;
      setTags(newTags);
    });
  }, []); // Toggling Tags Logic

  function toggleTag(tag) {
    var newTags = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tags);

    if (newTags[tag] === true) newTags[tag] = false;else newTags[tag] = true;
    setTags(newTags);
    console.log(newTags);
    console.log(tags);
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
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
        lineNumber: 51,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "".concat(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taggedIcon, " fas fa-tag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 41
      }
    }), e));
  }))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Confirm"))));
}

_s(EditTags, "g5h7oh6X9PwWerPTX5XJRel8tuQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsInVzZUVmZmVjdCIsIlRhZ3MiLCJtYXAiLCJlIiwibmV3VGFncyIsInB1c2giLCJ0b2dnbGVUYWciLCJ0YWciLCJjb25zb2xlIiwibG9nIiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwid2l0aENyZWRlbnRpYWxzIiwib25TdWJtaXQiLCJzdHlsZSIsIkZvcm0iLCJCb2R5IiwiVGl0bGUiLCJTdGFnZSIsImNvbG9yIiwidGFnZ2VkSWNvbiIsIkltYWdlUHJldmlldyIsImltZyIsIklkIiwiaWQiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUVwQztBQUZvQyxrQkFHWkMsc0RBQVEsQ0FBQyxFQUFELENBSEk7QUFBQSxNQUc3QkMsSUFINkI7QUFBQSxNQUd2QkMsT0FIdUI7O0FBS3BDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsb0RBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBTztBQUNoQixVQUFNQyxPQUFPLEdBQUcsNkZBQUlOLElBQVAsQ0FBYjs7QUFDQU0sYUFBTyxDQUFDQyxJQUFSLENBQWFGLENBQWI7QUFDQUMsYUFBTyxDQUFDRCxDQUFELENBQVAsR0FBYSxLQUFiO0FBQ0FKLGFBQU8sQ0FBQ0ssT0FBRCxDQUFQO0FBQ0MsS0FMRDtBQU1ILEdBUFEsRUFPUCxFQVBPLENBQVQsQ0FMb0MsQ0FjcEM7O0FBQ0EsV0FBU0UsU0FBVCxDQUFtQkMsR0FBbkIsRUFDQTtBQUNJLFFBQU1ILE9BQU8sR0FBRyw2RkFBSU4sSUFBUCxDQUFiOztBQUNBLFFBQUtNLE9BQU8sQ0FBQ0csR0FBRCxDQUFQLEtBQWlCLElBQXRCLEVBQTZCSCxPQUFPLENBQUNHLEdBQUQsQ0FBUCxHQUFlLEtBQWYsQ0FBN0IsS0FDS0gsT0FBTyxDQUFDRyxHQUFELENBQVAsR0FBZSxJQUFmO0FBQ0xSLFdBQU8sQ0FBQ0ssT0FBRCxDQUFQO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxPQUFaO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxJQUFaO0FBQ0g7O0FBRUQsTUFBTVksYUFBYSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDL0JDLG1CQUFlLEVBQUU7QUFEYyxHQUFiLENBQXRCOztBQUlBLFdBQVNDLFFBQVQsQ0FBa0JYLENBQWxCLEVBQ0EsQ0FDSTtBQUNIOztBQUVELFNBQ0ksbUVBQ0k7QUFBTSxhQUFTLEVBQUVZLGlFQUFLLENBQUNDLElBQXZCO0FBQTZCLFlBQVEsRUFBRUYsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQyxpRUFBSyxDQUFDRSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVGLGlFQUFLLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFLLGFBQVMsRUFBRUgsaUVBQUssQ0FBQ0ksS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSixpRUFBSyxDQUFDZCxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxnREFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQ0MsQ0FBRDtBQUFBLFdBQ047QUFBSSxhQUFPLEVBQUU7QUFBQSxlQUFNRyxTQUFTLENBQUNILENBQUQsQ0FBZjtBQUFBLE9BQWI7QUFBaUMsV0FBSyxFQUFFO0FBQUNpQixhQUFLLEVBQUV0QixJQUFJLENBQUNLLENBQUQsQ0FBSixHQUFVLE9BQVYsR0FBb0I7QUFBNUIsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsWUFBS1ksaUVBQUssQ0FBQ00sVUFBWCxnQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFS2xCLENBRkwsQ0FEQSxDQURNO0FBQUEsR0FBVCxDQURMLENBRkosQ0FESixFQWNJO0FBQUssYUFBUyxFQUFFWSxpRUFBSyxDQUFDTyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUUxQixLQUFLLENBQUMyQixHQUFoQjtBQUFxQixPQUFHLEVBQUMsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVSLGlFQUFLLENBQUNTLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXNDNUIsS0FBSyxDQUFDNkIsRUFBNUMsQ0FGSixDQWRKLENBRkosRUFxQkk7QUFBUSxhQUFTLEVBQUVWLGlFQUFLLENBQUNXLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkosQ0FESixDQURKLENBREo7QUErQkg7O0dBakV1Qi9CLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS40NWY1MGMzN2MyMGYwZmFkMDk2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0VkaXRUYWdzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBUYWdzIH0gZnJvbSBcIi4uL3V0aWxzL3RhZ3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRUYWdzKHByb3BzKSB7XHJcblxyXG4gICAgLy8gU3RhdGUgRGVjbGFyYXRpb25zXHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBUYWdzLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1RhZ3MgPSBbLi4udGFnc107XHJcbiAgICAgICAgbmV3VGFncy5wdXNoKGUpXHJcbiAgICAgICAgbmV3VGFnc1tlXSA9IGZhbHNlO1xyXG4gICAgICAgIHNldFRhZ3MobmV3VGFncyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgLy8gVG9nZ2xpbmcgVGFncyBMb2dpY1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBuZXdUYWdzID0gWy4uLnRhZ3NdO1xyXG4gICAgICAgIGlmICggbmV3VGFnc1t0YWddID09PSB0cnVlICkgbmV3VGFnc1t0YWddID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBuZXdUYWdzW3RhZ10gPSB0cnVlO1xyXG4gICAgICAgIHNldFRhZ3MobmV3VGFncyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFncylcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWdzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Ym1pdChlKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGF4aW9zSW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGUuRm9ybX0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Cb2R5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVGl0bGV9PkVkaXRpbmcgVGFnczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5TdGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5UYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1RhZ3MubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUYWcoZSl9IHN0eWxlPXt7Y29sb3I6IHRhZ3NbZV0gPyBcImdyZWVuXCIgOiBcIndoaXRlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3N0eWxlLnRhZ2dlZEljb259IGZhcyBmYS10YWdgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkltYWdlUHJldmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1nfSBhbHQ9XCJwcmV2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLklkfT5wdWJsaWNfaWQ6IHtwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLkJ1dHRvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==