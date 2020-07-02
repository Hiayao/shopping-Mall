<template>
  <!-- 购物车 -->
  <div>
    <div class="top">购物车</div>

    <div v-if="this.user === null" class="nologin">
      <div class="gif">
        <img src="../assets/order.gif" alt class="gif" />
      </div>
      <div class="loginAll">
        <div>登录后才能查看订单</div>
        <div>
          <van-button type="primary" class="login" @click="gotoLogin">点击登录</van-button>
        </div>
      </div>
    </div>

    <div v-else>
      <div v-if="this.shoplist.length >0">
        <div class="tip">
          <div class="sure">
            <div class="check">
              <van-checkbox
                v-model="checked"
                shape="square"
                checked-color="red"
                @click="checkAll"
                v-if="checked === false"
              >全选</van-checkbox>
              <van-checkbox
                v-model="checked"
                shape="square"
                checked-color="red"
                @click="checkAll"
                v-if="checked === true"
              >取消全选</van-checkbox>
            </div>
            <div class="total">
              <div>
                <span>合计：</span>
                <span class="money">{{total | fixed}}</span>
              </div>
              <div>请确认订单</div>
            </div>
          </div>
          <div class="btn">
            <div>
              <van-button color="skyblue" @click="del">删除</van-button>
            </div>
            <div class="settlement">
              <van-button color="skyblue" @click="gotoPay">去结算</van-button>
            </div>
          </div>
        </div>

        <div class="list">
          <div class="shoplist" v-for="(item,index) in shoplist" :key="index">
            <div class="check">
              <van-checkbox v-model="item.check" shape="square" checked-color="red" @click="check"></van-checkbox>
            </div>
            <div class="details">
              <div>
                <img :src="item.image_path" alt class="img" />
              </div>
              <div class="nume">
                <div class="name">{{item.name}}</div>
                <div class="price">
                  <div class="present">{{item.mallPrice | fixed}}</div>
                  <div>
                    <van-stepper
                      v-model="item.count"
                      theme="round"
                      button-size="22"
                      disable-input
                      @change="count(item)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="shop"><img src="../assets/shop.png" alt=""></div>
        <div class="shopName">您的购物车还是空的哦</div>
        <div class="gotoshop" @click="gotoshop">去购物</div>
      </div>
    </div>

    <div class="dav">
      <Dav></Dav>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Dav from "../components/home/Dav";
export default {
  name: "",
  props: {},
  components: {
    Dav
  },
  data() {
    return {
      checked: false,
      list: [],
      shoplist: [],
      value: 1,
      user: null,
      arr: [],
     
    };
  },
  methods: {
    getData() {
      //获取购物车数据
      this.$api
        .getCard()
        .then(res => {
          this.$store.commit("setShopList", res.shopList);
          this.shoplist = res.shopList;
          console.log(this.shoplist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkAll() {
      this.shoplist.map(item => {
        item.check = this.checked; //全选
      });
    },
    check() {
      this.checked = this.shoplist.every(item => {
        //单个选择
        return item.check === true;
      });
    },

    // 删除
    del() {
      this.list = this.shoplist.filter(item => {
        return item.check === true;
      });
      if (this.list.length > 0) {
        this.$dialog
          .confirm({
            title: "提示",
            message: "您确定要删除吗？"
          })
          .then(() => {
            this.list.map(item => {
              this.arr.push(item.cid);
            });
            this.$api
              .deleteShop(this.arr)
              .then(res => {
                console.log(res);
                this.$toast.success(res.msg);
                this.getData();
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(() => {});
      } else {
        this.$toast({
          message: "你还没选择要删除的商品",
          icon: "like-o"
        });
      }
    },
    // 修改商品数量
    count(item) {
      this.$api
        .editCart(item.count, item.cid, item.mallPrice)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //去结算
    gotoPay() {
      this.list = this.shoplist.filter(item => {
        return item.check === true;
      });
      if (this.list.length > 0) {
        this.list.map(item => {
          this.arr.push(item);
          console.log(this.arr);
          localStorage.setItem('arr',JSON.stringify(this.arr))
          this.$router.push({path:"/settlement",query:{id:[0,false]}});
        });
      }else{
        this.$toast({
          message: "你还没选择要付款的宝贝",
          icon: "like-o"
        });
      }
    },
    gotoLogin() {
      this.$router.push("/login");
    },
    gotoshop(){
      this.$router.push('/')
    }
  },
  mounted() {
    this.getData();
  
    this.user = localStorage.getItem("user"); //获取储存的用户名
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
      this.shoplist.map(item => {
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
  margin-top: 220px;
}
.tip {
  position: fixed;
  width: 100%;
  background: white;
  z-index: 1;
  margin-bottom: 100px;
}
.list {
  position: relative;
  top: 170px;
}
.money {
  color: red;
}
.gif {
  width: 100%;
  height: 280px;
}
.nologin {
  margin-top: 40px;
}
.loginAll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.login {
  margin-top: 10px;
}
.shop{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  margin-top: 70px;
  background: rgb(219, 219, 219);
  border-radius: 50%;
  margin-left: 90px;
}
.shopName{
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #999;
  margin-top: 20px;
}
.gotoshop{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 18px;
  width: 100px;
  height: 40px;
  border: 1px solid #999;
  border-radius: 20px 20px 20px 20px;
  margin-left: 130px;
  margin-top: 20px;
}
</style>