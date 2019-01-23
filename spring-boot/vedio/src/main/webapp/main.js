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



var routes = [];
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  \n</div>\n<app-movie></app-movie>\n\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MovieDialogComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_7__["MovieComponent"],
                _movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MovieDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    MovieService.prototype.getMovies = function (category, page) {
        var url = this.moviesUrl + "/search/category?category=" + encodeURIComponent(category) + "&page=" + page;
        return this.http.get(url);
    };
    MovieService.prototype.save = function (movie) {
        if (movie._links) {
            return this.http.put(movie._links.self.href, movie, this.httpOptions);
        }
        else {
            return this.http.post(this.moviesUrl, movie, this.httpOptions);
        }
    };
    MovieService.prototype.findById = function (movie) {
        var links = movie._links;
        var url = links.self.href;
        return this.http.get(url);
    };
    MovieService.prototype.deleteMovie = function (movie) {
        var links = movie._links;
        var url = links.self.href;
        return this.http.delete(url);
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

module.exports = ".item:nth-child(odd) {\r\n\tbackground-color: #f2f2f2;\r\n}\r\n\r\n.item {\r\n\twidth:100%;\r\n\tmargin:10px;\r\n}\r\n\r\n.item h2 {\r\n\tcolor:#136CB2;\r\n\tmargin-top:5px;\r\n\twidth: 100%;\r\n}\r\n\r\n.item h2 img {\r\n\tfloat:right;\r\n\twidth:16px;\r\n\theight:16px;\r\n\tmargin-right:16px;\r\n\tmargin-top:5px;\r\n\t\r\n}\r\n\r\n.toolbar {\r\n\tmargin:15px;\r\n}\r\n\r\n.toolbar a {\r\n\tmargin-left:2px;\r\n}\r\n\r\n.dlg {\r\n\twidth:100%;\r\n}\r\n\r\n.dlg label {\r\n\twidth:60px;\r\n\tfont: italic bold;\r\n\tcolor:#136CB2; \r\n}\r\n\r\n.container {\r\n\twidth:95%;\r\n\tpadding-left:10px;\r\n}\r\n\r\n.content {\r\n\twidth:95%;\r\n\tpadding-left:15px;\r\n}\r\n\r\n.content select {\r\n\tmargin-left:5px;\r\n}\r\n\r\n.content button {\r\n\tmargin-left:5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLFlBQVk7Q0FDWjs7QUFDRDtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlOztDQUVmOztBQUNEO0NBQ0MsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsV0FBVztDQUNYOztBQUNEO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbTpudGgtY2hpbGQob2RkKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLml0ZW0ge1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0bWFyZ2luOjEwcHg7XHJcbn1cclxuXHJcbi5pdGVtIGgyIHtcclxuXHRjb2xvcjojMTM2Q0IyO1xyXG5cdG1hcmdpbi10b3A6NXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pdGVtIGgyIGltZyB7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcblx0d2lkdGg6MTZweDtcclxuXHRoZWlnaHQ6MTZweDtcclxuXHRtYXJnaW4tcmlnaHQ6MTZweDtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxuXHRcclxufVxyXG4udG9vbGJhciB7XHJcblx0bWFyZ2luOjE1cHg7XHJcbn1cclxuXHJcbi50b29sYmFyIGEge1xyXG5cdG1hcmdpbi1sZWZ0OjJweDtcclxufVxyXG4uZGxnIHtcclxuXHR3aWR0aDoxMDAlO1xyXG59XHJcbi5kbGcgbGFiZWwge1xyXG5cdHdpZHRoOjYwcHg7XHJcblx0Zm9udDogaXRhbGljIGJvbGQ7XHJcblx0Y29sb3I6IzEzNkNCMjsgXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdHdpZHRoOjk1JTtcclxuXHRwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cdHdpZHRoOjk1JTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxufVxyXG4uY29udGVudCBzZWxlY3Qge1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4uY29udGVudCBidXR0b24ge1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<label>Category</label>\n\n<select [(ngModel)]=\"category\" (change)=\"updatePage(0)\" >\n<option *ngFor=\"let cat of categories\" >{{cat}}</option>\n</select>\n<button (click)=\"addMovie()\" title=\"Add\">+</button>\n</div>\n<div  *ngIf=\"currentPage\" class=\"container\" >\n<div  class=\"item\" *ngFor=\"let item of currentPage._embedded.movies\">\n<h2>{{item.title}}   <a href=\"#\" (click)=\"editMovie(item)\"><img title=\"Edit\"  src=\"images/edit.png\"  /></a>\n<a href=\"#\" (click)=\"deleteMovie(item)\"><img title=\"Delete\"  src=\"images/delete.png\"  /></a>\n</h2>\n<p>{{item.description}}</p>\n</div>\n\n<div class=\"toolbar\" *ngIf=\"currentPage && currentPage.page.totalPages  >1\" style=\"width:100%\">\n<a href=\"#\" title=\"First Page\" (click)=\"updatePage(0)\"> |&lt; </a>\n<a *ngIf=\"currentPage.page.number > 0\" title=\"Previos\" (click)=\"updatePage(currentPage.page.number  -1)\" href=\"#\"> &lt; </a>\n<a *ngIf=\"currentPage.page.number +1< currentPage.page.totalPages\" title=\"Next\" (click)=\"updatePage(currentPage.page.number  + 1)\" href=\"#\"> &gt; </a>\n<a href=\"#\" (click)=\"updatePage(currentPage.page.totalPages -1)\" title=\"Last\"> &gt;| </a>\n</div>\n<h6>Total Movies {{currentPage.page.totalElements}}  for {{category}}</h6>\n<h6>Page {{currentPage.page.number + 1}} Of {{currentPage.page.totalPages }}  for {{category}}</h6>\n</div>"

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






var MovieComponent = /** @class */ (function () {
    function MovieComponent(movieService, dialog) {
        this.movieService = movieService;
        this.dialog = dialog;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], MovieComponent);
    return MovieComponent;
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