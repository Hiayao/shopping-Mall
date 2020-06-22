<template>
<!-- 地址管理 -->
 <div>
<div class="top">
      <van-nav-bar title="地址列表" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div v-if="this.address === ''">
        您还没有收货地址哟~
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
address:[]
     }
   },
   methods: {
 onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
   },
   mounted() {
this.$api.getAddress().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>