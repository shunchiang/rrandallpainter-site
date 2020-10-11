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
      public_ids = res;
      console.log("Public IDs");
      console.log(public_ids);
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
      lineNumber: 300,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, "R.Randall Gallery"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
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
      lineNumber: 303,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 311,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: clickedImage,
    alt: "gallery modal",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.clickedImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
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
      lineNumber: 323,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
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
      lineNumber: 332,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.submitBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }), "Upload")), __jsx("div", {
    className: preview ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previews : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, preview && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.staging,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagsTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
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
        lineNumber: 352,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 27
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
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
        lineNumber: 376,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
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
      lineNumber: 386,
      columnNumber: 19
    }
  }, "Done")), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.StagingPicDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 17
    }
  }, preview && __jsx("img", {
    style: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stagingPic,
    src: preview,
    alt: "staging preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
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
        lineNumber: 418,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.taggedIcon, " fas fa-times"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagged,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 27
      }
    }, t));
  })))), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mainthumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }
  }, thumbs.length > 0 && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 17
    }
  }, __jsx("label", {
    "for": "file-upload",
    "class": "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 21
    }
  }, "Add More"), __jsx("i", {
    className: "fas fa-plus ".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.plusIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 21
    }
  })), __jsx("input", {
    id: "file-upload",
    type: "file",
    onChange: onFileChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
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
        lineNumber: 444,
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
        lineNumber: 451,
        columnNumber: 21
      }
    }), __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previewThumb,
      src: p,
      tabIndex: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
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
      lineNumber: 466,
      columnNumber: 7
    }
  }, __jsx(_components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: clickedImage,
    id: clickedImageId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 9
    }
  }, "Full Gallery"), logged && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadBtn,
    onClick: openUploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 11
    }
  }, "Upload"), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
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
        lineNumber: 485,
        columnNumber: 15
      }
    }, c);
  })), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rows,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 11
    }
  }, category === "All" ? galleryImages.map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
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
        lineNumber: 506,
        columnNumber: 23
      }
    }), __jsx("div", {
      onClick: function onClick() {
        openTagsModal();
        setClickedImage(el.url);
        setClickedImageId(public_ids[index]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
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
        setClickedImageId(public_ids[index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJ0YWdzTW9kYWxJc09wZW4iLCJzZXRUYWdzTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwiY2xpY2tlZERvbmUiLCJzZXRDbGlja2VkRG9uZSIsInN0YWdlZEltYWdlSW5kZXgiLCJzZXRTdGFnZWRJbWFnZUluZGV4IiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aHVtYnMiLCJzZXRUaHVtYnMiLCJhZGRpbmdJbWFnZSIsInNldEFkZGluZ0ltYWdlIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEtleSIsInNldElucHV0a2V5IiwiY2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFsbFRhZ3MiLCJhbGxDYXRlZ29yaWVzIiwiY29uY2F0IiwicHVibGljX2lkcyIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsIndpdGhDcmVkZW50aWFscyIsIm9wZW5Nb2RhbCIsIm9wZW5VcGxvYWRNb2RhbCIsIm9wZW5UYWdzTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImNsb3NlVGFnc01vZGFsIiwiYWRkVGFnIiwidCIsImkiLCJ0ZW1wIiwibWFwIiwiYXJyIiwiaW5kZXgiLCJjYW5jZWxUYWciLCJmaWx0ZXIiLCJ0YWciLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b2FzdFN1Y2Nlc3MiLCJlcnJvclRvYXN0IiwiZXJyb3IiLCJ3YXJuaW5nVG9hc3QiLCJ3YXJuIiwicmVzZXRJbnB1dCIsInNpZ24iLCJEYXRlIiwibm93Iiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZGVsZXRlVXBsb2FkIiwidGVtcDEiLCJzcGxpY2UiLCJ0ZW1wMiIsInRlbXAzIiwiZWwiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJwb3N0IiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsIm9iamVjdFVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJkYXRhIiwiYSIsImlkIiwidXJsIiwiaWRzIiwicGhvdG9Nb2RhbFN0eWxlIiwidXBsb2FkTW9kYWxTdHlsZSIsInVwbG9hZE1vZGFsIiwidXBsb2FkSW5wdXQiLCJzdWJtaXRCdG4iLCJwcmV2aWV3cyIsInN0YWdpbmciLCJ0YWdzVGl0bGUiLCJ0YWdSb3ciLCJkaXNhYmxlIiwiZG9uZUJ0biIsIlN0YWdpbmdQaWNEaXYiLCJzdGFnaW5nUGljIiwiYWN0aXZlVGFncyIsInRhZ2dlZEljb24iLCJ0YWdnZWQiLCJtYWludGh1bWJzRGl2IiwidGh1bWJzRGl2IiwicGx1c0ljb24iLCJwIiwiY3Jvc3NJY29uIiwiY2FuY2VsSWNvbiIsInByZXZpZXdUaHVtYiIsInRhZ3NNb2RhbFN0eWxlIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJjYXRlZ29yaWVzIiwiYyIsInRhZ0J0biIsImFjdGl2ZVRhZ0J0biIsImdyaWQiLCJyb3dzIiwiaXRlbSIsImdhbGxlcnlJbWFnZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBQSxrREFBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCO0FBRWUsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQztBQUNBLE1BQU1DLElBQUksR0FBR0MscUVBQWEsRUFBMUIsQ0FGZ0MsQ0FJaEM7O0FBSmdDLGtCQUtVQyxzREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQSxNQUt6QkMsYUFMeUI7QUFBQSxNQUtWQyxnQkFMVTs7QUFBQSxtQkFNTUYsc0RBQVEsQ0FBQyxFQUFELENBTmQ7QUFBQSxNQU16QkcsV0FOeUI7QUFBQSxNQU1aQyxjQU5ZOztBQUFBLG1CQU9RSixzREFBUSxDQUFDLEVBQUQsQ0FQaEI7QUFBQSxNQU96QkssWUFQeUI7QUFBQSxNQU9YQyxlQVBXOztBQUFBLG1CQVFZTixzREFBUSxDQUFDLEVBQUQsQ0FScEI7QUFBQSxNQVF6Qk8sY0FSeUI7QUFBQSxNQVFUQyxpQkFSUzs7QUFBQSxtQkFTQ1Isc0RBQVEsQ0FBQyxLQUFELENBVFQ7QUFBQSxNQVN6QlMsV0FUeUI7QUFBQSxNQVNaQyxTQVRZOztBQUFBLG1CQVVZVixzREFBUSxDQUFDLEtBQUQsQ0FWcEI7QUFBQSxNQVV6QlcsaUJBVnlCO0FBQUEsTUFVTkMsY0FWTTs7QUFBQSxtQkFXUVosc0RBQVEsQ0FBQyxLQUFELENBWGhCO0FBQUEsTUFXekJhLGVBWHlCO0FBQUEsTUFXUkMsWUFYUTs7QUFBQSxtQkFZSmQsc0RBQVEsQ0FBQyxJQUFELENBWko7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O0FBR0UsU0FBRyw2QkFBc0JqRyxLQUF0QixDQUhMO0FBSUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JaLGlCQUFTO0FBQ1RyQyx1QkFBZSxDQUFDcUYsRUFBRSxDQUFDeUIsR0FBSixDQUFmO0FBQ0E1Ryx5QkFBaUIsQ0FBQzhCLFVBQVUsQ0FBQ2lCLEtBQUQsQ0FBWCxDQUFqQjtBQUNELE9BUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBV0U7QUFBSyxhQUFPLEVBQUUsbUJBQU07QUFDbEJWLHFCQUFhO0FBQ2J2Qyx1QkFBZSxDQUFDcUYsRUFBRSxDQUFDeUIsR0FBSixDQUFmO0FBQ0MsT0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FYRixDQURGO0FBb0JELEdBekJILENBREEsR0EyQkEsSUFuRE4sQ0FERixDQXpCRixDQWhMRixDQURGO0FBb1FEOztHQTNoQnVCdkgsTztVQUVURSw2RDs7O0tBRlNGLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS45ZjlhYWFiYmMyZTAwODc5MTRhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBFZGl0QnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXRCdG5cIjtcclxuaW1wb3J0IEVkaXRUYWdzIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsX0VkaXRUYWdzXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc2Fzcy9HYWxsZXJ5UGFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgY2FuY2VsSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3RpbWVzLWNpcmNsZS1zb2xpZC5wbmdcIjtcclxuXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91dGlscy91c2VXaW5kb3dTaXplXCI7XHJcblxyXG5pbXBvcnQgeyBwaG90b01vZGFsU3R5bGUsIHVwbG9hZE1vZGFsU3R5bGUsIHRhZ3NNb2RhbFN0eWxlIH0gZnJvbSBcIi4uL3V0aWxzL21vZGFsU3R5bGVzXCI7XHJcblxyXG5Nb2RhbC5zZXRBcHBFbGVtZW50KFwiYm9keVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XHJcbiAgLy8gd2luZG93U2l6ZSBjdXN0b20gaG9va1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIC8vc3RhdGUgZGVjbGFyYXRpb25zXHJcbiAgY29uc3QgW2dhbGxlcnlJbWFnZXMsIHNldEdhbGxlcnlJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtnYWxsZXJ5VGFncywgc2V0R2FsbGVyeVRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjbGlja2VkSW1hZ2UsIHNldENsaWNrZWRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2xpY2tlZEltYWdlSWQsIHNldENsaWNrZWRJbWFnZUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkTW9kYWxJc09wZW4sIHNldFVwbG9hZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFnc01vZGFsSXNPcGVuLCBzZXRUYWdzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VzVG9VcGxvYWQsIHNldEltYWdlc1RvVXBsb2FkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2xpY2tlZERvbmUsIHNldENsaWNrZWREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RhZ2VkSW1hZ2VJbmRleCwgc2V0U3RhZ2VkSW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGh1bWJzLCBzZXRUaHVtYnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthZGRpbmdJbWFnZSwgc2V0QWRkaW5nSW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5wdXRLZXksIHNldElucHV0a2V5XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcclxuXHJcbiAgLy92YXJpYWJsZSBhbmQgZnVuY3Rpb24gZGVjbGFyYXRpb25zXHJcbiAgY29uc3QgYWxsVGFncyA9IFtcclxuICAgIFwiUmVzaWRlbnRpYWxcIixcclxuICAgIFwiQ29tbWVyY2lhbFwiLFxyXG4gICAgXCJJbnRlcmlvclwiLFxyXG4gICAgXCJFeHRlcmlvclwiLFxyXG4gICAgXCJDYWJpbmV0c1wiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBbXCJBbGxcIl0uY29uY2F0KGFsbFRhZ3MpO1xyXG5cclxuICB2YXIgcHVibGljX2lkcyA9IFtdO1xyXG5cclxuICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgLy9Nb2RhbCBmdW5jdGlvbnNcclxuXHJcbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvcGVuVXBsb2FkTW9kYWwoKSB7XHJcbiAgICBzZXRVcGxvYWRNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5UYWdzTW9kYWwoKSB7XHJcbiAgICBzZXRUYWdzTW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlVXBsb2FkTW9kYWwoKSB7XHJcbiAgICBzZXRVcGxvYWRNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVRhZ3NNb2RhbCgpIHtcclxuICAgIHNldFRhZ3NNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvL3RhZ2dpbmcgZnVuY3Rpb25zXHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRhZyh0LCBpKSB7XHJcbiAgICBpZiAoIXRhZ3NbaV0pIHtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgKHRhZ3NbaV0gPSBbdF0pXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0ZW1wID0gdGFnc1tpXTtcclxuICAgICAgc2V0VGFncyhcclxuICAgICAgICB0YWdzLm1hcCgoYXJyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID09IGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChhcnJbaV0gPSB0ZW1wLmNvbmNhdCh0KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYW5jZWxUYWcodCwgaSkge1xyXG4gICAgc2V0VGFncyhcclxuICAgICAgdGFncy5tYXAoKGFyciwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiBhcnIuZmlsdGVyKCh0YWcpID0+IHRhZyAhPT0gdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHRvYXN0IGZ1bmN0aW9uc1xyXG5cclxuICBjb25zdCBzdWNjZXNzVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3Quc3VjY2VzcyhcIiBVcGxvYWQgU3VjY2Vzc1wiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgIGNsYXNzTmFtZTogc3R5bGUudG9hc3RTdWNjZXNzLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGVycm9yVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3QuZXJyb3IoXCJVcGxvYWQgZXJyb3IsIHBsZWFzZSByZWZyZXNoXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB3YXJuaW5nVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3Qud2FybihcIk5vIGltYWdlcyBzZWxlY3RlZFwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgLy8gZmlsZSBmdW5jdGlvbnNcclxuICBjb25zdCByZXNldElucHV0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHNpZ24gPSBEYXRlLm5vdygpO1xyXG4gICAgc2V0SW5wdXRrZXkoc2lnbik7XHJcbiAgfTtcclxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZERvbmUoZmFsc2UpO1xyXG4gICAgc2V0QWRkaW5nSW1hZ2UodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZXNUb1VwbG9hZChbLi4uaW1hZ2VzVG9VcGxvYWQsIGUudGFyZ2V0LmZpbGVzWzBdXSk7XHJcbiAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVVwbG9hZChpKSB7XHJcbiAgICBpZiAodGh1bWJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgaWYgKHByZXZpZXcgPT09IHRodW1ic1tpXSkge1xyXG4gICAgICAgIHNldFByZXZpZXcodGh1bWJzW2kgLSAxXSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGVtcDEgPSB0aHVtYnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICBjb25zdCB0ZW1wMiA9IGltYWdlc1RvVXBsb2FkLnNwbGljZShpLCAxKTtcclxuICAgICAgY29uc3QgdGVtcDMgPSB0YWdzLnNwbGljZShpLCAxKTtcclxuICAgICAgc2V0VGh1bWJzKHRodW1icy5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGVtcDEpKTtcclxuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoXHJcbiAgICAgICAgaW1hZ2VzVG9VcGxvYWQuZmlsdGVyKChlbCkgPT4gZWwgIT09IHRlbXAyLnNwbGljZShpLCAxKSlcclxuICAgICAgKTtcclxuICAgICAgc2V0VGFncyh0YWdzLmZpbHRlcigodCkgPT4gdCAhPT0gdGVtcDMpKTtcclxuICAgICAgc2V0QWRkaW5nSW1hZ2UoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGFncyhbXSk7XHJcbiAgICAgIHNldFRodW1icyhbXSk7XHJcbiAgICAgIHNldEltYWdlc1RvVXBsb2FkKFtdKTtcclxuICAgICAgc2V0UHJldmlldyhudWxsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJwcmV2aWV3XCIsIHByZXZpZXcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFpbWFnZXNUb1VwbG9hZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHdhcm5pbmdUb2FzdCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlc1RvVXBsb2FkLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VzXCIsIGUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWdzXCIsIHRhZ3NbaV0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh0YWdzW2ldKTtcclxuICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhwYWlyWzFdLCBwYWlyWzJdKTtcclxuICAgIH1cclxuXHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBzdWNjZXNzVG9hc3QoKTtcclxuICAgICAgICBjbG9zZVVwbG9hZE1vZGFsKCk7XHJcbiAgICAgICAgc2V0UHJldmlldyhudWxsKTtcclxuICAgICAgICBzZXRJbWFnZXNUb1VwbG9hZChbXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBlcnJvclRvYXN0KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gU2lkZSBlZmZlY3RzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoICYmIGFkZGluZ0ltYWdlID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXHJcbiAgICAgICAgaW1hZ2VzVG9VcGxvYWRbaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMV1cclxuICAgICAgKTtcclxuICAgICAgc2V0UHJldmlldyhvYmplY3RVcmwpO1xyXG4gICAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDEpO1xyXG4gICAgICBzZXRBZGRpbmdJbWFnZShmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiKioqXCIsIGltYWdlc1RvVXBsb2FkKTtcclxuICAgIH1cclxuICB9LCBbaW1hZ2VzVG9VcGxvYWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJyYW5kYWxsLWF1dGhvcml6YXRpb25cIikpO1xyXG4gICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvc2VhcmNoXCJcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHB1YmxpY19pZHMgPSByZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQdWJsaWMgSURzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHB1YmxpY19pZHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvL2luaXRpYWxpemVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvaW1hZ2VzL1wiLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRHYWxsZXJ5SW1hZ2VzKFxyXG4gICAgICAgICAgcmVzLmRhdGEubWFwKChhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBpLCB1cmw6IGEgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvaW1hZ2VzL1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5wb3N0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS90YWdzXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkczogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKip0YWdzXCIsIHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRHYWxsZXJ5VGFncyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgdGFnc1wiLCBlcnIpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IEdFVFwiLCBlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChnYWxsZXJ5VGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgZ2FsbGVyeUltYWdlcy5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGlkOiBhLmlkLCB1cmw6IGEudXJsLCB0YWdzOiBnYWxsZXJ5VGFnc1tpXSB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2dhbGxlcnlUYWdzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Ui5SYW5kYWxsIEdhbGxlcnk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE0LjAvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUh6TGVCdWhvTlB2U2w1S1luangwQlQrV0IwUUVFcUxwck8rTkJra2s1Z2JjNjdGVGFMN1hJR2EydzFMMFhiZ2NcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3Bob3RvTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2NsaWNrZWRJbWFnZX1cclxuICAgICAgICAgIGFsdD1cImdhbGxlcnkgbW9kYWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jbGlja2VkSW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXt1cGxvYWRNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VVcGxvYWRNb2RhbH1cclxuICAgICAgICBzdHlsZT17dXBsb2FkTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgICAgaWQ9e3N0eWxlLnVwbG9hZE1vZGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZE1vZGFsfT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17aW5wdXRLZXkgfHwgXCJcIn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltZ0NvbGxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudXBsb2FkSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuc3VibWl0QnRufT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT5VcGxvYWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJldmlldyA/IHN0eWxlLnByZXZpZXdzIDogbnVsbH0+XHJcbiAgICAgICAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RhZ2luZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGFnc30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnc1RpdGxlfT5UYWdzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgeyF0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhbGxUYWdzLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWxsVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1baV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIXRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gfHwgY2xpY2tlZERvbmUgPyBcImRpc2FibGVkXCIgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlLmRpc2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLmRvbmVCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5kaXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRodW1icyhbLi4udGh1bWJzLCBwcmV2aWV3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkRG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlN0YWdpbmdQaWNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnN0YWdpbmdQaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzdGFnaW5nIHByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c3R5bGUudGFnZ2VkSWNvbn0gZmFzIGZhLXRpbWVzYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnZ2VkfT57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWludGh1bWJzRGl2fT5cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRodW1ic0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QWRkIE1vcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLXBsdXMgJHtzdHlsZS5wbHVzSWNvbn1gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGUtdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIHRodW1icy5tYXAoKHAsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGh1bWJzRGl2fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aHVtYnMubGVuZ3RoID4gMSAmJiBzZXRQcmV2aWV3KHRodW1ic1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY3Jvc3NJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcGxvYWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYW5jZWxJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUucHJldmlld1RodW1ifSBzcmM9e3B9IHRhYkluZGV4PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e3RhZ3NNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VUYWdzTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3RhZ3NNb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxFZGl0VGFncyBpbWc9e2NsaWNrZWRJbWFnZX0gaWQ9e2NsaWNrZWRJbWFnZUlkfS8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlQYWdlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5VGl0bGV9PkZ1bGwgR2FsbGVyeTwvaDI+XHJcbiAgICAgICAge2xvZ2dlZCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkQnRufSBvbkNsaWNrPXtvcGVuVXBsb2FkTW9kYWx9PlxyXG4gICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IGNcclxuICAgICAgICAgICAgICAgICAgICA/IGAke3N0eWxlLnRhZ0J0bn0gJHtzdHlsZS5hY3RpdmVUYWdCdG59YFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3R5bGUudGFnQnRuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUNhdGVnb3J5KGMpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cclxuICAgICAgICAgICAge2NhdGVnb3J5ID09PSBcIkFsbFwiXHJcbiAgICAgICAgICAgICAgPyBnYWxsZXJ5SW1hZ2VzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblRhZ3NNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNfaWRzW2luZGV4XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IGNhdGVnb3J5ICE9PSBcIkFMTFwiICYmIGdhbGxlcnlUYWdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IGdhbGxlcnlJbWFnZXNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwudGFncy5pbmNsdWRlcyhjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNfaWRzW2luZGV4XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuVGFnc01vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0QnRuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=