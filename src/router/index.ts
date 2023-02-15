import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import main from '../views/main.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        redirect: '/main'
    },
    {
        path: '/login',
        component: ()=>import('../views/login.vue')
    },
    {
        path: '/main',
        component: main
    },
    {
        path: "/reportHistory",
        component: () => import('../views/reportHistory.vue')
    },
    {
        path: "/backManage",
        component: () => import('../views/backManage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router