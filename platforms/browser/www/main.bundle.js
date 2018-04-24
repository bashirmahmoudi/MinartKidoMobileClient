webpackJsonp(["main"],{

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

(void 0)(["@angular/core", "@angular/platform-browser-dynamic", "./app/app.module", "./environments/environment"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, app_module_1, environment_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }
        ],
        execute: function () {
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            document.addEventListener('deviceready', function () {
                platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, {
                    defaultEncapsulation: core_1.ViewEncapsulation.None
                }).catch(function (err) { return console.log(err); });
            }, false);
        }
    };
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map