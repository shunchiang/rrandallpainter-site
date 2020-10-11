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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/EditTags.module.scss */ "./sass/EditTags.module.scss");
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/tags */ "./utils/tags.js");



var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\components\\Modal_EditTags.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function EditTags(props) {
  _s();

  var _this = this;

  // State Declarations
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
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

  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({
    withCredentials: true
  });

  function onSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    console.log(id);
    formData.append("ids", id);
    formData.append("tags", JSON.stringify(Object.keys(tags)));

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

    formData = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("formData"), JSON.stringify(formData));
    console.log(formData);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("form", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Form,
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, _utils_tags__WEBPACK_IMPORTED_MODULE_5__["Tags"].map(function (e) {
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
        lineNumber: 75,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "".concat(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.taggedIcon, " fas fa-tag"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 41
      }
    }), e));
  }))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFncy5qcyJdLCJuYW1lcyI6WyJFZGl0VGFncyIsInByb3BzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsImlkIiwidG9nZ2xlVGFnIiwidGFnIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJwYWlyIiwicHV0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJlcnIiLCJzdHlsZSIsIkZvcm0iLCJCb2R5IiwiVGl0bGUiLCJTdGFnZSIsIlRhZ3MiLCJtYXAiLCJjb2xvciIsInRhZ2dlZEljb24iLCJJbWFnZVByZXZpZXciLCJpbWciLCJJZCIsIkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUVwQztBQUZvQyxrQkFHWkMsc0RBQVEsQ0FBQyxFQUFELENBSEk7QUFBQSxNQUc3QkMsSUFINkI7QUFBQSxNQUd2QkMsT0FIdUI7O0FBSXBDLE1BQU1DLEVBQUUsR0FBRyxDQUFDSixLQUFLLENBQUNJLEVBQVAsQ0FBWCxDQUpvQyxDQU1wQzs7QUFDQSxXQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUNBO0FBQ0ksUUFBTUMsT0FBTyxxQkFBT0wsSUFBUCxDQUFiOztBQUNBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBTyxDQUFDRCxHQUFELENBQW5CO0FBQ0EsUUFBS0MsT0FBTyxDQUFDRCxHQUFELENBQVAsS0FBaUIs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QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsZUFBUyxZQUFLZ0IsaUVBQUssQ0FBQ1EsVUFBWCxnQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFS3hCLENBRkwsQ0FEQSxDQURNO0FBQUEsR0FBVCxDQURMLENBRkosQ0FESixFQWNJO0FBQUssYUFBUyxFQUFFZ0IsaUVBQUssQ0FBQ1MsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFeEMsS0FBSyxDQUFDeUMsR0FBaEI7QUFBcUIsT0FBRyxFQUFDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFVixpRUFBSyxDQUFDVyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFzQzFDLEtBQUssQ0FBQ0ksRUFBNUMsQ0FGSixDQWRKLENBRkosRUFxQkk7QUFBUSxhQUFTLEVBQUUyQixpRUFBSyxDQUFDWSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJKLENBREosQ0FESixDQURKO0FBK0JIOztHQXpGdUI1QyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuZTJhZGI0YzU4MjViMmVkM2VjNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc2Fzcy9FZGl0VGFncy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgVGFncyB9IGZyb20gXCIuLi91dGlscy90YWdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VGFncyhwcm9wcykge1xyXG5cclxuICAgIC8vIFN0YXRlIERlY2xhcmF0aW9uc1xyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgaWQgPSBbcHJvcHMuaWRdXHJcblxyXG4gICAgLy8gVG9nZ2xpbmcgVGFncyBMb2dpY1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBuZXdUYWdzID0gey4uLnRhZ3N9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RhZ3NbdGFnXSlcclxuICAgICAgICBpZiAoIG5ld1RhZ3NbdGFnXSA9PT0gdHJ1ZSApIGRlbGV0ZSBuZXdUYWdzW3RhZ107XHJcbiAgICAgICAgZWxzZSBuZXdUYWdzW3RhZ10gPSB0cnVlO1xyXG4gICAgICAgIHNldFRhZ3MobmV3VGFncyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFncylcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWdzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Ym1pdChlKVxyXG4gICAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRzXCIsIGlkKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWdzXCIsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHRhZ3MpKSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFpclswXSwgcGFpclsxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtRGF0YSA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcblxyXG4gICAgICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgICAucHV0XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3RhZ3MvdXBkYXRlXCIsXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlblxyXG4gICAgICAgICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZS5Gb3JtfSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5UaXRsZX0+RWRpdGluZyBUYWdzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlN0YWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFnczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7VGFncy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVRhZyhlKX0gc3R5bGU9e3tjb2xvcjogdGFnc1tlXSA/IFwibGlnaHRHcmVlblwiIDogXCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtzdHlsZS50YWdnZWRJY29ufSBmYXMgZmEtdGFnYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JbWFnZVByZXZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gYWx0PVwicHJldmlld1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JZH0+cHVibGljX2lkOiB7cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5CdXR0b259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=