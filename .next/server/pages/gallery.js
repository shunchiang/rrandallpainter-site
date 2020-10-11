module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/gallery.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/EditBtn.js":
/*!*******************************!*\
  !*** ./components/EditBtn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_EditBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/EditBtn.module.scss */ "./sass/EditBtn.module.scss");
/* harmony import */ var _sass_EditBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_EditBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_pen_square_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pen-square-solid.svg */ "./images/pen-square-solid.svg");
/* harmony import */ var _images_pen_square_solid_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_pen_square_solid_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\components\\EditBtn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function EditBtn() {
  return __jsx("div", {
    className: _sass_EditBtn_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.EditBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("img", {
    src: _images_pen_square_solid_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "edit icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "./components/Modal_EditTags.js":
/*!**************************************!*\
  !*** ./components/Modal_EditTags.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditTags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/EditTags.module.scss */ "./sass/EditTags.module.scss");
/* harmony import */ var _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tags */ "./utils/tags.js");
var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\components\\Modal_EditTags.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function EditTags(props) {
  // State Declarations
  const {
    0: tags,
    1: setTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const id = [props.id]; // Toggling Tags Logic

  function toggleTag(tag) {
    const newTags = _objectSpread({}, tags);

    console.log(newTags[tag]);
    if (newTags[tag] === true) delete newTags[tag];else newTags[tag] = true;
    setTags(newTags);
    console.log(newTags);
    console.log(tags);
  }

  const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    withCredentials: true
  });

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      ids: id,
      tags: Object.keys(tags)
    };
    console.log(data);
    axiosInstance.put("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags/update", data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Form,
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Editing Tags"), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Tags"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, _utils_tags__WEBPACK_IMPORTED_MODULE_3__["Tags"].map(e => __jsx("li", {
    onClick: () => toggleTag(e),
    style: {
      color: tags[e] ? "lightGreen" : "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: `${_sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.taggedIcon} fas fa-tag`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }), e))))), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ImagePreview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: props.img,
    alt: "preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "public_id: ", props.id))), __jsx("button", {
    className: _sass_EditTags_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Confirm"))));
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/RRandallLogo.png */ "./images/RRandallLogo.png");
/* harmony import */ var _images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/phoneCircleIcon.png */ "./images/phoneCircleIcon.png");
/* harmony import */ var _images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/mail_icon.png */ "./images/mail_icon.png");
/* harmony import */ var _images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/Navbar.module.scss */ "./sass/Navbar.module.scss");
/* harmony import */ var _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement("body");
let subtitle;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "rgb(58, 58, 58)",
    borderRadius: "0px",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.37)"
  }
};
function Navbar() {
  const {
    0: modalIsOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return __jsx("div", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.navbarContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.modalHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("h2", {
    ref: _subtitle => subtitle = _subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Contact Me"), __jsx("button", {
    onClick: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fas fa-times",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.contactInputs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("form", {
    action: "https://formspree.io/mnqpoygn",
    method: "POST",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Name"), __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "replyTo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "text",
    name: "_replyto",
    placeholder: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "subject",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Subject"), __jsx("input", {
    type: "text",
    name: "subject",
    placeholder: "Subject",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Info"), __jsx("textarea", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textArea,
    name: "message",
    placeholder: "Message",
    rows: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sendBtn,
    type: "submit",
    value: "Send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logoContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.navLogo,
    src: _images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "business logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "far fa-images galleryIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  })), __jsx("img", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mailIcon,
    src: _images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "mail icon",
    onClick: openModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("a", {
    href: "tel:1-920-851-0083",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.phoneIcon,
    src: _images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "phone icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./images/RRandallLogo.png":
/*!*********************************!*\
  !*** ./images/RRandallLogo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RRandallLogo-769210921499105609a0ab83d569c4ad.png";

/***/ }),

/***/ "./images/mail_icon.png":
/*!******************************!*\
  !*** ./images/mail_icon.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mail_icon-6c9c07bdd0c542fa6cc86ec80f2d6389.png";

/***/ }),

/***/ "./images/pen-square-solid.svg":
/*!*************************************!*\
  !*** ./images/pen-square-solid.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwZW4tc3F1YXJlIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtcGVuLXNxdWFyZSBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9IiNmMDVhNWEiIGQ9Ik00MDAgNDgwSDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MGMwLTI2LjUgMjEuNS00OCA0OC00OGgzNTJjMjYuNSAwIDQ4IDIxLjUgNDggNDh2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4ek0yMzguMSAxNzcuOUwxMDIuNCAzMTMuNmwtNi4zIDU3LjFjLS44IDcuNiA1LjYgMTQuMSAxMy4zIDEzLjNsNTcuMS02LjNMMzAyLjIgMjQyYzIuMy0yLjMgMi4zLTYuMSAwLTguNUwyNDYuNyAxNzhjLTIuNS0yLjQtNi4zLTIuNC04LjYtLjF6TTM0NSAxNjUuMUwzMTQuOSAxMzVjLTkuNC05LjQtMjQuNi05LjQtMzMuOSAwbC0yMy4xIDIzLjFjLTIuMyAyLjMtMi4zIDYuMSAwIDguNWw1NS41IDU1LjVjMi4zIDIuMyA2LjEgMi4zIDguNSAwTDM0NSAxOTljOS4zLTkuMyA5LjMtMjQuNSAwLTMzLjl6Ij48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ "./images/phoneCircleIcon.png":
/*!************************************!*\
  !*** ./images/phoneCircleIcon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/phoneCircleIcon-40c970d247110978a2a0752198033e16.png";

/***/ }),

/***/ "./images/times-circle-solid.png":
/*!***************************************!*\
  !*** ./images/times-circle-solid.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_EditBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditBtn */ "./components/EditBtn.js");
/* harmony import */ var _components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal_EditTags */ "./components/Modal_EditTags.js");
/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/GalleryPage.module.scss */ "./sass/GalleryPage.module.scss");
/* harmony import */ var _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/times-circle-solid.png */ "./images/times-circle-solid.png");
/* harmony import */ var _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _utils_tags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/tags */ "./utils/tags.js");
/* harmony import */ var _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/modalStyles */ "./utils/modalStyles.js");
var _jsxFileName = "C:\\Users\\meich\\Documents\\Github Projects\\rrandallpainter-site\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













