<template>
  <div>
    <div class="storeyName">
      <div class="storey">{{storey}}</div>
      <div class="floorName">{{floorName}}</div>
    </div>

    <div>
      <div v-for="(item,index) in floor.slice(0,1)" :key="index">
        <img :src="item.image" alt class="img" />
      </div>
      <div v-for="(item,index) in floor.slice(1,3)" :key="index">
        <img :src="item.image" alt class="img1" />
      </div>
      <div v-for="(item,index) in floor.slice(3,5)" :key="index">
        <img :src="item.image" alt class="img1" />
      </div>
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
  components: {
    
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width:50%;
  height: 220px;
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
</style>