<template>
  <!-- 最近浏览页面 -->
  <div>
    <div class="top">
      <van-nav-bar title="最近浏览" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="item in arr" :key="item.id">
      <div class="arr">
        <div class="image_path">
          <img :src="item.image_path" alt class="img" />
        </div>
        <div>
          <div class="name">{{item.name}}</div>
          <div class="price">
            <div class="present_price">￥{{item.present_price}}</div>
            <div class="orl_price">
              <del>{{item.orl_price}}</del>
            </div>
          </div>
        </div>
        <div>
          <van-icon name="close" class="close" @click="close(item)" />
        </div>
      </div>
      <van-divider />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
// 引入两个lodash里面去重的方法
import uniqWith from "lodash/uniqWith";
import isEqual from "lodash/isEqual";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr: [],
      add:[],
      list:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    close(item) {
      // 点击删除某条浏览数据
      // 当选中的数据的name（也可以是其他属性）和其中某一项name相同时
      // 就删除它
      // 然后重新将新的数据存入localStorage
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].name === item.name) {
          this.arr.splice(i, 1);
        }
        localStorage.setItem("views", JSON.stringify(this.arr));
      }
    }
  },
  mounted() {
    //定义一个数组来接收存在localStorage里面的浏览记录
    this.list = JSON.parse(localStorage.getItem("views"));
    console.log(this.list);
    this.list.map(item => {
      if(item.goodsId){
        this.add.push(item.goodsId)
      }else{
        this.add.push(item.id)
      }
    })
    // 去重
    this.add = uniqWith(this.add, isEqual);
    console.log(this.add);

    this.add.map(item => {
// 单个商品详情请求
    this.$api
      .goodsone(item)
      .then(res => {
        this.arr = res.goods.goodsOne;
        console.log(this.arr);
      })
      .catch(err => {
        console.log(err);
      });
    })
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100px;
  height: 100px;
}
.image_path {
  width: 100px;
  height: 100px;
  border: 0.5px solid rgb(206, 206, 206);
}
.arr {
  margin: 20px 0 0 20px;
  display: flex;
  justify-content: space-around;
}
.price {
  display: flex;
  margin-top: 40px;
  margin-left: 20px;
  height: 30px;
  align-items: center;
}
.present_price {
  color: red;
}
.name {
  width: 196px;
  height: 20px;
  margin-left: 20px;
}
.orl_price {
  font-size: 14px;
  margin-left: 10px;
}
.close {
  margin-top: 80px;
  margin-right: 20px;
}
</style>