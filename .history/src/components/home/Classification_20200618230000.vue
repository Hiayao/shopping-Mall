<template>
  <div>
    <div class="Classification">
        <div class="listAll">
      <div class="list" v-for="(item,index) in category" :key="index">
        <div>
          <img :src="item.image" alt class="img" />
        </div>
        <div class="name">{{item.mallCategoryName}}</div>
      </div>
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
  border-radius: 5px;
}
.list {
  width: 20%;
  height: 42%;
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
.listAll{
    width: 100%;
  height: 100%;
    border-radius: 5px;
    display: flex;
}
</style>