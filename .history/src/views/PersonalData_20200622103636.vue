<template>
  <!-- 个人资料页 -->
  <div>
    <div class="top">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <van-cell-group>
  <van-field v-model="value" label="文本" placeholder="请输入用户名" />
</van-cell-group>
  </div>
</template>

<script>
import { Field } from 'vant';

Vue.use(Field);
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        value: '',
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
</style>