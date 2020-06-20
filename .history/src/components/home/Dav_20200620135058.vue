<template>
  <!-- 底部导航 -->
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" @click="goHome">商城</van-tabbar-item>
      <van-tabbar-item icon="wap-nav" @click="goSort">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0,  //  导航默认下标是 0 指向的首页
      
    };
  },
  created() {

    this.active = JSON.parse(localStorage.getItem('active'))  // 每次进入组价的时候 从本地缓存中取出

  },

// 每次 改变将改变的数值 存入 本地缓存中
  methods: {
     change(active) {

      localStorage.setItem('active', active)

    },   // 监听 导航栏的变化   
    goHome(){
      this.$router.push('/')
    },
    goSort(){
      this.$router.push('/sort')
    }
  },
  mounted() {},
  watch: {
      $route() {

      switch (this.$route.path) {

        case '/':

          this.active = 0

          break

        case '/category':

          this.active = 1

          break

        case '/cart':

          this.active = 2

          break

        case '/profile':

          this.active = 3

          break

        default:

          this.active = -1

          break

      }

    }

  
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-tabbar--fixed {
    border-top: .5px solid rgb(233,229,229);
}
</style>