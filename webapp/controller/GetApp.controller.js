sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("customerapp.customerodataapp.controller.GetApp", {
            onInit: function () {

            },

            onpressradio1: function () {
                debugger;
                var combo1 = this.byId("_ideml1").getText();

                if (combo1 === "Email") {
                    this.byId("_idmob").setVisible(false);
                    this.byId("_ideml").setVisible(true);
                }
                // else {
                //     this.byId("_ideml").setVisible(true);
                //     this.byId("_idmob").setVisible(false);
                // }
            },

            onpressradio2: function () {
                debugger;
                var combo2 = this.byId("_idmob1").getText();

                if (combo2 === "Phone") {
                    this.byId("_idmob").setVisible(true);
                    this.byId("_ideml").setVisible(false);
                }
                // else {
                //     this.byId("_ideml").setVisible(true);
                //     this.byId("_idmob").setVisible(false);
                // }
            },

            onLiveChange: function (oEvent) {
                debugger;
                var sNewValue = oEvent.getParameter("value");

                var isNum = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
                var emlvldtn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                var cmbemailvsbl = this.byId("_ideml").getVisible(true);
                var cmbmobvsbl = this.byId("_idmob").getVisible(true);

                if (sNewValue.match(emlvldtn) === null && cmbemailvsbl === true) {
                    this.byId("_idbtn").setEnabled(false);
                    this.byId("_idlbl1").setText("Please Enter Email");
                    // this.byId("_idlbl1").setVisible(true);
                    this.byId("_idlbl2").setText("");
                    return false;
                }
                if (sNewValue.match(isNum) === null && cmbmobvsbl === true) {
                    this.byId("_idbtn").setEnabled(false);
                    this.byId("_idlbl2").setText("Please Enter Mobile No.");
                    this.byId("_idlbl1").setText("");
                    return false;
                }
                else {
                    this.byId("_idbtn").setEnabled(true);
                    this.byId("_idlbl1").setText("");
                    this.byId("_idlbl2").setText("");
                }
            },

            onpresssharelnk: function () {
                debugger;

                var isNum = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
                var emlvldtn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                var combo1 = this.byId("_ideml").getValue();
                var combo2 = this.byId("_idmob").getValue();

                var cmbemailvsbl = this.byId("_ideml").getVisible(true);
                var cmbmobvsbl = this.byId("_idmob").getVisible(true);

                if (combo1 === "" && combo2 === "") {
                    sap.m.MessageToast.show("Please Enter Value");
                    // this.byId("_idbtn").setEnabled(false);
                    return false;
                }

                if (combo1.match(emlvldtn) === null && cmbemailvsbl === true) {
                    sap.m.MessageBox.error("Please Enter Valid Email in correct format ");
                    // sap.m.MessageToast.show("Please Enter Valid Email in correct format ");
                    this.byId("_ideml").setValue("");_idlbl1
                    // this.byId("_idlbl1").setText("Please Enter Email");
                    return false;
                }

                if (combo2.match(isNum) === null && cmbmobvsbl === true) {
                    sap.m.MessageBox.error("Please Enter only numeric value of 10 digit in contact number");
                    this.byId("_idmob").setValue("");
                    return false;
                }
                if (combo2.length > 10 && cmbmobvsbl === true) {
                    sap.m.MessageBox.error("Only 10 digits are allowed in contact number");
                    this.byId("_idmob").setValue("");
                    return false;
                }

                else {
                    sap.m.MessageBox.success("LINK SENT!");
                    this.byId("_ideml").setValue("");
                    this.byId("_idmob").setValue("");
                    this.byId("_idbtn").setEnabled(true);
                }

            },

            navPressBack: function () {
                history.go(-1);
            },

            onPressLogout: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("RouteDetail");
            },

            onPressBkmrks: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Login1", { Id: "X", password: "Y" });
            },

            onPressRvw: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Login1", { Id: "X", password: "Y" });
            },

            onPressPrfl: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Login1", { Id: "X", password: "Y" });
            },

        });
    });
