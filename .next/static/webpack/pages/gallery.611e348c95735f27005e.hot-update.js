webpackHotUpdate_N_E("pages/gallery",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzP2FkZTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/defineProperty.js\n");

/***/ }),

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _content,\n    _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n //modal styles\n\nvar photoModalStyle = {\n  content: {\n    width: \"60%\",\n    top: \"10%\",\n    left: \"20%\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"transparent\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nvar uploadModalStyle = {\n  content: (_content = {\n    position: \"fixed\",\n    bottom: \"0\",\n    top: \"100px\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"bottom\", \"auto\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"backgroundColor\", \"gray\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"borderRadius\", \"8px\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"borderColor\", \"transparent\"), _content),\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      clickedImage = _useState2[0],\n      setClickedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      modalIsOpen = _useState3[0],\n      setIsOpen = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      uploadModalIsOpen = _useState4[0],\n      setUploadModal = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      logged = _useState5[0],\n      setLogged = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      imagesToUpload = _useState6[0],\n      setImagesToUpload = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      previews = _useState7[0],\n      setPreviews = _useState7[1];\n\n  var onFileChange = function onFileChange(e) {\n    setImagesToUpload([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imagesToUpload), [e.target.files[0]]));\n    console.log(imagesToUpload);\n  };\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function openUploadModal() {\n    setUploadModal(true);\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  function closeUploadModal() {\n    setUploadModal(false);\n  }\n\n  function onSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData();\n    imagesToUpload.forEach(function (e) {\n      return formData.append(\"images\", e);\n    });\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var pair = _step.value;\n        console.log(pair[1]);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"http://localhost:3080/api/upload\", formData).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (imagesToUpload.length) {\n      var objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);\n      setPreviews([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(previews), [objectUrl]));\n      console.log(previews);\n    }\n  }, [imagesToUpload]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setLogged(localStorage.getItem(\"rrandall-authorization\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, \"R.Randall Gallery\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://use.fontawesome.com/releases/v5.14.0/css/all.css\",\n    integrity: \"sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc\",\n    crossorigin: \"anonymous\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: photoModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: clickedImage,\n    alt: \"gallery modal\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.clickedImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 11\n    }\n  }))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    isOpen: uploadModalIsOpen,\n    onRequestClose: closeUploadModal,\n    style: uploadModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"imgCollection\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadInput,\n    onChange: onFileChange,\n    multiple: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.submitBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-plus\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 15\n    }\n  }), \"Upload\")), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previews,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 11\n    }\n  }, previews.map(function (p) {\n    return __jsx(\"img\", {\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previewThumb,\n      src: p,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 15\n      }\n    });\n  })))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 9\n    }\n  }, \"Full Gallery\"), logged && __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadBtn,\n    onClick: openUploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 11\n    }\n  }, \"Upload\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 11\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      onClick: function onClick() {\n        openModal();\n        setClickedImage(url);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 186,\n        columnNumber: 17\n      }\n    });\n  })))));\n}\n\n_s(Gallery, \"XycnJDc81DWXW8w/VaaGtAqiY80=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbInBob3RvTW9kYWxTdHlsZSIsImNvbnRlbnQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwib3ZlcmxheSIsInVwbG9hZE1vZGFsU3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIkdhbGxlcnkiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiY2xpY2tlZEltYWdlIiwic2V0Q2xpY2tlZEltYWdlIiwibW9kYWxJc09wZW4iLCJzZXRJc09wZW4iLCJ1cGxvYWRNb2RhbElzT3BlbiIsInNldFVwbG9hZE1vZGFsIiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwiaW1hZ2VzVG9VcGxvYWQiLCJzZXRJbWFnZXNUb1VwbG9hZCIsInByZXZpZXdzIiwic2V0UHJldmlld3MiLCJvbkZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwib3Blbk1vZGFsIiwib3BlblVwbG9hZE1vZGFsIiwiY2xvc2VNb2RhbCIsImNsb3NlVXBsb2FkTW9kYWwiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJvYmplY3RVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsImRhdGEiLCJzdHlsZSIsInVwbG9hZE1vZGFsIiwidXBsb2FkSW5wdXQiLCJzdWJtaXRCdG4iLCJtYXAiLCJwIiwicHJldmlld1RodW1iIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJncmlkIiwicm93cyIsInVybCIsImluZGV4IiwiZ2FsbGVyeUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxLQURBO0FBRVBDLE9BQUcsRUFBRSxLQUZFO0FBR1BDLFFBQUksRUFBRSxLQUhDO0FBSVBDLFVBQU0sRUFBRSxNQUpEO0FBS1BDLGVBQVcsRUFBRSxNQUxOO0FBTVBDLG1CQUFlLEVBQUUsYUFOVjtBQU9QQyxnQkFBWSxFQUFFLEtBUFA7QUFRUEMsZUFBVyxFQUFFO0FBUk4sR0FEYTtBQVd0QkMsU0FBTyxFQUFFO0FBQ1BILG1CQUFlLEVBQUU7QUFEVjtBQVhhLENBQXhCO0FBZ0JBLElBQU1JLGdCQUFnQixHQUFHO0FBQ3ZCVixTQUFPO0FBQ0xXLFlBQVEsRUFBRSxPQURMO0FBRUxQLFVBQU0sRUFBRSxHQUZIO0FBR0xGLE9BQUcsRUFBRSxPQUhBO0FBSUxDLFFBQUksRUFBRSxLQUpEO0FBS0xTLGFBQVMsRUFBRTtBQUxOLG1IQU9HLE1BUEgsMEhBUVksTUFSWix1SEFTUyxLQVRULHNIQVVRLGFBVlIsWUFEZ0I7QUFhdkJILFNBQU8sRUFBRTtBQUNQSCxtQkFBZSxFQUFFO0FBRFY7QUFiYyxDQUF6QjtBQWtCZSxTQUFTTyxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ3pCQyxhQUR5QjtBQUFBLE1BQ1ZDLGdCQURVOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUV6QkcsWUFGeUI7QUFBQSxNQUVYQyxlQUZXOztBQUFBLG1CQUdDSixzREFBUSxDQUFDLEtBQUQsQ0FIVDtBQUFBLE1BR3pCSyxXQUh5QjtBQUFBLE1BR1pDLFNBSFk7O0FBQUEsbUJB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QUFLLENBQUNRLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRzlDLE1BQU0sSUFDTDtBQUFLLGFBQVMsRUFBRXNDLG9FQUFLLENBQUNTLFNBQXRCO0FBQWlDLFdBQU8sRUFBRWxDLGVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixFQVFFO0FBQUssYUFBUyxFQUFFeUIsb0VBQUssQ0FBQ1UsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFVixvRUFBSyxDQUFDVyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d6RCxhQUFhLENBQUNrRCxHQUFkLENBQWtCLFVBQUNRLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNqQyxXQUNFO0FBQ0UsU0FBRyxFQUFFRCxHQURQO0FBRUUsZUFBUyxFQUFFWixvRUFBSyxDQUFDYyxZQUZuQjtBQUdFLFNBQUcsNkJBQXNCRCxLQUF0QixDQUhMO0FBSUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2J2QyxpQkFBUztBQUNUakIsdUJBQWUsQ0FBQ3VELEdBQUQsQ0FBZjtBQUNELE9BUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBV0QsR0FaQSxDQURILENBREYsQ0FSRixDQXBERixDQURGO0FBaUZEOztHQS9KdUI1RCxPOztLQUFBQSxPIiwiZmlsZSI6Ii4vcGFnZXMvZ2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3Nhc3MvR2FsbGVyeVBhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuLy9tb2RhbCBzdHlsZXNcbmNvbnN0IHBob3RvTW9kYWxTdHlsZSA9IHtcbiAgY29udGVudDoge1xuICAgIHdpZHRoOiBcIjYwJVwiLFxuICAgIHRvcDogXCIxMCVcIixcbiAgICBsZWZ0OiBcIjIwJVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiLTUwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICB9LFxuICBvdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNylcIixcbiAgfSxcbn07XG5cbmNvbnN0IHVwbG9hZE1vZGFsU3R5bGUgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIGJvdHRvbTogXCIwXCIsXG4gICAgdG9wOiBcIjEwMHB4XCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG5cbiAgICBib3R0b206IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJncmF5XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeSgpIHtcbiAgY29uc3QgW2dhbGxlcnlJbWFnZXMsIHNldEdhbGxlcnlJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2xpY2tlZEltYWdlLCBzZXRDbGlja2VkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VwbG9hZE1vZGFsSXNPcGVuLCBzZXRVcGxvYWRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ltYWdlc1RvVXBsb2FkLCBzZXRJbWFnZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcmV2aWV3cywgc2V0UHJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW1hZ2VzVG9VcGxvYWQoWy4uLmltYWdlc1RvVXBsb2FkLCBlLnRhcmdldC5maWxlc1swXV0pO1xuICAgIGNvbnNvbGUubG9nKGltYWdlc1RvVXBsb2FkKTtcbiAgfTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIG9wZW5VcGxvYWRNb2RhbCgpIHtcbiAgICBzZXRVcGxvYWRNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlVXBsb2FkTW9kYWwoKSB7XG4gICAgc2V0VXBsb2FkTW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGltYWdlc1RvVXBsb2FkLmZvckVhY2goKGUpID0+IGZvcm1EYXRhLmFwcGVuZChcImltYWdlc1wiLCBlKSk7XG4gICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgY29uc29sZS5sb2cocGFpclsxXSk7XG4gICAgfVxuICAgIGF4aW9zXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC9hcGkvdXBsb2FkXCIsIGZvcm1EYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGltYWdlc1RvVXBsb2FkLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcbiAgICAgICAgaW1hZ2VzVG9VcGxvYWRbaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMV1cbiAgICAgICk7XG4gICAgICBzZXRQcmV2aWV3cyhbLi4ucHJldmlld3MsIG9iamVjdFVybF0pO1xuICAgICAgY29uc29sZS5sb2cocHJldmlld3MpO1xuICAgIH1cbiAgfSwgW2ltYWdlc1RvVXBsb2FkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2dnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJycmFuZGFsbC1hdXRob3JpemF0aW9uXCIpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC9pbWFnZXMvXCIsXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldEdhbGxlcnlJbWFnZXMocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Ui5SYW5kYWxsIEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNC4wL2Nzcy9hbGwuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSHpMZUJ1aG9OUHZTbDVLWW5qeDBCVCtXQjBRRUVxTHByTytOQmtrazVnYmM2N0ZUYUw3WElHYTJ3MUwwWGJnY1wiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBzdHlsZT17cGhvdG9Nb2RhbFN0eWxlfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtjbGlja2VkSW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJnYWxsZXJ5IG1vZGFsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2xpY2tlZEltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e3VwbG9hZE1vZGFsSXNPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VVcGxvYWRNb2RhbH1cbiAgICAgICAgc3R5bGU9e3VwbG9hZE1vZGFsU3R5bGV9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZE1vZGFsfT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImltZ0NvbGxlY3Rpb25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5zdWJtaXRCdG59PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT5VcGxvYWRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJldmlld3N9PlxuICAgICAgICAgICAge3ByZXZpZXdzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUucHJldmlld1RodW1ifSBzcmM9e3B9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlQYWdlfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVRpdGxlfT5GdWxsIEdhbGxlcnk8L2gyPlxuICAgICAgICB7bG9nZ2VkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkQnRufSBvbkNsaWNrPXtvcGVuVXBsb2FkTW9kYWx9PlxuICAgICAgICAgICAgVXBsb2FkXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cbiAgICAgICAgICAgIHtnYWxsZXJ5SW1hZ2VzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})