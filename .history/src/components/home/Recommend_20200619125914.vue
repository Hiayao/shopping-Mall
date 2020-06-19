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
          <!-- <div class="cont-dest">{{item.goodsName}}</div> -->
        </div>
      </div>
      <!-- <van-grid :column-num="3">
        <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文字" />
      </van-grid>-->
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
  // border-bottom: 1px solid;
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
  
}

.img {
  width: 122px;
  height: 125px;
  border: .5px solid #999;
}
</style>