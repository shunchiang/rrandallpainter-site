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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Jumbo.js":
/*!*****************************!*\
  !*** ./components/Jumbo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Jumbo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/Jumbo.module.scss */ \"./sass/Jumbo.module.scss\");\n/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/kitchen1.png */ \"./images/kitchen1.png\");\n/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/components/Jumbo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Jumbo() {\n  const {\n    0: mainPhoto,\n    1: setMainPhoto\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n  return __jsx(\"div\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboTron,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heroImage,\n    src: mainPhoto,\n    alt: \"painting sample\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, \"Premium craftsmanship\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }), \"Competitive value\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }), \"Maximum satisfaction\"), __jsx(\"button\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ctaBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Get Quote\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0p1bWJvLmpzP2FiNTkiXSwibmFtZXMiOlsiSnVtYm8iLCJtYWluUGhvdG8iLCJzZXRNYWluUGhvdG8iLCJ1c2VTdGF0ZSIsImtpdGNoZW5QaG90byIsInN0eWxlcyIsImp1bWJvVHJvbiIsImhlcm9JbWFnZSIsImp1bWJvQ29udGVudCIsImp1bWJvVGV4dCIsImN0YUJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDQywyREFBRCxDQUExQztBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsU0FBdkI7QUFBa0MsT0FBRyxFQUFFTixTQUF2QztBQUFrRCxPQUFHLEVBQUMsaUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFSSw4REFBTSxDQUFDRyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHVCQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRix5QkFERixFQVFFO0FBQVEsYUFBUyxFQUFFSiw4REFBTSxDQUFDSyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLENBRkYsQ0FERjtBQWVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9KdW1iby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc2Fzcy9KdW1iby5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGtpdGNoZW5QaG90byBmcm9tIFwiLi4vaW1hZ2VzL2tpdGNoZW4xLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKdW1ibygpIHtcbiAgY29uc3QgW21haW5QaG90bywgc2V0TWFpblBob3RvXSA9IHVzZVN0YXRlKGtpdGNoZW5QaG90byk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qdW1ib1Ryb259PlxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSW1hZ2V9IHNyYz17bWFpblBob3RvfSBhbHQ9XCJwYWludGluZyBzYW1wbGVcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qdW1ib0NvbnRlbnR9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5qdW1ib1RleHR9PlxuICAgICAgICAgIFByZW1pdW0gY3JhZnRzbWFuc2hpcFxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIENvbXBldGl0aXZlIHZhbHVlXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgTWF4aW11bSBzYXRpc2ZhY3Rpb25cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmN0YUJ0bn0+R2V0IFF1b3RlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Jumbo.js\n");

