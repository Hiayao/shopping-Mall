<template>
  <!-- 查看评论 -->
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="starTime">
        <div><van-rate v-model="list.rate" allow-half void-icon="star" void-color="#eee" /></div>
        <div>{{list.comment_time}}</div>
    </div>
    <div class="ment">
        <div class="title">评价内容：</div>
        <div class="text">{{list.content}}</div>
    </div>
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
      list: [],
      rate:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    this.list = this.$route.query.id;
    console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.starTime{
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    border-bottom: .5px solid rgb(219, 219, 219);
}
.title{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}
.text{
    margin-left: 20px;
    margin-bottom: 20px;
}
.ment{
    border-bottom: .5px solid rgb(219, 219, 219);
}
</style>