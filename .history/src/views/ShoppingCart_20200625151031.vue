<template>
  <!-- 购物车 -->
  <div>
    <div class="top">购物车</div>
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

    <div class="shoplist">
      <div class="check">
        <van-checkbox v-model="checked" shape="square" checked-color="red"></van-checkbox>
      </div>
      <div v-for="item in shoplist" :key="item.id">
          <div><img :src="item.image_path" alt="" class="img"></div>
          <div>
              <div>{{item.name}}</div>
              <div>{{item.present_price}} * 1.00</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      checked: true,
      shoplist: []
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
  border-bottom: 0.5px solid #999;
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
}
.img{
    width: 100px;
    height: 100px;
    border: .5px solid #999;
}
</style>