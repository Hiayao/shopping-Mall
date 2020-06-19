<template>
 <div>
<div class="top"></div>
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
       this.$api.recommend().then(res => {
         console.log(res.data)
       }).catch()
       
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.top{
    width: 100%;
    height: 30px;
    background: skyblue;
}
</style>