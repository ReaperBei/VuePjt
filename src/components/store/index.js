import Vue from 'vue'
import Vuex from 'vuex'
import login from './data'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    login
  }
})
