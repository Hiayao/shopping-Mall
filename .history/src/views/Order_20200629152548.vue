<template>
  <!-- 我的订单和已完成页 -->
  <div class="order_all">
    <div class="top">
      <van-nav-bar title="全部订单" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div>开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="待支付">
          <div>开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="代发货">
          <div>开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="待收货">
          <div>开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="已完成">
            <div class="orderback">
          <div v-for="item in list" :key="item.id" class="orderList">
            <div class="orderId">
              <div>订单编号：{{item.order_id}}</div>
              <div>已完成</div>
            </div></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- <div>
        <div v-for="item in list" :key="item.id">
            <div>{{item.order_id}}</div>
        </div>
    </div>-->
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
      list: [],
      active: 4
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
        this.list = res.list;
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
.orderback{
    background: rgb(243, 243, 243);
}
.orderId {
    display: flex;
}
.orderList{
    background: white;
    border: .5px solid #fff;
    border-radius: 5px 5px 5px 5px;
    height: 200px;
    width: 90%;
    margin-left: 5%;
    margin-top: 10px;
}
</style>