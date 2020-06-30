<template>
  <!-- 评价页 -->
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div><img src="../assets/evaluate.jpg" alt="" class="img"></div>
    <div><van-tabs v-model="active">
  <van-tab title="待评价">内容 1</van-tab>
  <van-tab title="已评价">内容 2</van-tab>
</van-tabs></div>
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
.img{
    width: 100%;
}
</style>