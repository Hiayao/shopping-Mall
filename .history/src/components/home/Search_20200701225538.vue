<template>
  <!-- 首页商品模糊搜索子组件 -->
  <div>
    <div class="list">
      <div v-for="item in list" :key="item.id" class="listItem">
        <div @click="gotoDetails(item)">{{item.name}}</div>
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
  methods: {
    gotoDetails(item) {
      console.log(item);
      this.$router.push({ path: "/details", query: { id: item.id } });
       this.$utils.addViews(item)//保存商品浏览记录到localStorage
    }
  },
  mounted() {
    
  },
  watch: {
    value(value){
      this.$api.search(value).then(res => {
        this.list = res.data.list
        console.log(this.list);
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
    margin-top: 65px;
}
.listItem{
  width: 90%;
  margin-left: 5%;
  height: 40px;
  font-size: 14px;
}
</style>