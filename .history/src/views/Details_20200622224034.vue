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
        id:''
     }
   },
   methods: {

   },
   mounted() {
       
       this.$api.goodsone({id:this.$route.query.id}).then(res => {
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