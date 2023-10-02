sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("customerapp.customerodataapp.controller.View4", {
            onInit: function () {
                var that = this;
                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // oRouter.getRoute("Detail").attachPatternMatched(this.onRouteMatch, this);
                that.onReadAll();
            },
            // onRouteMatch: function (evt) {
            onReadAll: function () {
                debugger;
                var that = this;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPLANTDETAILS_SRV/");
                // var oModel = this.getOwnerComponent().getModel("RegistraionData");

                oModel.read("/InputPlantInfoSet", {
                    success: function (odata) {

                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        MessageBox.success("Success");

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

            // onPressReg: function() {
            //     var router = sap.ui.core.UIComponent.getRouterFor(this);
            //     router.navTo("View2");
            // },
            navPressBack: function () {
                history.go(-1);
            },

            onPressLogin: function () {
                debugger;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("RouteLogin");
            },
            onPressSignup: function () {
                debugger;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Register");
            },

            onFilterSearch: function (oEvent) {
                debugger;

                var sQuery = oEvent.getParameter("query"),
                    oTable = this.getView().byId("table1"),
                    oBinding = oTable.getBinding("items");

                if (oEvent.getId() == "liveChange") {
                    sQuery = oEvent.getParameter("query");
                }
                if (sQuery) {
                    var oFilter1 = new sap.ui.model.Filter('Bukrs', 'Contains', sQuery);
                    var oFilter2 = new sap.ui.model.Filter('Kunnr', 'Contains', sQuery);
                    var oFilter3 = new sap.ui.model.Filter('Land1', 'Contains', sQuery);
                    var oFilter4 = new sap.ui.model.Filter('Werks', 'Contains', sQuery);
                    var oFilter5 = new sap.ui.model.Filter('Name1', 'Contains', sQuery);
                    var oFilter6 = new sap.ui.model.Filter('Stras', 'Contains', sQuery);
                    var oFilter7 = new sap.ui.model.Filter('StatusCode', 'Contains', sQuery);
                    var oFilter8 = new sap.ui.model.Filter('StatusMsg', 'Contains', sQuery);

                    var aFilter = new sap.ui.model.Filter([oFilter1, oFilter2, oFilter3, oFilter4, oFilter5, oFilter6, oFilter7, oFilter8]);
                    // var aFilter = new sap.ui.model.Filter([oFilter1]);
                }
                oBinding.filter(aFilter);
            }
        });
    });
