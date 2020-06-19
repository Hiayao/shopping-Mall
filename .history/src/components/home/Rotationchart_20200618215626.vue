<template>
 <div>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-for="(item,index) in slides" :key="index">
  <van-swipe-item><img :src="item.image[1]" alt="" class="img"></van-swipe-item>
  
</van-swipe>
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

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {
slides(){
      return this.$store.state.slides 
    }
   }
 }
</script>

<style scoped lang='scss'>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .img{
      width: 100%;
      height: 100px;
  }
</style>