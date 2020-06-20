<template>
 <div>
<div class="top">个人中心</div>
<div class="card">
    <div class=""><van-image
  round
  width="7rem"
  height="7rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/></div>
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
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 99;
}
.card {
    width: 100%;
    height: 260px;
    background: skyblue;
    margin-top: 50px;
}
</style>