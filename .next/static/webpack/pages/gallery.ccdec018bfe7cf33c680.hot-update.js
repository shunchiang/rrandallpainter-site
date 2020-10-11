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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      uploadModalIsOpen = _useState5[0],
      setUploadModal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      tagsModalIsOpen = _useState6[0],
      setTagsModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      logged = _useState7[0],
      setLogged = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      imagesToUpload = _useState8[0],
      setImagesToUpload = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      clickedDone = _useState9[0],
      setClickedDone = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      stagedImageIndex = _useState10[0],
      setStagedImageIndex = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      preview = _useState11[0],
      setPreview = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      thumbs = _useState12[0],
      setThumbs = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      addingImage = _useState13[0],
      setAddingImage = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tags = _useState14[0],
      setTags = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      inputKey = _useState15[0],
      setInputkey = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("All"),
      category = _useState16[0],
      setActiveCategory = _useState16[1]; //variable and function declarations


  var allTags = ["Residential", "Commercial", "Interior", "Exterior", "Cabinets"];
  var allCategories = ["All"].concat(allTags);
  var public_ids = [];
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
      public_ids = res.data;
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
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 23
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      img: el.url,
      id: public_ids[index],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
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
        lineNumber: 528,
        columnNumber: 23
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
        lineNumber: 529,
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
        lineNumber: 538,
        columnNumber: 25
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 27
      }
    })));
  }) : null))));
}

