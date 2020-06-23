<template>
  <!-- 商品详情页 -->
  <div>
    <div class="ico">
      <van-icon name="arrow-left" size="32px" color="white" />
      <!--返回按钮 -->
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

    <div class="content">
      <div>运费：{{goodsOne.__v}}</div>
      <div>剩余：{{goodsOne.amount}}</div>
      <div class="like">
        <div>收藏：</div>
        <div>
          <van-icon name="like-o" size="20px" class="likeIco"/>
        </div>
      </div>
      <!-- <div>取消收藏：<van-icon name="like" size="20px" color="red"/></div> -->
    </div>

    <div class="shop">
      <div class="shop1">
        <div><van-icon name="shop-o" size="22px"/></div>
        <div class="shopname">耀哥的店</div>
        <div class="sign">官方</div>
      </div>
      <div class="shop2">
        <div>进入店铺</div>
        <div><van-icon name="arrow" color="#999" size="22px"/></div>
      </div>
    </div>

    <div>
      <van-tabs v-model="active">
  <van-tab >
    <template #title>商品详情 </template>
    内容 {{ index }}
  </van-tab>
</van-tabs>
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
.title {
  width: 100%;
  line-height: 40px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  // background: forestgreen;
  // margin-left: 5%;
}
.name {
  height: 30px;
  font-size: 18px;
  margin-left: 20px;
}
.price {
  height: 40px;
  color: red;
  margin-left: 20px;
}
.content {
  width: 100%;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  color: #999;
  font-size: 14px;
  margin-top: 5px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  // background: red;
}
.like {
  display: flex;
}
.likeIco {
  line-height: 40px;
}
.shop {
  display: flex;
  margin-top: 15px;
  height: 50px;
  // background: chartreuse;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  border-top: 0.5px solid rgb(231, 231, 231);
}
.shop1 {
  display: flex;
flex: 1;
justify-content: center;
}
.shop2 {
  display: flex;
  flex: 1;
  justify-content: center;
}
.sign{
  height: 20px;
  width: 40px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
}
.shopname {
  margin-left: 5px;
  margin-right: 10px;
}
</style>