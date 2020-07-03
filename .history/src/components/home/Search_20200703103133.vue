<template>
  <!-- 首页商品模糊搜索子组件 -->
  <div>
    <div class="list">
      <div v-if="this.value !== ''">
        <!-- 判断搜索词不为空时显示搜索的商品，为空时显示历史搜索词 -->
        <div v-if="this.list.length > 0">
          <!-- 判断搜索词有对应商品时显示商品名字，没有时显示无 -->
          <div v-for="item in list" :key="item.id" class="listItem">
            <!-- <div @click="gotoDetails(item)">{{item.name}}</div> -->
            <!-- 搜索关键词高亮 -->
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
            <van-icon name="delete" size="17" @click="delAll" />
          </div>
        </div>
        <div class="arrAll" v-if="flag || this.arr.length > 0">
          <!-- 判断有历史记录时显示历史关键词，否则显示无 -->
          <div v-for="item in arr" :key="item.id" class="arr">
            <div class="item">
              <div class="name" @click="again(item)">{{item}}</div>
              <div class="ico" @click="delItem(item)">
                <van-icon name="cross" color="white" />
              </div>
            </div>
          </div>
        </div>

        <div v-else class="null">暂无历史</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
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
      arr: [],
      search:[],
      flag:true
    };
  },
  methods: {
    gotoDetails(item, value) {
      console.log(value);
      this.$router.push({ path: "/details", query: { id: item.id } });
      this.$utils.addViews(item); //保存商品浏览记录到localStorage
      this.$utils.addSearch(value); //保存商品浏览记录到localStorage
    },

    // 删除所有记录关键词
    delAll() {
      this.$dialog
        .confirm({
          message: "是否删除全部搜索历史记录"
        })
        .then(() => {
          this.flag = false
          localStorage.removeItem("search");
          this.search = []
           localStorage.setItem("search", JSON.stringify(this.search));
          // on confirm 点击确定按钮后做什么
        })
        .catch(() => {
          // on cancel
        });
    },
    // 删除单个搜索关键词记录
    delItem(item) {
      this.$dialog
        .confirm({
          message: "是否删除此项搜索历史"
        })
        .then(() => {
          //  点击删除某条浏览数据
          // 当选中的数据的name（也可以是其他属性）和arrs其中某一项name相同时
          // 就删除它
          // 然后重新将新的数据存入localStorage
          for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === item) {
              this.arr.splice(i, 1);
              Toast.success("删除成功");
            }
            localStorage.setItem("search", JSON.stringify(this.arr));
          }
          // on confirm 点击确定按钮后做什么
        })
        .catch(() => {
          // on cancel
        });
    },
    again(item){
      this.value = item
      this.$emit('value',this.value)
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
  flex-wrap: wrap;
}
.title {
  display: flex;
  width: 94%;
  margin-left: 3%;
  justify-content: space-between;
  margin-bottom: 20px;
}
.arr {
  height: 20px;
  margin-right: 10px;
  margin-bottom: 16px;
}
.item {
  height: 20px;
  display: flex;
}
.name {
  height: 20px;
  background: rgba(206, 206, 206, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 0 0 5px;
  padding: 3px;
  color: rgb(122, 65, 65);
}
.ico {
  height: 20px;
  background: rgba(212, 211, 211, 0.8);
  display: flex;
  align-items: center;
  padding: 3px;
}
</style>