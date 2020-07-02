<template>
  <div class="city_check">
    <div class="top">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="recommend">
      <van-search v-model="search" shape="round" show-action placeholder="请输入搜索关键词" class="ipt" @search="onSearch"/>
      <div class="nowCityWord">当前城市</div>
      <div class="nowCity">
        <div class="city">
          <div v-if=" city !== ''">{{city}}</div>
          <div v-else>定位中…</div>
        </div>
      </div>
      <div class="nowCityWord">热门城市</div>
      <div class="hotCityList">
        <div class="hotCity" v-for="item in hot" :key="item.id">{{item.name}}</div>
      </div>
    </div>

    <van-index-bar :index-list="indexList">
      <div v-for="(item,index) in list" :key="index">
        <van-index-anchor :index="item" />
        <van-cell :title="item1.name" v-for="(item1,index1) in cities[item]" :key="index1" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import citylist from "../http/city";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
       search:'', // 搜索关键字
      hot: "",
      citylist,
      cities: [],
      list: [],
       cityData:[], // 储存城市配置信息
      indexList: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },

    // 搜索
      onSearch () {
        let arr =[];
        let searchArr = []
        // 重置搜索为空
        if(this.search == ''){
          this.cities = this.cityData
          return false
        }
        // 查询的结果汇总
        for (let i = 0; i < this.cityData.length; i++) {
          for (let j = 0; j < this.cityData[i].lists.length; j++) {
            if(this.cityData[i].lists[j].indexOf(this.search.trim()) !== -1){
              searchArr.push(this.cityData[i].lists[j])
            }
          }
        }
        // 查询无结果，同时用“搜索结果”作为右侧是否展示的判断
        if (searchArr.length === 0){
          searchArr.push('查无结果，请重新输入')
        }
        let newObj = {"title":"搜索结果","lists":searchArr}
        arr.push(newObj)
        this.cities = arr
      }
  },
  mounted() {
    this.hot = this.citylist.data.hotCities;
    this.cities = this.citylist.data.cities;
    let key = Object.keys(this.citylist.data.cities);
    this.list = key;
    this.indexList = key; //右边索引栏的数据
    // console.log(this.citylist.data.cities);
  },
  watch: {},
  computed: {
    city() {
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
  height: 62vw;
  background: rgb(242, 242, 242);
  padding-top: 10px;
}
.van-search {
  width: 90%;
  margin-left: 5%;
  padding: 0 !important;
  background: none;
}
.van-search__content{
  background: white;
}
.van-search__content--square {
  background: white !important;
}
.nowCityWord {
  width: 100%;
  line-height: 40px;
  font-size: 15px;
}
.nowCity {
  width: 100%;
  height: 40px;
  background: white;
  display: flex;
  align-items: center;
}
.city {
  width: 80px;
  line-height: 26px;
  margin-left: 20px;
  font-size: 15px;
  text-align: center;
  border: 0.5px solid #999;
}
.hotCityList {
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.hotCity {
  width: 80px;
  height: 26px;
  margin-left: 20px;
  font-size: 15px;
  text-align: center;
  border: 0.5px solid #999;
}
</style>