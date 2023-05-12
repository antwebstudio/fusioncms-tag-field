import { defineAsyncComponent } from 'vue'

window.Fusion.booting(function(Vue, router, store) {
    Vue.component('tags-fieldtype', defineAsyncComponent(() => import('./components/Fieldtypes/Tags/Field.vue')))

	const routes = [
		{
			path: '/tags',
            component: () => import('./pages/Tag/Index.vue'),
            name: 'tag',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
		},
		{
			path: '/tags/:id/edit',
            component: () => import('./pages/Tag/Edit.vue'),
            name: 'tag.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
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
	]
    routes.forEach((route) => {
        router.addRoute(route)
    })
})

window.addEventListener('DOMContentLoaded', function () {
})
