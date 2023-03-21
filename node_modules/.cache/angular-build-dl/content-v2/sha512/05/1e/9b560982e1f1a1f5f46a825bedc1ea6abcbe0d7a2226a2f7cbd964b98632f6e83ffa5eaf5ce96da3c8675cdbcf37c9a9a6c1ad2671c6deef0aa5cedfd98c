(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs (ionTabsWillChange)=\"tabChange($event)\">\n\n  <ion-fab vertical=\"bottom\" (click)=\"home()\" horizontal=\"center\" translucent=\"true\">\n    <ion-fab-button>\n      <img src=\"assets/imgs/add.png\" style=\"width: 21px;\">\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n    <ion-tab-button tab=\"expenses\">\n      <ion-icon name=\"bar-chart\"></ion-icon>\n      <ion-label>Expenses</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"wallet\">\n      <ion-icon name=\"wallet\"></ion-icon>\n      <ion-label>Wallet</ion-label>\n    </ion-tab-button>\n\n\n    <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"red\" fill-rule=\"evenodd\">\n      </path>\n    </svg>\n\n    <ion-tab-button tab=\"notification\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Notification</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-circle\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button> -->\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'expenses',
                loadChildren: () => __webpack_require__.e(/*! import() | expense-expense-module */ "expense-expense-module").then(__webpack_require__.bind(null, /*! ../expense/expense.module */ "./src/app/pages/expense/expense.module.ts")).then(m => m.ExpensePageModule)
            },
            {
                path: 'wallet',
                loadChildren: () => __webpack_require__.e(/*! import() | wallet-wallet-module */ "wallet-wallet-module").then(__webpack_require__.bind(null, /*! ../wallet/wallet.module */ "./src/app/pages/wallet/wallet.module.ts")).then(m => m.WalletPageModule)
            },
            {
                path: 'notification',
                loadChildren: () => __webpack_require__.e(/*! import() | notification-notification-module */ "notification-notification-module").then(__webpack_require__.bind(null, /*! ../notification/notification.module */ "./src/app/pages/notification/notification.module.ts")).then(m => m.NotificationPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tabs ion-fab {\n  margin-bottom: env(safe-area-inset-bottom);\n  /* fix notch ios*/\n}\nion-tabs ion-fab ion-fab-button {\n  --box-shadow: none;\n}\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: var(--ion-color-light);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\nion-tabs ion-tab-bar ion-tab-button {\n  --background: var(--ion-color-light);\n}\nion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\nion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\nion-tabs ion-tab-bar svg {\n  width: 72px;\n  margin-top: 19px;\n}\nion-tabs ion-tab-bar svg path {\n  fill: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBDQUFBO0VBQTRDLGlCQUFBO0FBQ3BEO0FBQVE7RUFDSSxrQkFBQTtBQUVaO0FBQ0k7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ1I7QUFBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQUVaO0FBQVE7RUFDSSxvQ0FBQTtBQUVaO0FBQVE7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0FBRVo7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFFWjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBRVo7QUFEWTtFQUNJLDRCQUFBO0FBR2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWJzIHtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pOyAvKiBmaXggbm90Y2ggaW9zKi9cbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgLS1ib3JkZXI6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRhYi1idXR0b24uY29tbWVudHMge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTlweDtcbiAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let TabsPage = class TabsPage {
    constructor(router) {
        this.router = router;
    }
    tabChange(eve) {
        console.log(eve.tab);
        this.tabID = eve.tab;
    }
    home() {
        this.router.navigate(['tabs']);
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map