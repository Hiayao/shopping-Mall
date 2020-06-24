<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    //以下是解决vuex在刷新页面之后数据消失的办法
    //在页面加载时读取sessionStorage里的状态信息
    if (localStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>
<style lang="scss">
@import'./style/Style';

</style>
