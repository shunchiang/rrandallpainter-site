webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_EditBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EditBtn */ "./components/EditBtn.js");
/* harmony import */ var _components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal_EditTags */ "./components/Modal_EditTags.js");
/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ "./sass/GalleryPage.module.scss");
/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/times-circle-solid.png */ "./images/times-circle-solid.png");
/* harmony import */ var _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/modalStyles */ "./utils/modalStyles.js");


var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\pages\\gallery.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













react_modal__WEBPACK_IMPORTED_MODULE_8___default.a.setAppElement("body");
function Gallery() {
  _s();

  var _this = this;

  // windowSize custom hook
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__["default"])(); //state declarations

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      galleryImages = _useState[0],
      setGalleryImages = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      galleryTags = _useState2[0],
      setGalleryTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      clickedImage = _useState3[0],
      setClickedImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      clickedImageId = _useState4[0],
      setClickedImageId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      publicIds = _useState5[0],
      setPublicIds = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState6[0],
      setIsOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      uploadModalIsOpen = _useState7[0],
      setUploadModal = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      tagsModalIsOpen = _useState8[0],
      setTagsModal = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      logged = _useState9[0],
      setLogged = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      imagesToUpload = _useState10[0],
      setImagesToUpload = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      clickedDone = _useState11[0],
      setClickedDone = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      stagedImageIndex = _useState12[0],
      setStagedImageIndex = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      preview = _useState13[0],
      setPreview = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      thumbs = _useState14[0],
      setThumbs = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      addingImage = _useState15[0],
      setAddingImage = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tags = _useState16[0],
      setTags = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      inputKey = _useState17[0],
      setInputkey = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("All"),
      category = _useState18[0],
      setActiveCategory = _useState18[1]; //variable and function declarations


  var allTags = ["Residential", "Commercial", "Interior", "Exterior", "Cabinets"];
  var allCategories = ["All"].concat(allTags);
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_7___default.a.create({
    withCredentials: true
  }); //Modal functions

  function openModal() {
    setIsOpen(true);
  }

  function openUploadModal() {
    setUploadModal(true);
  }

  function openTagsModal() {
    setTagsModal(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeUploadModal() {
    setUploadModal(false);
  }

  function closeTagsModal() {
    setTagsModal(false);
  } //tagging functions


  function addTag(t, i) {
    if (!tags[i]) {
      setTags([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tags), [tags[i] = [t]]));
    } else {
      var temp = tags[i];
      setTags(tags.map(function (arr, index) {
        if (index == i) {
          return arr[i] = temp.concat(t);
        } else {
          return arr;
        }
      }));
    }
  }

  function cancelTag(t, i) {
    setTags(tags.map(function (arr, index) {
      if (index === i) {
        return arr.filter(function (tag) {
          return tag !== t;
        });
      } else {
        return arr;
      }
    }));
  } // toast functions


  var successToast = function successToast() {
    return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success(" Upload Success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.toastSuccess
    });
  };

  var errorToast = function errorToast() {
    return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Upload error, please refresh", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  var warningToast = function warningToast() {
    return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].warn("No images selected", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }; // file functions


  var resetInput = function resetInput() {
    var sign = Date.now();
    setInputkey(sign);
  };

  var onFileChange = function onFileChange(e) {
    setClickedDone(false);
    setAddingImage(true);
    setImagesToUpload([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(imagesToUpload), [e.target.files[0]]));
    setStagedImageIndex(imagesToUpload.length - 1);
  };

  function deleteUpload(i) {
    if (thumbs.length > 1) {
      if (preview === thumbs[i]) {
        setPreview(thumbs[i - 1]);
      }

      var temp1 = thumbs.splice(i, 1);
      var temp2 = imagesToUpload.splice(i, 1);
      var temp3 = tags.splice(i, 1);
      setThumbs(thumbs.filter(function (el) {
        return el !== temp1;
      }));
      setImagesToUpload(imagesToUpload.filter(function (el) {
        return el !== temp2.splice(i, 1);
      }));
      setTags(tags.filter(function (t) {
        return t !== temp3;
      }));
      setAddingImage(false);
    } else {
      setTags([]);
      setThumbs([]);
      setImagesToUpload([]);
      setPreview(null);
      console.log("preview", preview);
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!imagesToUpload.length) {
      return warningToast();
    }

    var formData = new FormData();
    imagesToUpload.forEach(function (e, i) {
      formData.append("images", e);
      formData.append("tags", tags[i]);
      console.log(tags[i]);
    });

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

    axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/upload", formData).then(function (res) {
      console.log(res);
      successToast();
      closeUploadModal();
      setPreview(null);
      setImagesToUpload([]);
    })["catch"](function (err) {
      console.log(err);
      errorToast();
    });
  } // Side effects


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (imagesToUpload.length && addingImage === true) {
      var objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);
      setPreview(objectUrl);
      setStagedImageIndex(imagesToUpload.length - 1);
      setAddingImage(false);
      console.log("***", imagesToUpload);
    }
  }, [imagesToUpload]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLogged(localStorage.getItem("rrandall-authorization"));
    axiosInstance.get("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/search").then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []); //initialize

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/", {}).then(function (res) {
      console.log(res.data);
      setGalleryImages(res.data.map(function (a, i) {
        return {
          id: i,
          url: a
        };
      }));
      return axiosInstance.get("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/");
    }).then(function (res) {
      console.log(res.data);
      setPublicIds(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data));
      return axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags", {
        ids: res.data
      });
    }).then(function (res) {
      console.log("**tags", res.data);
      setGalleryTags(res.data);
    })["catch"](function (err) {
      return console.log("cannot get tags", err);
    })["catch"](function (err) {
      console.log("cannot GET", err);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (galleryTags.length > 0) {
      setGalleryImages(galleryImages.map(function (a, i) {
        return {
          id: a.id,
          url: a.url,
          tags: galleryTags[i]
        };
      }));
    }
  }, [galleryTags]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, "R.Randall Gallery"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
    integrity: "sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["photoModalStyle"],
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: clickedImage,
    alt: "gallery modal",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.clickedImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: uploadModalIsOpen,
    onRequestClose: closeUploadModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["uploadModalStyle"],
    contentLabel: "Modal",
    id: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 11
    }
  }, __jsx("input", {
    key: inputKey || "",
    type: "file",
    name: "imgCollection",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadInput,
    onChange: onFileChange,
    multiple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.submitBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 15
    }
  }), "Upload")), __jsx("div", {
    className: preview ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previews : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 11
    }
  }, preview && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.staging,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagsTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 19
    }
  }, "Tags"), !tags[stagedImageIndex] ? allTags.map(function (t) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagRow,
      onClick: function onClick() {
        addTag(t, stagedImageIndex);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 27
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 27
      }
    }, t));
  }) : allTags.filter(function (t) {
    for (var i = 0; i < tags[stagedImageIndex].length; i++) {
      if (t === tags[stagedImageIndex][i]) {
        return false;
      }
    }

    return true;
  }).map(function (t) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagRow,
      onClick: function onClick() {
        addTag(t, stagedImageIndex);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 29
      }
    }, t));
  }), __jsx("button", {
    disabled: !tags[stagedImageIndex] || clickedDone ? "disabled" : null,
    className: tags[stagedImageIndex] ? tags[stagedImageIndex].length === 0 ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.disable : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.doneBtn : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.disable,
    onClick: function onClick() {
      setThumbs([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(thumbs), [preview]));
      setClickedDone(true);
      resetInput();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 19
    }
  }, "Done")), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.StagingPicDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 17
    }
  }, preview && __jsx("img", {
    style: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stagingPic,
    src: preview,
    alt: "staging preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 19
    }
  }, tags[stagedImageIndex] && tags[stagedImageIndex].map(function (t) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagRow,
      onClick: function onClick() {
        cancelTag(t, stagedImageIndex);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.taggedIcon, " fas fa-times"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagged,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 27
      }
    }, t));
  })))), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mainthumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 13
    }
  }, thumbs.length > 0 && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 17
    }
  }, __jsx("label", {
    "for": "file-upload",
    "class": "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 21
    }
  }, "Add More"), __jsx("i", {
    className: "fas fa-plus ".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.plusIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 21
    }
  })), __jsx("input", {
    id: "file-upload",
    type: "file",
    onChange: onFileChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 19
    }
  })), thumbs.length > 0 && thumbs.map(function (p, i) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
      onClick: function onClick() {
        setStagedImageIndex(i);
        thumbs.length > 1 && setPreview(thumbs[i]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 19
      }
    }, __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.crossIcon,
      onClick: function onClick() {
        deleteUpload(i);
      },
      src: _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      alt: "exit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 21
      }
    }), __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previewThumb,
      src: p,
      tabIndex: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 21
      }
    }));
  }))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: tagsModalIsOpen,
    onRequestClose: closeTagsModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["tagsModalStyle"],
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 7
    }
  }, __jsx(_components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: clickedImage,
    id: clickedImageId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 9
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 9
    }
  }, "Full Gallery"), logged && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadBtn,
    onClick: openUploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 11
    }
  }, "Upload"), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 9
    }
  }, allCategories.map(function (c, i) {
    return __jsx("div", {
      className: category === c ? "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagBtn, " ").concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTagBtn) : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagBtn,
      onClick: function onClick() {
        setActiveCategory(c);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 15
      }
    }, c);
  })), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rows,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 11
    }
  }, category === "All" ? galleryImages.map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: el.url,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryImage,
      alt: "picture at index ".concat(index),
      onClick: function onClick() {
        openModal();
        setClickedImage(el.url);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 23
      }
    }), __jsx("div", {
      onClick: function onClick() {
        openTagsModal();
        setClickedImage(el.url);
        setClickedImageId(publicIds[index]);
        console.log(clickedImageId);
        console.log("Public IDs");
        console.log(publicIds);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 23
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 25
      }
    })));
  }) : category !== "ALL" && galleryTags.length > 0 ? galleryImages.filter(function (el) {
    return el.tags.includes(category.toLowerCase());
  }).map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: el.url,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryImage,
      alt: "picture at index ".concat(index),
      onClick: function onClick() {
        openModal();
        setClickedImage(el.url);
        setClickedImageId(publicIds[index]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 25
      }
    }), __jsx("div", {
      onClick: function onClick() {
        openTagsModal();
        setClickedImage(el.url);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 25
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 27
      }
    })));
  }) : null))));
}

