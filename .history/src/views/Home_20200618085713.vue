<template>
 <div>
<div class="nn"></div>
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
       this.$api.recommend(res => {
         console.log(res.data)
       }).then().catch()
       
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.nn{
    width: 100px;
    height: 100px;
    background: skyblue;
}
</style>