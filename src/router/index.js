import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
]

const router = new Router({
    mode: 'history',
    base: import.meta.env.VITE_BASE_URL,
    routes
})

export default router