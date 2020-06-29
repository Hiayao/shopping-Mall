<template>
  <!-- 购物车 -->
  <div>
    <div class="top">购物车</div>

    <div v-if="this.user === null">
      <div class="gif"><img src="../assets/order.gif" alt="" class="gif"></div>
      <div>登录后才能查看订单</div>
      <div></div>
    </div>

<div v-else>
    <div class="tip" >
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
                <van-stepper v-model="item.count" theme="round" button-size="22" disable-input @change="count(item)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>

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
      checked: false,
    list:[],
      shoplist: [],
      value: 1,
      user:null
    };
  },
  methods: {
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
      this.shoplist.map(item => {
        if (item.check === true) {
          let id = item.uid;
          console.log(id);
          this.$api
            .deleteShop(id)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    // 修改商品数量
    count(item){
      this.$api.editCart(item.count,item.cid,item.mallPrice).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    gotoPay(){
      this.list = this.shoplist.filter(item => {
        if(item.check === true){
          
          this.$router.push({name:'Settlement',query:{id:this.list}})
        }
      })
    }
  },
  mounted() {
//获取购物车数据
    this.$api
      .getCard()
      .then(res => {
        this.shoplist = res.shopList;
        console.log(this.shoplist);
      })
      .catch(err => {
        console.log(err);
      });

      this.user = localStorage.getItem("user"); //获取储存的用户名
  },

  //过滤器 对数字进行操作就用这个
  filters: {
        fixed(val) {
          return '￥' + Number(val).toFixed(2)
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
.gif{
  width: 100%;
  height: 300px;
}
</style>