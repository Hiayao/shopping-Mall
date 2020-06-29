<template>
  <!-- 订单结算 -->
  <div>
    <div class="top">
      <van-nav-bar title="订单结算" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="news">
      <div>
        <van-icon name="location-o" size="30"/>
      </div>
      <div>
        <div class="person">
          <div>收货人：</div>
          <div>电话</div>
        </div>
        <div>收货地址：</div>
        <div>（收货不便时，可选择免费接待收货服务）</div>
      </div>
      <div><van-icon name="arrow" size="20"/></div>
    </div>
    <div class="img"><img src="../assets/caitiao.jpg" alt="" class="img"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.news{
    display: flex;
    height: 100px;
    background: red;
    align-items: center;
    justify-content: space-around;
}
.person{
    display: flex;
    justify-content: space-between;
}
.img {
    height: 5px;
    width: 100%;
}
</style>