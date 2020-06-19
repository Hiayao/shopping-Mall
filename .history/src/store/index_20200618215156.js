import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[]
  },
  mutations: {
    setSlides(state,data){
      state.slides = data
    }
  },
  actions: {
  },
  modules: {
  }
})