/***/ }),

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/Main.module.scss */ \"./sass/Main.module.scss\");\n/* harmony import */ var _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_residentialDefault_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/residentialDefault.jpg */ \"./images/residentialDefault.jpg\");\n/* harmony import */ var _images_residentialDefault_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_residentialDefault_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_commercialWork_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/commercialWork.jpg */ \"./images/commercialWork.jpg\");\n/* harmony import */ var _images_commercialWork_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_commercialWork_jpg__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/components/Main.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Main() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.about,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.aboutTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"15 Years of excellence\"), __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }), __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.aboutContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"We are a fox valley based, down to earth service commited to excellence. Our dedication to craftsmanship promises the attention your property deserves\")), __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.offersSection,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.residential,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.resContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.resTitleBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    class: \"fas fa-home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }), __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.resTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 15\n    }\n  }, \"Residential\")), __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.resText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"We specialize in both interior and exterior painting in addition to staining to perfectly suit your home\"), __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.seeMore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"See More\")), __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.resImgContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.offersImage1,\n    src: _images_residentialDefault_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"residence\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commercial,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comImgContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.offerImage2,\n    src: _images_commercialWork_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"gas station\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comTitleBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    class: \"fas fa-warehouse\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }), __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, \"Commercial\")), __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"Our veteran level experience with commercial projects will deliver the results you deserve\"), __jsx(\"p\", {\n    className: _sass_Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.seeMore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"See More\")))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanM/ODY2MCJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGUiLCJhYm91dCIsImFib3V0VGl0bGUiLCJsaW5lIiwiYWJvdXRDb250ZW50Iiwib2ZmZXJzU2VjdGlvbiIsInJlc2lkZW50aWFsIiwicmVzQ29udGVudCIsInJlc1RpdGxlQm94IiwicmVzVGl0bGUiLCJyZXNUZXh0Iiwic2VlTW9yZSIsInJlc0ltZ0NvbnRhaW5lciIsIm9mZmVyc0ltYWdlMSIsInJlc2lkZW50aWFsRGVmYXVsdCIsImNvbW1lcmNpYWwiLCJjb21JbWdDb250YWluZXIiLCJvZmZlckltYWdlMiIsImNvbW1lcmNpYWxEZWZhdWx0IiwiY29tQ29udGVudCIsImNvbVRpdGxlQm94IiwiY29tVGl0bGUiLCJjb21UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBRUMsNkRBQUssQ0FBQ0MsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRCw2REFBSyxDQUFDRSxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVGLDZEQUFLLENBQUNHLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUcsYUFBUyxFQUFFSCw2REFBSyxDQUFDSSxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhKQUhGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBRUosNkRBQUssQ0FBQ0ssYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCw2REFBSyxDQUFDTSxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVOLDZEQUFLLENBQUNPLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVAsNkRBQUssQ0FBQ1EsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsU0FBSyxFQUFDLGFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVSLDZEQUFLLENBQUNTLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FERixFQUtFO0FBQUcsYUFBUyxFQUFFVCw2REFBSyxDQUFDVSxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdIQUxGLEVBU0U7QUFBRyxhQUFTLEVBQUVWLDZEQUFLLENBQUNXLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFFWCw2REFBSyxDQUFDWSxlQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUVaLDZEQUFLLENBQUNhLFlBRG5CO0FBRUUsT0FBRyxFQUFFQyxxRUFGUDtBQUdFLE9BQUcsRUFBQyxXQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVpGLENBREYsRUFxQkU7QUFBSyxhQUFTLEVBQUVkLDZEQUFLLENBQUNlLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWYsNkRBQUssQ0FBQ2dCLGVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBRWhCLDZEQUFLLENBQUNpQixXQURuQjtBQUVFLE9BQUcsRUFBRUMsaUVBRlA7QUFHRSxPQUFHLEVBQUMsYUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFFbEIsNkRBQUssQ0FBQ21CLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRW5CLDZEQUFLLENBQUNvQixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxTQUFLLEVBQUMsa0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVwQiw2REFBSyxDQUFDcUIsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixDQURGLEVBS0U7QUFBRyxhQUFTLEVBQUVyQiw2REFBSyxDQUFDc0IsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FMRixFQVNFO0FBQUcsYUFBUyxFQUFFdEIsNkRBQUssQ0FBQ1csT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixDQVRGLENBckJGLENBVkYsQ0FERjtBQXdERCIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL01haW4ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCByZXNpZGVudGlhbERlZmF1bHQgZnJvbSBcIi4uL2ltYWdlcy9yZXNpZGVudGlhbERlZmF1bHQuanBnXCI7XG5pbXBvcnQgY29tbWVyY2lhbERlZmF1bHQgZnJvbSBcIi4uL2ltYWdlcy9jb21tZXJjaWFsV29yay5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFib3V0fT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRpdGxlfT4xNSBZZWFycyBvZiBleGNlbGxlbmNlPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGluZX0+PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuYWJvdXRDb250ZW50fT5cbiAgICAgICAgICBXZSBhcmUgYSBmb3ggdmFsbGV5IGJhc2VkLCBkb3duIHRvIGVhcnRoIHNlcnZpY2UgY29tbWl0ZWQgdG9cbiAgICAgICAgICBleGNlbGxlbmNlLiBPdXIgZGVkaWNhdGlvbiB0byBjcmFmdHNtYW5zaGlwIHByb21pc2VzIHRoZSBhdHRlbnRpb25cbiAgICAgICAgICB5b3VyIHByb3BlcnR5IGRlc2VydmVzXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9mZmVyc1NlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmVzaWRlbnRpYWx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yZXNDb250ZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yZXNUaXRsZUJveH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWhvbWVcIj48L2k+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucmVzVGl0bGV9PlJlc2lkZW50aWFsPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnJlc1RleHR9PlxuICAgICAgICAgICAgICBXZSBzcGVjaWFsaXplIGluIGJvdGggaW50ZXJpb3IgYW5kIGV4dGVyaW9yIHBhaW50aW5nIGluIGFkZGl0aW9uXG4gICAgICAgICAgICAgIHRvIHN0YWluaW5nIHRvIHBlcmZlY3RseSBzdWl0IHlvdXIgaG9tZVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5zZWVNb3JlfT5TZWUgTW9yZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmVzSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5vZmZlcnNJbWFnZTF9XG4gICAgICAgICAgICAgIHNyYz17cmVzaWRlbnRpYWxEZWZhdWx0fVxuICAgICAgICAgICAgICBhbHQ9XCJyZXNpZGVuY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb21tZXJjaWFsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29tSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5vZmZlckltYWdlMn1cbiAgICAgICAgICAgICAgc3JjPXtjb21tZXJjaWFsRGVmYXVsdH1cbiAgICAgICAgICAgICAgYWx0PVwiZ2FzIHN0YXRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb21Db250ZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb21UaXRsZUJveH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdhcmVob3VzZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5jb21UaXRsZX0+Q29tbWVyY2lhbDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5jb21UZXh0fT5cbiAgICAgICAgICAgICAgT3VyIHZldGVyYW4gbGV2ZWwgZXhwZXJpZW5jZSB3aXRoIGNvbW1lcmNpYWwgcHJvamVjdHMgd2lsbCBkZWxpdmVyXG4gICAgICAgICAgICAgIHRoZSByZXN1bHRzIHlvdSBkZXNlcnZlXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnNlZU1vcmV9PlNlZSBNb3JlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/RRandallLogo.png */ \"./images/RRandallLogo.png\");\n/* harmony import */ var _images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/phoneCircleIcon.png */ \"./images/phoneCircleIcon.png\");\n/* harmony import */ var _images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/mail_icon.png */ \"./images/mail_icon.png\");\n/* harmony import */ var _images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/Navbar.module.scss */ \"./sass/Navbar.module.scss\");\n/* harmony import */ var _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/components/Navbar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(\"div\", {\n    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.navbarContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logoContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.navLogo,\n    src: _images_RRandallLogo_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    alt: \"business logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icons,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mailIcon,\n    src: _images_mail_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"mail icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    className: _sass_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.phoneIcon,\n    src: _images_phoneCircleIcon_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"phone icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  })));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbInN0eWxlcyIsIm5hdmJhckNvbnRhaW5lciIsImxvZ29Db250YWluZXIiLCJuYXZMb2dvIiwibG9nbyIsImljb25zIiwibWFpbEljb24iLCJwaG9uZUljb24iLCJjYWxsSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSwyRUFBWTtBQUN6QixTQUNFO0FBQUssYUFBUyxFQUFFQSwrREFBTSxDQUFDQyxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELCtEQUFNLENBQUNFLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsK0RBQU0sQ0FBQ0csT0FBdkI7QUFBZ0MsT0FBRyxFQUFFQywrREFBckM7QUFBMkMsT0FBRyxFQUFDLGVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUwsK0RBQU0sQ0FBQ00sUUFBdkI7QUFBaUMsT0FBRyxFQUFFQSw0REFBdEM7QUFBZ0QsT0FBRyxFQUFDLFdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFTiwrREFBTSxDQUFDTyxTQUF2QjtBQUFrQyxPQUFHLEVBQUVDLGtFQUF2QztBQUFpRCxPQUFHLEVBQUMsWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBSkYsQ0FERjtBQVdELEMiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWFnZXMvUlJhbmRhbGxMb2dvLnBuZ1wiO1xuaW1wb3J0IGNhbGxJY29uIGZyb20gXCIuLi9pbWFnZXMvcGhvbmVDaXJjbGVJY29uLnBuZ1wiO1xuaW1wb3J0IG1haWxJY29uIGZyb20gXCIuLi9pbWFnZXMvbWFpbF9pY29uLnBuZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc2Fzcy9OYXZiYXIubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubmF2TG9nb30gc3JjPXtsb2dvfSBhbHQ9XCJidXNpbmVzcyBsb2dvXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubWFpbEljb259IHNyYz17bWFpbEljb259IGFsdD1cIm1haWwgaWNvblwiIC8+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucGhvbmVJY29ufSBzcmM9e2NhbGxJY29ufSBhbHQ9XCJwaG9uZSBpY29uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./images/RRandallLogo.png":
/*!*********************************!*\
  !*** ./images/RRandallLogo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/RRandallLogo-769210921499105609a0ab83d569c4ad.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMvUlJhbmRhbGxMb2dvLnBuZz9iYmNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vaW1hZ2VzL1JSYW5kYWxsTG9nby5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvUlJhbmRhbGxMb2dvLTc2OTIxMDkyMTQ5OTEwNTYwOWEwYWI4M2Q1NjljNGFkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/RRandallLogo.png\n");

/***/ }),

