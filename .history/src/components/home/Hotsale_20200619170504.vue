<template>
  <!-- 首页热销商品 -->
  <div>
    <div class="name">热销商品</div>
    <div>
      <van-grid :border="true" :column-num="3">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    hotGoods() {
      return this.$store.state.hotGoods;
    }
  }
};
</script>

<style scoped lang='scss'>
.name {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 76, 56);
}
</style>