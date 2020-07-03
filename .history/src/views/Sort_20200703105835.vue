<template>
  <!-- 分类路由 -->
  <div class="sort_all">
    <!-- 顶部title -->
    <div class="top">商品分类</div>

    <!-- 侧面导航 -->
    <div class="SideNavigation">
      <div>
        <van-sidebar v-model="activeKey">
          <div v-for="(item,index) in list" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" @click="sidebar(item,index)" />
          </div>
        </van-sidebar>
      </div>

      <div class="tab" v-if="list[activeKey]">
        <van-tabs v-model="active" @change="topTab">
          <div v-for="(item,index) in list[activeKey].bxMallSubDto" :key="index">
            <div class="name">
              <van-tab :title="item.mallSubName" :name="item.mallSubId">
                <!-- 内容 -->
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                  <!-- 下拉刷新 -->
                  <div v-for="(item,index) in baby" :key="index" class="baby">
                    <div class="babyimgAll">
                      <img :src="item.image_path" alt class="babyimg" @click="gotoDetails(item)" />
                    </div>
                    <div class="name_price">
                      <div>{{item.name}}</div>
                      <div class="price">
                        <div class="new">￥{{item.present_price}}</div>
                        <s class="old">{{item.orl_price}}</s>
                      </div>
                    </div>
                  </div>
                </van-pull-refresh>
              </van-tab>
            </div>
          </div>
        </van-tabs>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="dav">
      <Dav></Dav>
    </div>
  </div>
</template>

<script>
import Dav from "../components/home/Dav";
import { Toast } from "vant"; //下拉刷新
export default {
  name: "",
  props: {},
  components: {
    Dav
  },
  data() {
    return {
      activeKey: 0, //侧边栏的
      isLoading: false, //下拉刷新是否处于加载中状态初始
      active: 0, //标签页的
      list: [],
      id: "",
      baby: "" //商品数据
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功"); //下拉刷新时触发的
        this.isLoading = false;
      }, 1000);
    },

    // 侧边栏点击事件
    sidebar(item) {
      this.id = item.bxMallSubDto[0].mallSubId;
      this.getData();
      this.active = 0;
    },

    //分类商品请求数据
    getData() {
      this.$api
        .classification(this.id)
        .then(res => {
          this.baby = res.dataList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 标签页点击改变事件
    topTab(name) {
      this.id = name;
      console.log(this.id);
      this.getData();
    },
    // 点击跳转商品详情
    gotoDetails(item) {
      console.log(item);
      this.$router.push({ path: "/details", query: { id: item.id } });

      this.$utils.addViews(item); //保存商品浏览记录到localStorage
      // console.log(this.$utils);
    }
  },
  mounted() {
    this.list = JSON.parse(localStorage.getItem("store")).category;
    console.log(this.list);
    this.id = this.list[0].bxMallSubDto[0].mallSubId;
    console.log(this.id);
    if (this.$route.query.id) {
      this.activeKey = this.$route.query.id;
      this.id = this.list[this.activeKey].bxMallSubDto[0].mallSubId;
      this.getData();
    } else {
      this.activeKey === 0;
    }
    // console.log(this.category[0].bxMallSubDto[0].mallSubId);

    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 50px;
  background: rgb(242, 242, 242);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 99;
}
.SideNavigation {
  margin-top: 50px;
  // height: 100vh;
  background: rgb(247, 248, 250);
  display: flex;
  // position: fixed;
}
.tab {
  width: 100%;
  margin-left: 104px;
  margin-top: 60px;
  background: white;
}
.van-sidebar {
  width: 27.667vw;
  height: 100vh;
  background: rgb(247, 248, 250);
}
.name {
  width: 100%;
}
.babyimgAll {
  width: 101px;
  height: 100px;
  // border:.5px solid #999;
  margin-left: 20px;
  margin-top: 20px;
}
.babyimg {
  border: 0.5px solid #999;
  width: 100px;
  height: 100px;
}
.baby {
  height: 140px;
  display: flex;
  border-bottom: 0.5px solid #999;
  background: white;
}
.name_price {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 15px;
  color: red;
}
.price {
  display: flex;
  margin-top: 20px;
}
.new {
  line-height: 30px;
  margin-right: 10px;
  font-weight: 550;
}
.old {
  line-height: 30px;
  color: #000;
}
.dav {
  position: fixed;
  bottom: -30px;
}
</style>