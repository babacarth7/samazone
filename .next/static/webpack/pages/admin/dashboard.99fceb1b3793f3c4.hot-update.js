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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   options: function() { return /* binding */ options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/error */ \"./utils/error.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.Titlte, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nconst options = {\n    responsive: true,\n    plugins: {\n        legend: {\n            position: \"top\"\n        }\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"FETCH_REQUEST\":\n            return {\n                ...state,\n                loading: true,\n                error: \"\"\n            };\n        case \"FETCH_SUCCESS\":\n            return {\n                ...state,\n                loading: false,\n                summary: action.payload,\n                error: \"\"\n            };\n        case \"FETCH_FAIL\":\n            return {\n                ...state,\n                loading: false,\n                error: action.payload\n            };\n    }\n}\nfunction AdminDashboardScreen() {\n    _s();\n    const [{ loading, eroor, summary }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Admin Dashboard\"\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/samazone/pages/admin/dashboard.js\",\n        lineNumber: 51,\n        columnNumber: 10\n    }, this);\n}\n_s(AdminDashboardScreen, \"5wdJnJ5KTVtvwFASLAfH3UOZEe0=\");\n_c = AdminDashboardScreen;\nAdminDashboardScreen.auth = {\n    adminOnly: true\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminDashboardScreen);\nvar _c;\n$RefreshReg$(_c, \"AdminDashboardScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDUztBQVVwQjtBQUNrQztBQUNQO0FBQ0E7QUFFN0NJLDJDQUFPQSxDQUFDWSxRQUFRLENBQ2RYLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDRDQUFNQSxFQUNOQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBR0QsTUFBTU8sVUFBVTtJQUNyQkMsWUFBWTtJQUNaQyxTQUFTO1FBQ1BDLFFBQVE7WUFDTkMsVUFBVTtRQUNaO0lBQ0Y7QUFDRixFQUFFO0FBRUYsU0FBU0MsUUFBUUMsS0FBSyxFQUFFQyxNQUFNO0lBQzVCLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRUcsU0FBUztnQkFBTUMsT0FBTztZQUFFO1FBQzdDLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdKLEtBQUs7Z0JBQUVHLFNBQVM7Z0JBQU9FLFNBQVNKLE9BQU9LLE9BQU87Z0JBQUVGLE9BQU87WUFBRTtRQUN2RSxLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHSixLQUFLO2dCQUFFRyxTQUFTO2dCQUFPQyxPQUFPSCxPQUFPSyxPQUFPO1lBQUM7SUFDN0Q7QUFDRjtBQUVBLFNBQVNDOztJQUNQLE1BQU0sQ0FBQyxFQUFFSixPQUFPLEVBQUVLLEtBQUssRUFBRUgsT0FBTyxFQUFFLEVBQUVJLFNBQVMsR0FBR25CLGlEQUFVQSxDQUFDUyxTQUFTLENBRXBFO0lBQ0EscUJBQU8sOERBQUNSLDBEQUFNQTtRQUFDbUIsT0FBTTs7Ozs7O0FBQ3ZCO0dBTFNIO0tBQUFBO0FBT1RBLHFCQUFxQkksSUFBSSxHQUFHO0lBQUVDLFdBQVc7QUFBSztBQUM5QywrREFBZUwsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC5qcz9iOGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcblxuaW1wb3J0IHtcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIEJhckVsZW1lbnQsXG4gIFRpdGx0ZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxufSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IGdldEVycm9yIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Vycm9yXCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsdGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZFxuKTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIHBsdWdpbnM6IHtcbiAgICBsZWdlbmQ6IHtcbiAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB9LFxuICB9LFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdGRVRDSF9SRVFVRVNUJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogJyd9O1xuICAgIGNhc2UgJ0ZFVENIX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBzdW1tYXJ5OiBhY3Rpb24ucGF5bG9hZCwgZXJyb3I6ICcnfTtcbiAgICBjYXNlICdGRVRDSF9GQUlMJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gQWRtaW5EYXNoYm9hcmRTY3JlZW4oKSB7XG4gIGNvbnN0IFt7IGxvYWRpbmcsIGVyb29yLCBzdW1tYXJ5IH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIFxuICB9KVxuICByZXR1cm4gPExheW91dCB0aXRsZT1cIkFkbWluIERhc2hib2FyZFwiPjwvTGF5b3V0Pjtcbn1cblxuQWRtaW5EYXNoYm9hcmRTY3JlZW4uYXV0aCA9IHsgYWRtaW5Pbmx5OiB0cnVlIH07XG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZFNjcmVlbjtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkxpbmsiLCJCYXIiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwiVGl0bHRlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsIkxheW91dCIsImdldEVycm9yIiwicmVnaXN0ZXIiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdW1tYXJ5IiwicGF5bG9hZCIsIkFkbWluRGFzaGJvYXJkU2NyZWVuIiwiZXJvb3IiLCJkaXNwYXRjaCIsInRpdGxlIiwiYXV0aCIsImFkbWluT25seSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/dashboard.js\n"));

/***/ })

});