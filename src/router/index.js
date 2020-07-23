import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FaqPage from '../views/FaqPage.vue'
import Location from '../views/Location.vue'
import NotFound from '../views/NotFound.vue'
import Success from '../views/Success.vue'
import SelfStorage from '../views/SelfStorage.vue'
import Workshops from '../views/Workshops.vue'
import MobileStorage from '../views/MobileStorage.vue'
import Specials from '../views/Specials.vue'
import Autostorage from '../views/Autostorage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Services.vue')
  },
  { path: '/faq', name: 'faq', component: FaqPage },
  { path: '/selfstorage', name: 'self storage', component: SelfStorage },
  { path: '/workshops', name: 'workshops', component: Workshops },
  { path: '/mobilestorage', name: 'mobile storage', component: MobileStorage },
  { path: '/autostorage', name: 'auto storage', component: Autostorage },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/specials',
    name: 'Specials',
    component: Specials
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
