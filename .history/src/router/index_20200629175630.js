import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/City.vue')
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('../views/Sort.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
  },
  {
    path: '/addresslist',
    name: 'Addresslist',
    component: () => import('../views/Addresslist.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue')
  },
  {
    path: '/personaldata',
    name: 'PersonalData',
    component: () => import('../views/PersonalData.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue')
  },
  //订单结算页
  {
    path: '/settlement',
    name: 'Settlement',
    component: () => import('../views/Settlement.vue')
  },
  // 最近浏览页
  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../views/Browse.vue')
  },
  //收藏商品页
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },
   //我的订单页
   {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  //评价页
  {
    path: '/evaluate',
    name: 'Evaluate',
    component: () => import('../views/Evaluate.vue')
  },
  //评价晒单页
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('../views/Rate.vue')
  },
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
