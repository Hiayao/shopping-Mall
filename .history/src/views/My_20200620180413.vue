<template>
  <div>
    <div class="top">个人中心</div>

    <div class="card" v-if="this.user === null">
      <div>
        <van-image round width="7rem" height="7rem" src="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%9C%AA%E7%99%BB%E5%BD%95%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=2&spn=0&di=6160&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1426822276%2C3750139757&os=2503503415%2C2316112478&simid=4294060312%2C612211046&adpicid=0&lpn=0&ln=1669&fr=&fmq=1592647257416_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-30%2F021340324.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqqzit_z%26e3Bv54AzdH3Fp57xtwg2AzdH3F90l9mnAzdH3F&gsm=5&rpstart=0&rpnum=0&islist=&querylist=&force=undefined" />
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
        obj:{}
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
</style>