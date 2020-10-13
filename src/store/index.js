import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global: {
      phone: '0424 975 336',
      hours: {
        monFri: '9am – 4pm',
        sat: '9am – 12pm',
        sun: 'Closed'
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
