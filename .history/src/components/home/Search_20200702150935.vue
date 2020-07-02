<template>
  <!-- 首页商品模糊搜索子组件 -->
  <div>
    <div class="list">
      <div v-if="this.value !== ''">
        <div v-if="this.list.length > 0">
          <div v-for="item in list" :key="item.id" class="listItem">
            <!-- <div @click="gotoDetails(item)">{{item.name}}</div> -->
            <a @click="gotoDetails(item,value)">
              <span>
                {{
                item.name.slice(
                0,
                item.name.toLowerCase().indexOf(value.toLowerCase())
                )
                }}
              </span>
              <span style="color:#fe1706">
                {{
                item.name.slice(
                item.name.toLowerCase().indexOf(value.toLowerCase()),
                item.name.toLowerCase().indexOf(value.toLowerCase()) +
                value.length
                )
                }}
              </span>
              <span>
                {{
                item.name.substr(
                item.name.toLowerCase().indexOf(value.toLowerCase()) +
                value.length
                )
                }}
              </span>
            </a>
          </div>
        </div>

        <div v-else class="null">您搜索的商品暂时没有哦~</div>
      </div>

      <div v-else>历史记录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      list: [],
      arr: []
    };
  },
  methods: {
    gotoDetails(item, value) {
      console.log(value);
      this.$router.push({ path: "/details", query: { id: item.id } });
      this.$utils.addViews(item); //保存商品浏览记录到localStorage
      this.$utils.addSearch(value); //保存商品浏览记录到localStorage
    }
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("search"));
    console.log(this.arr);
  },
  watch: {
    value(value) {
      this.$api
        .search(value)
        .then(res => {
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.list {
  margin-top: 65px;
}
.listItem {
  width: 90%;
  margin-left: 5%;
  height: 40px;
  font-size: 14px;
}
.null {
  margin-top: 65px;
  text-align: center;
}
</style>