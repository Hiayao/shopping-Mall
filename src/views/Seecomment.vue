<template>
  <!-- 查看评论 -->
  <div>
    <div class="top">
      <van-nav-bar title="评价详情" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="starTime">
      <div>
        <van-rate v-model="list.rate" readonly allow-half void-icon="star" void-color="#eee" />
      </div>
      <div>{{list.comment_time}}</div>
    </div>
    <div class="ment">
      <div class="title">评价内容：</div>
      <div class="text">{{list.content}}</div>
    </div>
    <div v-for="item in list.goods" :key="item.id" class="list">
      <div class="imgAll">
        <img :src="item.image_path" alt class="img" />
      </div>
      <div class="nameAll">
        <div class="name">{{item.name}}</div>
        <div class="again" @click="addCart(item)">
          <div>再次添加购物车：</div>
          <div class="car">
            <van-icon name="shopping-cart-o" size="20" />
          </div>
        </div>
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
      list: [],
      rate: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    //添加到购物车
    addCart(item) {
      this.$api
        .addShop(item.id)
        .then(res => {
          console.log(res);
          Toast.success(res.msg);
        })
        .catch(err => {
          console.log(err);
        });
    },
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
.starTime {
  display: flex;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px solid rgb(219, 219, 219);
}
.title {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.text {
  margin-left: 20px;
  margin-bottom: 20px;
}
.ment {
  border-bottom: 0.5px solid rgb(219, 219, 219);
}
.img {
  width: 100px;
  height: 100px;
}
.imgAll {
  width: 100px;
  height: 100px;
  border: 1px solid rgb(219, 219, 219);
  margin: 20px 20px 0 20px;
}
.list {
  display: flex;
}
.name {
  margin-top: 30px;
  height: 30px;
}
.again {
  display: flex;
  margin-top: 30px;
  color: crimson;
  align-items: center;
  
}
.car {
  width: 30px;
  height: 30px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.nameAll {
    width: 220px;
}
</style>