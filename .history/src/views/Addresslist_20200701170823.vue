<template>
  <!-- 地址列表管理 -->
  <div>
    <div class="top">
      <van-nav-bar title="地址列表" left-text left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="wap-home-o" size="20" @click="onClickRight" />
        </template>
      </van-nav-bar>
    </div>

    <div v-if="this.address.length === 0" class="null">
      <div>您还没有收货地址哟~</div>
      <div class="address" @click="onAdd">新增地址</div>
    </div>

    <div v-else>
      <van-address-list
        v-model="chosenAddressId"
        :list="address"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      address: [],
      checked: true,
      chosenAddressId: "",
      flag: false,
      fleg: ""
    };
  },
  methods: {
    // 导航左边按钮
    onClickLeft() {
      // 当跳转到此页面没有传参过来时
      if (this.fleg) {
        this.$router.go(-1);
        Toast("返回");
      }
      // 当从购物车购买到结算跳转地址列表时传参为false，返回传参为false
      if (this.fleg === false) {
        this.$router.push({ path: "/settlement", query: { id: [2, false] } });
      }
      // 当从直接购买到结算跳转地址列表时传参为true，返回传参为true
      if (this.fleg === true) {
        this.$router.push({ path: "/settlement", query: { id: [3, true] } });
      }
    },
    // 导航右边按钮
    onClickRight() {
      this.$router.push("/");
      Toast("回到首页");
    },
    onAdd() {
      this.$router.push("/address");
      Toast("添加新地址");
    },
    onEdit(item) {
      // console.log(item)
      this.$router.push({ name: "Address", query: { id: item } });

      Toast("编辑地址");
    },
    select(item) {
      console.log(item);
      this.$api
        .setDefaultAddress(item)
        .then(res => {
          console.log(res);
          this.getAddress();
          // this.getDefaultAddress()
        })
        .catch(err => {
          console.log(err);
        });
      localStorage.setItem("ids", JSON.stringify(item));
      // this.$router.push('/settlement')
      // this.$router.push({name:'Settlement',query:{ids,item}})
    },
    //获取地址列表
    getAddress() {
      this.$api
        .getAddress()
        .then(res => {
          res.address.map((item, index) => {
            this.$set(item, "id", (index + 1).toString());
          });
          this.address = res.address;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // this.getDefaultAddress()
    }
  },
  mounted() {
    this.getAddress();
    // fleg接收从结算页跳转来时的参数
    this.fleg = this.$route.query.id;
    console.log(this.fleg);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.null {
  width: 100%;
  line-height: 100px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: rgb(211, 211, 211);
}
.address {
  width: 100%;
  line-height: 50px;
  text-align: center;
  background: red;
  position: fixed;
  bottom: 0;
  color: white;
}
</style>