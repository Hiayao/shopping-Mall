<template>
<!-- 地址列表管理 -->
 <div>
<div class="top">
      <van-nav-bar title="地址列表" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div v-if="this.address.length === 0" class="null">
        您还没有收货地址哟~
    </div>


    <div class="address" @click="add">新增地址</div>
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
    },
    add(){
        this.$router.push('/address')
    }
   },
   mounted() {
this.$api.getAddress().then(res => {
    this.address = res.address
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
.null {
    width: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color:rgb(211, 211, 211);
    
}
.address{
    width: 100%;
    line-height: 50px;
    text-align: center;
    background: red;
    position: fixed;
    bottom: 0;
    color:white
}
</style>