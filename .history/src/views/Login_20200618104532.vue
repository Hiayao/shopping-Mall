<template>
  <div>
    <div>
      <!-- 背景 -->
      <img src="../assets/壁纸.jpg" alt class="img" />
      <div class="card">
        <div class="name">登录/注册</div>
        <div class="ipt">
          <van-form @submit="onSubmit">
            <!-- 用户名输入框 -->
            <van-field
              v-model="username"
              name="用户名"
              label
              placeholder="username"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <!-- 密码输入框 -->
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label
              placeholder="password"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <!-- 手机号输入框 -->
            <van-field v-model="tel" type="tel" label="手机号" placeholder="仅注册需要" />
            <!-- 短信验证码输入框 -->
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="仅注册需要">
              <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
              </template>
            </van-field>
            <!-- 图形验证码 -->
            <van-field
              v-model="verify"
              name="图形验证码"
              label="验证码"
              placeholder="请填写验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            />
            <!-- 提交按钮 -->
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
      password: "",
      tel: "",
      verify:''
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  },
  mounted() {
      this.$verify().then().catch
  },
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
.ipt {
  margin-top: 40px;
}
</style>