<template>
  <div>
    <div class="top"><div class="city">{{city}}▼</div>
    <div class="rowing"><van-search
  v-model="value"
  show-action
  label
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search></div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city: ""
    };
  },
  methods: {},
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        console.log(res.data);
      })
      .catch();

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
        _this.city = data.addressComponent.city
        console.log(data)
        // data是具体的定位信息
      }

      function onError(data) {
        // 定位出错
      }
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  line-height: 40px;
  background: rgb(233, 229, 229);
  display: flex;
  justify-content: space-around;
}
.rowing{
  flex: 4;
}
.city{
  flex: 1;
}
.van-search{
  background-color: rgb(233, 229, 229) !important;
}
</style>