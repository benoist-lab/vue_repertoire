import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Padresse from "../views/Padresse.vue"
import Ppersonne from "../views/Ppersonne.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/adresses',
    name: 'Padresse',
    component: Padresse
  },
  {
    path: '/personnes',
    nape: 'Ppersonne',
    component: Ppersonne
  }
]

const router = new VueRouter({
  routes
})

export default router
