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

     }
   },
   methods: {

   },
   mounted() {
       this.id = this.$router.query.id
       this.$api.goodsone(id).then(res => {
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