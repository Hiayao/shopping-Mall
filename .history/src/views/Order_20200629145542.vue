<template>
  <!-- 我的订单和已完成页 -->
  <div>
    <div class="top">
      <van-nav-bar title="全部订单" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div>
        <van-tabs v-model="active">
  <van-tab title="全部">内容 1</van-tab>
  <van-tab title="待支付">内容 2</van-tab>
  <van-tab title="代发货">内容 3</van-tab>
  <van-tab title="待收货">内容 4</van-tab>
  <van-tab title="已完成">内容 5</van-tab>
</van-tabs>
    </div>

    <!-- <div>
        <div v-for="item in list" :key="item.id">
            <div>{{item.order_id}}</div>
        </div>
    </div> -->
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        list:[],
        active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    this.$api
      .getMyOrder()
      .then(res => {
          this.list = res.list
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>