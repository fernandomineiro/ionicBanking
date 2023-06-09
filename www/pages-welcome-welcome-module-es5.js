(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content>\n    <div class=\"main_content_div\">\n        <div class=\"upper_div\">\n            <ion-label class=\"skip_lbl\">SKIP</ion-label>\n            <img src=\"assets/imgs/capture.PNG\" class=\"screen_cap\">\n        </div>\n        <div class=\"slider_container\">\n\n            <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n                <ion-slide>\n                    <h1>Awesome 1</h1>\n                </ion-slide>\n                <ion-slide>\n                    <h1>Awesome 2</h1>\n                </ion-slide>\n                <ion-slide>\n                    <h1>Awesome 3</h1>\n                </ion-slide>\n            </ion-slides>\n\n            <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n                <ion-slide *ngFor=\"let item of [1,2,3]\">\n                    <div>\n                        <ion-label class=\"bold_lbl\">In hac habitasse platea dictumst.</ion-label>\n                        <ion-label class=\"#77869E_lbl\">Donec facilisis tortor ut augue lacinia, at viverra est semper. </ion-label>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"6\">\n                    <ion-button expand=\"block\">\n                      Login\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\n                      Sign Up\n                    </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n        </div>\n    </div>\n</ion-content> -->\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <div class=\"upper_div\">\n            <ion-label class=\"skip_lbl\">Skip</ion-label>\n            <img src=\"assets/imgs/capture.PNG\" class=\"screen_cap\">\n        </div>\n        <div class=\"slider_div\">\n            \n            <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n                <ion-slide *ngFor=\"let item of [1,2,3]\">\n                    <div class=\"slider_content\">\n                        <ion-label class=\"bold_lbl\">In hac habitasse platea dictumst.</ion-label>\n                        <ion-label class=\"grey_lbl\">Donec facilisis tortor ut augue lacinia, at viverra est semper. </ion-label>\n                    </div> \n                </ion-slide>\n            </ion-slides>\n\n            <ion-grid fixed>\n                <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-button expand=\"block\" class=\"login_btn\" (click)=\"goToLogin()\">\n                            Login\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-button expand=\"block\" class=\"reg_btn\" (click)=\"goToRegister()\">\n                            Sign Up\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n\n        </div>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: WelcomePageRoutingModule */

    /***/
    function srcAppPagesWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
        return WelcomePageRoutingModule;
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


      var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/pages/welcome/welcome.page.ts");

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
      }];

      var WelcomePageRoutingModule = /*#__PURE__*/_createClass(function WelcomePageRoutingModule() {
        _classCallCheck(this, WelcomePageRoutingModule);
      });

      WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WelcomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.module.ts ***!
      \*************************************************/

    /*! exports provided: WelcomePageModule */

    /***/
    function srcAppPagesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
        return WelcomePageModule;
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


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./welcome-routing.module */
      "./src/app/pages/welcome/welcome-routing.module.ts");
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/pages/welcome/welcome.page.ts");

      var WelcomePageModule = /*#__PURE__*/_createClass(function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      });

      WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
      })], WelcomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F8F9F9;\n}\n\n.main_content_div {\n  height: 100%;\n  width: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .upper_div {\n  padding: 24px;\n}\n\n.main_content_div .upper_div .skip_lbl {\n  color: #77869E;\n  text-align: right;\n  margin-bottom: 40px;\n}\n\n.main_content_div .upper_div .screen_cap {\n  width: 90%;\n  display: block;\n  margin: auto;\n}\n\n.main_content_div .upper_div .screen_cap {\n  width: 90%;\n  display: block;\n  margin: auto;\n}\n\n.main_content_div .slider_div {\n  background: white;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 24px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n}\n\n.main_content_div .slider_div ion-slides {\n  height: 120px;\n}\n\n.main_content_div .slider_div .swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: -5px !important;\n}\n\n.main_content_div .slider_div .slider_content .bold_lbl {\n  font-size: 18px;\n  text-align: center;\n}\n\n.main_content_div .slider_div .slider_content .grey_lbl {\n  font-size: 13px;\n  color: #77869E;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\n.main_content_div .slider_div ion-grid {\n  padding: 0px;\n  margin-top: 20px;\n}\n\n.main_content_div .slider_div ion-grid .login_btn {\n  --border-radius: 5px;\n}\n\n.main_content_div .slider_div ion-grid .reg_btn {\n  border: 1.5px solid #77869E;\n  color: #77869E;\n  border-radius: 5px;\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBMERBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF2REo7O0FBeURJO0VBQ0ksY0FBQTtBQXZEUjs7QUF5REk7RUFDSSxhQUFBO0FBdkRSOztBQXdEUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBdERaOztBQXdEUTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQXREWjs7QUF3RFE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUF0RFo7O0FBeURJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQXZEUjs7QUF5RFE7RUFDSSxhQUFBO0FBdkRaOztBQTBEUTtFQUNJLHVCQUFBO0FBeERaOztBQTREWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQTFEaEI7O0FBNkRZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQTNEaEI7O0FBK0RRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBN0RaOztBQStEWTtFQUNJLG9CQUFBO0FBN0RoQjs7QUFnRVk7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBOURoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjhGOUY5O1xufVxuLy8gLm1haW5fY29udGVudF9kaXYge1xuLy8gICAgIC8vIGhlaWdodDogMTAwJTtcbi8vICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICBcbi8vICAgICBpb24tbGFiZWwge1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB9XG5cbi8vICAgICAudXBwZXJfZGl2IHtcbi8vICAgICAgICAgcGFkZGluZzogMjRweDtcblxuLy8gICAgICAgICAuc2tpcF9sYmwge1xuLy8gICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLnNjcmVlbl9jYXAge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDkwJTtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnNsaWRlcl9jb250YWluZXIge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIC8vIGhlaWdodDogMjAwcHg7XG4vLyAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgLy8gYm90dG9tOiAwcHg7XG4vLyAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4vLyAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjUpO1xuLy8gICAgICAgICAvLyBwYWRkaW5nOiAyNHB4O1xuXG4vLyAgICAgICAgIC5ib2xkX2xibCB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAuIzc3ODY5RV9sYmwge1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgaW9uLWdyaWQge1xuLy8gICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC51cHBlcl9kaXYge1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAuc2tpcF9sYmwge1xuICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNjcmVlbl9jYXAge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5zY3JlZW5fY2FwIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2xpZGVyX2RpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuNSk7XG5cbiAgICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgICAgICAgICBib3R0b206IC01cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXJfY29udGVudCB7XG4gICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuZ3JleV9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAgICAgICAubG9naW5fYnRuIHtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlZ19idG4ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzc3ODY5RTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/welcome/welcome.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/welcome/welcome.page.ts ***!
      \***********************************************/

    /*! exports provided: WelcomePage */

    /***/
    function srcAppPagesWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
        return WelcomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WelcomePage = /*#__PURE__*/function () {
        function WelcomePage(router) {
          _classCallCheck(this, WelcomePage);

          this.router = router;
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.router.navigate(['/register']);
          }
        }]);

        return WelcomePage;
      }();

      WelcomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./welcome.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./welcome.page.scss */
        "./src/app/pages/welcome/welcome.page.scss"))["default"]]
      })], WelcomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map