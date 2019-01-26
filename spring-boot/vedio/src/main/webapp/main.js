(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var ApiService = /** @class */ (function () {
    function ApiService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.moviesUrl = "/api/auth";
        this.authenticated = false;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json'
            })
        };
    }
    ApiService.prototype.login = function (payload) {
        return this.http.post(this.moviesUrl, payload, this.httpOptions);
    };
    ApiService.prototype.validateToken = function () {
        var token = window.localStorage.getItem('token');
        var object = this.jwtHelper.decodeToken(token);
        this.roles = object.roles;
    };
    ApiService.prototype.hasRole = function (rolename) {
        return this.roles && this.roles.includes(rolename);
    };
    ApiService.prototype.isAuthenticated = function () {
        return window.localStorage.getItem('token') != null;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");







var routes = [
    { path: 'movies',
        component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_3__["MovieComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'signin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  \n</div>\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.title = 'movies';
        router.navigate(['signin']);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-dialog/movie-dialog.component */ "./src/app/movie-dialog/movie-dialog.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");















function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MovieDialogComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_7__["MovieComponent"],
                _movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MovieDialogComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['example.com'],
                        blacklistedRoutes: ['example.com/examplebadroute/']
                    }
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._authService.isAuthenticated()) {
            return true;
        }
        // navigate to login page
        this._router.navigate(['/signin']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\r\n\tcolor:red;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDViIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG5cdGNvbG9yOnJlZDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-6 login-container\">\n    <h2 style=\"margin: auto\">Login </h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" autocomplete=\"off\">\n        <div class=\"error\" *ngIf=\"loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched\">Username is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\" autocomplete=\"off\">\n        <div class=\"error\" *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">Password is required</div>\n      </div>\n      <button class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">Login</button>\n\t  \n      <div *ngIf=\"invalidLogin\" class=\"error\">\n        <div>Invalid credentials.</div>\n      </div>\n    </form>\n\t<a routerLink=\"../signup\">Signup</a>\n\t<section>\n\tOnly user admin or ROLE_ADMIN roles  can delete the movie.\n\tOther users cannot delete the movie neither on frontend nor backend\n\t</section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        var payload = { "username": this.loginForm.controls.username.value, "password": this.loginForm.controls.password.value };
        this.apiService.login(payload).subscribe(function (data) {
            window.localStorage.setItem('token', data.token);
            _this.apiService.validateToken();
            _this.router.navigate(['movies']);
        }, function (err) {
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        window.localStorage.removeItem('token');
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/movie-dialog/movie-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-dialog/movie-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container app-movie-dialog .dlg {\r\n\twidth:100%;\r\n}\r\n.mat-dialog-container app-movie-dialog .dlg label {\r\n\twidth:60px;\r\n\tfont: italic bold;\r\n\tcolor:#136CB2; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGlhbG9nL21vdmllLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYO0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRpYWxvZy9tb3ZpZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciBhcHAtbW92aWUtZGlhbG9nIC5kbGcge1xyXG5cdHdpZHRoOjEwMCU7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIGFwcC1tb3ZpZS1kaWFsb2cgLmRsZyBsYWJlbCB7XHJcblx0d2lkdGg6NjBweDtcclxuXHRmb250OiBpdGFsaWMgYm9sZDtcclxuXHRjb2xvcjojMTM2Q0IyOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/movie-dialog/movie-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-dialog/movie-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (submit)=\"onSubmit()\">\n<h1 mat-dialog-title>Movie</h1>\n<div mat-dialog-content>\n<div cllass=\"dlg\">\n  <label style=\"width:100px;  display:inline-block;color:#136CB2;\" for=\"title\">Title *</label>\n  <mat-form-field style=\"width:250px;\">\n    <input style=\"width:250px;\" formControlName=\"title\"  id=\"title\" matInput [(ngModel)]=\"data.movie.title\">\n\t <div class=\"error\" style=\"color:red;height:10px;display:inline-block;\" *ngIf=\"loginForm.controls['title'].hasError('required') && loginForm.controls['title'].touched\">Title is required</div>\n      \n  </mat-form-field>\n  </div>\n  <div>\n  <div cllass=\"dlg\">\n  <label style=\"width:100px;  display:inline-block;color:#136CB2;\" for=\"description\">Description</label>\n  <mat-form-field style=\"width:250px;\">\n  <textarea formControlName=\"description\" style=\"width:250px;\" id=\"description\" matInput [(ngModel)]=\"data.movie.description\" style=\"border:solid 1px;vertical-align: top;\" rows=\"4\"></textarea>\n  <div class=\"error\" style=\"color:red;height:10px;display:inline-block;\" *ngIf=\"loginForm.controls['description'].hasError('required') && loginForm.controls['description'].touched\">Description is required</div>  \n  </mat-form-field>\n  </div>\n  <div cllass=\"dlg\">\n  <label style=\"width:100px;  display:inline-block;color:#136CB2;\">Category</label>\n\t{{data.movie.category}}\n</div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n  <input type=\"submit\" mat-button  cdkFocusInitial value=\"Save\"/>\n</div>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/movie-dialog/movie-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-dialog/movie-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDialogComponent", function() { return MovieDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");





var MovieDialogComponent = /** @class */ (function () {
    function MovieDialogComponent(dialogRef, data, movieService, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.movieService = movieService;
        this.formBuilder = formBuilder;
    }
    MovieDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MovieDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        this.movieService.save(this.data.movie).subscribe(function (r) {
            _this.data.save = true;
            _this.dialogRef.close();
        });
    };
    MovieDialogComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    MovieDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-dialog',
            template: __webpack_require__(/*! ./movie-dialog.component.html */ "./src/app/movie-dialog/movie-dialog.component.html"),
            styles: [__webpack_require__(/*! ./movie-dialog.component.css */ "./src/app/movie-dialog/movie-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], MovieDialogComponent);
    return MovieDialogComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.moviesUrl = "/api/movies";
    }
    MovieService.prototype.getMovies = function (category, page) {
        var url = this.moviesUrl + "/search/category?category=" + encodeURIComponent(category) + "&page=" + page;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })
        };
        return this.http.get(url, httpOptions);
    };
    MovieService.prototype.save = function (movie) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            })
        };
        if (movie._links) {
            return this.http.put(movie._links.self.href, movie, httpOptions);
        }
        else {
            return this.http.post(this.moviesUrl, movie, httpOptions);
        }
    };
    MovieService.prototype.findById = function (movie) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })
        };
        var links = movie._links;
        var url = links.self.href;
        return this.http.get(url, httpOptions);
    };
    MovieService.prototype.deleteMovie = function (movie) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })
        };
        var links = movie._links;
        var url = links.self.href;
        return this.http.delete(url, httpOptions);
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movie/movie-page.ts":
/*!*************************************!*\
  !*** ./src/app/movie/movie-page.ts ***!
  \*************************************/
