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

      <div v-else>
        <div class="title">
          <div>历史搜索</div>
          <div>
            <van-icon name="delete" size="17" />
          </div>
        </div>
        <div class="arrAll">
          <div v-for="item in arr" :key="item.id" class="arr">
            <div class="item">
              <div class="name">{{item}}</div>
              <div class="ico">
                <van-icon name="cross" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入两个lodash里面去重的方法
import uniqWith from "lodash/uniqWith";
import isEqual from "lodash/isEqual";
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
    // 去重
    this.arr = uniqWith(this.arr, isEqual);
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
.arrAll {
  display: flex;
  width: 90%;
  margin-left: 5%;
}
.title {
  display: flex;
  width: 94%;
  margin-left: 3%;
  justify-content: space-between;
  margin-bottom: 20px;
}
.arr {
  width: 60px;
  height: 26px;
}
.item {
  display: flex
}
.name {
  width: 40px;
  background: rgb(206, 206, 206);
}
.ico {
  background: rgb(212, 211, 211);
}
</style>