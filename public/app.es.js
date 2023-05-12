import { configureCompat } from "vue";
configureCompat({
  // default everything to Vue 2 behavior
  MODE: 2
});
window.Fusion.booting(function(Vue, router, store) {
  console.log("tag booting", Vue.version);
  Vue.component("tags-fieldtype2", require("./components/Fieldtypes/Tags/Field").default);
});
window.addEventListener("DOMContentLoaded", function() {
});
