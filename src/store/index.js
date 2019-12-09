import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
Vue.use(Vuex)

export default new Vuex.Store({
  // vue에서 data
  state: {
  },
  // vue에서 methods
  mutations: {
  },
  // vue에서  methods들을 묶어놓음
  actions: {
  },
  modules: {
    auth,
    //모듈에 들어 있는 state, mutations, actions에 저장
  }
})
