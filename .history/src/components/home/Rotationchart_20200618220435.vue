<template>
 <div>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
      <div  v-for="(item,index) in slides" :key="index">
      <img :src="slides[0].image" alt="" class="img"></div>
      </van-swipe-item>
  
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
      height: 100%;
  }
</style>