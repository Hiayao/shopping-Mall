<template>
  <!-- 我的订单和已完成页 -->
  <div>
    <div class="top">
      <van-nav-bar title="全部订单" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div>
        <div v-for="item in list" :key="item.id">
            <div>{{item.order_id}}</div>
        </div>
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
        list:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    this.$api
      .getMyOrder()
      .then(res => {
          this.list = res.list
        console.log(res);
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
</style>