/***/ "./images/commercialWork.jpg":
/*!***********************************!*\
  !*** ./images/commercialWork.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/commercialWork-a140b98176c2378901e71763fa6674d1.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMvY29tbWVyY2lhbFdvcmsuanBnP2QyZTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9pbWFnZXMvY29tbWVyY2lhbFdvcmsuanBnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbW1lcmNpYWxXb3JrLWExNDBiOTgxNzZjMjM3ODkwMWU3MTc2M2ZhNjY3NGQxLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/commercialWork.jpg\n");

/***/ }),

/***/ "./images/kitchen1.png":
/*!*****************************!*\
  !*** ./images/kitchen1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/kitchen1-4e2deefc39e506937a9757588c7d7632.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMva2l0Y2hlbjEucG5nPzBhMTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9pbWFnZXMva2l0Y2hlbjEucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2tpdGNoZW4xLTRlMmRlZWZjMzllNTA2OTM3YTk3NTc1ODhjN2Q3NjMyLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/kitchen1.png\n");

/***/ }),

/***/ "./images/mail_icon.png":
/*!******************************!*\
  !*** ./images/mail_icon.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/mail_icon-6c9c07bdd0c542fa6cc86ec80f2d6389.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMvbWFpbF9pY29uLnBuZz8wYjUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vaW1hZ2VzL21haWxfaWNvbi5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWFpbF9pY29uLTZjOWMwN2JkZDBjNTQyZmE2Y2M4NmVjODBmMmQ2Mzg5LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/mail_icon.png\n");

/***/ }),

