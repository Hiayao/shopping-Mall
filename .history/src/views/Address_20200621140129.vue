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
import { Area } from 'vant';
import areaList from '../http/area'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>