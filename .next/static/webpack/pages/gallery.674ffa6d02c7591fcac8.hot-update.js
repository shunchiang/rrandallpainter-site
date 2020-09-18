webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _content,\n    _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n //modal styles\n\nreact_modal__WEBPACK_IMPORTED_MODULE_6___default.a.setAppElement(\"body\");\nvar photoModalStyle = {\n  content: {\n    width: \"60%\",\n    top: \"10%\",\n    left: \"20%\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"transparent\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nvar uploadModalStyle = {\n  content: (_content = {\n    position: \"absolute\",\n    bottom: \"0\",\n    top: \"20%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"bottom\", \"auto\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"backgroundColor\", \"gray\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"borderRadius\", \"8px\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"borderColor\", \"transparent\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_content, \"maxHeight\", \"60vh\"), _content),\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      clickedImage = _useState2[0],\n      setClickedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      modalIsOpen = _useState3[0],\n      setIsOpen = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      uploadModalIsOpen = _useState4[0],\n      setUploadModal = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      logged = _useState5[0],\n      setLogged = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      imagesToUpload = _useState6[0],\n      setImagesToUpload = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      previews = _useState7[0],\n      setPreviews = _useState7[1];\n\n  var onFileChange = function onFileChange(e) {\n    setImagesToUpload([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imagesToUpload), [e.target.files[0]]));\n    console.log(imagesToUpload);\n  };\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function openUploadModal() {\n    setUploadModal(true);\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  function closeUploadModal() {\n    setUploadModal(false);\n  }\n\n  function deleteUpload(i) {\n    setPreviews(previews.filter(function (el) {\n      return el !== previews.splice(i, 1);\n    }));\n    console.log(previews);\n  }\n\n  function onSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData();\n    imagesToUpload.forEach(function (e) {\n      return formData.append(\"images\", e);\n    });\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var pair = _step.value;\n        console.log(pair[1]);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"http://localhost:3080/api/upload\", formData).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (imagesToUpload.length) {\n      var objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);\n      setPreviews([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(previews), [objectUrl]));\n      console.log(previews);\n    }\n  }, [imagesToUpload]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setLogged(localStorage.getItem(\"rrandall-authorization\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  }, \"R.Randall Gallery\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://use.fontawesome.com/releases/v5.14.0/css/all.css\",\n    integrity: \"sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc\",\n    crossorigin: \"anonymous\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: photoModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: clickedImage,\n    alt: \"gallery modal\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.clickedImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 11\n    }\n  }))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    isOpen: uploadModalIsOpen,\n    onRequestClose: closeUploadModal,\n    style: uploadModalStyle,\n    contentLabel: \"Modal\",\n    id: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"imgCollection\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadInput,\n    onChange: onFileChange,\n    multiple: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.submitBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-plus\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 15\n    }\n  }), \"Upload\")), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previews,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 11\n    }\n  }, previews.length > 0 && previews.map(function (p, i) {\n    return __jsx(\"img\", {\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previewThumb,\n      src: p,\n      onClick: function onClick() {\n        deleteUpload(i);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 17\n      }\n    });\n  })))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 9\n    }\n  }, \"Full Gallery\"), logged && __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploadBtn,\n    onClick: openUploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 193,\n      columnNumber: 11\n    }\n  }, \"Upload\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 11\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      onClick: function onClick() {\n        openModal();\n        setClickedImage(url);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 202,\n        columnNumber: 17\n      }\n    });\n  })))));\n}\n\n_s(Gallery, \"XycnJDc81DWXW8w/VaaGtAqiY80=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbIk1vZGFsIiwic2V0QXBwRWxlbWVudCIsInBob3RvTW9kYWxTdHlsZSIsImNvbnRlbnQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwib3ZlcmxheSIsInVwbG9hZE1vZGFsU3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIm92ZXJmbG93IiwiR2FsbGVyeSIsInVzZVN0YXRlIiwiZ2FsbGVyeUltYWdlcyIsInNldEdhbGxlcnlJbWFnZXMiLCJjbGlja2VkSW1hZ2UiLCJzZXRDbGlja2VkSW1hZ2UiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwicHJldmlld3MiLCJzZXRQcmV2aWV3cyIsIm9uRmlsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJvcGVuTW9kYWwiLCJvcGVuVXBsb2FkTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImRlbGV0ZVVwbG9hZCIsImkiLCJmaWx0ZXIiLCJlbCIsInNwbGljZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImFwcGVuZCIsImVudHJpZXMiLCJwYWlyIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm9iamVjdFVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwiZGF0YSIsInN0eWxlIiwidXBsb2FkTW9kYWwiLCJ1cGxvYWRJbnB1dCIsInN1Ym1pdEJ0biIsIm1hcCIsInAiLCJwcmV2aWV3VGh1bWIiLCJnYWxsZXJ5UGFnZSIsImdhbGxlcnlUaXRsZSIsInVwbG9hZEJ0biIsImdyaWQiLCJyb3dzIiwidXJsIiwiaW5kZXgiLCJnYWxsZXJ5SW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0FBLGtEQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEI7QUFFQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsS0FEQTtBQUVQQyxPQUFHLEVBQUUsS0FGRTtBQUdQQyxRQUFJLEVBQUUsS0FIQztBQUlQQyxVQUFNLEVBQUUsTUFKRDtBQUtQQyxlQUFXLEVBQUUsTUFMTjtBQU1QQyxtQkFBZSxFQUFFLGFBTlY7QUFPUEMsZ0JBQVksRUFBRSxLQVBQO0FBUVBDLGVBQVcsRUFBRTtBQVJOLEdBRGE7QUFXdEJDLFNBQU8sRUFBRTtBQUNQSCxtQkFBZSxFQUFFO0FBRFY7QUFYYSxDQUF4QjtBQWdCQSxJQUFNSSxnQkFBZ0IsR0FBRztBQUN2QlYsU0FBTztBQUNMVyxZQUFRLEVBQUUsVUFETDtBQUVMUCxVQUFNLEVBQUUsR0FGSDtBQUdMRixPQUFHLEVBQUUsS0FIQTtBQUlMQyxRQUFJLEVBQUUsS0FKRDtBQUtMUyxhQUFTLEVBQUUsdUJBTE47QUFNTEMsWUFBUSxFQUFFO0FBTkwsbUhBT0csTUFQSCwwSEFRWSxNQVJaLHVIQVNTLEtBVFQsc0hBVVEsYUFWUixvSEFXTSxNQVhOLFlBRGdCO0FBY3ZCSixTQUFPLEVBQUU7QUFDUEgsbUJBQWUsRUFBRTtBQURWO0FBZGMsQ0FBekI7QUFtQmUsU0FBU1EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUN6QkMsYUFEeUI7QUFBQSxNQUNWQyxnQkFEVTs7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QUNFLFNBQUcsRUFBRUQsR0FEUDtBQUVFLGVBQVMsRUFBRVosb0VBQUssQ0FBQ2MsWUFGbkI7QUFHRSxTQUFHLDZCQUFzQkQsS0FBdEIsQ0FITDtBQUlFLGFBQU8sRUFBRSxtQkFBTTtBQUNiNUMsaUJBQVM7QUFDVGpCLHVCQUFlLENBQUM0RCxHQUFELENBQWY7QUFDRCxPQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBWkEsQ0FESCxDQURGLENBUkYsQ0E1REYsQ0FERjtBQXlGRDs7R0E1S3VCakUsTzs7S0FBQUEsTyIsImZpbGUiOiIuL3BhZ2VzL2dhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vbW9kYWwgc3R5bGVzXG5Nb2RhbC5zZXRBcHBFbGVtZW50KFwiYm9keVwiKTtcblxuY29uc3QgcGhvdG9Nb2RhbFN0eWxlID0ge1xuICBjb250ZW50OiB7XG4gICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgdG9wOiBcIjEwJVwiLFxuICAgIGxlZnQ6IFwiMjAlXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KVwiLFxuICB9LFxufTtcblxuY29uc3QgdXBsb2FkTW9kYWxTdHlsZSA9IHtcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiBcIjBcIixcbiAgICB0b3A6IFwiMjAlXCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBtYXhIZWlnaHQ6IFwiNjB2aFwiLFxuICB9LFxuICBvdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNylcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NsaWNrZWRJbWFnZSwgc2V0Q2xpY2tlZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1cGxvYWRNb2RhbElzT3Blbiwgc2V0VXBsb2FkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbWFnZXNUb1VwbG9hZCwgc2V0SW1hZ2VzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJldmlld3MsIHNldFByZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEltYWdlc1RvVXBsb2FkKFsuLi5pbWFnZXNUb1VwbG9hZCwgZS50YXJnZXQuZmlsZXNbMF1dKTtcbiAgICBjb25zb2xlLmxvZyhpbWFnZXNUb1VwbG9hZCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBvcGVuVXBsb2FkTW9kYWwoKSB7XG4gICAgc2V0VXBsb2FkTW9kYWwodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVVwbG9hZE1vZGFsKCkge1xuICAgIHNldFVwbG9hZE1vZGFsKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVVwbG9hZChpKSB7XG4gICAgc2V0UHJldmlld3MocHJldmlld3MuZmlsdGVyKChlbCkgPT4gZWwgIT09IHByZXZpZXdzLnNwbGljZShpLCAxKSkpO1xuICAgIGNvbnNvbGUubG9nKHByZXZpZXdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpbWFnZXNUb1VwbG9hZC5mb3JFYWNoKChlKSA9PiBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZSkpO1xuICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhaXJbMV0pO1xuICAgIH1cbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwODAvYXBpL3VwbG9hZFwiLCBmb3JtRGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbWFnZXNUb1VwbG9hZC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXG4gICAgICAgIGltYWdlc1RvVXBsb2FkW2ltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDFdXG4gICAgICApO1xuICAgICAgc2V0UHJldmlld3MoWy4uLnByZXZpZXdzLCBvYmplY3RVcmxdKTtcbiAgICAgIGNvbnNvbGUubG9nKHByZXZpZXdzKTtcbiAgICB9XG4gIH0sIFtpbWFnZXNUb1VwbG9hZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9nZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicnJhbmRhbGwtYXV0aG9yaXphdGlvblwiKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwODAvaW1hZ2VzL1wiLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBzZXRHYWxsZXJ5SW1hZ2VzKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlIuUmFuZGFsbCBHYWxsZXJ5PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTQuMC9jc3MvYWxsLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUh6TGVCdWhvTlB2U2w1S1luangwQlQrV0IwUUVFcUxwck8rTkJra2s1Z2JjNjdGVGFMN1hJR2EydzFMMFhiZ2NcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgc3R5bGU9e3Bob3RvTW9kYWxTdHlsZX1cbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17Y2xpY2tlZEltYWdlfVxuICAgICAgICAgICAgYWx0PVwiZ2FsbGVyeSBtb2RhbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNsaWNrZWRJbWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXt1cGxvYWRNb2RhbElzT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVXBsb2FkTW9kYWx9XG4gICAgICAgIHN0eWxlPXt1cGxvYWRNb2RhbFN0eWxlfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXG4gICAgICAgIGlkPXtzdHlsZS51cGxvYWRNb2RhbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZE1vZGFsfT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImltZ0NvbGxlY3Rpb25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5zdWJtaXRCdG59PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT5VcGxvYWRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJldmlld3N9PlxuICAgICAgICAgICAge3ByZXZpZXdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgcHJldmlld3MubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5wcmV2aWV3VGh1bWJ9XG4gICAgICAgICAgICAgICAgICBzcmM9e3B9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVVwbG9hZChpKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5UGFnZX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cbiAgICAgICAge2xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZEJ0bn0gb25DbGljaz17b3BlblVwbG9hZE1vZGFsfT5cbiAgICAgICAgICAgIFVwbG9hZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucm93c30+XG4gICAgICAgICAgICB7Z2FsbGVyeUltYWdlcy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBhdCBpbmRleCAke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})