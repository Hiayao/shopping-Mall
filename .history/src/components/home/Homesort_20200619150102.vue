<template>
  <div>
    <div>
    <img :src="floor1.image" alt="" class="img">
    </div>
  </div>
</template>

<script>
import HomesortSon from "../home/homesort/HomesortSon";
export default {
  name: "",
  props: {
      floor:{
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