/***/ "./images/phoneCircleIcon.png":
/*!************************************!*\
  !*** ./images/phoneCircleIcon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/phoneCircleIcon-40c970d247110978a2a0752198033e16.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGhvbmVDaXJjbGVJY29uLnBuZz9iMDU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vaW1hZ2VzL3Bob25lQ2lyY2xlSWNvbi5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvbmVDaXJjbGVJY29uLTQwYzk3MGQyNDcxMTA5NzhhMmEwNzUyMTk4MDMzZTE2LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/phoneCircleIcon.png\n");

/***/ }),

/***/ "./images/residentialDefault.jpg":
/*!***************************************!*\
  !*** ./images/residentialDefault.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/residentialDefault-08cb7885150177344299c50383ca52cc.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMvcmVzaWRlbnRpYWxEZWZhdWx0LmpwZz9hZmFlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vaW1hZ2VzL3Jlc2lkZW50aWFsRGVmYXVsdC5qcGcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcmVzaWRlbnRpYWxEZWZhdWx0LTA4Y2I3ODg1MTUwMTc3MzQ0Mjk5YzUwMzgzY2E1MmNjLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/residentialDefault.jpg\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Jumbo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Jumbo */ \"./components/Jumbo.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.js\");\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Index = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}, \"R.Randall Painting Contractors\"), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"initial-scale=1.0, width=device-width\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}), __jsx(\"link\", {\n  rel: \"stylesheet\",\n  href: \"https://use.fontawesome.com/releases/v5.14.0/css/all.css\",\n  integrity: \"sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc\",\n  crossorigin: \"anonymous\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 7\n  }\n})), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }\n}), __jsx(_components_Jumbo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }\n}), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBRyxNQUNaLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0U7QUFDRSxLQUFHLEVBQUMsWUFETjtBQUVFLE1BQUksRUFBQywwREFGUDtBQUdFLFdBQVMsRUFBQyx5RUFIWjtBQUlFLGFBQVcsRUFBQyxXQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixDQURGLEVBV0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWEYsRUFZRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFaRixFQWFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWJGLENBREY7O0FBa0JlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBKdW1ibyBmcm9tIFwiLi4vY29tcG9uZW50cy9KdW1ib1wiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiO1xuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Ui5SYW5kYWxsIFBhaW50aW5nIENvbnRyYWN0b3JzPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE0LjAvY3NzL2FsbC5jc3NcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSHpMZUJ1aG9OUHZTbDVLWW5qeDBCVCtXQjBRRUVxTHByTytOQmtrazVnYmM2N0ZUYUw3WElHYTJ3MUwwWGJnY1wiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXZiYXIgLz5cbiAgICA8SnVtYm8gLz5cbiAgICA8TWFpbiAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sass/Jumbo.module.scss":
/*!********************************!*\
  !*** ./sass/Jumbo.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"jumboTron\": \"Jumbo_jumboTron__38AVA\",\n\t\"heroImage\": \"Jumbo_heroImage__2Nu90\",\n\t\"jumboText\": \"Jumbo_jumboText__1iYVp\",\n\t\"ctaBtn\": \"Jumbo_ctaBtn__1sEWM\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL0p1bWJvLm1vZHVsZS5zY3NzPzBlZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zYXNzL0p1bWJvLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwianVtYm9Ucm9uXCI6IFwiSnVtYm9fanVtYm9Ucm9uX18zOEFWQVwiLFxuXHRcImhlcm9JbWFnZVwiOiBcIkp1bWJvX2hlcm9JbWFnZV9fMk51OTBcIixcblx0XCJqdW1ib1RleHRcIjogXCJKdW1ib19qdW1ib1RleHRfXzFpWVZwXCIsXG5cdFwiY3RhQnRuXCI6IFwiSnVtYm9fY3RhQnRuX18xc0VXTVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sass/Jumbo.module.scss\n");

/***/ }),

