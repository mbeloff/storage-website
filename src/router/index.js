import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FaqPage from '../views/FaqPage.vue'
import Location from '../views/Location.vue'
import Pricing from '../views/Pricing.vue'
import NotFound from '../views/NotFound.vue'
import Success from '../views/Success.vue'
import SelfStorage from '../views/SelfStorage.vue'
import Workshops from '../views/Workshops.vue'

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
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
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
  routes
})

export default router