_s(Gallery, "BYEpebsxDQdMAZLXNwHYPMp2uQk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsIm1vZGFsSXNPcGVuIiwic2V0SXNPcGVuIiwidXBsb2FkTW9kYWxJc09wZW4iLCJzZXRVcGxvYWRNb2RhbCIsInRhZ3NNb2RhbElzT3BlbiIsInNldFRhZ3NNb2RhbCIsImxvZ2dlZCIsInNldExvZ2dlZCIsImltYWdlc1RvVXBsb2FkIiwic2V0SW1hZ2VzVG9VcGxvYWQiLCJjbGlja2VkRG9uZSIsInNldENsaWNrZWREb25lIiwic3RhZ2VkSW1hZ2VJbmRleCIsInNldFN0YWdlZEltYWdlSW5kZXgiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsInRodW1icyIsInNldFRodW1icyIsImFkZGluZ0ltYWdlIiwic2V0QWRkaW5nSW1hZ2UiLCJ0YWdzIiwic2V0VGFncyIsImlucHV0S2V5Iiwic2V0SW5wdXRrZXkiLCJjYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5IiwiYWxsVGFncyIsImFsbENhdGVnb3JpZXMiLCJjb25jYXQiLCJwdWJsaWNfaWRzIiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwid2l0aENyZWRlbnRpYWxzIiwib3Blbk1vZGFsIiwib3BlblVwbG9hZE1vZGFsIiwib3BlblRhZ3NNb2RhbCIsImNsb3NlTW9kYWwiLCJjbG9zZVVwbG9hZE1vZGFsIiwiY2xvc2VUYWdzTW9kYWwiLCJhZGRUYWciLCJ0IiwiaSIsInRlbXAiLCJtYXAiLCJhcnIiLCJpbmRleCIsImNhbmNlbFRhZyIsImZpbHRlciIsInRhZyIsInN1Y2Nlc3NUb2FzdCIsInRvYXN0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRvYXN0U3VjY2VzcyIsImVycm9yVG9hc3QiLCJlcnJvciIsIndhcm5pbmdUb2FzdCIsIndhcm4iLCJyZXNldElucHV0Iiwic2lnbiIsIkRhdGUiLCJub3ciLCJvbkZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJkZWxldGVVcGxvYWQiLCJ0ZW1wMSIsInNwbGljZSIsInRlbXAyIiwidGVtcDMiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZXJyIiwidXNlRWZmZWN0Iiwib2JqZWN0VXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsImRhdGEiLCJhIiwiaWQiLCJ1cmwiLCJpZHMiLCJwaG90b01vZGFsU3R5bGUiLCJ1cGxvYWRNb2RhbFN0eWxlIiwidXBsb2FkTW9kYWwiLCJ1cGxvYWRJbnB1dCIsInN1Ym1pdEJ0biIsInByZXZpZXdzIiwic3RhZ2luZyIsInRhZ3NUaXRsZSIsInRhZ1JvdyIsImRpc2FibGUiLCJkb25lQnRuIiwiU3RhZ2luZ1BpY0RpdiIsInN0YWdpbmdQaWMiLCJhY3RpdmVUYWdzIiwidGFnZ2VkSWNvbiIsInRhZ2dlZCIsIm1haW50aHVtYnNEaXYiLCJ0aHVtYnNEaXYiLCJwbHVzSWNvbiIsInAiLCJjcm9zc0ljb24iLCJjYW5jZWxJY29uIiwicHJldmlld1RodW1iIiwidGFnc01vZGFsU3R5bGUiLCJnYWxsZXJ5UGFnZSIsImdhbGxlcnlUaXRsZSIsInVwbG9hZEJ0biIsImNhdGVnb3JpZXMiLCJjIiwidGFnQnRuIiwiYWN0aXZlVGFnQnRuIiwiZ3JpZCIsInJvd3MiLCJpdGVtIiwiZ2FsbGVyeUltYWdlIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUFBLGtEQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEI7QUFFZSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQ2hDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxxRUFBYSxFQUExQixDQUZnQyxDQUloQzs7QUFKZ0Msa0JBS1VDLHNEQUFRLENBQUMsRUFBRCxDQUxsQjtBQUFBLE1BS3pCQyxhQUx5QjtBQUFBLE1BS1ZDLGdCQUxVOztBQUFBLG1CQU1NRixzREFBUSxDQUFDLEVBQUQsQ0FOZDtBQUFBLE1BTXpCRyxXQU55QjtBQUFBLE1BTVpDLGNBTlk7O0FBQUEsbUJBT1FKLHNEQUFRLENBQUMsRUFBRCxDQVBoQjtBQUFBLE1BT3pCSyxZQVB5QjtBQUFBLE1BT1hDLGVBUFc7O0FBQUEsbUJBUUNOLHNEQUFRLENBQUMsS0FBRCxDQVJUO0FBQUEsTUFRekJPLFdBUnlCO0FBQUEsTUFRWkMsU0FSWTs7QUFBQSxtQkFTWVIsc0RBQVEsQ0FBQyxLQUFELENBVHBCO0FBQUEsTUFTekJTLGlCQVR5QjtBQUFBLE1BU05DLGNBVE07O0FBQUEsbUJBVVFWLHNEQUFRLENBQUMsS0FBRCxDQVZoQjtBQUFBLE1BVXpCVyxlQVZ5QjtBQUFBLE1BVVJDLFlBVlE7O0FBQUEsbUJBV0paLHNEQUFRLENBQUMsSUFBRCxDQVhKO0FBQUEsTUFXekJhLE1BWHlCO0FBQUEsTUFXakJDLFNBWGlCOztBQUFBLG1CQVlZZCxzREFBUSxDQUFDLEVBQUQsQ0FacEI7QUFBQSxNQVl6QmUsY0FaeUI7QUFBQSxNQVlUQyxpQkFaUzs7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YUFBTyxFQUFFLG1CQUFNO0FBQ2xCdkUscUJBQWE7QUFDYnJDLHVCQUFlLENBQUNtRixFQUFFLENBQUN5QixHQUFKLENBQWY7QUFDQyxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQVZGLENBREY7QUFtQkQsR0F4QkgsQ0FEQSxHQTBCQSxJQWpETixDQURGLENBekJGLENBaExGLENBREY7QUFrUUQ7O0dBdGhCdUJySCxPO1VBRVRFLDZEOzs7S0FGU0YsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LmNjZGVjMDE4YmZlN2NmMzNjNjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IEVkaXRCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdEJ0blwiO1xyXG5pbXBvcnQgRWRpdFRhZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxfRWRpdFRhZ3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuLi9pbWFnZXMvdGltZXMtY2lyY2xlLXNvbGlkLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL3VzZVdpbmRvd1NpemVcIjtcclxuXHJcbmltcG9ydCB7IHBob3RvTW9kYWxTdHlsZSwgdXBsb2FkTW9kYWxTdHlsZSwgdGFnc01vZGFsU3R5bGUgfSBmcm9tIFwiLi4vdXRpbHMvbW9kYWxTdHlsZXNcIjtcclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoXCJib2R5XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeSgpIHtcclxuICAvLyB3aW5kb3dTaXplIGN1c3RvbSBob29rXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgLy9zdGF0ZSBkZWNsYXJhdGlvbnNcclxuICBjb25zdCBbZ2FsbGVyeUltYWdlcywgc2V0R2FsbGVyeUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2dhbGxlcnlUYWdzLCBzZXRHYWxsZXJ5VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NsaWNrZWRJbWFnZSwgc2V0Q2xpY2tlZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkTW9kYWxJc09wZW4sIHNldFVwbG9hZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFnc01vZGFsSXNPcGVuLCBzZXRUYWdzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VzVG9VcGxvYWQsIHNldEltYWdlc1RvVXBsb2FkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2xpY2tlZERvbmUsIHNldENsaWNrZWREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RhZ2VkSW1hZ2VJbmRleCwgc2V0U3RhZ2VkSW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGh1bWJzLCBzZXRUaHVtYnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthZGRpbmdJbWFnZSwgc2V0QWRkaW5nSW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5wdXRLZXksIHNldElucHV0a2V5XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcclxuXHJcbiAgLy92YXJpYWJsZSBhbmQgZnVuY3Rpb24gZGVjbGFyYXRpb25zXHJcbiAgY29uc3QgYWxsVGFncyA9IFtcclxuICAgIFwiUmVzaWRlbnRpYWxcIixcclxuICAgIFwiQ29tbWVyY2lhbFwiLFxyXG4gICAgXCJJbnRlcmlvclwiLFxyXG4gICAgXCJFeHRlcmlvclwiLFxyXG4gICAgXCJDYWJpbmV0c1wiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBbXCJBbGxcIl0uY29uY2F0KGFsbFRhZ3MpO1xyXG5cclxuICB2YXIgcHVibGljX2lkcyA9IFtdO1xyXG5cclxuICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgLy9Nb2RhbCBmdW5jdGlvbnNcclxuXHJcbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvcGVuVXBsb2FkTW9kYWwoKSB7XHJcbiAgICBzZXRVcGxvYWRNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5UYWdzTW9kYWwoKSB7XHJcbiAgICBzZXRUYWdzTW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlVXBsb2FkTW9kYWwoKSB7XHJcbiAgICBzZXRVcGxvYWRNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVRhZ3NNb2RhbCgpIHtcclxuICAgIHNldFRhZ3NNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvL3RhZ2dpbmcgZnVuY3Rpb25zXHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRhZyh0LCBpKSB7XHJcbiAgICBpZiAoIXRhZ3NbaV0pIHtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgKHRhZ3NbaV0gPSBbdF0pXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0ZW1wID0gdGFnc1tpXTtcclxuICAgICAgc2V0VGFncyhcclxuICAgICAgICB0YWdzLm1hcCgoYXJyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID09IGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChhcnJbaV0gPSB0ZW1wLmNvbmNhdCh0KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYW5jZWxUYWcodCwgaSkge1xyXG4gICAgc2V0VGFncyhcclxuICAgICAgdGFncy5tYXAoKGFyciwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiBhcnIuZmlsdGVyKCh0YWcpID0+IHRhZyAhPT0gdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHRvYXN0IGZ1bmN0aW9uc1xyXG5cclxuICBjb25zdCBzdWNjZXNzVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3Quc3VjY2VzcyhcIiBVcGxvYWQgU3VjY2Vzc1wiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgIGNsYXNzTmFtZTogc3R5bGUudG9hc3RTdWNjZXNzLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGVycm9yVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3QuZXJyb3IoXCJVcGxvYWQgZXJyb3IsIHBsZWFzZSByZWZyZXNoXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB3YXJuaW5nVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3Qud2FybihcIk5vIGltYWdlcyBzZWxlY3RlZFwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgLy8gZmlsZSBmdW5jdGlvbnNcclxuICBjb25zdCByZXNldElucHV0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHNpZ24gPSBEYXRlLm5vdygpO1xyXG4gICAgc2V0SW5wdXRrZXkoc2lnbik7XHJcbiAgfTtcclxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZERvbmUoZmFsc2UpO1xyXG4gICAgc2V0QWRkaW5nSW1hZ2UodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZXNUb1VwbG9hZChbLi4uaW1hZ2VzVG9VcGxvYWQsIGUudGFyZ2V0LmZpbGVzWzBdXSk7XHJcbiAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVVwbG9hZChpKSB7XHJcbiAgICBpZiAodGh1bWJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgaWYgKHByZXZpZXcgPT09IHRodW1ic1tpXSkge1xyXG4gICAgICAgIHNldFByZXZpZXcodGh1bWJzW2kgLSAxXSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGVtcDEgPSB0aHVtYnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICBjb25zdCB0ZW1wMiA9IGltYWdlc1RvVXBsb2FkLnNwbGljZShpLCAxKTtcclxuICAgICAgY29uc3QgdGVtcDMgPSB0YWdzLnNwbGljZShpLCAxKTtcclxuICAgICAgc2V0VGh1bWJzKHRodW1icy5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGVtcDEpKTtcclxuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoXHJcbiAgICAgICAgaW1hZ2VzVG9VcGxvYWQuZmlsdGVyKChlbCkgPT4gZWwgIT09IHRlbXAyLnNwbGljZShpLCAxKSlcclxuICAgICAgKTtcclxuICAgICAgc2V0VGFncyh0YWdzLmZpbHRlcigodCkgPT4gdCAhPT0gdGVtcDMpKTtcclxuICAgICAgc2V0QWRkaW5nSW1hZ2UoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGFncyhbXSk7XHJcbiAgICAgIHNldFRodW1icyhbXSk7XHJcbiAgICAgIHNldEltYWdlc1RvVXBsb2FkKFtdKTtcclxuICAgICAgc2V0UHJldmlldyhudWxsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJwcmV2aWV3XCIsIHByZXZpZXcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFpbWFnZXNUb1VwbG9hZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHdhcm5pbmdUb2FzdCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlc1RvVXBsb2FkLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VzXCIsIGUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWdzXCIsIHRhZ3NbaV0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh0YWdzW2ldKTtcclxuICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhwYWlyWzFdLCBwYWlyWzJdKTtcclxuICAgIH1cclxuXHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBzdWNjZXNzVG9hc3QoKTtcclxuICAgICAgICBjbG9zZVVwbG9hZE1vZGFsKCk7XHJcbiAgICAgICAgc2V0UHJldmlldyhudWxsKTtcclxuICAgICAgICBzZXRJbWFnZXNUb1VwbG9hZChbXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBlcnJvclRvYXN0KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gU2lkZSBlZmZlY3RzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoICYmIGFkZGluZ0ltYWdlID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXHJcbiAgICAgICAgaW1hZ2VzVG9VcGxvYWRbaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMV1cclxuICAgICAgKTtcclxuICAgICAgc2V0UHJldmlldyhvYmplY3RVcmwpO1xyXG4gICAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDEpO1xyXG4gICAgICBzZXRBZGRpbmdJbWFnZShmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiKioqXCIsIGltYWdlc1RvVXBsb2FkKTtcclxuICAgIH1cclxuICB9LCBbaW1hZ2VzVG9VcGxvYWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJyYW5kYWxsLWF1dGhvcml6YXRpb25cIikpO1xyXG4gICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvc2VhcmNoXCJcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHB1YmxpY19pZHMgPSByZXMuZGF0YTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9pbml0aWFsaXplXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9cIixcclxuICAgICAgICB7fVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0R2FsbGVyeUltYWdlcyhcclxuICAgICAgICAgIHJlcy5kYXRhLm1hcCgoYSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpZDogaSwgdXJsOiBhIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UucG9zdChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdGFnc1wiLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZHM6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqdGFnc1wiLCByZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0R2FsbGVyeVRhZ3MocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJjYW5ub3QgZ2V0IHRhZ3NcIiwgZXJyKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBHRVRcIiwgZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ2FsbGVyeVRhZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRHYWxsZXJ5SW1hZ2VzKFxyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMubWFwKChhLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBpZDogYS5pZCwgdXJsOiBhLnVybCwgdGFnczogZ2FsbGVyeVRhZ3NbaV0gfTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtnYWxsZXJ5VGFnc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlIuUmFuZGFsbCBHYWxsZXJ5PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNC4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1IekxlQnVob05QdlNsNUtZbmp4MEJUK1dCMFFFRXFMcHJPK05Ca2trNWdiYzY3RlRhTDdYSUdhMncxTDBYYmdjXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXtwaG90b01vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtjbGlja2VkSW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJnYWxsZXJ5IG1vZGFsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2xpY2tlZEltYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17dXBsb2FkTW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVXBsb2FkTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3VwbG9hZE1vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICAgIGlkPXtzdHlsZS51cGxvYWRNb2RhbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRNb2RhbH0+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2lucHV0S2V5IHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWdDb2xsZWN0aW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZElucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLnN1Ym1pdEJ0bn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+VXBsb2FkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ByZXZpZXcgPyBzdHlsZS5wcmV2aWV3cyA6IG51bGx9PlxyXG4gICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0YWdpbmd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRhZ3NUaXRsZX0+VGFnczwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHshdGFnc1tzdGFnZWRJbWFnZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWxsVGFncy5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhZyh0LCBzdGFnZWRJbWFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICA6IGFsbFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDwgdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSB0YWdzW3N0YWdlZEltYWdlSW5kZXhdW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICF0YWdzW3N0YWdlZEltYWdlSW5kZXhdIHx8IGNsaWNrZWREb25lID8gXCJkaXNhYmxlZFwiIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnc1tzdGFnZWRJbWFnZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZS5kaXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5kb25lQnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGUuZGlzYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaHVtYnMoWy4uLnRodW1icywgcHJldmlld10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZERvbmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5TdGFnaW5nUGljRGl2fT5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zdGFnaW5nUGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3RhZ2luZyBwcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZVRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWdzW3N0YWdlZEltYWdlSW5kZXhdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3N0eWxlLnRhZ2dlZEljb259IGZhcyBmYS10aW1lc2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRhZ2dlZH0+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFpbnRodW1ic0Rpdn0+XHJcbiAgICAgICAgICAgICAge3RodW1icy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aHVtYnNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzcz1cImN1c3RvbS1maWxlLXVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkFkZCBNb3JlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhcyBmYS1wbHVzICR7c3R5bGUucGx1c0ljb259YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3RodW1icy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICB0aHVtYnMubWFwKChwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRodW1ic0Rpdn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGh1bWJzLmxlbmd0aCA+IDEgJiYgc2V0UHJldmlldyh0aHVtYnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNyb3NzSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVXBsb2FkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FuY2VsSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLnByZXZpZXdUaHVtYn0gc3JjPXtwfSB0YWJJbmRleD17aX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXt0YWdzTW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVGFnc01vZGFsfVxyXG4gICAgICAgIHN0eWxlPXt0YWdzTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8RWRpdFRhZ3MgaW1nPXtjbGlja2VkSW1hZ2V9Lz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVBhZ2V9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cclxuICAgICAgICB7bG9nZ2VkICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRCdG59IG9uQ2xpY2s9e29wZW5VcGxvYWRNb2RhbH0+XHJcbiAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgICB7YWxsQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gY1xyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7c3R5bGUudGFnQnRufSAke3N0eWxlLmFjdGl2ZVRhZ0J0bn1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS50YWdCdG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQ2F0ZWdvcnkoYyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJvd3N9PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkgPT09IFwiQWxsXCJcclxuICAgICAgICAgICAgICA/IGdhbGxlcnlJbWFnZXMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBhdCBpbmRleCAke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuVGFnc01vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ0biBpbWc9e2VsLnVybH0gaWQ9e3B1YmxpY19pZHNbaW5kZXhdfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBjYXRlZ29yeSAhPT0gXCJBTExcIiAmJiBnYWxsZXJ5VGFncy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyBnYWxsZXJ5SW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRhZ3MuaW5jbHVkZXMoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5UYWdzTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==