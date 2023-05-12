(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(require("vue")) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Vue));
})(this, function(vue) {
  "use strict";
  vue.configureCompat({
    // default everything to Vue 2 behavior
    MODE: 2
  });
  window.Fusion.booting(function(Vue, router, store) {
    console.log("tag booting", Vue.version);
    Vue.component("tags-fieldtype2", require("./components/Fieldtypes/Tags/Field").default);
  });
  window.addEventListener("DOMContentLoaded", function() {
  });
});
