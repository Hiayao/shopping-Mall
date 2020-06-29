<template>
  <!-- 地址列表管理 -->
  <div>
    <div class="top">
      <van-nav-bar title="地址列表" left-text left-arrow @click-left="onClickLeft" />
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
      flag: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    onAdd() {
      this.$router.push("/address");
       Toast("添加新地址")
    },
    onEdit(item) {
      
      // console.log(item)
      this.$router.push({name:'Address',query:{id:item}})
  
      Toast("编辑地址" );
    },
    select(item){
      console.log(item);
      this.$api.setDefaultAddress(item).then(res => {
        console.log(res);
        this.getAddress()
        // this.getDefaultAddress()
      }).catch(err => {
        console.log(err);
      })
      localStorage.setItem('ids',JSON.stringify(item))
      // this.$router.push('/settlement')
      // this.$router.push({name:'Settlement',query:{ids,item}})
    },
    getAddress(){
this.$api
      .getAddress()
      .then(res => {
         res.address.map((item, index) => {
          this.$set(item,'id',(index+1).toString())
        })
        this.address = res.address;
        console.log(res)

      })
      .catch(err => {
        console.log(err);
      });
      // this.getDefaultAddress()
    }
  },
  mounted() {
    this.getAddress()
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