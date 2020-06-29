<template>
  <!-- 订单结算 -->
  <div>
    <div class="top">
      <van-nav-bar title="订单结算" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="news" v-if="add !== null">
      <div>
        <van-icon name="location-o" size="30" />
      </div>
      <div>
        <div class="person">
          <div>收货人：{{add.name}}</div>
          <div>{{add.tel}}</div>
        </div>
        <div class="person">收货地址：{{add.address}}</div>
        <div class="ps">（收货不便时，可选择免费接待收货服务）</div>
      </div>
      <div>
        <van-icon name="arrow" size="20" />
      </div>
    </div>
    <div class="news" style="text-decoration: underline;" v-else @click="gotoAdd">点击添加收货地址</div>
    <div class="border">
      <img src="../assets/caitiao.jpg" alt class="border" />
    </div>

    <div v-for="item in arr" :key="item.id">
      <div><img :src="item.image_path" alt="" class="img"></div>
    </div>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
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
      add: [],
      arr: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    gotoAdd() {
      this.$router.push("/addresslist");
    }
  },
  mounted() {
    this.arr = this.$route.query.id;
    console.log(this.arr);

    this.$api
      .getDefaultAddress()
      .then(res => {
        this.add = res.defaultAdd;
        console.log(this.add);
      })
      .catch(err => {
        console.log(err);
      });

    this.$api
      .order(address, tel, orderId, totalPrice, idDirect, count)
      .then(res => {
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
.news {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-around;
}
.person {
  display: flex;
  justify-content: space-between;
  height: 30px;
}
.ps {
  height: 30px;
  color: salmon;
}
.border {
  height: 5px;
  width: 100%;
}
.img {
  width: 100px;
  height: 100px;
  border: 0.5px solid #999;
  margin-right: 20px;
}
</style>