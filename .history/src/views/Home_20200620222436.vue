<template>
  <div>
    <div class="top">
      <!-- 城市定位 -->
      <div class="city" @click="goCity">{{city}} ▼</div>
      <!-- 搜索商品框 -->
      <!-- <div class="rowing">
        <van-search v-model="value" show-action label placeholder="请输入搜索关键词" @search="onSearch">
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>-->
    </div>

    <div ref="wrapper" class="wrapper">
      <div class="cont">    <!-- 上下滑动效果的父子盒子 -->

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <!-- 下拉刷新 -->

          <!-- 轮播图 -->
          <div class="Rotationchart">
            <Rotationchart></Rotationchart>
          </div>

          <!-- 商品分类 -->
          <div class="Classification">
            <Classification></Classification>
          </div>

          <!-- 推荐商品 -->
          <div>
            <Recommend></Recommend>
          </div>

          <!-- 首页分类推荐 -->
          <div class="Homesort">
            <div>
              <Homesort :floor="floor1" :floorName="floorName1" :storey="storey1"></Homesort>
            </div>

            <div>
              <Homesort :floor="floor2" :floorName="floorName2" :storey="storey2"></Homesort>
            </div>

            <div>
              <Homesort :floor="floor3" :floorName="floorName3" :storey="storey3"></Homesort>
            </div>
          </div>

          <!-- 首页热销商品 -->
          <div class="Hotsale">
            <Hotsale></Hotsale>
          </div>
        </van-pull-refresh>
      </div>
    </div>
    <!-- 底部导航 -->
    <div>
      <Dav></Dav>
    </div>
  </div>
</template>

<script>
import Rotationchart from "../components/home/Rotationchart";
import Classification from "../components/home/Classification";
import Recommend from "../components/home/Recommend";
import Homesort from "../components/home/Homesort";
import Hotsale from "../components/home/Hotsale";
import Dav from "../components/home/Dav";

import BScroll from "better-scroll"; //滑动效果插件

import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {
    Rotationchart,
    Classification,
    Recommend,
    Homesort,
    Hotsale,
    Dav
  },
  data() {
    return {
      city: "",
      isLoading: false,

      floor1: [],
      floor2: [],
      floor3: [],

      floorName1: "",
      floorName2: "",
      floorName3: "",

      storey1: "1F",
      storey2: "2F",
      storey3: "3F"
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },

    //点击跳转城市选择
    goCity() {
      this.$router.push("/city");
    }
  },
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.$store.commit("setSlides", res.data.slides); //首页轮播图
        // console.log(res.data.slides)
        this.$store.commit("setCategory", res.data.category); //商品分类
        console.log(res.data.category.item);
        this.$store.commit("setRecommend", res.data.recommend); //商品推荐
        // console.log(res.data.recommend);
        this.$store.commit("setHotGoods", res.data.hotGoods); //首页热销商品
        // console.log(res.data.hotGoods);

        // 给三个相同楼层的首页分类图片赋值
        this.floor1 = res.data.floor1;
        this.floor2 = res.data.floor2;
        this.floor3 = res.data.floor3;

        // 给三个相同楼层的首页分类名字赋值
        this.floorName1 = res.data.floorName.floor1;
        this.floorName2 = res.data.floorName.floor2;
        this.floorName3 = res.data.floorName.floor3;

        console.log(res.data.category);
      })
      .catch();

    // 高德地图定位
    let _this = this;
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB"
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        _this.city = data.addressComponent.city; //给city赋值到当前城市
        console.log(data);
        // data是具体的定位信息
      }

      function onError(data) {
        // 定位出错
      }
    });

    new BScroll(this.$refs.wrapper, {
      scrollY: true, //上下滑动
      click: true //点击为true才能滑动
    });
  },
  watch: {},
  computed: {
    // slides() {
    //   return this.$store.state.slides;  //首页轮播图
    // },
    // category() {
    //   return this.$store.state.category;  //商品分类
    // },
    // recommend() {
    //   return this.$store.state.recommend;  //商品推荐
    // }
    // hotGoods() {
    //   return this.$store.state.hotGoods;  //首页热销商品
    // }
  }
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 50px;
  background: rgb(242, 242, 242);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 99;
}
.rowing {
  flex: 4;
}
.city {
  flex: 1;
  padding: 10px;
  font-size: 3.733vw;
}
.van-search {
  background-color: rgb(233, 229, 229) !important;
}
.Classification {
  width: 100%;
  height: 170px;
  background: rgb(238, 238, 238);
}
.Rotationchart {
  margin-top: 50px;
}
.Homesort {
  background: rgb(238, 238, 238);
  width: 100%;
}
.Hotsale {
  width: 100%;
  background: rgb(238, 238, 238);
  margin-bottom: 50px;
}
.wrapper {
  height: 670px;
}
</style>