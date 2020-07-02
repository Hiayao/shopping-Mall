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
    return {
      value:''
    };
  },
  methods: {},
  mounted() {
    this.value = value
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.list {
    margin-top: 50px;
}
</style>