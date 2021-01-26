/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/pages/Home.js */ \"./src/views/pages/Home.js\");\n/* harmony import */ var _views_components_Footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/components/Footer.js */ \"./src/views/components/Footer.js\");\n/* harmony import */ var _views_components_Nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/components/Nav.js */ \"./src/views/components/Nav.js\");\n/* harmony import */ var _views_pages_Dash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/Dash.js */ \"./src/views/pages/Dash.js\");\n/* harmony import */ var _views_pages_Login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/pages/Login.js */ \"./src/views/pages/Login.js\");\n/* harmony import */ var _views_pages_SignUp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/pages/SignUp.js */ \"./src/views/pages/SignUp.js\");\n/* harmony import */ var _views_pages_Error404_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/pages/Error404.js */ \"./src/views/pages/Error404.js\");\n/* harmony import */ var _service_Utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/Utils.js */ \"./src/service/Utils.js\");\n/* harmony import */ var _service_baseURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/baseURL.js */ \"./src/service/baseURL.js\");\n/**\n * \n * by Raul Castro\n */\n\n\n\n\n\n\n\n\n\n\n\nconst header =  false || document.getElementById('header');\nconst content =  false || document.getElementById('container');\nconst footer =  false || document.getElementById('footer'); //header.innerHTML= await Nav.render();\n//content.innerHTML=Home.render();\n//footer.innerHTML=  await Footer.render();\n\n/**\n * rotas\n */\n\nlet routes = {\n  '/': _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  '/signup': _views_pages_SignUp_js__WEBPACK_IMPORTED_MODULE_5__.default,\n  '/login': _views_pages_Login_js__WEBPACK_IMPORTED_MODULE_4__.default,\n  '/dashboard': _views_pages_Dash_js__WEBPACK_IMPORTED_MODULE_3__.default\n}; // Código do roteador. Pegar a URL e verificar na nossa lista de routes e renderizar \n\nconst router = async () => {\n  header.innerHTML = await _views_components_Nav_js__WEBPACK_IMPORTED_MODULE_2__.default.render();\n  await _views_components_Nav_js__WEBPACK_IMPORTED_MODULE_2__.default.after_render();\n  footer.innerHTML = await _views_components_Footer_js__WEBPACK_IMPORTED_MODULE_1__.default.render();\n  await _views_components_Footer_js__WEBPACK_IMPORTED_MODULE_1__.default.after_render();\n  let request = await _service_Utils_js__WEBPACK_IMPORTED_MODULE_7__.default.parseRequestURL();\n  let parseURL = (request.resource ? '/' + request.resource : '/') + (request.verb ? '/' + request.verb : '');\n  let page = routes[parseURL] ? routes[parseURL] : _views_pages_Error404_js__WEBPACK_IMPORTED_MODULE_6__.default;\n  content.innerHTML = await page.render();\n  await page.after_render();\n}; //Observar as mudanças na URL\n\n\nwindow.addEventListener('hashchange', router); //carreganento da página\n\nconsole.log(router());\nwindow.addEventListener('load', router());\n\n//# sourceURL=webpack://gama-accenture/./src/app.js?");

/***/ }),

/***/ "./src/service/Utils.js":
/*!******************************!*\
  !*** ./src/service/Utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Utils = {\n  //parser URL\n  parseRequestURL: async () => {\n    let url = location.hash.slice(1).toLocaleLowerCase() || '/';\n    let r = url.split('/');\n    let request = {\n      request: null,\n      id: null,\n      verb: null\n    };\n    request.resource = r[1];\n    request.id = r[2];\n    request.verb = r[3];\n    return request;\n  },\n  // Implementação de sleep\n  sleep: ms => {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);\n\n//# sourceURL=webpack://gama-accenture/./src/service/Utils.js?");

/***/ }),

/***/ "./src/service/baseURL.js":
/*!********************************!*\
  !*** ./src/service/baseURL.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nconst baseURL = 'https://accenture-java-desafio.herokuapp.com/';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseURL);\n\n//# sourceURL=webpack://gama-accenture/./src/service/baseURL.js?");

/***/ }),

/***/ "./src/service/isAuth.js":
/*!*******************************!*\
  !*** ./src/service/isAuth.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet isAuthenticated = async (token, redirect) => {\n  if (token) {\n    window.location.replace(`#/${redirect}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAuthenticated);\n\n//# sourceURL=webpack://gama-accenture/./src/service/isAuth.js?");

/***/ }),

