<template>
  <!-- 个人资料页 -->
  <div>
    <div class="top">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-cell-group>
      <div class="Photo">
        <div>
          <van-field v-model="value" label="头像" />
        </div>
        <div>
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=234847084,411471571&fm=26&gp=0.jpg"
          />
        </div>
        <div><van-icon name="arrow" /></div>
      </div>
    </van-cell-group>
    <van-cell-group>
  <van-field v-model="value" label="用户名"/>
</van-cell-group>

<van-cell-group>
  <van-field v-model="value" label="昵称" />
</van-cell-group>

<van-cell-group>
  <van-field v-model="value" label="性别"  />
</van-cell-group>

<van-cell-group>
  <van-field v-model="value" label="邮箱" />
</van-cell-group>

<van-cell-group>
  <van-field v-model="value" label="出生年月"  />
</van-cell-group>

<van-button type="primary" size="large">大号按钮</van-button>
<van-button type="primary" size="large">大号按钮</van-button>
<van-button type="primary" block>块级元素</van-button>
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
  align-items: center;
  padding-right: 10px;
}
</style>