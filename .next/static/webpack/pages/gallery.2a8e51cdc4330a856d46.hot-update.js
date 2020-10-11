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
/* harmony import */ var _utils_tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/tags */ "./utils/tags.js");
/* harmony import */ var _utils_modalStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/modalStyles */ "./utils/modalStyles.js");


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

  // windowSize Custom Hook
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Modal Styles - Responsives Sizing

  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_13__["photoModalStyle"].content.width = size.width <= 1024 ? "95%" : "60%";
  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_13__["uploadModalStyle"].content.width = size.width <= 1024 ? "95%" : "60%";
  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_13__["tagsModalStyle"].content.width = size.width <= 1024 ? "95%" : "60%"; //state declarations

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


  var allTags = _utils_tags__WEBPACK_IMPORTED_MODULE_12__["Tags"];
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
      lineNumber: 298,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 9
    }
  }, "R.Randall Gallery"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
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
      lineNumber: 301,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 7
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_13__["photoModalStyle"],
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: clickedImage,
    alt: "gallery modal",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.clickedImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: uploadModalIsOpen,
    onRequestClose: closeUploadModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_13__["uploadModalStyle"],
    contentLabel: "Modal",
    id: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
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
      lineNumber: 330,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.submitBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }), "Upload")), __jsx("div", {
    className: preview ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previews : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 11
    }
  }, preview && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.staging,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagsTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
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
        lineNumber: 350,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 27
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
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
        lineNumber: 374,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
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
      lineNumber: 384,
      columnNumber: 19
    }
  }, "Done")), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.StagingPicDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 17
    }
  }, preview && __jsx("img", {
    style: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stagingPic,
    src: preview,
    alt: "staging preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
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
        lineNumber: 416,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.taggedIcon, " fas fa-times"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagged,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 27
      }
    }, t));
  })))), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mainthumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }
  }, thumbs.length > 0 && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 17
    }
  }, __jsx("label", {
    "for": "file-upload",
    "class": "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 21
    }
  }, "Add More"), __jsx("i", {
    className: "fas fa-plus ".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.plusIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 21
    }
  })), __jsx("input", {
    id: "file-upload",
    type: "file",
    onChange: onFileChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
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
        lineNumber: 442,
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
        lineNumber: 449,
        columnNumber: 21
      }
    }), __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previewThumb,
      src: p,
      tabIndex: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 21
      }
    }));
  }))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
    isOpen: tagsModalIsOpen,
    onRequestClose: closeTagsModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_13__["tagsModalStyle"],
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 7
    }
  }, __jsx(_components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: clickedImage,
    id: clickedImageId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 9
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 9
    }
  }, "Full Gallery"), logged && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadBtn,
    onClick: openUploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 11
    }
  }, "Upload"), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
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
        lineNumber: 483,
        columnNumber: 15
      }
    }, c);
  })), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rows,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 11
    }
  }, category === "All" ? galleryImages.map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
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
        lineNumber: 504,
        columnNumber: 23
      }
    }), __jsx("div", {
      onClick: function onClick() {
        openTagsModal();
        setClickedImage(el.url);
        setClickedImageId(publicIds[index]);
        console.log(clickedImageId);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 23
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
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
        lineNumber: 531,
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
        lineNumber: 532,
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
        lineNumber: 542,
        columnNumber: 25
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJwaG90b01vZGFsU3R5bGUiLCJjb250ZW50Iiwid2lkdGgiLCJ1cGxvYWRNb2RhbFN0eWxlIiwidGFnc01vZGFsU3R5bGUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJwdWJsaWNJZHMiLCJzZXRQdWJsaWNJZHMiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJ0YWdzTW9kYWxJc09wZW4iLCJzZXRUYWdzTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwiY2xpY2tlZERvbmUiLCJzZXRDbGlja2VkRG9uZSIsInN0YWdlZEltYWdlSW5kZXgiLCJzZXRTdGFnZWRJbWFnZUluZGV4IiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aHVtYnMiLCJzZXRUaHVtYnMiLCJhZGRpbmdJbWFnZSIsInNldEFkZGluZ0ltYWdlIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEtleSIsInNldElucHV0a2V5IiwiY2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFsbFRhZ3MiLCJUYWdzIiwiYWxsQ2F0ZWdvcmllcyIsImNvbmNhdCIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsIndpdGhDcmVkZW50aWFscyIsIm9wZW5Nb2RhbCIsIm9wZW5VcGxvYWRNb2RhbCIsIm9wZW5UYWdzTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImNsb3NlVGFnc01vZGFsIiwiYWRkVGFnIiwidCIsImkiLCJ0ZW1wIiwibWFwIiwiYXJyIiwiaW5kZXgiLCJjYW5jZWxUYWciLCJmaWx0ZXIiLCJ0YWciLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b2FzdFN1Y2Nlc3MiLCJlcnJvclRvYXN0IiwiZXJyb3IiLCJ3YXJuaW5nVG9hc3QiLCJ3YXJuIiwicmVzZXRJbnB1dCIsInNpZ24iLCJEYXRlIiwibm93Iiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZGVsZXRlVXBsb2FkIiwidGVtcDEiLCJzcGxpY2UiLCJ0ZW1wMiIsInRlbXAzIiwiZWwiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJwb3N0IiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsIm9iamVjdFVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJkYXRhIiwiYSIsImlkIiwidXJsIiwiaWRzIiwidXBsb2FkTW9kYWwiLCJ1cGxvYWRJbnB1dCIsInN1Ym1pdEJ0biIsInByZXZpZXdzIiwic3RhZ2luZyIsInRhZ3NUaXRsZSIsInRhZ1JvdyIsImRpc2FibGUiLCJkb25lQnRuIiwiU3RhZ2luZ1BpY0RpdiIsInN0YWdpbmdQaWMiLCJhY3RpdmVUYWdzIiwidGFnZ2VkSWNvbiIsInRhZ2dlZCIsIm1haW50aHVtYnNEaXYiLCJ0aHVtYnNEaXYiLCJwbHVzSWNvbiIsInAiLCJjcm9zc0ljb24iLCJjYW5jZWxJY29uIiwicHJldmlld1RodW1iIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJjYXRlZ29yaWVzIiwiYyIsInRhZ0J0biIsImFjdGl2ZVRhZ0J0biIsImdyaWQiLCJyb3dzIiwiaXRlbSIsImdhbGxlcnlJbWFnZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBQSxrREFBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCO0FBRWUsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUVoQztBQUNBLE1BQU1DLElBQUksR0FBR0MscUVBQWEsRUFBMUIsQ0FIZ0MsQ0FLaEM7O0FBQ0FDLHFFQUFlLENBQUNDLE9BQWhCLENBQXdCQyxLQUF4QixHQUFnQ0osSUFBSSxDQUFDSSxLQUFMLElBQWMsSUFBZCxHQUFxQixLQUFyQixHQUE2QixLQUE3RDtBQUNBQyxzRUFBZ0IsQ0FBQ0YsT0FBakIsQ0FBeUJDLEtBQXpCLEdBQWlDSixJQUFJLENBQUNJLEtBQUwsSUFBYyxJQUFkLEdBQXFCLEtBQXJCLEdBQTZCLEtBQTlEO0FBQ0FFLG9FQUFjLENBQUNILE9BQWYsQ0FBdUJDLEtBQXZCLEdBQStCSixJQUFJLENBQUNJLEtBQUwsSUFBYyxJQUFkLEdBQXFCLEtBQXJCLEdBQTZCLEtBQTVELENBUmdDLENBVWhDOztBQVZnQyxrQkFXVUcsc0RBQVEsQ0FBQyxFQUFELENBWGxCO0FBQUEsTUFXekJDLGFBWHlCO0FBQUEsTUFXVkMsZ0JBWFU7O0FBQUEsbUJBWU1GLHNEQUFRLENBQUMsRUFBRCxDQVpkO0FBQUEsTUFZekJHLFdBWnlCO0FBQUEsTUFZWkMsY0FaWTs7QUFBQSxtQkFhUUosc0RBQVEsQ0FBQyxFQUFELENBYmhCO0FBQUEs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YTg1NmQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBFZGl0QnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXRCdG5cIjtcclxuaW1wb3J0IEVkaXRUYWdzIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsX0VkaXRUYWdzXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc2Fzcy9HYWxsZXJ5UGFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgY2FuY2VsSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3RpbWVzLWNpcmNsZS1zb2xpZC5wbmdcIjtcclxuXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91dGlscy91c2VXaW5kb3dTaXplXCI7XHJcbmltcG9ydCB7IFRhZ3MgfSBmcm9tIFwiLi4vdXRpbHMvdGFnc1wiO1xyXG5cclxuaW1wb3J0IHsgcGhvdG9Nb2RhbFN0eWxlLCB1cGxvYWRNb2RhbFN0eWxlLCB0YWdzTW9kYWxTdHlsZSB9IGZyb20gXCIuLi91dGlscy9tb2RhbFN0eWxlc1wiO1xyXG5cclxuTW9kYWwuc2V0QXBwRWxlbWVudChcImJvZHlcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xyXG5cclxuICAvLyB3aW5kb3dTaXplIEN1c3RvbSBIb29rXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICBcclxuICAvLyBNb2RhbCBTdHlsZXMgLSBSZXNwb25zaXZlcyBTaXppbmdcclxuICBwaG90b01vZGFsU3R5bGUuY29udGVudC53aWR0aCA9IHNpemUud2lkdGggPD0gMTAyNCA/IFwiOTUlXCIgOiBcIjYwJVwiO1xyXG4gIHVwbG9hZE1vZGFsU3R5bGUuY29udGVudC53aWR0aCA9IHNpemUud2lkdGggPD0gMTAyNCA/IFwiOTUlXCIgOiBcIjYwJVwiO1xyXG4gIHRhZ3NNb2RhbFN0eWxlLmNvbnRlbnQud2lkdGggPSBzaXplLndpZHRoIDw9IDEwMjQgPyBcIjk1JVwiIDogXCI2MCVcIjtcclxuXHJcbiAgLy9zdGF0ZSBkZWNsYXJhdGlvbnNcclxuICBjb25zdCBbZ2FsbGVyeUltYWdlcywgc2V0R2FsbGVyeUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2dhbGxlcnlUYWdzLCBzZXRHYWxsZXJ5VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NsaWNrZWRJbWFnZSwgc2V0Q2xpY2tlZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjbGlja2VkSW1hZ2VJZCwgc2V0Q2xpY2tlZEltYWdlSWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B1YmxpY0lkcywgc2V0UHVibGljSWRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkTW9kYWxJc09wZW4sIHNldFVwbG9hZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFnc01vZGFsSXNPcGVuLCBzZXRUYWdzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VzVG9VcGxvYWQsIHNldEltYWdlc1RvVXBsb2FkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2xpY2tlZERvbmUsIHNldENsaWNrZWREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RhZ2VkSW1hZ2VJbmRleCwgc2V0U3RhZ2VkSW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGh1bWJzLCBzZXRUaHVtYnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthZGRpbmdJbWFnZSwgc2V0QWRkaW5nSW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5wdXRLZXksIHNldElucHV0a2V5XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcclxuXHJcbiAgLy92YXJpYWJsZSBhbmQgZnVuY3Rpb24gZGVjbGFyYXRpb25zXHJcbiAgY29uc3QgYWxsVGFncyA9IFRhZ3M7XHJcblxyXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBbXCJBbGxcIl0uY29uY2F0KGFsbFRhZ3MpO1xyXG5cclxuICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgLy9Nb2RhbCBmdW5jdGlvbnNcclxuXHJcbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvcGVuVXBsb2FkTW9kYWwoKSB7XHJcbiAgICBzZXRVcGxvYWRNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5UYWdzTW9kYWwoKSB7XHJcbiAgICBzZXRUYWdzTW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlVXBsb2FkTW9kYWwoKSB7XHJcbiAgICBzZXRVcGxvYWRNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVRhZ3NNb2RhbCgpIHtcclxuICAgIHNldFRhZ3NNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvL3RhZ2dpbmcgZnVuY3Rpb25zXHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRhZyh0LCBpKSB7XHJcbiAgICBpZiAoIXRhZ3NbaV0pIHtcclxuICAgICAgc2V0VGFncyhbLi4udGFncywgKHRhZ3NbaV0gPSBbdF0pXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0ZW1wID0gdGFnc1tpXTtcclxuICAgICAgc2V0VGFncyhcclxuICAgICAgICB0YWdzLm1hcCgoYXJyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID09IGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChhcnJbaV0gPSB0ZW1wLmNvbmNhdCh0KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYW5jZWxUYWcodCwgaSkge1xyXG4gICAgc2V0VGFncyhcclxuICAgICAgdGFncy5tYXAoKGFyciwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiBhcnIuZmlsdGVyKCh0YWcpID0+IHRhZyAhPT0gdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHRvYXN0IGZ1bmN0aW9uc1xyXG5cclxuICBjb25zdCBzdWNjZXNzVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3Quc3VjY2VzcyhcIiBVcGxvYWQgU3VjY2Vzc1wiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgIGNsYXNzTmFtZTogc3R5bGUudG9hc3RTdWNjZXNzLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGVycm9yVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3QuZXJyb3IoXCJVcGxvYWQgZXJyb3IsIHBsZWFzZSByZWZyZXNoXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB3YXJuaW5nVG9hc3QgPSAoKSA9PlxyXG4gICAgdG9hc3Qud2FybihcIk5vIGltYWdlcyBzZWxlY3RlZFwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgLy8gZmlsZSBmdW5jdGlvbnNcclxuICBjb25zdCByZXNldElucHV0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHNpZ24gPSBEYXRlLm5vdygpO1xyXG4gICAgc2V0SW5wdXRrZXkoc2lnbik7XHJcbiAgfTtcclxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZERvbmUoZmFsc2UpO1xyXG4gICAgc2V0QWRkaW5nSW1hZ2UodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZXNUb1VwbG9hZChbLi4uaW1hZ2VzVG9VcGxvYWQsIGUudGFyZ2V0LmZpbGVzWzBdXSk7XHJcbiAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVVwbG9hZChpKSB7XHJcbiAgICBpZiAodGh1bWJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgaWYgKHByZXZpZXcgPT09IHRodW1ic1tpXSkge1xyXG4gICAgICAgIHNldFByZXZpZXcodGh1bWJzW2kgLSAxXSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGVtcDEgPSB0aHVtYnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICBjb25zdCB0ZW1wMiA9IGltYWdlc1RvVXBsb2FkLnNwbGljZShpLCAxKTtcclxuICAgICAgY29uc3QgdGVtcDMgPSB0YWdzLnNwbGljZShpLCAxKTtcclxuICAgICAgc2V0VGh1bWJzKHRodW1icy5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGVtcDEpKTtcclxuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoXHJcbiAgICAgICAgaW1hZ2VzVG9VcGxvYWQuZmlsdGVyKChlbCkgPT4gZWwgIT09IHRlbXAyLnNwbGljZShpLCAxKSlcclxuICAgICAgKTtcclxuICAgICAgc2V0VGFncyh0YWdzLmZpbHRlcigodCkgPT4gdCAhPT0gdGVtcDMpKTtcclxuICAgICAgc2V0QWRkaW5nSW1hZ2UoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGFncyhbXSk7XHJcbiAgICAgIHNldFRodW1icyhbXSk7XHJcbiAgICAgIHNldEltYWdlc1RvVXBsb2FkKFtdKTtcclxuICAgICAgc2V0UHJldmlldyhudWxsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJwcmV2aWV3XCIsIHByZXZpZXcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFpbWFnZXNUb1VwbG9hZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHdhcm5pbmdUb2FzdCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGltYWdlc1RvVXBsb2FkLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VzXCIsIGUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0YWdzXCIsIHRhZ3NbaV0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh0YWdzW2ldKTtcclxuICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhwYWlyWzFdLCBwYWlyWzJdKTtcclxuICAgIH1cclxuXHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBzdWNjZXNzVG9hc3QoKTtcclxuICAgICAgICBjbG9zZVVwbG9hZE1vZGFsKCk7XHJcbiAgICAgICAgc2V0UHJldmlldyhudWxsKTtcclxuICAgICAgICBzZXRJbWFnZXNUb1VwbG9hZChbXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBlcnJvclRvYXN0KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gU2lkZSBlZmZlY3RzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoICYmIGFkZGluZ0ltYWdlID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXHJcbiAgICAgICAgaW1hZ2VzVG9VcGxvYWRbaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMV1cclxuICAgICAgKTtcclxuICAgICAgc2V0UHJldmlldyhvYmplY3RVcmwpO1xyXG4gICAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDEpO1xyXG4gICAgICBzZXRBZGRpbmdJbWFnZShmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiKioqXCIsIGltYWdlc1RvVXBsb2FkKTtcclxuICAgIH1cclxuICB9LCBbaW1hZ2VzVG9VcGxvYWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJyYW5kYWxsLWF1dGhvcml6YXRpb25cIikpO1xyXG4gICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvc2VhcmNoXCJcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvL2luaXRpYWxpemVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvaW1hZ2VzL1wiLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRHYWxsZXJ5SW1hZ2VzKFxyXG4gICAgICAgICAgcmVzLmRhdGEubWFwKChhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBpLCB1cmw6IGEgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvaW1hZ2VzL1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRQdWJsaWNJZHMoWy4uLnJlcy5kYXRhXSk7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UucG9zdChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdGFnc1wiLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZHM6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqdGFnc1wiLCByZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0R2FsbGVyeVRhZ3MocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJjYW5ub3QgZ2V0IHRhZ3NcIiwgZXJyKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBHRVRcIiwgZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ2FsbGVyeVRhZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRHYWxsZXJ5SW1hZ2VzKFxyXG4gICAgICAgIGdhbGxlcnlJbWFnZXMubWFwKChhLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBpZDogYS5pZCwgdXJsOiBhLnVybCwgdGFnczogZ2FsbGVyeVRhZ3NbaV0gfTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtnYWxsZXJ5VGFnc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlIuUmFuZGFsbCBHYWxsZXJ5PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNC4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1IekxlQnVob05QdlNsNUtZbmp4MEJUK1dCMFFFRXFMcHJPK05Ca2trNWdiYzY3RlRhTDdYSUdhMncxTDBYYmdjXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXtwaG90b01vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtjbGlja2VkSW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJnYWxsZXJ5IG1vZGFsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2xpY2tlZEltYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17dXBsb2FkTW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVXBsb2FkTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3VwbG9hZE1vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICAgIGlkPXtzdHlsZS51cGxvYWRNb2RhbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRNb2RhbH0+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2lucHV0S2V5IHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWdDb2xsZWN0aW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZElucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLnN1Ym1pdEJ0bn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+VXBsb2FkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ByZXZpZXcgPyBzdHlsZS5wcmV2aWV3cyA6IG51bGx9PlxyXG4gICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0YWdpbmd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRhZ3NUaXRsZX0+VGFnczwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHshdGFnc1tzdGFnZWRJbWFnZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWxsVGFncy5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhZyh0LCBzdGFnZWRJbWFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICA6IGFsbFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDwgdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSB0YWdzW3N0YWdlZEltYWdlSW5kZXhdW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICF0YWdzW3N0YWdlZEltYWdlSW5kZXhdIHx8IGNsaWNrZWREb25lID8gXCJkaXNhYmxlZFwiIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnc1tzdGFnZWRJbWFnZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZS5kaXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5kb25lQnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGUuZGlzYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaHVtYnMoWy4uLnRodW1icywgcHJldmlld10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZERvbmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5TdGFnaW5nUGljRGl2fT5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5zdGFnaW5nUGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3RhZ2luZyBwcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZVRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWdzW3N0YWdlZEltYWdlSW5kZXhdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3N0eWxlLnRhZ2dlZEljb259IGZhcyBmYS10aW1lc2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRhZ2dlZH0+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFpbnRodW1ic0Rpdn0+XHJcbiAgICAgICAgICAgICAge3RodW1icy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aHVtYnNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzcz1cImN1c3RvbS1maWxlLXVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkFkZCBNb3JlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhcyBmYS1wbHVzICR7c3R5bGUucGx1c0ljb259YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3RodW1icy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICB0aHVtYnMubWFwKChwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRodW1ic0Rpdn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGFnZWRJbWFnZUluZGV4KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGh1bWJzLmxlbmd0aCA+IDEgJiYgc2V0UHJldmlldyh0aHVtYnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNyb3NzSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVXBsb2FkKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FuY2VsSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLnByZXZpZXdUaHVtYn0gc3JjPXtwfSB0YWJJbmRleD17aX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXt0YWdzTW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlVGFnc01vZGFsfVxyXG4gICAgICAgIHN0eWxlPXt0YWdzTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8RWRpdFRhZ3MgaW1nPXtjbGlja2VkSW1hZ2V9IGlkPXtjbGlja2VkSW1hZ2VJZH0vPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5UGFnZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVRpdGxlfT5GdWxsIEdhbGxlcnk8L2gyPlxyXG4gICAgICAgIHtsb2dnZWQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZEJ0bn0gb25DbGljaz17b3BlblVwbG9hZE1vZGFsfT5cclxuICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXRlZ29yaWVzfT5cclxuICAgICAgICAgIHthbGxDYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBjXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtzdHlsZS50YWdCdG59ICR7c3R5bGUuYWN0aXZlVGFnQnRufWBcclxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLnRhZ0J0blxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmVDYXRlZ29yeShjKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2N9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucm93c30+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeSA9PT0gXCJBbGxcIlxyXG4gICAgICAgICAgICAgID8gZ2FsbGVyeUltYWdlcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5UYWdzTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlSWQocHVibGljSWRzW2luZGV4XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja2VkSW1hZ2VJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0QnRuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBjYXRlZ29yeSAhPT0gXCJBTExcIiAmJiBnYWxsZXJ5VGFncy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyBnYWxsZXJ5SW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRhZ3MuaW5jbHVkZXMoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIGF0IGluZGV4ICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlSWQocHVibGljSWRzW2luZGV4XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuVGFnc01vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0QnRuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=