<template>
  <div>
    <div>
    <img :src="image" alt="">
    </div>
  </div>
</template>

<script>
import HomesortSon from "../home/homesort/HomesortSon";
export default {
  name: "",
  props: {
      data:{
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
</style>