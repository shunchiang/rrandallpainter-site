webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _content,\n    _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n //modal styles\n\nreact_modal__WEBPACK_IMPORTED_MODULE_6___default.a.setAppElement(\"body\");\nvar photoModalStyle = {\n  content: {\n    width: \"60%\",\n    top: \"10%\",\n    left: \"20%\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"transparent\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nvar uploadModalStyle = {\n  content: (_content = {\n    position: \"absolute\",\n    bottom: \"0\",\n    top: \"20%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"bottom\", \"auto\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"backgroundColor\", \"rgb(49 49 49)\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"borderRadius\", \"8px\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"borderColor\", \"transparent\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"maxHeight\", \"60vh\"), _content),\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      clickedImage = _useState2[0],\n      setClickedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      modalIsOpen = _useState3[0],\n      setIsOpen = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      uploadModalIsOpen = _useState4[0],\n      setUploadModal = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      logged = _useState5[0],\n      setLogged = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      imagesToUpload = _useState6[0],\n      setImagesToUpload = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      previews = _useState7[0],\n      setPreviews = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      addingImage = _useState8[0],\n      setAddingImage = _useState8[1];\n\n  var onFileChange = function onFileChange(e) {\n    setAddingImage(true);\n    setImagesToUpload([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imagesToUpload), [e.target.files[0]]));\n  };\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function openUploadModal() {\n    setUploadModal(true);\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  function closeUploadModal() {\n    setUploadModal(false);\n  }\n\n  function deleteUpload(i) {\n    if (previews.length > 1) {\n      setAddingImage(false);\n      setPreviews(previews.filter(function (el) {\n        return el !== previews.splice(i, 1);\n      }));\n      setImagesToUpload(imagesToUpload.filter(function (el) {\n        return el !== imagesToUpload.splice(i, 1);\n      }));\n      console.log(\"ITU\", imagesToUpload);\n    } else {\n      setPreviews([]);\n      setImagesToUpload([]);\n    }\n  }\n\n  function onSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData();\n    imagesToUpload.forEach(function (e) {\n      return formData.append(\"images\", e);\n    });\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var pair = _step.value;\n        console.log(pair[1]);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"http://localhost:3080/api/upload\", formData).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (imagesToUpload.length && addingImage) {\n      setAddingImage(false);\n      var objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);\n      setPreviews([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(previews), [objectUrl]));\n      console.log(previews);\n    }\n\n    console.log(\"itu1\", imagesToUpload);\n  }, [imagesToUpload]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setLogged(localStorage.getItem(\"rrandall-authorization\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }, \"R.Randall Gallery\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://use.fontawesome.com/releases/v5.14.0/css/all.css\",\n    integrity: \"sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc\",\n    crossorigin: \"anonymous\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: photoModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: clickedImage,\n    alt: \"gallery modal\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.clickedImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 11\n    }\n  }))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    isOpen: uploadModalIsOpen,\n    onRequestClose: closeUploadModal,\n    style: uploadModalStyle,\n    contentLabel: \"Modal\",\n    id: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"imgCollection\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadInput,\n    onChange: onFileChange,\n    multiple: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.submitBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-plus\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 15\n    }\n  }), \"Upload\")), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previews,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 11\n    }\n  }, previews.length > 0 && previews.map(function (p, i) {\n    return __jsx(\"div\", {\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.thumbsDiv,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 17\n      }\n    }, __jsx(\"i\", {\n      \"class\": \"far fa-times-circle\",\n      onClick: function onClick() {\n        deleteUpload(i);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 19\n      }\n    }), __jsx(\"img\", {\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previewThumb,\n      src: p,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 197,\n        columnNumber: 19\n      }\n    }));\n  })))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 205,\n      columnNumber: 9\n    }\n  }, \"Full Gallery\"), logged && __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadBtn,\n    onClick: openUploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 11\n    }\n  }, \"Upload\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 11\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      onClick: function onClick() {\n        openModal();\n        setClickedImage(url);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 216,\n        columnNumber: 17\n      }\n    });\n  })))));\n}\n\n_s(Gallery, \"EAxaeY2jyMzs0v4QZps0yknBQsQ=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbIk1vZGFsIiwic2V0QXBwRWxlbWVudCIsInBob3RvTW9kYWxTdHlsZSIsImNvbnRlbnQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwib3ZlcmxheSIsInVwbG9hZE1vZGFsU3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIm92ZXJmbG93IiwiR2FsbGVyeSIsInVzZVN0YXRlIiwiZ2FsbGVyeUltYWdlcyIsInNldEdhbGxlcnlJbWFnZXMiLCJjbGlja2VkSW1hZ2UiLCJzZXRDbGlja2VkSW1hZ2UiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwicHJldmlld3MiLCJzZXRQcmV2aWV3cyIsImFkZGluZ0ltYWdlIiwic2V0QWRkaW5nSW1hZ2UiLCJvbkZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJvcGVuTW9kYWwiLCJvcGVuVXBsb2FkTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImRlbGV0ZVVwbG9hZCIsImkiLCJsZW5ndGgiLCJmaWx0ZXIiLCJlbCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJ1c2VFZmZlY3QiLCJvYmplY3RVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsImRhdGEiLCJzdHlsZSIsInVwbG9hZE1vZGFsIiwidXBsb2FkSW5wdXQiLCJzdWJtaXRCdG4iLCJtYXAiLCJwIiwidGh1bWJzRGl2IiwicHJldmlld1RodW1iIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJncmlkIiwicm93cyIsInVybCIsImluZGV4IiwiZ2FsbGVyeUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBQSxrREFBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCO0FBRUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLEtBREE7QUFFUEMsT0FBRyxFQUFFLEtBRkU7QUFHUEMsUUFBSSxFQUFFLEtBSEM7QUFJUEMsVUFBTSxFQUFFLE1BSkQ7QUFLUEMsZUFBVyxFQUFFLE1BTE47QUFNUEMsbUJBQWUsRUFBRSxhQU5WO0FBT1BDLGdCQUFZLEVBQUUsS0FQUDtBQVFQQyxlQUFXLEVBQUU7QUFSTixHQURhO0FBV3RCQyxTQUFPLEVBQUU7QUFDUEgsbUJBQWUsRUFBRTtBQURWO0FBWGEsQ0FBeEI7QUFnQkEsSUFBTUksZ0JBQWdCLEdBQUc7QUFDdkJWLFNBQU87QUFDTFcsWUFBUSxFQUFFLFVBREw7QUFFTFAsVUFBTSxFQUFFLEdBRkg7QUFHTEYsT0FBRyxFQUFFLEtBSEE7QUFJTEMsUUFBSSxFQUFFLEtBSkQ7QUFLTFMsYUFBUyxFQUFFLHVCQUxOO0FBTUxDLFlBQVEsRUFBRTtBQU5MLG1IQU9HLE1BUEgsMEhBUVksZUFSWix1SEFTUyxLQVRULHNIQVVRLGFBVlIsb0hBV00sTUFYTixZQURnQjtBQWN2QkosU0FBTyxFQUFFO0FBQ1BILG1CQUFlLEVBQUU7QUFEVjtBQWRjLENBQXpCO0FBbUJlLFNBQVNRLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFE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OiIuL3BhZ2VzL2dhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vbW9kYWwgc3R5bGVzXG5Nb2RhbC5zZXRBcHBFbGVtZW50KFwiYm9keVwiKTtcblxuY29uc3QgcGhvdG9Nb2RhbFN0eWxlID0ge1xuICBjb250ZW50OiB7XG4gICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgdG9wOiBcIjEwJVwiLFxuICAgIGxlZnQ6IFwiMjAlXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KVwiLFxuICB9LFxufTtcblxuY29uc3QgdXBsb2FkTW9kYWxTdHlsZSA9IHtcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiBcIjBcIixcbiAgICB0b3A6IFwiMjAlXCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYig0OSA0OSA0OSlcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBtYXhIZWlnaHQ6IFwiNjB2aFwiLFxuICB9LFxuICBvdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNylcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NsaWNrZWRJbWFnZSwgc2V0Q2xpY2tlZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1cGxvYWRNb2RhbElzT3Blbiwgc2V0VXBsb2FkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbWFnZXNUb1VwbG9hZCwgc2V0SW1hZ2VzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJldmlld3MsIHNldFByZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2FkZGluZ0ltYWdlLCBzZXRBZGRpbmdJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRBZGRpbmdJbWFnZSh0cnVlKTtcbiAgICBzZXRJbWFnZXNUb1VwbG9hZChbLi4uaW1hZ2VzVG9VcGxvYWQsIGUudGFyZ2V0LmZpbGVzWzBdXSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBvcGVuVXBsb2FkTW9kYWwoKSB7XG4gICAgc2V0VXBsb2FkTW9kYWwodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVVwbG9hZE1vZGFsKCkge1xuICAgIHNldFVwbG9hZE1vZGFsKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVVwbG9hZChpKSB7XG4gICAgaWYgKHByZXZpZXdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcbiAgICAgIHNldFByZXZpZXdzKHByZXZpZXdzLmZpbHRlcigoZWwpID0+IGVsICE9PSBwcmV2aWV3cy5zcGxpY2UoaSwgMSkpKTtcbiAgICAgIHNldEltYWdlc1RvVXBsb2FkKFxuICAgICAgICBpbWFnZXNUb1VwbG9hZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gaW1hZ2VzVG9VcGxvYWQuc3BsaWNlKGksIDEpKVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSVRVXCIsIGltYWdlc1RvVXBsb2FkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UHJldmlld3MoW10pO1xuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoW10pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpbWFnZXNUb1VwbG9hZC5mb3JFYWNoKChlKSA9PiBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZSkpO1xuICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhaXJbMV0pO1xuICAgIH1cbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwODAvYXBpL3VwbG9hZFwiLCBmb3JtRGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbWFnZXNUb1VwbG9hZC5sZW5ndGggJiYgYWRkaW5nSW1hZ2UpIHtcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcbiAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXG4gICAgICAgIGltYWdlc1RvVXBsb2FkW2ltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDFdXG4gICAgICApO1xuICAgICAgc2V0UHJldmlld3MoWy4uLnByZXZpZXdzLCBvYmplY3RVcmxdKTtcbiAgICAgIGNvbnNvbGUubG9nKHByZXZpZXdzKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJpdHUxXCIsIGltYWdlc1RvVXBsb2FkKTtcbiAgfSwgW2ltYWdlc1RvVXBsb2FkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2dnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJycmFuZGFsbC1hdXRob3JpemF0aW9uXCIpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC9pbWFnZXMvXCIsXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldEdhbGxlcnlJbWFnZXMocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Ui5SYW5kYWxsIEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNC4wL2Nzcy9hbGwuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSHpMZUJ1aG9OUHZTbDVLWW5qeDBCVCtXQjBRRUVxTHByTytOQmtrazVnYmM2N0ZUYUw3WElHYTJ3MUwwWGJnY1wiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBzdHlsZT17cGhvdG9Nb2RhbFN0eWxlfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtjbGlja2VkSW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJnYWxsZXJ5IG1vZGFsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2xpY2tlZEltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e3VwbG9hZE1vZGFsSXNPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VVcGxvYWRNb2RhbH1cbiAgICAgICAgc3R5bGU9e3VwbG9hZE1vZGFsU3R5bGV9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcbiAgICAgICAgaWQ9e3N0eWxlLnVwbG9hZE1vZGFsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkTW9kYWx9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBuYW1lPVwiaW1nQ29sbGVjdGlvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudXBsb2FkSW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLnN1Ym1pdEJ0bn0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPlVwbG9hZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcmV2aWV3c30+XG4gICAgICAgICAgICB7cHJldmlld3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBwcmV2aWV3cy5tYXAoKHAsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGh1bWJzRGl2fT5cbiAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFyIGZhLXRpbWVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcGxvYWQoaSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLnByZXZpZXdUaHVtYn0gc3JjPXtwfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlQYWdlfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVRpdGxlfT5GdWxsIEdhbGxlcnk8L2gyPlxuICAgICAgICB7bG9nZ2VkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkQnRufSBvbkNsaWNrPXtvcGVuVXBsb2FkTW9kYWx9PlxuICAgICAgICAgICAgVXBsb2FkXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cbiAgICAgICAgICAgIHtnYWxsZXJ5SW1hZ2VzLm1hcCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})