<template>
  <!-- 收藏商品页 -->
  <div>
    <div class="top">
      <van-nav-bar title="我的收藏" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div>
        <div v-for="item in list" :key="item.id">
            <div>{{item.name}}</div>
        </div>
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
        list:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
      this.$api.collection().then(res => {
          this.list = res.data.list
          console.log(this.list);
      }).catch(err =>{
          console.log(err);
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>