/***/ "./sass/Main.module.scss":
/*!*******************************!*\
  !*** ./sass/Main.module.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"about\": \"Main_about__ZwI21\",\n\t\"aboutTitle\": \"Main_aboutTitle__3SeGq\",\n\t\"line\": \"Main_line__LZKow\",\n\t\"offersSection\": \"Main_offersSection__1mzxH\",\n\t\"residential\": \"Main_residential__3qxRc\",\n\t\"commercial\": \"Main_commercial__1WAN5\",\n\t\"resContent\": \"Main_resContent__2tPu1\",\n\t\"resText\": \"Main_resText__PXLFA\",\n\t\"resImgContainer\": \"Main_resImgContainer__3uxeJ\",\n\t\"resTitleBox\": \"Main_resTitleBox__3fS7l\",\n\t\"comImgContainer\": \"Main_comImgContainer__2GkOj\",\n\t\"comContent\": \"Main_comContent__2sYek\",\n\t\"comTitleBox\": \"Main_comTitleBox__ytB5x\",\n\t\"comTitle\": \"Main_comTitle__33rOj\",\n\t\"comText\": \"Main_comText__1GPWz\",\n\t\"seeMore\": \"Main_seeMore__NCQw-\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL01haW4ubW9kdWxlLnNjc3M/NzJkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3Nhc3MvTWFpbi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFib3V0XCI6IFwiTWFpbl9hYm91dF9fWndJMjFcIixcblx0XCJhYm91dFRpdGxlXCI6IFwiTWFpbl9hYm91dFRpdGxlX18zU2VHcVwiLFxuXHRcImxpbmVcIjogXCJNYWluX2xpbmVfX0xaS293XCIsXG5cdFwib2ZmZXJzU2VjdGlvblwiOiBcIk1haW5fb2ZmZXJzU2VjdGlvbl9fMW16eEhcIixcblx0XCJyZXNpZGVudGlhbFwiOiBcIk1haW5fcmVzaWRlbnRpYWxfXzNxeFJjXCIsXG5cdFwiY29tbWVyY2lhbFwiOiBcIk1haW5fY29tbWVyY2lhbF9fMVdBTjVcIixcblx0XCJyZXNDb250ZW50XCI6IFwiTWFpbl9yZXNDb250ZW50X18ydFB1MVwiLFxuXHRcInJlc1RleHRcIjogXCJNYWluX3Jlc1RleHRfX1BYTEZBXCIsXG5cdFwicmVzSW1nQ29udGFpbmVyXCI6IFwiTWFpbl9yZXNJbWdDb250YWluZXJfXzN1eGVKXCIsXG5cdFwicmVzVGl0bGVCb3hcIjogXCJNYWluX3Jlc1RpdGxlQm94X18zZlM3bFwiLFxuXHRcImNvbUltZ0NvbnRhaW5lclwiOiBcIk1haW5fY29tSW1nQ29udGFpbmVyX18yR2tPalwiLFxuXHRcImNvbUNvbnRlbnRcIjogXCJNYWluX2NvbUNvbnRlbnRfXzJzWWVrXCIsXG5cdFwiY29tVGl0bGVCb3hcIjogXCJNYWluX2NvbVRpdGxlQm94X195dEI1eFwiLFxuXHRcImNvbVRpdGxlXCI6IFwiTWFpbl9jb21UaXRsZV9fMzNyT2pcIixcblx0XCJjb21UZXh0XCI6IFwiTWFpbl9jb21UZXh0X18xR1BXelwiLFxuXHRcInNlZU1vcmVcIjogXCJNYWluX3NlZU1vcmVfX05DUXctXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sass/Main.module.scss\n");

/***/ }),

