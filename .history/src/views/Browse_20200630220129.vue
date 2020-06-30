<template>
  <!-- 最近浏览页面 -->
  <div>
    <div class="top">
      <van-nav-bar title="最近浏览" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="item in arr" :key="item.id">
      <div><img :src="item.image_path" alt=""></div>
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
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    //定义一个数组来接收存在localStorage里面的浏览记录
    let arr = JSON.parse(localStorage.getItem('views'))
    // 去重
    arr = uniqWith(arr,isEqual)
    console.log(arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>