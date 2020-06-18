<template>
  <div class="login_All">
    <div>
      <!-- 背景 -->
      <img src="../assets/壁纸.jpg" alt class="img" />
      <div class="card">
        <div class="name">登录 / 注册</div>
        <div class="ipt">
          <van-form @submit="onSubmit">
            <!-- 用户名输入框 -->
            <van-field
              v-model="username"
              name="用户名"
              label
              required
              placeholder="username"
              :rules="[{required: true,message:'请输入用户名'}]"
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
            <van-field v-model="code" center clearable label="短信验证码" placeholder="仅注册需要">
              <template #button>
                <van-button
                  size="small"
                  type="primary"
                  v-show="Verification"
                  @click="handleClick"
                >发送验证码</van-button>
                <van-button size="small" type="primary" v-show="!Verification">
                  <span>{{timer}}</span>秒后重新获取
                </van-button>
              </template>
            </van-field>

            <div class="smsAll">
              <!-- 图形验证码输入框 -->
              <van-field
                v-model="sms"
                name="图形验证码"
                error
                label="验证码"
                placeholder="请填写验证码"
                :rules="[{ required: true}]"
              />
              <!-- 图形验证码 -->
              <div v-html="verify" class="verify" @click="getverify"></div>
            </div>
            <!-- 提交按钮 -->
            <div style="margin: 2.667vw;display:flex;">
              <div class="loginUp">
                <van-button type="primary" @click="gotoHome">登录</van-button>
              </div>
              <div>
                <van-button type="danger" >注册</van-button>
              </div>
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
      verify: "",
      sms: "",
      code: "",
      Verification: true, //通过v-show控制显示获取还是倒计时
      timer: 60 //定义初始时间为60s
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    getverify() {
      this.$api
        .verify()
        .then(res => {
          this.verify = res;
          console.log(res);
        })
        .catch();
    },
    handleClick() {
      this.Verification = false; //点击button改变v-show的状态
      let auth_timer = setInterval(() => {
        //定时器设置每秒递减
        this.timer--; //递减时间
        if (this.timer <= 0) {
          this.Verification = true; //60s时间结束还原v-show状态并清除定时器
          clearInterval(auth_timer);
        }
      }, 1000);
    },
    gotoHome(){
        this.$api.register().then(res=>{

        }).catch()
    }
    
  },
  mounted() {
    this.getverify();
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
  height: 480px;
  background: white;
  position: relative;
  top: 90px;
  left: 26px;
  padding: 12px;
  border-radius: 5px;
}
.name {
  font-size: 24px;
  font-weight: 500;
}
.ipt {
  margin-top: 40px;
}
.verify {
  margin-right: 80px;
  width: 20px;
  height: 30px;
}
.smsAll {
  display: flex;
}
.van-cell {
  padding: 2.667vw 2.267vw;
  margin-bottom: 20px;
}
.loginUp {
  margin-right: 40px;
}
</style>