webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n //modal styles\n\nvar photoModalStyle = {\n  content: {\n    width: \"60%\",\n    top: \"10%\",\n    left: \"20%\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"transparent\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nvar uploadModalStyle = {\n  content: {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    bottom: \"auto\",\n    backgroundColor: \"gray\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      clickedImage = _useState2[0],\n      setClickedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      modalIsOpen = _useState3[0],\n      setIsOpen = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      uploadModalIsOpen = _useState4[0],\n      setUploadModal = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      logged = _useState5[0],\n      setLogged = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      imagesToUpload = _useState6[0],\n      setImagesToUpload = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      previews = _useState7[0],\n      setPreviews = _useState7[1];\n\n  var onFileChange = function onFileChange(e) {\n    setImagesToUpload([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imagesToUpload), [e.target.files[0]]));\n    console.log(imagesToUpload);\n  };\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function openUploadModal() {\n    setUploadModal(true);\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  function closeUploadModal() {\n    setUploadModal(false);\n  }\n\n  function onSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData();\n    imagesToUpload.forEach(function (e) {\n      return formData.append(\"images\", e);\n    });\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var pair = _step.value;\n        console.log(pair[1]);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"http://localhost:3080/api/upload\", formData).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (imagesToUpload.length) {\n      var objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);\n      setPreviews([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(previews), [objectUrl]));\n      console.log(previews);\n    }\n  }, [imagesToUpload]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setLogged(localStorage.getItem(\"rrandall-authorization\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, \"R.Randall Gallery\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://use.fontawesome.com/releases/v5.14.0/css/all.css\",\n    integrity: \"sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc\",\n    crossorigin: \"anonymous\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: photoModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: clickedImage,\n    alt: \"gallery modal\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.clickedImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    isOpen: uploadModalIsOpen,\n    onRequestClose: closeUploadModal,\n    style: uploadModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.uploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"imgCollection\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.uploadInput,\n    onChange: onFileChange,\n    multiple: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.submitBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-plus\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 15\n    }\n  }), \"Upload\")), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.previews,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 11\n    }\n  }, previews.map(function (p) {\n    return __jsx(\"img\", {\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.previewThumb,\n      src: p,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 15\n      }\n    });\n  })))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 9\n    }\n  }, \"Full Gallery\"), logged && __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.uploadBtn,\n    onClick: openUploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 11\n    }\n  }, \"Upload\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 11\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      onClick: function onClick() {\n        openModal();\n        setClickedImage(url);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 185,\n        columnNumber: 17\n      }\n    });\n  })))));\n}\n\n_s(Gallery, \"XycnJDc81DWXW8w/VaaGtAqiY80=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbInBob3RvTW9kYWxTdHlsZSIsImNvbnRlbnQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwib3ZlcmxheSIsInVwbG9hZE1vZGFsU3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIkdhbGxlcnkiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiY2xpY2tlZEltYWdlIiwic2V0Q2xpY2tlZEltYWdlIiwibW9kYWxJc09wZW4iLCJzZXRJc09wZW4iLCJ1cGxvYWRNb2RhbElzT3BlbiIsInNldFVwbG9hZE1vZGFsIiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwiaW1hZ2VzVG9VcGxvYWQiLCJzZXRJbWFnZXNUb1VwbG9hZCIsInByZXZpZXdzIiwic2V0UHJldmlld3MiLCJvbkZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwib3Blbk1vZGFsIiwib3BlblVwbG9hZE1vZGFsIiwiY2xvc2VNb2RhbCIsImNsb3NlVXBsb2FkTW9kYWwiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJvYmplY3RVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsImRhdGEiLCJzdHlsZSIsInVwbG9hZE1vZGFsIiwidXBsb2FkSW5wdXQiLCJzdWJtaXRCdG4iLCJtYXAiLCJwIiwicHJldmlld1RodW1iIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJncmlkIiwicm93cyIsInVybCIsImluZGV4IiwiZ2FsbGVyeUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxLQURBO0FBRVBDLE9BQUcsRUFBRSxLQUZFO0FBR1BDLFFBQUksRUFBRSxLQUhDO0FBSVBDLFVBQU0sRUFBRSxNQUpEO0FBS1BDLGVBQVcsRUFBRSxNQUxOO0FBTVBDLG1CQUFlLEVBQUUsYUFOVjtBQU9QQyxnQkFBWSxFQUFFLEtBUFA7QUFRUEMsZUFBVyxFQUFFO0FBUk4sR0FEYTtBQVd0QkMsU0FBTyxFQUFFO0FBQ1BILG1CQUFlLEVBQUU7QUFEVjtBQVhhLENBQXhCO0FBZ0JBLElBQU1JLGdCQUFnQixHQUFHO0FBQ3ZCVixTQUFPLEVBQUU7QUFDUFcsWUFBUSxFQUFFLFVBREg7QUFFUFQsT0FBRyxFQUFFLEtBRkU7QUFHUEMsUUFBSSxFQUFFLEtBSEM7QUFJUFMsYUFBUyxFQUFFLHVCQUpKO0FBTVBSLFVBQU0sRUFBRSxNQU5EO0FBT1BFLG1CQUFlLEVBQUUsTUFQVjtBQVFQQyxnQkFBWSxFQUFFLEtBUlA7QUFTUEMsZUFBVyxFQUFFO0FBVE4sR0FEYztBQVl2QkMsU0FBTyxFQUFFO0FBQ1BILG1CQUFlLEVBQUU7QUFEVjtBQVpjLENBQXpCO0FBaUJlLFNBQVNPLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDekJDLGFBRHlCO0FBQUEsTUFDVkMsZ0JBRFU7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRXpCRyxZQUZ5QjtBQUFBLE1BRVhDLGVBRlc7O0FBQUEsbUJBR0NKLHNEQUFRLENBQUMsS0FBRCxDQUhUO0FBQUEsTUFHekJLLFdBSHlCO0FB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S0FDRTtBQUFJLGFBQVMsRUFBRVAsb0VBQUssQ0FBQ1EsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHOUMsTUFBTSxJQUNMO0FBQUssYUFBUyxFQUFFc0Msb0VBQUssQ0FBQ1MsU0FBdEI7QUFBaUMsV0FBTyxFQUFFbEMsZUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLEVBUUU7QUFBSyxhQUFTLEVBQUV5QixvRUFBSyxDQUFDVSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVWLG9FQUFLLENBQUNXLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3pELGFBQWEsQ0FBQ2tELEdBQWQsQ0FBa0IsVUFBQ1EsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ2pDLFdBQ0U7QUFDRSxTQUFHLEVBQUVELEdBRFA7QUFFRSxlQUFTLEVBQUVaLG9FQUFLLENBQUNjLFlBRm5CO0FBR0UsU0FBRyw2QkFBc0JELEtBQXRCLENBSEw7QUFJRSxhQUFPLEVBQUUsbUJBQU07QUFDYnZDLGlCQUFTO0FBQ1RqQix1QkFBZSxDQUFDdUQsR0FBRCxDQUFmO0FBQ0QsT0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQVpBLENBREgsQ0FERixDQVJGLENBcERGLENBREY7QUFpRkQ7O0dBL0p1QjVELE87O0tBQUFBLE8iLCJmaWxlIjoiLi9wYWdlcy9nYWxsZXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc2Fzcy9HYWxsZXJ5UGFnZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG4vL21vZGFsIHN0eWxlc1xuY29uc3QgcGhvdG9Nb2RhbFN0eWxlID0ge1xuICBjb250ZW50OiB7XG4gICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgdG9wOiBcIjEwJVwiLFxuICAgIGxlZnQ6IFwiMjAlXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3KVwiLFxuICB9LFxufTtcblxuY29uc3QgdXBsb2FkTW9kYWxTdHlsZSA9IHtcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjUwJVwiLFxuICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICB9LFxuICBvdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNylcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NsaWNrZWRJbWFnZSwgc2V0Q2xpY2tlZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1cGxvYWRNb2RhbElzT3Blbiwgc2V0VXBsb2FkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbWFnZXNUb1VwbG9hZCwgc2V0SW1hZ2VzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJldmlld3MsIHNldFByZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEltYWdlc1RvVXBsb2FkKFsuLi5pbWFnZXNUb1VwbG9hZCwgZS50YXJnZXQuZmlsZXNbMF1dKTtcbiAgICBjb25zb2xlLmxvZyhpbWFnZXNUb1VwbG9hZCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBvcGVuVXBsb2FkTW9kYWwoKSB7XG4gICAgc2V0VXBsb2FkTW9kYWwodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVVwbG9hZE1vZGFsKCkge1xuICAgIHNldFVwbG9hZE1vZGFsKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpbWFnZXNUb1VwbG9hZC5mb3JFYWNoKChlKSA9PiBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZSkpO1xuICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhaXJbMV0pO1xuICAgIH1cbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwODAvYXBpL3VwbG9hZFwiLCBmb3JtRGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbWFnZXNUb1VwbG9hZC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXG4gICAgICAgIGltYWdlc1RvVXBsb2FkW2ltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDFdXG4gICAgICApO1xuICAgICAgc2V0UHJldmlld3MoWy4uLnByZXZpZXdzLCBvYmplY3RVcmxdKTtcbiAgICAgIGNvbnNvbGUubG9nKHByZXZpZXdzKTtcbiAgICB9XG4gIH0sIFtpbWFnZXNUb1VwbG9hZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9nZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicnJhbmRhbGwtYXV0aG9yaXphdGlvblwiKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwODAvaW1hZ2VzL1wiLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBzZXRHYWxsZXJ5SW1hZ2VzKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlIuUmFuZGFsbCBHYWxsZXJ5PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTQuMC9jc3MvYWxsLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUh6TGVCdWhvTlB2U2w1S1luangwQlQrV0IwUUVFcUxwck8rTkJra2s1Z2JjNjdGVGFMN1hJR2EydzFMMFhiZ2NcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgc3R5bGU9e3Bob3RvTW9kYWxTdHlsZX1cbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17Y2xpY2tlZEltYWdlfVxuICAgICAgICAgICAgYWx0PVwiZ2FsbGVyeSBtb2RhbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNsaWNrZWRJbWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXt1cGxvYWRNb2RhbElzT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVXBsb2FkTW9kYWx9XG4gICAgICAgIHN0eWxlPXt1cGxvYWRNb2RhbFN0eWxlfVxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRNb2RhbH0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWdDb2xsZWN0aW9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX1cbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuc3VibWl0QnRufT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+VXBsb2FkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByZXZpZXdzfT5cbiAgICAgICAgICAgIHtwcmV2aWV3cy5tYXAoKHApID0+IChcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLnByZXZpZXdUaHVtYn0gc3JjPXtwfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5UGFnZX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cbiAgICAgICAge2xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZEJ0bn0gb25DbGljaz17b3BlblVwbG9hZE1vZGFsfT5cbiAgICAgICAgICAgIFVwbG9hZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucm93c30+XG4gICAgICAgICAgICB7Z2FsbGVyeUltYWdlcy5tYXAoKHVybCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBhdCBpbmRleCAke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})