/*! exports provided: Self, Links, Movie, Embedded, Page, MoviePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Self", function() { return Self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embedded", function() { return Embedded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePage", function() { return MoviePage; });
var Self = /** @class */ (function () {
    function Self() {
    }
    return Self;
}());

var Links = /** @class */ (function () {
    function Links() {
    }
    return Links;
}());

var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());

var Embedded = /** @class */ (function () {
    function Embedded() {
    }
    return Embedded;
}());

var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());

var MoviePage = /** @class */ (function () {
    function MoviePage() {
    }
    return MoviePage;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item:nth-child(odd) {\r\n\tbackground-color: #f2f2f2;\r\n}\r\n\r\n.item {\r\n\twidth:100%;\r\n\tmargin:10px;\r\n}\r\n\r\n.item h2 {\r\n\tcolor:#136CB2;\r\n\tmargin-top:5px;\r\n\twidth: 100%;\r\n}\r\n\r\n.item h2 img {\r\n\tfloat:right;\r\n\twidth:16px;\r\n\theight:16px;\r\n\tmargin-right:16px;\r\n\tmargin-top:5px;\r\n\t\r\n}\r\n\r\n.toolbar {\r\n\tmargin:15px;\r\n}\r\n\r\n.toolbar a {\r\n\tmargin-left:2px;\r\n}\r\n\r\n.dlg {\r\n\twidth:100%;\r\n}\r\n\r\n.dlg label {\r\n\twidth:60px;\r\n\tfont: italic bold;\r\n\tcolor:#136CB2; \r\n}\r\n\r\n.container {\r\n\twidth:95%;\r\n\tpadding-left:10px;\r\n}\r\n\r\n.content {\r\n\twidth:95%;\r\n\tpadding-left:15px;\r\n}\r\n\r\n.content select {\r\n\tmargin-left:5px;\r\n}\r\n\r\n.content button {\r\n\tmargin-left:5px;\r\n}\r\n\r\na {\t\r\n\tcolor: blue;\r\ntext-decoration: underline;\t\r\n}\r\n\r\na:hover {\r\ncursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLFlBQVk7Q0FDWjs7QUFDRDtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlOztDQUVmOztBQUNEO0NBQ0MsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsV0FBVztDQUNYOztBQUNEO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLFlBQVk7QUFDYiwyQkFBMkI7Q0FDMUI7O0FBQ0Q7QUFDQSxnQkFBZ0I7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbTpudGgtY2hpbGQob2RkKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLml0ZW0ge1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0bWFyZ2luOjEwcHg7XHJcbn1cclxuXHJcbi5pdGVtIGgyIHtcclxuXHRjb2xvcjojMTM2Q0IyO1xyXG5cdG1hcmdpbi10b3A6NXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pdGVtIGgyIGltZyB7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcblx0d2lkdGg6MTZweDtcclxuXHRoZWlnaHQ6MTZweDtcclxuXHRtYXJnaW4tcmlnaHQ6MTZweDtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxuXHRcclxufVxyXG4udG9vbGJhciB7XHJcblx0bWFyZ2luOjE1cHg7XHJcbn1cclxuXHJcbi50b29sYmFyIGEge1xyXG5cdG1hcmdpbi1sZWZ0OjJweDtcclxufVxyXG4uZGxnIHtcclxuXHR3aWR0aDoxMDAlO1xyXG59XHJcbi5kbGcgbGFiZWwge1xyXG5cdHdpZHRoOjYwcHg7XHJcblx0Zm9udDogaXRhbGljIGJvbGQ7XHJcblx0Y29sb3I6IzEzNkNCMjsgXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdHdpZHRoOjk1JTtcclxuXHRwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cdHdpZHRoOjk1JTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxufVxyXG4uY29udGVudCBzZWxlY3Qge1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4uY29udGVudCBidXR0b24ge1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG5hIHtcdFxyXG5cdGNvbG9yOiBibHVlO1xyXG50ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcdFxyXG59XHJcbmE6aG92ZXIge1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<label>Category</label>\n\n<select [(ngModel)]=\"category\" (change)=\"updatePage(0)\" >\n<option *ngFor=\"let cat of categories\" >{{cat}}</option>\n</select>\n<button (click)=\"addMovie()\" title=\"Add\">+</button>\n<a routerLink=\"../signin\" style=\"float:right;\">Logout</a>\n</div>\n<div  *ngIf=\"currentPage\" class=\"container\" >\n<div  class=\"item\" *ngFor=\"let item of currentPage._embedded.movies\">\n<h2>{{item.title}}   <a  (click)=\"editMovie(item)\"><img title=\"Edit\"  src=\"images/edit.png\"  /></a>\n<a   *ngIf=\"apiService.hasRole('ROLE_ADMIN')\" (click)=\"deleteMovie(item)\"><img title=\"Delete\"  src=\"images/delete.png\"  /></a>\n</h2>\n<p>{{item.description}}</p>\n</div>\n\n<div class=\"toolbar\" *ngIf=\"currentPage && currentPage.page.totalPages  >1\" style=\"width:100%\">\n<a  title=\"First Page\" (click)=\"updatePage(0)\"> |&lt; </a>\n<a *ngIf=\"currentPage.page.number > 0\" title=\"Previos\" (click)=\"updatePage(currentPage.page.number  -1)\" > &lt; </a>\n<a *ngIf=\"currentPage.page.number +1< currentPage.page.totalPages\" title=\"Next\" (click)=\"updatePage(currentPage.page.number  + 1)\" > &gt; </a>\n<a  (click)=\"updatePage(currentPage.page.totalPages -1)\" title=\"Last\"> &gt;| </a>\n</div>\n<h6>Total Movies {{currentPage.page.totalElements}}  for {{category}}</h6>\n<h6>Page {{currentPage.page.number + 1}} Of {{currentPage.page.totalPages }}  for {{category}}</h6>\n</div>"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _movie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-page */ "./src/app/movie/movie-page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie-dialog/movie-dialog.component */ "./src/app/movie-dialog/movie-dialog.component.ts");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");







var MovieComponent = /** @class */ (function () {
    function MovieComponent(movieService, dialog, apiService) {
        this.movieService = movieService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.category = "Action";
        this.categories = ["Action", "Comedy", "Horror", "Thriller"];
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies(this.category, 0).subscribe(function (u) {
            _this.currentPage = u;
        });
    };
    MovieComponent.prototype.updatePage = function (index) {
        var _this = this;
        this.movieService.getMovies(this.category, index).subscribe(function (u) {
            _this.currentPage = u;
            console.log("Users: " + u);
        });
    };
    MovieComponent.prototype.addMovie = function () {
        var _this = this;
        this.movie = new _movie_page__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
        this.movie.category = this.category;
        var data_ = { 'save': false, 'movie': this.movie };
        var dialogRef = this.dialog.open(_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MovieDialogComponent"], {
            width: '800px',
            data: data_
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed ' + JSON.stringify(result));
            if (data_.save) {
                _this.updatePage(_this.currentPage.page.number);
                /*this.movieService.save(result.movie).subscribe(r=>{
                
               });*/
            }
        });
    };
    MovieComponent.prototype.editMovie = function (movie) {
        var _this = this;
        this.movieService.findById(movie).subscribe(function (m) {
            _this.movie = m;
            _this.movie.category = _this.category;
            var data_ = { 'save': false, 'movie': _this.movie };
            var dialogRef = _this.dialog.open(_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MovieDialogComponent"], {
                width: '800px',
                data: data_
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed ' + JSON.stringify(result));
                if (data_.save) {
                    _this.updatePage(_this.currentPage.page.number);
                    /*this.movieService.save(result.movie).subscribe(r=>{
                    
                        });*/
                }
            });
        });
    };
    MovieComponent.prototype.handleAfterExecutionSuccess = function (data) {
        this.updatePage(this.currentPage.page.number);
    };
    MovieComponent.prototype.deleteMovie = function (movie) {
        var _this = this;
        if (confirm("Are you sure you want to delete the Movie: " + encodeURIComponent(movie.title) + " ?")) {
            this.movieService.deleteMovie(movie).subscribe(function (m) {
                _this.updatePage(_this.currentPage.page.number);
            });
        }
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _api_service_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.userExistsUrl = "/api/users/search/userExists?username=";
    }
    RegisterService.prototype.userExists = function (username) {
        return this.http.get(this.userExistsUrl + encodeURIComponent(username));
    };
    RegisterService.prototype.save = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("/api/users/", user, httpOptions);
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\r\ncolor : red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFlBQVk7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG5jb2xvciA6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-6 signup-container\">\n    <h2 style=\"margin: auto\">Signup </h2>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\" [disabled]=\"saved\" class=\"form-control\" formControlName=\"username\" id=\"username\" autocomplete=\"off\">\n        <div class=\"error\" *ngIf=\"registerForm.controls['username'].hasError('required') && registerForm.controls['username'].touched\">Username is required</div>\n\t\t<div class=\"error\" *ngIf=\"registerForm.controls['username'].hasError('username') && registerForm.controls['username'].touched\">Username is Already taken</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" [disabled]=\"saved\" formControlName=\"password\" id=\"pwd\" autocomplete=\"off\">\n        <div class=\"error\" *ngIf=\"registerForm.controls['password'].hasError('required') && registerForm.controls['password'].touched\">Password is required</div>\n      </div>\n      <button class=\"btn btn-success\" [disabled]=\"registerForm.invalid\">Register</button>\n\t  \n      <div *ngIf=\"internalError\" class=\"error\">\n        <div>Internal Error</div>\n      </div>\n    </form>\n\t<a routerLink=\"../signin\">Signin</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, registerservice) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.registerservice = registerservice;
        this.invalidLogin = false;
        this.saved = false;
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.registerForm.invalid) {
            return;
        }
        var user = new _user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.username = this.registerForm.controls.username.value;
        user.password = this.registerForm.controls.password.value;
        // this.router.navigate(['signin']);
        this.registerservice.save(user).subscribe(function (u) {
            _this.saved = true;
            alert("User: " + user.username + " is registered now. You can login safely");
            _this.router.navigate(['signin']);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.saved = false;
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                this.validateUsernameNotTaken.bind(this)
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RegisterComponent.prototype.validateUsernameNotTaken = function (control) {
        return this.registerservice.userExists(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res ? { username: true } : null;
        }));
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shadi\movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map