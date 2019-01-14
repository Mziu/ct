import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/home/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about/index.vue')
    },
    {
      path: '/dog',
      name: 'dog',
      component: () => import('./views/contact/dog.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/contact/index.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./views/add/index.vue')
    },
    {
      path: '/exclassic',
      name: 'exclassic',
      component: () => import('./views/exclassic/index.vue')
    },
    {
      path: '/dteam',
      name: 'dteam',
      component: () => import('./views/dteam/index.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/exclassic/detail.vue')
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: () => import('./views/carousel.vue')
    },
  ]
})
