import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VModal from 'vue-js-modal'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// import VueAnalytics from 'vue-analytics'
import VueGtm from 'vue-gtm'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(VModal)

import VueNavigationBar from 'vue-navigation-bar'
Vue.component('vue-navigation-bar', VueNavigationBar)

Vue.config.productionTip = false

const requireComponent = require.context(
  // The relative path of the components folder
  './components/base',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

// Vue.use(VueAnalytics, {
//   id: 'UA-171123678-1',
//   router
// })

Vue.use(VueGtm, {
  id: 'GTM-MM4Z57X',
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: false, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
})

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
