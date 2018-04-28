webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/@angular/router/esm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            })
        ], AppRoutingModule);
        return AppRoutingModule;
    }());
    exports.AppRoutingModule = AppRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<minart-sidebar></minart-sidebar>\n<h1>Hello from appcom</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./src/app/core/minart-context.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, minart_context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = /** @class */ (function () {
        function AppComponent(minartContext) {
            var s = minartContext.SecurityContext.CurrentUser;
            console.log('current user: ' + s);
        }
        AppComponent = __decorate([
            core_1.Component({
                selector: 'minart-root',
                template: __webpack_require__("./src/app/app.component.html"),
                styles: [__webpack_require__("./src/app/app.component.less")]
            }),
            __metadata("design:paramtypes", [minart_context_1.MinartContext])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js"), __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./src/app/app-routing.module.ts"), __webpack_require__("./src/app/app.component.ts"), __webpack_require__("./src/app/core/view/core-directives.module.ts"), __webpack_require__("./src/app/core/minart-core.module.ts"), __webpack_require__("./src/app/services/UserServices.ts"), __webpack_require__("./src/app/core/interface/iuser-service.ts"), __webpack_require__("./src/app/core/class/AppConfig.ts"), __webpack_require__("./node_modules/@angular/http/esm5/http.js"), __webpack_require__("./src/app/appclass/kido-configuration.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, platform_browser_1, core_1, app_routing_module_1, app_component_1, core_directives_module_1, minart_core_module_1, UserServices_1, iuser_service_1, AppConfig_1, http_1, kido_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var s = {
        loginUrl: '/login'
    };
    var conf = {
        loginServiceUrl: '/api/login'
    };
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core_1.NgModule({
                declarations: [
                    app_component_1.AppComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    http_1.HttpModule,
                    app_routing_module_1.AppRoutingModule,
                    core_directives_module_1.CoreDirectivesModule,
                    minart_core_module_1.MinartCoreModule.forRoot({
                        provide: iuser_service_1.IuserService,
                        useClass: UserServices_1.UserServices
                    }, {
                        provide: AppConfig_1.APP_CONFIG,
                        useValue: s
                    })
                ],
                providers: [
                    {
                        provide: kido_configuration_1.KIDO_CONFIG,
                        useValue: conf
                    },
                    UserServices_1.UserServices
                ],
                bootstrap: [app_component_1.AppComponent]
            })
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/appclass/kido-configuration.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KidoConfiguration = /** @class */ (function () {
        function KidoConfiguration() {
        }
        return KidoConfiguration;
    }());
    exports.KidoConfiguration = KidoConfiguration;
    exports.KIDO_CONFIG = new core_1.InjectionToken('kido.config');
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/class/AppConfig.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppConfig = /** @class */ (function () {
        function AppConfig() {
        }
        return AppConfig;
    }());
    exports.AppConfig = AppConfig;
    exports.APP_CONFIG = new core_1.InjectionToken('app.config');
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/class/device-info.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DeviceInfo = /** @class */ (function () {
        function DeviceInfo() {
        }
        Object.defineProperty(DeviceInfo, "CordovaVersion", {
            get: function () {
                return device ? device.cordova : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "IsCordovaAvailable", {
            get: function () {
                return device ? device.available : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "DeviceModel", {
            get: function () {
                return device ? device.model : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "Platform", {
            get: function () {
                return device ? device.platform : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "UUID", {
            get: function () {
                return device ? device.uuid : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "PlatformVersion", {
            get: function () {
                return device ? device.version : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "Manufacturer", {
            get: function () {
                return device ? device.manufacturer : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "IsVirtual", {
            get: function () {
                return device ? device.isVirtual : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "Serial", {
            get: function () {
                return device ? device.serial : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "IsAndroid", {
            get: function () {
                return this.Platform ? this.Platform.toLowerCase() === 'android' : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "IsIOS", {
            get: function () {
                return this.Platform ? this.Platform.toLowerCase() === 'ios' : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeviceInfo, "IsWindows", {
            get: function () {
                return this.Platform ? this.Platform.toLowerCase() === 'windows' : null;
            },
            enumerable: true,
            configurable: true
        });
        return DeviceInfo;
    }());
    exports.DeviceInfo = DeviceInfo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/class/setting-manager.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SettingManager = /** @class */ (function () {
        function SettingManager() {
            this._settings = {};
        }
        Object.defineProperty(SettingManager.prototype, "Loaders", {
            get: function () {
                return this._loader;
            },
            set: function (loaders) {
                this._loader = loaders;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingManager.prototype, "IsLoaded", {
            get: function () {
                return this._is_loaded;
            },
            enumerable: true,
            configurable: true
        });
        SettingManager.prototype.LoadSettings = function (loaders) {
            var promise = Promise.resolve({});
            var _loop_1 = function (i) {
                promise = promise.then(function (settings) {
                    // tslint:disable-next-line:prefer-const
                    var comSett = settings;
                    return loaders[i].LoadSettings().then(function (set) {
                        for (var key in set) {
                            if (set.hasOwnProperty(key)) {
                                comSett[key] = set[key];
                            }
                        }
                        return comSett;
                    });
                });
            };
            for (var i = 0; i < loaders.length; i++) {
                _loop_1(i);
            }
            return promise;
        };
        SettingManager.prototype.LoadDefaults = function () {
            return Promise.resolve({});
        };
        SettingManager.prototype.LoadConstants = function () {
            return Promise.resolve({
                nfc_read_mime: 'binary/rdt',
                nfc_share_mime: 'binary/dt',
                androidPackageName: 'com.minartco.mykondu',
                senderId: '457453131702'
            });
        };
        SettingManager.prototype.OnStartup = function (loaders) {
            var _this = this;
            var ldrs = loaders ? loaders : this._loader;
            this.LoadConstants()
                .then(function (settings) {
                return _this.LoadDefaults().then(function (set) {
                    for (var key in set) {
                        if (set.hasOwnProperty(key)) {
                            settings[key] = set[key];
                        }
                    }
                    return settings;
                });
            })
                .then(function (settings) {
                return _this.LoadSettings(ldrs).then(function (set) {
                    for (var key in set) {
                        if (set.hasOwnProperty(key)) {
                            settings[key] = set[key];
                        }
                    }
                    return settings;
                });
            })
                .then(function (sett) {
                _this._settings = sett;
                _this._is_loaded = true;
            });
        };
        SettingManager.prototype.IsAvailable = function () {
            var _this = this;
            if (this._is_loaded) {
                return Promise.resolve(true);
            }
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (_this._is_loaded) {
                        resolve(true);
                    }
                    else {
                        reject('Loading settings not loaded in 50s');
                    }
                }, 50000);
            });
        };
        SettingManager.prototype.Get = function (key) {
            return this._settings.hasOwnProperty(key) ? this._settings[key] : null;
        };
        return SettingManager;
    }());
    exports.SettingManager = SettingManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/class/utility.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utility = /** @class */ (function () {
        function Utility() {
        }
        Utility.FunctionSerialize = function (func) {
            return func.toString();
        };
        Utility.FunctionDeserialize = function (funStr) {
            var func = new Function('return ' + funStr)();
            return func;
        };
        return Utility;
    }());
    exports.Utility = Utility;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/interface/iuser-service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IuserService = /** @class */ (function () {
        function IuserService() {
        }
        return IuserService;
    }());
    exports.IuserService = IuserService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/managers/security-context.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/http/esm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SecurityContext = /** @class */ (function () {
        function SecurityContext(userService, _loginUrl) {
            this._loginUrl = _loginUrl;
            console.log(userService);
            this._userService = userService;
        }
        Object.defineProperty(SecurityContext.prototype, "AuthenticationRequestOptions", {
            get: function () {
                var headers = new http_1.Headers({
                    'Authorization': 'Bearer ' + this._token
                });
                return new http_1.RequestOptions({
                    headers: headers
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecurityContext.prototype, "CurrentUser", {
            /**
             * Current Login Identity
             */
            get: function () {
                return this._currentUser;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecurityContext.prototype, "RedirectUrl", {
            get: function () {
                return this._redirectUrl;
            },
            set: function (v) {
                this._redirectUrl = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecurityContext.prototype, "LoginUrl", {
            get: function () {
                return this._redirectUrl;
            },
            enumerable: true,
            configurable: true
        });
        SecurityContext.prototype.GetPermissionSet = function (user) {
            return null;
        };
        SecurityContext.prototype.HasPermission = function (permission, user) {
            return false;
        };
        SecurityContext.prototype.HasPermissions = function (permissions, user) {
            return null;
        };
        SecurityContext.prototype.GetRoleSet = function (user) {
            return null;
        };
        SecurityContext.prototype.HasRole = function (role, user) {
            return false;
        };
        SecurityContext.prototype.HasRoles = function (role, user) {
            return null;
        };
        SecurityContext.prototype.Login = function (username, password, extras) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, null];
                });
            });
        };
        SecurityContext.prototype.Logoff = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, null];
                });
            });
        };
        return SecurityContext;
    }());
    exports.SecurityContext = SecurityContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/minart-context.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./src/app/core/class/utility.ts"), __webpack_require__("./src/app/core/class/setting-manager.ts"), __webpack_require__("./src/app/core/class/device-info.ts"), __webpack_require__("./src/app/core/managers/security-context.ts"), __webpack_require__("./src/app/core/interface/iuser-service.ts"), __webpack_require__("./src/app/core/class/AppConfig.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, utility_1, setting_manager_1, device_info_1, security_context_1, iuser_service_1, AppConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MinartContext = /** @class */ (function () {
        function MinartContext(userService, config) {
            console.log('userService: ' + userService);
            console.log('config: ' + config);
            this._utility = new utility_1.Utility();
            this._settings = new setting_manager_1.SettingManager();
            this._deviceInfo = new device_info_1.DeviceInfo();
            this._securityContext = new security_context_1.SecurityContext(userService, config.loginUrl);
        }
        Object.defineProperty(MinartContext.prototype, "Utility", {
            get: function () {
                return this._utility;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MinartContext.prototype, "Configuration", {
            get: function () {
                return this._settings;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MinartContext.prototype, "DeviceInfo", {
            get: function () {
                return this._deviceInfo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MinartContext.prototype, "Dialoge", {
            get: function () {
                return this._dialoge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MinartContext.prototype, "SecurityContext", {
            get: function () {
                return this._securityContext;
            },
            enumerable: true,
            configurable: true
        });
        MinartContext.prototype.OnStartup = function (userServiceProvider) {
            // TODO: database settings loader
            this._settings.OnStartup(new Array());
        };
        MinartContext = __decorate([
            core_1.Injectable(),
            __param(1, core_1.Inject(AppConfig_1.APP_CONFIG)),
            __metadata("design:paramtypes", [iuser_service_1.IuserService,
                AppConfig_1.AppConfig])
        ], MinartContext);
        return MinartContext;
    }());
    exports.MinartContext = MinartContext;
    var SettingsLoader = /** @class */ (function () {
        function SettingsLoader() {
        }
        SettingsLoader.prototype.LoadSettings = function (context) {
            return null;
        };
        return SettingsLoader;
    }());
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/minart-core.module.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/@angular/common/esm5/common.js"), __webpack_require__("./src/app/core/minart-context.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, minart_context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MinartCoreModule = /** @class */ (function () {
        function MinartCoreModule() {
        }
        MinartCoreModule_1 = MinartCoreModule;
        MinartCoreModule.forRoot = function (userService, config) {
            return {
                ngModule: MinartCoreModule_1,
                providers: [userService, config, minart_context_1.MinartContext]
            };
        };
        MinartCoreModule = MinartCoreModule_1 = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule
                ],
                providers: [],
                exports: [],
                declarations: []
            })
        ], MinartCoreModule);
        return MinartCoreModule;
        var MinartCoreModule_1;
    }());
    exports.MinartCoreModule = MinartCoreModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/model/user-dto.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserDto = /** @class */ (function () {
        function UserDto() {
        }
        return UserDto;
    }());
    exports.UserDto = UserDto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/view/core-directives.module.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/@angular/common/esm5/common.js"), __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js"), __webpack_require__("./src/app/core/view/sidebar/sidebar.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, ngx_perfect_scrollbar_1, sidebar_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFUALT_PERFERCT_SCROLLBAR_CONFIG = {
        swipeEasing: true,
        suppressScrollX: true
    };
    var CoreDirectivesModule = /** @class */ (function () {
        function CoreDirectivesModule() {
        }
        CoreDirectivesModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule
                ],
                declarations: [sidebar_component_1.SidebarComponent],
                exports: [sidebar_component_1.SidebarComponent],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                        useValue: DEFUALT_PERFERCT_SCROLLBAR_CONFIG
                    }
                ]
            })
        ], CoreDirectivesModule);
        return CoreDirectivesModule;
    }());
    exports.CoreDirectivesModule = CoreDirectivesModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/view/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav #sidemenu id=\"sidemenu\">\n  <perfect-scrollbar>\n    <!-- Close Sidebar Button -->\n    <div id=\"dismiss\" (click)=\"dismiss()\">\n      <i class=\"glyphicon glyphicon-arrow-left\"></i>\n    </div>\n\n    <ng-content select=\"[app-sidebar-header]\"></ng-content>\n    <!-- Sidebar Header -->\n    <!-- <app-user-profile class=\"sidebar-header\">\n\n\n    </app-user-profile> -->\n\n    <!-- Sidbar Links -->\n    <ul class=\"list-unstyled components\">\n      <ng-container *ngFor=\"let item of MenuItems\">\n        <p *ngIf=\"item.type == 'header'\"> {{ item.display }}</p>\n        <li *ngIf=\"item.type == 'node'\" class=\"{{(item.state == 'active'? 'active ': ' ') + (item.cssClass? item.cssClass : '')}}\">\n          <a *ngIf=\"item.isLinkAbsolute\" href=\"{{item.link}}\">{{item.display}}</a>\n          <!-- Else it is route-->\n        </li>\n        <li *ngIf=\"item.type == 'seperator'\" class=\"seperator\"></li>\n        <li *ngIf=\"item.childs && item.childs.length > 0\">\n          <!-- <li> Link with dropdown items -->\n          <a data-toggle=\"collapse\" aria-expanded=\"false\" [attr.data-target]=\"'#' + item.id\">{{item.display}}</a>\n          <ul class=\"collapse list-unstyled\" id=\"{{item.id}}\">\n            <ng-container *ngFor=\"let citem of item.childs\">\n              <p *ngIf=\"citem.type == 'header'\"> {{ item.display }</p>\n              <li *ngIf=\"citem.type == 'node'\" class=\"{{(citem.state == 'active'? 'active ': ' ') + (item.cssClass? item.cssClass : '')}}\">\n                <a *ngIf=\"citem.isLinkAbsolute\" href=\"{{citem.link}}\">{{citem.display}}</a>\n                <!-- Else it is route-->\n              </li>\n              <li *ngIf=\"citem.type == 'seperator'\" class=\"seperator\"></li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ul>\n\n    <ng-content select=\"[app-sidebar-footer]\"></ng-content>\n  </perfect-scrollbar>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/view/sidebar/sidebar.component.less":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  color: #1a1a1a;\n}\n#sidemenu {\n  position: fixed;\n  top: 0;\n  left: -250px;\n  height: 100vh;\n  background: #1f1f1f;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n  width: 250px;\n  /* top layer */\n  z-index: 9999;\n  color: #fff;\n}\n#sidemenu.active {\n  left: 0;\n}\n#sidemenu .sidebar-header {\n  padding: 20px;\n  background: #111111;\n  display: block;\n}\n#sidemenu .list-unstyled {\n  list-style: none;\n}\n#sidemenu ul.components {\n  border-bottom: 1px solid #47748b;\n}\n#sidemenu ul p {\n  color: #fff;\n  padding: 10px;\n  font-size: 1.1em;\n  font-weight: 300;\n}\n#sidemenu ul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #111111;\n}\n#sidemenu ul li {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n#sidemenu ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n  color: #fff;\n}\n#sidemenu ul li a[data-toggle=\"collapse\"] {\n  position: relative;\n}\n#sidemenu ul li a[aria-expanded=\"false\"]::before,\n#sidemenu ul li a[aria-expanded=\"true\"]::before {\n  content: '\\e259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em;\n}\n#sidemenu ul li a:hover {\n  color: #111111;\n  background: #fff;\n}\n#sidemenu ul li::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 100%;\n  width: 3px;\n  background-color: #1f1f1f;\n  -webkit-transition: width 0.2s ease-in;\n  transition: width 0.2s ease-in;\n}\n#sidemenu ul li:first-child a {\n  background-color: #1a1a1a;\n}\n#sidemenu ul li:nth-child(2)::before {\n  background-color: #ec1b5a;\n}\n#sidemenu ul li:nth-child(3)::before {\n  background-color: #79aefe;\n}\n#sidemenu ul li:nth-child(4)::before {\n  background-color: #314190;\n}\n#sidemenu ul li:nth-child(5)::before {\n  background-color: #279636;\n}\n#sidemenu ul li:nth-child(6)::before {\n  background-color: #7d5d81;\n}\n#sidemenu ul li:nth-child(7)::before {\n  background-color: #ead24c;\n}\n#sidemenu ul li:nth-child(8)::before {\n  background-color: #2d2366;\n}\n#sidemenu ul li:nth-child(9)::before {\n  background-color: #35acdf;\n}\n#sidemenu ul li:hover::before,\n#sidemenu ul li.open:hover::before {\n  width: 100%;\n  -webkit-transition: width 0.2s ease-in;\n  transition: width 0.2s ease-in;\n}\n#sidemenu ul li a:hover,\n#sidemenu ul li.open a:hover,\n#sidemenu ul li a:active,\n#sidemenu ul li.open a:active,\n#sidemenu ul li a:focus,\n#sidemenu ul li.open a:focus {\n  text-decoration: none;\n  background: transparent !important;\n}\n#sidemenu ul li.active > a {\n  color: #fff;\n}\n#sidemenu ul li.active::before {\n  width: 100%;\n  -webkit-transition: width 0.2s ease-in;\n  transition: width 0.2s ease-in;\n}\n#sidemenu #dismiss {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  background: #4b4b4b;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  border-radius: 35px;\n  z-index: 9999;\n}\n"

/***/ }),

/***/ "./src/app/core/view/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SidebarComponent = /** @class */ (function () {
        function SidebarComponent() {
            this.dismissed = new core_1.EventEmitter();
        }
        Object.defineProperty(SidebarComponent.prototype, "MenuItems", {
            get: function () {
                return this.items;
            },
            enumerable: true,
            configurable: true
        });
        SidebarComponent.prototype.ngOnInit = function () {
        };
        SidebarComponent.prototype.toggleButton = function () {
            // open sidebar
            $(this._sidemenu.nativeElement).addClass('active');
            // fade in the overlay
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        };
        SidebarComponent.prototype.dismiss = function () {
            $(this._sidemenu.nativeElement).removeClass('active');
            this.dismissed.emit(true);
        };
        __decorate([
            core_1.ViewChild('sidemenu'),
            __metadata("design:type", core_1.ElementRef)
        ], SidebarComponent.prototype, "_sidemenu", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], SidebarComponent.prototype, "items", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], SidebarComponent.prototype, "dismissed", void 0);
        SidebarComponent = __decorate([
            core_1.Component({
                selector: 'minart-sidebar',
                template: __webpack_require__("./src/app/core/view/sidebar/sidebar.component.html"),
                styles: [__webpack_require__("./src/app/core/view/sidebar/sidebar.component.less")]
            }),
            __metadata("design:paramtypes", [])
        ], SidebarComponent);
        return SidebarComponent;
    }());
    exports.SidebarComponent = SidebarComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/services/UserServices.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/rxjs/_esm5/Observable.js"), __webpack_require__("./node_modules/@angular/http/esm5/http.js"), __webpack_require__("./src/app/core/model/user-dto.ts"), __webpack_require__("./src/app/appclass/kido-configuration.ts"), __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js"), __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js"), __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, Observable_1, http_1, user_dto_1, kido_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserServices = /** @class */ (function () {
        function UserServices(http, config) {
            this.http = http;
            this._loginServiceUrl = config.loginServiceUrl;
        }
        UserServices.prototype.Login = function (user) {
            var body = JSON.stringify(user_dto_1.UserDto);
            return this.http.post(this._loginServiceUrl, body)
                .map(function (response, index) {
                // login successful if there's a jwt token in the response
                var token = response.json() && response.json().token;
                if (token) {
                    return token;
                }
                return Observable_1.Observable.throw(response.status);
            });
        };
        UserServices.prototype.Logoff = function () {
            return Observable_1.Observable.create();
        };
        UserServices = __decorate([
            core_1.Injectable(),
            __param(1, core_1.Inject(kido_configuration_1.KIDO_CONFIG)),
            __metadata("design:paramtypes", [http_1.Http, kido_configuration_1.KidoConfiguration])
        ], UserServices);
        return UserServices;
    }());
    exports.UserServices = UserServices;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = {
        production: false
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js"), __webpack_require__("./src/app/app.module.ts"), __webpack_require__("./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, platform_browser_dynamic_1, app_module_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    // document.addEventListener('deviceready', () => {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, {}).catch(function (err) { return console.log(err); });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// }, false);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map