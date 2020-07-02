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
        <van-icon name="arrow" size="20" @click="gotoAdd" />
      </div>
    </div>
    <div class="news" style="text-decoration: underline;" v-else @click="gotoAdd">点击添加收货地址</div>
    <div class="border">
      <img src="../assets/caitiao.jpg" alt class="border" />
    </div>

    <div class="shoplist">
      <!-- 从购物车购买 -->
      <div v-if="this.list[1] === false">
        <div v-for="item in arr" :key="item.id" class="shop">
          <div class="imgAll">
            <img :src="item.image_path" alt class="img" />
          </div>
          <div class="namePrice">
            <div class="name">{{item.name}}</div>
            <div class="price">{{item.mallPrice | fixed}}</div>
          </div>
          <div class="num">X{{item.count}}</div>
        </div>
      </div>
      <!-- 直接购买 -->
      <div v-else>
        <div class="shop">
          <div class="imgAll">
            <img :src="obj.image_path" alt class="img" />
          </div>
          <div class="namePrice">
            <div class="name">{{obj.name}}</div>
            <div class="price">{{obj.present_price | fixed}}</div>
          </div>
          <div class="num">X{{obj.count}}</div>
        </div>
      </div>
    </div>
    <!-- 从购物车购买 -->
    <van-submit-bar
      :price="total * 100"
      button-text="提交订单"
      v-if="this.list[1] === false"
      @submit="onSubmit"
    />
    <!-- 直接购买 -->
    <van-submit-bar
      :price="obj.count * obj.present_price * 100"
      button-text="提交订单"
      v-else
      @submit="onSubmit"
    />
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
      arr: [],
      num: 10,
      orderId: [],
      idDirect: false,
      obj: {},
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    // 去选择地址
    //当购物车购买跳转地址列表传值false
    //当直接购买跳转地址列表传值true
    gotoAdd() {
      if (this.list[1] === false) {
        this.$router.push({ path: "/addresslist", query: { id: false } });
      } else {
        this.$router.push({ path: "/addresslist", query: { id: true } });
      }
    },
    onSubmit() {
      // 从购物车购买
      if (this.list[1] === false) {
        this.$api
          .order(
            this.add.address,
            this.add.tel,
            this.orderId,
            this.total,
            this.idDirect,
            this.orderId.length
          )
          .then(res => {
            this.$router.push("/");
            Toast({
              message: res.msg,
              icon:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593419078985&di=2823bf1087891bf9c22cef3a0e0ac2f4&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F33%2F78%2F581131d0d6ede_610.jpg"
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
      // 直接购买
      else {
        // 将字符串转换成数组 .split(",")
        this.orderId = this.obj.id.split(",");
        console.log(this.orderId);
        this.$api
          .order(
            this.add.address,
            this.add.tel,
            this.orderId,
            this.obj.count * this.obj.present_price,
            this.list[1],
            this.obj.count
          )
          .then(res => {
            this.$router.push("/");
            Toast({
              message: res.msg,
              icon:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593419078985&di=2823bf1087891bf9c22cef3a0e0ac2f4&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F33%2F78%2F581131d0d6ede_610.jpg"
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  
  mounted() {
    // 获取默认地址
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.add = res.defaultAdd;
        console.log(this.add);
      })
      .catch(err => {
        console.log(err);
      });
      // list接收其他路由跳转到结算页的参数
      // arr是购物车购买存在localStorage里的商品信息
      // obj是直接购买存在localStorage里的商品信息
    this.list = this.$route.query.id;
    this.arr = JSON.parse(localStorage.getItem("arr"));
    this.obj = JSON.parse(localStorage.getItem("obj"));
    console.log(this.list);
    console.log(this.arr);
    console.log(this.obj);
    this.arr.map(item => {
      this.orderId.push(item.cid);
    });
    console.log(this.orderId);
  },
  //过滤器 对数字进行操作就用这个
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  },
  watch: {},
  computed: {
    // 定义总价
    total() {
      let sum = 0;
      this.arr.map(item => {
        if (item.check) {
          sum += item.mallPrice * item.count;
        }
      });
      return sum;
    }
  }
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
.shoplist {
  width: 100%;
  margin-top: 30px;
}
.shop {
  width: 100%;
  margin-top: 10px;
  display: flex;
}
.imgAll {
  width: 100px;
  margin-left: 5%;
  margin-right: 20px;
}
.namePrice {
  width: 100%;
  color: red;
}
.name {
  margin-bottom: 30px;
}
.num {
  line-height: 100px;
  margin-right: 10px;
}
</style>