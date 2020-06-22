<template>
  <!-- 个人资料页 -->
  <div>
    <div class="top">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-cell-group>
      <div class="Photo">
        <div>
          <van-field v-model="value" label="头像" />
        </div>
        <div>
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=234847084,411471571&fm=26&gp=0.jpg"
          />
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="userInfo.username" label="用户名" />
    </van-cell-group>

    <van-cell-group>
      <van-field v-model="userInfo.nickname" label="昵称" />
    </van-cell-group>

    <van-cell-group>
      <van-field v-model="userInfo.gender" label="性别" />
    </van-cell-group>

    <van-cell-group>
      <van-field v-model="value" label="邮箱" />
    </van-cell-group>

    <van-cell is-link @click="showPopup">出生年月</van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel='show = false'
        @confirm="

          showDatePicker = false;

          onchangDate1();

        "
      />
    </van-popup>

    <van-button type="primary" size="large" class="preservation">保存</van-button>
    <van-button type="danger" size="large">取消</van-button>
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
      value: "",
      userInfo: {},
      birth: "",
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 10, 1),
      currentDate: new Date(),
      show: false,
      
    };
   

  },
   created() {

    this.currentDate = new Date();    //给当前时间赋值

    this.datetime = this.common.dateToString(this.currentDate);   //给单元格显示当前时间的变量赋值

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    showPopup() {
      this.show = true;
    },
    onchangDate1() {

      //currentDate值就是选择的时间，把改变后的值赋值给单元格变量显示

      this.datetime = this.common.dateToString(this.currentDate);   

    }

  

  },
  mounted() {
    this.$api
      .queryUser()
      .then(res => {
        this.userInfo = res.userInfo;
        //   this.birth = userInfo.
        console.log(res);
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
.Photo {
  display: flex;
  align-items: center;
  padding-right: 10px;
}
.preservation {
  margin-bottom: 20px;
  margin-top: 20px;
}
.van-button--large {
  width: 70%;
  margin-left: 15%;
}
</style>