/***/ "./src/views/components/Footer.js":
/*!****************************************!*\
  !*** ./src/views/components/Footer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet Footer = {\n  render: async () => {\n    let view = `\n        <footer class=\"footer\">\n        <div class=\"container \">\n          <span class=\"text-muted \">by Raul Castro</span>\n        </div>\n      </footer>\n        `;\n    return view;\n  },\n  after_render: async () => {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://gama-accenture/./src/views/components/Footer.js?");

/***/ }),

/***/ "./src/views/components/Nav.js":
/*!*************************************!*\
  !*** ./src/views/components/Nav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _service_isAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/isAuth.js */ \"./src/service/isAuth.js\");\n\nlet Nav = {\n  render: async () => {\n    let view = `\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/#/login\">Login</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/#/signup\">Sign Up!</a>\n            </li>\n\n           \n                \n            <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/#/dashboard\">Dashboard</a>\n            \n          </li>\n        \n          <button class=\"btn btn-outline-light\" id=\"destroy_session\">Desconectar</button>\n          \n          </ul>\n        </div>\n      </nav>\n        `;\n    return view;\n  },\n  after_render: async () => {\n    document.getElementById('destroy_session').addEventListener('click', function () {\n      localStorage.clear();\n      window.location.replace('#/login');\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n//# sourceURL=webpack://gama-accenture/./src/views/components/Nav.js?");

/***/ }),

/***/ "./src/views/pages/Dash.js":
/*!*********************************!*\
  !*** ./src/views/pages/Dash.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _service_isAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/isAuth.js */ \"./src/service/isAuth.js\");\n\nlet Dash = {\n  render: async () => {\n    let userData = JSON.parse(localStorage.getItem('userDataAccount'));\n    const {\n      usuario,\n      conta\n    } = userData;\n    let IsAuth = await (0,_service_isAuth_js__WEBPACK_IMPORTED_MODULE_0__.default)(!localStorage.getItem('@token'), 'login');\n    let view = `\n            <div>\n                <h1>View de nossa DASH</h1>\n                <h3>Olá, ${usuario.nome}</h3>\n                <p>${conta.saldo.toLocaleString('pt-br', {\n      style: 'currency',\n      currency: 'BRL'\n    })}</p>\n            </div>\n        `;\n    return view;\n  },\n  after_render: async () => {\n    console.log();\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dash);\n\n//# sourceURL=webpack://gama-accenture/./src/views/pages/Dash.js?");

/***/ }),

/***/ "./src/views/pages/Error404.js":
/*!*************************************!*\
  !*** ./src/views/pages/Error404.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet Error404 = {\n  render: async () => {\n    let view = `\n            <div>\n                <h1>rolou um '404' aqui...</h1>\n            </div>\n        `;\n    return view;\n  },\n  after_render: async () => {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://gama-accenture/./src/views/pages/Error404.js?");

/***/ }),

/***/ "./src/views/pages/Home.js":
/*!*********************************!*\
  !*** ./src/views/pages/Home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet Home = {\n  render: async () => {\n    let view = `\n        \n        <div class=\"row justify-content-center mt-5\">\n            <div class=\"col-4 \">\n                <img src=\"https://pbs.twimg.com/profile_banners/32018803/1502307622/1500x500\" class=\"img rounded img-responsive\" width=100% />\n            </div>\n            <div class=\"col-4\">\n            <p class=\"lead text-justify\">Olá, essa é a nossa plataforma, somos especialistas em resolver problemas que você não tinha antes de nos conhecer.</p>\n            </div>\n        </div>\n        `;\n    return view;\n  },\n  after_render: async () => {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://gama-accenture/./src/views/pages/Home.js?");

/***/ }),

