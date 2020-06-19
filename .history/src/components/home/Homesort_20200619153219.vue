<template>
  <div>
      <!-- <div>{{storey}}</div> -->
    <div class="name">{{storey}}{{floorName}}</div>
    <div v-for="(item,index) in floor" :key="index">
      <img :src="item.image" alt class="img" />
    </div>
  </div>
</template>

<script>
import HomesortSon from "../home/homesort/HomesortSon";
export default {
  name: "",
  props: {
    floor: {
      type: Array
    },
    floorName: {
      type: String
    },
    storey:{
        type:String
    }
  },
  components: {
    HomesortSon
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
  width: 300px;
  height: 300px;
}
</style>