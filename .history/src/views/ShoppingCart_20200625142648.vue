<template>
  <!-- 购物车 -->
  <div>
    <div class="top">购物车</div>
    <div class="sure">
      <div class="check">
        <van-checkbox v-model="checked" shape="square" checked-color="red">复选框</van-checkbox>
      </div>
      <div class="total">
          <div>合计：</div>
          <div>请确认订单</div>
      </div>
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
      checked: true
    };
  },
  methods: {},
  mounted() {},
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
.sure {
  margin-top: 50px;
  display: flex;
}
.check{
    flex: 1;
}
.total{
    flex: 1;
}
</style>