<template>
  <!-- 评价页 -->
  <div class="ping_jia">
    <div class="top">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <img src="../assets/evaluate.jpg" alt class="img" />
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
              <div class="sun" @click="gotoRate">
                <div>
                  <van-icon name="chat" color="red"/>
                </div>
                <div>评价晒单</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已评价">内容 2</van-tab>
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
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    gotoRate(){
        this.$router.push('/rate')
    }
  },
  mounted() {
    this.$api
      .tobeEvaluated()
      .then(res => {
        this.list = res.data.list;
        console.log(this.list);
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
.sun{
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
.pathAll{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
}
.name{
    margin-top: 10px;
    margin-bottom: 50px;
    height: 20px;
}
</style>