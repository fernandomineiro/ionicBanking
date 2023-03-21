(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n      <ion-button (click)=\"goBack()\" fill=\"clear\" slot=\"start\">\n          <ion-icon name=\"arrow-back\" style=\"font-size: 26px;color: black\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    \n<div class=\"main_content_div\">\n\n    <ion-label class=\"welcome_lbl\">Payment</ion-label>\n\n    <ion-label class=\"amount_lbl\">Amount Payable <span>Rs. 2000</span></ion-label>\n    \n\n    <div class=\"flex_div\" (click)=\"payID = 1\">\n        <div class=\"round_div\">\n            <img src=\"assets/imgs/home_active.png\">\n        </div>\n        <ion-label>Net Banking</ion-label>\n    </div>\n\n    <div class=\"content_div\" *ngIf=\"payID == 1\">\n        <ion-button expand=\"block\" (click)=\"goToSuccess()\">\n            Pay using Net Banking\n        </ion-button>\n    </div>\n\n    <div class=\"flex_div\" (click)=\"payID = 2\">\n        <div class=\"round_div\">\n            <img src=\"assets/imgs/home_active.png\">\n        </div>\n        <ion-label>Bank Transfer</ion-label>\n    </div>\n\n    <div class=\"content_div\" *ngIf=\"payID == 2\">\n        <ion-button expand=\"block\" (click)=\"goToSuccess()\">\n            Pay using Bank Transfer\n        </ion-button>\n    </div>\n\n    <div class=\"flex_div\" (click)=\"payID = 3\">\n        <div class=\"round_div\">\n            <img src=\"assets/imgs/home_active.png\">\n        </div>\n        <ion-label>Enter UPI ID</ion-label>\n    </div>\n\n    <div class=\"content_div\" *ngIf=\"payID == 3\">\n        <ion-item>\n            <ion-label position=\"floating\">Enter UPI ID</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" (click)=\"goToSuccess()\">\n            Pay\n        </ion-button>\n    </div>\n\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n  padding-top: 30px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .welcome_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 20px;\n}\n.main_content_div .amount_lbl {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.main_content_div .flex_div .round_div {\n  border: 1px solid lightgrey;\n  width: 48px;\n  height: 48px;\n  border-radius: 100%;\n  position: relative;\n}\n.main_content_div .flex_div .round_div img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div .flex_div ion-label {\n  margin-left: 16px;\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n}\n.main_content_div .content_div {\n  margin-left: 60px;\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n  display: block;\n  margin: auto;\n  margin-bottom: 30px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFHSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFJUTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRlo7QUFJWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUZoQjtBQUtRO0VBQ0ksaUJBQUE7QUFIWjtBQU9JO0VBQ0ksb0JBQUE7QUFMUjtBQVFJO0VBQ0ksaUJBQUE7QUFOUjtBQVNJO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVBSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAud2VsY29tZV9sYmwge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuYW1vdW50X2xibCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuZmxleF9kaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAucm91bmRfZGl2IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICB9XG5cbiAgICAuY29udGVudF9kaXYge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PaymentPage = class PaymentPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.payID = 1;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    goToSuccess() {
        this.router.navigate(['/success']);
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map