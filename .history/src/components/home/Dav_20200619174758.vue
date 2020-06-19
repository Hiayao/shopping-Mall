<template>
<!-- 底部导航 -->
 <div>
<van-tabbar v-model="active">
  <van-tabbar-item >
    <span>商城</span>
    <template icon="wap-home-o
">
      <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="search">分类</van-tabbar-item>
  <van-tabbar-item icon="setting-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
</van-tabbar>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>