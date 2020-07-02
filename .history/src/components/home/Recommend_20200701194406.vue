<template>
  <!-- 商品推荐 -->
  <div>
    <div class="name">商品推荐</div>

    <div ref="wrapper" class="contAll">
      <!-- 这里是父盒子 -->

      <div class="cont">
        <!-- 这里是子盒子，即滚动区域 -->

        <div class="cont-item" v-for="(item,index) in recommend" :key="index">
          <div>
            <img class="img" :src="item.image" alt />
            <!-- 推荐商品图片 -->
          </div>
          <div class="cont-name">{{item.goodsName}}</div>
          <!-- 推荐商品名称 -->
          <div class="priceAll">
            <div>￥{{item.mallPrice}}</div>
            <div class="price">￥{{item.price}}</div>
            <!-- 推荐商品价格 -->
          </div>

          <div class="btn">
            <div class="car">
              <van-icon name="cart" color="white" @click="addCart(item,index)" />
            </div>
            <!-- 推荐商品加购 -->
            <div class="see" @click="gotoDetails(item)">查看详情</div>
            <!-- 推荐商品详情 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import BScroll from "better-scroll"; //滑动效果插件
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: null
    };
  },
  methods: {
    gotoDetails(item) {
      console.log(item);
      this.$router.push({ path: "/details", query: { id: item.goodsId } });
       this.$utils.addViews(item)//保存商品浏览记录到localStorage
    },
    addCart(item,index) {
      console.log(this.recommend[index].goodsId);
      if (this.user === null) {
        this.$dialog
          .confirm({
            message: "当前未登录，点击确认去登录"
          })
          .then(() => {
            this.$router.push("/login");
            // on confirm 点击确定按钮后做什么
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$api
          .addShop(this.recommend[index].goodsId)
          .then(res => {
            console.log(res);
            Toast.success(res.msg);
            // findindex 返回他的下标，如果没有就返回-1
            let index = this.shopList.findIndex(item1 => {
              return item1.cid === item.goodsId
            })
            if (index === -1) this.$store.commit('addCartNum')
          })
          .catch(err => {
            console.log(err);
          });

        
      }
    }
  },
  mounted() {
    this.user = localStorage.getItem("user"); //获取储存的用户名
    new BScroll(this.$refs.wrapper, {
      scrollX: true //左右滑动
      // click: true //点击为true才能滑动,关闭避免触发两次点击事件
    });
  },
  watch: {},
  computed: {
    recommend() {
      return this.$store.state.recommend; //从首页vuex获取来的数据
    },
    shopList(){
      return this.$store.state.shopList
    }
  }
};
</script>

<style scoped lang='scss'>
.name {
  width: 100%;
  height: 25px;
  padding: 10px;
}
.cont {
  // white-space: nowrap;
  display: flex;
  flex: 1;
}
.contAll {
  display: flex;
  overflow: hidden;
  height: 230px;
}
.cont-item {
  display: inline-block;
  border: 0.5px solid rgb(238, 238, 238);
  width: 124px;
}
.cont-name {
  width: 120px;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 10px;
}
.img {
  width: 122px;
  height: 125px;
}
.priceAll {
  display: flex;
  padding: 10px;
}
.price {
  text-decoration: line-through;
  color: #999;
  font-size: 15px;
  margin-left: 13px;
}
.btn {
  margin-left: 5%;
  width: 90%;
  height: 30px;
  display: flex;
}
.car {
  flex: 1;
  background: rgb(254, 202, 58);
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.see {
  flex: 3;
  background: rgb(255, 76, 56);
  border-radius: 0 5px 5px 0;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>