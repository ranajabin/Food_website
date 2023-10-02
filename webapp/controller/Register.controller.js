sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("customerapp.customerodataapp.controller.Register", {
            onInit: function () {
                // this.onReadAll();
            },
            //     onReadAll: function() {
            //     var that =this;
            //     debugger;
            //     var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCUSTOMAPP_SRV/");
            //     // var oModel = this.getOwnerComponent().getModel("RegistraionData");
            //     oModel.read("/CustomdetailsSet", {
            //         success: function (odata) {
            //             // debugger;
            //             var oModel1 = new sap.ui.model.json.JSONModel();
            //             oModel1.setData(odata);
            //             that.getView().setModel(oModel1, "Data1");
            //             alert("Success");
            //             // MessageBox.success("Success");
            //         },
            // error: function(error) {
            //     sap.ui.core.BusyIndicator.hide();
            //     var messsage = error;
            //     var msg = $(error.response.body).find('message').first().text();
            //     var action = "OK";
            //     new sap.m.MessageBox.error(msg, {
            //       onClose: function() {
            //          if (action === "OK") {

            //          }
            //       }
            //     })
            //  }

            // error : function() {
            //             // MessageBox.error("error");
            //             alert("Error");
            //         }
            //     });            
            // },

            navPressBack: function () {
                history.go(-1);
            },

            onPressSignin: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                // router.navTo("RouteLogin");
                router.navTo("Login");
            },

            onShowpwd: function (oEvent) {

                if (oEvent.getSource().getType() === "Password") {
                    oEvent.getSource().setType("Text");

                    oEvent.getSource().setValueHelpIconSrc("sap-icon://show");

                }
                else {
                    oEvent.getSource().setType("Password");
                    oEvent.getSource().setValueHelpIconSrc("sap-icon://hide");

                }
            },

            onPressReset: function () {
                this.getView().byId("_idcustnum").setValue("");
                this.getView().byId("_idcustnum").setValueState(sap.ui.core.ValueState.None);

                this.getView().byId("_idcustname").setValue();
                this.getView().byId("_idcustname").setValueState(sap.ui.core.ValueState.None);

                this.getView().byId("_idcustemail").setValue();
                this.getView().byId("_idcustemail").setValueState(sap.ui.core.ValueState.None);

                this.getView().byId("_idcustmob").setValue();
                this.getView().byId("_idcustmob").setValueState(sap.ui.core.ValueState.None);

                this.getView().byId("_idcustid").setValue();
                this.getView().byId("_idcustid").setValueState(sap.ui.core.ValueState.None);

                this.getView().byId("_idcustpwd").setValue();
                this.getView().byId("_idcustpwd").setValueState(sap.ui.core.ValueState.None);
            },

            onPressRegister: function (oEvent) {
                debugger;

                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZCUSTOMAPP_SRV/");

                var custnum = this.getView().byId("_idcustnum").getValue();
                if (custnum == '') {
                    this.getView().byId("_idcustnum").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idcustnum").setValueState(sap.ui.core.ValueState.Success);
                }

                var custname = this.getView().byId("_idcustname").getValue();
                // this.getView().byId("_idcustname").setValueState(sap.ui.core.ValueState.Success);
                if (custname == '') {
                    this.getView().byId("_idcustname").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idcustname").setValueState(sap.ui.core.ValueState.Success);
                }

                var custemail = this.getView().byId("_idcustemail").getValue();
                // this.getView().byId("_idcustemail").setValueState(sap.ui.core.ValueState.Success);
                if (custemail == '') {
                    this.getView().byId("_idcustemail").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idcustemail").setValueState(sap.ui.core.ValueState.Success);
                }

                var custmob = this.getView().byId("_idcustmob").getValue();
                // this.getView().byId("_idcustmob").setValueState(sap.ui.core.ValueState.Success);
                if (custmob == '') {
                    this.getView().byId("_idcustmob").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idcustmob").setValueState(sap.ui.core.ValueState.Success);
                }

                var custid = this.getView().byId("_idcustid").getValue();
                // this.getView().byId("_idcustid").setValueState(sap.ui.core.ValueState.Success);
                if (custid == '') {
                    this.getView().byId("_idcustid").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idcustid").setValueState(sap.ui.core.ValueState.Success);
                }

                var custpwd = this.getView().byId("_idcustpwd").getValue();
                // this.getView().byId("_idcustpwd").setValueState(sap.ui.core.ValueState.Success);
                if (custpwd == '') {
                    this.getView().byId("_idcustpwd").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idcustpwd").setValueState(sap.ui.core.ValueState.Success);
                }

                var isNum = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
                var letter2 = /^[A-Za-z]*$/;


                var Payload = {
                    "Kunnr": custnum,
                    "Name1": custname,
                    "SmtpAddr": custemail,
                    "Telf1": custmob,
                    "AppUsrid": custid,
                    "Password": custpwd
                };

                if (custnum == '') {
                    MessageBox.error("Please Enter Customer Number");
                    this.getView().byId("_idcustnum").setValueState(sap.ui.core.ValueState.Error);
                }
                else if (custname == '') {
                    MessageBox.error("Please Enter Name");
                    this.getView().byId("_idcustname").setValueState(sap.ui.core.ValueState.Error);
                }
                else if (custname.match(letter2) === null) {
                    MessageBox.error("Please Enter Name in Alphabet only");
                    this.getView().byId("_idcustname").setValueState(sap.ui.core.ValueState.Error);
                    return false;
                }
                else if (custemail == '') {
                    MessageBox.error("Please Enter Email");
                    this.getView().byId("_idcustemail").setValueState(sap.ui.core.ValueState.Error);
                }
                else if (custmob == '') {
                    MessageBox.error("Please Enter Mobile Number");
                    this.getView().byId("_idcustmob").setValueState(sap.ui.core.ValueState.Error);
                }
                else if (custmob.match(isNum) === null) {
                    MessageBox.error("Please Enter only numeric value of 10 digit in contact number");
                    this.getView().byId("_idcustmob").setValueState(sap.ui.core.ValueState.Error);
                    return false;
                }
                else if (custmob.length < 10) {
                    MessageBox.error("Please Enter 10 digit in contact number");
                    this.getView().byId("_idcustmob").setValueState(sap.ui.core.ValueState.Error);
                    return false;
                }
                else if (custid == '') {
                    MessageBox.error("Please Enter UserId");
                    this.getView().byId("_idcustid").setValueState(sap.ui.core.ValueState.Error);
                }
                else if (custpwd == '') {
                    MessageBox.error("Please Enter Password");
                    this.getView().byId("_idcustpwd").setValueState(sap.ui.core.ValueState.Error);
                }
                else if (custpwd.length > 10) {
                    MessageBox.error("Password should not be greater than 10 letters..");
                    this.getView().byId("_idcustpwd").setValueState(sap.ui.core.ValueState.Error);
                }
                else {
                    oModel.create("/CustomdetailsSet", Payload, {
                        success: function (Data) {
                            method: "POST",
                                MessageBox.success("Registration Successful!");

                            var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZCUSTOMAPP_SRV/");

                            oModel.read("/CustomdetailsSet", {
                                success: function (odata1) {
                                    var oModel1 = new sap.ui.model.json.JSONModel();
                                    oModel1.setData(odata1);
                                    this.getView().setModel(oModel1, "Data1");
                                },
                                /*   error: function (oError) {
                                       alert("Error");
                                   }   */
                            });
                        },
                        error: function (error) {
                            sap.ui.core.BusyIndicator.hide();
                            var messsage = error;
                            var msg = $(error.response.body).find('message').first().text();
                            var action = "OK";
                            new sap.m.MessageBox.error(msg, {
                                onClose: function () {
                                    if (action === "OK") {

                                    }
                                }
                            })
                        }
                        // error: function (oError) {
                        //     //  alert("Error!");
                        //     MessageBox.error("Error");
                        // }
                    });

                    sap.ui.getCore().byId("_idcustnum").setValue("");
                    sap.ui.getCore().byId("_idcustname").setValue("");
                    sap.ui.getCore().byId("_idcustemail").setValue("");
                    sap.ui.getCore().byId("_idcustmob").setValue("");
                    sap.ui.getCore().byId("_idcustid").setValue("");
                    sap.ui.getCore().byId("_idcustpwd").setValue("");
                }
            },
        });
    });
