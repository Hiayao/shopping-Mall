<template>
  <!-- 商品详情页 -->
  <div>
    <div class="ico">
      <van-icon name="arrow-left" size="32px" color="white" />  <!--返回按钮 -->
    </div>

    <!-- 商品轮播图 -->
    <div class="imgAll">
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img v-lazy="goodsOne.image" class="img" />
        </van-swipe-item>
        <van-swipe-item>
          <img v-lazy="goodsOne.image" class="img" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 商品名称和价格 -->
    <div class="title">
      <div class="name">{{goodsOne.name}}</div>
      <div class="price">￥ {{goodsOne.present_price}}</div>
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
      goodsId: {},
      goodsOne: {}
    };
  },
  methods: {},
  mounted() {
    this.goodsId = this.$route.query.id;
    console.log(this.goodsId);
    this.$api
      .goodsone(this.goodsId)
      .then(res => {
        this.goodsOne = res.goods.goodsOne;
        console.log(this.goodsOne);
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
.img {
  width: 100%;
  height: 330px;
}
.imgAll {
  width: 100%;
  height: 330px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  margin-top: 20px;
}
.ico {
  width: 42px;
  height: 42px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 10px;
  z-index: 2;
  position: fixed;
  top: 0;
}
.title{
  width: 90%;
  line-height: 40px;
  background: forestgreen;
  margin-left: 5%;
}
.name{
  height: 30px;
  font-size: 18px;
}
.price{
  height: 40px;
  color: red;
}
</style>