react_modal__WEBPACK_IMPORTED_MODULE_7___default.a.setAppElement("body");
function Gallery() {
  // windowSize Custom Hook
  const size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Modal Styles - Responsives Sizing

  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["photoModalStyle"].content.width = size.width <= 1024 ? "95%" : "60%";
  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["uploadModalStyle"].content.width = size.width <= 1024 ? "95%" : "60%";
  _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["tagsModalStyle"].content.width = size.width <= 1024 ? "95%" : "60%"; //state declarations

  const {
    0: galleryImages,
    1: setGalleryImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: galleryTags,
    1: setGalleryTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: clickedImage,
    1: setClickedImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: clickedImageId,
    1: setClickedImageId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: publicIds,
    1: setPublicIds
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: modalIsOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: uploadModalIsOpen,
    1: setUploadModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: tagsModalIsOpen,
    1: setTagsModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: logged,
    1: setLogged
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: imagesToUpload,
    1: setImagesToUpload
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: clickedDone,
    1: setClickedDone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: stagedImageIndex,
    1: setStagedImageIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: preview,
    1: setPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: thumbs,
    1: setThumbs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: addingImage,
    1: setAddingImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: tags,
    1: setTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: inputKey,
    1: setInputkey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: category,
    1: setActiveCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("All"); //variable and function declarations

  const allTags = _utils_tags__WEBPACK_IMPORTED_MODULE_11__["Tags"];
  const allCategories = ["All"].concat(allTags);
  const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({
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
      setTags([...tags, tags[i] = [t]]);
    } else {
      const temp = tags[i];
      setTags(tags.map((arr, index) => {
        if (index == i) {
          return arr[i] = temp.concat(t);
        } else {
          return arr;
        }
      }));
    }
  }

  function cancelTag(t, i) {
    setTags(tags.map((arr, index) => {
      if (index === i) {
        return arr.filter(tag => tag !== t);
      } else {
        return arr;
      }
    }));
  } // toast functions


  const successToast = () => react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(" Upload Success", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.toastSuccess
  });

  const errorToast = () => react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Upload error, please refresh", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });

  const warningToast = () => react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].warn("No images selected", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }); // file functions


  const resetInput = () => {
    let sign = Date.now();
    setInputkey(sign);
  };

  const onFileChange = e => {
    setClickedDone(false);
    setAddingImage(true);
    setImagesToUpload([...imagesToUpload, e.target.files[0]]);
    setStagedImageIndex(imagesToUpload.length - 1);
  };

  function deleteUpload(i) {
    if (thumbs.length > 1) {
      if (preview === thumbs[i]) {
        setPreview(thumbs[i - 1]);
      }

      const temp1 = thumbs.splice(i, 1);
      const temp2 = imagesToUpload.splice(i, 1);
      const temp3 = tags.splice(i, 1);
      setThumbs(thumbs.filter(el => el !== temp1));
      setImagesToUpload(imagesToUpload.filter(el => el !== temp2.splice(i, 1)));
      setTags(tags.filter(t => t !== temp3));
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

    const formData = new FormData();
    imagesToUpload.forEach((e, i) => {
      formData.append("images", e);
      formData.append("tags", tags[i]);
      console.log(tags[i]);
    });

    for (const pair of formData.entries()) {
      console.log(pair[1], pair[2]);
    }

    axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/upload", formData).then(res => {
      console.log(res);
      successToast();
      closeUploadModal();
      setPreview(null);
      setImagesToUpload([]);
    }).catch(err => {
      console.log(err);
      errorToast();
    });
  } // Side effects


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (imagesToUpload.length && addingImage === true) {
      const objectUrl = URL.createObjectURL(imagesToUpload[imagesToUpload.length - 1]);
      setPreview(objectUrl);
      setStagedImageIndex(imagesToUpload.length - 1);
      setAddingImage(false);
      console.log("***", imagesToUpload);
    }
  }, [imagesToUpload]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLogged(localStorage.getItem("rrandall-authorization"));
    axiosInstance.get("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/search").then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }, []); //initialize

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/", {}).then(res => {
      console.log(res.data);
      setGalleryImages(res.data.map((a, i) => {
        return {
          id: i,
          url: a
        };
      }));
      return axiosInstance.get("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/");
    }).then(res => {
      console.log(res.data);
      setPublicIds([...res.data]);
      return axiosInstance.post("https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags", {
        ids: res.data
      });
    }).then(res => {
      console.log("**tags", res.data);
      setGalleryTags(res.data);
    }).catch(err => console.log("cannot get tags", err)).catch(err => {
      console.log("cannot GET", err);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (galleryTags.length > 0) {
      setGalleryImages(galleryImages.map((a, i) => {
        return {
          id: a.id,
          url: a.url,
          tags: galleryTags[i]
        };
      }));
    }
  }, [galleryTags]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 7
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["photoModalStyle"],
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
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.clickedImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
    isOpen: uploadModalIsOpen,
    onRequestClose: closeUploadModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["uploadModalStyle"],
    contentLabel: "Modal",
    id: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.uploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.uploadModal,
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
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.uploadInput,
    onChange: onFileChange,
    multiple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.submitBtn,
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
    className: preview ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.previews : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 11
    }
  }, preview && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.staging,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tagsTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 19
    }
  }, "Tags"), !tags[stagedImageIndex] ? allTags.map(t => __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tagRow,
    onClick: () => {
      addTag(t, stagedImageIndex);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fas fa-tag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 27
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 27
    }
  }, t))) : allTags.filter(t => {
    for (let i = 0; i < tags[stagedImageIndex].length; i++) {
      if (t === tags[stagedImageIndex][i]) {
        return false;
      }
    }

    return true;
  }).map(t => __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tagRow,
    onClick: () => {
      addTag(t, stagedImageIndex);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fas fa-tag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 29
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 29
    }
  }, t))), __jsx("button", {
    disabled: !tags[stagedImageIndex] || clickedDone ? "disabled" : null,
    className: tags[stagedImageIndex] ? tags[stagedImageIndex].length === 0 ? _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.disable : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.doneBtn : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.disable,
    onClick: () => {
      setThumbs([...thumbs, preview]);
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
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.StagingPicDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 17
    }
  }, preview && __jsx("img", {
    style: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stagingPic,
    src: preview,
    alt: "staging preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.activeTags,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 19
    }
  }, tags[stagedImageIndex] && tags[stagedImageIndex].map(t => __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tagRow,
    onClick: () => {
      cancelTag(t, stagedImageIndex);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: `${_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.taggedIcon} fas fa-times`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 27
    }
  }), __jsx("p", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tagged,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 27
    }
  }, t)))))), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mainthumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }
  }, thumbs.length > 0 && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.thumbsDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 17
    }
  }, __jsx("label", {
    for: "file-upload",
    class: "custom-file-upload",
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
    className: `fas fa-plus ${_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.plusIcon}`,
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
  })), thumbs.length > 0 && thumbs.map((p, i) => __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.thumbsDiv,
    onClick: () => {
      setStagedImageIndex(i);
      thumbs.length > 1 && setPreview(thumbs[i]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 19
    }
  }, __jsx("img", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.crossIcon,
    onClick: () => {
      deleteUpload(i);
    },
    src: _images_times_circle_solid_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "exit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 21
    }
  }), __jsx("img", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.previewThumb,
    src: p,
    tabIndex: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }))))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
    isOpen: tagsModalIsOpen,
    onRequestClose: closeTagsModal,
    style: _utils_modalStyles__WEBPACK_IMPORTED_MODULE_12__["tagsModalStyle"],
    contentLabel: "Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 7
    }
  }, __jsx(_components_Modal_EditTags__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: clickedImage,
    id: clickedImageId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 9
    }
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.galleryPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.galleryTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 9
    }
  }, "Full Gallery"), logged && __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.uploadBtn,
    onClick: openUploadModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 11
    }
  }, "Upload"), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 9
    }
  }, allCategories.map((c, i) => {
    return __jsx("div", {
      className: category === c ? `${_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tagBtn} ${_sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.activeTagBtn}` : _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tagBtn,
      onClick: () => {
        setActiveCategory(c);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 15
      }
    }, c);
  })), __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.rows,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 11
    }
  }, category === "All" ? galleryImages.map((el, index) => {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: el.url,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.galleryImage,
      alt: `picture at index ${index}`,
      onClick: () => {
        openModal();
        setClickedImage(el.url);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 23
      }
    }), __jsx("div", {
      onClick: () => {
        openTagsModal();
        setClickedImage(el.url);
        setClickedImageId(publicIds[index]);
        console.log(clickedImageId);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 23
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 25
      }
    })));
  }) : category !== "ALL" && galleryTags.length > 0 ? galleryImages.filter(el => {
    return el.tags.includes(category.toLowerCase());
  }).map((el, index) => {
    return __jsx("div", {
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: el.url,
      className: _sass_GalleryPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.galleryImage,
      alt: `picture at index ${index}`,
      onClick: () => {
        openModal();
        setClickedImage(el.url);
        setClickedImageId(publicIds[index]);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 25
      }
    }), __jsx("div", {
      onClick: () => {
        openTagsModal();
        setClickedImage(el.url);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 25
      }
    }, __jsx(_components_EditBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 27
      }
    })));
  }) : null))));
}

/***/ }),

/***/ "./sass/EditBtn.module.scss":
/*!**********************************!*\
  !*** ./sass/EditBtn.module.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"EditBtn": "EditBtn_EditBtn__1YZPQ"
};


/***/ }),

/***/ "./sass/EditTags.module.scss":
/*!***********************************!*\
  !*** ./sass/EditTags.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Form": "EditTags_Form__h-y5g",
	"Body": "EditTags_Body__3uOJ7",
	"Title": "EditTags_Title__1PaEk",
	"Button": "EditTags_Button__1SGxl",
	"Stage": "EditTags_Stage__14zcm",
	"ImagePreview": "EditTags_ImagePreview__2IAa7",
	"Id": "EditTags_Id__2XppG",
	"Tags": "EditTags_Tags__3xjd4",
	"taggedIcon": "EditTags_taggedIcon__19-df"
};


/***/ }),

/***/ "./sass/GalleryPage.module.scss":
/*!**************************************!*\
  !*** ./sass/GalleryPage.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"galleryPage": "GalleryPage_galleryPage__2H1uU",
	"galleryTitle": "GalleryPage_galleryTitle__AjVr1",
	"categories": "GalleryPage_categories__K-LiH",
	"tagBtn": "GalleryPage_tagBtn__13DbI",
	"activeTagBtn": "GalleryPage_activeTagBtn__1RKrs",
	"grid": "GalleryPage_grid__3x7Uv",
	"rows": "GalleryPage_rows__iHGU_",
	"item": "GalleryPage_item__3QZcM",
	"uploadBtn": "GalleryPage_uploadBtn__1oAlC",
	"uploadModal": "GalleryPage_uploadModal__3WJmB",
	"mainthumbsDiv": "GalleryPage_mainthumbsDiv__3AAng",
	"plusIcon": "GalleryPage_plusIcon__kyWyf",
	"crossIcon": "GalleryPage_crossIcon__2rBdW",
	"previews": "GalleryPage_previews__3EilR",
	"staging": "GalleryPage_staging__10ml_",
	"tags": "GalleryPage_tags__1zxiL",
	"tagsTitle": "GalleryPage_tagsTitle__3vhXd",
	"doneBtn": "GalleryPage_doneBtn__PiCEy",
	"disable": "GalleryPage_disable__1E4EP",
	"StagingPicDiv": "GalleryPage_StagingPicDiv__3vuNQ",
	"fadeIn": "GalleryPage_fadeIn__2mzD2",
	"activeTags": "GalleryPage_activeTags__33c2b",
	"tagRow": "GalleryPage_tagRow__3KmdY",
	"taggedIcon": "GalleryPage_taggedIcon__1NWCg",
	"tagged": "GalleryPage_tagged__1Zqfw",
	"thumbsDiv": "GalleryPage_thumbsDiv__1ndDS",
	"previewThumb": "GalleryPage_previewThumb__zSnFa",
	"uploadInput": "GalleryPage_uploadInput__9I5KP",
	"submitBtn": "GalleryPage_submitBtn__3cC-1",
	"toastSuccess": "GalleryPage_toastSuccess__LP5AW",
	"clickedImage": "GalleryPage_clickedImage__3x7zE"
};


/***/ }),

/***/ "./sass/Navbar.module.scss":
/*!*********************************!*\
  !*** ./sass/Navbar.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navbarContainer": "Navbar_navbarContainer__3LKHC",
	"logoContainer": "Navbar_logoContainer__1HpGN",
	"navLogo": "Navbar_navLogo__3iOok",
	"navText": "Navbar_navText__2_kCA",
	"icons": "Navbar_icons__4LBoS",
	"mailIcon": "Navbar_mailIcon__bpLwx",
	"phoneIcon": "Navbar_phoneIcon__2yoM8",
	"modalHeader": "Navbar_modalHeader__s1g-v",
	"contactInputs": "Navbar_contactInputs__235Ad",
	"textArea": "Navbar_textArea__2rzdz",
	"sendBtn": "Navbar_sendBtn__3TNfe",
	"modalFade": "Navbar_modalFade__XyJvO"
};


/***/ }),

/***/ "./utils/modalStyles.js":
/*!******************************!*\
  !*** ./utils/modalStyles.js ***!
  \******************************/
/*! exports provided: photoModalStyle, uploadModalStyle, tagsModalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoModalStyle", function() { return photoModalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadModalStyle", function() { return uploadModalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagsModalStyle", function() { return tagsModalStyle; });
const photoModalStyle = {
  content: {
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    bottom: 0,
    right: 0,
    transform: "translate(-50%,-50%)",
    padding: 0,
    border: "none",
    overflow: "hidden",
    backgroundColor: "transparent",
    borderColor: "transparent",
    pointerEvents: "none"
  },
  overlay: {
    zIndex: 5,
    backgroundColor: "rgba(255, 255, 255, 0.37)"
  }
};
const uploadModalStyle = {
  content: {
    width: "95%",
    position: "absolute",
    bottom: "0",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    bottom: "auto",
    backgroundColor: "#3a3a3a",
    borderRadius: "0",
    borderColor: "transparent",
    maxHeight: "80vh"
  },
  overlay: {
    zIndex: 5,
    backgroundColor: "rgba(255, 255, 255, 0.37)"
  }
};
const tagsModalStyle = {
  content: {
    width: "95%",
    height: "80%",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    bottom: 0,
    right: 0,
    backgroundColor: "#3a3a3a",
    transform: "translate(-50%,-50%)",
    padding: "0.5em",
    border: "none",
    boxSizing: "border-box"
  },
  overlay: {
    zIndex: 5,
    backgroundColor: "rgba(255, 255, 255, 0.37)"
  }
};

/***/ }),

