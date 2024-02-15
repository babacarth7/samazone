"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyApp(param) {\n    let { Component, pageProps: { session, ...pageProps } } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                adminOnly: Component.auth.adminOnly,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\nfunction Auth(param) {\n    let { children, adminOnly } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, this);\n    }\n    if (adminOnly && !session.user.isAdmin) {\n        router.push(\"/unauthorized?message= required\");\n    }\n    return children;\n}\n_s(Auth, \"AcfSbCCMmVUvkgAPB21j8pM8dvI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c1 = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c1, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUMrQjtBQUNuQjtBQUNIO0FBRXhDLFNBQVNJLE1BQU0sS0FBbUQ7UUFBbkQsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxXQUFXLEVBQUUsR0FBbkQ7SUFDYixxQkFDRSw4REFBQ04sNERBQWVBO1FBQUNPLFNBQVNBO2tCQUN4Qiw0RUFBQ0wsb0RBQWFBO3NCQUNYRyxVQUFVRyxJQUFJLGlCQUNiLDhEQUFDQztnQkFBS0MsV0FBV0wsVUFBVUcsSUFBSSxDQUFDRSxTQUFTOzBCQUN2Qyw0RUFBQ0w7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7OztxQ0FHMUIsOERBQUNEO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7S0FkU0Y7QUFnQlQsU0FBU0ssS0FBSyxLQUF1QjtRQUF2QixFQUFFRSxRQUFRLEVBQUVELFNBQVMsRUFBRSxHQUF2Qjs7SUFDWixNQUFNRSxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxNQUFNLEVBQUVDLE1BQU1QLE9BQU8sRUFBRSxHQUFHTiwyREFBVUEsQ0FBQztRQUMzQ2MsVUFBVTtRQUNWQztZQUNFSixPQUFPSyxJQUFJLENBQUM7UUFDZDtJQUNGO0lBQ0EsSUFBSUosV0FBVyxXQUFXO1FBQ3hCLHFCQUFPLDhEQUFDSztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJUixhQUFhLENBQUNILFFBQVFZLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ3RDUixPQUFPSyxJQUFJLENBQUM7SUFDZDtJQUVBLE9BQU9OO0FBQ1Q7R0FqQlNGOztRQUNRTixrREFBU0E7UUFDVUYsdURBQVVBOzs7TUFGckNRO0FBbUJULCtEQUFlTCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBTdG9yZVByb3ZpZGVyIGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8U3RvcmVQcm92aWRlcj5cbiAgICAgICAge0NvbXBvbmVudC5hdXRoID8gKFxuICAgICAgICAgIDxBdXRoIGFkbWluT25seT17Q29tcG9uZW50LmF1dGguYWRtaW5Pbmx5fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0F1dGg+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICApfVxuICAgICAgPC9TdG9yZVByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4sIGFkbWluT25seSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHN0YXR1cywgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbih7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZFwiKTtcbiAgICB9LFxuICB9KTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKGFkbWluT25seSAmJiAhc2Vzc2lvbi51c2VyLmlzQWRtaW4pIHtcbiAgICByb3V0ZXIucHVzaCgnL3VuYXV0aG9yaXplZD9tZXNzYWdlPSByZXF1aXJlZCcpXG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsInVzZVNlc3Npb24iLCJTdG9yZVByb3ZpZGVyIiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiYXV0aCIsIkF1dGgiLCJhZG1pbk9ubHkiLCJjaGlsZHJlbiIsInJvdXRlciIsInN0YXR1cyIsImRhdGEiLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwicHVzaCIsImRpdiIsInVzZXIiLCJpc0FkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});