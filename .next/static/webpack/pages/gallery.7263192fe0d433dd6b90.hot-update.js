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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState5[0],
      setIsOpen = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      uploadModalIsOpen = _useState6[0],
      setUploadModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      tagsModalIsOpen = _useState7[0],
      setTagsModal = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      logged = _useState8[0],
      setLogged = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      imagesToUpload = _useState9[0],
      setImagesToUpload = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      clickedDone = _useState10[0],
      setClickedDone = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      stagedImageIndex = _useState11[0],
      setStagedImageIndex = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      preview = _useState12[0],
      setPreview = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      thumbs = _useState13[0],
      setThumbs = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      addingImage = _useState14[0],
      setAddingImage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tags = _useState15[0],
      setTags = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      inputKey = _useState16[0],
      setInputkey = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("All"),
      category = _useState17[0],
      setActiveCategory = _useState17[1]; //variable and function declarations


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
      public_ids = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data);
      console.log(public_ids);
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
      lineNumber: 299,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  }, "R.Randall Gallery"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
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
      lineNumber: 302,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 310,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: clickedImage,
    alt: "gallery modal",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.clickedImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
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
      lineNumber: 322,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
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
      lineNumber: 331,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.submitBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 15
    }
  }), "Upload")), __jsx("div", {
    className: preview ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previews : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 11
    }
  }, preview && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.staging,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagsTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
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
        lineNumber: 351,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 27
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
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
        lineNumber: 375,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
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
      lineNumber: 385,
      columnNumber: 19
    }
  }, "Done")), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.StagingPicDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 17
    }
  }, preview && __jsx("img", {
    style: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stagingPic,
    src: preview,
    alt: "staging preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
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
        lineNumber: 417,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.taggedIcon, " fas fa-times"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagged,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 27
      }
    }, t));
  })))), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mainthumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 13
    }
  }, thumbs.length > 0 && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 17
    }
  }, __jsx("label", {
    "for": "file-upload",
    "class": "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 21
    }
  }, "Add More"), __jsx("i", {
    className: "fas fa-plus ".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.plusIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 21
    }
  })), __jsx("input", {
    id: "file-upload",
    type: "file",
    onChange: onFileChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
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
        lineNumber: 443,
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
        lineNumber: 450,
        columnNumber: 21
      }
    }), __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previewThumb,
      src: p,
      tabIndex: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
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
      lineNumber: 465,
      columnNumber: 7
    }
  }, __jsx(_components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: clickedImage,
    id: clickedImageId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 9
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 9
    }
  }, "Full Gallery"), logged && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadBtn,
    onClick: openUploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 11
    }
  }, "Upload"), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
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
        lineNumber: 484,
        columnNumber: 15
      }
    }, c);
  })), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rows,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 11
    }
  }, category === "All" ? galleryImages.map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
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
        lineNumber: 505,
        columnNumber: 23
      }
    }), __jsx("div", {
      onClick: function onClick() {
        openTagsModal();
        setClickedImage(el.url);
        setClickedImageId(public_ids[index]);
        console.log("Public IDs");
        console.log(public_ids);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 23
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
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
        lineNumber: 533,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: el.url,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryImage,
      alt: "picture at index ".concat(index),
      onClick: function onClick() {
        openModal();
        setClickedImage(el.url);
        setClickedImageId(public_ids[index]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534,
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
        lineNumber: 544,
        columnNumber: 25
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 27
      }
    })));
  }) : null))));
}

