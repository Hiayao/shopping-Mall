<template>
<!-- 最近浏览页面 -->
 <div>
<div class="top">
      <van-nav-bar title="最近浏览" left-text left-arrow @click-left="onClickLeft" />
    </div>
 </div>
</template>

<script>
import { Toast } from "vant";
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
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