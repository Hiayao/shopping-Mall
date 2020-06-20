<template>
 <div>
     <!-- 顶部title -->
     <div class="top">商品分类</div>


<!-- 底部导航 -->
    <div>
      <Dav></Dav>
    </div>
 </div>
</template>

<script>
import Dav from "../components/home/Dav";

 export default {
   name: '',
   props: {
   },
   components: {
Dav
   },
   data () {
     return {

     }
   },
   methods: {

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
.top {
  width: 100%;
  height: 50px;
  background: rgb(242, 242, 242);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 99;
}
</style>