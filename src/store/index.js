import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global: {
      phone: '0417 740 307',
      hours: {
        monFri: '9am - 4pm',
        sat: '9am - 12pm',
        sun: 'Closed'
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
