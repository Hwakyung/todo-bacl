import jwtDecode from 'jwt-decode'

const state = {
  token: null, 
}
const mutations = {
  setToken: function(state,token){
    state.token = token 
    // 
  }
}
const actions = {
  login: function(options,token){
    //options는 mutations에 접근 가능
    options.commit('setToken',token)
    // set token이 될 때, 
  },
  logout: function(options){
    options.commit('setToken',null)
  }
}

const getters = {
  isAuthenticated: function(state){
    return state.token ? true:false
  },
  requestHeader: function(){
    return {
      headers: {
        Authorization: "JWT " + state.token
      }
    }
  },
  userId: function(){
    return state.token ? jwtDecode(state.token).user_id : null
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}