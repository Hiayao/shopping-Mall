<template>
  <!-- 购物车 -->
  <div>
    <div class="top">购物车</div>

    <div class="tip">
      <div class="sure">
        <div class="check">
          <van-checkbox v-model="checked" shape="square" checked-color="red">全选</van-checkbox>
        </div>
        <div class="total">
          <div>合计：</div>
          <div>请确认订单</div>
        </div>
      </div>
      <div class="btn">
        <div>
          <van-button color="skyblue">删除</van-button>
        </div>
        <div class="settlement">
          <van-button color="skyblue">去结算</van-button>
        </div>
      </div>
    </div>

    <div class="list">
      <div class="shoplist" v-for="item in shoplist" :key="item.id">
        <div class="check">
          <van-checkbox v-model="checke" shape="square" checked-color="red"></van-checkbox>
        </div>
        <div class="details">
          <div>
            <img :src="item.image_path" alt class="img" />
          </div>
          <div class="nume">
            <div class="name">{{item.name}}</div>
            <div class="price">
              <div class="present">￥{{item.present_price}}</div>
              <div>
                <van-stepper v-model="item.count" theme="round" button-size="22" disable-input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dav">
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
      checked: true,
      checke: true,
      shoplist: [],
      value: 1
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getCard()
      .then(res => {
        this.shoplist = res.shopList;
        console.log(this.shoplist);
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
  height: 60px;
  border-bottom: 0.5px solid rgb(209, 209, 209);
  align-items: center;
}
.check {
  flex: 1;
  margin-left: 10px;
}
.total {
  flex: 1;
}
.btn {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.settlement {
  margin-left: 10px;
  margin-right: 10px;
}
.shoplist {
  margin-top: 10px;
  height: 120px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid rgb(209, 209, 209);
}
.img {
  width: 100px;
  height: 100px;
  border: 0.5px solid #999;
  margin-right: 20px;
}
.price {
  display: flex;
  width: 170px;
  justify-content: space-between;
}
.details {
  display: flex;
  flex: 6;
}
.name {
  margin-top: 10px;
  margin-bottom: 40px;
  color: red;
}
.present {
  font-size: 18px;
  color: red;
}
.dav {
  margin-top: 200px;
}
.tip {
  position: fixed;
  width: 100%;
  background: white;
  z-index: 1;
margin-bottom: 100px;
}
.list{
    position: relative;
    top: 170px;
}
</style>