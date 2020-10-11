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
    formData.append("ids", id);
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

    axiosInstance.put("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags/update", formData).then(function (res) {
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
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
        lineNumber: 67,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "".concat(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taggedIcon, " fas fa-tag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 41
      }
    }), e));
  }))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsImlkIiwidG9nZ2xlVGFnIiwidGFnIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZW50cmllcyIsInBhaXIiLCJwdXQiLCJ0aGVuIiwicmVzIiwiZXJyIiwic3R5bGUiLCJGb3JtIiwiQm9keSIsIlRpdGxlIiwiU3RhZ2UiLCJUYWdzIiwibWFwIiwiY29sb3IiLCJ0YWdnZWRJY29uIiwiSW1hZ2VQcmV2aWV3IiwiaW1nIiwiSWQiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBRXBDO0FBRm9DLGtCQUdaQyxzREFBUSxDQUFDLEVBQUQsQ0FISTtBQUFBLE1BRzdCQyxJQUg2QjtBQUFBLE1BR3ZCQyxPQUh1Qjs7QUFBQSxtQkFJdkJGLHNEQUFRLENBQUMsQ0FBQ0QsS0FBSyxDQUFDSSxFQUFQLENBQUQsQ0FKZTtBQUFBLE1BSTdCQSxFQUo2QixrQkFNcEM7OztBQUNBLFdBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQ0E7QUFDSSxRQUFNQyxPQUFPLHFCQUFPTCxJQUFQLENBQWI7O0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNELEdBQUQsQ0FBbkI7QUFDQSxRQUFLQyxPQUFPLENBQUNELEdBQUQsQ0FBUCxLQUFpQixJQUF0QixF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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFckMsS0FBSyxDQUFDc0MsR0FBaEI7QUFBcUIsT0FBRyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFVixpRUFBSyxDQUFDVyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFzQ3ZDLEtBQUssQ0FBQ0ksRUFBNUMsQ0FGSixDQWRKLENBRkosRUFxQkk7QUFBUSxhQUFTLEVBQUV3QixpRUFBSyxDQUFDWSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJKLENBREosQ0FESixDQURKO0FBK0JIOztHQWpGdUJ6QyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuOTkwMWJkY2RmYzcwMzFiYTljYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc2Fzcy9FZGl0VGFncy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgVGFncyB9IGZyb20gXCIuLi91dGlscy90YWdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VGFncyhwcm9wcykge1xyXG5cclxuICAgIC8vIFN0YXRlIERlY2xhcmF0aW9uc1xyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKFtwcm9wcy5pZF0pXHJcblxyXG4gICAgLy8gVG9nZ2xpbmcgVGFncyBMb2dpY1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBuZXdUYWdzID0gey4uLnRhZ3N9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RhZ3NbdGFnXSlcclxuICAgICAgICBpZiAoIG5ld1RhZ3NbdGFnXSA9PT0gdHJ1ZSApIGRlbGV0ZSBuZXdUYWdzW3RhZ107XHJcbiAgICAgICAgZWxzZSBuZXdUYWdzW3RhZ10gPSB0cnVlO1xyXG4gICAgICAgIHNldFRhZ3MobmV3VGFncyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFncylcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWdzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Ym1pdChlKVxyXG4gICAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRzXCIsIGlkKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWdzXCIsIEpTT04uc3RyaW5naWZ5KHRhZ3MpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWlyWzFdKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAgIC5wdXRcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdGFncy91cGRhdGVcIixcclxuICAgICAgICAgICAgZm9ybURhdGFcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW5cclxuICAgICAgICAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGUuRm9ybX0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Cb2R5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVGl0bGV9PkVkaXRpbmcgVGFnczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5TdGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5UYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1RhZ3MubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUYWcoZSl9IHN0eWxlPXt7Y29sb3I6IHRhZ3NbZV0gPyBcImdyZWVuXCIgOiBcIndoaXRlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3N0eWxlLnRhZ2dlZEljb259IGZhcyBmYS10YWdgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkltYWdlUHJldmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1nfSBhbHQ9XCJwcmV2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLklkfT5wdWJsaWNfaWQ6IHtwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLkJ1dHRvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==