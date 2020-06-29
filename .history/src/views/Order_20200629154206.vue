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
          <div v-for="item in list" :key="item.id" class="orderList">
            <div class="orderId">
              <div>订单编号：{{item.order_id}}</div>
              <div style="color:red">交易完成</div>
            </div>
            <div v-for="item1 in item.order_list" :key="item1.id">
                <div><img :src="item1.image_path" alt="" class="img"></div>
            </div>
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
.order_all {
  background: rgb(243, 243, 243);
}
.orderId {
    font-size: 13px;
  display: flex;
  line-height: 40px;
  justify-content: space-around;
  align-items: center;
  border-bottom: .2px solid rgb(243, 243, 243);
}
.orderList {
  background: #fff;
  border: 0.5px solid #fff;
  border-radius: 8px 8px 8px 8px;
  height: 200px;
  width: 90%;
  margin: 20px auto;
}
.img{
    width: 100px;
    height: 100px;
    border:1px solid rgb(243, 243, 243) ;
    border-radius: 10%;
}
</style>