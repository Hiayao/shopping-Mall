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
              <!-- <van-icon name="cart" color="white" @click.prevent="addCart(index)" /> -->
            </div>
            <!-- 推荐商品加购 -->
            <div class="see" @click="gotoDetails(item)">查看详情</div>
            <!-- 推荐商品详情 -->
          </div>
        </div>
        <van-icon name="cart" color="white" @click.prevent="addCart(index)" />
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
      flag: false
    };
  },
  methods: {
    gotoDetails(item) {
      console.log(item);
      this.$router.push({ path: "/details", query: { id: item.goodsId } });
    },
    addCart(index) {
      console.log(this.recommend[index].goodsId);
      this.$api
        .addShop(this.recommend[index].goodsId)
        .then(res => {
          console.log(res);
          Toast.success(res.msg);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, {
      scrollX: true, //左右滑动
      click: true //点击为true才能滑动
    });
  },
  watch: {},
  computed: {
    recommend() {
      return this.$store.state.recommend; //从首页vuex获取来的数据
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