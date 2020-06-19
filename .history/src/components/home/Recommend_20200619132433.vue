<template>
  <div>
    <div class="name">商品推荐</div>

    <div ref="wrapper" class="contAll">
      <!-- 这里是父盒子 -->

      <div class="cont">
        <!-- 这里是子盒子，即滚动区域 -->

        <div class="cont-item" v-for="(item,index) in recommend" :key="index">
          <div>
            <img class="img" :src="item.image" alt="" />
          </div>
          <div class="cont-name">{{item.goodsName}}</div>
          <div class="priceAll">
            <div>￥{{item.mallPrice}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
          <div class="btn"></div>
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
   border: .5px solid rgb(238,238,238);
}
.cont-name{
  font-size: 14px;
  text-align: center;
  // text-overflow: ellipsis;
  // width: 124px;
  // -webkit-line-clamp: 1;
  // overflow: hidden;
  // display:-webkit-box
}
.img {
  width: 124px;
  height: 125px;
 
}
.priceAll {
  display: flex;
  padding: 10px;
}
.price{
  text-decoration:line-through;
  color: #999;
  font-size: 15px;
  margin-left: 13px;
}
.btn {
  background: crimson;
  margin-left: 5%;
  width: 90%;
  height: 20px;
}
</style>