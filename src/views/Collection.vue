<template>
  <!-- 收藏商品页 -->
  <div>
    <div class="top">
      <van-nav-bar title="我的收藏" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <div v-for="item in list" :key="item.id"  class="shop" >
        <div class="imgAll" @click="gotoDetails(item)">
          <img :src="item.image_path" alt class="img" />
        </div>
        <div class="namePrice">
          <div class="name">{{item.name}}</div>
          <div class="price">{{item.present_price | fixed}}</div>
        </div>
        <div><van-icon name="close" class="close" @click="close(item)"/></div>
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
      list: []
    };
  },
  methods: {
    // 获取收藏商品数据
    getData(){
      this.$api
      .collection()
      .then(res => {
        this.list = res.data.list;
        console.log(this.list);
      })
      .catch(err => {
        console.log(err);
      });
    },
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    // 点击xx取消收藏
    close(item){
        this.$api.cancelCollection(item.cid).then(res => {
          if(res.code === 200){
            this.getData()
            Toast('已取消此商品收藏');
          }
            console.log(item.cid);
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    // 点击跳转商品详情页
     gotoDetails(item) {
      console.log(item);
      this.$router.push({ path: "/details", query: { id: item.cid } });
    },
  },
   //过滤器 对数字进行操作就用这个
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  },
  mounted() {
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100px;
  height: 100px;
  border: 0.5px solid #999;
  margin-right: 20px;
}
.imgAll {
  width: 100px;
  margin-left: 5%;
  margin-right: 20px;
}
.namePrice {
  width: 100%;
  color: red;
}
.name {
  margin-bottom: 30px;
}
.shop {
  width: 100%;
  margin-top: 10px;
  display: flex;
}
.close{
    margin-top: 80px;
    margin-right: 20px;
}
</style>