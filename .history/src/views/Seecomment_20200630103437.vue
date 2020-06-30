<template>
<!-- 查看评论 -->
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
         list:[]
     }
   },
   methods: {

   },
   mounted() {
       this.list = this.$route.query.id
       console.log(this.list);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>