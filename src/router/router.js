import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: () =>
            import ('../components/Index')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../components/login')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../components/register')
    },
    {
        path: '/information',
        name: 'information',
        component: () =>
            import ('../components/information')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router