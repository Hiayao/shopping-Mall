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
          <van-rate v-model="rate" allow-half void-icon="star" color="red" void-color="#eee" />
        </div>
      </div>
    </div>
    <div class="text">
      <div>
        <van-field
          v-model="value"
          rows="2"
          autosize
          label="评价："
          type="textarea"
          maxlength="150"
          placeholder="请说说您购买和使用的感受吧"
          show-word-limit
        />
      </div>
      <div class="up">
        <van-uploader :after-read="afterRead" />
      </div>
    </div>
    <van-divider />
    <div class="anonymous">
      <van-checkbox v-model="checked" checked-color="#07c160">匿名评价</van-checkbox>
    </div>
    <van-button type="primary" size="large" class="btn" @click="Submit">提交</van-button>
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
      rate: 0,
      value: "",
      checked: true,
      image: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    Submit() {
      this.$api
        .comment(
          this.list.cid,
          this.rate,
          this.value,
          this.checked,
          this.list._id,
          this.list.order_id,
          this.image
        )
        .then(res => {
          this.$router.push('/evaluate')
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
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
.up {
  margin-left: 10px;
}
.anonymous {
  margin-left: 10px;
}
.btn {
  margin-top: 30px;
  width: 80%;
  margin-left: 10%;
}
</style>