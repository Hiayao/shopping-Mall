<template>
  <!-- 我的订单和已完成页 -->
  <div class="order_all">
    <div class="top">
      <van-nav-bar title="全部订单" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div class="text">开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="待支付">
          <div class="text">开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="代发货">
          <div class="text">开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="待收货">
          <div class="text">开发中，请等待哦~</div>
        </van-tab>
        <van-tab title="已完成">
          <div v-for="item in list" :key="item.id" class="orderList">
            <div class="orderId">
              <div>订单编号：{{item.order_id}}</div>
              <div style="color:red">交易完成</div>
            </div>
            <div v-for="item1 in item.order_list" :key="item1.id" class="list">
              <div>
                <img :src="item1.image_path" alt class="img" />
              </div>
              <div class="namePrice">
                <div class="name">{{item1.name}}</div>
                <div class="price">￥{{item1.mallPrice}}</div>
              </div>
              <div class="count">X{{item1.count}}</div>
            </div>
            <div class="time">
              <div>创建时间：{{item.add_time}}</div>
              <div>收货地址：{{item.address}}</div>
              <div>共{{item.order_list.length}}件商品 合计:{{item.mallPrice}}元</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
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
    return {
      list: [],
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    this.active = this.$route.query.id
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
  border-bottom: 0.5px solid rgb(236, 236, 236);
}
.orderList {
  background: #fff;
  border: 0.5px solid #fff;
  border-radius: 8px 8px 8px 8px;
  //   height: 00px;
  width: 90%;
  margin: 20px auto;
}
.img {
  width: 100px;
  height: 100px;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 10%;
  // margin-left: 10px;
  margin-top: 10px;
}
.list {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-bottom: 8px;
  border-bottom: 0.5px solid rgb(236, 236, 236);
}
.namePrice {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
}
.price {
  margin-top: 40px;
}
.count {
  margin-top: 60px;
  color: #999;
}
.name {
  width: 160px;
}
.time {
  font-size: 14px;
  text-align: right;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 10px;
}
.top{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
}
.tab{
    margin-top: 46px;
}
.text{
  background: white;
  font-size: 18px;
  width: 100%;
  text-align: center;
  padding-top: 20px;
}
</style>