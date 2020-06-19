<template>
  <div>
    <div class="top">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="recommend">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div class="nowCity"></div>
  </div></div>
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
.nowCity {
    width: 100%;
    height: 20px;
}
.recommend {
    width: 100%;
    height: 300px;
    background: rgb(242,242,242);
    padding: 10px 10px;
}
</style>