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
  // 登录页
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // 选择城市定位页
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/City.vue')
  },
  // 分类页
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('../views/Sort.vue')
  },
  // 我的个人中心页
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
  },
  // 地址列表页
  {
    path: '/addresslist',
    name: 'Addresslist',
    component: () => import('../views/Addresslist.vue')
  },
  // 地址编辑页
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue')
  },
  // 个人资料页
  {
    path: '/personaldata',
    name: 'PersonalData',
    component: () => import('../views/PersonalData.vue')
  },
  // 商品详情页
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  // 购物车
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
  //查看评价页
  {
    path: '/seecomment',
    name: 'Seecomment',
    component: () => import('../views/Seecomment.vue')
  },
]

// 避免出错 冗余导航
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
