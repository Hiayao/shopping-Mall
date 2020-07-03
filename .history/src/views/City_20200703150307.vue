<template>
  <div class="city_check">
    <div class="top">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="recommend">
      <van-search v-model="value" shape="round" show-action placeholder="请输入搜索关键词"  class="ipt" />
      <div class="nowCityWord">当前城市</div>
      <div class="nowCity">
        <div class="city">
          <div v-if=" this.city !== ''">{{city}}</div>
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
        <van-index-anchor :index="item" v-if="filterCities[item]&&filterCities[item].length"/>
        <van-cell :title="item1.name" v-for="(item1,index1) in filterCities[item]" :key="index1" @click="checkCity(item1)"/>
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
       value:'', // 搜索关键字
      hot: "",
      citylist,
      citie: [],
      filterCities: [],
      list: [],
      indexList: [],
      city:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    checkCity(item1){
      this.city = item1
    }
  },
  mounted() {
    this.city = this.$store.state.city
    console.log(this.city);
    this.hot = this.citylist.data.hotCities;
    this.cities = this.citylist.data.cities;
    this.filterCities = this.citylist.data.cities;
    let key = Object.keys(this.citylist.data.cities);
    this.list = key;
    this.indexList = key; //右边索引栏的数据
    // console.log(this.citylist.data.cities);
  },
  watch: {
     value(val){
      if (!val) {
        this.filterCities = this.cities
      }
      if (val.length === 1 && (val >= 'A' && val <= 'Z')) {
        this.filterCities = {
          [val]: this.cities[val] || []
        }
      } else {
        const filterCities = {}
        this.indexList.forEach(key => {
          const itemList = this.cities[key]
          filterCities[key] = itemList.filter(({name}) => name.indexOf(val) !== -1)
        })
        this.filterCities = filterCities
      }
    }
  },
  computed: {
    city() {
      console.log(this.$store.state.city);
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