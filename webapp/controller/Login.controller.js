sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("customerapp.customerodataapp.controller.Login", {
            onInit: function () {
                this.onReadAll();
            },
            onReadAll: function () {
                var that = this;
                debugger;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCUSTOMAPP_SRV/");
                // var oModel = this.getOwnerComponent().getModel("RegistraionData");

                oModel.read("/CustomdetailsSet", {
                    success: function (odata) {

                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        // MessageBox.success("Success");

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
                    // error : function() {
                    //     MessageBox.error("error");
                    // }
                });
            },

            onpress: function () {
                debugger;
                // var userid = this.getView().byId("_iduser").getValue();
                var name = this.getView().byId("_idname").getValue();
                var pass = this.getView().byId("_idpwd").getValue();

                // var key2 =  this.getView().getModel("Data1").getData.results;

                if (name == '') {
                    this.getView().byId("_idname").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idname").setValueState(sap.ui.core.ValueState.Success);
                }

                if (pass == '') {
                    this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Success);
                }

                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCUSTOMAPP_SRV/");

                oModel.read("/CustomdetailsSet", {

                    success: function (odata) {
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        this.getView().setModel(oModel1, "Data1");

                        var key2 = oModel1.oData.results;

                        //     },error : function() {
                        //         alert("Error");
                        //     }
                        // });            

                        for (var i = 0; i < key2.length; i++) {

                            if (name === '') {
                                MessageBox.error("Please enter Customer Number");
                                this.getView().byId("_idname").setValueState(sap.ui.core.ValueState.Error);
                                return false;

                            } else if (pass === '') {
                                MessageBox.error("Please enter Password");
                                this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Error);
                                return false;
                            }

                            else if (name === key2[i].Name1 && pass === key2[i].Password) {
                                var router = sap.ui.core.UIComponent.getRouterFor(this);
                                // router.navTo("Detail", { Id: userid, password: pass });
                                router.navTo("Login1", { Id: name, password: pass });
                                MessageToast.show("Login Successful!");
                                this.getView().byId("_idname").setValueState(sap.ui.core.ValueState.Success);
                                this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Success);
                                return true;
                            }

                        }
                        for (var j = 0; j < key2.length; i++) {
                            if (name != key2[j].Name1 && pass != key2[j].Password) {
                                MessageBox.error("Invalid UName & Password");

                                this.getView().byId("_idname").setValue();
                                this.getView().byId("_idpwd").setValue();

                                this.getView().byId("_idname").setValueState(sap.ui.core.ValueState.Error);
                                this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Error);

                                return false;
                            }
                        }
                    }.bind(this),
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
                    }.bind(this)

                    // error: function () {
                    //     MessageBox.error("Error");
                    //     // alert("Error");
                    // }.bind(this)

                });
            },

            onPressReg: function (oEvent) {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Register");
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

        });
    });
