(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar style=\"--background: var(--ion-color-primary)\">\n    <ion-title style=\"color: white;letter-spacing: 1px;font-family: 'semi-bold';\">Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-label class=\"title_lbl\">All Notification</ion-label>\n        <div class=\"notification_div\" *ngFor=\"let item of list\">\n            <div class=\"round_div\">\n                <ion-icon name=\"{{item.icn}}\"></ion-icon>        \n            </div>\n            <div class=\"content_div\">\n                <ion-label>{{item.text}}</ion-label>\n            </div>\n        </div>\n        \n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/notification/notification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/notification/notification-routing.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "./src/app/pages/notification/notification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-primary);\n}\n\n.main_content_div {\n  background: white;\n  width: 100%;\n  min-height: 100%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\n.main_content_div ion-label {\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .title_lbl {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n  padding: 16px;\n}\n\n.main_content_div .notification_div {\n  margin-bottom: 5px;\n  padding: 16px;\n  display: flex;\n  border-bottom: 1px solid lightgrey;\n  margin: 0px 16px;\n  padding: 16px 0px;\n}\n\n.main_content_div .notification_div .round_div {\n  background: #DFE7F5;\n  height: 46px;\n  width: 46px;\n  min-width: 46px;\n  border-radius: 100%;\n  position: relative;\n}\n\n.main_content_div .notification_div .round_div ion-icon {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n\n.main_content_div .notification_div ion-label {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFFSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUFBUjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFHUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURaOztBQUdZO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBRGhCOztBQUlRO0VBQ0ksaUJBQUE7QUFGWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLnRpdGxlX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb25fZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICBtYXJnaW46IDBweCAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcblxuICAgICAgICAucm91bmRfZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNERkU3RjU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/notification/notification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let NotificationPage = class NotificationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.list = [
            {
                icn: 'card-outline',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                icn: 'alarm-outline',
                text: 'Temporibus vitae exercitationem quam totam sint labore',
            },
            {
                icn: 'document-text-outline',
                text: 'Sit amet consectetur adipisicing elit.',
            },
            {
                icn: 'arrow-down',
                text: 'Lorem ipsum temporibus vitae exercitationem',
            },
            {
                icn: 'alarm-outline',
                text: 'Elit temporibus vitae exercite quam totam sint labore?',
            },
            {
                icn: 'arrow-up',
                text: 'Sit amet consectetur adipisicing elit.',
            },
            {
                icn: 'card-outline',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                icn: 'alarm-outline',
                text: 'Temporibus vitae exercitationem quam totam sint labore',
            },
            {
                icn: 'document-text-outline',
                text: 'Sit amet consectetur adipisicing elit.',
            },
            {
                icn: 'arrow-down',
                text: 'Lorem ipsum temporibus vitae exercitationem',
            },
            {
                icn: 'alarm-outline',
                text: 'Elit temporibus vitae exercite quam totam sint labore?',
            },
            {
                icn: 'card-outline',
                text: 'Sit amet consectetur adipisicing elit.',
            },
        ];
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.page.scss */ "./src/app/pages/notification/notification.page.scss")).default]
    })
], NotificationPage);



/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es2015.js.map