import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        redirect: '/main'
    },
    {
        path: '/main',
        component: () => import('../views/main.vue')
    },
    {
        path: '/test',
        component: () => import('../views/test.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router