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


  allTags = _utils_tags__WEBPACK_IMPORTED_MODULE_12__["Tags"];
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

/***/ }),

/***/ "./utils/tags.js":
/*!***********************!*\
  !*** ./utils/tags.js ***!
  \***********************/
/*! exports provided: Tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
// List of all tags for gallery
var Tags = ["Residential", "Commercial", "Interior", "Exterior", "Cabinets"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdGFncy5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJwaG90b01vZGFsU3R5bGUiLCJjb250ZW50Iiwid2lkdGgiLCJ1cGxvYWRNb2RhbFN0eWxlIiwidGFnc01vZGFsU3R5bGUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJwdWJsaWNJZHMiLCJzZXRQdWJsaWNJZHMiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJ0YWdzTW9kYWxJc09wZW4iLCJzZXRUYWdzTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwiY2xpY2tlZERvbmUiLCJzZXRDbGlja2VkRG9uZSIsInN0YWdlZEltYWdlSW5kZXgiLCJzZXRTdGFnZWRJbWFnZUluZGV4IiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aHVtYnMiLCJzZXRUaHVtYnMiLCJhZGRpbmdJbWFnZSIsInNldEFkZGluZ0ltYWdlIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEtleSIsInNldElucHV0a2V5IiwiY2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFsbFRhZ3MiLCJUYWdzIiwiYWxsQ2F0ZWdvcmllcyIsImNvbmNhdCIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsIndpdGhDcmVkZW50aWFscyIsIm9wZW5Nb2RhbCIsIm9wZW5VcGxvYWRNb2RhbCIsIm9wZW5UYWdzTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImNsb3NlVGFnc01vZGFsIiwiYWRkVGFnIiwidCIsImkiLCJ0ZW1wIiwibWFwIiwiYXJyIiwiaW5kZXgiLCJjYW5jZWxUYWciLCJmaWx0ZXIiLCJ0YWciLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b2FzdFN1Y2Nlc3MiLCJlcnJvclRvYXN0IiwiZXJyb3IiLCJ3YXJuaW5nVG9hc3QiLCJ3YXJuIiwicmVzZXRJbnB1dCIsInNpZ24iLCJEYXRlIiwibm93Iiwib25GaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZGVsZXRlVXBsb2FkIiwidGVtcDEiLCJzcGxpY2UiLCJ0ZW1wMiIsInRlbXAzIiwiZWwiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJwb3N0IiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsIm9iamVjdFVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJkYXRhIiwiYSIsImlkIiwidXJsIiwiaWRzIiwidXBsb2FkTW9kYWwiLCJ1cGxvYWRJbnB1dCIsInN1Ym1pdEJ0biIsInByZXZpZXdzIiwic3RhZ2luZyIsInRhZ3NUaXRsZSIsInRhZ1JvdyIsImRpc2FibGUiLCJkb25lQnRuIiwiU3RhZ2luZ1BpY0RpdiIsInN0YWdpbmdQaWMiLCJhY3RpdmVUYWdzIiwidGFnZ2VkSWNvbiIsInRhZ2dlZCIsIm1haW50aHVtYnNEaXYiLCJ0aHVtYnNEaXYiLCJwbHVzSWNvbiIsInAiLCJjcm9zc0ljb24iLCJjYW5jZWxJY29uIiwicHJldmlld1RodW1iIiwiZ2FsbGVyeVBhZ2UiLCJnYWxsZXJ5VGl0bGUiLCJ1cGxvYWRCdG4iLCJjYXRlZ29yaWVzIiwiYyIsInRhZ0J0biIsImFjdGl2ZVRhZ0J0biIsImdyaWQiLCJyb3dzIiwiaXRlbSIsImdhbGxlcnlJbWFnZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBQSxrREFBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCO0FBRWUsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUVoQztBQUNBLE1BQU1DLElBQUksR0FBR0MscUVBQWEsRUFBMUIsQ0FIZ0MsQ0FLaEM7O0FBQ0FDLHFFQUFlLENBQUNDLE9BQWhCLENBQXdCQyxLQUF4QixHQUFnQ0osSUFBSSxDQUFDSSxLQUFMLElBQWMsSUFBZCxHQUFxQixLQUFyQixHQUE2QixLQUE3RDtBQUNBQyxzRUFBZ0IsQ0FBQ0YsT0FBakIsQ0FBeUJDLEtBQXpCLEdBQWlDSixJQUFJLENBQUNJLEtBQUwsSUFBYyxJQUFkLEdBQXFCLEtBQXJCLEdBQTZCLEtBQTlEO0FBQ0FFLG9FQUFjLENBQUNILE9BQWYsQ0FBdUJDLEtBQXZCLEdBQStCSixJQUFJLENBQUNJLEtBQUwsSUFBYyxJQUFkLEdBQXFCLEtBQXJCLEdBQTZCLEtBQTVELENBUmdDLENBVWhDOztBQVZnQyxrQkFXVUcsc0RBQVEsQ0FBQyxFQUFELENBWGxCO0FBQUEsTUFXekJDLGFBWHlCO0FBQUEsTUFXVkMsZ0JBWFU7O0FBQUEsbUJBWU1GLHNEQUFRLENBQUMsRUFBRCxDQVpkO0FBQUEsTUFZekJHLFdBWnlCO0FBQUEsTUFZWkMsY0FaWTs7QUFBQSxt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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnhCO0FBQUE7QUFBQTtBQUVPLElBQU04QyxJQUFJLEdBQUcsQ0FDaEIsYUFEZ0IsRUFFaEIsWUFGZ0IsRUFHaEIsVUFIZ0IsRUFJaEIsVUFKZ0IsRUFLaEIsVUFMZ0IsQ0FBYiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5LjA0MWI3MGZiYWZiMGMzMzI4YmM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IEVkaXRCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdEJ0blwiO1xyXG5pbXBvcnQgRWRpdFRhZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxfRWRpdFRhZ3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuLi9pbWFnZXMvdGltZXMtY2lyY2xlLXNvbGlkLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IHsgVGFncyB9IGZyb20gXCIuLi91dGlscy90YWdzXCI7XHJcblxyXG5pbXBvcnQgeyBwaG90b01vZGFsU3R5bGUsIHVwbG9hZE1vZGFsU3R5bGUsIHRhZ3NNb2RhbFN0eWxlIH0gZnJvbSBcIi4uL3V0aWxzL21vZGFsU3R5bGVzXCI7XHJcblxyXG5Nb2RhbC5zZXRBcHBFbGVtZW50KFwiYm9keVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XHJcblxyXG4gIC8vIHdpbmRvd1NpemUgQ3VzdG9tIEhvb2tcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIFxyXG4gIC8vIE1vZGFsIFN0eWxlcyAtIFJlc3BvbnNpdmVzIFNpemluZ1xyXG4gIHBob3RvTW9kYWxTdHlsZS5jb250ZW50LndpZHRoID0gc2l6ZS53aWR0aCA8PSAxMDI0ID8gXCI5NSVcIiA6IFwiNjAlXCI7XHJcbiAgdXBsb2FkTW9kYWxTdHlsZS5jb250ZW50LndpZHRoID0gc2l6ZS53aWR0aCA8PSAxMDI0ID8gXCI5NSVcIiA6IFwiNjAlXCI7XHJcbiAgdGFnc01vZGFsU3R5bGUuY29udGVudC53aWR0aCA9IHNpemUud2lkdGggPD0gMTAyNCA/IFwiOTUlXCIgOiBcIjYwJVwiO1xyXG5cclxuICAvL3N0YXRlIGRlY2xhcmF0aW9uc1xyXG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FsbGVyeVRhZ3MsIHNldEdhbGxlcnlUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2xpY2tlZEltYWdlLCBzZXRDbGlja2VkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NsaWNrZWRJbWFnZUlkLCBzZXRDbGlja2VkSW1hZ2VJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVibGljSWRzLCBzZXRQdWJsaWNJZHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRNb2RhbElzT3Blbiwgc2V0VXBsb2FkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YWdzTW9kYWxJc09wZW4sIHNldFRhZ3NNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZXNUb1VwbG9hZCwgc2V0SW1hZ2VzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjbGlja2VkRG9uZSwgc2V0Q2xpY2tlZERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdGFnZWRJbWFnZUluZGV4LCBzZXRTdGFnZWRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aHVtYnMsIHNldFRodW1ic10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FkZGluZ0ltYWdlLCBzZXRBZGRpbmdJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnB1dEtleSwgc2V0SW5wdXRrZXldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG5cclxuICAvL3ZhcmlhYmxlIGFuZCBmdW5jdGlvbiBkZWNsYXJhdGlvbnNcclxuICBhbGxUYWdzID0gVGFncztcclxuXHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFtcIkFsbFwiXS5jb25jYXQoYWxsVGFncyk7XHJcblxyXG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICAvL01vZGFsIGZ1bmN0aW9uc1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5VcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblRhZ3NNb2RhbCgpIHtcclxuICAgIHNldFRhZ3NNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VVcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlVGFnc01vZGFsKCkge1xyXG4gICAgc2V0VGFnc01vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vdGFnZ2luZyBmdW5jdGlvbnNcclxuXHJcbiAgZnVuY3Rpb24gYWRkVGFnKHQsIGkpIHtcclxuICAgIGlmICghdGFnc1tpXSkge1xyXG4gICAgICBzZXRUYWdzKFsuLi50YWdzLCAodGFnc1tpXSA9IFt0XSldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSB0YWdzW2ldO1xyXG4gICAgICBzZXRUYWdzKFxyXG4gICAgICAgIHRhZ3MubWFwKChhcnIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPT0gaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFycltpXSA9IHRlbXAuY29uY2F0KHQpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbFRhZyh0LCBpKSB7XHJcbiAgICBzZXRUYWdzKFxyXG4gICAgICB0YWdzLm1hcCgoYXJyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSB0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9hc3QgZnVuY3Rpb25zXHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiIFVwbG9hZCBTdWNjZXNzXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgY2xhc3NOYW1lOiBzdHlsZS50b2FzdFN1Y2Nlc3MsXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgZXJyb3JUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5lcnJvcihcIlVwbG9hZCBlcnJvciwgcGxlYXNlIHJlZnJlc2hcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHdhcm5pbmdUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC53YXJuKFwiTm8gaW1hZ2VzIHNlbGVjdGVkXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAvLyBmaWxlIGZ1bmN0aW9uc1xyXG4gIGNvbnN0IHJlc2V0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2lnbiA9IERhdGUubm93KCk7XHJcbiAgICBzZXRJbnB1dGtleShzaWduKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRG9uZShmYWxzZSk7XHJcbiAgICBzZXRBZGRpbmdJbWFnZSh0cnVlKTtcclxuICAgIHNldEltYWdlc1RvVXBsb2FkKFsuLi5pbWFnZXNUb1VwbG9hZCwgZS50YXJnZXQuZmlsZXNbMF1dKTtcclxuICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVXBsb2FkKGkpIHtcclxuICAgIGlmICh0aHVtYnMubGVuZ3RoID4gMSkge1xyXG4gICAgICBpZiAocHJldmlldyA9PT0gdGh1bWJzW2ldKSB7XHJcbiAgICAgICAgc2V0UHJldmlldyh0aHVtYnNbaSAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZW1wMSA9IHRodW1icy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGNvbnN0IHRlbXAyID0gaW1hZ2VzVG9VcGxvYWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICBjb25zdCB0ZW1wMyA9IHRhZ3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBzZXRUaHVtYnModGh1bWJzLmZpbHRlcigoZWwpID0+IGVsICE9PSB0ZW1wMSkpO1xyXG4gICAgICBzZXRJbWFnZXNUb1VwbG9hZChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGVtcDIuc3BsaWNlKGksIDEpKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRUYWdzKHRhZ3MuZmlsdGVyKCh0KSA9PiB0ICE9PSB0ZW1wMykpO1xyXG4gICAgICBzZXRBZGRpbmdJbWFnZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUYWdzKFtdKTtcclxuICAgICAgc2V0VGh1bWJzKFtdKTtcclxuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoW10pO1xyXG4gICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInByZXZpZXdcIiwgcHJldmlldyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWltYWdlc1RvVXBsb2FkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gd2FybmluZ1RvYXN0KCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VzVG9VcGxvYWQuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRhZ3NcIiwgdGFnc1tpXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhZ3NbaV0pO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhaXJbMV0sIHBhaXJbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS91cGxvYWRcIixcclxuICAgICAgICBmb3JtRGF0YVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHN1Y2Nlc3NUb2FzdCgpO1xyXG4gICAgICAgIGNsb3NlVXBsb2FkTW9kYWwoKTtcclxuICAgICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICAgIHNldEltYWdlc1RvVXBsb2FkKFtdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGVycm9yVG9hc3QoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBTaWRlIGVmZmVjdHNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbWFnZXNUb1VwbG9hZC5sZW5ndGggJiYgYWRkaW5nSW1hZ2UgPT09IHRydWUpIHtcclxuICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZFtpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxXVxyXG4gICAgICApO1xyXG4gICAgICBzZXRQcmV2aWV3KG9iamVjdFVybCk7XHJcbiAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coXCIqKipcIiwgaW1hZ2VzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZXNUb1VwbG9hZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicnJhbmRhbGwtYXV0aG9yaXphdGlvblwiKSk7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9zZWFyY2hcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vaW5pdGlhbGl6ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCIsXHJcbiAgICAgICAge31cclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgICByZXMuZGF0YS5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGksIHVybDogYSB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldFB1YmxpY0lkcyhbLi4ucmVzLmRhdGFdKTtcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5wb3N0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS90YWdzXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkczogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKip0YWdzXCIsIHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRHYWxsZXJ5VGFncyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgdGFnc1wiLCBlcnIpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IEdFVFwiLCBlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChnYWxsZXJ5VGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgZ2FsbGVyeUltYWdlcy5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGlkOiBhLmlkLCB1cmw6IGEudXJsLCB0YWdzOiBnYWxsZXJ5VGFnc1tpXSB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2dhbGxlcnlUYWdzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Ui5SYW5kYWxsIEdhbGxlcnk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE0LjAvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUh6TGVCdWhvTlB2U2w1S1luangwQlQrV0IwUUVFcUxwck8rTkJra2s1Z2JjNjdGVGFMN1hJR2EydzFMMFhiZ2NcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3Bob3RvTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2NsaWNrZWRJbWFnZX1cclxuICAgICAgICAgIGFsdD1cImdhbGxlcnkgbW9kYWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jbGlja2VkSW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXt1cGxvYWRNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VVcGxvYWRNb2RhbH1cclxuICAgICAgICBzdHlsZT17dXBsb2FkTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgICAgaWQ9e3N0eWxlLnVwbG9hZE1vZGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZE1vZGFsfT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17aW5wdXRLZXkgfHwgXCJcIn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltZ0NvbGxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudXBsb2FkSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuc3VibWl0QnRufT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT5VcGxvYWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJldmlldyA/IHN0eWxlLnByZXZpZXdzIDogbnVsbH0+XHJcbiAgICAgICAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RhZ2luZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGFnc30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnc1RpdGxlfT5UYWdzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgeyF0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhbGxUYWdzLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWxsVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1baV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIXRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gfHwgY2xpY2tlZERvbmUgPyBcImRpc2FibGVkXCIgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlLmRpc2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLmRvbmVCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5kaXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRodW1icyhbLi4udGh1bWJzLCBwcmV2aWV3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkRG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlN0YWdpbmdQaWNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnN0YWdpbmdQaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzdGFnaW5nIHByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c3R5bGUudGFnZ2VkSWNvbn0gZmFzIGZhLXRpbWVzYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnZ2VkfT57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWludGh1bWJzRGl2fT5cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRodW1ic0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QWRkIE1vcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLXBsdXMgJHtzdHlsZS5wbHVzSWNvbn1gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGUtdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIHRodW1icy5tYXAoKHAsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGh1bWJzRGl2fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aHVtYnMubGVuZ3RoID4gMSAmJiBzZXRQcmV2aWV3KHRodW1ic1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY3Jvc3NJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcGxvYWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYW5jZWxJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUucHJldmlld1RodW1ifSBzcmM9e3B9IHRhYkluZGV4PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e3RhZ3NNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VUYWdzTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3RhZ3NNb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxFZGl0VGFncyBpbWc9e2NsaWNrZWRJbWFnZX0gaWQ9e2NsaWNrZWRJbWFnZUlkfS8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlQYWdlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5VGl0bGV9PkZ1bGwgR2FsbGVyeTwvaDI+XHJcbiAgICAgICAge2xvZ2dlZCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkQnRufSBvbkNsaWNrPXtvcGVuVXBsb2FkTW9kYWx9PlxyXG4gICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IGNcclxuICAgICAgICAgICAgICAgICAgICA/IGAke3N0eWxlLnRhZ0J0bn0gJHtzdHlsZS5hY3RpdmVUYWdCdG59YFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3R5bGUudGFnQnRuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUNhdGVnb3J5KGMpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cclxuICAgICAgICAgICAge2NhdGVnb3J5ID09PSBcIkFsbFwiXHJcbiAgICAgICAgICAgICAgPyBnYWxsZXJ5SW1hZ2VzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblRhZ3NNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNJZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRJbWFnZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IGNhdGVnb3J5ICE9PSBcIkFMTFwiICYmIGdhbGxlcnlUYWdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IGdhbGxlcnlJbWFnZXNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwudGFncy5pbmNsdWRlcyhjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNJZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5UYWdzTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gTGlzdCBvZiBhbGwgdGFncyBmb3IgZ2FsbGVyeVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3MgPSBbXHJcbiAgICBcIlJlc2lkZW50aWFsXCIsXHJcbiAgICBcIkNvbW1lcmNpYWxcIixcclxuICAgIFwiSW50ZXJpb3JcIixcclxuICAgIFwiRXh0ZXJpb3JcIixcclxuICAgIFwiQ2FiaW5ldHNcIixcclxuICBdOyJdLCJzb3VyY2VSb290IjoiIn0=