<template>
 <div>
<div><van-nav-bar
  title="城市列表"
  left-text="返回"
 
  left-arrow
  @click-left="onClickLeft"
  
/></div>
 </div>
</template>

<script>
import { Toast } from 'vant';
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
 onClickLeft() {
     this.$router.go(-1)
      Toast('返回');
    },
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
* {
    background: rgb(242,242,242);
}
</style>