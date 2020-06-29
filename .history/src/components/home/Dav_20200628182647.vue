<template>
  <!-- 底部导航 -->
  <div>
    <van-tabbar v-model="active" @change="change" route>
      <van-tabbar-item icon="wap-home" to="/">商城</van-tabbar-item>
      <van-tabbar-item icon="wap-nav" to="/sort">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/shoppingcart" :badge='cartNum'>购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/my">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    
  },
  components: {},
  data() {
    return {
      active: 0, //  导航默认下标是 0 指向的首页
      
    };
  },
  created() {
    this.active = JSON.parse(localStorage.getItem("active")); // 每次进入组价的时候 从本地缓存中取出
  },

  // 每次 改变将改变的数值 存入 本地缓存中
  methods: {
    change(active) {
      localStorage.setItem("active", active);
    }, // 监听 导航栏的变化

    //下面是之前用点击事件绑定的跳转导航路由
    // 因为改成自带的to属性后不再使用
    // 为避免有错，先注释
    // goHome() {
    //   this.$router.push("/");
    // },
    // goSort() {
    //   this.$router.push("/sort");
    // },
    // goMy() {
    //   this.$router.push("/my");
    // }
    getData() {
      //获取购物车数据
      this.$api
        .getCard()
        .then(res => {
          this.$store.commit("setCartNum", res.shopList.length);
          this.shoplist = res.shopList;
          // console.log(this.shoplist);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData()
  },
  watch: {
    $route() {
      switch (this.$route.path) {
        case "/":
          this.active = 0;

          break;

        case "/sort":
          this.active = 1;

          break;

        case "/cart":
          this.active = 2;

          break;

        case "/profile":
          this.active = 3;

          break;

        default:
          this.active = -1;

          break;
      }
    }
  },
  computed: {
    cartNum(){
      return this.$store.state.cartNum
    }
  }
};
</script>

<style scoped lang='scss'>
.van-tabbar--fixed {
  border-top: 0.5px solid rgb(233, 229, 229);
}
</style>