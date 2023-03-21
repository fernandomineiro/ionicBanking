(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-expense-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense/expense.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense/expense.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesExpenseExpensePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_container_div\">\n\n        <div class=\"flex_header\">\n            <ion-label>Expenses</ion-label>\n            <img src=\"assets/imgs/expense.png\">\n        </div>\n\n        <div class=\"flex_div\">\n            <div class=\"left_div\">\n                <ion-label class=\"simple_lbl\">Card Balance</ion-label>\n                <ion-label class=\"price\">$6,390</ion-label>\n            </div>\n            \n            <div class=\"right_div\">\n                <div style=\"display: flex;align-items: center;margin-bottom: 10px;\">\n                    <div class=\"color_div\" style=\"background-color: rgba(41, 191, 118, 0.2);\" >\n                        <ion-icon name=\"arrow-up-sharp\" style=\"color: #1BC773;font-size: 16px;\"></ion-icon>\n                    </div>\n                    <ion-label style=\"color: #1BC773\">$3,214</ion-label>\n                </div>\n                <div style=\"display: flex;align-items: center;margin-top: 10px;\">\n                    <div class=\"color_div\" style=\"background-color: rgba(242, 71, 80, 0.2);\">\n                        <ion-icon name=\"arrow-down-sharp\" style=\"color: #F24750;font-size: 16px;\"></ion-icon>\n                    </div>\n                    <ion-label style=\"color: #F24750\">$1,168</ion-label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"month_div\">\n            <div class=\"popover_div\">\n                <ion-label>Monthly</ion-label>\n                <ion-icon name=\"chevron-down-outline\"></ion-icon>\n            </div>\n            <div class=\"month_list\">\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Jan'\" (click)=\"tabID = 'Jan'\">\n                    <ion-label>Jan</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Feb'\" (click)=\"tabID = 'Feb'\">\n                    <ion-label>Feb</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Mar'\" (click)=\"tabID = 'Mar'\">\n                    <ion-label>Mar</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Apr'\" (click)=\"tabID = 'Apr'\">\n                    <ion-label>Apr</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'May'\" (click)=\"tabID = 'May'\">\n                    <ion-label>May</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Jun'\" (click)=\"tabID = 'Jun'\">\n                    <ion-label>Jun</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Jul'\" (click)=\"tabID = 'Jul'\">\n                    <ion-label>Jul</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Aug'\" (click)=\"tabID = 'Aug'\">\n                    <ion-label>Aug</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Sept'\" (click)=\"tabID = 'Sept'\">\n                    <ion-label>Sept</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Oct'\" (click)=\"tabID = 'Oct'\">\n                    <ion-label>Oct</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Nov'\" (click)=\"tabID = 'Nov'\">\n                    <ion-label>Nov</ion-label>\n                </div>\n                <div class=\"small_btn\" [class.active]=\"tabID == 'Dec'\" (click)=\"tabID = 'Dec'\">\n                    <ion-label>Dec</ion-label>\n                </div>\n                \n            </div>\n        </div>\n\n        <div>\n            <canvas baseChart style=\"width: 100%;\" height=\"300\" \n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\">\n            </canvas>\n        </div>\n\n        \n\n        <ion-label class=\"title_lbl\">Spending Breakdown</ion-label>\n\n        <div class=\"shopping_div\" *ngFor=\"let item of activity\">\n            <div class=\"color_box\" [ngStyle]=\"{'backgroundColor' : item.color}\">\n                <img src=\"{{item.image}}\">\n            </div>\n            <div class=\"content_div\">\n                <ion-label class=\"name\">{{item.name}}</ion-label>\n                <ion-label class=\"date\">17 Monday June</ion-label>\n            </div>\n            <ion-label class=\"price\">{{item.price}}</ion-label>\n        </div>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/expense/expense-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/expense/expense-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ExpensePageRoutingModule */

    /***/
    function srcAppPagesExpenseExpenseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePageRoutingModule", function () {
        return ExpensePageRoutingModule;
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


      var _expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./expense.page */
      "./src/app/pages/expense/expense.page.ts");

      var routes = [{
        path: '',
        component: _expense_page__WEBPACK_IMPORTED_MODULE_3__["ExpensePage"]
      }];

      var ExpensePageRoutingModule = /*#__PURE__*/_createClass(function ExpensePageRoutingModule() {
        _classCallCheck(this, ExpensePageRoutingModule);
      });

      ExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExpensePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/expense/expense.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/expense/expense.module.ts ***!
      \*************************************************/

    /*! exports provided: ExpensePageModule */

    /***/
    function srcAppPagesExpenseExpenseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function () {
        return ExpensePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _expense_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./expense-routing.module */
      "./src/app/pages/expense/expense-routing.module.ts");
      /* harmony import */


      var _expense_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./expense.page */
      "./src/app/pages/expense/expense.page.ts");

      var ExpensePageModule = /*#__PURE__*/_createClass(function ExpensePageModule() {
        _classCallCheck(this, ExpensePageModule);
      });

      ExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_1__["ChartsModule"], _expense_routing_module__WEBPACK_IMPORTED_MODULE_6__["ExpensePageRoutingModule"]],
        declarations: [_expense_page__WEBPACK_IMPORTED_MODULE_7__["ExpensePage"]]
      })], ExpensePageModule);
      /***/
    },

    /***/
    "./src/app/pages/expense/expense.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/expense/expense.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesExpenseExpensePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #F8F9F9;\n}\n\nion-content {\n  --background: #F8F9F9;\n}\n\n.main_container_div {\n  padding: 16px;\n}\n\n.main_container_div ion-label {\n  display: block;\n}\n\n.main_container_div .flex_header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main_container_div .flex_header ion-label {\n  font-size: 20px;\n  color: #042C5C;\n  font-family: \"semi-bold\";\n}\n\n.main_container_div .flex_header img {\n  width: 20px;\n}\n\n.main_container_div .flex_div {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.main_container_div .flex_div .left_div .simple_lbl {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"semi-bold\";\n}\n\n.main_container_div .flex_div .left_div .price {\n  font-size: 30px;\n  font-family: \"semi-bold\";\n}\n\n.main_container_div .flex_div .right_div .color_div {\n  height: 25px;\n  width: 25px;\n  min-width: 25px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.main_container_div .flex_div .right_div .color_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 25px;\n}\n\n.main_container_div .flex_div .right_div ion-label {\n  font-size: 13px;\n  margin-left: 10px;\n  font-family: \"semi-bold\";\n}\n\n.main_container_div .month_div {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n\n.main_container_div .month_div .popover_div {\n  background: white;\n  min-width: 100px;\n  border-radius: 25px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.main_container_div .month_div .popover_div ion-label {\n  color: #77869E;\n  font-size: 13px;\n  font-family: \"semi-bold\";\n}\n\n.main_container_div .month_div .popover_div ion-icon {\n  color: #77869E;\n}\n\n.main_container_div .month_div .month_list {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  margin-left: 16px;\n}\n\n.main_container_div .month_div .month_list .small_btn {\n  width: 70px !important;\n  min-width: 70px;\n  border-radius: 5px;\n  text-align: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.main_container_div .month_div .month_list .small_btn ion-label {\n  text-align: center;\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"semi-bold\";\n}\n\n.main_container_div .month_div .month_list .active {\n  background: #DFE7F5;\n}\n\n.main_container_div .month_div .month_list .active ion-label {\n  color: var(--ion-color-primary);\n}\n\n.main_container_div .title_lbl {\n  font-size: 20px;\n  font-family: \"semi-bold\";\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.main_container_div .shopping_div {\n  background: white;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.main_container_div .shopping_div .color_box {\n  height: 55px;\n  width: 55px;\n  min-width: 55px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_container_div .shopping_div .color_box img {\n  width: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.main_container_div .shopping_div .content_div {\n  padding-left: 16px;\n}\n\n.main_container_div .shopping_div .content_div .name {\n  font-size: 16px;\n  font-family: \"semi-bold\";\n  margin-bottom: 5px;\n}\n\n.main_container_div .shopping_div .content_div .date {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"regular\";\n}\n\n.main_container_div .shopping_div .price {\n  position: absolute;\n  right: 20px;\n  color: #EE5A55;\n  font-family: \"semi-bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZW5zZS9leHBlbnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURJO0VBQ0ksY0FBQTtBQUdSOztBQUFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFFUjs7QUFBUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFFWjs7QUFBUTtFQUNJLFdBQUE7QUFFWjs7QUFFSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBR1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBRGhCOztBQUlZO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBRmhCOztBQU9ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQUxqQjs7QUFPaUI7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBTHJCOztBQVNZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFQaEI7O0FBWUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVlI7O0FBWVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFWWjs7QUFZWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFWaEI7O0FBYVk7RUFDSSxjQUFBO0FBWGhCOztBQWVRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWJaOztBQWNZO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFaaEI7O0FBY2dCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBWnBCOztBQWdCWTtFQUNJLG1CQUFBO0FBZGhCOztBQWdCZ0I7RUFDSSwrQkFBQTtBQWRwQjs7QUFvQkk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbEJSOztBQXFCSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBbkJSOztBQXFCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFuQlo7O0FBcUJZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQW5CaEI7O0FBc0JRO0VBQ0ksa0JBQUE7QUFwQlo7O0FBc0JZO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFwQmhCOztBQXVCWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFyQmhCOztBQXlCUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQXZCWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2UvZXhwZW5zZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjhGOUY5O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0Y4RjlGOTtcbn1cbi5tYWluX2NvbnRhaW5lcl9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZmxleF9oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDQyQzVDO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mbGV4X2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAubGVmdF9kaXYge1xuICAgICAgICAgICAgLnNpbXBsZV9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHRfZGl2IHtcbiAgICAgICAgICAgIC5jb2xvcl9kaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1vbnRoX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgLnBvcG92ZXJfZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc4NjlFO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tb250aF9saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAuc21hbGxfYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0RGRTdGNTtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC5zaG9wcGluZ19kaXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG5cbiAgICAgICAgLmNvbG9yX2JveCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNFRTVBNTU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/expense/expense.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/expense/expense.page.ts ***!
      \***********************************************/

    /*! exports provided: ExpensePage */

    /***/
    function srcAppPagesExpenseExpensePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePage", function () {
        return ExpensePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import * as pluginAnnotations from 'chartjs-plugin-annotation';


      var ExpensePage = /*#__PURE__*/function () {
        function ExpensePage() {
          _classCallCheck(this, ExpensePage);

          this.tabID = 'Jan';
          this.activity = [{
            name: 'Amazon',
            price: '- $35.88',
            image: 'assets/imgs/cart.png',
            color: '#FF7E87'
          }, {
            name: 'Shell',
            price: '- $78.88',
            image: 'assets/imgs/pump.png',
            color: '#00D793  '
          }, {
            name: 'Shopping',
            price: '- $50.92',
            image: 'assets/imgs/cart.png',
            color: '#FF7E87'
          }];
          this.lineChartData = [// {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
          // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
          {
            data: [500, 1000, 5000, 3200, 4000, 1900, 2700],
            label: 'Series A'
          }, {
            data: [1200, 2000, 2200, 3400, 4200, 1700, 3700],
            label: 'Series B'
          }];
          this.lineChartLabels = ['0', '1', '2', '3', '4', '5', '6'];
          this.lineChartOptions = {
            responsive: false
          };
          this.lineChartColors = [{
            backgroundColor: 'transparent',
            borderColor: 'rgba(41, 191, 118, 1)',
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgba(41, 191, 118, 1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }, {
            backgroundColor: 'transparent',
            borderColor: 'rgba(242, 71, 80, 1)',
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgba(242, 71, 80, 1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
          }];
          this.lineChartLegend = false;
          this.lineChartType = 'line';
        }

        _createClass(ExpensePage, [{
          key: "randomize",
          value: function randomize() {
            var _lineChartData = new Array(this.lineChartData.length);

            for (var i = 0; i < this.lineChartData.length; i++) {
              _lineChartData[i] = {
                data: new Array(this.lineChartData[i].data.length),
                label: this.lineChartData[i].label
              };

              for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor(Math.random() * 100 + 1);
              }
            }

            this.lineChartData = _lineChartData;
          }
        }, {
          key: "chartClicked",
          value: function chartClicked(e) {
            console.log(e);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {
            console.log(e);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExpensePage;
      }();

      ExpensePage.ctorParameters = function () {
        return [];
      };

      ExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./expense.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expense/expense.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./expense.page.scss */
        "./src/app/pages/expense/expense.page.scss"))["default"]]
      })], ExpensePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=expense-expense-module-es5.js.map