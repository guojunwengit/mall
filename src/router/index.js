import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import login from '@/components/login.vue'
import login2 from '@/components/login2.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/',
            name: 'login2',
            component: login2
        }

    ]
})