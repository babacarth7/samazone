"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/dashboard",{

/***/ "./pages/admin/dashboard.js":
/*!**********************************!*\
  !*** ./pages/admin/dashboard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   options: function() { return /* binding */ options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/error */ \"./utils/error.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.Titlte, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nconst options = {\n    responsive: true,\n    plugins: {\n        legend: {\n            position: \"top\"\n        }\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"FETCH_REQUEST\":\n            return {\n                ...state,\n                loading: true,\n                error: \"\"\n            };\n        case \"FETCH_SUCCESS\":\n            return {\n                ...state,\n                loading: false,\n                summary: action.payload,\n                error: \"\"\n            };\n        case \"FETCH_FAIL\":\n            return {\n                ...state,\n                loading: false,\n                error: action.payload\n            };\n    }\n}\nfunction AdminDashboardScreen() {\n    _s();\n    const [{ loading, eroor, summary }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Admin Dashboard\"\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/samazone/pages/admin/dashboard.js\",\n        lineNumber: 49,\n        columnNumber: 10\n    }, this);\n}\n_s(AdminDashboardScreen, \"XI0JT6aAEk+SVgpq20i+OdBJQOY=\");\n_c = AdminDashboardScreen;\nAdminDashboardScreen.auth = {\n    adminOnly: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminDashboardScreen);\nvar _c;\n$RefreshReg$(_c, \"AdminDashboardScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDUztBQVVwQjtBQUNrQztBQUNQO0FBQ0E7QUFFN0NJLDJDQUFPQSxDQUFDWSxRQUFRLENBQ2RYLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDRDQUFNQSxFQUNOQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBR0QsTUFBTU8sVUFBVTtJQUNyQkMsWUFBWTtJQUNaQyxTQUFTO1FBQ1BDLFFBQVE7WUFDTkMsVUFBVTtRQUNaO0lBQ0Y7QUFDRixFQUFFO0FBRUYsU0FBU0MsUUFBUUMsS0FBSyxFQUFFQyxNQUFNO0lBQzVCLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRUcsU0FBUztnQkFBTUMsT0FBTztZQUFFO1FBQzdDLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdKLEtBQUs7Z0JBQUVHLFNBQVM7Z0JBQU9FLFNBQVNKLE9BQU9LLE9BQU87Z0JBQUVGLE9BQU87WUFBRTtRQUN2RSxLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHSixLQUFLO2dCQUFFRyxTQUFTO2dCQUFPQyxPQUFPSCxPQUFPSyxPQUFPO1lBQUM7SUFDN0Q7QUFDRjtBQUVBLFNBQVNDOztJQUNQLE1BQU0sQ0FBQyxFQUFFSixPQUFPLEVBQUVLLEtBQUssRUFBRUgsT0FBTyxFQUFFLEVBQUVJLFNBQVMsR0FBR25CLGlEQUFVQTtJQUMxRCxxQkFBTyw4REFBQ0MsMERBQU1BO1FBQUNtQixPQUFNOzs7Ozs7QUFDdkI7R0FIU0g7S0FBQUE7QUFLVEEscUJBQXFCSSxJQUFJLEdBQUc7SUFBRUMsV0FBVztBQUFLO0FBQzlDLCtEQUFlTCxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZGFzaGJvYXJkLmpzP2I4YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuXG5pbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgQmFyRWxlbWVudCxcbiAgVGl0bHRlLFxuICBUb29sdGlwLFxuICBMZWdlbmQsXG59IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgZ2V0RXJyb3IgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZXJyb3JcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIEJhckVsZW1lbnQsXG4gIFRpdGx0ZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgcGx1Z2luczoge1xuICAgIGxlZ2VuZDoge1xuICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0ZFVENIX1JFUVVFU1QnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiAnJ307XG4gICAgY2FzZSAnRkVUQ0hfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHN1bW1hcnk6IGFjdGlvbi5wYXlsb2FkLCBlcnJvcjogJyd9O1xuICAgIGNhc2UgJ0ZFVENIX0ZBSUwnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBZG1pbkRhc2hib2FyZFNjcmVlbigpIHtcbiAgY29uc3QgW3sgbG9hZGluZywgZXJvb3IsIHN1bW1hcnkgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcigpXG4gIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiQWRtaW4gRGFzaGJvYXJkXCI+PC9MYXlvdXQ+O1xufVxuXG5BZG1pbkRhc2hib2FyZFNjcmVlbi5hdXRoID0geyBhZG1pbk9ubHk6IHRydWUgfTtcbmV4cG9ydCBkZWZhdWx0IEFkbWluRGFzaGJvYXJkU2NyZWVuO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiTGluayIsIkJhciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsdGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwiTGF5b3V0IiwiZ2V0RXJyb3IiLCJyZWdpc3RlciIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImxvYWRpbmciLCJlcnJvciIsInN1bW1hcnkiLCJwYXlsb2FkIiwiQWRtaW5EYXNoYm9hcmRTY3JlZW4iLCJlcm9vciIsImRpc3BhdGNoIiwidGl0bGUiLCJhdXRoIiwiYWRtaW5Pbmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/dashboard.js\n"));

/***/ })

});