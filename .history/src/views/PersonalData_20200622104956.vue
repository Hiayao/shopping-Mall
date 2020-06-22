<template>
  <!-- 个人资料页 -->
  <div>
    <div class="top">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="Photo">
    <van-cell-group>
      <div>
        头像
      </div>
      <div>
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=234847084,411471571&fm=26&gp=0.jpg"
        />
      </div>
    </van-cell-group></div>
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
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Photo {
    display: flex;
}
</style>