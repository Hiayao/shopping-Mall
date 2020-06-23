<template>
<!-- 商品详情页 -->
 <div>
   <div>
     <van-swipe :autoplay="3000">
  <van-swipe-item >
    <img v-lazy="goodsOne.image_path" class="img"/>
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
</style>