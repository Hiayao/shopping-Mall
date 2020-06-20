<template>
  <div class="sort_all">
    <!-- 顶部title -->
    <div class="top">商品分类</div>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 下拉刷新 -->

      <!-- 侧面导航 -->
      <div class="SideNavigation">
        <van-sidebar v-model="activeKey">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" />
          </div>
        </van-sidebar>

        <van-tabs v-model="active" class="tab">
          <div v-for="(item,index) in category.data.bxMallSubDto" :key="index">
          <van-tab :title="item.mallSubName">内容 1</van-tab>
          </div>
        </van-tabs>
      </div>
    </van-pull-refresh>

    <!-- 底部导航 -->
    <div>
      <Dav></Dav>
    </div>
  </div>
</template>

<script>
import Dav from "../components/home/Dav";
import { Toast } from "vant"; //下拉刷新
export default {
  name: "",
  props: {},
  components: {
    Dav
  },
  data() {
    return {
      activeKey: 0,
      isLoading: false, //下拉刷新是否处于加载中状态初始
      mallCategoryId: 1,
      active: 1,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功"); //下拉刷新时触发的
        this.isLoading = false;
      }, 1000);
    }
  },
  mounted() {
    this.$api
      .classification("mallSubId", { id: this.mallCategoryId })
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
  display: flex;
}
.tab{
  width: 100%;
}
.van-sidebar{
  width: 27.667vw;
}

</style>