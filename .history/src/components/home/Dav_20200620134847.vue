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
      active: 0,
      
    };
  },
  methods: {
    goHome(){
      this.$router.push('/')
    },
    goSort(){
      this.$router.push('/sort')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-tabbar--fixed {
    border-top: .5px solid rgb(233,229,229);
}
</style>