/***/ "./sass/Navbar.module.scss":
/*!*********************************!*\
  !*** ./sass/Navbar.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"navbarContainer\": \"Navbar_navbarContainer__3LKHC\",\n\t\"logoContainer\": \"Navbar_logoContainer__1HpGN\",\n\t\"navLogo\": \"Navbar_navLogo__3iOok\",\n\t\"icons\": \"Navbar_icons__4LBoS\",\n\t\"mailIcon\": \"Navbar_mailIcon__bpLwx\",\n\t\"phoneIcon\": \"Navbar_phoneIcon__2yoM8\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL05hdmJhci5tb2R1bGUuc2Nzcz82OTk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3Nhc3MvTmF2YmFyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2YmFyQ29udGFpbmVyXCI6IFwiTmF2YmFyX25hdmJhckNvbnRhaW5lcl9fM0xLSENcIixcblx0XCJsb2dvQ29udGFpbmVyXCI6IFwiTmF2YmFyX2xvZ29Db250YWluZXJfXzFIcEdOXCIsXG5cdFwibmF2TG9nb1wiOiBcIk5hdmJhcl9uYXZMb2dvX18zaU9va1wiLFxuXHRcImljb25zXCI6IFwiTmF2YmFyX2ljb25zX180TEJvU1wiLFxuXHRcIm1haWxJY29uXCI6IFwiTmF2YmFyX21haWxJY29uX19icEx3eFwiLFxuXHRcInBob25lSWNvblwiOiBcIk5hdmJhcl9waG9uZUljb25fXzJ5b004XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sass/Navbar.module.scss\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });