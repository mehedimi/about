import Vue from 'vue'
import Router from 'vue-router'

import About from '../views/About'
import Blog from '../views/Blog'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: About,
        name: 'about'
    },
    {
        path: '/blog',
        component: Blog,
        name: 'blog'
    }
]


export default new Router({
    routes,
    linkActiveClass: 'is-active'
})