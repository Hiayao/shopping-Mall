<template>
  <!-- 首页商品模糊搜索子组件 -->
  <div>
    <div class="list">
      <div v-for="item in value" :key="item.id">
        <div>{{item.name}}</div>
      </div>
    </div>
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
      list:[]
    };
  },
  methods: {},
  mounted() {
    this.$api.search(value).then(res => {
        this.value = res.data.list
        console.log(this.list);
      }).cacth(err => {
        console.log(err);
      })
  },
  watch: {
    value(value){
      
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