/***/ "./utils/tags.js":
/*!***********************!*\
  !*** ./utils/tags.js ***!
  \***********************/
/*! exports provided: Tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
// List of all tags for gallery
const Tags = ["Residential", "Commercial", "Interior", "Exterior", "Cabinets"];

/***/ }),

/***/ "./utils/useWindowSize.js":
/*!********************************!*\
  !*** ./utils/useWindowSize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0QnRuLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWxfRWRpdFRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL1JSYW5kYWxsTG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL21haWxfaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Blbi1zcXVhcmUtc29saWQuc3ZnIiwid2VicGFjazovLy8uL2ltYWdlcy9waG9uZUNpcmNsZUljb24ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy90aW1lcy1jaXJjbGUtc29saWQucG5nIiwid2VicGFjazovLy8uL3BhZ2VzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9FZGl0QnRuLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3Nhc3MvRWRpdFRhZ3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9HYWxsZXJ5UGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zYXNzL05hdmJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2RhbFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy90YWdzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiJdLCJuYW1lcyI6WyJFZGl0QnRuIiwic3R5bGVzIiwiRWRpdEljb24iLCJFZGl0VGFncyIsInByb3BzIiwidGFncyIsInNldFRhZ3MiLCJ1c2VTdGF0ZSIsImlkIiwidG9nZ2xlVGFnIiwidGFnIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJpZHMiLCJPYmplY3QiLCJrZXlzIiwicHV0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsInN0eWxlIiwiRm9ybSIsIkJvZHkiLCJUaXRsZSIsIlN0YWdlIiwiVGFncyIsIm1hcCIsImNvbG9yIiwidGFnZ2VkSWNvbiIsIkltYWdlUHJldmlldyIsImltZyIsIklkIiwiQnV0dG9uIiwiTW9kYWwiLCJzZXRBcHBFbGVtZW50Iiwic3VidGl0bGUiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2Zvcm0iLCJvdmVybGF5IiwiTmF2YmFyIiwibW9kYWxJc09wZW4iLCJzZXRJc09wZW4iLCJvcGVuTW9kYWwiLCJhZnRlck9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJuYXZiYXJDb250YWluZXIiLCJtb2RhbEhlYWRlciIsIl9zdWJ0aXRsZSIsImNvbnRhY3RJbnB1dHMiLCJ0ZXh0QXJlYSIsInNlbmRCdG4iLCJsb2dvQ29udGFpbmVyIiwibmF2TG9nbyIsImxvZ28iLCJpY29ucyIsIm1haWxJY29uIiwicGhvbmVJY29uIiwiY2FsbEljb24iLCJHYWxsZXJ5Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJwaG90b01vZGFsU3R5bGUiLCJ3aWR0aCIsInVwbG9hZE1vZGFsU3R5bGUiLCJ0YWdzTW9kYWxTdHlsZSIsImdhbGxlcnlJbWFnZXMiLCJzZXRHYWxsZXJ5SW1hZ2VzIiwiZ2FsbGVyeVRhZ3MiLCJzZXRHYWxsZXJ5VGFncyIsImNsaWNrZWRJbWFnZSIsInNldENsaWNrZWRJbWFnZSIsImNsaWNrZWRJbWFnZUlkIiwic2V0Q2xpY2tlZEltYWdlSWQiLCJwdWJsaWNJZHMiLCJzZXRQdWJsaWNJZHMiLCJ1cGxvYWRNb2RhbElzT3BlbiIsInNldFVwbG9hZE1vZGFsIiwidGFnc01vZGFsSXNPcGVuIiwic2V0VGFnc01vZGFsIiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwiaW1hZ2VzVG9VcGxvYWQiLCJzZXRJbWFnZXNUb1VwbG9hZCIsImNsaWNrZWREb25lIiwic2V0Q2xpY2tlZERvbmUiLCJzdGFnZWRJbWFnZUluZGV4Iiwic2V0U3RhZ2VkSW1hZ2VJbmRleCIsInByZXZpZXciLCJzZXRQcmV2aWV3IiwidGh1bWJzIiwic2V0VGh1bWJzIiwiYWRkaW5nSW1hZ2UiLCJzZXRBZGRpbmdJbWFnZSIsImlucHV0S2V5Iiwic2V0SW5wdXRrZXkiLCJjYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5IiwiYWxsVGFncyIsImFsbENhdGVnb3JpZXMiLCJjb25jYXQiLCJvcGVuVXBsb2FkTW9kYWwiLCJvcGVuVGFnc01vZGFsIiwiY2xvc2VVcGxvYWRNb2RhbCIsImNsb3NlVGFnc01vZGFsIiwiYWRkVGFnIiwidCIsImkiLCJ0ZW1wIiwiYXJyIiwiaW5kZXgiLCJjYW5jZWxUYWciLCJmaWx0ZXIiLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwidG9hc3RTdWNjZXNzIiwiZXJyb3JUb2FzdCIsImVycm9yIiwid2FybmluZ1RvYXN0Iiwid2FybiIsInJlc2V0SW5wdXQiLCJzaWduIiwiRGF0ZSIsIm5vdyIsIm9uRmlsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZGVsZXRlVXBsb2FkIiwidGVtcDEiLCJzcGxpY2UiLCJ0ZW1wMiIsInRlbXAzIiwiZWwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImFwcGVuZCIsInBhaXIiLCJlbnRyaWVzIiwicG9zdCIsInVzZUVmZmVjdCIsIm9iamVjdFVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJhIiwidXJsIiwidXBsb2FkTW9kYWwiLCJ1cGxvYWRJbnB1dCIsInN1Ym1pdEJ0biIsInByZXZpZXdzIiwic3RhZ2luZyIsInRhZ3NUaXRsZSIsInRhZ1JvdyIsImRpc2FibGUiLCJkb25lQnRuIiwiU3RhZ2luZ1BpY0RpdiIsInN0YWdpbmdQaWMiLCJhY3RpdmVUYWdzIiwidGFnZ2VkIiwibWFpbnRodW1ic0RpdiIsInRodW1ic0RpdiIsInBsdXNJY29uIiwicCIsImNyb3NzSWNvbiIsImNhbmNlbEljb24iLCJwcmV2aWV3VGh1bWIiLCJnYWxsZXJ5UGFnZSIsImdhbGxlcnlUaXRsZSIsInVwbG9hZEJ0biIsImNhdGVnb3JpZXMiLCJjIiwidGFnQnRuIiwiYWN0aXZlVGFnQnRuIiwiZ3JpZCIsInJvd3MiLCJpdGVtIiwiZ2FsbGVyeUltYWdlIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXIiLCJvdmVyZmxvdyIsImJvcmRlckNvbG9yIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsIm1heEhlaWdodCIsImJveFNpemluZyIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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LEVBQUU7QUFGWjtBQWZiLENBRE8sQzs7Ozs7Ozs7Ozs7O0FDN0NQO0FBQUE7QUFBQTtBQUVPLE1BQU1sQixJQUFJLEdBQUcsQ0FDaEIsYUFEZ0IsRUFFaEIsWUFGZ0IsRUFHaEIsVUFIZ0IsRUFJaEIsVUFKZ0IsRUFLaEIsVUFMZ0IsQ0FBYixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBUzJDLGFBQVQsR0FBeUI7QUFDdEMsUUFBTTtBQUFBLE9BQUM2SSxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QnROLHNEQUFRLENBQUM7QUFDM0MwRSxTQUFLLEVBQUU0RCxTQURvQztBQUUzQ3NFLFVBQU0sRUFBRXRFO0FBRm1DLEdBQUQsQ0FBNUM7QUFLQTRCLHlEQUFTLENBQUMsTUFBTTtBQUNkLGFBQVNxRCxZQUFULEdBQXdCO0FBQ3RCRCxtQkFBYSxDQUFDO0FBQ1o1SSxhQUFLLEVBQUU4SSxNQUFNLENBQUNDLFVBREY7QUFFWmIsY0FBTSxFQUFFWSxNQUFNLENBQUNFO0FBRkgsT0FBRCxDQUFiO0FBSUQ7O0FBRURGLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFlBQWxDO0FBRUFBLGdCQUFZO0FBRVosV0FBTyxNQUFNQyxNQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxZQUFyQyxDQUFiO0FBQ0QsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLFNBQU9GLFVBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3hCRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQyIsImZpbGUiOiJwYWdlcy9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9nYWxsZXJ5LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zYXNzL0VkaXRCdG4ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCIuLi9pbWFnZXMvcGVuLXNxdWFyZS1zb2xpZC5zdmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRCdG4oKSB7XHJcblxyXG4gIHJldHVybihcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRCdG59PlxyXG4gICAgPGltZyBzcmM9e0VkaXRJY29ufSBhbHQ9XCJlZGl0IGljb25cIi8+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc2Fzcy9FZGl0VGFncy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgVGFncyB9IGZyb20gXCIuLi91dGlscy90YWdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VGFncyhwcm9wcykge1xyXG5cclxuICAgIC8vIFN0YXRlIERlY2xhcmF0aW9uc1xyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgaWQgPSBbcHJvcHMuaWRdXHJcblxyXG4gICAgLy8gVG9nZ2xpbmcgVGFncyBMb2dpY1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBuZXdUYWdzID0gey4uLnRhZ3N9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RhZ3NbdGFnXSlcclxuICAgICAgICBpZiAoIG5ld1RhZ3NbdGFnXSA9PT0gdHJ1ZSApIGRlbGV0ZSBuZXdUYWdzW3RhZ107XHJcbiAgICAgICAgZWxzZSBuZXdUYWdzW3RhZ10gPSB0cnVlO1xyXG4gICAgICAgIHNldFRhZ3MobmV3VGFncyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFncylcclxuICAgICAgICBjb25zb2xlLmxvZyh0YWdzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Ym1pdChlKVxyXG4gICAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtpZHM6IGlkLCB0YWdzOiBPYmplY3Qua2V5cyh0YWdzKX07XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgYXhpb3NJbnN0YW5jZVxyXG4gICAgICAgIC5wdXRcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hcGkvdGFncy91cGRhdGVcIixcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW5cclxuICAgICAgICAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGUuRm9ybX0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Cb2R5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuVGl0bGV9PkVkaXRpbmcgVGFnczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5TdGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5UYWdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1RhZ3MubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUYWcoZSl9IHN0eWxlPXt7Y29sb3I6IHRhZ3NbZV0gPyBcImxpZ2h0R3JlZW5cIiA6IFwid2hpdGVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c3R5bGUudGFnZ2VkSWNvbn0gZmFzIGZhLXRhZ2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuSW1hZ2VQcmV2aWV3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWd9IGFsdD1cInByZXZpZXdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuSWR9PnB1YmxpY19pZDoge3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuQnV0dG9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2ltYWdlcy9SUmFuZGFsbExvZ28ucG5nXCI7XHJcbmltcG9ydCBjYWxsSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3Bob25lQ2lyY2xlSWNvbi5wbmdcIjtcclxuaW1wb3J0IG1haWxJY29uIGZyb20gXCIuLi9pbWFnZXMvbWFpbF9pY29uLnBuZ1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zYXNzL05hdmJhci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcblxyXG5Nb2RhbC5zZXRBcHBFbGVtZW50KFwiYm9keVwiKTtcclxuXHJcbmxldCBzdWJ0aXRsZTtcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICBjb250ZW50OiB7XHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgYm90dG9tOiBcImF1dG9cIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIi01MCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoNTgsIDU4LCA1OClcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICB9LFxyXG4gIG92ZXJsYXk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFmdGVyT3Blbk1vZGFsKCkge1xyXG4gICAgLy8gcmVmZXJlbmNlcyBhcmUgbm93IHN5bmMnZCBhbmQgY2FuIGJlIGFjY2Vzc2VkLlxyXG4gICAgc3VidGl0bGUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckNvbnRhaW5lcn0+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgb25BZnRlck9wZW49e2FmdGVyT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiTW9kYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XHJcbiAgICAgICAgICA8aDIgcmVmPXsoX3N1YnRpdGxlKSA9PiAoc3VidGl0bGUgPSBfc3VidGl0bGUpfT5Db250YWN0IE1lPC9oMj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdElucHV0c30+XHJcbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9tbnFwb3lnblwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXBseVRvXCI+RW1haWw8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIl9yZXBseXRvXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3ViamVjdFwiPlN1YmplY3Q8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5JbmZvPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRBcmVhfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIHJvd3M9XCI2XCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zZW5kQnRufSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubmF2TG9nb30gc3JjPXtsb2dvfSBhbHQ9XCJidXNpbmVzcyBsb2dvXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cclxuICAgICAgICA8YSBocmVmPVwiL2dhbGxlcnlcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1pbWFnZXMgZ2FsbGVyeUljb25cIj48L2k+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYWlsSWNvbn1cclxuICAgICAgICAgIHNyYz17bWFpbEljb259XHJcbiAgICAgICAgICBhbHQ9XCJtYWlsIGljb25cIlxyXG4gICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGEgaHJlZj1cInRlbDoxLTkyMC04NTEtMDA4M1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5waG9uZUljb259IHNyYz17Y2FsbEljb259IGFsdD1cInBob25lIGljb25cIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9SUmFuZGFsbExvZ28tNzY5MjEwOTIxNDk5MTA1NjA5YTBhYjgzZDU2OWM0YWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21haWxfaWNvbi02YzljMDdiZGQwYzU0MmZhNmNjODZlYzgwZjJkNjM4OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCaGNtbGhMV2hwWkdSbGJqMGlkSEoxWlNJZ1ptOWpkWE5oWW14bFBTSm1ZV3h6WlNJZ1pHRjBZUzF3Y21WbWFYZzlJbVpoY3lJZ1pHRjBZUzFwWTI5dVBTSndaVzR0YzNGMVlYSmxJaUJqYkdGemN6MGljM1puTFdsdWJHbHVaUzB0Wm1FZ1ptRXRjR1Z1TFhOeGRXRnlaU0JtWVMxM0xURTBJaUJ5YjJ4bFBTSnBiV2NpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZG1sbGQwSnZlRDBpTUNBd0lEUTBPQ0ExTVRJaVBqeHdZWFJvSUdacGJHdzlJaU5tTURWaE5XRWlJR1E5SWswME1EQWdORGd3U0RRNFl5MHlOaTQxSURBdE5EZ3RNakV1TlMwME9DMDBPRlk0TUdNd0xUSTJMalVnTWpFdU5TMDBPQ0EwT0MwME9HZ3pOVEpqTWpZdU5TQXdJRFE0SURJeExqVWdORGdnTkRoMk16VXlZekFnTWpZdU5TMHlNUzQxSURRNExUUTRJRFE0ZWsweU16Z3VNU0F4TnpjdU9Vd3hNREl1TkNBek1UTXVObXd0Tmk0eklEVTNMakZqTFM0NElEY3VOaUExTGpZZ01UUXVNU0F4TXk0eklERXpMak5zTlRjdU1TMDJMak5NTXpBeUxqSWdNalF5WXpJdU15MHlMak1nTWk0ekxUWXVNU0F3TFRndU5Vd3lORFl1TnlBeE56aGpMVEl1TlMweUxqUXROaTR6TFRJdU5DMDRMall0TGpGNlRUTTBOU0F4TmpVdU1Vd3pNVFF1T1NBeE16VmpMVGt1TkMwNUxqUXRNalF1TmkwNUxqUXRNek11T1NBd2JDMHlNeTR4SURJekxqRmpMVEl1TXlBeUxqTXRNaTR6SURZdU1TQXdJRGd1Tld3MU5TNDFJRFUxTGpWak1pNHpJREl1TXlBMkxqRWdNaTR6SURndU5TQXdURE0wTlNBeE9UbGpPUzR6TFRrdU15QTVMak10TWpRdU5TQXdMVE16TGpsNklqNDhMM0JoZEdnK1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvbmVDaXJjbGVJY29uLTQwYzk3MGQyNDcxMTA5NzhhMmEwNzUyMTk4MDMzZTE2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFDQVlBQUFEMGVOVDZBQUFCaEdsRFExQkpRME1nY0hKdlptbHNaUUFBS0pGOWtUMUl3MEFjeFY5Yml4OVVIT3hRMUNGRGRiSWdWY1JScTFDRUNxRldhTlhCNU5JdmFOS1FwTGc0Q3E0RkJ6OFdxdzR1enJvNnVBcUM0QWVJazZPVG9vdVUrTCtrMENMR2crTit2THYzdUhzSCtCc1ZwcHBkRTRDcVdVWTZtUkN5dVZXaCt4VzlpQ0NJT0lZbFp1cHpvcGlDNS9pNmg0K3ZkekdlNVgzdXo5R3Y1RTBHK0FUaVdhWWJGdkVHOGZTbXBYUGVKdzZ6a3FRUW54T1BHM1JCNGtldXl5Ni9jUzQ2N09lWllTT1RuaWNPRXd2RkRwWTdtSlVNbFhpS09LcW9HdVg3c3k0cm5MYzRxNVVhYTkyVHZ6Q1UxMWFXdVU1ekJFa3NZZ2tpQk1pb29Zd0tMTVJvMVVneGthYjloSWQveVBHTDVKTEpWUVlqeHdLcVVDRTVmdkEvK04ydFdaaU11MG1oQkJCOHNlMlBVYUI3RjJqV2JmdjcyTGFiSjBEZ0dialMydjVxQTVqNUpMM2UxcUpId01BMmNISGQxdVE5NEhJSGlEenBraUU1VW9DbXYxQUEzcy9vbTNMQTRDM1F0K2IyMXRySDZRT1FvYTVTTjhEQklUQldwT3gxajNmM2RQYjI3NWxXZnorSmxuS3d0VE1BZFFBQUFBWmlTMGRFQVBBQVdnQmFXK0w0cmdBQUFBbHdTRmx6QUFBTjF3QUFEZGNCUWlpYmVBQUFBQWQwU1UxRkIrUUpHQVUyT1FsdU5hTUFBQkQ1U1VSQlZIamE3ZDNCVXR2TUVnWlFSR1VQejJjL0h6d2ZQQUZaVUtHS0pOalNhRWFhbWUrYzFWMzh5VVZ5cS91YnRrMGVIZ0FBQUFBQUFBQUFBQUFBQUFBQUFJQmVMRzRCOU8vdGN2a1k2ZWQ5Zm4zVlcwQUFBR1laN0lJQ0NBQ0FJUzhjZ0FBQUdQU0NBUWdBWU5nakZJQUFBSVk5UWdFSUFHRGdJeENBQUFBR1BnSUJDQUJnNENNUWdBQUFoajdDQUFnQVlPQWpFSUFBQUlZK3dnQUlBQmo2SUF5QUFJQ2hEOElBQ0FBWS9DQU1nQUNBb1ErQ0FBSUFHUG9nRENBQWdNRVBnZ0FDQUJqNklBd2dBSURCRDRJQUFnQVkvQ0FJSUFDQXdRL0NBQUlBaGo0Z0NDQUFZUEFEZ2dBQ0FBWS9JQWdnQUdEd0E0SUFBZ0FHUHlBSUlBQmc4QU9DQUFJQUJqOGdDQ0FBWVBBRGdnQUNBSVkvSUFnZ0FHRHdneEFBQWdBR1B3Z0NDQUJnOElNZ2dBQ0E0UThJQVFnQUdQeUFJSUFBZ01FUENBSUlBQmorZ0JDQUFJREJEd2dDQ0FBWS9vQVFnQUNBd1E4SUFnZ0FHUHlBSUlBQWdPRVBDQUVJQUJqK2dCQ0FBSURCRHdnQ0NBQVkvb0FRZ0FCZzhBTUlBZ2dBaGorQUVJQUFZUGdEQ0FFSUFBWS9nQ0FnQUdENEF3Z0JBZ0NHUDRBUUlBQmc4QU1JQWdJQWhqK0FFQ0FBWVBnRENBRUNBSVkvZ0JBZ0FHRHdBd2dDQWdDR1A0QVFJQUJnK0FOQ2dCQWdBQmorQUVJQUFvRGhEeUFFSUFBWS9nQkNBQUtBd1E4Z0NDQUFHUDRBUWdBQ2dPRVBJQVFnQUJqK0FFSUFBb0RoRHlBRUlBQVkvZ0JDZ0FDQTRROGdCQWdBR1A0QVFvQUFnT0VQSUFRSUFCaitBRUtBQUdENEF5QUVDQUNHUHdCQ2dBQmcrQU1nQkFnQWhqOEFRb0FBWVBnRElBUUlBSVkvQUVLQUFHRDRBeUFFQ0FDR1B3QkNnQUJnK0FNZ0JBZ0FoajhBUW9BQVlQZ0RDQUZtM1g4OHVnVUFZQU9BMHorQUxZQUFZUGdESUFRSUFJWS9BRUtBQUdENEF5QUVDQUNHUHdCQ2dBQmcrQU1nQlBUSzF3QUJ3QWJBNlI4QVd3QUJ3UEFIUUFnUUFBeC9BSVFBQWNEd0IwQUlHSlFQQVFKQW9LaTA0L1FQZ0MxQVdBQXcvQUVRQXNJQ2dPRVBnQkR3bmM4QUFFQ2c2Uk9PMHo4QXRnQmhBY0R3QjBBSUNBc0FoajhBUXNEUGZBWUFBQUpObVdxYy9nR3dCUWdMQUlZL0FFTEFmZDRDQUlCQVU2VVpwMzhBYkFIQ0FvRGhENEFRRUJZQURIOEFoSUJ0ZkFZQUFBSU5uMkNjL2dHd0JiQUJBQUJtM3dBNC9RTmdDeEFXQUF4L0FJU0FjdDRDQUlCQVE2WVdwMzhBYkFIQ0FvRGhENEFRc0orM0FBQWcwRkJweGVrZkFGc0FHd0FBWVBZTmdOTS9BTFlBWVFIQThBZEFDS2pybDVlSjJUeTl2SHo5Ny9mcjFRMUJMY0dJR3dDbmY3WTI2cDlvNEtnbGJBRUVBSUthdGVhTldrSUFHQ3dBR1A3VWJ0Z2FOMm9KSWFEekFHRDQwNnBoYTl5b0pZUUF2d2VBMElaZDgrOUJMYWtsUnRSbEtuSDY1OGhHNi9TbWx0UVNpVnNBR3dDaUc3YlRtMXBTUzlnQU9QMFQyTENkM3RTU1dpSjFDMkFEZ0lidDlLYVcxQkkyQUU3L1pEWnNwemUxcEpaSTJ3TFlBS0JoTzcycEpiV0VEWURUUDlrTjIrbE5MYWtsVXJZQU5nQm8yRTV2YWtrdFlRUGc5STlHNmZTbWx0UVNDVnNBR3dBMGJLYzN0YVNXc0FGdytrZGpkSHBUUzJxSmhDMkFEUUFhdHRPYld2SnpZZ1BnOUk5RzZQU21sdFFTQ1ZzQUd3QTBiS2MzdGVUbnhnYkE2UitOeitsTkxha2xFcllBTmdCbzJFNXZYZ1BYUVNBQkFJM085Ymozcm9jVG5iVVJmMHk2V0RRNDErV2V1eTZ3QVVCamMzM3V0ZXNqMXVFZlBIRDYxN0JuNXNOY2Fra3RVZXJvRHdQYUFLQmh1MTczMXZWaUErRDBqd2JtOUthVzFCSUpXd0FiQURSczErOWV1bjVzQUp6KzBiQ2MzdFNTV2lKaEMyQURnSWJ0ZnJoMzdnZUJCQUEwS1BmRlBYTmZDSFRJbXNINlgyUENDbGN0cVNYV08rSnRBQnNBTkd6M3lUMXluN0FCY1BwSEkzSjZVMHRxaVlRdGdBMEFHcmI3NXA2NGJ3UVNBTkI0M0QvM3d2MGpVTlAxZ3ZXL2hzTnQ2U3RjdGFTV3VLM2wyd0EyQUdqWTdxZHJkeit4QVhENlI0TnhlbE5MYW9tRUxZQU5BQnEyKyt0YTNWOENDUUJvS082emEzU2ZDZFJrcldEOXI1RlFidFlWcmxwU1M1UnI4VGFBRFFBYXR2dnVtdFFTZ1FRQU5BNzMzN1dvSlFKVlh5bFkvMnNZMURQNkNsY3RxU1hxcWYwMmdBMEFHS0IrZGdna0FLQnBlMDM4ek9vSUFXQWY2My9RdkEwYWFLUDJqTFVCQUlQVjhBY2JBQXdZdkVicVIvMGdBR3hnL1ErNVRkeGdnV1BVbkxVMkFIenhOU0Vod1BBSEd3QkFDREQ4aFh3RUFFQUlNUHhCQVBpTDkvOGhLd1FZL25DZVdqUFhCb0J2ckFpRkFNUGZzNDBOQUNBRUdQNHdxZDMvc0lEMXYyRkN4a2xQVGFnSityTDNId2V5QVVEREVONE1mODh5Z1FRQU5BNGh3UEQzRENNQWdBWWlCQmorbmwwUzdIci93UHYvaGduekRnS3Z1ZUZQLy9aOERzQUdBQTFGZURQOFBhc0VFZ0RRV0lRQXc5OHppZ0FBR2t4eUNERDhQWnZrS0g3dndQdi9oZ2x6RFFxdnFlSFBtRW8vQjJBRGdJWWp2Qm4rbmtVQ0NRQm9QT0Vod1BEM0RKTEpXd0EwT1ZFQ2hqL0hLSDBMb09nUEdmNElBV0Q0TTNZSThCWUFHaEo0MWdna0FLQXhnV2NNQVFBMEtQQnNJUUNBUmdXZUthYTArVU1EUGdESVdqNFlDSVkveDluNlFVQWJBRFF1OEF3UlNBQkFBd1BQRGdJQWFHVGdtVUVBQUEwTlBDdE1hZE1IQm53QWtMMThNQkFNZjlyWjhrRkFHd0EwT1BCc0VFZ0FRS01EendRQ0FHaDQ0RmxBQUFDTkR6d0RDQUNnQVlMYVp3NnJQeTNvR3dDMDVOc0JHUDVReDlwdkF0Z0FvQ0dDV2llUUFJREdDR29jQVFBMFNGRGJDQUNnVVlLYVJnQUFEUlBVTWdJQWFKeWdoaG5VcXE4SytBb2daL0lWUVF4LzJHYk5Wd0Z0QU5CSVFjMFNTQUJBUXdXMWlnQUFHaXVvVVFRQTBHQkJiU0lBZ0VZTGFoSUJBRFJjMUtKYVJBQUFqUmMxQ0FJQWFNQ29QZWpXM1Y4VTRKY0FNUUsvTEFqREg3Njc5OHVBYkFEUWtFR3RFVWdBUUdNR05ZWUFBQm8wcUMwRUFOQ29RVTBoQUlDR2pWb0NBUUEwYnRRUUNBQ2dnYU4yUUFBQWpSdzFBd0lBYU9pb0ZSQUFRR05IallBQUFCbzhhZ01FQU5Eb1VSTWdBSUNHajFvQUFRQTBmdFFBQ0FCZ0FPQzFCd0VBREFLODVpQUFnSUdBMXhvRUFEQVl2TWFBQUFBR2hOY1dCQURBb1BDYWdnQUFCZ1plU3hBQXdPREFhd2dDQUFBZ0FNQjBubDVlM0FTdklRZ0FZSERndFFRQkFBd012S1lnQUlCQmdkY1dCQUF3SVBBYWd3QUFCZ05lYXhBQXdFREFhdzRDQUJnRWVPMUJBQUFEQURVQUFnQm8vS2dGRUFCQXcwZE5nQUFBR2oxcUF3UUEwT0JSSXlBQWdNYU9XZ0VCQUEwZDFBd0lBR2prb0hZUUFFQURCeldFQUFBYU42Z2xCQURRc0ZGVElBQ0FSbzNhQWdFQU5HalVHQXhtV2ZNZnZWMHVIMjRWR2pOOGVyOWUzUVM2OXZ6NmVuZSsyd0JnK0lPYUk1QUFnRVlNYWc4QkFEUmdVSU1JQUtEeGdscEVBQUFORjlRa0FnQm90S0EyRVFCQWcwV05nZ0FBR2l0cUZRUUEwRkJSczlDUFplMS82TGNCb3BIQ05uNWpJR2RZODFzQWJRQXcvRUVORTBvQVFPTUV0WXdBQUJvbXFHa0VBTkFvUVcwakFJQUdDV29jQVFBMFJsRHJER3JaOGgvN0tpQWFJdFRoSzRLMHNQWXJnRFlBR1A2Zzlna2xBS0FCZ21jQUFRQTBQdkFzSUFDQWhnZWVDUVFBME9qQXM4RWNscTEvd0RjQjBPQ2dIZDhPb05TV2J3RFlBR0Q0ZzJlRlVBSUFHaHA0WmhBQVFDTUR6dzRDQUdoZzRCbGlTa3ZKSC9KQlFEUXVPSTRQQm5MUDFnOEEyZ0JnK0lObmlsQUNBQm9WZUxZUUFFQ0RBczhZQWdCb1RPQlpZMHBMNlIvMFFVQTBKRGlQRHdieVI4a0hBRzBBTVB6REI0Z2g0dGtqbHdDQUJoUitlaFFDUElNSUFLRHhoQTEvSWNDelNLNWx6eC8yT1FBTmgvR0h2OWMyNDdWbFRxWHYvOXNBWVBnYkVJYUlaNU5RQWdBYWpPRXZCSGhHRVFCQVkwa2Uva0tBWjVVY3k5Ni93T2NBTkJUbUd2NWVlNjg5WTlqei9yOE5BQWFBQVdDSWVIWUpKUUNnZ1JqK1FvQm5HQUVBTkE3RFh3andMSk5ncWZHWCtCeUFoc0c4dzE5dHFBMzZzL2Y5ZnhzQTBPQU5FUWdsQU9DRVovZ0xBWjV0QklBeU5WWVJ3RGdEV1FpQTg5U2F1VFlBWVBnTEFXQURRRElyUXNOZkNBQUJBREQ4aFFBaEh3SGdQcDhEZ055Qkt3VEFNV3JPV2hzQU5IR3ZrZnBSUDlnQUFKcTNBUU1Dd0ViZUJnQ0RWUWlBTm1yUFdCc0FORyt2aVo5WkhXRURBR2phZm5aSTBHUmw3eDhIR3ArdkN4bWdha2t0MFk4V2I3SGJBS0JodVArdVJTMFJTQUJBNDNEZlhaTmFJbEN6VCsxN0cyQWVWcmdhdGxwU1M1eW4xVGZzYkFEUVNOeG4xK2crRTBnQVFFTnhmMTJyKzB1Z3ByKzR4OXNBODdIQzFiRFZrbHJpT0MxL3daNE5BQnFNKytuYTNVOXNBR3dCY0hyVHNOV1NXbUwyMDc4TkFCcU8rK2RldUgrRUVnRFFlTnczOThSOUk5QWgvM3FmdHdIbVpvV3JZYXNsdFVSZFIvenJ1allBYUVUdWszdmtQbUVEWUF1QTA1dUdyWmJVRXJPZi9tMEEwSmpjRi9mTWZTR1VBSUFHNVg2NGQrNEhnWllqLzgrOERaRERDbGZEVmt0cWllMk9Xdi9iQUtCaHVYNzMwdlZqQTJBTGdOT2JocTJXMUJJSnAzOGJBRFF3MSt2ZXVsNXNBR3dCY0hyVHNOV1NXaUxoOUc4RGdJYm0rdHhyMTBlb1V3TEFHVWtIamMxMXVlZXVDMndBME9CY2ozdnZldWpDV1lkaUFRQ05Uc1AyR3JnT0FwMjZpdmRod0d3amY1aEx3MVpMYW9tUlQvODJBR2g4R3JaYThuTmpBMkFMZ05PYmhxMlcxQklKcDM4YkFEUkNEVnN0K1RteEFiQUZ3T2xOdzFaTGFvbUUwNzhOQUJxamhxMlcvRnpZQU5nQzRQU21ZYXNsdFVUQzZkOEdBS2NrRFZzdHFTVnNBR3dCY0hyVHNOV1NXaUxoOUc4RGdOT2JocTJXMUJJMkFMWUFPTDFwMkdwSkxaRncrcmNCd09sTncxWkxhZ2tiQUZzQWNrOXZHclphVWtza25mNXRBSEI2MDdEVmtsckNCc0FXZ0x6VG00YXRsdFFTaWFmL3JqY0F2ZDR3NWptOWFkaW9KWko1QzRESXhxMWhvNVpJUDh4MmY4cjJWZ0MzbEt4d05XelVFdW5EWHdBZ3FubHIxcWdsQklDQkFvQVF3SjRHcmxHamxqRDhCUUFBRUFCR0NnQkNBQUNHZjJnQUVBSUFNUHpyOFRWQUFBZzAzQy9ic1FVQXdPbmZCZ0FBU05nQTJBSUE0UFFmR2dDRUFBQU0vMzI4QlFBQWdZYitGL2RzQVFCdytnOE1BRUlBQUlaL0dXOEJBRUNnWllhTHNBVUF3T25mQmdBQVNOZ0EyQUlBNFBRZkdnQ0VBQUFNLzlBQUlBUUFZUGl2NHpNQUFCQm9tZkdpYkFFQWNQb1BEQUJDQUFDRy8yM2VBZ0NBUU12TUYyY0xBSURUZjJBQUVBSUFNUHhEQTRBUUFJRGgveStmQVFDQVFFdktoZG9DQU9EMEh4Z0FoQUFBRFAvUUFDQUVBR0Q0Zi9JWkFBQUl0Q1JldEMwQUFNbW4vOWdBSUFRQWtEejhvd09BRUFCQTZ2Q1BEd0JDQUlEaG44cUhBQUhBQnNBV0FBQ25md0ZBQ0FEQThCY0FoQUFBREg4QlFBZ0F3UEFYQUlRQUFBeC9BVUFJQU1Edzc1YXZBUUtBRFFDMkFBQk8vd0lBUWdDQTRTOEFDQUVBR1A0Q2dCQUFnT0V2QUFnQkFCaitBb0FRQUlEaEx3QUlBUUFZL2dLQUVBQ0E0UzhBQ0FFQUdQNENnQkFBZ09FdkFBZ0JBQmorQW9BUUFHRDRJd0FJQVFDR1B3S0FFQUJnK0NNQUNBRUFoajhDZ0JBQVlQZ2pBQWdCQUlhL0FJQVFBR0Q0Q3dBSUFRQ0d2d0NBRUFCZytBc0FDQUlBQnI4QWdCQUFZUGdMQUFnQkFJYS9BSUFRQUdENEN3QUlBUUNHdndBZ0JBZ0JnT0dQQUNBSUFCajhDQUJDQUlEaGp3QWdCQUFZL2dnQVFnQ0E0WThBSUFnQUdQd0lBRUlBZ09HUEFDQUVBQmorQ0FDQ0FJREJMd0FnQkFBWS9nSUFRZ0NBNFM4QUlBZ0FHUHdDQUVJQVlQZ2pBQ0FJQUFZL0FnQkNBR0Q0SXdBZ0JBQ0dQd0lBZ2dCZzhDTUFJQWdBQmo4Q0FFSUFZUGdqQUNBSUFBWS9BZ0JDQUdENEl3QWdDQUFHUHdJQWdnQmc4Q01BSUFRQWhqOENBSUlBR1B4NlBnSUFnZ0FZL0FnQUlBaUE0WThBQUVJQUdQd0lBQ0FJZ01HUEFJQWdJQWlBd1k4QWdDQUFHUHdJQUFnQ2dNR1BBSUFnQUJqOENBQUlBb0RCandDQUlBQVkvQWdBQ0FPQXdZOEFnQ0FBaGo0SUFBZ0NZUENEQUlBZ0FBWS9DQUFJQTJEb2d3Q0FJQUFHUHdnQUNBTmc2SU1BZ0RBQUJqOENBQWdDWU9nakFJQXdBSVkrQWdBSUEyRG9Jd0NBTUlDaER3SUFDQVFZK0NBQWdEQ0FvUThDQUFnRUdQZ2dBSUJBZ0lFUEFnQUlCQmo0SUFDQVVJQmhEd0lBQ0FVWTlpQUFnR0JnMEFNQ0FBZ0hoandnQUlDZ1lMQURBQUFBQUFBQUFBQUFBQUFBQUFBQXdLQitBNk9PNzVWKzhENERBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IEVkaXRCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvRWRpdEJ0blwiO1xyXG5pbXBvcnQgRWRpdFRhZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxfRWRpdFRhZ3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0dhbGxlcnlQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuLi9pbWFnZXMvdGltZXMtY2lyY2xlLXNvbGlkLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IHsgVGFncyB9IGZyb20gXCIuLi91dGlscy90YWdzXCI7XHJcblxyXG5pbXBvcnQgeyBwaG90b01vZGFsU3R5bGUsIHVwbG9hZE1vZGFsU3R5bGUsIHRhZ3NNb2RhbFN0eWxlIH0gZnJvbSBcIi4uL3V0aWxzL21vZGFsU3R5bGVzXCI7XHJcblxyXG5Nb2RhbC5zZXRBcHBFbGVtZW50KFwiYm9keVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XHJcblxyXG4gIC8vIHdpbmRvd1NpemUgQ3VzdG9tIEhvb2tcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIFxyXG4gIC8vIE1vZGFsIFN0eWxlcyAtIFJlc3BvbnNpdmVzIFNpemluZ1xyXG4gIHBob3RvTW9kYWxTdHlsZS5jb250ZW50LndpZHRoID0gc2l6ZS53aWR0aCA8PSAxMDI0ID8gXCI5NSVcIiA6IFwiNjAlXCI7XHJcbiAgdXBsb2FkTW9kYWxTdHlsZS5jb250ZW50LndpZHRoID0gc2l6ZS53aWR0aCA8PSAxMDI0ID8gXCI5NSVcIiA6IFwiNjAlXCI7XHJcbiAgdGFnc01vZGFsU3R5bGUuY29udGVudC53aWR0aCA9IHNpemUud2lkdGggPD0gMTAyNCA/IFwiOTUlXCIgOiBcIjYwJVwiO1xyXG5cclxuICAvL3N0YXRlIGRlY2xhcmF0aW9uc1xyXG4gIGNvbnN0IFtnYWxsZXJ5SW1hZ2VzLCBzZXRHYWxsZXJ5SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FsbGVyeVRhZ3MsIHNldEdhbGxlcnlUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2xpY2tlZEltYWdlLCBzZXRDbGlja2VkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NsaWNrZWRJbWFnZUlkLCBzZXRDbGlja2VkSW1hZ2VJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVibGljSWRzLCBzZXRQdWJsaWNJZHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRNb2RhbElzT3Blbiwgc2V0VXBsb2FkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YWdzTW9kYWxJc09wZW4sIHNldFRhZ3NNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZXNUb1VwbG9hZCwgc2V0SW1hZ2VzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjbGlja2VkRG9uZSwgc2V0Q2xpY2tlZERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdGFnZWRJbWFnZUluZGV4LCBzZXRTdGFnZWRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0aHVtYnMsIHNldFRodW1ic10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FkZGluZ0ltYWdlLCBzZXRBZGRpbmdJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnB1dEtleSwgc2V0SW5wdXRrZXldID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG5cclxuICAvL3ZhcmlhYmxlIGFuZCBmdW5jdGlvbiBkZWNsYXJhdGlvbnNcclxuICBjb25zdCBhbGxUYWdzID0gVGFncztcclxuXHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFtcIkFsbFwiXS5jb25jYXQoYWxsVGFncyk7XHJcblxyXG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICAvL01vZGFsIGZ1bmN0aW9uc1xyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5VcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblRhZ3NNb2RhbCgpIHtcclxuICAgIHNldFRhZ3NNb2RhbCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VVcGxvYWRNb2RhbCgpIHtcclxuICAgIHNldFVwbG9hZE1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlVGFnc01vZGFsKCkge1xyXG4gICAgc2V0VGFnc01vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vdGFnZ2luZyBmdW5jdGlvbnNcclxuXHJcbiAgZnVuY3Rpb24gYWRkVGFnKHQsIGkpIHtcclxuICAgIGlmICghdGFnc1tpXSkge1xyXG4gICAgICBzZXRUYWdzKFsuLi50YWdzLCAodGFnc1tpXSA9IFt0XSldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSB0YWdzW2ldO1xyXG4gICAgICBzZXRUYWdzKFxyXG4gICAgICAgIHRhZ3MubWFwKChhcnIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPT0gaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFycltpXSA9IHRlbXAuY29uY2F0KHQpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbFRhZyh0LCBpKSB7XHJcbiAgICBzZXRUYWdzKFxyXG4gICAgICB0YWdzLm1hcCgoYXJyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSB0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9hc3QgZnVuY3Rpb25zXHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiIFVwbG9hZCBTdWNjZXNzXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgY2xhc3NOYW1lOiBzdHlsZS50b2FzdFN1Y2Nlc3MsXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgZXJyb3JUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC5lcnJvcihcIlVwbG9hZCBlcnJvciwgcGxlYXNlIHJlZnJlc2hcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHdhcm5pbmdUb2FzdCA9ICgpID0+XHJcbiAgICB0b2FzdC53YXJuKFwiTm8gaW1hZ2VzIHNlbGVjdGVkXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAvLyBmaWxlIGZ1bmN0aW9uc1xyXG4gIGNvbnN0IHJlc2V0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2lnbiA9IERhdGUubm93KCk7XHJcbiAgICBzZXRJbnB1dGtleShzaWduKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkRG9uZShmYWxzZSk7XHJcbiAgICBzZXRBZGRpbmdJbWFnZSh0cnVlKTtcclxuICAgIHNldEltYWdlc1RvVXBsb2FkKFsuLi5pbWFnZXNUb1VwbG9hZCwgZS50YXJnZXQuZmlsZXNbMF1dKTtcclxuICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVXBsb2FkKGkpIHtcclxuICAgIGlmICh0aHVtYnMubGVuZ3RoID4gMSkge1xyXG4gICAgICBpZiAocHJldmlldyA9PT0gdGh1bWJzW2ldKSB7XHJcbiAgICAgICAgc2V0UHJldmlldyh0aHVtYnNbaSAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZW1wMSA9IHRodW1icy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGNvbnN0IHRlbXAyID0gaW1hZ2VzVG9VcGxvYWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICBjb25zdCB0ZW1wMyA9IHRhZ3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBzZXRUaHVtYnModGh1bWJzLmZpbHRlcigoZWwpID0+IGVsICE9PSB0ZW1wMSkpO1xyXG4gICAgICBzZXRJbWFnZXNUb1VwbG9hZChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGVtcDIuc3BsaWNlKGksIDEpKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRUYWdzKHRhZ3MuZmlsdGVyKCh0KSA9PiB0ICE9PSB0ZW1wMykpO1xyXG4gICAgICBzZXRBZGRpbmdJbWFnZShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUYWdzKFtdKTtcclxuICAgICAgc2V0VGh1bWJzKFtdKTtcclxuICAgICAgc2V0SW1hZ2VzVG9VcGxvYWQoW10pO1xyXG4gICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInByZXZpZXdcIiwgcHJldmlldyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWltYWdlc1RvVXBsb2FkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gd2FybmluZ1RvYXN0KCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgaW1hZ2VzVG9VcGxvYWQuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRhZ3NcIiwgdGFnc1tpXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhZ3NbaV0pO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhaXJbMV0sIHBhaXJbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zSW5zdGFuY2VcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS91cGxvYWRcIixcclxuICAgICAgICBmb3JtRGF0YVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHN1Y2Nlc3NUb2FzdCgpO1xyXG4gICAgICAgIGNsb3NlVXBsb2FkTW9kYWwoKTtcclxuICAgICAgICBzZXRQcmV2aWV3KG51bGwpO1xyXG4gICAgICAgIHNldEltYWdlc1RvVXBsb2FkKFtdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGVycm9yVG9hc3QoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBTaWRlIGVmZmVjdHNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbWFnZXNUb1VwbG9hZC5sZW5ndGggJiYgYWRkaW5nSW1hZ2UgPT09IHRydWUpIHtcclxuICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgICAgICBpbWFnZXNUb1VwbG9hZFtpbWFnZXNUb1VwbG9hZC5sZW5ndGggLSAxXVxyXG4gICAgICApO1xyXG4gICAgICBzZXRQcmV2aWV3KG9iamVjdFVybCk7XHJcbiAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaW1hZ2VzVG9VcGxvYWQubGVuZ3RoIC0gMSk7XHJcbiAgICAgIHNldEFkZGluZ0ltYWdlKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coXCIqKipcIiwgaW1hZ2VzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZXNUb1VwbG9hZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicnJhbmRhbGwtYXV0aG9yaXphdGlvblwiKSk7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2ltYWdlcy9zZWFyY2hcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vaW5pdGlhbGl6ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc0luc3RhbmNlXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCIsXHJcbiAgICAgICAge31cclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgICByZXMuZGF0YS5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGksIHVybDogYSB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9zZXYzazFsaXczLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMvXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldFB1YmxpY0lkcyhbLi4ucmVzLmRhdGFdKTtcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5wb3N0KFxyXG4gICAgICAgICAgXCJodHRwczovL3NldjNrMWxpdzMuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2FwaS90YWdzXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkczogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKip0YWdzXCIsIHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRHYWxsZXJ5VGFncyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgdGFnc1wiLCBlcnIpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IEdFVFwiLCBlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChnYWxsZXJ5VGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEdhbGxlcnlJbWFnZXMoXHJcbiAgICAgICAgZ2FsbGVyeUltYWdlcy5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGlkOiBhLmlkLCB1cmw6IGEudXJsLCB0YWdzOiBnYWxsZXJ5VGFnc1tpXSB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW2dhbGxlcnlUYWdzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Ui5SYW5kYWxsIEdhbGxlcnk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE0LjAvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUh6TGVCdWhvTlB2U2w1S1luangwQlQrV0IwUUVFcUxwck8rTkJra2s1Z2JjNjdGVGFMN1hJR2EydzFMMFhiZ2NcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3Bob3RvTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2NsaWNrZWRJbWFnZX1cclxuICAgICAgICAgIGFsdD1cImdhbGxlcnkgbW9kYWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jbGlja2VkSW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXt1cGxvYWRNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VVcGxvYWRNb2RhbH1cclxuICAgICAgICBzdHlsZT17dXBsb2FkTW9kYWxTdHlsZX1cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJNb2RhbFwiXHJcbiAgICAgICAgaWQ9e3N0eWxlLnVwbG9hZE1vZGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZE1vZGFsfT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17aW5wdXRLZXkgfHwgXCJcIn1cclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltZ0NvbGxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudXBsb2FkSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuc3VibWl0QnRufT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT5VcGxvYWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJldmlldyA/IHN0eWxlLnByZXZpZXdzIDogbnVsbH0+XHJcbiAgICAgICAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RhZ2luZ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGFnc30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnc1RpdGxlfT5UYWdzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgeyF0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhbGxUYWdzLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS50YWdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKHQsIHN0YWdlZEltYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWxsVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCB0YWdzW3N0YWdlZEltYWdlSW5kZXhdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09IHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF1baV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGFnUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIXRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gfHwgY2xpY2tlZERvbmUgPyBcImRpc2FibGVkXCIgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdzW3N0YWdlZEltYWdlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGFnc1tzdGFnZWRJbWFnZUluZGV4XS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlLmRpc2FibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlLmRvbmVCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZS5kaXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRodW1icyhbLi4udGh1bWJzLCBwcmV2aWV3XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkRG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlN0YWdpbmdQaWNEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLnN0YWdpbmdQaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzdGFnaW5nIHByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlVGFnc30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3Nbc3RhZ2VkSW1hZ2VJbmRleF0ubWFwKCh0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnRhZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUYWcodCwgc3RhZ2VkSW1hZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c3R5bGUudGFnZ2VkSWNvbn0gZmFzIGZhLXRpbWVzYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGFnZ2VkfT57dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWludGh1bWJzRGl2fT5cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRodW1ic0Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QWRkIE1vcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLXBsdXMgJHtzdHlsZS5wbHVzSWNvbn1gfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGUtdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7dGh1bWJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIHRodW1icy5tYXAoKHAsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudGh1bWJzRGl2fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0YWdlZEltYWdlSW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aHVtYnMubGVuZ3RoID4gMSAmJiBzZXRQcmV2aWV3KHRodW1ic1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY3Jvc3NJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcGxvYWQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYW5jZWxJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUucHJldmlld1RodW1ifSBzcmM9e3B9IHRhYkluZGV4PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e3RhZ3NNb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VUYWdzTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e3RhZ3NNb2RhbFN0eWxlfVxyXG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIk1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxFZGl0VGFncyBpbWc9e2NsaWNrZWRJbWFnZX0gaWQ9e2NsaWNrZWRJbWFnZUlkfS8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdhbGxlcnlQYWdlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5VGl0bGV9PkZ1bGwgR2FsbGVyeTwvaDI+XHJcbiAgICAgICAge2xvZ2dlZCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBsb2FkQnRufSBvbkNsaWNrPXtvcGVuVXBsb2FkTW9kYWx9PlxyXG4gICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IGNcclxuICAgICAgICAgICAgICAgICAgICA/IGAke3N0eWxlLnRhZ0J0bn0gJHtzdHlsZS5hY3RpdmVUYWdCdG59YFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3R5bGUudGFnQnRuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUNhdGVnb3J5KGMpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yb3dzfT5cclxuICAgICAgICAgICAge2NhdGVnb3J5ID09PSBcIkFsbFwiXHJcbiAgICAgICAgICAgICAgPyBnYWxsZXJ5SW1hZ2VzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5nYWxsZXJ5SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblRhZ3NNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNJZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRJbWFnZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IGNhdGVnb3J5ICE9PSBcIkFMTFwiICYmIGdhbGxlcnlUYWdzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IGdhbGxlcnlJbWFnZXNcclxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwudGFncy5pbmNsdWRlcyhjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZ2FsbGVyeUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgYXQgaW5kZXggJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpY2tlZEltYWdlKGVsLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkSW1hZ2VJZChwdWJsaWNJZHNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5UYWdzTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrZWRJbWFnZShlbC51cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRWRpdEJ0blwiOiBcIkVkaXRCdG5fRWRpdEJ0bl9fMVlaUFFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZvcm1cIjogXCJFZGl0VGFnc19Gb3JtX19oLXk1Z1wiLFxuXHRcIkJvZHlcIjogXCJFZGl0VGFnc19Cb2R5X18zdU9KN1wiLFxuXHRcIlRpdGxlXCI6IFwiRWRpdFRhZ3NfVGl0bGVfXzFQYUVrXCIsXG5cdFwiQnV0dG9uXCI6IFwiRWRpdFRhZ3NfQnV0dG9uX18xU0d4bFwiLFxuXHRcIlN0YWdlXCI6IFwiRWRpdFRhZ3NfU3RhZ2VfXzE0emNtXCIsXG5cdFwiSW1hZ2VQcmV2aWV3XCI6IFwiRWRpdFRhZ3NfSW1hZ2VQcmV2aWV3X18ySUFhN1wiLFxuXHRcIklkXCI6IFwiRWRpdFRhZ3NfSWRfXzJYcHBHXCIsXG5cdFwiVGFnc1wiOiBcIkVkaXRUYWdzX1RhZ3NfXzN4amQ0XCIsXG5cdFwidGFnZ2VkSWNvblwiOiBcIkVkaXRUYWdzX3RhZ2dlZEljb25fXzE5LWRmXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJnYWxsZXJ5UGFnZVwiOiBcIkdhbGxlcnlQYWdlX2dhbGxlcnlQYWdlX18ySDF1VVwiLFxuXHRcImdhbGxlcnlUaXRsZVwiOiBcIkdhbGxlcnlQYWdlX2dhbGxlcnlUaXRsZV9fQWpWcjFcIixcblx0XCJjYXRlZ29yaWVzXCI6IFwiR2FsbGVyeVBhZ2VfY2F0ZWdvcmllc19fSy1MaUhcIixcblx0XCJ0YWdCdG5cIjogXCJHYWxsZXJ5UGFnZV90YWdCdG5fXzEzRGJJXCIsXG5cdFwiYWN0aXZlVGFnQnRuXCI6IFwiR2FsbGVyeVBhZ2VfYWN0aXZlVGFnQnRuX18xUktyc1wiLFxuXHRcImdyaWRcIjogXCJHYWxsZXJ5UGFnZV9ncmlkX18zeDdVdlwiLFxuXHRcInJvd3NcIjogXCJHYWxsZXJ5UGFnZV9yb3dzX19pSEdVX1wiLFxuXHRcIml0ZW1cIjogXCJHYWxsZXJ5UGFnZV9pdGVtX18zUVpjTVwiLFxuXHRcInVwbG9hZEJ0blwiOiBcIkdhbGxlcnlQYWdlX3VwbG9hZEJ0bl9fMW9BbENcIixcblx0XCJ1cGxvYWRNb2RhbFwiOiBcIkdhbGxlcnlQYWdlX3VwbG9hZE1vZGFsX18zV0ptQlwiLFxuXHRcIm1haW50aHVtYnNEaXZcIjogXCJHYWxsZXJ5UGFnZV9tYWludGh1bWJzRGl2X18zQUFuZ1wiLFxuXHRcInBsdXNJY29uXCI6IFwiR2FsbGVyeVBhZ2VfcGx1c0ljb25fX2t5V3lmXCIsXG5cdFwiY3Jvc3NJY29uXCI6IFwiR2FsbGVyeVBhZ2VfY3Jvc3NJY29uX18yckJkV1wiLFxuXHRcInByZXZpZXdzXCI6IFwiR2FsbGVyeVBhZ2VfcHJldmlld3NfXzNFaWxSXCIsXG5cdFwic3RhZ2luZ1wiOiBcIkdhbGxlcnlQYWdlX3N0YWdpbmdfXzEwbWxfXCIsXG5cdFwidGFnc1wiOiBcIkdhbGxlcnlQYWdlX3RhZ3NfXzF6eGlMXCIsXG5cdFwidGFnc1RpdGxlXCI6IFwiR2FsbGVyeVBhZ2VfdGFnc1RpdGxlX18zdmhYZFwiLFxuXHRcImRvbmVCdG5cIjogXCJHYWxsZXJ5UGFnZV9kb25lQnRuX19QaUNFeVwiLFxuXHRcImRpc2FibGVcIjogXCJHYWxsZXJ5UGFnZV9kaXNhYmxlX18xRTRFUFwiLFxuXHRcIlN0YWdpbmdQaWNEaXZcIjogXCJHYWxsZXJ5UGFnZV9TdGFnaW5nUGljRGl2X18zdnVOUVwiLFxuXHRcImZhZGVJblwiOiBcIkdhbGxlcnlQYWdlX2ZhZGVJbl9fMm16RDJcIixcblx0XCJhY3RpdmVUYWdzXCI6IFwiR2FsbGVyeVBhZ2VfYWN0aXZlVGFnc19fMzNjMmJcIixcblx0XCJ0YWdSb3dcIjogXCJHYWxsZXJ5UGFnZV90YWdSb3dfXzNLbWRZXCIsXG5cdFwidGFnZ2VkSWNvblwiOiBcIkdhbGxlcnlQYWdlX3RhZ2dlZEljb25fXzFOV0NnXCIsXG5cdFwidGFnZ2VkXCI6IFwiR2FsbGVyeVBhZ2VfdGFnZ2VkX18xWnFmd1wiLFxuXHRcInRodW1ic0RpdlwiOiBcIkdhbGxlcnlQYWdlX3RodW1ic0Rpdl9fMW5kRFNcIixcblx0XCJwcmV2aWV3VGh1bWJcIjogXCJHYWxsZXJ5UGFnZV9wcmV2aWV3VGh1bWJfX3pTbkZhXCIsXG5cdFwidXBsb2FkSW5wdXRcIjogXCJHYWxsZXJ5UGFnZV91cGxvYWRJbnB1dF9fOUk1S1BcIixcblx0XCJzdWJtaXRCdG5cIjogXCJHYWxsZXJ5UGFnZV9zdWJtaXRCdG5fXzNjQy0xXCIsXG5cdFwidG9hc3RTdWNjZXNzXCI6IFwiR2FsbGVyeVBhZ2VfdG9hc3RTdWNjZXNzX19MUDVBV1wiLFxuXHRcImNsaWNrZWRJbWFnZVwiOiBcIkdhbGxlcnlQYWdlX2NsaWNrZWRJbWFnZV9fM3g3ekVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhckNvbnRhaW5lclwiOiBcIk5hdmJhcl9uYXZiYXJDb250YWluZXJfXzNMS0hDXCIsXG5cdFwibG9nb0NvbnRhaW5lclwiOiBcIk5hdmJhcl9sb2dvQ29udGFpbmVyX18xSHBHTlwiLFxuXHRcIm5hdkxvZ29cIjogXCJOYXZiYXJfbmF2TG9nb19fM2lPb2tcIixcblx0XCJuYXZUZXh0XCI6IFwiTmF2YmFyX25hdlRleHRfXzJfa0NBXCIsXG5cdFwiaWNvbnNcIjogXCJOYXZiYXJfaWNvbnNfXzRMQm9TXCIsXG5cdFwibWFpbEljb25cIjogXCJOYXZiYXJfbWFpbEljb25fX2JwTHd4XCIsXG5cdFwicGhvbmVJY29uXCI6IFwiTmF2YmFyX3Bob25lSWNvbl9fMnlvTThcIixcblx0XCJtb2RhbEhlYWRlclwiOiBcIk5hdmJhcl9tb2RhbEhlYWRlcl9fczFnLXZcIixcblx0XCJjb250YWN0SW5wdXRzXCI6IFwiTmF2YmFyX2NvbnRhY3RJbnB1dHNfXzIzNUFkXCIsXG5cdFwidGV4dEFyZWFcIjogXCJOYXZiYXJfdGV4dEFyZWFfXzJyemR6XCIsXG5cdFwic2VuZEJ0blwiOiBcIk5hdmJhcl9zZW5kQnRuX18zVE5mZVwiLFxuXHRcIm1vZGFsRmFkZVwiOiBcIk5hdmJhcl9tb2RhbEZhZGVfX1h5SnZPXCJcbn07XG4iLCJleHBvcnQgY29uc3QgcGhvdG9Nb2RhbFN0eWxlID0gXHJcbntcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLC01MCUpXCIsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgekluZGV4OiA1LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpXCIsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwbG9hZE1vZGFsU3R5bGUgPSBcclxue1xyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgIGJvdHRvbTogXCJhdXRvXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzYTNhM2FcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjgwdmhcIixcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgekluZGV4OiA1LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpXCIsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRhZ3NNb2RhbFN0eWxlID0gXHJcbntcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2EzYTNhXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLC01MCUpXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwLjVlbVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxufSxcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICB6SW5kZXg6IDUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNylcIlxyXG59XHJcbn0iLCIvLyBMaXN0IG9mIGFsbCB0YWdzIGZvciBnYWxsZXJ5XHJcblxyXG5leHBvcnQgY29uc3QgVGFncyA9IFtcclxuICAgIFwiUmVzaWRlbnRpYWxcIixcclxuICAgIFwiQ29tbWVyY2lhbFwiLFxyXG4gICAgXCJJbnRlcmlvclwiLFxyXG4gICAgXCJFeHRlcmlvclwiLFxyXG4gICAgXCJDYWJpbmV0c1wiLFxyXG4gIF07IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9