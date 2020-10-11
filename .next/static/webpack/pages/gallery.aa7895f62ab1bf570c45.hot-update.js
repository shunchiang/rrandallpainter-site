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

  var id = [props.id]; // Toggling Tags Logic

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
    formData.append("tags", JSON.stringify(Object.keys(tags), null, 2));

    var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pair = _step.value;
        console.log(pair[0], pair[1]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    console.log(json);
    axiosInstance.put("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags/update", json, {
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
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
        lineNumber: 78,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "".concat(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taggedIcon, " fas fa-tag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 41
      }
    }), e));
  }))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Confirm"))));
}

_s(EditTags, "SqeAwu5IG00eqv0RQXDovgq+Ghk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsImlkIiwidG9nZ2xlVGFnIiwidGFnIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJwYWlyIiwib2JqZWN0IiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwianNvbiIsInB1dCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZXJyIiwic3R5bGUiLCJGb3JtIiwiQm9keSIsIlRpdGxlIiwiU3RhZ2UiLCJUYWdzIiwibWFwIiwiY29sb3IiLCJ0YWdnZWRJY29uIiwiSW1hZ2VQcmV2aWV3IiwiaW1nIiwiSWQiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBRXBDO0FBRm9DLGtCQUdaQyxzREFBUSxDQUFDLEVBQUQsQ0FISTtBQUFBLE1BRzdCQyxJQUg2QjtBQUFBLE1BR3ZCQyxPQUh1Qjs7QUFJcEMsTUFBTUMsRUFBRSxHQUFHLENBQUNKLEtBQUssQ0FBQ0ksRUFBUCxDQUFYLENBSm9DLENBTXBDOztBQUNBLFdBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQ0E7QUFDSSxRQUFNQyxPQUFPLHFCQUFPTCxJQUFQLENBQWI7O0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNELEdBQUQsQ0FBbkI7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QUFBSSxhQUFPLEVBQUU7QUFBQSxlQUFNVixTQUFTLENBQUNVLENBQUQsQ0FBZjtBQUFBLE9BQWI7QUFBaUMsV0FBSyxFQUFFO0FBQUM0QixhQUFLLEVBQUV6QyxJQUFJLENBQUNhLENBQUQsQ0FBSixHQUFVLFlBQVYsR0FBeUI7QUFBakMsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsWUFBS3FCLGlFQUFLLENBQUNRLFVBQVgsZ0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUs3QixDQUZMLENBREEsQ0FETTtBQUFBLEdBQVQsQ0FETCxDQUZKLENBREosRUFjSTtBQUFLLGFBQVMsRUFBRXFCLGlFQUFLLENBQUNTLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRTdDLEtBQUssQ0FBQzhDLEdBQWhCO0FBQXFCLE9BQUcsRUFBQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRVYsaUVBQUssQ0FBQ1csRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBc0MvQyxLQUFLLENBQUNJLEVBQTVDLENBRkosQ0FkSixDQUZKLEVBcUJJO0FBQVEsYUFBUyxFQUFFZ0MsaUVBQUssQ0FBQ1ksTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSixDQURKLENBREosQ0FESjtBQStCSDs7R0E1RnVCakQsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LmFhNzg5NWY2MmFiMWJmNTcwYzQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3Nhc3MvRWRpdFRhZ3MubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IFRhZ3MgfSBmcm9tIFwiLi4vdXRpbHMvdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFRhZ3MocHJvcHMpIHtcclxuXHJcbiAgICAvLyBTdGF0ZSBEZWNsYXJhdGlvbnNcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IGlkID0gW3Byb3BzLmlkXVxyXG5cclxuICAgIC8vIFRvZ2dsaW5nIFRhZ3MgTG9naWNcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhZyh0YWcpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFncyA9IHsuLi50YWdzfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYWdzW3RhZ10pXHJcbiAgICAgICAgaWYgKCBuZXdUYWdzW3RhZ10gPT09IHRydWUgKSBkZWxldGUgbmV3VGFnc1t0YWddO1xyXG4gICAgICAgIGVsc2UgbmV3VGFnc1t0YWddID0gdHJ1ZTtcclxuICAgICAgICBzZXRUYWdzKG5ld1RhZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RhZ3MpXHJcbiAgICAgICAgY29uc29sZS5sb2codGFncyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJtaXQoZSlcclxuICAgIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkc1wiLCBpZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGFnc1wiLCBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0YWdzKSwgbnVsbCwgMikpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhaXJbMF0sIHBhaXJbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtvYmplY3Rba2V5XSA9IHZhbHVlfSk7XHJcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxyXG5cclxuICAgICAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgICAgLnB1dFxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS90YWdzL3VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBqc29uLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlblxyXG4gICAgICAgICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZS5Gb3JtfSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5UaXRsZX0+RWRpdGluZyBUYWdzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlN0YWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7VGFncy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVRhZyhlKX0gc3R5bGU9e3tjb2xvcjogdGFnc1tlXSA/IFwibGlnaHRHcmVlblwiIDogXCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtzdHlsZS50YWdnZWRJY29ufSBmYXMgZmEtdGFnYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JbWFnZVByZXZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PVwicHJldmlld1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JZH0+cHVibGljX2lkOiB7cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5CdXR0b259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=