webpackJsonp([1,4],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityService = (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getCities = function () {
        return this.http.get("/data/cities.json").toPromise().then(function (response) { return response.json(); });
    };
    CityService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CityService);
    return CityService;
    var _a;
}());
//# sourceMappingURL=city.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteAdviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteAdviceService = (function () {
    function RouteAdviceService(http) {
        this.http = http;
    }
    RouteAdviceService.prototype.getRouteAdvice = function (start, end) {
        return this.http.get("/routeAdvices/" + start + "/" + end).toPromise().then(function (response) { return response.json(); });
    };
    RouteAdviceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], RouteAdviceService);
    return RouteAdviceService;
    var _a;
}());
//# sourceMappingURL=route-advice.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 425;


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(576);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_city_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_route_advice_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* unused harmony export City */
/* unused harmony export RouteRequest */
/* unused harmony export RouteAdvice */
/* unused harmony export Waypoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var City = (function () {
    function City(name, latitude, longitude) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return City;
}());
var RouteRequest = (function () {
    function RouteRequest(startCity, endCity) {
        this.startCity = startCity;
        this.endCity = endCity;
    }
    return RouteRequest;
}());
//public OptimalRouteAdvice(List<String> waypoints, int timeDuration, int fuelCost, int timeCost, int pathCost) {
var RouteAdvice = (function () {
    function RouteAdvice(waypoints, timeDuration, fuelCost, pathCost) {
        this.waypoints = waypoints;
        this.timeDuration = timeDuration;
        this.fuelCost = fuelCost;
        this.pathCost = pathCost;
    }
    return RouteAdvice;
}());
var Waypoint = (function () {
    function Waypoint(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    return Waypoint;
}());
var AppRoutingComponent = (function () {
    function AppRoutingComponent(cityService, routeAdviceService) {
        this.cityService = cityService;
        this.routeAdviceService = routeAdviceService;
        // public startCity: City;
        // public endCity: City;
        this.model = new RouteRequest(new City('', '', ''), new City('', '', ''));
    }
    AppRoutingComponent.prototype.ngOnInit = function () {
        this.resetFormHack = true;
        this.showWaypoints = false;
        this.title = "Routing Application";
        //  this.cities = this.cityService.getCities().then(cities => this.cities = cities);
        this.cities = this.cityService.getCities();
        this.waypointCount = 0;
    };
    AppRoutingComponent.prototype.convert = function (waypoint) {
        var tup = waypoint.split("_");
        return new Waypoint(Number(tup[0]), Number(tup[1]));
    };
    AppRoutingComponent.prototype.convertCityToWaypoint = function (city) {
        return city.longitude + "_" + city.latitude;
    };
    AppRoutingComponent.prototype.reducePoints = function (w, index) {
        return (index % 4) == 0;
    };
    AppRoutingComponent.prototype.planRoute = function () {
        var _this = this;
        this.lat = this.model.startCity.latitude;
        this.lng = this.model.startCity.longitude;
        this.showSpinner = true;
        this.waypoints = this.routeAdviceService.getRouteAdvice(this.convertCityToWaypoint(this.model.startCity), this.convertCityToWaypoint(this.model.endCity)).then(function (routeAdvice) {
            _this.routeAdvice = routeAdvice;
            _this.showSpinner = false;
            // return routeAdvice.waypoints.map(w => this.convert(w)).filter(this.reducePoints);
            return routeAdvice.waypoints.map(function (w) { return _this.convert(w); });
        });
        //this.waypoints = Promise.resolve([{lat: '38.0', lng: '150.0'}, {lat: '47.0', lng: '-67.0'}]);
        console.log('Plan route with', this.convertCityToWaypoint(this.model.startCity), this.convertCityToWaypoint(this.model.endCity));
        this.model = new RouteRequest(new City('', '', ''), new City('', '', ''));
        this.resetFormHack = false;
        setTimeout(function () { return _this.resetFormHack = true; }, 0);
    };
    AppRoutingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-routing',
            template: __webpack_require__(641),
            styles: [__webpack_require__(636)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_city_service__["a" /* CityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_city_service__["a" /* CityService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_route_advice_service__["a" /* RouteAdviceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_route_advice_service__["a" /* RouteAdviceService */]) === 'function' && _b) || Object])
    ], AppRoutingComponent);
    return AppRoutingComponent;
    var _a, _b;
}());
//# sourceMappingURL=app-routing.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(642),
            styles: [__webpack_require__(637)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_city_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_route_advice_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test_test_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_component__["a" /* AppRoutingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__test_test_component__["a" /* TestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyA-XiHqcr56619BrW1PZYzaTFnXVaMT6PY'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_city_service__["a" /* CityService */], __WEBPACK_IMPORTED_MODULE_6__services_route_advice_service__["a" /* RouteAdviceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(643),
            styles: [__webpack_require__(638)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\n  height: 500px;\n}\n\n.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n\nhtml, body, material-app, md-sidenav-container, .my-content {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.example-sidenav-fab-container {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.example-sidenav-fab-container md-sidenav {\n  max-width: 200px;\n}\n\n.example-sidenav-fab-container .md-sidenav-content,\n.example-sidenav-fab-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: visible;\n}\n\n.example-scrolling-content {\n  overflow: auto;\n\n}\n\n.divmap {\n\n}\n.green-spinner {\n  height: 50px;\n  width: 50px;\n  margin-left: 50px;\n}\n\n.example-fab {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"example-sidenav-fab-container\">\n  <md-sidenav #sidenav mode=\"side\" opened=\"false\">\n    <md-card>\n      <form *ngIf=\"resetFormHack\" (ngSubmit)=\"planRoute()\" #routeForm=\"ngForm\">\n        <p><md-select id=\"start\" required [(ngModel)]=\"model.startCity\" name=\"startCity\" #startCitySpy #startCity=\"ngModel\" placeholder=\"Start\"><md-option *ngFor=\"let city of cities | async\" [value]=\"city\">{{city.name}}</md-option></md-select>{{startCitySpy.className}}</p>\n        <p><md-select id=\"end\" required [(ngModel)]=\"model.endCity\" name=\"endCity\" #endCitySpy #endCity=\"ngModel\"  placeholder=\"End\"><md-option *ngFor=\"let city of cities | async\" [value]=\"city\">{{city.name}}</md-option></md-select>{{endCitySpy.className}}</p>\n        <p><button md-raised-button [disabled]=\"!routeForm.form.valid || startCity.pristine  || endCity.pristine\" >Plan Route</button></p>\n      </form>\n    </md-card>\n    <div class=\"example-scrolling-content\">\n      <h4>Waypoints</h4>\n      <md-spinner color=\"accent\" class=\"green-spinner\" *ngIf=\"showSpinner\"></md-spinner>\n      <p *ngFor=\"let waypoint of realWaypoints | async\">Lat:&nbsp;{{waypoint.latitude}}&nbsp;Long:&nbsp;{{waypoint.longitude}}</p>\n    </div>\n  </md-sidenav>\n  <md-toolbar color=\"primary\">\n    <button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><md-icon>+</md-icon></button>&nbsp;&nbsp;\n    Martin's Routing Application<md-spinner color=\"accent\" class=\"green-spinner\" *ngIf=\"showSpinner\"></md-spinner>\n  </md-toolbar>\n  <md-card class=\"divmap\">\n    <sebm-google-map [latitude]=\"0\" [longitude]=\"0\" [zoom]=\"3\">\n      <sebm-google-map-marker  *ngFor=\"let waypoint of realWaypoints | async\" [latitude]=\"waypoint.latitude\" [longitude]=\"waypoint.longitude\"></sebm-google-map-marker>\n    </sebm-google-map>\n  </md-card>\n</md-sidenav-container>\n"

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<app-routing></app-routing>\n"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(426);


/***/ })

},[692]);
//# sourceMappingURL=main.bundle.js.map