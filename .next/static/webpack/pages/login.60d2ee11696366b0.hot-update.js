"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!@headlessui/react */ \"__barrel_optimize__?names=Menu!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown */ \"./components/dropdown.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    _s();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_6__.Store);\n    const { cart } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    const logoutClickHandler = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_9__[\"default\"].remove(\"cart\");\n        dispatch({\n            type: \"CART_RESET\"\n        });\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)({\n            callbackUrl: \"/login\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - App E-Commerce\" : \"App E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Application Web E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 items-center px-4 justify-between shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold\",\n                                    children: \"samazone\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/cart\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Button, {\n                                                    className: \"text-blue-500\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right bg-white  shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                    className: \"dropdown-link\",\n                                                                    href: \"/order-history\",\n                                                                    children: \"Order History\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                    lineNumber: 66,\n                                                                    columnNumber: 23\n                                                                }, this),\n                                                                session.user\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                className: \"dropdown-link\",\n                                                                href: \"#\",\n                                                                onClick: logoutClickHandler,\n                                                                children: \"Logout\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                lineNumber: 76,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/login\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2024\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"VfgPqudABR9Yqe3CkFIdj7CuBlw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBMUZTdkM7O1FBQzJCSCx1REFBVUE7OztLQURyQ0c7QUE0RlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MjlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBEcm9wRG93bkxpbmsgZnJvbSBcIi4vZHJvcGRvd25cIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZnVuY3Rpb24gTGF5b3V0KHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xuICBjb25zdCB7IGNhcnQgfSA9IHN0YXRlO1xuICBjb25zdCBbY2FydEl0ZW1zQ291bnQsIHNldENhcnRJdGVtc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2FydEl0ZW1zQ291bnQoY2FydC5jYXJ0SXRlbXMucmVkdWNlKChhLCBjKSA9PiBhICsgYy5xdWFudGl0eSwgMCkpO1xuICB9LCBbY2FydC5jYXJ0SXRlbXNdKTtcblxuICBjb25zdCBsb2dvdXRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjYXJ0XCIpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJDQVJUX1JFU0VUXCIgfSk7XG4gICAgc2lnbk91dCh7IGNhbGxiYWNrVXJsOiBcIi9sb2dpblwiIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IHRpdGxlICsgXCIgLSBBcHAgRS1Db21tZXJjZVwiIDogXCJBcHAgRS1Db21tZXJjZVwifTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBcHBsaWNhdGlvbiBXZWIgRS1Db21tZXJjZVwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIiBsaW1pdD17MX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaC0xMiBpdGVtcy1jZW50ZXIgcHgtNCBqdXN0aWZ5LWJldHdlZW4gc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHNhbWF6b25lXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHotMTBcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICBDYXJ0XG4gICAgICAgICAgICAgICAge2NhcnRJdGVtc0NvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXNDb3VudH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHtzdGF0dXMgPT09IFwibG9hZGluZ1wiID8gKFxuICAgICAgICAgICAgICAgIFwiTG9hZGluZ1wiXG4gICAgICAgICAgICAgICkgOiBzZXNzaW9uPy51c2VyID8gKFxuICAgICAgICAgICAgICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LTU2IG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wRG93bkxpbmsgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlua1wiIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcERvd25MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3JkZXItaGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXIgSGlzdG9yeVxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcERvd25MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLnVzZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9nb3V0Q2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbXM+XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJwLTIgdGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG0tYXV0byBtdC00IHB4LTRcIj57Y2hpbGRyZW59PC9tYWluPlxuXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBoLTEwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzaGFkb3ctaW5uZXJcIj5cbiAgICAgICAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IDIwMjQ8L3A+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlRvYXN0Q29udGFpbmVyIiwiTWVudSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3JlIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJEcm9wRG93bkxpbmsiLCJDb29raWVzIiwiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInN0YXR1cyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdGUiLCJkaXNwYXRjaCIsImNhcnQiLCJjYXJ0SXRlbXNDb3VudCIsInNldENhcnRJdGVtc0NvdW50IiwiY2FydEl0ZW1zIiwicmVkdWNlIiwiYSIsImMiLCJxdWFudGl0eSIsImxvZ291dENsaWNrSGFuZGxlciIsInJlbW92ZSIsInR5cGUiLCJjYWxsYmFja1VybCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInBvc2l0aW9uIiwibGltaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJuYXYiLCJocmVmIiwic3BhbiIsInVzZXIiLCJhcyIsIkJ1dHRvbiIsIkl0ZW1zIiwiSXRlbSIsIm9uQ2xpY2siLCJtYWluIiwiZm9vdGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});