<template>
  <!-- 新增地址 -->
  <div>
    <div class="top">
      <van-nav-bar title="编辑地址" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-address-edit
      :area-list="areaList"
      v-model="address"
      :address-info="addressInfo"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { Area } from "vant";
import areaList from "../http/area";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      areaList,
      searchResult: [],
      name: "",
      tel: "",
      address: "",
      isDefault: "",
      province: "",
      city: "",
      county: "",
      addressDetail: "",
      areaCode: "",
      id: "",
      content: [],
      addressInfo: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    onSave(content) {
      // this.content = this.content;
      console.log(content);
      this.$api
        .address({
          name: content.name,
          tel: content.tel,
          address:
            content.province +
            content.city +
            content.county +
            content.addressDetail,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          id:content._id
        })
        .then(res => {
          if (res.code === 200) {
            this.$router.go(-1);
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      Toast("保存成功");
    },
    onDelete(val) {
       console.log(val);
      this.$api
        .deleteAddress(val._id)
        .then(res => {
          console.log(res);
          this.$router.push("/addresslist");
        })
        .catch(err => {
          console.log(err);
        });
      Toast("删除成功");
    }
  },
  mounted() {
    this.addressInfo = this.$route.query.id;

    //  console.log(this.$route.query.id)
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>