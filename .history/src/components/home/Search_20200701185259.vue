<template>
  <!-- 首页商品模糊搜索子组件 -->
  <div>
    <div class="list">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value:{
        type:String
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {
    value(value){
      this.$api.search('饮料').then(res => {
        console.log(res);
      }).cacth(err => {
        console.log(err);
      })
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.list {
    margin-top: 50px;
}
</style>