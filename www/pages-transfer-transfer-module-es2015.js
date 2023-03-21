(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transfer-transfer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfer/transfer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfer/transfer.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n      <ion-button (click)=\"goBack()\" fill=\"clear\" slot=\"start\">\n          <ion-icon name=\"arrow-back\" style=\"font-size: 26px;color: black\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n      <ion-label class=\"welcome_lbl\">Money Transfer</ion-label>\n\n      <ion-label class=\"title_lbl\">Send Money to</ion-label>\n\n      <ion-slides mode=\"ios\" scrollbar=\"ios\" [options]=\"slideOpts\" class=\"user_slider\">\n          <ion-slide *ngFor=\"let item of users\">\n              <div class=\"slide_div\">\n                  <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item.image +')'\"></div>\n                  <ion-label class=\"username\">Jonh <br> Doe</ion-label>\n              </div>\n          </ion-slide>\n      </ion-slides>\n\n      <div [style.backgroundImage]=\"'url(assets/imgs/users/user12.jpg)'\" class=\"user_back\"></div>\n\n     \n      <ion-label class=\"title_lbl\">Bank Detail</ion-label>\n      <ion-select value=\"peperoni\" multiple=\"true\" placeholder=\"Select Bank\">\n        <ion-select-option value=\"HDFC\">HDFC</ion-select-option>\n        <ion-select-option value=\"ICICI\">ICICI</ion-select-option>\n        <ion-select-option value=\"Mahindra Kokal\">Mahindra Kokal</ion-select-option>\n        <ion-select-option value=\"SBI\">SBI</ion-select-option>\n      </ion-select>\n\n      <ion-label class=\"title_lbl\">Account Detail</ion-label>\n     \n      <ion-item>\n          <ion-label position=\"floating\">Enter Account No</ion-label>\n          <ion-input [(ngModel)]=\"accNo\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Confirm Account No</ion-label>\n          <ion-input [(ngModel)]=\"confirmAccNo\"></ion-input>\n      </ion-item>\n\n      <ion-label class=\"title_lbl\">Amount Detail</ion-label>\n\n      <ion-item>\n          <ion-label position=\"floating\">Amout</ion-label>\n          <ion-input [(ngModel)]=\"amount\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"block\">\n          Send Money\n      </ion-button>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/transfer/transfer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/transfer/transfer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TransferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageRoutingModule", function() { return TransferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfer.page */ "./src/app/pages/transfer/transfer.page.ts");




const routes = [
    {
        path: '',
        component: _transfer_page__WEBPACK_IMPORTED_MODULE_3__["TransferPage"]
    }
];
let TransferPageRoutingModule = class TransferPageRoutingModule {
};
TransferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransferPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/transfer/transfer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/transfer/transfer.module.ts ***!
  \***************************************************/
/*! exports provided: TransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfer-routing.module */ "./src/app/pages/transfer/transfer-routing.module.ts");
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer.page */ "./src/app/pages/transfer/transfer.page.ts");







let TransferPageModule = class TransferPageModule {
};
TransferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransferPageRoutingModule"]
        ],
        declarations: [_transfer_page__WEBPACK_IMPORTED_MODULE_6__["TransferPage"]]
    })
], TransferPageModule);



/***/ }),

/***/ "./src/app/pages/transfer/transfer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/transfer/transfer.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n  padding-top: 30px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .welcome_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .title_lbl {\n  font-family: \"semi-bold\";\n  font-size: 16px;\n  margin-top: 20px;\n}\n.main_content_div ion-select {\n  --padding-start: 0px;\n  margin-top: 10px;\n}\n.main_content_div .user_slider {\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\n.main_content_div .user_slider ion-slide {\n  margin-right: 16px;\n}\n.main_content_div .user_slider ion-slide .slide_div {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  width: 100%;\n}\n.main_content_div .user_slider ion-slide .slide_div .back_image {\n  height: 50px;\n  width: 50px;\n  border-radius: 10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.main_content_div .user_slider ion-slide .slide_div ion-label {\n  color: #77869E;\n  font-size: 13px;\n  margin-top: 10px;\n  font-family: \"medium\";\n}\n.main_content_div .user_slider ion-slide .slide_div .username {\n  word-wrap: break-word;\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n  margin-top: 16px;\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n  width: 200px;\n  display: block;\n  margin: auto;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhbnNmZXIvdHJhbnNmZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBQVI7QUFHSTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBR1k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRGhCO0FBR2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQURwQjtBQUlnQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUZwQjtBQUtnQjtFQUNJLHFCQUFBO0FBSHBCO0FBV0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBVFI7QUFjSTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVpSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhbnNmZXIvdHJhbnNmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAud2VsY29tZV9sYmwge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICB9XG5cbiAgICAudGl0bGVfbGJsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC51c2VyX3NsaWRlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgLnNsaWRlX2RpdiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAgICAgICAgICAgICAuYmFja19pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIFxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/transfer/transfer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/transfer/transfer.page.ts ***!
  \*************************************************/
/*! exports provided: TransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPage", function() { return TransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let TransferPage = class TransferPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOpts = {
            slidesPerView: 3.2
        };
        this.accNo = 'XXXXXXXX1234';
        this.confirmAccNo = 'XXXXXXXX1234';
        this.amount = 5000;
        this.users = [
            {
                image: 'assets/imgs/users/user2.jpg',
                name: ''
            },
            {
                image: 'assets/imgs/users/user3.jpg',
                name: ''
            },
            {
                image: 'assets/imgs/users/user4.jpg',
                name: ''
            },
            {
                image: 'assets/imgs/users/user5.jpg',
                name: ''
            },
            {
                image: 'assets/imgs/users/user6.jpg',
                name: ''
            },
            {
                image: 'assets/imgs/users/user7.jpg',
                name: ''
            },
        ];
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
TransferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
TransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transfer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfer/transfer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transfer.page.scss */ "./src/app/pages/transfer/transfer.page.scss")).default]
    })
], TransferPage);



/***/ })

}]);
//# sourceMappingURL=pages-transfer-transfer-module-es2015.js.map