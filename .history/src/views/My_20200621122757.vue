<template>
  <div>
    <div class="top">个人中心</div>

    <!-- 个人名片 -->
    <!-- 未登录状态 -->
    <div class="card" v-if="this.user === null">
      <div class="img">
        <van-image
          round
          width="7rem"
          height="7rem"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1666256797,972082711&fm=26&gp=0.jpg"
        />
      </div>
      <div @click="gotoLogin">登录 / 注册</div>
    </div>
    <!-- 已登录状态 -->
    <div class="card" v-else>
      <div class="ico">
        <van-icon name="setting" color="#fff" size="26" />
      </div>
      <div>
        <van-image
          round
          width="7rem"
          height="7rem"
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=234847084,411471571&fm=26&gp=0.jpg"
        />
      </div>
      <div class="hello">欢迎您： {{this.user}}</div>
      <div @click="goOut">退出登录</div>
    </div>

    <!-- 待办事项 -->
    <div class="todolist">
      <div class="todo">
        <div>
          <van-icon name="balance-o" size="35" />
        </div>
        <div>待付款</div>
      </div>
      <div class="todo">
        <div>
          <van-icon name="free-postage" size="35" />
        </div>
        <div>待发货</div>
      </div>
      <div class="todo">
        <div>
          <van-icon name="gift-o" size="35" />
        </div>
        <div>待收货</div>
      </div>
      <div class="todo">
        <div>
          <van-icon name="thumb-circle-o" size="35" />
        </div>
        <div>评价</div>
      </div>
      <div class="todo">
        <div>
          <van-icon name="like-o" size="35" />
        </div>
        <div>已完成</div>
      </div>
    </div>

    <!-- 全部订单 -->
    <div class="orderAll">
      <div class="order">
        <div class="orderIco">
          <van-icon name="records" />
        </div>
        <div>全部订单</div>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-divider />

    <!-- 收藏商品 -->
    <div class="orderTwo">
      <div class="order">
        <div class="orderIco">
          <van-icon name="star-o" />
        </div>
        <div>收藏商品</div>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-divider />

    <!-- 地址管理 -->
    <div class="orderTwo" @click="gotoAddress">
      <div class="order">
        <div class="orderIco">
          <van-icon name="location-o" />
        </div>
        <div>地址管理</div>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-divider />

    <!-- 最近浏览 -->
    <div class="orderTwo">
      <div class="order">
        <div class="orderIco">
          <van-icon name="browsing-history-o" />
        </div>
        <div>最近浏览</div>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-divider />

    <!-- 底部导航 -->
    <div>
      <Dav></Dav>
    </div>
  </div>
</template>

<script>
import Dav from "../components/home/Dav";
export default {
  name: "",
  props: {},
  components: {
    Dav,
    
  },
  data() {
    return {
      user: null,
      active: 0
    };
  },
  methods: {
    goOut() {
      this.$api
        .loginOut()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      localStorage.removeItem("user"); // 点击退出后清除用户名
      localStorage.removeItem("active"); // 点击退出后清除高亮下标
      localStorage.setItem("active", this.active); // 点击退出后初始化高亮下标
      this.user === null; //初始化用户名
      this.$router.go(0); //刷新当前页面
      // return this.obj.nickname === null
    },
    gotoLogin() {
      this.$router.push("/login"); //点击去登录注册
    },

    gotoAddress() {
      if (this.user === null) {
        this.$dialog.confirm({
          title: "标题",
          message: "弹窗内容"
        })
          .then(() => {
            this.$router.push('/login')
            // on confirm 点击确定按钮后做什么
          })
          .catch(() => {
            // on cancel
          });
      }
      // this.$router.push("/address");
    }
  },
  mounted() {
    this.user = localStorage.getItem("user"); //获取储存的用户名

    // console.log(this.user);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 50px;
  background: rgb(242, 242, 242);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 99;
}
.card {
  width: 100%;
  height: 230px;
  background: skyblue;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
.img {
  margin-bottom: 20px;
}
.ico {
  position: relative;

  left: 150px;
}
.hello {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 530;
}
.todolist {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  border-bottom: 0.2px solid rgb(235, 237, 240);
}
.todo {
  width: 20%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.order {
  line-height: 50px;
  font-size: 16px;
  display: flex;
  // align-items: center;
}
.orderAll {
  display: flex;
  height: 50px;
  width: 90%;
  margin-left: 5%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.orderTwo {
  display: flex;
  height: 50px;
  width: 90%;
  margin-left: 5%;
  justify-content: space-between;
  align-items: center;

  // border-bottom: 0.2px solid rgb(209, 206, 206);
  // border-top: 0.2px solid rgb(209, 206, 206);
}
.van-divider {
  margin: 0 !important;
}
.orderIco {
  margin-right: 5px;
}
</style>