<template>
  <div>
    <div class="top">
      <!-- 城市定位 -->
      <div class="city" @click="goCity">{{city}} ▼</div>
      <!-- 搜索商品框 -->
      <div class="rowing">
        <van-search v-model="value" show-action label placeholder="请输入搜索关键词" @search="onSearch">
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </div>
    <div><Rotationchart></Rotationchart></div>
    <div><Classification></Classification></div>
  </div>
</template>

<script>
import Rotationchart from '../components/home/Rotationchart'
import Classification from '../components/home/Classification'
export default {
  name: "",
  props: {},
  components: {
    Rotationchart,Classification
  },
  data() {
    return {
      city: ""
    };
  },
  methods: {
    

    //点击跳转城市选择
    goCity() {
      this.$router.push("/city");
    }
  },
  mounted() {
    this.$api.recommend().then(res => {
      this.$store.commit('setSlides',res.data.slides)
      console.log(res.data.slides)
    }).catch()

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
  },
  watch: {},
  computed: {
    slides(){
      return this.$store.state.slides 
    }
  }
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 54px;
  background: rgb(233, 229, 229);
  display: flex;
  justify-content: space-between;
  align-items: center;
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

</style>