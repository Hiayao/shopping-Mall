import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[],
    recommend:[],
    hotGoods:[],
    city:[],
   shopList:[],
   cartNum:0,
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
    setCity(state,data){
      state.city = data
    },
   setShopList(state,data){
     state.shopList = data
   },
   setCarNum(state,data){
     state.cartNum =data
   },
   addCartNum(state){
     state.cartNum += 1
   }
  },
  actions: {
  },
  modules: {
  }
})
