sap.ui.define([
    'emc/fin/ar/cnu/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc.fin.ar.cnu.controller.App",{
        onInit: function(){
            console.log("Hey folks!! the App Controller is ready Now");
        }
    });
});