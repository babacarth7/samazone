"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!@headlessui/react */ \"__barrel_optimize__?names=Menu!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown */ \"./components/dropdown.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    _s();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_6__.Store);\n    const { cart } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    const logoutClickHandler = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_9__[\"default\"].remove(\"cart\");\n        dispatch({\n            type: \"CART_RESET\"\n        });\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)({\n            callbackUrl: \"/login\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - App E-Commerce\" : \"App E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Application Web E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 items-center px-4 justify-between shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold\",\n                                    children: \"samazone\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/cart\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Button, {\n                                                    className: \"text-blue-500\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right bg-white  shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                    className: \"dropdown-link\",\n                                                                    href: \"/order-history\",\n                                                                    children: \"Order History\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                    lineNumber: 66,\n                                                                    columnNumber: 23\n                                                                }, this),\n                                                                session.user.isAdmin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                                    as: \"div\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                        className: \"dropdown-link\",\n                                                                        href: \"/admin/dashboard\",\n                                                                        children: \"Admin Dashboard\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                        lineNumber: 74,\n                                                                        columnNumber: 27\n                                                                    }, this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                    lineNumber: 73,\n                                                                    columnNumber: 25\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                className: \"dropdown-link\",\n                                                                href: \"#\",\n                                                                onClick: logoutClickHandler,\n                                                                children: \"Logout\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                                lineNumber: 84,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/login\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2024\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"VfgPqudABR9Yqe3CkFIdj7CuBlw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRDQUFTSCxXQUFVO3NEQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUTFELDhEQUFDWTt3QkFBS1osV0FBVTtrQ0FBOEJ4Qjs7Ozs7O2tDQUU5Qyw4REFBQ3FDO3dCQUFPYixXQUFVO2tDQUNoQiw0RUFBQ2M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQWxHU3hDOztRQUMyQkgsdURBQVVBOzs7S0FEckNHO0FBb0dULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vdXRpbHMvU3RvcmVcIjtcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgRHJvcERvd25MaW5rIGZyb20gXCIuL2Ryb3Bkb3duXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgc3RhdHVzLCBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcbiAgY29uc3QgeyBjYXJ0IH0gPSBzdGF0ZTtcbiAgY29uc3QgW2NhcnRJdGVtc0NvdW50LCBzZXRDYXJ0SXRlbXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENhcnRJdGVtc0NvdW50KGNhcnQuY2FydEl0ZW1zLnJlZHVjZSgoYSwgYykgPT4gYSArIGMucXVhbnRpdHksIDApKTtcbiAgfSwgW2NhcnQuY2FydEl0ZW1zXSk7XG5cbiAgY29uc3QgbG9nb3V0Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY2FydFwiKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ0FSVF9SRVNFVFwiIH0pO1xuICAgIHNpZ25PdXQoeyBjYWxsYmFja1VybDogXCIvbG9naW5cIiB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyB0aXRsZSArIFwiIC0gQXBwIEUtQ29tbWVyY2VcIiA6IFwiQXBwIEUtQ29tbWVyY2VcIn08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQXBwbGljYXRpb24gV2ViIEUtQ29tbWVyY2VcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCIgbGltaXQ9ezF9IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGgtMTIgaXRlbXMtY2VudGVyIHB4LTQganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICBzYW1hem9uZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB6LTEwXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgQ2FydFxuICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXNDb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCBweC0yIHB5LTEgdGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zQ291bnR9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiA/IChcbiAgICAgICAgICAgICAgICBcIkxvYWRpbmdcIlxuICAgICAgICAgICAgICApIDogc2Vzc2lvbj8udXNlciA/IChcbiAgICAgICAgICAgICAgICA8TWVudSBhcz1cImRpdlwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24udXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdy01NiBvcmlnaW4tdG9wLXJpZ2h0IGJnLXdoaXRlICBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5rIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpbmtcIiBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL29yZGVyLWhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyIEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLmlzQWRtaW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkbWluIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dvdXRDbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbS1hdXRvIG10LTQgcHgtNFwiPntjaGlsZHJlbn08L21haW4+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGgtMTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNoYWRvdy1pbm5lclwiPlxuICAgICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgMjAyNDwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiVG9hc3RDb250YWluZXIiLCJNZW51IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmUiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkRyb3BEb3duTGluayIsIkNvb2tpZXMiLCJMYXlvdXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwic3RhdHVzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2FydCIsImNhcnRJdGVtc0NvdW50Iiwic2V0Q2FydEl0ZW1zQ291bnQiLCJjYXJ0SXRlbXMiLCJyZWR1Y2UiLCJhIiwiYyIsInF1YW50aXR5IiwibG9nb3V0Q2xpY2tIYW5kbGVyIiwicmVtb3ZlIiwidHlwZSIsImNhbGxiYWNrVXJsIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicG9zaXRpb24iLCJsaW1pdCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsImhyZWYiLCJzcGFuIiwidXNlciIsImFzIiwiQnV0dG9uIiwiSXRlbXMiLCJJdGVtIiwiaXNBZG1pbiIsIm9uQ2xpY2siLCJtYWluIiwiZm9vdGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});