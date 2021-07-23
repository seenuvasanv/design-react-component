/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\n\nconst delay = ms => new Promise(resolve => setTimeout(resolve, ms));\n\nasync function handler(req, res) {\n  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./', 'db.json');\n\n  try {\n    const readFileData = await readFile(jsonFile);\n    await delay(1000);\n    const speakers = JSON.parse(readFileData).speakers;\n\n    if (!speakers) {\n      res.status(404).send('File not found on server');\n    } else {\n      res.setHeader('Content-Type', 'application/json');\n      res.status(200).send(JSON.stringify(speakers, null, 2));\n      console.log('GET /api/speakers status: 200');\n    }\n  } catch (e) {\n    console.log('Error ,', e);\n    res.status(404).send('File not found on server');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25pbmctcmVhY3QtY29tcG9uZW50cy1wbHVyYWxzaWdodC1jb3Vyc2UvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanM/NzliOSJdLCJuYW1lcyI6WyJwcm9taXNpZnkiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJmcyIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkZpbGUiLCJwYXRoIiwicmVhZEZpbGVEYXRhIiwic3BlYWtlcnMiLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJzZW5kIiwic2V0SGVhZGVyIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZ0JDLG1CQUFPLENBQUMsa0JBQUQsQ0FBN0I7O0FBRUEsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLG9EQUFELENBQTFCOztBQUNBLE1BQU1DLEtBQUssR0FBR0MsRUFBRSxJQUFJLElBQUlDLE9BQUosQ0FBWUMsT0FBTyxJQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFqQyxDQUFwQjs7QUFFZSxlQUFlSSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUMsUUFBTUMsUUFBUSxHQUFHQyxtREFBQSxDQUFhLElBQWIsRUFBbUIsU0FBbkIsQ0FBakI7O0FBQ0EsTUFBSTtBQUNBLFVBQU1DLFlBQVksR0FBRyxNQUFNWixRQUFRLENBQUNVLFFBQUQsQ0FBbkM7QUFDQSxVQUFNUixLQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTVcsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxFQUF5QkMsUUFBMUM7O0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDWEosU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsMEJBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hSLFNBQUcsQ0FBQ1MsU0FBSixDQUFjLGNBQWQsRUFBOEIsa0JBQTlCO0FBQ0FULFNBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxJQUFJLENBQUNLLFNBQUwsQ0FBZU4sUUFBZixFQUF5QixJQUF6QixFQUErQixDQUEvQixDQUFyQjtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWjtBQUNIO0FBQ0osR0FYRCxDQVdFLE9BQU9DLENBQVAsRUFBVTtBQUNSRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCQyxDQUF2QjtBQUNBYixPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQiwwQkFBckI7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoJ3V0aWwnKVxuXG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSlcbmNvbnN0IGRlbGF5ID0gbXMgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKCcuLycsICdkYi5qc29uJylcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSlcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMClcbiAgICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnNcbiAgICAgICAgaWYgKCFzcGVha2Vycykge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ0ZpbGUgbm90IGZvdW5kIG9uIHNlcnZlcicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShzcGVha2VycywgbnVsbCwgMikpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR0VUIC9hcGkvc3BlYWtlcnMgc3RhdHVzOiAyMDAnKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgLCcsIGUpXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdGaWxlIG5vdCBmb3VuZCBvbiBzZXJ2ZXInKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/speakers/index.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();