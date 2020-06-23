<template>
<!-- 商品详情页 -->
 <div>
   <div class="ico">
   <van-icon name="arrow-left" size="40px" color="white"/></div>
   <div class="imgAll">
     <van-swipe :autoplay="3000">
  <van-swipe-item >
    <img v-lazy="goodsOne.image" class="img"/>
  </van-swipe-item>
  <van-swipe-item >
    <img v-lazy="goodsOne.image" class="img"/>
  </van-swipe-item>
</van-swipe>
   </div>
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
        goodsId:{},
        goodsOne:{}
     }
   },
   methods: {

   },
   mounted() {
       this.goodsId = this.$route.query.id
       console.log(this.goodsId)
       this.$api.goodsone(this.goodsId).then(res => {
         this.goodsOne = res.goods.goodsOne
           console.log(this.goodsOne)
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
.img {
  width: 100%;
  height: 330px;
}
.imgAll{
  width: 100%;
  height: 330px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
}
.ico {
  width: 50px;
  height: 50px;
  background: rgba(0,0,0,0.2);
  border-radius: 50%;
}
</style>