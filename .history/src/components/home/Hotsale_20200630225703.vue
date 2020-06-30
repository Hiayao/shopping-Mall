<template>
  <!-- 首页热销商品 -->
  <div>
    <div class="title">热销商品</div>
    <div class="All">
      <van-grid :border="true" :column-num="2">
        <van-grid-item v-for="item in hotGoods" :key="item.id"> <!-- 循环数据 -->
          <van-image :src="item.image" @click="gotoDetails(item)"/>   <!-- 获取图片 -->
          <div class="name" @click="gotoDetails(item)">{{item.name}}</div> <!-- 获取名称 -->
          <div class="priceAll">
              <div class="mallPrice">￥{{item.mallPrice}}</div>
              <div class="price">￥{{item.price}}</div>
          </div>
        </van-grid-item>
      </van-grid>
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
      goodsId:''
    };
  },
  methods: {
    gotoDetails(item){
      console.log(item)
      this.$router.push({path:'/details',query:{id:item.goodsId}})
       this.$utils.addViews(item)//保存商品浏览记录到localStorage
    }
  },
  mounted() {},
  watch: {},
  computed: {
    hotGoods() {
      return this.$store.state.hotGoods;
    }
  }
};
</script>

<style scoped lang='scss'>
.title {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 76, 56);
}
.name {
  margin-top: 10px;
  width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.priceAll{
    display: flex;
    margin-top: 10px;
}
.price {
    margin-left: 10px;
     text-decoration: line-through;
     color: #999;
}
.mallPrice {
    font-size: 18px;
    color: rgb(255, 76, 56);
    font-weight: 600;
}
</style>