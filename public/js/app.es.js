import { defineAsyncComponent } from "vue";
window.Fusion.booting(function(Vue, router, store) {
  Vue.component("tags-fieldtype", defineAsyncComponent(() => import("./Field-63bb7dea.mjs")));
  const routes = [
    {
      path: "/tags",
      component: () => import("./Index-9198b877.mjs"),
      name: "tag",
      meta: {
        requiresAuth: true,
        layout: "admin"
      }
    },
    {
      path: "/tags/:id/edit",
      component: () => import("./Edit-fb56ed78.mjs"),
      name: "tag.edit",
      meta: {
        requiresAuth: true,
        layout: "admin"
      }
    }
    // {
    // 	path: '/tags/:tag/show',
    //     component: () => import('./pages/Tag/Show'),
    //     name: 'tag.show',
    //     meta: {
    //         requiresAuth: true,
    //         layout: 'admin'
    //     }
    // }
  ];
  routes.forEach((route) => {
    router.addRoute(route);
  });
});
window.addEventListener("DOMContentLoaded", function() {
});