_s(Gallery, "narWsTbNinvDOz6KjM//1jPk0b0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJ0YWdzTW9kYWxJc09wZW4iLCJzZXRUYWdzTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwiY2xpY2tlZERvbmUiLCJzZXRDbGlja2VkRG9uZSIsInN0YWdlZEltYWdlSW5kZXgiLCJzZXRTdGFnZWRJbWFnZUluZGV4IiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aHVtYnMiLCJzZXRUaHVtYnMiLCJhZGRpbmdJbWFnZSIsInNldEFkZGluZ0ltYWdlIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEtleSIsInNldElucHV0a2V5IiwiY2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFsbFRhZ3MiLCJhbGxDYXRlZ29yaWVzIiwiY29uY2F0IiwicHVibGljX2lkcyIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsIndpdGhDcmVkZW50aWFscyIsIm9wZW5Nb2RhbCIsIm9wZW5VcGxvYWRNb2RhbCIsIm9wZW5UYWdzTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImNsb3NlVGFnc01vZGFsIiwiYWRkVGFnIiwidCIsImkiLCJ0ZW1wIiwibWFwIiwiYXJyIiwiaW5kZXgiLCJjYW5jZWxUYWciLCJmaWx0ZXIiLCJ0YWciLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b2FzdFN1Y2Nlc3MiLCJlcnJvclRvYXN0IiwiZXJyb3IiLCJ3YXJuaW5nVG9hc3QiLCJ3YXJuIiwicmVzZXRJbnB1dCIsInNpZ24iLCJEYXRlIiwibm93Iiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZGVsZXRlVXBsb2FkIiwidGVtcDEiLCJzcGxpY2UiLCJ0ZW1wMiIsInRlbXAzIiwiZWwiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJwb3N0IiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsIm9iamVjdFVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJkYXRhIiwiYSIsImlkIiwidXJsIiwiaWRzIiwicGhvdG9Nb2RhbFN0eWxlIiwidXBsb2FkTW9kYWxTdHlsZSIsInVwbG9hZE1vZGFsIiwidXBsb2FkSW5wdXQiLCJzdWJtaXRCdG4iLCJwcmV2aWV3cyIsInN0YWdpbmciLCJ0YWdzVGl0bGUiLCJ0YWdSb3ciLCJkaXNhYmxlIiwiZG9uZUJ0biIsIlN0YWdpbmdQaWNEaXYiLCJzdGFnaW5nUGljIiwiYWN0aXZlVGFncyIsInRhZ2dlZEljb24iLCJ0YWdnZWQiLCJtYWludGh1bWJzRGl2IiwidGh1bWJzRGl2IiwicGx1c0ljb24iLCJwIiwiY3Jvc3NJY29uIiwiY2FuY2VsSWNvbiIsInByZXZpZXdUaHVtYiIsInRhZ3NNb2RhbFN0eWxlIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJjYXRlZ29yaWVzIiwiYyIsInRhZ0J0biIsImFjdGl2ZVRhZ0J0biIsImdyaWQiLCJyb3dzIiwiaXRlbSIsImdhbGxlcnlJbWFnZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBQSxrREFBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCO0FBRWUsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQztBQUNBLE1BQU1DLElBQUksR0FBR0MscUVBQWEsRUFBMUIsQ0FGZ0MsQ0FJaEM7O0FBSmdDLGtCQUtVQyxzREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQSxNQUt6QkMsYUFMeUI7QUFBQSxNQUtWQyxnQkFMVTs7QUFBQSxtQkFNTUYsc0RBQVEsQ0FBQyxFQUFELENBTmQ7QUFBQSxNQU16QkcsV0FOeUI7QUFBQSxNQU1aQyxjQU5ZOztBQUFBLG1CQU9RSixzREFBUSxDQUFDLEVBQUQsQ0FQaEI7QUFBQSxNQU96QkssWUFQeUI7QUFBQSxNQU9YQyxlQVBXOztBQUFBLG1CQVFZTixzREFBUSxDQUFDLEVBQUQsQ0FScEI7QUFBQSxNQVF6Qk8sY0FSeUI7QUFBQSxNQVFUQyxpQkFSUzs7QUFBQSxtQkFTQ1Isc0RBQVEsQ0FBQyxLQUFELENBVFQ7QUFBQSxNQVN6QlMsV0FUeUI7QUFBQSxNQVNaQyxTQVRZOztBQUFBLG1CQVVZVixzREFBUSxDQUFDLEtBQUQsQ0FWcEI7QUFBQSxNQVV6QlcsaUJBVnlCO0FBQUEsTUFVTkMsY0FWTTs7QUFBQSxtQkFXUVosc0RBQVEsQ0FBQyxLQUFELENBWGhCO0FBQUEsTUFXekJhLGVBWHlCO0FBQUEsTUFXUkMsWUFYUTs7QUFBQSxtQkFZSmQsc0RBQVEsQ0FBQyxJQUFELENBWko7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NUQsRUFBRSxDQUFDeUIsR0FEVjtBQUVFLGVBQVMsRUFBRTdDLG9FQUFLLENBQUNpRixZQUZuQjtBQUdFLFNBQUcsNkJBQXNCakcsS0FBdEIsQ0FITDtBQUlFLGFBQU8sRUFBRSxtQkFBTTtBQUNiWixpQkFBUztBQUNUckMsdUJBQWUsQ0FBQ3FGLEVBQUUsQ0FBQ3lCLEdBQUosQ0FBZjtBQUNBNUcseUJBQWlCLENBQUM4QixVQUFVLENBQUNpQixLQUFELENBQVgsQ0FBakI7QUFDRCxPQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVdFO0FBQUssYUFBTyxFQUFFLG1CQUFNO0FBQ2xCVixxQkFBYTtBQUNidkMsdUJBQWUsQ0FBQ3FGLEVBQUUsQ0FBQ3lCLEdBQUosQ0FBZjtBQUNDLE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBWEYsQ0FERjtBQW9CRCxHQXpCSCxDQURBLEdBMkJBLElBckROLENBREYsQ0F6QkYsQ0FoTEYsQ0FERjtBQXNRRDs7R0E1aEJ1QnZILE87VUFFVEUsNkQ7OztLQUZTRixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuNzI2MzE5MmZlMGQ0MzNkZDZiOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgRWRpdEJ0biBmcm9tIFwiLi4vY29tcG9uZW50cy9FZGl0QnRuXCI7XHJcbmltcG9ydCBFZGl0VGFncyBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbF9FZGl0VGFnc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3Nhc3MvR2FsbGVyeVBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGNhbmNlbEljb24gZnJvbSBcIi4uL2ltYWdlcy90aW1lcy1jaXJjbGUtc29saWQucG5nXCI7XHJcblxyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvdXNlV2luZG93U2l6ZVwiO1xyXG5cclxuaW1wb3J0IHsgcGhvdG9Nb2RhbFN0eWxlLCB1cGxvYWRNb2RhbFN0eWxlLCB0YWdzTW9kYWxTdHlsZSB9IGZyb20gXCIuLi91dGlscy9tb2RhbFN0eWxlc1wiO1xyXG5cclxuTW9kYWwuc2V0QXBwRWxlbWVudChcImJvZHlcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xyXG4gIC8vIHdpbmRvd1NpemUgY3VzdG9tIGhvb2tcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICAvL3N0YXRlIGRlY2xhcmF0aW9uc1xyXG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FsbGVyeVRhZ3MsIHNldEdhbGxlcnlUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2xpY2tlZEltYWdlLCBzZXRDbGlja2VkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NsaWNrZWRJbWFnZUlkLCBzZXRDbGlja2VkSW1hZ2VJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZE1vZGFsSXNPcGVuLCBzZXRVcGxvYWRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhZ3NNb2RhbElzT3Blbiwgc2V0VGFnc01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlc1RvVXBsb2FkLCBzZXRJbWFnZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NsaWNrZWREb25lLCBzZXRDbGlja2VkRG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0YWdlZEltYWdlSW5kZXgsIHNldFN0YWdlZEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RodW1icywgc2V0VGh1bWJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWRkaW5nSW1hZ2UsIHNldEFkZGluZ0ltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lucHV0S2V5LCBzZXRJbnB1dGtleV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XHJcblxyXG4gIC8vdmFyaWFibGUgYW5kIGZ1bmN0aW9uIGRlY2xhcmF0aW9uc1xyXG4gIGNvbnN0IGFsbFRhZ3MgPSBbXHJcbiAgICBcIlJlc2lkZW50aWFsXCIsXHJcbiAgICBcIkNvbW1lcmNpYWxcIixcclxuICAgIFwiSW50ZXJpb3JcIixcclxuICAgIFwiRXh0ZXJpb3JcIixcclxuICAgIFwiQ2FiaW5ldHNcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gW1wiQWxsXCJdLmNvbmNhdChhbGxUYWdzKTtcclxuXHJcbiAgdmFyIHB1YmxpY19pZHMgPSBbXTtcclxuXHJcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIC8vTW9kYWwgZnVuY3Rpb25zXHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb3BlblVwbG9hZE1vZGFsKCkge1xyXG4gICAgc2V0VXBsb2FkTW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuVGFnc01vZGFsKCkge1xyXG4gICAgc2V0VGFnc01vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVVwbG9hZE1vZGFsKCkge1xyXG4gICAgc2V0VXBsb2FkTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VUYWdzTW9kYWwoKSB7XHJcbiAgICBzZXRUYWdzTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy90YWdnaW5nIGZ1bmN0aW9uc1xyXG5cclxuICBmdW5jdGlvbiBhZGRUYWcodCwgaSkge1xyXG4gICAgaWYgKCF0YWdzW2ldKSB7XHJcbiAgICAgIHNldFRhZ3MoWy4uLnRhZ3MsICh0YWdzW2ldID0gW3RdKV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdGVtcCA9IHRhZ3NbaV07XHJcbiAgICAgIHNldFRhZ3MoXHJcbiAgICAgICAgdGFncy5tYXAoKGFyciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYXJyW2ldID0gdGVtcC5jb25jYXQodCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsVGFnKHQsIGkpIHtcclxuICAgIHNldFRhZ3MoXHJcbiAgICAgIHRhZ3MubWFwKChhcnIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJyLmZpbHRlcigodGFnKSA9PiB0YWcgIT09IHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyB0b2FzdCBmdW5jdGlvbnNcclxuXHJcbiAgY29uc3Qgc3VjY2Vzc1RvYXN0ID0gKCkgPT5cclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCIgVXBsb2FkIFN1Y2Nlc3NcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICBjbGFzc05hbWU6IHN0eWxlLnRvYXN0U3VjY2VzcyxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBlcnJvclRvYXN0ID0gKCkgPT5cclxuICAgIHRvYXN0LmVycm9yKFwiVXBsb2FkIGVycm9yLCBwbGVhc2UgcmVmcmVzaFwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3Qgd2FybmluZ1RvYXN0ID0gKCkgPT5cclxuICAgIHRvYXN0Lndhcm4oXCJObyBpbWFnZXMgc2VsZWN0ZWRcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIC8vIGZpbGUgZnVuY3Rpb25zXHJcbiAgY29uc3QgcmVzZXRJbnB1dCA9ICgpID0+IHtcclxuICAgIGxldCBzaWduID0gRGF0ZS5ub3coKTtcclxuICAgIHNldElucHV0a2V5KHNpZ24pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldENsaWNrZWREb25lKGZhbHNlKTtcclxuICAgIHNldEFkZGluZ0ltYWdlKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VzVG9VcGxvYWQoWy4uLmltYWdlc1RvVXBsb2FkLCBlLnRhcmdldC5maWxlc1swXV0pO1xyXG4gICAgc2V0U3RhZ2VkSW1hZ2VJbmRleChpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBkZWxldGVVcGxvYWQoaSkge1xyXG4gICAgaWYgKHRodW1icy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGlmIChwcmV2aWV3ID09PSB0aHVtYnNbaV0pIHtcclxuICAgICAgICBzZXRQcmV2aWV3KHRodW1ic1tpIC0gMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRlbXAxID0gdGh1bWJzLnNwbGljZShpLCAxKTtcclxuICAgICAgY29uc3QgdGVtcDIgPSBpbWFnZXNUb1VwbG9hZC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGNvbnN0IHRlbXAzID0gdGFncy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIHNldFRodW1icyh0aHVtYnMuZmlsdGVyKChlbCkgPT4gZWwgIT09IHRlbXAxKSk7XHJcbiAgICAgIHNldEltYWdlc1RvVXBsb2FkKFxyXG4gICAgICAgIGltYWdlc1RvVXBsb2FkLmZpbHRlcigoZWwpID0+IGVsICE9PSB0ZW1wMi5zcGxpY2UoaSwgMSkpXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFRhZ3ModGFncy5maWx0ZXIoKHQpID0+IHQgIT09IHRlbXAzKSk7XHJcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRhZ3MoW10pO1xyXG4gICAgICBzZXRUaHVtYnMoW10pO1xyXG4gICAgICBzZXRJbWFnZXNUb1VwbG9hZChbXSk7XHJcbiAgICAgIHNldFByZXZpZXcobnVsbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicHJldmlld1wiLCBwcmV2aWV3KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghaW1hZ2VzVG9VcGxvYWQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB3YXJuaW5nVG9hc3QoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpbWFnZXNUb1VwbG9hZC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlc1wiLCBlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGFnc1wiLCB0YWdzW2ldKTtcclxuICAgICAgY29uc29sZS5sb2codGFnc1tpXSk7XHJcbiAgICB9KTtcclxuICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgY29uc29sZS5sb2cocGFpclsxXSwgcGFpclsyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3VwbG9hZFwiLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgc3VjY2Vzc1RvYXN0KCk7XHJcbiAgICAgICAgY2xvc2VVcGxvYWRNb2RhbCgpO1xyXG4gICAgICAgIHNldFByZXZpZXcobnVsbCk7XHJcbiAgICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoW10pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgZXJyb3JUb2FzdCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFNpZGUgZWZmZWN0c1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlc1RvVXBsb2FkLmxlbmd0aCAmJiBhZGRpbmdJbWFnZSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBvYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKFxyXG4gICAgICAgIGltYWdlc1RvVXBsb2FkW2ltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDFdXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFByZXZpZXcob2JqZWN0VXJsKTtcclxuICAgICAgc2V0U3RhZ2VkSW1hZ2VJbmRleChpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxKTtcclxuICAgICAgc2V0QWRkaW5nSW1hZ2UoZmFsc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIioqKlwiLCBpbWFnZXNUb1VwbG9hZCk7XHJcbiAgICB9XHJcbiAgfSwgW2ltYWdlc1RvVXBsb2FkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2dnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJycmFuZGFsbC1hdXRob3JpemF0aW9uXCIpKTtcclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLmdldChcclxuICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvaW1hZ2VzL3NlYXJjaFwiXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9pbml0aWFsaXplXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9cIixcclxuICAgICAgICB7fVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0R2FsbGVyeUltYWdlcyhcclxuICAgICAgICAgIHJlcy5kYXRhLm1hcCgoYSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpZDogaSwgdXJsOiBhIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgcHVibGljX2lkcyA9IFsuLi5yZXMuZGF0YV07XHJcbiAgICAgICAgY29uc29sZS5sb2cocHVibGljX2lkcyk7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UucG9zdChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdGFnc1wiLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZHM6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqdGFnc1wiLCByZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0R2FsbGVyeVRhZ3MocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJjYW5ub3QgZ2V0IHRhZ3NcIiwgZXJyKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBHRVRcIiwgZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ2FsbGVyeVRhZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRHYWxsZXJ5SW1hZ2VzKFxyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMubWFwKChhLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBpZDogYS5pZCwgdXJsOiBhLnVybCwgdGFnczogZ2FsbGVyeVRhZ3NbaV0gfTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtnYWxsZXJ5VGFnc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlIuUmFuZGFsbCBHYWxsZXJ5PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNC4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1IekxlQnVob05QdlNsNUtZbmp4MEJUK1dCMFFFRXFMcHJPK05Ca2trNWdiYzY3RlRhTDdYSUdhMncxTDBYYmdjXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXtwaG90b01vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtjbGlja2VkSW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJnYWxsZXJ5IG1vZGFsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2xpY2tlZEltYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17dXBsb2FkTW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVXBsb2FkTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3VwbG9hZE1vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICAgIGlkPXtzdHlsZS51cGxvYWRNb2RhbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRNb2RhbH0+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2lucHV0S2V5IHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWdDb2xsZWN0aW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZElucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLnN1Ym1pdEJ0bn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+VXBsb2FkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ByZXZpZXcgPyBzdHlsZS5wcmV2aWV3cyA6IG51bGx9PlxyXG4gICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0YWdpbmd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRhZ3NUaXRsZX0+VGFnczwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHshdGFnc1tzdGFnZWRJbWFnZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWxsVGFncy5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhZyh0LCBzdGFnZWRJbWFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICA6IGFsbFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDwgdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSB0YWdzW3N0YWdlZEltYWdlSW5kZXhdW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICF0YWdzW3N0YWdlZEltYWdlSW5kZXhdIHx8IGNsaWNrZWREb25lID8gXCJkaXNhYmxlZFwiIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnc1tzdGFnZWRJbWFnZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZS5kaXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5kb25lQnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGUuZGlzYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaHVtYnMoWy4uLnRodW1icywgcHJldmlld10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZERvbmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5TdGFnaW5nUGljRGl2fT5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zdGFnaW5nUGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3RhZ2luZyBwcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZVRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWdzW3N0YWdlZEltYWdlSW5kZXhdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3N0eWxlLnRhZ2dlZEljb259IGZhcyBmYS10aW1lc2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRhZ2dlZH0+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFpbnRodW1ic0Rpdn0+XHJcbiAgICAgICAgICAgICAge3RodW1icy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aHVtYnNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzcz1cImN1c3RvbS1maWxlLXVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkFkZCBNb3JlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhcyBmYS1wbHVzICR7c3R5bGUucGx1c0ljb259YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3RodW1icy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICB0aHVtYnMubWFwKChwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRodW1ic0Rpdn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGh1bWJzLmxlbmd0aCA+IDEgJiYgc2V0UHJldmlldyh0aHVtYnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNyb3NzSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVXBsb2FkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FuY2VsSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLnByZXZpZXdUaHVtYn0gc3JjPXtwfSB0YWJJbmRleD17aX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXt0YWdzTW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVGFnc01vZGFsfVxyXG4gICAgICAgIHN0eWxlPXt0YWdzTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8RWRpdFRhZ3MgaW1nPXtjbGlja2VkSW1hZ2V9IGlkPXtjbGlja2VkSW1hZ2VJZH0vPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5UGFnZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVRpdGxlfT5GdWxsIEdhbGxlcnk8L2gyPlxyXG4gICAgICAgIHtsb2dnZWQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZEJ0bn0gb25DbGljaz17b3BlblVwbG9hZE1vZGFsfT5cclxuICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXRlZ29yaWVzfT5cclxuICAgICAgICAgIHthbGxDYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBjXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtzdHlsZS50YWdCdG59ICR7c3R5bGUuYWN0aXZlVGFnQnRufWBcclxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLnRhZ0J0blxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmVDYXRlZ29yeShjKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2N9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucm93c30+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeSA9PT0gXCJBbGxcIlxyXG4gICAgICAgICAgICAgID8gZ2FsbGVyeUltYWdlcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5UYWdzTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlSWQocHVibGljX2lkc1tpbmRleF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQdWJsaWMgSURzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHB1YmxpY19pZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ0biAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogY2F0ZWdvcnkgIT09IFwiQUxMXCIgJiYgZ2FsbGVyeVRhZ3MubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8gZ2FsbGVyeUltYWdlc1xyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC50YWdzLmluY2x1ZGVzKGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBhdCBpbmRleCAke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZUlkKHB1YmxpY19pZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5UYWdzTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==