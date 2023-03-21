(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-label class=\"welcome_lbl\">Welcome Login</ion-label>\n\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <div class=\"btn_div\">\n                        <img src=\"assets/imgs/facebook.png\">\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <div class=\"btn_div\">\n                        <img src=\"assets/imgs/google.png\">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n\n        <div class=\"flex_div\">\n            <div class=\"check_flex\">\n                <ion-checkbox></ion-checkbox>\n                <ion-label>Remember me</ion-label>\n            </div>\n            <ion-label class=\"flex_lbl\" (click)=\"goToForgot()\">Forgot password ?</ion-label>\n        </div>\n\n        <ion-button expand=\"block\" (click)=\"goToHome()\">\n            Login\n        </ion-button>\n\n        <ion-label class=\"last_lbl\">Don't have an account ? <span (click)=\"goToRegister()\">Sign up</span></ion-label>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n  padding-top: 60px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .welcome_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 50px;\n}\n.main_content_div ion-grid {\n  padding: 0px;\n}\n.main_content_div ion-grid .btn_div {\n  border: 1px solid #77869E;\n  border-radius: 3px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.main_content_div ion-grid .btn_div img {\n  width: 20px;\n  display: block;\n  margin: auto;\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n  margin-top: 16px;\n}\n.main_content_div .flex_div {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.main_content_div .flex_div .check_flex {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .flex_div .check_flex ion-label {\n  font-size: 14px;\n  color: #77869E;\n  margin-left: 10px;\n}\n.main_content_div .flex_div .flex_lbl {\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  font-family: \"semi-bold\";\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .last_lbl {\n  color: #77869E;\n  margin-top: 20px;\n  text-align: center;\n}\n.main_content_div .last_lbl span {\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksWUFBQTtBQURSO0FBR1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURaO0FBR1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFEaEI7QUFNSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUxaO0FBT1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTGhCO0FBU1E7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQVBaO0FBV0k7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0FBVFI7QUFZSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVlI7QUFZUTtFQUNJLCtCQUFBO0VBQ0Esd0JBQUE7QUFWWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLndlbGNvbWVfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgaW9uLWdyaWQge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgLmJ0bl9kaXYge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc3ODY5RTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLmZsZXhfZGl2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5jaGVja19mbGV4e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc4NjlFO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXhfbGJsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICB9XG5cbiAgICAubGFzdF9sYmwge1xuICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router) {
          _classCallCheck(this, LoginPage);

          this.router = router;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/tabs']);
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.router.navigate(['/register']);
          }
        }, {
          key: "goToForgot",
          value: function goToForgot() {
            this.router.navigate(['/forgot']);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map