(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-contact-add-contact-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-contact/add-contact.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-contact/add-contact.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddContactAddContactPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n      <ion-button (click)=\"goBack()\" fill=\"clear\" slot=\"start\">\n          <ion-icon name=\"arrow-back\" style=\"font-size: 26px;color: black\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n      <ion-label class=\"welcome_lbl\">Add Contact</ion-label>\n\n      <div [style.backgroundImage]=\"'url(assets/imgs/users/user12.jpg)'\" class=\"user_back\"></div>\n\n     \n      <ion-label class=\"title_lbl\">Bank Detail</ion-label>\n      <ion-select value=\"peperoni\" multiple=\"true\" placeholder=\"Select Bank\">\n          <ion-select-option value=\"HDFC\">HDFC</ion-select-option>\n          <ion-select-option value=\"ICICI\">ICICI</ion-select-option>\n          <ion-select-option value=\"Mahindra Kokal\">Mahindra Kokal</ion-select-option>\n          <ion-select-option value=\"SBI\">SBI</ion-select-option>\n      </ion-select>\n\n      <ion-label class=\"title_lbl\">Account Detail</ion-label>\n     \n      <ion-item>\n          <ion-label position=\"floating\">Enter Account No</ion-label>\n          <ion-input [(ngModel)]=\"accNo\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Confirm Account No</ion-label>\n          <ion-input [(ngModel)]=\"confirmAccNo\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Enter IFSC</ion-label>\n          <ion-input [(ngModel)]=\"ifsc\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Enter Username</ion-label>\n          <ion-input [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"block\">\n          Add Contact\n      </ion-button>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/add-contact/add-contact-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/add-contact/add-contact-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AddContactPageRoutingModule */

    /***/
    function srcAppPagesAddContactAddContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContactPageRoutingModule", function () {
        return AddContactPageRoutingModule;
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


      var _add_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-contact.page */
      "./src/app/pages/add-contact/add-contact.page.ts");

      var routes = [{
        path: '',
        component: _add_contact_page__WEBPACK_IMPORTED_MODULE_3__["AddContactPage"]
      }];

      var AddContactPageRoutingModule = /*#__PURE__*/_createClass(function AddContactPageRoutingModule() {
        _classCallCheck(this, AddContactPageRoutingModule);
      });

      AddContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddContactPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/add-contact/add-contact.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/add-contact/add-contact.module.ts ***!
      \*********************************************************/

    /*! exports provided: AddContactPageModule */

    /***/
    function srcAppPagesAddContactAddContactModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContactPageModule", function () {
        return AddContactPageModule;
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


      var _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-contact-routing.module */
      "./src/app/pages/add-contact/add-contact-routing.module.ts");
      /* harmony import */


      var _add_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-contact.page */
      "./src/app/pages/add-contact/add-contact.page.ts");

      var AddContactPageModule = /*#__PURE__*/_createClass(function AddContactPageModule() {
        _classCallCheck(this, AddContactPageModule);
      });

      AddContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddContactPageRoutingModule"]],
        declarations: [_add_contact_page__WEBPACK_IMPORTED_MODULE_6__["AddContactPage"]]
      })], AddContactPageModule);
      /***/
    },

    /***/
    "./src/app/pages/add-contact/add-contact.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/add-contact/add-contact.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddContactAddContactPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n  padding-top: 30px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .welcome_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .user_back {\n  width: 100px;\n  height: 105px;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 5px solid #f3f3f3;\n  border-radius: 5px;\n  display: block;\n  margin: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .title_lbl {\n  font-family: \"semi-bold\";\n  font-size: 16px;\n  margin-top: 20px;\n}\n.main_content_div ion-select {\n  --padding-start: 0px;\n  margin-top: 10px;\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n  margin-top: 16px;\n}\n.main_content_div ion-button {\n  --border-radius: 3px;\n  font-family: \"semi-bold\";\n  width: 200px;\n  display: block;\n  margin: auto;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNvbnRhY3QvYWRkLWNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBQVI7QUFHSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU9JO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtY29udGFjdC9hZGQtY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC53ZWxjb21lX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgIH1cblxuICAgIC51c2VyX2JhY2sge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC50aXRsZV9sYmwge1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/add-contact/add-contact.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/add-contact/add-contact.page.ts ***!
      \*******************************************************/

    /*! exports provided: AddContactPage */

    /***/
    function srcAppPagesAddContactAddContactPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContactPage", function () {
        return AddContactPage;
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

      var AddContactPage = /*#__PURE__*/function () {
        function AddContactPage(navCtrl) {
          _classCallCheck(this, AddContactPage);

          this.navCtrl = navCtrl;
          this.accNo = 'XXXXXXXX1234';
          this.confirmAccNo = 'XXXXXXXX1234';
          this.name = 'Jonh Doe';
          this.ifsc = 'BANK1234';
        }

        _createClass(AddContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return AddContactPage;
      }();

      AddContactPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      AddContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-contact.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-contact/add-contact.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-contact.page.scss */
        "./src/app/pages/add-contact/add-contact.page.scss"))["default"]]
      })], AddContactPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-contact-add-contact-module-es5.js.map