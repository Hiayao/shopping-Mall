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
        goodsId:''
     }
   },
   methods: {

   },
   mounted() {
       this.goodsId = this.$route.query.id
       console.log(this.goodsIdd)
       this.$api.goodsone(this.id).then(res => {
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