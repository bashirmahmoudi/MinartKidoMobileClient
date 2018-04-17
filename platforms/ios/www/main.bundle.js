webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_guard_guard_1 = __webpack_require__("./src/app/security/auth-guard.guard.ts");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var login_component_1 = __webpack_require__("./src/app/security/login.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/home/dashboard.component.ts");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_guard_1.AuthGuardGuard] },
    { path: 'login', component: login_component_1.LoginComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [auth_guard_guard_1.AuthGuardGuard, auth_service_1.AuthService]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <app-sidebar #mainSidebar [items]=\"SidebarItems\" (dismissed)=\"menuDismissed($event)\" style=\"display: inline-block;\">\r\n\r\n    <ng-container app-sidebar-footer>\r\n\r\n    </ng-container>\r\n  </app-sidebar>\r\n  <div id=\"content\">\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-left navbar-toggle sidebara-toggle\" (click)=\"toggleButton()\">\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <div class=\"navbar-right\">\r\n            <span class=\"navbar-brand\">My Condu</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n    <div #overlay class=\"overlay\" (click)=\"dismiss()\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: block;\n}\n.overlay {\n  /* full screen */\n  width: 100vw;\n  height: 100vh;\n  /* transparent black */\n  background: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  /* middle layer, i.e. appears below the sidebar */\n  z-index: 9998;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var local_notification_service_1 = __webpack_require__("./src/app/services/local-notification.service.ts");
var dialogs_service_1 = __webpack_require__("./src/app/services/dialogs.service.ts");
var sidebar_component_1 = __webpack_require__("./src/app/directives/menu/sidebar.component.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(localNotification, dialog) {
        this.localNotification = localNotification;
        this.dialog = dialog;
        this.createMenu();
    }
    Object.defineProperty(AppComponent.prototype, "SidebarItems", {
        get: function () {
            return this._sideBarMenuItems;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createMenu = function () {
        this._sideBarMenuItems = [
            {
                id: 'h1',
                display: 'Dummy Heading',
                type: 'header',
                state: 'inactive'
            },
            {
                id: 'home',
                display: 'Home',
                type: 'node',
                state: 'active',
                link: '#',
                isLinkAbsolute: true
            },
            {
                id: 'about',
                display: 'About',
                type: 'node',
                state: 'inactive',
                link: '#',
                isLinkAbsolute: true
            },
            {
                id: 'pages',
                display: 'Pages',
                type: 'node',
                state: 'inactive',
                link: '#',
                isLinkAbsolute: true,
                childs: [
                    {
                        id: 'page1',
                        display: 'Page 1',
                        type: 'node',
                        state: 'inactive',
                        link: '#',
                        isLinkAbsolute: true
                    },
                    {
                        id: 'page2',
                        display: 'Page 2',
                        type: 'node',
                        state: 'inactive',
                        link: '#',
                        isLinkAbsolute: true
                    },
                    {
                        id: 'page3',
                        display: 'Page 3',
                        type: 'node',
                        state: 'inactive',
                        link: '#',
                        isLinkAbsolute: true
                    }
                ]
            },
            {
                id: 'Portfolio',
                display: 'Portfolio',
                type: 'node',
                state: 'inactive',
                link: '#',
                isLinkAbsolute: true
            },
            {
                id: 'Contact',
                display: 'Contact',
                type: 'node',
                state: 'inactive',
                link: '#',
                isLinkAbsolute: true
            }
        ];
    };
    AppComponent.prototype.ngOnInit = function () {
        this.bindEvents();
        if (cordova.platformId === 'android') {
            window["StatusBar"].backgroundColorByHexString("#ca6e04");
            window["StatusBar"].styleLightContent();
            window["StatusBar"].styleBlackTranslucent();
            window["StatusBar"].styleBlackOpaque();
        }
    };
    AppComponent.prototype.bindEvents = function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    AppComponent.prototype.onDeviceReady = function () {
    };
    AppComponent.prototype.toggleButton = function () {
        if (this._mainMenu) {
            this._mainMenu.toggleButton();
            $(this._overlay.nativeElement).fadeIn();
            return;
        }
        console.log('can not find mainmenu');
    };
    AppComponent.prototype.dismiss = function () {
        if (this._mainMenu) {
            this._mainMenu.dismiss();
        }
        $(this._overlay.nativeElement).fadeOut();
    };
    AppComponent.prototype.menuDismissed = function (isDismissed) {
        $(this._overlay.nativeElement).fadeOut();
    };
    __decorate([
        core_1.ViewChild('mainSidebar'),
        __metadata("design:type", typeof (_a = typeof sidebar_component_1.SidebarComponent !== "undefined" && sidebar_component_1.SidebarComponent) === "function" && _a || Object)
    ], AppComponent.prototype, "_mainMenu", void 0);
    __decorate([
        core_1.ViewChild('overlay'),
        __metadata("design:type", typeof (_b = typeof core_2.ElementRef !== "undefined" && core_2.ElementRef) === "function" && _b || Object)
    ], AppComponent.prototype, "_overlay", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")],
            providers: [local_notification_service_1.LocalNotificationService]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof local_notification_service_1.LocalNotificationService !== "undefined" && local_notification_service_1.LocalNotificationService) === "function" && _c || Object, typeof (_d = typeof dialogs_service_1.DialogsService !== "undefined" && dialogs_service_1.DialogsService) === "function" && _d || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var security_module_1 = __webpack_require__("./src/app/security/security.module.ts");
var home_module_1 = __webpack_require__("./src/app/home/home.module.ts");
var nfc_service_1 = __webpack_require__("./src/app/services/nfc.service.ts");
var settings_service_1 = __webpack_require__("./src/app/services/settings.service.ts");
var deviceinfo_service_1 = __webpack_require__("./src/app/services/deviceinfo.service.ts");
var application_event_manager_service_1 = __webpack_require__("./src/app/services/application-event-manager.service.ts");
var local_notification_service_1 = __webpack_require__("./src/app/services/local-notification.service.ts");
var dialogs_service_1 = __webpack_require__("./src/app/services/dialogs.service.ts");
var security_utility_service_1 = __webpack_require__("./src/app/security/security-utility.service.ts");
var utility_service_1 = __webpack_require__("./src/app/services/utility.service.ts");
var push_notification_service_1 = __webpack_require__("./src/app/services/push-notification.service.ts");
var directive_module_1 = __webpack_require__("./src/app/directives/directive.module.ts");
var profile_service_1 = __webpack_require__("./src/app/services/profile.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var nfc_component_1 = __webpack_require__("./src/app/sections/nfc.component.ts");
function startupServicesFactory(settings, nfcservice, event, localNotification, pushNotification) {
    return function () {
        nfcservice.onStartup();
        settings.OnStartup();
        application_event_manager_service_1.ApplicationEventManagerService.OnStart();
        localNotification.onStartup();
        pushNotification.onStart(settings.SenderId, {
            forceShow: true
        });
    };
}
exports.startupServicesFactory = startupServicesFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nfc_component_1.NfcComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                directive_module_1.DirectiveModule,
                security_module_1.SecurityModule,
                home_module_1.HomeModule,
                forms_1.FormsModule
            ],
            providers: [
                nfc_service_1.NfcService,
                settings_service_1.SettingsService,
                deviceinfo_service_1.DeviceinfoService,
                local_notification_service_1.LocalNotificationService,
                dialogs_service_1.DialogsService,
                security_utility_service_1.SecurityUtilityService,
                application_event_manager_service_1.ApplicationEventManagerService,
                utility_service_1.UtilityService,
                push_notification_service_1.PushNotificationService,
                profile_service_1.ProfileService,
                {
                    // Provider for APP_INITIALIZER
                    provide: core_1.APP_INITIALIZER,
                    useFactory: startupServicesFactory,
                    deps: [
                        settings_service_1.SettingsService,
                        nfc_service_1.NfcService,
                        application_event_manager_service_1.ApplicationEventManagerService,
                        local_notification_service_1.LocalNotificationService,
                        push_notification_service_1.PushNotificationService
                    ],
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/directives/User/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDEBAR USERPIC -->\r\n<div class=\"profile-userpic\">\r\n  <img src=\"{{UserImage}}\" class=\"img-responsive\" alt=\"\">\r\n</div>\r\n<!-- END SIDEBAR USERPIC -->\r\n<!-- SIDEBAR USER TITLE -->\r\n<div class=\"profile-usertitle\">\r\n  <div class=\"name\">\r\n    {{UserName}}\r\n  </div>\r\n  <div class=\"info\">\r\n    {{UserInfo}}\r\n  </div>\r\n</div>\r\n<!-- END SIDEBAR USER TITLE -->\r\n<!-- SIDEBAR BUTTONS -->\r\n<div class=\"profile-userbuttons\">\r\n  <button type=\"button\" class=\"btn btn-success btn-sm\">Follow</button>\r\n  <button type=\"button\" class=\"btn btn-danger btn-sm\">Message</button>\r\n</div>"

/***/ }),

/***/ "./src/app/directives/User/user-profile.component.less":
/***/ (function(module, exports) {

module.exports = ".profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important;\n}\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-usertitle .name {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.profile-usertitle .info {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 10px;\n}\n.profile-userbuttons .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\n.profile-userbuttons .btn:last-child {\n  margin-right: 0px;\n}\n"

/***/ }),

/***/ "./src/app/directives/User/user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var profile_service_1 = __webpack_require__("./src/app/services/profile.service.ts");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(profile) {
        this.profile = profile;
    }
    Object.defineProperty(UserProfileComponent.prototype, "UserImage", {
        get: function () {
            return this.profile.UserPicture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileComponent.prototype, "UserName", {
        get: function () {
            return this.profile.UserDisplayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileComponent.prototype, "UserInfo", {
        get: function () {
            return this.profile.UserInfo;
        },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/directives/User/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/directives/User/user-profile.component.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" && _a || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "./src/app/directives/directive.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var ngx_perfect_scrollbar_1 = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/index.js");
var sidebar_component_1 = __webpack_require__("./src/app/directives/menu/sidebar.component.ts");
var perfect_scrollbar_module_1 = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.module.js");
var user_profile_component_1 = __webpack_require__("./src/app/directives/User/user-profile.component.ts");
var map_component_1 = __webpack_require__("./src/app/directives/map/map.component.ts");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule
            ],
            exports: [
                sidebar_component_1.SidebarComponent, map_component_1.MapComponent
            ],
            declarations: [sidebar_component_1.SidebarComponent, user_profile_component_1.UserProfileComponent, map_component_1.MapComponent],
            providers: [
                {
                    provide: perfect_scrollbar_module_1.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());
exports.DirectiveModule = DirectiveModule;
//# sourceMappingURL=directive.module.js.map

/***/ }),

/***/ "./src/app/directives/map/map-state.enum.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MapState;
(function (MapState) {
    MapState[MapState["select"] = 0] = "select";
    MapState[MapState["show"] = 1] = "show";
})(MapState = exports.MapState || (exports.MapState = {}));
//# sourceMappingURL=map-state.enum.js.map

/***/ }),

/***/ "./src/app/directives/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div #mapconvas class=\"mapconvas\">\r\n  <!-- <div></div>\r\n  <div class=\"selectCenter\"> -->\r\n    <!-- <button class=\"btn btn-default selectbtn\" *ngIf=\"stateString == 'select'\" (click)=\"select()\" #selection></button> -->\r\n    <button class=\"btn btn-default selectbtn\" (click)=\"select()\" #selection>انتخاب</button>\r\n  <!-- </div>\r\n  <div></div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/directives/map/map.component.less":
/***/ (function(module, exports) {

module.exports = ":host(app-map) {\n  width: 100%;\n}\n.mapconvas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n.mapconvas > div {\n  z-index: -100;\n}\n.mapconvas .selectCenter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  width: 99%;\n}\n"

/***/ }),

/***/ "./src/app/directives/map/map.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var marker_1 = __webpack_require__("./src/app/directives/map/marker.ts");
var map_state_enum_1 = __webpack_require__("./src/app/directives/map/map-state.enum.ts");
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.markerSelected = new core_1.EventEmitter();
        this.selectionChanged = new core_1.EventEmitter();
        if (this._selectMarker) {
            this._selectMarker = {
                title: 'Select your location'
            };
        }
        this._locationOption = {
            enableHighAccuracy: true
        };
    }
    Object.defineProperty(MapComponent.prototype, "Markers", {
        set: function (value) {
            this._markers = value;
            if (this._map) {
                this.MakeShow();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "state", {
        set: function (value) {
            this._state = value;
            if (this._map && value === map_state_enum_1.MapState.select) {
                // this.MakeSelection();
            }
            if (this._map && value === map_state_enum_1.MapState.show) {
                //  this.MakeShow();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "SelectMarker", {
        set: function (value) {
            this._selectMarker = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "stateString", {
        get: function () {
            return this._state.toString();
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
        var self = this;
        plugin.google.maps.LocationService.getMyLocation(this._locationOption, function (location) {
            console.log(self._locationOption);
            console.log(self._convas.nativeElement);
            self._map = plugin.google.maps.Map.getMap(self._convas.nativeElement, {
                'camera': {
                    target: location.latLng,
                    zoom: 16
                }
            });
            self._map.on(plugin.google.maps.event.MAP_READY, function () {
                console.log("mapready");
                console.log(self._state);
                self._map.setMyLocationEnabled(true);
                self._map.setClickable(true);
                self._map.setCompassEnabled(true);
                self._map.setAllGesturesEnabled(true);
                if (self._state === map_state_enum_1.MapState.select) {
                    self.MakeSelection(location.latLng);
                }
                if (self._state === map_state_enum_1.MapState.show) {
                    self.MakeShow();
                }
            });
            self._map.on(plugin.google.maps.event.MAP_LONG_CLICK, function (latLng) {
                if (self._selectMarker && self._state === map_state_enum_1.MapState.select) {
                    self._selectMarker["marker"].setPosition({
                        lat: latLng.lat,
                        lng: latLng.lng
                    });
                }
            });
            self._map.on(plugin.google.maps.event.CAMERA_MOVE, function (cameraPosition) {
                if (self._selectMarker && self._state === map_state_enum_1.MapState.select) {
                    self._selectMarker["marker"].setPosition({
                        lat: cameraPosition.target.lat,
                        lng: cameraPosition.target.lng
                    });
                }
            });
            self._map.on(plugin.google.maps.event.CAMERA_MOVE_END, function (cameraPosition) {
                if (self._selectMarker && self._state === map_state_enum_1.MapState.select) {
                    self._selectMarker["marker"].setPosition({
                        lat: cameraPosition.target.lat,
                        lng: cameraPosition.target.lng
                    });
                }
            });
        });
    };
    MapComponent.prototype.ngAfterViewChecked = function () {
    };
    MapComponent.prototype.AddMarkers = function (markers) {
    };
    MapComponent.prototype.MakeSelection = function (location) {
        console.log(JSON.stringify(this._selectMarker));
        var options = this.MakeMarkerOption(this._selectMarker, location);
        console.log(JSON.stringify(options));
        var self = this;
        this._map.addMarker(options, function (marker) {
            self._selectMarker.id = marker.id;
            self._selectMarker["marker"] = marker;
            marker.setDraggable(true);
        });
    };
    MapComponent.prototype.MakeShow = function () {
        var options = new Array();
        var self = this;
        this._markers.forEach(function (value, index) {
            options.push(self.MakeMarkerOption(value));
        });
        this.AddMarkers(options);
    };
    MapComponent.prototype.MakeMarkerOption = function (marker, location) {
        var option = {};
        for (var propery in marker) {
            if (marker.hasOwnProperty(propery) && propery !== 'id') {
                var element = marker[propery];
                option[propery] = element;
            }
        }
        if (location) {
            option["position"] = location;
        }
        return option;
    };
    MapComponent.prototype.Select = function () {
        if (this._selectMarker && this._state === map_state_enum_1.MapState.select) {
            this._selectMarker.position = this._selectMarker["marker"].getPosition();
            this.selectionChanged.emit(this._selectMarker);
        }
    };
    MapComponent.prototype.Close = function () {
        this._map.remove();
    };
    __decorate([
        core_1.ViewChild('mapconvas'),
        __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
    ], MapComponent.prototype, "_convas", void 0);
    __decorate([
        core_1.ViewChild('selection'),
        __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
    ], MapComponent.prototype, "_selection", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MapComponent.prototype, "Markers", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_c = typeof map_state_enum_1.MapState !== "undefined" && map_state_enum_1.MapState) === "function" && _c || Object),
        __metadata("design:paramtypes", [typeof (_d = typeof map_state_enum_1.MapState !== "undefined" && map_state_enum_1.MapState) === "function" && _d || Object])
    ], MapComponent.prototype, "state", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_e = typeof marker_1.MarkerObject !== "undefined" && marker_1.MarkerObject) === "function" && _e || Object),
        __metadata("design:paramtypes", [typeof (_f = typeof marker_1.MarkerObject !== "undefined" && marker_1.MarkerObject) === "function" && _f || Object])
    ], MapComponent.prototype, "SelectMarker", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MapComponent.prototype, "useMyLocation", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "markerSelected", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "selectionChanged", void 0);
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            template: __webpack_require__("./src/app/directives/map/map.component.html"),
            styles: [__webpack_require__("./src/app/directives/map/map.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c, _d, _e, _f;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "./src/app/directives/map/marker.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkerObject = /** @class */ (function () {
    function MarkerObject() {
    }
    return MarkerObject;
}());
exports.MarkerObject = MarkerObject;
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./src/app/directives/menu/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav #sidemenu id=\"sidemenu\">\r\n<perfect-scrollbar>\r\n    <!-- Close Sidebar Button -->\r\n    <div id=\"dismiss\" (click)=\"dismiss()\">\r\n      <i class=\"glyphicon glyphicon-arrow-left\"></i>\r\n    </div>\r\n\r\n    <!-- <ng-content select=\"[app-sidebar-header]\"></ng-content> -->\r\n    <!-- Sidebar Header -->\r\n    <app-user-profile class=\"sidebar-header\">\r\n\r\n\r\n    </app-user-profile>\r\n\r\n    <!-- Sidbar Links -->\r\n    <ul class=\"list-unstyled components\">\r\n      <ng-container *ngFor= \"let item of MenuItems\">\r\n        <p *ngIf= \"item.type == 'header'\"> {{ item.display }}</p>\r\n        <li *ngIf= \"item.type == 'node'\" class=\"{{(item.state == 'active'? 'active ': ' ') + (item.cssClass? item.cssClass : '')}}\">\r\n          <a *ngIf=\"item.isLinkAbsolute\" href=\"{{item.link}}\">{{item.display}}</a>\r\n          <!-- Else it is route-->\r\n        </li>\r\n        <li *ngIf = \"item.type == 'seperator'\" class=\"seperator\"></li>\r\n        <li *ngIf = \"item.childs && item.childs.length > 0\">\r\n          <!-- <li> Link with dropdown items -->\r\n            <a data-toggle=\"collapse\" aria-expanded=\"false\" [attr.data-target]=\"'#' + item.id\">{{item.display}}</a>\r\n            <ul class=\"collapse list-unstyled\" id=\"{{item.id}}\">\r\n              <ng-container *ngFor=\"let citem of item.childs\">\r\n                <p *ngIf=\"citem.type == 'header'\"> {{ item.display }</p>\r\n                <li *ngIf=\"citem.type == 'node'\" class=\"{{(citem.state == 'active'? 'active ': ' ') + (item.cssClass? item.cssClass : '')}}\">\r\n                  <a *ngIf=\"citem.isLinkAbsolute\" href=\"{{citem.link}}\">{{citem.display}}</a>\r\n                  <!-- Else it is route-->\r\n                </li>\r\n                <li *ngIf=\"citem.type == 'seperator'\" class=\"seperator\"></li>\r\n              </ng-container>\r\n            </ul>\r\n        </li>\r\n      </ng-container>\r\n\r\n\r\n      <!-- <p>Dummy Heading</p>\r\n      <li class=\"active\">\r\n        <a href=\"#\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">About</a>\r\n      </li>\r\n      <li>\r\n        <a data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#homeSubmenu\">Pages</a>\r\n        <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n          <li>\r\n            <a href=\"#\">Page 1</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Page 2</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Page 3</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">Portfolio</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">Contact</a>\r\n      </li>-->\r\n    </ul>\r\n\r\n    <ng-content select=\"[app-sidebar-footer]\"></ng-content>\r\n    </perfect-scrollbar>\r\n  </nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/directives/menu/sidebar.component.less":
/***/ (function(module, exports) {

module.exports = ":host(app-sidebar) {\n  display: inline-block;\n}\n#sidemenu {\n  position: fixed;\n  top: 0;\n  left: -250px;\n  height: 100vh;\n  background: #1f1f1f;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n  width: 250px;\n  /* top layer */\n  z-index: 9999;\n  color: #fff;\n}\n#sidemenu.active {\n  left: 0;\n}\n#sidemenu .sidebar-header {\n  padding: 20px;\n  background: #111111;\n  display: block;\n}\n#sidemenu .list-unstyled {\n  list-style: none;\n}\n#sidemenu ul.components {\n  border-bottom: 1px solid #47748b;\n}\n#sidemenu ul p {\n  color: #fff;\n  padding: 10px;\n  font-size: 1.1em;\n  font-weight: 300;\n}\n#sidemenu ul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #111111;\n}\n#sidemenu ul li {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n#sidemenu ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n  color: #fff;\n}\n#sidemenu ul li a[data-toggle=\"collapse\"] {\n  position: relative;\n}\n#sidemenu ul li a[aria-expanded=\"false\"]::before,\n#sidemenu ul li a[aria-expanded=\"true\"]::before {\n  content: '\\e259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em;\n}\n#sidemenu ul li a:hover {\n  color: #111111;\n  background: #fff;\n}\n#sidemenu ul li::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 100%;\n  width: 3px;\n  background-color: #1f1f1f;\n  -webkit-transition: width 0.2s ease-in;\n  transition: width 0.2s ease-in;\n}\n#sidemenu ul li:first-child a {\n  background-color: #1a1a1a;\n}\n#sidemenu ul li:nth-child(2)::before {\n  background-color: #ec1b5a;\n}\n#sidemenu ul li:nth-child(3)::before {\n  background-color: #79aefe;\n}\n#sidemenu ul li:nth-child(4)::before {\n  background-color: #314190;\n}\n#sidemenu ul li:nth-child(5)::before {\n  background-color: #279636;\n}\n#sidemenu ul li:nth-child(6)::before {\n  background-color: #7d5d81;\n}\n#sidemenu ul li:nth-child(7)::before {\n  background-color: #ead24c;\n}\n#sidemenu ul li:nth-child(8)::before {\n  background-color: #2d2366;\n}\n#sidemenu ul li:nth-child(9)::before {\n  background-color: #35acdf;\n}\n#sidemenu ul li:hover::before,\n#sidemenu ul li.open:hover::before {\n  width: 100%;\n  -webkit-transition: width 0.2s ease-in;\n  transition: width 0.2s ease-in;\n}\n#sidemenu ul li a:hover,\n#sidemenu ul li.open a:hover,\n#sidemenu ul li a:active,\n#sidemenu ul li.open a:active,\n#sidemenu ul li a:focus,\n#sidemenu ul li.open a:focus {\n  text-decoration: none;\n  background: transparent !important;\n}\n#sidemenu ul li.active > a {\n  color: #fff;\n}\n#sidemenu ul li.active::before {\n  width: 100%;\n  -webkit-transition: width 0.2s ease-in;\n  transition: width 0.2s ease-in;\n}\n#sidemenu #dismiss {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  background: #4b4b4b;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  border-radius: 35px;\n  z-index: 9999;\n}\n"

/***/ }),

/***/ "./src/app/directives/menu/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
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
        __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
    ], SidebarComponent.prototype, "_sidemenu", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "items", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "dismissed", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/directives/menu/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/directives/menu/sidebar.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/home/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n    <li role=\"presentation\" class=\"active\">\r\n      <a href=\"#map\" aria-controls=\"map\" role=\"tab\" data-toggle=\"tab\">Map</a>\r\n    </li>\r\n    <li role=\"presentation\">\r\n      <a href=\"#nfctag\" aria-controls=\"nfctag\" role=\"tab\" data-toggle=\"tab\">Nfc</a>\r\n    </li>\r\n    <li role=\"presentation\">\r\n      <a href=\"#pushNotification\" aria-controls=\"pushNotification\" role=\"tab\" data-toggle=\"tab\">Notification</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <div class=\"tab-content\">\r\n    <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"map\">\r\n        <div class=\"container\" id=\"mapcnt\">\r\n          <app-map #mainMap [state]=\"mapState\" [useMyLocation]=\"mapUseMyLocation\" (selectionChanged)=\"mapSelected($event)\"></app-map>\r\n        </div>\r\n    </div>\r\n\r\n    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"nfctag\">\r\n      <div class=\"container\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <label for=\"testNfcMessage\">Message: </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"testNfcMessage\" placeholder=\"Test message ...\" [value]=\"nfcMessage\">\r\n          </div>\r\n          <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info navbar-btn\" (click)=\"startNfc()\">\r\n            <i class=\"glyphicon glyphicon-export\"></i>\r\n            StartNfc\r\n          </button>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"pushNotification\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <h1> Registration Id:</h1>\r\n          <p> {{RegistrationId}} </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/dashboard.component.less":
/***/ (function(module, exports) {

module.exports = ".navbar-inverse {\n  background-color: #ca6e04 !important;\n  border-color: #ca6e04 !important;\n  color: #ffffff !important;\n}\n.navbar-inverse .navbar-text {\n  color: #b1b1b1 !important;\n}\n.navbar-inverse .navbar-brand {\n  color: #ffffff !important;\n}\n.sidebara-toggle {\n  border: 0px !important;\n  display: block;\n  float: left !important;\n}\n.sidebara-toggle:hover {\n  background-color: #a15701 !important;\n}\n#map {\n  position: relative;\n}\n#map::before {\n  content: \" \";\n  display: block;\n  width: 100%;\n  padding-top: 62%;\n  z-index: -100;\n}\n#mapcnt {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/app/home/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var local_notification_service_1 = __webpack_require__("./src/app/services/local-notification.service.ts");
var dialogs_service_1 = __webpack_require__("./src/app/services/dialogs.service.ts");
var push_notification_service_1 = __webpack_require__("./src/app/services/push-notification.service.ts");
var nfc_service_1 = __webpack_require__("./src/app/services/nfc.service.ts");
var map_state_enum_1 = __webpack_require__("./src/app/directives/map/map-state.enum.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_parent, localNotification, dialog, pushNotification, nfc) {
        this._parent = _parent;
        this.localNotification = localNotification;
        this.dialog = dialog;
        this.pushNotification = pushNotification;
        this.nfc = nfc;
        this._shown = false;
        this._mapUseMyLocation = true;
        this._mapState = map_state_enum_1.MapState.select;
    }
    Object.defineProperty(DashboardComponent.prototype, "nfcMessage", {
        get: function () {
            return this._nfcMessage;
        },
        set: function (v) {
            this._nfcMessage = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "RegistrationId", {
        get: function () {
            return this.pushNotification.RegistrationId;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.showNotification = function () {
        // // console.log("hello 2");
        // // this.dialog.alert(JSON.stringify(this.localNotification.getDefaults()));
        // this.localNotification.showNofification({
        //   id: 15,
        //   title: 'Chat with Irish',
        //   icon: 'http://climberindonesia.com/assets/icon/ionicons-2.0.1/png/512/android-chat.png',
        //   text: [
        //     { message: 'I miss you' },
        //     { person: 'Irish', message: 'I miss you more!' },
        //     { message: 'I always miss you more by 10%' }
        //   ]
        // }, note => {
        //   this.dialog.alert(JSON.stringify(note));
        // }, reson => {
        //   console.log(reson);
        //   this.dialog.alert(reson.toString());
        // });
    };
    DashboardComponent.prototype.startNfc = function () {
        if (!this._shown) {
            this._shown = true;
            this.nfc.share({
                id: 2,
                name: this._nfcMessage
            }).then(function () {
                console.log('nfc Activated');
            }).catch(function (err) {
                console.log('nfc Log: ' + err);
            });
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pushNotification.onNotification(function (data) {
            _this.dialog.alert(JSON.stringify(data));
        }, function (err) {
            _this.dialog.alert(err.message);
        });
    };
    DashboardComponent.prototype.mapSelcted = function (marker) {
        this.dialog.alert("Your Location is \r\n lat:" + marker.position.lat + " \r\n lng:" + marker.position.lng);
    };
    Object.defineProperty(DashboardComponent.prototype, "mapState", {
        get: function () {
            return this._mapState;
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/home/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/home/dashboard.component.less")],
            providers: [local_notification_service_1.LocalNotificationService, dialogs_service_1.DialogsService]
        }),
        __param(0, core_1.Host()),
        __metadata("design:paramtypes", [typeof (_a = typeof app_component_1.AppComponent !== "undefined" && app_component_1.AppComponent) === "function" && _a || Object, typeof (_b = typeof local_notification_service_1.LocalNotificationService !== "undefined" && local_notification_service_1.LocalNotificationService) === "function" && _b || Object, typeof (_c = typeof dialogs_service_1.DialogsService !== "undefined" && dialogs_service_1.DialogsService) === "function" && _c || Object, typeof (_d = typeof push_notification_service_1.PushNotificationService !== "undefined" && push_notification_service_1.PushNotificationService) === "function" && _d || Object, typeof (_e = typeof nfc_service_1.NfcService !== "undefined" && nfc_service_1.NfcService) === "function" && _e || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var dashboard_component_1 = __webpack_require__("./src/app/home/dashboard.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var directive_module_1 = __webpack_require__("./src/app/directives/directive.module.ts");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                app_routing_module_1.AppRoutingModule,
                directive_module_1.DirectiveModule
            ],
            declarations: [dashboard_component_1.DashboardComponent]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "./src/app/sections/nfc.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  nfc works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/sections/nfc.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/nfc.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var NfcComponent = /** @class */ (function () {
    function NfcComponent() {
    }
    NfcComponent.prototype.ngOnInit = function () {
    };
    NfcComponent = __decorate([
        core_1.Component({
            selector: 'app-nfc',
            template: __webpack_require__("./src/app/sections/nfc.component.html"),
            styles: [__webpack_require__("./src/app/sections/nfc.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NfcComponent);
    return NfcComponent;
}());
exports.NfcComponent = NfcComponent;
//# sourceMappingURL=nfc.component.js.map

/***/ }),

/***/ "./src/app/security/auth-guard.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var AuthGuardGuard = /** @class */ (function () {
    /**
     *
     */
    function AuthGuardGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        console.log('AuthGuard#canActivate called');
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuardGuard.prototype.checkLogin = function (url) {
        if (this._authService.IsLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this._authService.RedirectUrl = url;
        // Navigate to the login page with extras
        this._router.navigate(['/login']);
        // return this._authService.login().toPromise<boolean>().then(val => {
        //   return this._authService.IsLoggedIn;
        // });
    };
    AuthGuardGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], AuthGuardGuard);
    return AuthGuardGuard;
    var _a, _b;
}());
exports.AuthGuardGuard = AuthGuardGuard;
//# sourceMappingURL=auth-guard.guard.js.map

/***/ }),

/***/ "./src/app/security/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var ErrorObservable_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this._isLoggedIn = false;
    }
    Object.defineProperty(AuthService.prototype, "IsLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "RedirectUrl", {
        get: function () {
            return this._redirectUrl;
        },
        set: function (url) {
            this._redirectUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (userName, password, rememberMe, data) {
        var _this = this;
        // TODO: add real mechanism
        if (userName.toLowerCase() === 'admin' && password.toLowerCase() === '1') {
            return Observable_1.Observable.of(true).delay(1000).do(function (val) {
                _this._isLoggedIn = val;
            });
        }
        return new ErrorObservable_1.ErrorObservable('Username or password is wrong');
    };
    AuthService.prototype.logout = function () {
        this._isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/security/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n    you can substitue the span of reauth email for a input with the email and\r\n    include the remember me checkbox\r\n    -->\r\n<div class=\"container\" id=\"loginContainer\">\r\n  <div class=\"card card-container\">\r\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"{{img}}\" />\r\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\r\n    <form class=\"form-signin\">\r\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\r\n      <input [value]=\"username\" (input)=\"username = $event.target.value\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n      <input [value]=\"password\" (input)=\"password = $event.target.value\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\r\n      <div id=\"remember\" class=\"checkbox\">\r\n        <label>\r\n          <input type=\"checkbox\" [value]=\"rememberMe\" (input)=\"rememberMe = $event.target.value\" [checked]=\"rememberMe\" (change)=\"rememberMe = !rememberMe\"/> Remember me\r\n        </label>\r\n      </div>\r\n      <button [class]=\"btnClass\" type=\"button\" (click)=\"login()\">Sign in</button>\r\n    </form>\r\n    <!-- /form -->\r\n    <!-- <a href=\"#\" class=\"forgot-password\">\r\n      Forgot the password?\r\n    </a> -->\r\n  </div>\r\n  <!-- /card-container -->\r\n</div>\r\n<!-- /container -->\r\n"

/***/ }),

/***/ "./src/app/security/login.component.less":
/***/ (function(module, exports) {

module.exports = "#loginContainer:before {\n  content: ' ';\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background-repeat: no-repeat;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#BAEAFD), to(#0043BE));\n  background-image: linear-gradient(#BAEAFD, #0043BE);\n  z-index: -1;\n}\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: #6891a2;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2;\n}\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: #6891a2;\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  -webkit-transition: all 0.218s;\n  transition: all 0.218s;\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #0c6121;\n}\n.forgot-password {\n  color: #6891a2;\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #0c6121;\n}\n"

/***/ }),

/***/ "./src/app/security/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var LoginComponent = /** @class */ (function () {
    // @ViewChild('loginModal')
    // private _loginModal: ElementRef;
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this._userName = '';
        this._password = '';
        this._btnClass = 'btn btn-lg btn-block btn-signin btn-primary';
        this._img = cordova.platformId === 'android' ?
            '/android_asset/www/assets/images/UnknownMale.png' :
            'assets/images/UnknownMale.png';
    }
    Object.defineProperty(LoginComponent.prototype, "btnClass", {
        get: function () {
            return this._btnClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (v) {
            this._password = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "rememberMe", {
        get: function () {
            return this._rememberMe;
        },
        set: function (v) {
            this._rememberMe = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "img", {
        get: function () {
            return this._img;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        // let el = this._loginModal.nativeElement;
        // (<any>jQuery(el)).modal('show');
        // #BAEAFD,#0043BE
        if (cordova.platformId === 'android') {
            window["StatusBar"].backgroundColorByHexString("#BAEAFD");
            window["StatusBar"].styleLightContent();
            window["StatusBar"].styleBlackTranslucent();
            window["StatusBar"].styleBlackOpaque();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        console.log(self.username);
        this.loginService.login(this.username, this.password, this.rememberMe).subscribe(function () {
            console.log(_this.loginService.RedirectUrl);
            if (_this.loginService.RedirectUrl) {
                _this._btnClass = 'btn btn-lg btn-block btn-signin btn-primary';
                _this.router.navigateByUrl(_this.loginService.RedirectUrl);
            }
        }, function (err) {
            console.log(err);
            _this._btnClass = 'btn-danger btn btn-lg btn-block btn-signin ';
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/security/login.component.html"),
            styles: [__webpack_require__("./src/app/security/login.component.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/security/security-utility.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var SecurityUtilityService = /** @class */ (function () {
    function SecurityUtilityService() {
    }
    SecurityUtilityService.prototype.Encode = function (data, key) {
        return data;
    };
    SecurityUtilityService.prototype.Decode = function (data, key) {
        return data;
    };
    Object.defineProperty(SecurityUtilityService.prototype, "PrivateKey", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecurityUtilityService.prototype, "PublicKey", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    SecurityUtilityService = __decorate([
        core_1.Injectable()
    ], SecurityUtilityService);
    return SecurityUtilityService;
}());
exports.SecurityUtilityService = SecurityUtilityService;
//# sourceMappingURL=security-utility.service.js.map

/***/ }),

/***/ "./src/app/security/security.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var login_component_1 = __webpack_require__("./src/app/security/login.component.ts");
var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [login_component_1.LoginComponent]
        })
    ], SecurityModule);
    return SecurityModule;
}());
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.module.js.map

/***/ }),

/***/ "./src/app/services/application-event-manager.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var utility_service_1 = __webpack_require__("./src/app/services/utility.service.ts");
var ApplicationEventManagerService = /** @class */ (function () {
    function ApplicationEventManagerService() {
    }
    ApplicationEventManagerService_1 = ApplicationEventManagerService;
    ApplicationEventManagerService.OnStart = function () {
        document.addEventListener("pause", this.onPause, false);
        document.addEventListener("resume", this.onResume, false);
        document.addEventListener("active", this.onResume, false);
        document.addEventListener("backbutton", this.onBackButton, false);
        document.addEventListener("menubutton", this.onMenuButton, false);
        document.addEventListener("searchbutton", this.onSearchButton, false);
        document.addEventListener("startcallbutton", this.onStartCallButton, false);
        document.addEventListener("endcallbutton", this.onEndCallButton, false);
        document.addEventListener("volumedownbutton", this.onVolumeDownButton, false);
        document.addEventListener("volumeupbutton", this.onVolumeUpButton, false);
    };
    ApplicationEventManagerService.onPause = function () {
        var _onPauseString = [];
        var _onResumeString = [];
        var _onBackButtonString = [];
        var _onMenuButtonString = [];
        var _onSearchButtonString = [];
        var _onStartcallButtonString = [];
        var _onEndcallButtonString = [];
        var _onVolumeDownButtonString = [];
        var _onVolumeUpButtonString = [];
        ApplicationEventManagerService_1._onPause.forEach(function (res) {
            _onPauseString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onResume.forEach(function (res) {
            _onResumeString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onBackButton.forEach(function (res) {
            _onBackButtonString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onMenuButton.forEach(function (res) {
            _onMenuButtonString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onSearchButton.forEach(function (res) {
            _onSearchButtonString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onStartcallButton.forEach(function (res) {
            _onStartcallButtonString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onEndcallButton.forEach(function (res) {
            _onEndcallButtonString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onVolumeDownButton.forEach(function (res) {
            _onVolumeDownButtonString.push(utility_service_1.UtilityService.Serialize(res));
        });
        ApplicationEventManagerService_1._onVolumeUpButton.forEach(function (res) {
            _onVolumeUpButtonString.push(utility_service_1.UtilityService.Serialize(res));
        });
        window.localStorage.setItem("CordovaEventsPause", JSON.stringify(_onPauseString));
        window.localStorage.setItem("CordovaEventsResume", JSON.stringify(_onResumeString));
        window.localStorage.setItem("CordovaEventsBackButton", JSON.stringify(_onBackButtonString));
        window.localStorage.setItem("CordovaEventsMenuButton", JSON.stringify(_onMenuButtonString));
        window.localStorage.setItem("CordovaEventsSearchButton", JSON.stringify(_onSearchButtonString));
        window.localStorage.setItem("CordovaEventsStartcallButton", JSON.stringify(_onStartcallButtonString));
        window.localStorage.setItem("CordovaEventsEndcallButton", JSON.stringify(_onEndcallButtonString));
        window.localStorage.setItem("CordovaEventsVolumeDownButton", JSON.stringify(_onVolumeDownButtonString));
        window.localStorage.setItem("CordovaEventsVolumeUpButton", JSON.stringify(_onVolumeUpButtonString));
        ApplicationEventManagerService_1._onPause.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.onResume = function (event) {
        console.log('Hello from ONResume');
        if (typeof ApplicationEventManagerService_1._onPause === "undefined" || ApplicationEventManagerService_1._onPause.length === 0) {
            var onPause = window.localStorage.getItem("CordovaEventsPause");
            var onResume = window.localStorage.getItem("CordovaEventsResume");
            var onBackButton = window.localStorage.getItem("CordovaEventsBackButton");
            var onMenuButton = window.localStorage.getItem("CordovaEventsMenuButton");
            var onSearchButton = window.localStorage.getItem("CordovaEventsSearchButton");
            var onStartcallButton = window.localStorage.getItem("CordovaEventsStartcallButton");
            var onEndcallButton = window.localStorage.getItem("CordovaEventsEndcallButton");
            var onVolumeDownButton = window.localStorage.getItem("CordovaEventsVolumeDownButton");
            var onVolumeUpButton = window.localStorage.getItem("CordovaEventsVolumeUpButton");
            window.localStorage.removeItem('CordovaEventsPause');
            window.localStorage.removeItem('CordovaEventsResume');
            window.localStorage.removeItem('CordovaEventsBackButton');
            window.localStorage.removeItem('CordovaEventsMenuButton');
            window.localStorage.removeItem('CordovaEventsSearchButton');
            window.localStorage.removeItem('CordovaEventsStartcallButton');
            window.localStorage.removeItem('CordovaEventsEndcallButton');
            window.localStorage.removeItem('CordovaEventsVolumeDownButton');
            window.localStorage.removeItem('CordovaEventsVolumeUpButton');
            console.log(onResume);
            var _onPauseString = onPause ? JSON.parse(onPause) : new Array(0);
            var _onResumeString = onResume ? JSON.parse(onResume) : new Array(0);
            var _onBackButtonString = onBackButton ? JSON.parse(onBackButton) : new Array(0);
            var _onMenuButtonString = onMenuButton ? JSON.parse(onMenuButton) : new Array(0);
            var _onSearchButtonString = onSearchButton ? JSON.parse(onSearchButton) : new Array(0);
            var _onStartcallButtonString = onStartcallButton ? JSON.parse(onStartcallButton) : new Array(0);
            var _onEndcallButtonString = onEndcallButton ? JSON.parse(onEndcallButton) : new Array(0);
            var _onVolumeDownButtonString = onVolumeDownButton ? JSON.parse(onVolumeDownButton) : new Array(0);
            var _onVolumeUpButtonString = onVolumeUpButton ? JSON.parse(onVolumeUpButton) : new Array(0);
            console.log(_onResumeString.length);
            ApplicationEventManagerService_1._onPause = [];
            ApplicationEventManagerService_1._onResume = [];
            ApplicationEventManagerService_1._onBackButton = [];
            ApplicationEventManagerService_1._onMenuButton = [];
            ApplicationEventManagerService_1._onSearchButton = [];
            ApplicationEventManagerService_1._onStartcallButton = [];
            ApplicationEventManagerService_1._onEndcallButton = [];
            ApplicationEventManagerService_1._onVolumeDownButton = [];
            ApplicationEventManagerService_1._onVolumeUpButton = [];
            _onPauseString.forEach(function (res) {
                ApplicationEventManagerService_1._onPause.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onResumeString.forEach(function (res) {
                ApplicationEventManagerService_1._onResume.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onBackButtonString.forEach(function (res) {
                ApplicationEventManagerService_1._onBackButton.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onMenuButtonString.forEach(function (res) {
                ApplicationEventManagerService_1._onMenuButton.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onSearchButtonString.forEach(function (res) {
                ApplicationEventManagerService_1._onSearchButton.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onStartcallButtonString.forEach(function (res) {
                ApplicationEventManagerService_1._onStartcallButton.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onEndcallButtonString.forEach(function (res) {
                ApplicationEventManagerService_1._onEndcallButton.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onVolumeDownButtonString.forEach(function (res) {
                ApplicationEventManagerService_1._onVolumeDownButton.push(utility_service_1.UtilityService.Deserialize(res));
            });
            _onVolumeUpButtonString.forEach(function (res) {
                ApplicationEventManagerService_1._onVolumeUpButton.push(utility_service_1.UtilityService.Deserialize(res));
            });
        }
        var result = event.pendingResult;
        setTimeout(function () {
            ApplicationEventManagerService_1._onResume.forEach(function (resolve) {
                resolve(result);
            });
        }, 0);
    };
    ApplicationEventManagerService.onBackButton = function () {
        ApplicationEventManagerService_1._onBackButton.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.onMenuButton = function () {
        ApplicationEventManagerService_1._onMenuButton.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.onSearchButton = function () {
        ApplicationEventManagerService_1._onSearchButton.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.onStartCallButton = function () {
        ApplicationEventManagerService_1._onStartcallButton.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.onEndCallButton = function () {
        ApplicationEventManagerService_1._onEndcallButton.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.onVolumeDownButton = function () {
        ApplicationEventManagerService_1._onVolumeDownButton.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.onVolumeUpButton = function () {
        ApplicationEventManagerService_1._onVolumeUpButton.forEach(function (resolve) {
            resolve();
        });
    };
    ApplicationEventManagerService.Pause = function (callback) {
        ApplicationEventManagerService_1._onPause.push(callback);
    };
    ApplicationEventManagerService.Resume = function (callback) {
        ApplicationEventManagerService_1._onResume.push(callback);
    };
    ApplicationEventManagerService.BackButton = function (callback) {
        ApplicationEventManagerService_1._onBackButton.push(callback);
    };
    ApplicationEventManagerService.MenuButton = function (callback) {
        ApplicationEventManagerService_1._onMenuButton.push(callback);
    };
    ApplicationEventManagerService.SearchButton = function (callback) {
        ApplicationEventManagerService_1._onSearchButton.push(callback);
    };
    ApplicationEventManagerService.StartCallButton = function (callback) {
        ApplicationEventManagerService_1._onStartcallButton.push(callback);
    };
    ApplicationEventManagerService.EndCallButton = function (callback) {
        ApplicationEventManagerService_1._onEndcallButton.push(callback);
    };
    ApplicationEventManagerService.VolumeDownButton = function (callback) {
        ApplicationEventManagerService_1._onVolumeDownButton.push(callback);
    };
    ApplicationEventManagerService.VolumeUpButton = function (callback) {
        ApplicationEventManagerService_1._onVolumeUpButton.push(callback);
    };
    ApplicationEventManagerService._onPause = new Array(0);
    ApplicationEventManagerService._onResume = new Array(0);
    ApplicationEventManagerService._onBackButton = new Array(0);
    ApplicationEventManagerService._onMenuButton = new Array(0);
    ApplicationEventManagerService._onSearchButton = new Array(0);
    ApplicationEventManagerService._onStartcallButton = new Array(0);
    ApplicationEventManagerService._onEndcallButton = new Array(0);
    ApplicationEventManagerService._onVolumeDownButton = new Array(0);
    ApplicationEventManagerService._onVolumeUpButton = new Array(0);
    ApplicationEventManagerService = ApplicationEventManagerService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ApplicationEventManagerService);
    return ApplicationEventManagerService;
    var ApplicationEventManagerService_1;
}());
exports.ApplicationEventManagerService = ApplicationEventManagerService;
//# sourceMappingURL=application-event-manager.service.js.map

/***/ }),

/***/ "./src/app/services/deviceinfo.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var DeviceinfoService = /** @class */ (function () {
    function DeviceinfoService() {
    }
    Object.defineProperty(DeviceinfoService.prototype, "CordovaVersion", {
        get: function () {
            return device.cordova;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "IsCordovaAvailable", {
        get: function () {
            return device.available;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "DeviceModel", {
        get: function () {
            return device.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "Platform", {
        get: function () {
            return device.platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "UUID", {
        get: function () {
            return device.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "PlatformVersion", {
        get: function () {
            return device.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "Manufacturer", {
        get: function () {
            return device.manufacturer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "IsVirtual", {
        get: function () {
            return device.isVirtual;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "Serial", {
        get: function () {
            return device.serial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "IsAndroid", {
        get: function () {
            return this.Platform.toLowerCase() === 'android';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "IsIOS", {
        get: function () {
            return this.Platform.toLowerCase() === 'ios';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceinfoService.prototype, "IsWindows", {
        get: function () {
            return this.Platform.toLowerCase() === 'windows';
        },
        enumerable: true,
        configurable: true
    });
    DeviceinfoService = __decorate([
        core_1.Injectable()
    ], DeviceinfoService);
    return DeviceinfoService;
}());
exports.DeviceinfoService = DeviceinfoService;
//# sourceMappingURL=deviceinfo.service.js.map

/***/ }),

/***/ "./src/app/services/dialogs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var DialogsService = /** @class */ (function () {
    function DialogsService() {
    }
    DialogsService.prototype.alert = function (message, options) {
        return new Promise(function (resolve, reject) {
            navigator.notification.alert(message, resolve, options && options.title ? options.title : null, options && options.buttonName ? options.buttonName : null);
        });
    };
    DialogsService.prototype.Confirm = function (message, option) {
        var _isDefult = option && (option.buttons || option.dismiss) ? false : true;
        var buttons = option ? (option.buttons ? option.buttons.concat(option.dismiss ? [option.dismiss] : []) : ["OK", option.dismiss]) : ["OK", "Cancel"];
        var dismissIdx = buttons.length - 1;
        return new Promise(function (resolve, reject) {
            navigator.notification.confirm(message, function (buttonIndex) {
                if (buttonIndex === dismissIdx) {
                    reject(buttons[dismissIdx]);
                    return;
                }
                resolve(buttons[buttonIndex]);
            }, option && option.title ? option.title : null, buttons);
        });
    };
    DialogsService.prototype.Prompt = function (message, defaultText, option) {
        var _isDefult = option && (option.buttons || option.dismiss) ? false : true;
        var buttons = option ? (option.buttons ? option.buttons.concat(option.dismiss ? [option.dismiss] : []) : ["OK", option.dismiss]) : ["OK", "Cancel"];
        var dismissIdx = buttons.length - 1;
        return new Promise(function (resolve, reject) {
            navigator.notification.prompt(message, function (result) {
                if (result.buttonIndex === dismissIdx) {
                    reject({ button: buttons[dismissIdx], prompt: result.input1 });
                    return;
                }
                resolve({ button: buttons[result.buttonIndex], prompt: result.input1 });
            }, option && option.title ? option.title : null, buttons, option && option.defaultText ? option.defaultText : null);
        });
    };
    DialogsService = __decorate([
        core_1.Injectable()
    ], DialogsService);
    return DialogsService;
}());
exports.DialogsService = DialogsService;
//# sourceMappingURL=dialogs.service.js.map

/***/ }),

/***/ "./src/app/services/local-notification.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var application_event_manager_service_1 = __webpack_require__("./src/app/services/application-event-manager.service.ts");
var utility_service_1 = __webpack_require__("./src/app/services/utility.service.ts");
var LocalNotificationService = /** @class */ (function () {
    function LocalNotificationService() {
        application_event_manager_service_1.ApplicationEventManagerService.Pause(this.onPause);
        application_event_manager_service_1.ApplicationEventManagerService.Resume(this.onResume);
    }
    LocalNotificationService_1 = LocalNotificationService;
    LocalNotificationService.optOutNotification = function (not) {
        return not;
    };
    LocalNotificationService.prototype.onStartup = function () {
        console.log('hello from Local On startup');
        cordova.plugins.notification.local.on('click', this.onClick);
    };
    LocalNotificationService.prototype.onPause = function () {
        var _notificationsString = {};
        for (var key in LocalNotificationService_1._notifications) {
            if (LocalNotificationService_1._notifications.hasOwnProperty(key)) {
                var element = LocalNotificationService_1._notifications[key];
                _notificationsString[key] = {
                    notification: element.notification,
                    resolve: element.resolve ? utility_service_1.UtilityService.Serialize(element.resolve) : null
                };
            }
        }
        window.localStorage.setItem('LocalNotificationService', JSON.stringify(_notificationsString));
    };
    LocalNotificationService.prototype.onResume = function (result) {
        console.log(result);
        var notif = window.localStorage.getItem('LocalNotificationService');
        window.localStorage.removeItem('LocalNotificationService');
        if (!notif) {
            var _notificationsString = JSON.parse(notif);
            for (var key in _notificationsString) {
                if (_notificationsString.hasOwnProperty(key)) {
                    var element = _notificationsString[key];
                    LocalNotificationService_1._notifications[key] = {
                        notification: element.notification,
                        resolve: element.resolve ? utility_service_1.UtilityService.Deserialize(element.resolve) : function () { }
                    };
                }
            }
        }
        // this.onStartup();
    };
    LocalNotificationService.prototype.onClick = function (notification) {
        console.log("Clicked");
        console.log(JSON.stringify(notification));
        if (LocalNotificationService_1._notifications[notification.id]) {
            LocalNotificationService_1._notifications[notification.id].resolve(LocalNotificationService_1.optOutNotification(notification));
        }
    };
    LocalNotificationService.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this._hasPermission) {
                    return [2 /*return*/, Promise.resolve(true)];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.plugins.notification.local.hasPermission(function (granted) {
                            _this._hasPermission = granted;
                            if (!granted) {
                                _this.requestPermission().then(function (gr) {
                                    resolve(gr);
                                }).catch(function (reason) {
                                    reject('You have no permission to send notification');
                                });
                                return;
                            }
                            resolve(granted);
                        });
                    })];
            });
        });
    };
    LocalNotificationService.prototype.requestPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this._shouldRequestPermission) {
                    Promise.resolve(this._hasPermission);
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.plugins.notification.local.registerPermission(function (granted) {
                            _this._hasPermission = granted;
                            if (!granted) {
                                reject('You have no permission to send notification');
                                return;
                            }
                            resolve(granted);
                        });
                    })];
            });
        });
    };
    LocalNotificationService.prototype.showTextNotification = function (notification) {
    };
    LocalNotificationService.prototype.showNofification = function (notification, callback, error) {
        if (LocalNotificationService_1._notifications[notification.id]) {
            if (error) {
                error("You have already added the notification " + notification.id);
                return;
            }
        }
        // console.log('I am from showNotification');
        LocalNotificationService_1._notifications[notification.id] = {
            notification: notification,
            resolve: callback
        };
        cordova.plugins.notification.local.schedule(notification);
    };
    LocalNotificationService.prototype.getDefaults = function () {
        return cordova.plugins.notification.local.getDefaults();
    };
    LocalNotificationService._notifications = {};
    LocalNotificationService = LocalNotificationService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocalNotificationService);
    return LocalNotificationService;
    var LocalNotificationService_1;
}());
exports.LocalNotificationService = LocalNotificationService;
//# sourceMappingURL=local-notification.service.js.map

/***/ }),

/***/ "./src/app/services/nfc.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var deviceinfo_service_1 = __webpack_require__("./src/app/services/deviceinfo.service.ts");
var settings_service_1 = __webpack_require__("./src/app/services/settings.service.ts");
var security_utility_service_1 = __webpack_require__("./src/app/security/security-utility.service.ts");
var NfcService = /** @class */ (function () {
    function NfcService(_deviceInfo, _settings, _securityUtil) {
        this._deviceInfo = _deviceInfo;
        this._settings = _settings;
        this._securityUtil = _securityUtil;
        this._isNfcAvailable = false;
    }
    Object.defineProperty(NfcService.prototype, "IsNfcAvailable", {
        get: function () {
            return this._isNfcAvailable;
        },
        enumerable: true,
        configurable: true
    });
    NfcService.prototype.onStartup = function () {
    };
    NfcService.prototype.beginSession = function () {
        if (!this._deviceInfo.IsIOS) {
            return Promise.resolve();
        }
        return this.enabled().then(function () {
            nfc.beginSession(function () {
                return;
            }, function (err) {
                throw new Error('cann\'t start nfc session \r\n' + err);
            });
        });
    };
    NfcService.prototype.invalidateSession = function () {
        if (!this._deviceInfo.IsIOS) {
            return Promise.resolve();
        }
        return this.enabled().then(function () {
            nfc.invalidateSession(function () {
                return;
            }, function (err) {
                throw new Error('cann\'t start nfc session \r\n' + err);
            });
        });
    };
    NfcService.prototype.enabled = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            nfc.enabled(function () {
                _this._isNfcAvailable = true;
                resolve();
            }, function (err) {
                if (err === 'NO_NFC') {
                    _this._isNfcAvailable = false;
                }
                reject(err);
            });
        });
    };
    NfcService.prototype.share = function (data) {
        var _this = this;
        return this.beginSession()
            .then(function () {
            return _this._settings.IsAvailable;
        })
            .then(function () {
            var dt = JSON.stringify(data);
            console.log('share: ' + dt);
            dt = _this._securityUtil.Encode(dt);
            var message = [
                ndef.textRecord(_this._securityUtil.PublicKey, 'en-US', nfc.stringToBytes('sk')),
                ndef.mimeMediaRecord(_this._settings.NfcShareMime, nfc.stringToBytes(dt), nfc.stringToBytes('dt')),
                ndef.androidApplicationRecord(_this._settings.AndroidPackageName)
            ];
            nfc.share(message, function () {
                return;
            }, function (err) {
                throw new Error('can not share data \r\n' + err);
            });
        });
    };
    NfcService.prototype.unshare = function () {
        return this.beginSession().then(function () {
            nfc.unshare(function () {
                return;
            }, function (err) {
                throw new Error('Can not stop sharing \r\n ${err}');
            });
        });
    };
    NfcService.prototype.addTagDiscoveredListener = function (callback) {
        return this.beginSession().then(function () {
            nfc.addTagDiscoveredListener(function (event) {
                callback(event.tag);
            }, function () {
                return;
            }, function (err) {
                throw new Error('Error discovering tag \r\n ${err}');
            });
        });
    };
    NfcService.prototype.removeDiscoveredListener = function (callback) {
        return this.beginSession().then(function () {
            nfc.removeTagDiscoveredListener(function (event) {
                callback(event.tag);
            }, function () {
                return;
            }, function (err) {
                throw new Error('Error discovering tag \r\n ${err}');
            });
        });
    };
    NfcService.prototype.addMimeTypeListener = function (callback) {
        var _this = this;
        return this.beginSession()
            .then(this._settings.IsAvailable)
            .then(function () {
            nfc.addMimeTypeListener(_this._settings.NfcReadMime, function (event) {
                var payload = nfc.bytesToString(event.tag.ndefMessage[1].payload);
                var key = nfc.bytesToString(event.tag.ndefMessage[0].payload);
                var dt = _this._securityUtil.Decode(payload, key);
                try {
                    var js = JSON.parse(dt);
                    callback(js);
                    return;
                }
                catch (err) {
                    throw err;
                }
            });
        });
    };
    NfcService.prototype.removeMimeTypeListener = function (callback) {
        var _this = this;
        return this.beginSession()
            .then(this._settings.IsAvailable)
            .then(function () {
            nfc.removeMimeTypeListener(_this._settings.NfcReadMime, function (event) {
                callback(event.tag);
            }, function () {
                return;
            }, function (err) {
                throw err;
            });
        });
    };
    NfcService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof deviceinfo_service_1.DeviceinfoService !== "undefined" && deviceinfo_service_1.DeviceinfoService) === "function" && _a || Object, typeof (_b = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _b || Object, typeof (_c = typeof security_utility_service_1.SecurityUtilityService !== "undefined" && security_utility_service_1.SecurityUtilityService) === "function" && _c || Object])
    ], NfcService);
    return NfcService;
    var _a, _b, _c;
}());
exports.NfcService = NfcService;
//# sourceMappingURL=nfc.service.js.map

/***/ }),

/***/ "./src/app/services/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ANDROID_PATH_PREFEX = '/android_asset/www/';
var ProfileService = /** @class */ (function () {
    function ProfileService() {
        this._logedInUser = {
            Id: 1,
            Name: 'Bashir',
            FamilyName: 'Mahmoudi',
            DisplayName: 'Bashir Mahmoudi',
            Info: 'Developer',
            Gender: 'Male'
        };
    }
    Object.defineProperty(ProfileService.prototype, "UserDisplayName", {
        get: function () {
            return this._logedInUser ? this._logedInUser.DisplayName : 'Unknown';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileService.prototype, "UserInfo", {
        get: function () {
            return this._logedInUser ? this._logedInUser.Info : 'Unknown';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileService.prototype, "UserPicture", {
        get: function () {
            if (this._logedInUser && this._logedInUser.Picture) {
                return this._logedInUser.Picture;
            }
            if (cordova.platformId === 'android') {
                return this._logedInUser ? this._logedInUser.Gender === 'Female' ?
                    ANDROID_PATH_PREFEX + "assets/images/UnknownFemale.jpg" :
                    ANDROID_PATH_PREFEX + "assets/images/UnknownMale.png" :
                    ANDROID_PATH_PREFEX + "assets/images/UnknownMale.png";
            }
            return this._logedInUser ? this._logedInUser.Gender === 'Female' ?
                'assets/images/UnknownFemale.jpg' : 'assets/images/UnknownMale.png' : 'assets/images/UnknownMale.png';
        },
        enumerable: true,
        configurable: true
    });
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "./src/app/services/push-notification.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var PushNotificationService = /** @class */ (function () {
    function PushNotificationService() {
    }
    Object.defineProperty(PushNotificationService.prototype, "SenderId", {
        get: function () {
            return this._senderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PushNotificationService.prototype, "RegistrationId", {
        get: function () {
            return this._registrationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PushNotificationService.prototype, "Push", {
        get: function () {
            return this._push;
        },
        enumerable: true,
        configurable: true
    });
    PushNotificationService.prototype.onStart = function (senderId, options) {
        var _this = this;
        var android = {
            senderID: senderId
        };
        var ios = {};
        var browser = {};
        if (options) {
            if (options.icon) {
                android.icon = options.icon;
            }
            if (options.iconColor) {
                android.iconColor = options.iconColor;
            }
            if (options.sound) {
                android.sound = options.sound;
            }
            if (options.vibrate) {
                android.vibrate = options.vibrate;
            }
            if (options.clearBadge) {
                android.clearBadge = options.clearBadge;
            }
            if (options.clearNotifications) {
                android.clearNotifications = options.clearNotifications;
            }
            if (options.forceShow) {
                android.forceShow = options.forceShow;
            }
            if (options.topics) {
                android.topics = options.topics;
            }
            if (options.messageKey) {
                android.messageKey = options.messageKey;
            }
            if (options.titleKey) {
                android.titleKey = options.titleKey;
            }
            // Browser
            if (options.pushServiceURL) {
                browser.pushServiceURL = options.pushServiceURL;
            }
            if (options.applicationServerKey) {
                browser.applicationServerKey = options.applicationServerKey;
            }
            // Ios
            if (options.alert) {
                ios.alert = options.alert;
            }
            if (options.badge) {
                ios.badge = options.badge;
            }
            if (options.sound) {
                ios.sound = options.sound;
            }
            if (options.clearBadge) {
                ios.clearBadge = options.clearBadge;
            }
            // TODO:
            // if (options.categories) {
            //   ios.categories = options.categories;
            // }
            if (options.fcmSandbox) {
                ios.fcmSandbox = options.fcmSandbox;
            }
            if (options.topics) {
                ios.topics = options.topics;
            }
        }
        if (window.PushNotification) {
            this._push = PushNotification.init({
                android: android,
                ios: ios
            });
            this._push.on('registration', function (data) {
                console.log(data.registrationId);
                _this._registrationId = data.registrationId;
            });
        }
    };
    PushNotificationService.prototype.hasPermission = function (callback) {
        if (window.PushNotification) {
            PushNotification.hasPermission(function (data) {
                if (data.isEnabled) {
                    callback(data.isEnabled);
                }
                callback(false);
            });
        }
    };
    PushNotificationService.prototype.onNotification = function (callback, errorCallback) {
        if (this._push) {
            this._push.on('notification', function (data) {
                callback(data);
            });
            this._push.on('error', function (err) {
                if (errorCallback) {
                    errorCallback(err);
                }
            });
        }
    };
    PushNotificationService = __decorate([
        core_1.Injectable()
    ], PushNotificationService);
    return PushNotificationService;
}());
exports.PushNotificationService = PushNotificationService;
//# sourceMappingURL=push-notification.service.js.map

/***/ }),

/***/ "./src/app/services/settings.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this._defaults = {};
        this._constants = {};
    }
    Object.defineProperty(SettingsService.prototype, "NfcReadMime", {
        get: function () {
            return this._constants._nfc_read_mime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "NfcShareMime", {
        get: function () {
            return this._constants._nfc_share_mime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "AndroidPackageName", {
        get: function () {
            return this._constants._androidPackageName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "SenderId", {
        get: function () {
            return this._constants._senderId;
        },
        enumerable: true,
        configurable: true
    });
    SettingsService.prototype.OnStartup = function () {
        var _this = this;
        this.LoadConstants()
            .then(this.LoadDefaults)
            .then(this.LoadSettings)
            .then(function () {
            _this._is_loaded = true;
        });
    };
    SettingsService.prototype.LoadSettings = function () {
        return Promise.resolve(true);
    };
    SettingsService.prototype.LoadDefaults = function () {
        return Promise.resolve(true);
    };
    SettingsService.prototype.LoadConstants = function () {
        this._constants._nfc_read_mime = 'binary/rdt';
        this._constants._nfc_share_mime = 'binary/dt';
        this._constants._androidPackageName = 'com.minartco.mykondu';
        this._constants._senderId = '457453131702';
        return Promise.resolve(true);
    };
    SettingsService.prototype.IsAvailable = function () {
        var _this = this;
        if (this._is_loaded) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (_this._is_loaded) {
                    resolve();
                }
                else {
                    reject('Loading settings not loaded in 5s');
                }
            }, 5000);
        });
    };
    SettingsService = __decorate([
        core_1.Injectable()
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "./src/app/services/utility.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.Serialize = function (func) {
        return func.toString();
    };
    UtilityService.Deserialize = function (funStr) {
        var func = new Function('return ' + funStr)();
        return func;
    };
    UtilityService = __decorate([
        core_1.Injectable()
    ], UtilityService);
    return UtilityService;
}());
exports.UtilityService = UtilityService;
//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var core_2 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
document.addEventListener('deviceready', function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, [
        {
            defaultEncapsulation: core_2.ViewEncapsulation.None
        }
    ]).catch(function (err) { return console.log(err); });
}, false);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map