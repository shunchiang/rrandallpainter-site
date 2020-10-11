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
        console.log(pair[1], pair[2]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsImlkIiwidG9nZ2xlVGFnIiwidGFnIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZW50cmllcyIsInBhaXIiLCJwdXQiLCJ0aGVuIiwicmVzIiwiZXJyIiwic3R5bGUiLCJGb3JtIiwiQm9keSIsIlRpdGxlIiwiU3RhZ2UiLCJUYWdzIiwibWFwIiwiY29sb3IiLCJ0YWdnZWRJY29uIiwiSW1hZ2VQcmV2aWV3IiwiaW1nIiwiSWQiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBRXBDO0FBRm9DLGtCQUdaQyxzREFBUSxDQUFDLEVBQUQsQ0FISTtBQUFBLE1BRzdCQyxJQUg2QjtBQUFBLE1BR3ZCQyxPQUh1Qjs7QUFBQSxtQkFJdkJGLHNEQUFRLENBQUMsQ0FBQ0QsS0FBSyxDQUFDSSxFQUFQLENBQUQsQ0FKZTtBQUFBLE1BSTdCQSxFQUo2QixrQkFNcEM7OztBQUNBLFdBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQ0E7QUFDSSxRQUFNQyxPQUFPLHFCQUFPTCxJQUFQLENBQWI7O0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNELEdBQUQsQ0FBbkI7QUFDQSxRQUFLQyxPQUFPLENBQUNELEdBQUQsQ0FBUCxLQUFpQixJQUF0QixF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LENBQUNTLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRXJDLEtBQUssQ0FBQ3NDLEdBQWhCO0FBQXFCLE9BQUcsRUFBQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRVYsaUVBQUssQ0FBQ1csRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBc0N2QyxLQUFLLENBQUNJLEVBQTVDLENBRkosQ0FkSixDQUZKLEVBcUJJO0FBQVEsYUFBUyxFQUFFd0IsaUVBQUssQ0FBQ1ksTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSixDQURKLENBREosQ0FESjtBQStCSDs7R0FqRnVCekMsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LmQyZmExMjViM2VmZTNmYWEwZmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3Nhc3MvRWRpdFRhZ3MubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IFRhZ3MgfSBmcm9tIFwiLi4vdXRpbHMvdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFRhZ3MocHJvcHMpIHtcclxuXHJcbiAgICAvLyBTdGF0ZSBEZWNsYXJhdGlvbnNcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZShbcHJvcHMuaWRdKVxyXG5cclxuICAgIC8vIFRvZ2dsaW5nIFRhZ3MgTG9naWNcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhZyh0YWcpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFncyA9IHsuLi50YWdzfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYWdzW3RhZ10pXHJcbiAgICAgICAgaWYgKCBuZXdUYWdzW3RhZ10gPT09IHRydWUgKSBkZWxldGUgbmV3VGFnc1t0YWddO1xyXG4gICAgICAgIGVsc2UgbmV3VGFnc1t0YWddID0gdHJ1ZTtcclxuICAgICAgICBzZXRUYWdzKG5ld1RhZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RhZ3MpXHJcbiAgICAgICAgY29uc29sZS5sb2codGFncyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJtaXQoZSlcclxuICAgIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkc1wiLCBpZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGFnc1wiLCBKU09OLnN0cmluZ2lmeSh0YWdzKSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFpclsxXSwgcGFpclsyXSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgICAucHV0XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3RhZ3MvdXBkYXRlXCIsXHJcbiAgICAgICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuXHJcbiAgICAgICAgKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlLkZvcm19IG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlRpdGxlfT5FZGl0aW5nIFRhZ3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuU3RhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWdzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtUYWdzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gdG9nZ2xlVGFnKGUpfSBzdHlsZT17e2NvbG9yOiB0YWdzW2VdID8gXCJncmVlblwiIDogXCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtzdHlsZS50YWdnZWRJY29ufSBmYXMgZmEtdGFnYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JbWFnZVByZXZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PVwicHJldmlld1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JZH0+cHVibGljX2lkOiB7cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5CdXR0b259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=