_s(Gallery, "u7stnRryNQ2wu7zU5XftTl/Ye30=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = Gallery;

var _c;

$RefreshReg$(_c, "Gallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJwdWJsaWNJZHMiLCJzZXRQdWJsaWNJZHMiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJ0YWdzTW9kYWxJc09wZW4iLCJzZXRUYWdzTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwiY2xpY2tlZERvbmUiLCJzZXRDbGlja2VkRG9uZSIsInN0YWdlZEltYWdlSW5kZXgiLCJzZXRTdGFnZWRJbWFnZUluZGV4IiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aHVtYnMiLCJzZXRUaHVtYnMiLCJhZGRpbmdJbWFnZSIsInNldEFkZGluZ0ltYWdlIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEtleSIsInNldElucHV0a2V5IiwiY2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFsbFRhZ3MiLCJhbGxDYXRlZ29yaWVzIiwiY29uY2F0IiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwid2l0aENyZWRlbnRpYWxzIiwib3Blbk1vZGFsIiwib3BlblVwbG9hZE1vZGFsIiwib3BlblRhZ3NNb2RhbCIsImNsb3NlTW9kYWwiLCJjbG9zZVVwbG9hZE1vZGFsIiwiY2xvc2VUYWdzTW9kYWwiLCJhZGRUYWciLCJ0IiwiaSIsInRlbXAiLCJtYXAiLCJhcnIiLCJpbmRleCIsImNhbmNlbFRhZyIsImZpbHRlciIsInRhZyIsInN1Y2Nlc3NUb2FzdCIsInRvYXN0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRvYXN0U3VjY2VzcyIsImVycm9yVG9hc3QiLCJlcnJvciIsIndhcm5pbmdUb2FzdCIsIndhcm4iLCJyZXNldElucHV0Iiwic2lnbiIsIkRhdGUiLCJub3ciLCJvbkZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJkZWxldGVVcGxvYWQiLCJ0ZW1wMSIsInNwbGljZSIsInRlbXAyIiwidGVtcDMiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZXJyIiwidXNlRWZmZWN0Iiwib2JqZWN0VXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsImRhdGEiLCJhIiwiaWQiLCJ1cmwiLCJpZHMiLCJwaG90b01vZGFsU3R5bGUiLCJ1cGxvYWRNb2RhbFN0eWxlIiwidXBsb2FkTW9kYWwiLCJ1cGxvYWRJbnB1dCIsInN1Ym1pdEJ0biIsInByZXZpZXdzIiwic3RhZ2luZyIsInRhZ3NUaXRsZSIsInRhZ1JvdyIsImRpc2FibGUiLCJkb25lQnRuIiwiU3RhZ2luZ1BpY0RpdiIsInN0YWdpbmdQaWMiLCJhY3RpdmVUYWdzIiwidGFnZ2VkSWNvbiIsInRhZ2dlZCIsIm1haW50aHVtYnNEaXYiLCJ0aHVtYnNEaXYiLCJwbHVzSWNvbiIsInAiLCJjcm9zc0ljb24iLCJjYW5jZWxJY29uIiwicHJldmlld1RodW1iIiwidGFnc01vZGFsU3R5bGUiLCJnYWxsZXJ5UGFnZSIsImdhbGxlcnlUaXRsZSIsInVwbG9hZEJ0biIsImNhdGVnb3JpZXMiLCJjIiwidGFnQnRuIiwiYWN0aXZlVGFnQnRuIiwiZ3JpZCIsInJvd3MiLCJpdGVtIiwiZ2FsbGVyeUltYWdlIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUFBLGtEQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEI7QUFFZSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQ2hDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxxRUFBYSxFQUExQixDQUZnQyxDQUloQzs7QUFKZ0Msa0JBS1VDLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS3pCQyxhQUx5QjtBQUFBLE1BS1ZDLGdCQUxVOztBQUFBLG1CQU1NRixzREFBUSxDQUFDLEVBQUQsQ0FOZDtBQUFBLE1BTXpCRyxXQU55QjtBQUFBLE1BTVpDLGNBTlk7O0FBQUEsbUJBT1FKLHNEQUFRLENBQUMsRUFBRCxDQVBoQjtBQUFBLE1BT3pCSyxZQVB5QjtBQUFBLE1BT1hDLGVBUFc7O0FBQUEsbUJBUVlOLHNEQUFRLENBQUMsRUFBRCxDQVJwQjtBQUFBLE1BUXpCTyxjQVJ5QjtBQUFBLE1BUVRDLGlCQVJTOztBQUFBLG1CQVNFUixzREFBUSxDQUFDLEVBQUQsQ0FUVjtBQUFBLE1BU3pCUyxTQVR5QjtBQUFBLE1BU2RDLFlBVGM7O0FBQUEsbUJBVUNWLHNEQUFRLENBQUMsS0FBRCxDQVZUO0FBQUEsTUFVekJXLFdBVnlCO0FBQUEsTUFVWkMsU0FWWTs7QUFBQSxtQkFXWVosc0RBQVEsQ0FBQyxLQUFELENBWHBCO0FBQUEsTUFXekJhLGlCQVh5QjtBQUFBLE1BV05DLGNBWE07O0FBQUEsbUJBWVFkLHNEQUFRLENB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Q2dGLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBRTVELEVBQUUsQ0FBQ3lCLEdBRFY7QUFFRSxlQUFTLEVBQUU3QyxvRUFBSyxDQUFDaUYsWUFGbkI7QUFHRSxTQUFHLDZCQUFzQmpHLEtBQXRCLENBSEw7QUFJRSxhQUFPLEVBQUUsbUJBQU07QUFDYlosaUJBQVM7QUFDVHRDLHVCQUFlLENBQUNzRixFQUFFLENBQUN5QixHQUFKLENBQWY7QUFDQTdHLHlCQUFpQixDQUFDQyxTQUFTLENBQUMrQyxLQUFELENBQVYsQ0FBakI7QUFDRCxPQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVdFO0FBQUssYUFBTyxFQUFFLG1CQUFNO0FBQ2xCVixxQkFBYTtBQUNieEMsdUJBQWUsQ0FBQ3NGLEVBQUUsQ0FBQ3lCLEdBQUosQ0FBZjtBQUNDLE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBWEYsQ0FERjtBQW9CRCxHQXpCSCxDQURBLEdBMkJBLElBdEROLENBREYsQ0F6QkYsQ0FoTEYsQ0FERjtBQXVRRDs7R0EzaEJ1QnhILE87VUFFVEUsNkQ7OztLQUZTRixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuZTIzOTZmMjY2MzgxNmQxN2M4MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgRWRpdEJ0biBmcm9tIFwiLi4vY29tcG9uZW50cy9FZGl0QnRuXCI7XHJcbmltcG9ydCBFZGl0VGFncyBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFnc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3Nhc3MvR2FsbGVyeVBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGNhbmNlbEljb24gZnJvbSBcIi4uL2ltYWdlcy90aW1lcy1jaXJjbGUtc29saWQucG5nXCI7XHJcblxyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvdXNlV2luZG93U2l6ZVwiO1xyXG5cclxuaW1wb3J0IHsgcGhvdG9Nb2RhbFN0eWxlLCB1cGxvYWRNb2RhbFN0eWxlLCB0YWdzTW9kYWxTdHlsZSB9IGZyb20gXCIuLi91dGlscy9tb2RhbFN0eWxlc1wiO1xyXG5cclxuTW9kYWwuc2V0QXBwRWxlbWVudChcImJvZHlcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xyXG4gIC8vIHdpbmRvd1NpemUgY3VzdG9tIGhvb2tcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICAvL3N0YXRlIGRlY2xhcmF0aW9uc1xyXG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FsbGVyeVRhZ3MsIHNldEdhbGxlcnlUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2xpY2tlZEltYWdlLCBzZXRDbGlja2VkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NsaWNrZWRJbWFnZUlkLCBzZXRDbGlja2VkSW1hZ2VJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVibGljSWRzLCBzZXRQdWJsaWNJZHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRNb2RhbElzT3Blbiwgc2V0VXBsb2FkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YWdzTW9kYWxJc09wZW4sIHNldFRhZ3NNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZXNUb1VwbG9hZCwgc2V0SW1hZ2VzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjbGlja2VkRG9uZSwgc2V0Q2xpY2tlZERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdGFnZWRJbWFnZUluZGV4LCBzZXRTdGFnZWRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aHVtYnMsIHNldFRodW1ic10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FkZGluZ0ltYWdlLCBzZXRBZGRpbmdJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnB1dEtleSwgc2V0SW5wdXRrZXldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG5cclxuICAvL3ZhcmlhYmxlIGFuZCBmdW5jdGlvbiBkZWNsYXJhdGlvbnNcclxuICBjb25zdCBhbGxUYWdzID0gW1xyXG4gICAgXCJSZXNpZGVudGlhbFwiLFxyXG4gICAgXCJDb21tZXJjaWFsXCIsXHJcbiAgICBcIkludGVyaW9yXCIsXHJcbiAgICBcIkV4dGVyaW9yXCIsXHJcbiAgICBcIkNhYmluZXRzXCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFtcIkFsbFwiXS5jb25jYXQoYWxsVGFncyk7XHJcblxyXG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICAvL01vZGFsIGZ1bmN0aW9uc1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5VcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblRhZ3NNb2RhbCgpIHtcclxuICAgIHNldFRhZ3NNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VVcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlVGFnc01vZGFsKCkge1xyXG4gICAgc2V0VGFnc01vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vdGFnZ2luZyBmdW5jdGlvbnNcclxuXHJcbiAgZnVuY3Rpb24gYWRkVGFnKHQsIGkpIHtcclxuICAgIGlmICghdGFnc1tpXSkge1xyXG4gICAgICBzZXRUYWdzKFsuLi50YWdzLCAodGFnc1tpXSA9IFt0XSldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSB0YWdzW2ldO1xyXG4gICAgICBzZXRUYWdzKFxyXG4gICAgICAgIHRhZ3MubWFwKChhcnIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPT0gaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFycltpXSA9IHRlbXAuY29uY2F0KHQpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbFRhZyh0LCBpKSB7XHJcbiAgICBzZXRUYWdzKFxyXG4gICAgICB0YWdzLm1hcCgoYXJyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSB0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9hc3QgZnVuY3Rpb25zXHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiIFVwbG9hZCBTdWNjZXNzXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgY2xhc3NOYW1lOiBzdHlsZS50b2FzdFN1Y2Nlc3MsXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgZXJyb3JUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5lcnJvcihcIlVwbG9hZCBlcnJvciwgcGxlYXNlIHJlZnJlc2hcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHdhcm5pbmdUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC53YXJuKFwiTm8gaW1hZ2VzIHNlbGVjdGVkXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAvLyBmaWxlIGZ1bmN0aW9uc1xyXG4gIGNvbnN0IHJlc2V0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2lnbiA9IERhdGUubm93KCk7XHJcbiAgICBzZXRJbnB1dGtleShzaWduKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRG9uZShmYWxzZSk7XHJcbiAgICBzZXRBZGRpbmdJbWFnZSh0cnVlKTtcclxuICAgIHNldEltYWdlc1RvVXBsb2FkKFsuLi5pbWFnZXNUb1VwbG9hZCwgZS50YXJnZXQuZmlsZXNbMF1dKTtcclxuICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVXBsb2FkKGkpIHtcclxuICAgIGlmICh0aHVtYnMubGVuZ3RoID4gMSkge1xyXG4gICAgICBpZiAocHJldmlldyA9PT0gdGh1bWJzW2ldKSB7XHJcbiAgICAgICAgc2V0UHJldmlldyh0aHVtYnNbaSAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZW1wMSA9IHRodW1icy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGNvbnN0IHRlbXAyID0gaW1hZ2VzVG9VcGxvYWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICBjb25zdCB0ZW1wMyA9IHRhZ3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBzZXRUaHVtYnModGh1bWJzLmZpbHRlcigoZWwpID0+IGVsICE9PSB0ZW1wMSkpO1xyXG4gICAgICBzZXRJbWFnZXNUb1VwbG9hZChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGVtcDIuc3BsaWNlKGksIDEpKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRUYWdzKHRhZ3MuZmlsdGVyKCh0KSA9PiB0ICE9PSB0ZW1wMykpO1xyXG4gICAgICBzZXRBZGRpbmdJbWFnZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUYWdzKFtdKTtcclxuICAgICAgc2V0VGh1bWJzKFtdKTtcclxuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoW10pO1xyXG4gICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInByZXZpZXdcIiwgcHJldmlldyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWltYWdlc1RvVXBsb2FkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gd2FybmluZ1RvYXN0KCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VzVG9VcGxvYWQuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRhZ3NcIiwgdGFnc1tpXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhZ3NbaV0pO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhaXJbMV0sIHBhaXJbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS91cGxvYWRcIixcclxuICAgICAgICBmb3JtRGF0YVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHN1Y2Nlc3NUb2FzdCgpO1xyXG4gICAgICAgIGNsb3NlVXBsb2FkTW9kYWwoKTtcclxuICAgICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICAgIHNldEltYWdlc1RvVXBsb2FkKFtdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGVycm9yVG9hc3QoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBTaWRlIGVmZmVjdHNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbWFnZXNUb1VwbG9hZC5sZW5ndGggJiYgYWRkaW5nSW1hZ2UgPT09IHRydWUpIHtcclxuICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZFtpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxXVxyXG4gICAgICApO1xyXG4gICAgICBzZXRQcmV2aWV3KG9iamVjdFVybCk7XHJcbiAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coXCIqKipcIiwgaW1hZ2VzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZXNUb1VwbG9hZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicnJhbmRhbGwtYXV0aG9yaXphdGlvblwiKSk7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9zZWFyY2hcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vaW5pdGlhbGl6ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCIsXHJcbiAgICAgICAge31cclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgICByZXMuZGF0YS5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGksIHVybDogYSB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldFB1YmxpY0lkcyhbLi4ucmVzLmRhdGFdKTtcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5wb3N0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS90YWdzXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkczogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKip0YWdzXCIsIHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRHYWxsZXJ5VGFncyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgdGFnc1wiLCBlcnIpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IEdFVFwiLCBlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChnYWxsZXJ5VGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgZ2FsbGVyeUltYWdlcy5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGlkOiBhLmlkLCB1cmw6IGEudXJsLCB0YWdzOiBnYWxsZXJ5VGFnc1tpXSB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2dhbGxlcnlUYWdzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Ui5SYW5kYWxsIEdhbGxlcnk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE0LjAvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUh6TGVCdWhvTlB2U2w1S1luangwQlQrV0IwUUVFcUxwck8rTkJra2s1Z2JjNjdGVGFMN1hJR2EydzFMMFhiZ2NcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3Bob3RvTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2NsaWNrZWRJbWFnZX1cclxuICAgICAgICAgIGFsdD1cImdhbGxlcnkgbW9kYWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jbGlja2VkSW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXt1cGxvYWRNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VVcGxvYWRNb2RhbH1cclxuICAgICAgICBzdHlsZT17dXBsb2FkTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgICAgaWQ9e3N0eWxlLnVwbG9hZE1vZGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZE1vZGFsfT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17aW5wdXRLZXkgfHwgXCJcIn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltZ0NvbGxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudXBsb2FkSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuc3VibWl0QnRufT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT5VcGxvYWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJldmlldyA/IHN0eWxlLnByZXZpZXdzIDogbnVsbH0+XHJcbiAgICAgICAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RhZ2luZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGFnc30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnc1RpdGxlfT5UYWdzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgeyF0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhbGxUYWdzLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWxsVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1baV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIXRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gfHwgY2xpY2tlZERvbmUgPyBcImRpc2FibGVkXCIgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlLmRpc2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLmRvbmVCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5kaXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRodW1icyhbLi4udGh1bWJzLCBwcmV2aWV3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkRG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlN0YWdpbmdQaWNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnN0YWdpbmdQaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzdGFnaW5nIHByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c3R5bGUudGFnZ2VkSWNvbn0gZmFzIGZhLXRpbWVzYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnZ2VkfT57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWludGh1bWJzRGl2fT5cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRodW1ic0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QWRkIE1vcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLXBsdXMgJHtzdHlsZS5wbHVzSWNvbn1gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGUtdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIHRodW1icy5tYXAoKHAsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGh1bWJzRGl2fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aHVtYnMubGVuZ3RoID4gMSAmJiBzZXRQcmV2aWV3KHRodW1ic1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY3Jvc3NJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcGxvYWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYW5jZWxJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUucHJldmlld1RodW1ifSBzcmM9e3B9IHRhYkluZGV4PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e3RhZ3NNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VUYWdzTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3RhZ3NNb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxFZGl0VGFncyBpbWc9e2NsaWNrZWRJbWFnZX0gaWQ9e2NsaWNrZWRJbWFnZUlkfS8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlQYWdlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5VGl0bGV9PkZ1bGwgR2FsbGVyeTwvaDI+XHJcbiAgICAgICAge2xvZ2dlZCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkQnRufSBvbkNsaWNrPXtvcGVuVXBsb2FkTW9kYWx9PlxyXG4gICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IGNcclxuICAgICAgICAgICAgICAgICAgICA/IGAke3N0eWxlLnRhZ0J0bn0gJHtzdHlsZS5hY3RpdmVUYWdCdG59YFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3R5bGUudGFnQnRuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUNhdGVnb3J5KGMpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cclxuICAgICAgICAgICAge2NhdGVnb3J5ID09PSBcIkFsbFwiXHJcbiAgICAgICAgICAgICAgPyBnYWxsZXJ5SW1hZ2VzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblRhZ3NNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNJZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRJbWFnZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlB1YmxpYyBJRHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHVibGljSWRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IGNhdGVnb3J5ICE9PSBcIkFMTFwiICYmIGdhbGxlcnlUYWdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IGdhbGxlcnlJbWFnZXNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwudGFncy5pbmNsdWRlcyhjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNJZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5UYWdzTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==