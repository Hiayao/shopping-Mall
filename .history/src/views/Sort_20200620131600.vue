<template>
  <div>
    <!-- 顶部title -->
    <div class="top">商品分类</div>

    <!-- 侧面导航 -->
    <div class="SideNavigation">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="sss" />
      </van-sidebar>
    </div>

    <!-- 底部导航 -->
    <div>
      <Dav></Dav>
    </div>
  </div>
</template>

<script>
import Dav from "../components/home/Dav";

export default {
  name: "",
  props: {},
  components: {
    Dav
  },
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {},
  mounted() {
    this.$api
      .classification()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    category() {
      return this.$store.state.category; //商品分类
    }
  }
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
.SideNavigation {
  margin-top: 50px;
  height: 617px;
  background: rgb(247, 248, 250);
}
</style>