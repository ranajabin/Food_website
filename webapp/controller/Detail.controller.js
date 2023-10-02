sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, FilterOperator, Filter) {
        "use strict";

        return Controller.extend("customerapp.customerodataapp.controller.Detail", {
            onInit: function () {
                var that = this;
                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // oRouter.getRoute("Detail").attachPatternMatched(this.onRouteMatch, this);
                this.onReadAll();
            },

            onItemSelect: function (oEvent) {
                debugger;
                var oItem = oEvent.getParameter("item");
                this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
            },

            onSideNavButtonPress: function () {
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();
    
                this._setToggleButtonTooltip(bSideExpanded);
    
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },
    
            _setToggleButtonTooltip: function (bLarge) {
                var oToggleButton = this.byId('sideNavigationToggleButton');
                if (bLarge) {
                    oToggleButton.setTooltip('Large Size Navigation');
                } else {
                    oToggleButton.setTooltip('Small Size Navigation');
                }
            },

            // onRouteMatch: function (evt) {
            onReadAll: function (evt) {
                var that = this;
                debugger;

                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPLANTDETAILS_SRV/");

                // var keyId2 = evt.mParameters.arguments.Id;
                // var password2 = evt.mParameters.arguments.password;

                oModel.read("/InputPlantInfoSet", {
                    success: function (odata1) {
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata1);
                        that.getView().setModel(oModel1, "Data1");
                        MessageBox.success("Success");

                        // var key2 = oModel1.oData.results;
                        // var array1 = [];

                        // for (var i = 0; i < key2.length; i++) {
                        //     if (keyId2 === key2[i].AppUsrid && password2 === key2[i].password) {
                        //         array1.push(key2[i]);

                        //         var array2 = new sap.ui.model.json.JSONModel();
                        //         array2.setData(array1);
                        //         this.getView().setModel(array2, "array2");
                        //     }
                        // }
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
                    //     alert("Error");
                    // }
                });
            },

            // onPressReg: function() {
            //     var router = sap.ui.core.UIComponent.getRouterFor(this);
            //     router.navTo("View2");
            // },

            onLoadDialog: function () {
                debugger;
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "customerapp.customerodataapp.fragments.fragment1"
                    });
                }

                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },

            handleCloseDialog: function () {
                this.byId("idDialog").close();
            },

            navPressBack: function () {
                history.go(-1);
            },

            onPressLogin: function () {
                debugger;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Login");
                // router.navTo("LogReg", {loginreg: "lg"});
            },
            onPressSignup: function () {
                debugger;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("Register");
                // router.navTo("LogReg", {loginreg: "Rl"});
            },

            onNavNext: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("View4");
            },

            onPressGetApp: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("GetApp");
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
                    // var aFilter = new sap.ui.model.Filter([oFilter6]);
                }
                oBinding.filter(aFilter);
            },
            // onSearch: function() {
            //     var router = sap.ui.core.UIComponent.getRouterFor(this);
            //     router.navTo("View4");
            // },

            onSearch: function () {
                debugger;
                // var that = this;
                // var oBinding = this.getView().byId("Table1").getBinding("rows"),
                var oTable = this.getView().byId("table1"),
                    oBinding = oTable.getBinding("items");

                var oFinalFilter = [],
                    aFilterStras = [],
                    aFilterName = []

                //   var sQuery = this.byId("_idName").getSelectedItems()[0].mProperties.text;
                // var sStras = this.byId("_idStras").getSelectedItems(),
                //     sName = this.byId("_idName1").getSelectedItems(); 

                // var sStras = this.byId("_empShftA").getSelectedItems().getText(),
                var sStras = this.byId("_empShftA")._lastValue,
                    sName = this.byId("_idName1").getValue();

                if (
                    !sStras.length > 0 && !sName.length > 0
                ) {
                    !oBinding.filter([]);
                } else {
                    for (var i = 0; i < sStras.length; i++) {
                        aFilterStras.push(
                            new sap.ui.model.Filter({
                                path: "Stras",
                                operator: FilterOperator.EQ,
                                value1: sStras[i]._lastValue,
                            })
                        );
                    }
                    for (var i = 0; i < sName.length; i++) {
                        aFilterName.push(
                            new sap.ui.model.Filter({
                                path: "Name1",
                                operator: FilterOperator.EQ,
                                value1: sName[i].getValue,
                            })
                        );
                    }

                    if (aFilterStras.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterStras,
                        }));
                    }
                    if (aFilterName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterName,
                        }));
                    }

                    oBinding.filter(oFinalFilter);
                }
                // MessageToast.show("Search Button has been Pressed!");
                alert("Search Button has been Pressed!");
            },

            onRatingChange: function (oEvent) {
                debugger;
                var fValue = oEvent.getParameter("value");
                var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
    
                new sap.m.MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
            }

        });
    });
