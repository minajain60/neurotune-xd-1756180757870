sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
  "use strict";

  /**
   * @class App controller
   * @public
   */
  return Controller.extend("converted.me23nlikeview.controller.App", {
    /**
     * Called when the app controller is initialized.
     * @public
     */
    onInit: function () {
      // Log initialization message
      console.log("App controller initialized");

      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);

      if (oRouter) {
        // Log router initialization message
        console.log("Router found, initializing navigation");

        // Add error handling for routing
        oRouter.attachBypassed(function (oEvent) {
          // Log bypassed route
          console.log("Route bypassed:", oEvent.getParameter("hash"));
        });

        // Navigate to main view if no hash is set
        if (!window.location.hash || window.location.hash === "#") {
          // Log navigation message
          console.log("No hash found, navigating to main route");

          // Navigate to main route after a short delay
          setTimeout(function () {
            oRouter.navTo("RouteMain");
          }, 100);
        }
      } else {
        // Log error message if router is not found
        console.error("Router not found in App controller");
      }
    }
  });
});
