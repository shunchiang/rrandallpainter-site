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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function EditTags(props) {
  _s();

  var _this = this;

  // State Declarations
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      tags = _useState[0],
      setTags = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([props.id]),
      id = _useState2[0]; // Toggling Tags Logic


  function toggleTag(tag) {
    var newTags = _objectSpread({}, tags);

    console.log(newTags[tag]);
    if (newTags[tag] === true) delete newTags[tag];else newTags[tag] = true;
    setTags(newTags);
    console.log(newTags);
    console.log(tags);
  }

  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    withCredentials: true
  });

  function onSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    console.log(id);
    formData.append("ids", JSON.stringify(id));
    formData.append("tags", JSON.stringify(tags));

    var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pair = _step.value;
        console.log(pair[1]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    axiosInstance.put("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags/update", formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.log(err);
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Form,
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, _utils_tags__WEBPACK_IMPORTED_MODULE_4__["Tags"].map(function (e) {
    return __jsx("li", {
      onClick: function onClick() {
        return toggleTag(e);
      },
      style: {
        color: tags[e] ? "lightGreen" : "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "".concat(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taggedIcon, " fas fa-tag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 41
      }
    }), e));
  }))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "Confirm"))));
}

_s(EditTags, "xR/5T5+dGzRtj2DJm2MdL1pnj54=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsImlkIiwidG9nZ2xlVGFnIiwidGFnIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZW50cmllcyIsInBhaXIiLCJwdXQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImVyciIsInN0eWxlIiwiRm9ybSIsIkJvZHkiLCJUaXRsZSIsIlN0YWdlIiwiVGFncyIsIm1hcCIsImNvbG9yIiwidGFnZ2VkSWNvbiIsIkltYWdlUHJldmlldyIsImltZyIsIklkIiwiQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUVwQztBQUZvQyxrQkFHWkMsc0RBQVEsQ0FBQyxFQUFELENBSEk7QUFBQSxNQUc3QkMsSUFINkI7QUFBQSxNQUd2QkMsT0FIdUI7O0FBQUEsbUJBSXZCRixzREFBUSxDQUFDLENBQUNELEtBQUssQ0FBQ0ksRUFBUCxDQUFELENBSmU7QUFBQSxNQUk3QkEsRUFKNkIsa0JBTXBDOzs7QUFDQSxXQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUNBO0FBQ0ksUUFBTUMsT0FBTyxxQkFBT0wsSUFBUCxDQUFiOztBQUNBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBTyxDQUFDRCxHQUFELENBQW5CO0FBQ0EsUUFBS0MsT0FBTyxDQUFDRCxHQUFELENBQVAsS0FB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Q0FEQSxDQURNO0FBQUEsR0FBVCxDQURMLENBRkosQ0FESixFQWNJO0FBQUssYUFBUyxFQUFFYyxpRUFBSyxDQUFDUyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUV0QyxLQUFLLENBQUN1QyxHQUFoQjtBQUFxQixPQUFHLEVBQUMsU0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVWLGlFQUFLLENBQUNXLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXNDeEMsS0FBSyxDQUFDSSxFQUE1QyxDQUZKLENBZEosQ0FGSixFQXFCSTtBQUFRLGFBQVMsRUFBRXlCLGlFQUFLLENBQUNZLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkosQ0FESixDQURKLENBREo7QUErQkg7O0dBdEZ1QjFDLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS5mM2Q1YTFhNDBlOWEyYmIyMjI5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0VkaXRUYWdzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBUYWdzIH0gZnJvbSBcIi4uL3V0aWxzL3RhZ3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRUYWdzKHByb3BzKSB7XHJcblxyXG4gICAgLy8gU3RhdGUgRGVjbGFyYXRpb25zXHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoW3Byb3BzLmlkXSlcclxuXHJcbiAgICAvLyBUb2dnbGluZyBUYWdzIExvZ2ljXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVUYWcodGFnKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG5ld1RhZ3MgPSB7Li4udGFnc307XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFnc1t0YWddKVxyXG4gICAgICAgIGlmICggbmV3VGFnc1t0YWddID09PSB0cnVlICkgZGVsZXRlIG5ld1RhZ3NbdGFnXTtcclxuICAgICAgICBlbHNlIG5ld1RhZ3NbdGFnXSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGFncyhuZXdUYWdzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYWdzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3VibWl0KGUpXHJcbiAgICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZHNcIiwgSlNPTi5zdHJpbmdpZnkoaWQpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWdzXCIsIEpTT04uc3RyaW5naWZ5KHRhZ3MpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWlyWzFdKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAgIC5wdXRcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdGFncy91cGRhdGVcIixcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW5cclxuICAgICAgICAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGUuRm9ybX0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Cb2R5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVGl0bGV9PkVkaXRpbmcgVGFnczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5TdGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5UYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1RhZ3MubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUYWcoZSl9IHN0eWxlPXt7Y29sb3I6IHRhZ3NbZV0gPyBcImxpZ2h0R3JlZW5cIiA6IFwid2hpdGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c3R5bGUudGFnZ2VkSWNvbn0gZmFzIGZhLXRhZ2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuSW1hZ2VQcmV2aWV3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWd9IGFsdD1cInByZXZpZXdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuSWR9PnB1YmxpY19pZDoge3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuQnV0dG9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9