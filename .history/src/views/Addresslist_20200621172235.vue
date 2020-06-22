<template>
  <!-- 地址列表管理 -->
  <div>
    <div class="top">
      <van-nav-bar title="地址列表" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div v-if="this.address.length === 0" class="null">您还没有收货地址哟~</div>

    <!-- <div v-else v-for="item in address" :key="item.id">
      <div>
        <van-checkbox v-model="checked" checked-color="#07c160">
          <div>
            <div>{{item.name}},{{item.tel}}</div>
            <div>{{}}</div></div>
        </van-checkbox>
      </div>
    </div> -->
    <div v-else>
    <van-address-list
    
  v-model="chosenAddressId"
  :list="address"
  
  
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
</div>
    <!-- <div class="address" @click="add">新增地址</div> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import { Checkbox, CheckboxGroup } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      address: [],
      id:'',
      checked: true,
      chosenAddressId: '1',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    onAdd() {
      this.$router.push("/address");
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
  mounted() {
    this.$api
      .getAddress()
      .then(res => {
        this.address = res.address;
        
        // this.chosenAddressId = res.address.length +1
        // for(let i = 0;i<this.address.length;i ++)  {
        //   this.id = this.address[i]._id
        //   return chosenAddressId.push(this.id)
        //   console.log(this.chosenAddressId);
        // }
        console.log(this.address);
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