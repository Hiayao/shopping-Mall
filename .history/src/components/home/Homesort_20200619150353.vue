<template>
  <div>
    <div>
    <img :src="item.image" alt="" class="img">
    </div>
  </div>
</template>

<script>
import HomesortSon from "../home/homesort/HomesortSon";
export default {
  name: "",
  props: {
      floor1:{
          type:Array
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