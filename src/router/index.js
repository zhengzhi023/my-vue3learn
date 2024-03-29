import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('@/views/Layout/index.vue'),
            children: [{
                    path: '',
                    component: () => (
                        import ('@/views/home/index.vue'))
                },
                {
                    path: 'category',
                    component: () => (
                        import ('@/views/category/index.vue'))
                }

            ]
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('@/views/login/index.vue')
        }
    ]
})

export default router