<template>
  <div>
    <div>
      <img src="../assets/壁纸.jpg" alt class="img" />
      <div class="card">
        <div class="name">登录/注册</div>
        <div class="ipt">
          <van-form @submit="onSubmit">
            <van-field
              v-model="username"
              name="用户名"
              label
              placeholder="username"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label
              placeholder="password"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field v-model="tel" type="tel" label="手机号" />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
          </van-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
}
.card {
  width: 300px;
  height: 500px;
  background: white;
  position: relative;
  top: 90px;
  left: 26px;
  padding: 12px;
}
.name {
  font-size: 24px;
  font-weight: 500;
}
.ipt{
    margin-top: 40px;
}
</style>