<template>
  <div>
    <div class="name">商品推荐</div>

    <div ref="wrapper" class="contAll">
      <!-- 这里是父盒子 -->
      <div class="cont">
        <!-- 这里是子盒子，即滚动区域 -->
        <div class="cont-item" v-for="(item,index) in recommend" :key="index">
          <div>
            <img class="img" :src="item.image" :alt="item.goodsName" />
          </div>
          <div class="cont-dest">{{item.goodsName}}</div>
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
  methods: {
    // verScroll() {
      // let width = this.recommend.length * 110; // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      // this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      // this.$nextTick(() => {
        
      //     this.scroll = new BScroll(this.$refs.wrapper, {
      //       startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
      //       click: true,
      //       scrollX: true,
      //       scrollY: false,
      //       eventPassthrough: "vertical"
      //     });
        
      // });
    // }
  },
  mounted() {
    new BScroll (this.$refs.wrapper,{
      scrollX: true,
      click: true,
    })
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


.cont{
 white-space: nowrap;
}
.cont-item{
  display: inline-block;
}
// .contAll{
//   width: 30px;
// }
</style>