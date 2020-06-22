<template>
  <div>
    <div class="top">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="recommend">
      <van-search v-model="value" placeholder="请输入搜索关键词" class="ipt" />
      <div class="nowCityWord">当前城市</div>
      <div class="nowCity">
        <div class="city">{{city}}</div>
      </div>
      <div class="nowCityWord">热门城市</div>
      <div class="hotCityList" ></div>
    </div>
  </div>
</template>

<script>
import City from '../http/city'
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      hot:'',
      
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    
  },
  watch: {},
  computed: {
    city(){
      return this.$store.state.city;
    }
  }
};
</script>

<style scoped lang='scss'>
.nowCity {
  width: 100%;
  height: 20px;
}
.recommend {
  width: 100%;
  height: 300px;
  background: rgb(242, 242, 242);
  padding-top: 10px;
}
.van-search {
  width: 90%;
  margin-left: 5%;
  padding: 0 !important;
}
.van-search__content--square {
  background: white !important;
}
.nowCityWord {
  width: 100%;
  line-height: 40px;
  font-size: 15px;
}
.nowCity{
  width: 100%;
  height: 40px;
  background: white;
  display: flex;
  align-items: center;
}
.city {
  
  width: 100px;
  line-height: 26px;
  margin-left: 50px;
  font-size: 15px;
  text-align: center;
  border: .5px solid #999;
}
.hotCityList{
  width: 100%;
  height: 80px;
  background: chartreuse;
}
</style>