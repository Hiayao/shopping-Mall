<template>
  <!-- 首页热销商品 -->
  <div>
    <div class="title">热销商品</div>
    <div class="All">
      <van-grid :border="true" :column-num="2">
        <van-grid-item v-for="item in hotGoods" :key="item.id">
            <div class="img">
          <van-image :src="item.image" /></div>
          <div class="name">{{item.name}}</div>
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
.title {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 76, 56);
}
.name {
    margin-top: 10px;
    width: 185px;
    display: flex;
//      text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
}

</style>