<template>
<!-- 首页分类推荐 -->
  <div>
    <div class="storeyName">
      <div class="storey">{{storey}}</div>
      <div class="floorName">{{floorName}}</div>
    </div>

    <div>
      <div class="imgOne">
        <div v-for="item in floor.slice(0,1)" :key="item.id" class="imgD">
          <img :src="item.image" alt class="img" @click="gotoDetails(item)"/>
        </div>
        <div class="imgTwo">
          <div v-for="item in floor.slice(1,2)" :key="item.id" class="img1">
            <img :src="item.image" alt class="img1" @click="gotoDetails(item)"/>
          </div>
          <div v-for="item in floor.slice(2,3)" :key="item.id">
            <img :src="item.image" alt class="img1" @click="gotoDetails(item)"/>
          </div>
        </div>
      </div>
			<div class="imgThr">
      <div v-for="(item,index) in floor.slice(3,5)" :key="index">
        <img :src="item.image" alt class="img1" @click="gotoDetails(item)"/>
      </div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor: {
      type: Array
    },
    floorName: {
      type: String
    },
    storey: {
      type: String
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    gotoDetails(item){
      console.log(item)
      this.$router.push({path:'/details',query:{id:item.goodsId}})
       this.$utils.addViews(item)//保存商品浏览记录到localStorage
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 220px;
	border: .5px solid rgb(238, 238, 238);
}
.img1 {
  width: 100%;
  height: 110px;
	border: .5px solid rgb(238, 238, 238);
}
.imgD {
	width: 50%;
}
.imgOne {
  display: flex;
	height: 220px;
	width: 100%;
}
.imgTwo{
	width: 50%;
	height: 220px;
}
.imgThr {
	display: flex;
}
.storeyName {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.storey {
  width: 20px;
  height: 20px;
  background: rgb(255, 76, 56);
  border-radius: 50%;
}
.floorName {
  color: rgb(255, 76, 56);
}
</style>