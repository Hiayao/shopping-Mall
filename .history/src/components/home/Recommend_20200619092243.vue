<template>
  <div>
    <div class="title">商品推荐</div>
    <div>
      <van-grid :column-num="3">
        <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文字" />
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
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  width: 100%;
  height: 25px;
  padding: 10px;
  // border-bottom: 1px solid;
}
</style>