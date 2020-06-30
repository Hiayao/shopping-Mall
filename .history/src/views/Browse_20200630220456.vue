<template>
  <!-- 最近浏览页面 -->
  <div>
    <div class="top">
      <van-nav-bar title="最近浏览" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="item in arr" :key="item.id" class="arr">
      <div class="image_path"><img :src="item.image_path" alt="" class="img"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
// 引入两个lodash里面去重的方法
import uniqWith from 'lodash/uniqWith'
import isEqual from 'lodash/isEqual'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    //定义一个数组来接收存在localStorage里面的浏览记录
    this.arr = JSON.parse(localStorage.getItem('views'))
    // 去重
    this.arr = uniqWith(this.arr,isEqual)
    console.log(this.arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img{
  width: 100px;
  height: 100px;
}
.image_path{
  width: 100px;
  height: 100px;
  border: .5px solid rgb(206, 206, 206);
}
.arr {
  margin: 10px 0 0 10px;
}
</style>