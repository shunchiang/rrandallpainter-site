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

  // windowSize Custom Hook
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Modal Styles - Responsives Sizing

  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["photoModalStyle"].content.width = size.width < 1024 ? "95%" : "60%";
  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["uploadModalStyle"].content.width = size.width < 1024 ? "95%" : "60%";
  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["tagsModalStyle"].content.width = size.width < 1024 ? "95%" : "60%"; //state declarations

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
      lineNumber: 303,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 9
    }
  }, "R.Randall Gallery"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
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
      lineNumber: 306,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
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
      lineNumber: 314,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: clickedImage,
    alt: "gallery modal",
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.clickedImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
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
      lineNumber: 326,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
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
      lineNumber: 335,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.submitBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }), "Upload")), __jsx("div", {
    className: preview ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previews : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 11
    }
  }, preview && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.staging,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagsTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
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
        lineNumber: 355,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 27
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
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
        lineNumber: 379,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fas fa-tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 29
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
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
      lineNumber: 389,
      columnNumber: 19
    }
  }, "Done")), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.StagingPicDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 17
    }
  }, preview && __jsx("img", {
    style: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stagingPic,
    src: preview,
    alt: "staging preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.activeTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
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
        lineNumber: 421,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.taggedIcon, " fas fa-times"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tagged,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 27
      }
    }, t));
  })))), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mainthumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 13
    }
  }, thumbs.length > 0 && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.thumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 17
    }
  }, __jsx("label", {
    "for": "file-upload",
    "class": "custom-file-upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 21
    }
  }, "Add More"), __jsx("i", {
    className: "fas fa-plus ".concat(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.plusIcon),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  })), __jsx("input", {
    id: "file-upload",
    type: "file",
    onChange: onFileChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
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
        lineNumber: 447,
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
        lineNumber: 454,
        columnNumber: 21
      }
    }), __jsx("img", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.previewThumb,
      src: p,
      tabIndex: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
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
      lineNumber: 469,
      columnNumber: 7
    }
  }, __jsx(_components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: clickedImage,
    id: clickedImageId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 9
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.galleryTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 9
    }
  }, "Full Gallery"), logged && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.uploadBtn,
    onClick: openUploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 11
    }
  }, "Upload"), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
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
        lineNumber: 488,
        columnNumber: 15
      }
    }, c);
  })), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rows,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 11
    }
  }, category === "All" ? galleryImages.map(function (el, index) {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
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
        lineNumber: 509,
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
        lineNumber: 518,
        columnNumber: 23
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
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
        lineNumber: 536,
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
        lineNumber: 537,
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
        lineNumber: 547,
        columnNumber: 25
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJwaG90b01vZGFsU3R5bGUiLCJjb250ZW50Iiwid2lkdGgiLCJ1cGxvYWRNb2RhbFN0eWxlIiwidGFnc01vZGFsU3R5bGUiLCJ1c2VTdGF0ZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJwdWJsaWNJZHMiLCJzZXRQdWJsaWNJZHMiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsInVwbG9hZE1vZGFsSXNPcGVuIiwic2V0VXBsb2FkTW9kYWwiLCJ0YWdzTW9kYWxJc09wZW4iLCJzZXRUYWdzTW9kYWwiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJpbWFnZXNUb1VwbG9hZCIsInNldEltYWdlc1RvVXBsb2FkIiwiY2xpY2tlZERvbmUiLCJzZXRDbGlja2VkRG9uZSIsInN0YWdlZEltYWdlSW5kZXgiLCJzZXRTdGFnZWRJbWFnZUluZGV4IiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aHVtYnMiLCJzZXRUaHVtYnMiLCJhZGRpbmdJbWFnZSIsInNldEFkZGluZ0ltYWdlIiwidGFncyIsInNldFRhZ3MiLCJpbnB1dEtleSIsInNldElucHV0a2V5IiwiY2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFsbFRhZ3MiLCJhbGxDYXRlZ29yaWVzIiwiY29uY2F0IiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwid2l0aENyZWRlbnRpYWxzIiwib3Blbk1vZGFsIiwib3BlblVwbG9hZE1vZGFsIiwib3BlblRhZ3NNb2RhbCIsImNsb3NlTW9kYWwiLCJjbG9zZVVwbG9hZE1vZGFsIiwiY2xvc2VUYWdzTW9kYWwiLCJhZGRUYWciLCJ0IiwiaSIsInRlbXAiLCJtYXAiLCJhcnIiLCJpbmRleCIsImNhbmNlbFRhZyIsImZpbHRlciIsInRhZyIsInN1Y2Nlc3NUb2FzdCIsInRvYXN0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRvYXN0U3VjY2VzcyIsImVycm9yVG9hc3QiLCJlcnJvciIsIndhcm5pbmdUb2FzdCIsIndhcm4iLCJyZXNldElucHV0Iiwic2lnbiIsIkRhdGUiLCJub3ciLCJvbkZpbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJkZWxldGVVcGxvYWQiLCJ0ZW1wMSIsInNwbGljZSIsInRlbXAyIiwidGVtcDMiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZXJyIiwidXNlRWZmZWN0Iiwib2JqZWN0VXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsImRhdGEiLCJhIiwiaWQiLCJ1cmwiLCJpZHMiLCJ1cGxvYWRNb2RhbCIsInVwbG9hZElucHV0Iiwic3VibWl0QnRuIiwicHJldmlld3MiLCJzdGFnaW5nIiwidGFnc1RpdGxlIiwidGFnUm93IiwiZGlzYWJsZSIsImRvbmVCdG4iLCJTdGFnaW5nUGljRGl2Iiwic3RhZ2luZ1BpYyIsImFjdGl2ZVRhZ3MiLCJ0YWdnZWRJY29uIiwidGFnZ2VkIiwibWFpbnRodW1ic0RpdiIsInRodW1ic0RpdiIsInBsdXNJY29uIiwicCIsImNyb3NzSWNvbiIsImNhbmNlbEljb24iLCJwcmV2aWV3VGh1bWIiLCJnYWxsZXJ5UGFnZSIsImdhbGxlcnlUaXRsZSIsInVwbG9hZEJ0biIsImNhdGVnb3JpZXMiLCJjIiwidGFnQnRuIiwiYWN0aXZlVGFnQnRuIiwiZ3JpZCIsInJvd3MiLCJpdGVtIiwiZ2FsbGVyeUltYWdlIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUFBLGtEQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEI7QUFFZSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBRWhDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxxRUFBYSxFQUExQixDQUhnQyxDQUtoQzs7QUFDQUMscUVBQWUsQ0FBQ0MsT0FBaEIsQ0FBd0JDLEtBQXhCLEdBQWdDSixJQUFJLENBQUNJLEtBQUwsR0FBYSxJQUFiLEdBQW9CLEtBQXBCLEdBQTRCLEtBQTVEO0FBQ0FDLHNFQUFnQixDQUFDRixPQUFqQixDQUF5QkMsS0FBekIsR0FBaUNKLElBQUksQ0FBQ0ksS0FBTCxHQUFhLElBQWIsR0FBb0IsS0FBcEIsR0FBNEIsS0FBN0Q7QUFDQUUsb0VBQWMsQ0FBQ0gsT0FBZixDQUF1QkMsS0FBdkIsR0FBK0JKLElBQUksQ0FBQ0ksS0FBTCxHQUFhLElBQWIsR0FBb0IsS0FBcEIsR0FBNEIsS0FBM0QsQ0FSZ0MsQ0FVaEM7O0FBVmdDLGtCQVdVRyxzREFBUSxDQUFDLEVBQUQsQ0FYbEI7QUFBQSxNQVd6QkMsYUFYeUI7QUFBQSxNQVdWQyxnQkFYVTs7QUFBQSxtQkFZTUYsc0RBQVEsQ0FBQyxFQUFELENBWmQ7QUFBQSxNQVl6QkcsV0FaeUI7QUFBQSxNQVlaQyxjQVpZOztBQUFBLG1CQWFRSixzREFBUSxDQUFDLEVBQUQsQ0FiaEI7QUFBQSxNQWF6QkssWUFieUI7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d2VicGFjay9wYWdlcy9nYWxsZXJ5LmRiZjFmNDU4YTcxNGFiOGEwMDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IEVkaXRCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdEJ0blwiO1xyXG5pbXBvcnQgRWRpdFRhZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxfRWRpdFRhZ3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuLi9pbWFnZXMvdGltZXMtY2lyY2xlLXNvbGlkLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL3VzZVdpbmRvd1NpemVcIjtcclxuXHJcbmltcG9ydCB7IHBob3RvTW9kYWxTdHlsZSwgdXBsb2FkTW9kYWxTdHlsZSwgdGFnc01vZGFsU3R5bGUgfSBmcm9tIFwiLi4vdXRpbHMvbW9kYWxTdHlsZXNcIjtcclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoXCJib2R5XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeSgpIHtcclxuXHJcbiAgLy8gd2luZG93U2l6ZSBDdXN0b20gSG9va1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgXHJcbiAgLy8gTW9kYWwgU3R5bGVzIC0gUmVzcG9uc2l2ZXMgU2l6aW5nXHJcbiAgcGhvdG9Nb2RhbFN0eWxlLmNvbnRlbnQud2lkdGggPSBzaXplLndpZHRoIDwgMTAyNCA/IFwiOTUlXCIgOiBcIjYwJVwiO1xyXG4gIHVwbG9hZE1vZGFsU3R5bGUuY29udGVudC53aWR0aCA9IHNpemUud2lkdGggPCAxMDI0ID8gXCI5NSVcIiA6IFwiNjAlXCI7XHJcbiAgdGFnc01vZGFsU3R5bGUuY29udGVudC53aWR0aCA9IHNpemUud2lkdGggPCAxMDI0ID8gXCI5NSVcIiA6IFwiNjAlXCI7XHJcblxyXG4gIC8vc3RhdGUgZGVjbGFyYXRpb25zXHJcbiAgY29uc3QgW2dhbGxlcnlJbWFnZXMsIHNldEdhbGxlcnlJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtnYWxsZXJ5VGFncywgc2V0R2FsbGVyeVRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjbGlja2VkSW1hZ2UsIHNldENsaWNrZWRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2xpY2tlZEltYWdlSWQsIHNldENsaWNrZWRJbWFnZUlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwdWJsaWNJZHMsIHNldFB1YmxpY0lkc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZE1vZGFsSXNPcGVuLCBzZXRVcGxvYWRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhZ3NNb2RhbElzT3Blbiwgc2V0VGFnc01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlc1RvVXBsb2FkLCBzZXRJbWFnZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NsaWNrZWREb25lLCBzZXRDbGlja2VkRG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0YWdlZEltYWdlSW5kZXgsIHNldFN0YWdlZEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RodW1icywgc2V0VGh1bWJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWRkaW5nSW1hZ2UsIHNldEFkZGluZ0ltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lucHV0S2V5LCBzZXRJbnB1dGtleV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XHJcblxyXG4gIC8vdmFyaWFibGUgYW5kIGZ1bmN0aW9uIGRlY2xhcmF0aW9uc1xyXG4gIGNvbnN0IGFsbFRhZ3MgPSBbXHJcbiAgICBcIlJlc2lkZW50aWFsXCIsXHJcbiAgICBcIkNvbW1lcmNpYWxcIixcclxuICAgIFwiSW50ZXJpb3JcIixcclxuICAgIFwiRXh0ZXJpb3JcIixcclxuICAgIFwiQ2FiaW5ldHNcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gW1wiQWxsXCJdLmNvbmNhdChhbGxUYWdzKTtcclxuXHJcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIC8vTW9kYWwgZnVuY3Rpb25zXHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb3BlblVwbG9hZE1vZGFsKCkge1xyXG4gICAgc2V0VXBsb2FkTW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuVGFnc01vZGFsKCkge1xyXG4gICAgc2V0VGFnc01vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVVwbG9hZE1vZGFsKCkge1xyXG4gICAgc2V0VXBsb2FkTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VUYWdzTW9kYWwoKSB7XHJcbiAgICBzZXRUYWdzTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy90YWdnaW5nIGZ1bmN0aW9uc1xyXG5cclxuICBmdW5jdGlvbiBhZGRUYWcodCwgaSkge1xyXG4gICAgaWYgKCF0YWdzW2ldKSB7XHJcbiAgICAgIHNldFRhZ3MoWy4uLnRhZ3MsICh0YWdzW2ldID0gW3RdKV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdGVtcCA9IHRhZ3NbaV07XHJcbiAgICAgIHNldFRhZ3MoXHJcbiAgICAgICAgdGFncy5tYXAoKGFyciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCA9PSBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYXJyW2ldID0gdGVtcC5jb25jYXQodCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsVGFnKHQsIGkpIHtcclxuICAgIHNldFRhZ3MoXHJcbiAgICAgIHRhZ3MubWFwKChhcnIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJyLmZpbHRlcigodGFnKSA9PiB0YWcgIT09IHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyB0b2FzdCBmdW5jdGlvbnNcclxuXHJcbiAgY29uc3Qgc3VjY2Vzc1RvYXN0ID0gKCkgPT5cclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCIgVXBsb2FkIFN1Y2Nlc3NcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICBjbGFzc05hbWU6IHN0eWxlLnRvYXN0U3VjY2VzcyxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBlcnJvclRvYXN0ID0gKCkgPT5cclxuICAgIHRvYXN0LmVycm9yKFwiVXBsb2FkIGVycm9yLCBwbGVhc2UgcmVmcmVzaFwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3Qgd2FybmluZ1RvYXN0ID0gKCkgPT5cclxuICAgIHRvYXN0Lndhcm4oXCJObyBpbWFnZXMgc2VsZWN0ZWRcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIC8vIGZpbGUgZnVuY3Rpb25zXHJcbiAgY29uc3QgcmVzZXRJbnB1dCA9ICgpID0+IHtcclxuICAgIGxldCBzaWduID0gRGF0ZS5ub3coKTtcclxuICAgIHNldElucHV0a2V5KHNpZ24pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldENsaWNrZWREb25lKGZhbHNlKTtcclxuICAgIHNldEFkZGluZ0ltYWdlKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VzVG9VcGxvYWQoWy4uLmltYWdlc1RvVXBsb2FkLCBlLnRhcmdldC5maWxlc1swXV0pO1xyXG4gICAgc2V0U3RhZ2VkSW1hZ2VJbmRleChpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBkZWxldGVVcGxvYWQoaSkge1xyXG4gICAgaWYgKHRodW1icy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGlmIChwcmV2aWV3ID09PSB0aHVtYnNbaV0pIHtcclxuICAgICAgICBzZXRQcmV2aWV3KHRodW1ic1tpIC0gMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRlbXAxID0gdGh1bWJzLnNwbGljZShpLCAxKTtcclxuICAgICAgY29uc3QgdGVtcDIgPSBpbWFnZXNUb1VwbG9hZC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGNvbnN0IHRlbXAzID0gdGFncy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIHNldFRodW1icyh0aHVtYnMuZmlsdGVyKChlbCkgPT4gZWwgIT09IHRlbXAxKSk7XHJcbiAgICAgIHNldEltYWdlc1RvVXBsb2FkKFxyXG4gICAgICAgIGltYWdlc1RvVXBsb2FkLmZpbHRlcigoZWwpID0+IGVsICE9PSB0ZW1wMi5zcGxpY2UoaSwgMSkpXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFRhZ3ModGFncy5maWx0ZXIoKHQpID0+IHQgIT09IHRlbXAzKSk7XHJcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRhZ3MoW10pO1xyXG4gICAgICBzZXRUaHVtYnMoW10pO1xyXG4gICAgICBzZXRJbWFnZXNUb1VwbG9hZChbXSk7XHJcbiAgICAgIHNldFByZXZpZXcobnVsbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicHJldmlld1wiLCBwcmV2aWV3KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghaW1hZ2VzVG9VcGxvYWQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB3YXJuaW5nVG9hc3QoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpbWFnZXNUb1VwbG9hZC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlc1wiLCBlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGFnc1wiLCB0YWdzW2ldKTtcclxuICAgICAgY29uc29sZS5sb2codGFnc1tpXSk7XHJcbiAgICB9KTtcclxuICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgY29uc29sZS5sb2cocGFpclsxXSwgcGFpclsyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3VwbG9hZFwiLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgc3VjY2Vzc1RvYXN0KCk7XHJcbiAgICAgICAgY2xvc2VVcGxvYWRNb2RhbCgpO1xyXG4gICAgICAgIHNldFByZXZpZXcobnVsbCk7XHJcbiAgICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoW10pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgZXJyb3JUb2FzdCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFNpZGUgZWZmZWN0c1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlc1RvVXBsb2FkLmxlbmd0aCAmJiBhZGRpbmdJbWFnZSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBvYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKFxyXG4gICAgICAgIGltYWdlc1RvVXBsb2FkW2ltYWdlc1RvVXBsb2FkLmxlbmd0aCAtIDFdXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFByZXZpZXcob2JqZWN0VXJsKTtcclxuICAgICAgc2V0U3RhZ2VkSW1hZ2VJbmRleChpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxKTtcclxuICAgICAgc2V0QWRkaW5nSW1hZ2UoZmFsc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIioqKlwiLCBpbWFnZXNUb1VwbG9hZCk7XHJcbiAgICB9XHJcbiAgfSwgW2ltYWdlc1RvVXBsb2FkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2dnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJycmFuZGFsbC1hdXRob3JpemF0aW9uXCIpKTtcclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLmdldChcclxuICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvaW1hZ2VzL3NlYXJjaFwiXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9pbml0aWFsaXplXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9cIixcclxuICAgICAgICB7fVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0R2FsbGVyeUltYWdlcyhcclxuICAgICAgICAgIHJlcy5kYXRhLm1hcCgoYSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpZDogaSwgdXJsOiBhIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0UHVibGljSWRzKFsuLi5yZXMuZGF0YV0pO1xyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHBzOi8vc2V2M2sxbGl3My5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvYXBpL3RhZ3NcIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWRzOiByZXMuZGF0YSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKnRhZ3NcIiwgcmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEdhbGxlcnlUYWdzKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiY2Fubm90IGdldCB0YWdzXCIsIGVycikpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW5ub3QgR0VUXCIsIGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGdhbGxlcnlUYWdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0R2FsbGVyeUltYWdlcyhcclxuICAgICAgICBnYWxsZXJ5SW1hZ2VzLm1hcCgoYSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgaWQ6IGEuaWQsIHVybDogYS51cmwsIHRhZ3M6IGdhbGxlcnlUYWdzW2ldIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbZ2FsbGVyeVRhZ3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SLlJhbmRhbGwgR2FsbGVyeTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTQuMC9jc3MvYWxsLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSHpMZUJ1aG9OUHZTbDVLWW5qeDBCVCtXQjBRRUVxTHByTytOQmtrazVnYmM2N0ZUYUw3WElHYTJ3MUwwWGJnY1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICBzdHlsZT17cGhvdG9Nb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17Y2xpY2tlZEltYWdlfVxyXG4gICAgICAgICAgYWx0PVwiZ2FsbGVyeSBtb2RhbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNsaWNrZWRJbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e3VwbG9hZE1vZGFsSXNPcGVufVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZVVwbG9hZE1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXt1cGxvYWRNb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgICBpZD17c3R5bGUudXBsb2FkTW9kYWx9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkTW9kYWx9PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAga2V5PXtpbnB1dEtleSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaW1nQ29sbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5zdWJtaXRCdG59PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPlVwbG9hZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcmV2aWV3ID8gc3R5bGUucHJldmlld3MgOiBudWxsfT5cclxuICAgICAgICAgICAge3ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdGFnaW5nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50YWdzfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS50YWdzVGl0bGV9PlRhZ3M8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7IXRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICA/IGFsbFRhZ3MubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhbGxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA8IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9PT0gdGFnc1tzdGFnZWRJbWFnZUluZGV4XVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhZyh0LCBzdGFnZWRJbWFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAhdGFnc1tzdGFnZWRJbWFnZUluZGV4XSB8fCBjbGlja2VkRG9uZSA/IFwiZGlzYWJsZWRcIiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gc3R5bGUuZGlzYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGUuZG9uZUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLmRpc2FibGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGh1bWJzKFsuLi50aHVtYnMsIHByZXZpZXddKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWREb25lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEb25lXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuU3RhZ2luZ1BpY0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuc3RhZ2luZ1BpY31cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInN0YWdpbmcgcHJldmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmVUYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnc1tzdGFnZWRJbWFnZUluZGV4XSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRhZyh0LCBzdGFnZWRJbWFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtzdHlsZS50YWdnZWRJY29ufSBmYXMgZmEtdGltZXNgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS50YWdnZWR9Pnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1haW50aHVtYnNEaXZ9PlxyXG4gICAgICAgICAgICAgIHt0aHVtYnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGh1bWJzRGl2fT5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpbGUtdXBsb2FkXCIgY2xhc3M9XCJjdXN0b20tZmlsZS11cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BZGQgTW9yZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYXMgZmEtcGx1cyAke3N0eWxlLnBsdXNJY29ufWB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlsZS11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHt0aHVtYnMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGh1bWJzLm1hcCgocCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50aHVtYnNEaXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RhZ2VkSW1hZ2VJbmRleChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRodW1icy5sZW5ndGggPiAxICYmIHNldFByZXZpZXcodGh1bWJzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jcm9zc0ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVVwbG9hZChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NhbmNlbEljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5wcmV2aWV3VGh1bWJ9IHNyYz17cH0gdGFiSW5kZXg9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17dGFnc01vZGFsSXNPcGVufVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZVRhZ3NNb2RhbH1cclxuICAgICAgICBzdHlsZT17dGFnc01vZGFsU3R5bGV9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEVkaXRUYWdzIGltZz17Y2xpY2tlZEltYWdlfSBpZD17Y2xpY2tlZEltYWdlSWR9Lz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeVBhZ2V9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlUaXRsZX0+RnVsbCBHYWxsZXJ5PC9oMj5cclxuICAgICAgICB7bG9nZ2VkICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cGxvYWRCdG59IG9uQ2xpY2s9e29wZW5VcGxvYWRNb2RhbH0+XHJcbiAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgICB7YWxsQ2F0ZWdvcmllcy5tYXAoKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gY1xyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7c3R5bGUudGFnQnRufSAke3N0eWxlLmFjdGl2ZVRhZ0J0bn1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS50YWdCdG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlQ2F0ZWdvcnkoYyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJvd3N9PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkgPT09IFwiQWxsXCJcclxuICAgICAgICAgICAgICA/IGdhbGxlcnlJbWFnZXMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBhdCBpbmRleCAke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuVGFnc01vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZUlkKHB1YmxpY0lkc1tpbmRleF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2xpY2tlZEltYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ0biAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogY2F0ZWdvcnkgIT09IFwiQUxMXCIgJiYgZ2FsbGVyeVRhZ3MubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8gZ2FsbGVyeUltYWdlc1xyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC50YWdzLmluY2x1ZGVzKGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBhdCBpbmRleCAke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2UoZWwudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZUlkKHB1YmxpY0lkc1tpbmRleF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblRhZ3NNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ0biAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9