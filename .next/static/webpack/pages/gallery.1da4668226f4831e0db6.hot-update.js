webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ \"./sass/GalleryPage.module.scss\");\n/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/gallery.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n //modal styles\n\nvar photoModalStyle = {\n  content: {\n    width: \"60%\",\n    top: \"10%\",\n    left: \"20%\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"transparent\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nvar uploadModalStyle = {\n  content: {\n    top: \"20%\",\n    left: \"20%\",\n    bottom: \"auto\",\n    marginRight: \"-50%\",\n    backgroundColor: \"gray\",\n    borderRadius: \"8px\",\n    borderColor: \"transparent\"\n  },\n  overlay: {\n    backgroundColor: \"rgba(255, 255, 255, 0.37)\"\n  }\n};\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      galleryImages = _useState[0],\n      setGalleryImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      clickedImage = _useState2[0],\n      setClickedImage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      modalIsOpen = _useState3[0],\n      setIsOpen = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      uploadModalIsOpen = _useState4[0],\n      setUploadModal = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      logged = _useState5[0],\n      setLogged = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      imagesToUpload = _useState6[0],\n      setImagesToUpload = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      previews = _useState7[0],\n      setPreviews = _useState7[1];\n\n  var onFileChange = function onFileChange(e) {\n    setImagesToUpload([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imagesToUpload), [e.target.files[0]]));\n    console.log(imagesToUpload);\n  };\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function openUploadModal() {\n    setUploadModal(true);\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  function closeUploadModal() {\n    setUploadModal(false);\n  }\n\n  function onSubmit(e) {\n    e.preventDefault();\n    var formData = new FormData();\n    imagesToUpload.forEach(function (e) {\n      return formData.append(\"images\", e);\n    });\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var pair = _step.value;\n        console.log(pair[1]);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"http://localhost:3080/api/upload\", formData).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (imagesToUpload.length) {\n      var objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);\n      setPreviews([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(previews), [objectUrl]));\n      console.log(previews);\n    }\n  }, [imagesToUpload]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setLogged(localStorage.getItem(\"rrandall-authorization\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"http://localhost:3080/images/\", {}, {\n      headers: {\n        \"Access-Control-Allow-Origin\": \"*\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n      setGalleryImages(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  }, \"R.Randall Gallery\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://use.fontawesome.com/releases/v5.14.0/css/all.css\",\n    integrity: \"sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc\",\n    crossorigin: \"anonymous\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: photoModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: clickedImage,\n    alt: \"gallery modal\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.clickedImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 11\n    }\n  }))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    isOpen: uploadModalIsOpen,\n    onRequestClose: closeUploadModal,\n    style: uploadModalStyle,\n    contentLabel: \"Modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.uploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"imgCollection\",\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.uploadInput,\n    onChange: onFileChange,\n    multiple: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.submitBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-plus\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 15\n    }\n  }), \"Upload\")), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.previews,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 11\n    }\n  }, previews.map(function (p) {\n    return __jsx(\"img\", {\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.previewThumb,\n      src: p,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 15\n      }\n    });\n  })))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }, \"Full Gallery\"), logged && __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.uploadBtn,\n    onClick: openUploadModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 11\n    }\n  }, \"Upload\"), __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rows,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 11\n    }\n  }, galleryImages.map(function (url, index) {\n    return __jsx(\"img\", {\n      src: url,\n      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.galleryImage,\n      alt: \"picture at index \".concat(index),\n      onClick: function onClick() {\n        openModal();\n        setClickedImage(url);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 17\n      }\n    });\n  })))));\n}\n\n_s(Gallery, \"XycnJDc81DWXW8w/VaaGtAqiY80=\");\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbInBob3RvTW9kYWxTdHlsZSIsImNvbnRlbnQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwib3ZlcmxheSIsInVwbG9hZE1vZGFsU3R5bGUiLCJHYWxsZXJ5IiwidXNlU3RhdGUiLCJnYWxsZXJ5SW1hZ2VzIiwic2V0R2FsbGVyeUltYWdlcyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsIm1vZGFsSXNPcGVuIiwic2V0SXNPcGVuIiwidXBsb2FkTW9kYWxJc09wZW4iLCJzZXRVcGxvYWRNb2RhbCIsImxvZ2dlZCIsInNldExvZ2dlZCIsImltYWdlc1RvVXBsb2FkIiwic2V0SW1hZ2VzVG9VcGxvYWQiLCJwcmV2aWV3cyIsInNldFByZXZpZXdzIiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsIm9wZW5Nb2RhbCIsIm9wZW5VcGxvYWRNb2RhbCIsImNsb3NlTW9kYWwiLCJjbG9zZVVwbG9hZE1vZGFsIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZXJyIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwib2JqZWN0VXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJkYXRhIiwic3R5bGUiLCJ1cGxvYWRNb2RhbCIsInVwbG9hZElucHV0Iiwic3VibWl0QnRuIiwibWFwIiwicCIsInByZXZpZXdUaHVtYiIsImdhbGxlcnlQYWdlIiwiZ2FsbGVyeVRpdGxlIiwidXBsb2Fk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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUc5QyxNQUFNLElBQ0w7QUFBSyxhQUFTLEVBQUVzQyxvRUFBSyxDQUFDUyxTQUF0QjtBQUFpQyxXQUFPLEVBQUVsQyxlQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosRUFRRTtBQUFLLGFBQVMsRUFBRXlCLG9FQUFLLENBQUNVLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVYsb0VBQUssQ0FBQ1csSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHekQsYUFBYSxDQUFDa0QsR0FBZCxDQUFrQixVQUFDUSxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDakMsV0FDRTtBQUNFLFNBQUcsRUFBRUQsR0FEUDtBQUVFLGVBQVMsRUFBRVosb0VBQUssQ0FBQ2MsWUFGbkI7QUFHRSxTQUFHLDZCQUFzQkQsS0FBdEIsQ0FITDtBQUlFLGFBQU8sRUFBRSxtQkFBTTtBQUNidkMsaUJBQVM7QUFDVGpCLHVCQUFlLENBQUN1RCxHQUFELENBQWY7QUFDRCxPQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBWkEsQ0FESCxDQURGLENBUkYsQ0FwREYsQ0FERjtBQWlGRDs7R0EvSnVCNUQsTzs7S0FBQUEsTyIsImZpbGUiOiIuL3BhZ2VzL2dhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vbW9kYWwgc3R5bGVzXG5jb25zdCBwaG90b01vZGFsU3R5bGUgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB3aWR0aDogXCI2MCVcIixcbiAgICB0b3A6IFwiMTAlXCIsXG4gICAgbGVmdDogXCIyMCVcIixcbiAgICBib3R0b206IFwiYXV0b1wiLFxuICAgIG1hcmdpblJpZ2h0OiBcIi01MCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpXCIsXG4gIH0sXG59O1xuXG5jb25zdCB1cGxvYWRNb2RhbFN0eWxlID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiBcIjIwJVwiLFxuICAgIGxlZnQ6IFwiMjAlXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xuICBjb25zdCBbZ2FsbGVyeUltYWdlcywgc2V0R2FsbGVyeUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjbGlja2VkSW1hZ2UsIHNldENsaWNrZWRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXBsb2FkTW9kYWxJc09wZW4sIHNldFVwbG9hZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW1hZ2VzVG9VcGxvYWQsIHNldEltYWdlc1RvVXBsb2FkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ByZXZpZXdzLCBzZXRQcmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbWFnZXNUb1VwbG9hZChbLi4uaW1hZ2VzVG9VcGxvYWQsIGUudGFyZ2V0LmZpbGVzWzBdXSk7XG4gICAgY29uc29sZS5sb2coaW1hZ2VzVG9VcGxvYWQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBzZXRJc09wZW4odHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gb3BlblVwbG9hZE1vZGFsKCkge1xuICAgIHNldFVwbG9hZE1vZGFsKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VVcGxvYWRNb2RhbCgpIHtcbiAgICBzZXRVcGxvYWRNb2RhbChmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaW1hZ2VzVG9VcGxvYWQuZm9yRWFjaCgoZSkgPT4gZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VzXCIsIGUpKTtcbiAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICBjb25zb2xlLmxvZyhwYWlyWzFdKTtcbiAgICB9XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDgwL2FwaS91cGxvYWRcIiwgZm9ybURhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoKSB7XG4gICAgICBjb25zdCBvYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKFxuICAgICAgICBpbWFnZXNUb1VwbG9hZFtpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxXVxuICAgICAgKTtcbiAgICAgIHNldFByZXZpZXdzKFsuLi5wcmV2aWV3cywgb2JqZWN0VXJsXSk7XG4gICAgICBjb25zb2xlLmxvZyhwcmV2aWV3cyk7XG4gICAgfVxuICB9LCBbaW1hZ2VzVG9VcGxvYWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJyYW5kYWxsLWF1dGhvcml6YXRpb25cIikpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDgwL2ltYWdlcy9cIixcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgc2V0R2FsbGVyeUltYWdlcyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SLlJhbmRhbGwgR2FsbGVyeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE0LjAvY3NzL2FsbC5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1IekxlQnVob05QdlNsNUtZbmp4MEJUK1dCMFFFRXFMcHJPK05Ca2trNWdiYzY3RlRhTDdYSUdhMncxTDBYYmdjXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgIHN0eWxlPXtwaG90b01vZGFsU3R5bGV9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2NsaWNrZWRJbWFnZX1cbiAgICAgICAgICAgIGFsdD1cImdhbGxlcnkgbW9kYWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jbGlja2VkSW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17dXBsb2FkTW9kYWxJc09wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZVVwbG9hZE1vZGFsfVxuICAgICAgICBzdHlsZT17dXBsb2FkTW9kYWxTdHlsZX1cbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkTW9kYWx9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBuYW1lPVwiaW1nQ29sbGVjdGlvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudXBsb2FkSW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLnN1Ym1pdEJ0bn0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPlVwbG9hZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcmV2aWV3c30+XG4gICAgICAgICAgICB7cHJldmlld3MubWFwKChwKSA9PiAoXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5wcmV2aWV3VGh1bWJ9IHNyYz17cH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVBhZ2V9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5VGl0bGV9PkZ1bGwgR2FsbGVyeTwvaDI+XG4gICAgICAgIHtsb2dnZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRCdG59IG9uQ2xpY2s9e29wZW5VcGxvYWRNb2RhbH0+XG4gICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJvd3N9PlxuICAgICAgICAgICAge2dhbGxlcnlJbWFnZXMubWFwKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlJbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKHVybCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})