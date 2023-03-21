(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-activity-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity/activity.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity/activity.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesActivityActivityPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"main_content_div\">\n\n      <div class=\"gradient_div\">\n          <div class=\"abs_round\"></div>\n          <div class=\"flex_header\">\n              <ion-icon name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n              <ion-label>Your Activity</ion-label>\n          </div>\n          \n      </div>\n\n      <div class=\"container_div\">\n          <div class=\"white_box\">\n              <div class=\"amount_detail\">\n                  <ion-label class=\"simp_lbl\">Name</ion-label>\n                  <ion-label class=\"simp_lbl\">Mausam Chavda</ion-label>\n              </div>\n              <div class=\"amount_detail\">\n                  <ion-label class=\"simp_lbl\">IFSC</ion-label>\n                  <ion-label class=\"simp_lbl\">BANK1234</ion-label>\n              </div>\n              <div class=\"amount_detail\">\n                  <ion-label class=\"simp_lbl\">My Account</ion-label>\n                  <ion-label class=\"amount_lbl\">20,000</ion-label>\n              </div>\n\n              <ion-input type=\"text\" placeholder=\"Search\">\n                  <ion-icon name=\"search\"></ion-icon>\n              </ion-input>\n\n          </div>\n\n          <ion-label class=\"title_lbl\">Transaction</ion-label>\n            \n          <div class=\"shopping_div\" *ngFor=\"let item of activity\">\n              <div class=\"content_div\">\n                  <ion-label class=\"date\">{{item.date}}</ion-label>\n                  <ion-label class=\"name\">{{item.name}}</ion-label>\n              </div>\n              <ion-label class=\"blue_lbl\" *ngIf=\"item.type == 'c'\">+ {{item.amount}}</ion-label>\n              <ion-label class=\"light_lbl\" *ngIf=\"item.type == 'w'\">- {{item.amount}}</ion-label>\n          </div>\n\n      </div>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/activity/activity-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/activity/activity-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ActivityPageRoutingModule */

    /***/
    function srcAppPagesActivityActivityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityPageRoutingModule", function () {
        return ActivityPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activity.page */
      "./src/app/pages/activity/activity.page.ts");

      var routes = [{
        path: '',
        component: _activity_page__WEBPACK_IMPORTED_MODULE_3__["ActivityPage"]
      }];

      var ActivityPageRoutingModule = /*#__PURE__*/_createClass(function ActivityPageRoutingModule() {
        _classCallCheck(this, ActivityPageRoutingModule);
      });

      ActivityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivityPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/activity/activity.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/activity/activity.module.ts ***!
      \***************************************************/

    /*! exports provided: ActivityPageModule */

    /***/
    function srcAppPagesActivityActivityModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function () {
        return ActivityPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _activity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./activity-routing.module */
      "./src/app/pages/activity/activity-routing.module.ts");
      /* harmony import */


      var _activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./activity.page */
      "./src/app/pages/activity/activity.page.ts");

      var ActivityPageModule = /*#__PURE__*/_createClass(function ActivityPageModule() {
        _classCallCheck(this, ActivityPageModule);
      });

      ActivityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _activity_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityPageRoutingModule"]],
        declarations: [_activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]]
      })], ActivityPageModule);
      /***/
    },

    /***/
    "./src/app/pages/activity/activity.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/activity/activity.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesActivityActivityPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F8F9F9;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .gradient_div {\n  height: 270px;\n  background: var(--ion-color-primary);\n  border-bottom-right-radius: 60px;\n  padding: 20px;\n  padding-top: 40px;\n  width: 100%;\n}\n\n.main_content_div .gradient_div .abs_round {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  height: 250px;\n  width: 250px;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 99;\n  right: -60px;\n  top: -80px;\n  z-index: 999;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_content_div .gradient_div .flex_header {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.main_content_div .gradient_div .flex_header ion-label {\n  color: white;\n  font-family: \"semi-bold\";\n  font-size: 20px;\n  margin-left: 40px;\n}\n\n.main_content_div .gradient_div .flex_header ion-icon {\n  position: absolute;\n  font-size: 26px;\n  color: white;\n  z-index: 999;\n}\n\n.main_content_div .container_div {\n  padding: 20px;\n  margin-top: -200px;\n  position: absolute;\n  width: 100%;\n  z-index: 9999;\n}\n\n.main_content_div .container_div .white_box {\n  background: white;\n  padding: 16px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_content_div .container_div .white_box .amount_detail {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.main_content_div .container_div .white_box .amount_detail .simp_lbl {\n  color: #77869E;\n  font-size: 18px;\n}\n\n.main_content_div .container_div .white_box .amount_detail .amount_lbl {\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\";\n  font-size: 18px;\n}\n\n.main_content_div .container_div .white_box ion-input {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  font-family: \"medium\";\n  margin: 10px 0px;\n}\n\n.main_content_div .container_div .white_box ion-input ion-icon {\n  color: #77869E;\n  padding-left: 16px;\n  font-size: 20px;\n}\n\n.main_content_div .container_div .title_lbl {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"semi-bold\";\n  margin: 20px 0px;\n}\n\n.main_content_div .container_div .shopping_div {\n  background: white;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_content_div .container_div .shopping_div .content_div .date {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"regular\";\n  margin-bottom: 3px;\n}\n\n.main_content_div .container_div .shopping_div .content_div .name {\n  font-size: 16px;\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .container_div .shopping_div .blue_lbl {\n  font-size: 20px;\n  color: #1BC773;\n}\n\n.main_content_div .container_div .shopping_div .light_lbl {\n  font-size: 20px;\n  color: #F24750;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpdHkvYWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBSTtFQUNJLGNBQUE7QUFFUjs7QUFDSTtFQUNJLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUNRO0VBQ0ksa0ZBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFDWjs7QUFFUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVo7O0FBRVk7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBaEI7O0FBRVk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFoQjs7QUFLSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFIUjs7QUFLUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhaOztBQUtZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFIaEI7O0FBS2dCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFIcEI7O0FBS2dCO0VBQ0ksK0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFIcEI7O0FBT1k7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBTGhCOztBQU9nQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFMcEI7O0FBVVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFSWjs7QUFXUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFUWjs7QUFhZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFYcEI7O0FBYWdCO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBWHBCOztBQWVZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFiaEI7O0FBZVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQWJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXR5L2FjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGOEY5Rjk7XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZ3JhZGllbnRfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5hYnNfcm91bmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuMSksIHRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIHJpZ2h0OiAtNjBweDtcbiAgICAgICAgICAgIHRvcDogLTgwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleF9oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lcl9kaXYge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG5cbiAgICAgICAgLndoaXRlX2JveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAuYW1vdW50X2RldGFpbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAgICAgLnNpbXBfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFtb3VudF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc4NjlFO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGVfbGJsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc4NjlFO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG9wcGluZ19kaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuY29udGVudF9kaXYge1xuICAgICAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsdWVfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMxQkM3NzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlnaHRfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGMjQ3NTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/activity/activity.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/activity/activity.page.ts ***!
      \*************************************************/

    /*! exports provided: ActivityPage */

    /***/
    function srcAppPagesActivityActivityPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityPage", function () {
        return ActivityPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ActivityPage = /*#__PURE__*/function () {
        function ActivityPage(navCtrl) {
          _classCallCheck(this, ActivityPage);

          this.navCtrl = navCtrl;
          this.activity = [{
            date: '02/03/2021',
            name: 'McDonald\'s',
            amount: '400',
            type: 'w'
          }, {
            date: '05/03/2021',
            name: 'Jonh Doe',
            amount: '5000',
            type: 'c'
          }, {
            date: '09/03/2021',
            name: 'Domino\'s',
            amount: '300',
            type: 'w'
          }, {
            date: '12/03/2021',
            name: 'Recharge',
            amount: '799',
            type: 'w'
          }, {
            date: '22/03/2021',
            name: 'Jonh Doe',
            amount: '5000',
            type: 'c'
          }];
        }

        _createClass(ActivityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return ActivityPage;
      }();

      ActivityPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      ActivityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./activity.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity/activity.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./activity.page.scss */
        "./src/app/pages/activity/activity.page.scss"))["default"]]
      })], ActivityPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-activity-activity-module-es5.js.map