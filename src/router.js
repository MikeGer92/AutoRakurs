import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('./views/Home.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta: {layout: 'main'},
    component: () => import('./views/Catalog.vue')
  },
  {
    path: '/credit',
    name: 'credit',
    meta: {layout: 'main'},
    component: () => import('./views/Credit.vue')
  },
  {
    path: '/tradein',
    name: 'tradein',
    meta: {layout: 'main'},
    component: () => import('./views/TradeIn.vue')
  },
  {
    path: '/actions',
    name: 'actions',
    meta: {layout: 'main'},
    component: () => import('./views/Actions.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'main'},
    component: () => import('./views/About')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router