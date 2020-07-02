<template>
  <!-- 评价页 -->
  <div class="ping_jia">
    <div class="top">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <img src="../assets/买卖.png" alt class="img" />
    </div>
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="待评价">
          <div v-for="item in list" :key="item.id" class="list">
            <div class="pathAll">
              <img :src="item.image_path" alt class="path" />
            </div>
            <div>
              <div class="name">{{item.name}}</div>
              <div class="sun" @click="gotoRate(item)">
                <div>
                  <van-icon name="chat" color="red" />
                </div>
                <div>评价晒单</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已评价">
          <div v-for="item in finish" :key="item.id">
            <div v-for="item1 in item.goods" :key="item1.id" class="list">
              <div class="pathAll">
                <img :src="item1.image_path" alt class="path" />
              </div>
              <div>
                <div class="name">{{item1.name}}</div>
                <div class="suns" @click="gotoRates(item)">
                  <div>查看评价</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
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
      active: 0,
      list: [],
      finish: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    // 去评论晒单
    gotoRate(item) {
      this.$router.push({ name: "Rate", query: { id: item } });
      console.log(item);
    },
    // 去查看评价
    gotoRates(item){
      this.$router.push({name:'Seecomment',query:{id:item}})
      console.log(item);
    }
  },
  mounted() {
    //未评价数据
    this.$api
      .tobeEvaluated()
      .then(res => {
        // this.$store.commit("setList", res.data.list); //未评价数据
        this.list = res.data.list;
        console.log(this.list);
      })
      .catch(err => {
        console.log(err);
      });

    //已评价数据
    this.$api
      .alreadyEvaluated()
      .then(res => {
        this.finish = res.data.list;
        console.log(this.finish);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
}
.path {
  width: 100px;
  height: 100px;
}
.list {
  border-bottom: 0.5px solid rgb(204, 204, 204);
  height: 120px;
  display: flex;
}
.sun {
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 15px;
  width: 100px;
  height: 30px;
  border: 1px solid red;
  border-radius: 20px 20px 20px 20px;
  margin-left: 120px;
}
.suns{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 15px;
  width: 100px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 20px 20px 20px 20px;
  margin-left: 120px;
}
.pathAll {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
}
.name {
  margin-top: 10px;
  margin-bottom: 50px;
  height: 20px;
}
</style>