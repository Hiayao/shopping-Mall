<template>
  <div>
    <div class="name">商品推荐</div>

    <div ref="wrapper" class="contAll">
      <!-- 这里是父盒子 -->

      <div class="cont">
        <!-- 这里是子盒子，即滚动区域 -->

        <div class="cont-item" v-for="(item,index) in recommend" :key="index">
          <div>
            <img class="img" :src="item.image" alt />
          </div>
          <div class="cont-name">{{item.goodsName}}</div>
          <div class="priceAll">
            <div>￥{{item.mallPrice}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
          <div class="btn">
            <div class="car"><van-icon name="cart" color='white'/></div>
            <div class="see">查看详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    new BScroll(this.$refs.wrapper, {
      scrollX: true,
      click: true
    });
  },
  watch: {},
  computed: {
    recommend() {
      return this.$store.state.recommend;
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
  text-align: center;
  font-size: 14px;
  color: white;
  line-height: 28px;
}
</style>