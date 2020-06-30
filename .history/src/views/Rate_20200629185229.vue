<template>
  <!-- 评价晒单页 -->
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="starAll">
      <div class="imge">
        <img :src="list.image_path" alt class="img" />
      </div>
      <div>
        <div>商品评分</div>
        <div class="star">
          <van-rate v-model="value" allow-half void-icon="star" color="red" void-color="#eee" />
        </div>
      </div>
    </div>
    <div class="text">
      <div>
        <van-field
          rows="2"
          autosize
          label="评价"
          type="textarea"
          maxlength="150"
          placeholder="请说说您购买和使用的感受吧"
          show-word-limit
        />
      </div>
      <div><van-uploader :after-read="afterRead" /></div>
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
      list: [],
      value: 0,
      afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    this.list = this.$route.query.id;
    console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.imge {
  width: 100px;
  height: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.img {
  width: 100px;
  height: 100px;
}
.starAll {
  display: flex;
  height: 140px;
  align-items: center;
  background: salmon;
}
.star {
  margin-top: 20px;
}
.text{
    height: 200px;
    background: rgb(231, 231, 231);
}
.van-field{
    background: rgb(231, 231, 231) !important;
}
</style>