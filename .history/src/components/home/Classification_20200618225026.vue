<template>
  <div>
    <div class="Classification">
      <div class="list" v-for="(item,index) in category" :key="index">
        
        <img :src="item.image" alt class="img"/>
      </div>
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
  methods: {},
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
//   background: rgb(238, 238, 238);
  padding-top: 20px;
  padding-left: 3%;
  display: flex;
}
.list {
  width: 20%;
  height: 55%;
  background: white;
  padding: 20px;
//   margin-left: 5%;
  
}
.img{
    width: 100%;
    height: 54%;
    
}
</style>