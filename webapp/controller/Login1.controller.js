sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("customerapp.customerodataapp.controller.Login1", {
            onInit: function () {
                // var that = this;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Login1").attachPatternMatched(this.onRouteMatch, this);

                // that.onReadAll();
            },

            onRouteMatch: function (evt) {
                // onReadAll: function () {
                var that = this;
                debugger;

                var Usrnm = evt.mParameters.arguments.Id;
                var pass1 = evt.mParameters.arguments.password;

                // var key2 =  that.getView().getModel("Data1").getData.results;

                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCUSTOMAPP_SRV/");
                // var oModel = this.getOwnerComponent().getModel("RegistrationData");

                oModel.read("/CustomdetailsSet", {
                    success: function (odata) {
                        debugger;
                        var key2 = odata.results;
                        var array1 = [];

                        for (var i = 0; i < key2.length; i++) {
                            if (Usrnm === key2[i].Name1 && pass1 === key2[i].Password) {

                                array1.push(key2[i]);
                                var oModel1 = new sap.ui.model.json.JSONModel();
                                oModel1.setData(array1);
                                that.getView().setModel(oModel1, "Data1");
                                // MessageBox.success("Success");
                            }
                        }
                    },

                    error: function () {
                        MessageBox.error("error");
                    }
                });
            },

            // onPressReg: function() {
            //     var router = sap.ui.core.UIComponent.getRouterFor(this);
            //     router.navTo("View2");
            // },
            navPressBack: function () {
                history.go(-1);
            },

            onpressB: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Login1", { Id: "XX", password: "YY" });
            },

            // onPressLogin: function () {
            //     debugger;
            //     var router = sap.ui.core.UIComponent.getRouterFor(this);
            //     router.navTo("RouteLogin");
            // },
            // onPressSignup: function () {
            //     debugger;
            //     var router = sap.ui.core.UIComponent.getRouterFor(this);
            //     router.navTo("Register");
            // },          

            getSplitContObj: function () {
                var result = this.byId("SplitContDemo");
                if (!result) {
                    Log.error("SplitApp object can't be found");
                }
                return result;
            },

            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
                this.getSplitContObj().toDetail(this.createId(sToPageId));

            },

            // onCollapseExpandPress: function (oEvent) {
            //    debugger;
            //     var oSideNavigation = this.byId("sideNavigation");
            //     var bExpanded = oSideNavigation.getExpanded();

            //     oSideNavigation.setExpanded(!bExpanded);
            // },

            onPressDetailBack: function () {
                this.getSplitContObj().backDetail();
            },

            onpresslogout: function () {
                1
                debugger;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                // router.navTo("Detail");
                router.navTo("RouteDetail", { Id: "X", password: "Y" });
            },

            onclickfb: function () {
                var link = "https://www.facebook.com/"
                //open in same window
                window.location.href = link;
                //open in new window
                //   window.open(link);
                //Or we can use sap URLHelper control to redirect into a new page
                //  sap.m.URLHelper.redirect(link, true);
            },
            onclickinsta: function () {
                var link = "https://www.instagram.com/accounts/login/"
                //open in same window
                //   window.location.href = link;
                //open in new window
                window.open(link);
                //Or we can use sap URLHelper control to redirect into a new page
                //  sap.m.URLHelper.redirect(link, true);
            },
            onclicktwitter: function () {
                var link = "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                //open in same window
                //  window.location.href = link;
                //open in new window
                // window.open(link);
                //Or we can use sap URLHelper control to redirect into a new page
                sap.m.URLHelper.redirect(link, true);
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
