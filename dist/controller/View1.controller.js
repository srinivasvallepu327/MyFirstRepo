sap.ui.define(["emc/fin/ar/cnu/controller/BaseController","emc/fin/ar/cnu/util/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,n,r){"use strict";return e.extend("emc.fin.ar.cnu.controller.View1",{formatter:t,onInit:function(){this.oRouter=this.getOwnerComponent().getRouter()},onNext:function(e){this.oRouter.navTo("detail",{fruitId:e})},onOrder:function(){alert("order has been confirmed")},onDelete:function(e){var t=e.getParameter("listItem");var n=e.getSource();n.removeItem(t)},getAllListItems:function(e){var t=this.getView().byId("idList");var n=t.getSelectedItems();return n},onDeleteData:function(){var e=this.getView().byId("idList");var t=this.getAllListItems();for(let n=0;n<t.length;n++){const r=t[n];e.removeItem(r)}},onSelectionChange:function(e){debugger;var t=e.getParameter("listItem");var n=t.getBindingContextPath();var r=n.split("/")[n.split("/").length-1];this.onNext(r)},onNavToNext:function(){var e=this.getAllListItems();var t=[];for(let r=0;r<e.length;r++){const i=e[r];var n=i.getModel().getProperty(i.getBindingContextPath());t.push(n)}this.getView().getModel().setProperty("/selectedFruits",t);this.onNext()},onSearch:function(e){var t=e.getParameter("query");if(!t){t=e.getParameter("newValue")}var i=new n("name",r.Contains,t);var o=new n("type",r.Contains,t);var a=[i,o];var s=new n({filters:a,and:false});var l=this.getView().byId("idList");l.getBinding("items").filter(s)}})});