<template>
  <!-- 首页轮播图 -->
  <div>
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div v-for="(item,index) in slides.slice(0,1)" :key="index" class="img">
          <img :src="item.image" alt class="img" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div v-for="(item,index) in slides.slice(1,2)" :key="index" class="img">
          <img :src="item.image" alt class="img" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div v-for="(item,index) in slides.slice(2,3)" :key="index" class="img">
          <img :src="item.image" alt class="img" />
        </div>
      </van-swipe-item>
    </van-swipe> -->
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in slides" :key="index">
    <img v-lazy="image" class="img"/>
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      slides:[]
    };
  },
  methods: {},
  mounted() {
    
  },
  watch: {},
  computed: {
    slides() {
      return this.$store.state.slides;
    }
  }
};
</script>

<style scoped lang='scss'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.img {
  width: 100%;
  height: 200px;
}
</style>