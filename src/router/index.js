import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const FaqPage = () => import('../views/FaqPage.vue')
const Location = () => import('../views/Location.vue')
const NotFound = () => import('../views/NotFound.vue')
const Success = () => import('../views/Success.vue')
const SelfStorage = () => import('../views/SelfStorage.vue')
const Workshops = () => import('../views/Workshops.vue')
const MobileStorage = () => import('../views/MobileStorage.vue')
// const Specials = () => import('../views/Specials.vue')
const Autostorage = () => import('../views/Autostorage.vue')
const Privacy = () => import('../views/Privacy.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqPage
  },
  {
    path: '/selfstorage',
    name: 'self storage',
    component: SelfStorage
  },
  {
    path: '/workshops',
    name: 'workshops',
    component: Workshops
  },
  {
    path: '/mobilestorage',
    name: 'mobile storage',
    component: MobileStorage
  },
  {
    path: '/autostorage',
    name: 'auto storage',
    component: Autostorage
  },
  {
    path: '/about',
    name: 'Location',
    component: Location
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  // {
  //   path: '/specials',
  //   name: 'Specials',
  //   component: Specials
  // },
  {
    path: '/:type/thanks',
    name: 'Success',
    component: Success,
    props: true
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
