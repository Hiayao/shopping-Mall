<template>
  <!-- 新增地址 -->
  <div>
    <div class="top">
      <van-nav-bar title="编辑地址" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-address-edit
      :area-list="areaList"
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
      content: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    onSave(content) {
      this.content = this.content;
      console.log(content.name)
      this.$api
        .address({
          name: this.content.name,
          tel: this.content.tel,
          address: 'this.content.province' +'this.content.city'+'this.content.county'+'this.content.addressDetail',
          isDefault: this.content.isDefault,
          province: this.content.province,
          city: this.content.city,
          county: this.content.county,
          addressDetail: this.content.addressDetail,
          areaCode: this.content.postalCode,
        })
        .then(res => {
            if(res.code === 200){
                this.$router.go(-1)
                localStorage.setItem('resslist',JSON.stringify(content))
            }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      Toast("保存成功");
    },
    onDelete() {
      Toast("删除成功");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>