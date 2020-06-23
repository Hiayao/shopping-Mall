<template>
<!-- 商品详情页 -->
 <div>

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
        goodsOne:[]
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

</style>