/***/ "./src/views/pages/Login.js":
/*!**********************************!*\
  !*** ./src/views/pages/Login.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _service_baseURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/baseURL.js */ \"./src/service/baseURL.js\");\n\nlet Login = {\n  render: async () => {\n    let view = `\n        <div class=\"row justify-content-center mt-5\">\n        <div class=\"col-5 \">\n            <img src=\"https://pbs.twimg.com/profile_banners/32018803/1502307622/1500x500\" class=\"img rounded img-responsive\" width=100% height=300px />\n      \n            <p class=\"lead text-justify\">Olá, essa é a nossa plataforma, somos especialistas em resolver problemas que você não tinha antes de nos conhecer.</p>\n      \n            </div>\n      \n\n        <div class=\"col-5 \">\n        \n\n        <p class=\"lead mt-2\">Faça o seu login</p>\n\n        <form class=\"mt-5 \">\n        \n        <input type=\"text\" id=\"username\" placeholder=\"USERNAME\" class=\"form-control mt-3\"/>\n        <input type=\"password\" id=\"password\" placeholder=\"password\" class=\"form-control mt-1\" />\n\n        <button class=\"btn btn-outline-dark form-control mt-5\" type-\"button\" id=\"login_start\"><b>Fazer login</b></button>\n        </for>\n    \n    </div>\n        `;\n    return view;\n  },\n  after_render: async () => {\n    document.getElementById('login_start').addEventListener('click', () => {\n      let nameUser = document.getElementById('username').value,\n          userPass = document.getElementById('password').value;\n\n      if (nameUser.length >= 4 && userPass.length >= 4) {\n        axios.post(`${_service_baseURL_js__WEBPACK_IMPORTED_MODULE_0__.default}login`, {\n          usuario: nameUser,\n          senha: userPass\n        }, {\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        }).then(res => {\n          if (res.status === 200) {\n            console.log(res.data);\n            window.location.replace('#/dashboard');\n            localStorage.setItem('@token', res.data.token); //sessionStorage.setItem('@token', res.data.token)\n            // Cookies.set('@token', res.data.token, {expires: 1})\n\n            localStorage.setItem('userDataAccount', JSON.stringify(res.data));\n            window.location.replace('#/dashboard');\n          }\n        });\n      }\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://gama-accenture/./src/views/pages/Login.js?");

/***/ }),

/***/ "./src/views/pages/SignUp.js":
/*!***********************************!*\
  !*** ./src/views/pages/SignUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _service_baseURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/baseURL.js */ \"./src/service/baseURL.js\");\n\n\ndocument.postRegisterNewUser = async () => {\n  const options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringfy(RegisterData)\n  };\n\n  try {\n    const RegisterData = {\n      cpf: document.getElementById('cpf').value,\n      name: document.getElementById('username').value,\n      email: document.getElementById('email').value,\n      password: document.getElementById('password').value\n    };\n    const response = await fetch(_service_baseURL_js__WEBPACK_IMPORTED_MODULE_0__.default, RegisterData, options);\n  } catch (err) {\n    console.log('Ocorreu um erro', err);\n  }\n};\n\nlet SignUp = {\n  render: async () => {\n    let view = `\n        <div class=\"row justify-content-center mt-5\">\n        <div class=\"col-5 \">\n            <img src=\"https://pbs.twimg.com/profile_banners/32018803/1502307622/1500x500\" class=\"img rounded img-responsive\" width=100% height=300px />\n      \n            <p class=\"lead text-justify\">Olá, essa é a nossa plataforma, somos especialistas em resolver problemas que você não tinha antes de nos conhecer.</p>\n      \n            </div>\n      \n\n        <div class=\"col-5 bg-secondary\">\n        \n\n        <p class=\"lead mt-2\">Cadastre-se</p>\n\n        <form class=\"mt-5 \">\n        <input type=\"text\" id=\"cpf\" placeholder=\"C.P.F\" class=\"form-control cpf-mask mt-1\" />\n        <input type=\"text\" id=\"username\" placeholder=\"USERNAME\" class=\"form-control mt-1\" />\n        <input type=\"text\" id=\"name\" placeholder=\"o seu nome\" class=\"form-control mt-1\" />\n        <input type=\"email\" id=\"email\" placeholder=\"EMAIL\" class=\"form-control mt-1\"/>\n        <input type=\"password\" id=\"password\" placeholder=\"password\" class=\"form-control mt-1\" />\n\n        <button class=\"btn btn-outline-light form-control mt-5\" id=\"submit_new_register\" type-\"button\"><b>Cadastrar</b></button>\n        </for>\n    \n    </div>\n        `;\n    return view;\n  },\n  after_render: async () => {\n    document.getElementById('submit_new_register').addEventListener('click', () => {\n      let cpfVal = document.getElementById('cpf').value;\n      let nameVal = document.getElementById('username').value;\n      let emailVal = document.getElementById('email').value;\n      let passwordVal = document.getElementById('password').value;\n      CPF = document.getElementById('cpf').value.replace(/[^\\d]/g, \"\");\n      console.log(CPF);\n\n      if (nameVal != '' && emailVal != '' && passwordVal != '') {\n        axios.post(`${_service_baseURL_js__WEBPACK_IMPORTED_MODULE_0__.default}usuarios`, {\n          cpf: CPF,\n          login: username,\n          passowrd: passwordVal,\n          name: nameVal\n        }, {\n          headers: {\n            'Content-Type': 'applications/json'\n          }\n        }).then(res => {\n          if (res.status === 200) {\n            window.location.replace('#/login');\n          }\n        });\n      } else {\n        alert('confira sua senha!');\n      }\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);\n\n//# sourceURL=webpack://gama-accenture/./src/views/pages/SignUp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;