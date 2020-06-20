<template>
  <div>
    <div class="top">个人中心</div>

    <div class="card" v-if="this.user === null">
      <div class="img">
        <van-image round width="7rem" height="7rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div>登录 / 注册</div>
    </div>

<div class="card" v-else>
      <div>
        <van-image round width="7rem" height="7rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div>欢迎您： {{obj.nickname}}</div>
      <div @click="goOut">退出登录</div>
    </div>


  </div>
</template>

<script>

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        user:null,
        obj:{},
         
    };
  },
  methods: {
      goOut(){
          localStorage.clear();
      }
  },
  mounted() {
      this.obj = JSON.parse(localStorage.getItem('user'))
  },
  watch: {},
  computed: {}
};
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.img{
    margin-bottom: 20px;
}
</style>