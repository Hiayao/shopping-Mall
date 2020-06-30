<template>
<!-- 首页商品分类 -->
  <div>
    <div class="Classification">
      <div class="listAll">
        <div class="list" v-for="(item,index) in category" :key="index">
          <div>
            <img :src="item.image" alt class="img" @click="gotoSort(index)"/>
          </div>
          <div class="name">{{item.mallCategoryName}}</div>
        </div>
      </div>
			<img src=http://images.baixingliangfan.cn/advertesPicture/20180404/20180404085441_850.gif alt="" class="gif">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    gotoSort(index){
      console.log(index)
      this.$router.push({path:'/sort',query:{id:index}})
    }
  },
  mounted() {},
  watch: {},
  computed: {
    category() {
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
.Classification {
  width: 94%;
  height: 180px;
  padding-left: 3%;
  
}
.list {
  width: 20%;
  height: 100%;
  background: white;
  padding: 10px 10px 0px 10px;
}
.img {
  width: 100%;
  height: 54%;
}
.name {
  font-size: 12px;
}
.listAll {
  width: 100%;
  height: 44%;
  display: flex;
  padding-top: 20px;
}
.gif{
	width: 100%;
	height: 18%;
	margin-top: 20px;
}
</style>