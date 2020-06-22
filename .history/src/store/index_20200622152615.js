import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[],
    recommend:[],
    hotGoods:[],
  },
  mutations: {
    setSlides(state,data){
      state.slides = data
    },
    setCategory(state,data){
      state.category = data
    },
    setRecommend(state,data){
      state.recommend = data
    },
    setHotGoods(state,data){
      state.hotGoods = data
    },
    set
  },
  actions: {
  },
  modules: {
  }
})
