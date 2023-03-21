(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-button (click)=\"goBack()\" fill=\"clear\" slot=\"start\">\n          <ion-icon name=\"arrow-back\" style=\"font-size: 26px;color: black\"></ion-icon>\n      </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-label class=\"welcome_lbl\">Change Password</ion-label>\n\n        <ion-item>\n            <ion-label position=\"floating\">Old Password</ion-label>\n            <ion-input type=\"password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">New Password</ion-label>\n            <ion-input type=\"password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input type=\"password\"></ion-input>\n        </ion-item>\n\n        <ion-button expand=\"block\">\n            Change Password\n        </ion-button>\n        \n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChangePasswordPageRoutingModule */

    /***/
    function srcAppPagesChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
        return ChangePasswordPageRoutingModule;
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/pages/change-password/change-password.page.ts");

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
      }];

      var ChangePasswordPageRoutingModule = /*#__PURE__*/_createClass(function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      });

      ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/change-password/change-password.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChangePasswordPageModule */

    /***/
    function srcAppPagesChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
        return ChangePasswordPageModule;
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-password-routing.module */
      "./src/app/pages/change-password/change-password-routing.module.ts");
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/pages/change-password/change-password.page.ts");

      var ChangePasswordPageModule = /*#__PURE__*/_createClass(function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      });

      ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
      })], ChangePasswordPageModule);
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/change-password/change-password.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n  padding-top: 60px;\n  min-height: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .welcome_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 30px;\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n  margin-top: 16px;\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUlJO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAud2VsY29tZV9sYmwge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/change-password/change-password.page.ts ***!
      \***************************************************************/

    /*! exports provided: ChangePasswordPage */

    /***/
    function srcAppPagesChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
        return ChangePasswordPage;
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

      var ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(navCtrl) {
          _classCallCheck(this, ChangePasswordPage);

          this.navCtrl = navCtrl;
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return ChangePasswordPage;
      }();

      ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./change-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./change-password.page.scss */
        "./src/app/pages/change-password/change-password.page.scss"))["default"]]
      })], ChangePasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-change-password-change-password-module-es5.js.map