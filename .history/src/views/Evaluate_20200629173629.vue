<template>
  <!-- 评价页 -->
  <div class="ping_jia">
    <div class="top">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div><img src="../assets/evaluate.jpg" alt="" class="img"></div>
    <div class="tab"><van-tabs v-model="active">
  <van-tab title="待评价">
      <div v-for="item in list" :key="item.id" class="list">
          <div><img :src="item.image_path" alt="" class="path"></div>
      </div>
  </van-tab>
  <van-tab title="已评价">内容 2</van-tab>
</van-tabs></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        active: 0,
        list:[],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
      this.$api.tobeEvaluated().then(res => {
          this.list = res.data.list
          console.log(this.list);
      }).catch(err => {
          console.log(err);
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img{
    width: 100%;
}
.path{
    width: 100px;
    height: 100px;

}
.list{
    border-bottom: .5px solid rgb(204, 204, 204);
}
</style>