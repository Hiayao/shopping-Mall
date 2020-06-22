<template>
  <div>
    <div class="top">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="recommend">
      <van-search v-model="value" placeholder="请输入搜索关键词" class="ipt" />
      <div class="nowCityWord">当前城市</div>
      <div class="nowCity">
        <div class="city"></div>
      </div>
    </div>
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
.nowCity {
  width: 100%;
  height: 20px;
}
.recommend {
  width: 100%;
  height: 300px;
  background: rgb(242, 242, 242);
  padding-top: 10px;
}
.van-search {
  width: 90%;
  margin-left: 5%;
  padding: 0 !important;
}
.van-search__content--square {
  background: white !important;
}
.nowCityWord {
  width: 100%;
  line-height: 40px;
  font-size: 15px;
}
.nowCity{
  width: 100%;
  height: 40px;
  background: white;
}
.city {
  background: yellowgreen;
  width: ;
}
</style>