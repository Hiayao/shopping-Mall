<template>
  <!-- 订单结算 -->
  <div>
    <div class="top">
      <van-nav-bar title="订单结算" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="news" v-if="add.length !== ''">
      <div>
        <van-icon name="location-o" size="30"/>
      </div>
      <div>
        <div class="person">
          <div>收货人：{{add.name}}</div>
          <div>{{add.tel}}</div>
        </div>
        <div class="person">收货地址：{{add.address}}</div>
        <div class="ps">（收货不便时，可选择免费接待收货服务）</div>
      </div>
      <div><van-icon name="arrow" size="20"/></div>
    </div>
    <div class="img"><img src="../assets/caitiao.jpg" alt="" class="img"></div>

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
        add:[],
        item:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
      this.item = this.$route.query.id
        console.log(this.item)

        this.$api.getDefaultAddress().then(res => {
            this.add = res.defaultAdd
            console.log(this.add)
        }).catch(err => {
            console.log(err)
        })

      this.$api.order(address,tel,orderId,totalPrice,idDirect,count).then(res => {
          console.log(res)
      }).catch(err => {
          console.log(err)
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.news{
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-around;
}
.person{
    display: flex;
    justify-content: space-between;
    height: 30px;
}
.ps {
    height: 30px;
    color: salmon;
}
.img {
    height: 5px;
    width: 100%;
}
</style>