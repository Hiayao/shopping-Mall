<template>
  <!-- 个人资料页 -->
  <div>
    <div class="top">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-cell-group>
      <div class="Photo">
        <div>
          <van-field label="头像" readonly />
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
      <van-field v-model="mail" label="邮箱" />
    </van-cell-group>

    <van-field is-link @click="showPopup" label="出生年月" v-model="value"></van-field>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="show = false"
        @confirm="confirm"
      />
    </van-popup>

    <van-button type="primary" size="large" class="preservation" @click="save">保存</van-button>
    <van-button type="danger" size="large">取消</van-button>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      userInfo: {},
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 10, 1),
      currentDate: "",
      show: false,
      mail: "",
      year: "",
      month: "",
      day: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    showPopup() {
      this.show = true;
    },
    confirm(value) {
      this.show = false;
      this.value = dayjs(value).format("YYYY年MM月DD日");
      this.year = dayjs(value).format("YYYY");
      this.month = dayjs(value).format("MM");
      this.day = dayjs(value).format("DD");
        console.log(this.year)
        console.log(this.month)
        console.log(this.day)
    },
    save() {
      this.$dialog
        .confirm({
          message: "是否修改个人资料"
        })
        .then(() => {
          if(this.show = true){
            this.confirm()
          }
          else{
            this.year = this.userInfo.year
            this.month = this.userInfo.month
            this.day = this.userInfo.day
          }
          this.$api
            .saveUser({
              gender: this.userInfo.gender,
              year: this.year,
              month: this.month,
              day: this.day,
              id: this.userInfo._id,
              nickname: this.userInfo.nickname
            })
            .then(res => {
              localStorage.setItem("user", this.userInfo.nickname); //储存修改成功的用户名
              console.log(res);
              Toast.success("修改资料成功");
              this.$router.push("/my");
            })
            .catch(err => {
              console.log(err);
            });
          // on confirm 点击确定按钮后做什么
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  mounted() {
    this.$api
      .queryUser()
      .then(res => {
        this.userInfo = res.userInfo;
        this.value =
          this.userInfo.year +
          "年" +
          this.userInfo.month +
          "月" +
          this.userInfo.day +
          "日";
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
.born {
  display: flex;
  align-items: center;
}
.van-icon-arrow:before {
  margin-top: 10px;
}
.year {
  width: 19vw;
}
</style>