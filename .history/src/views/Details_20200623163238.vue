<template>
  <!-- 商品详情页 -->
  <div class="detail_all">
    <div class="ico" @click="goback">
      <van-icon name="arrow-left" size="32px" color="white" />
      <!--返回按钮 -->
    </div>

    <!-- 商品轮播图 -->
    <div class="imgAll">
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img v-lazy="goodsOne.image" class="img" />
        </van-swipe-item>
        <van-swipe-item>
          <img v-lazy="goodsOne.image" class="img" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 商品名称和价格 -->
    <div class="title">
      <div class="name">{{goodsOne.name}}</div>
      <div class="price">￥ {{goodsOne.present_price}}</div>
    </div>

    <div class="content">
      <div>运费：{{goodsOne.__v}}</div>
      <div>剩余：{{goodsOne.amount}}</div>
      <div class="like" v-if="flag === false " @click="sure">
        <div>收藏：</div>
        <div>
          <van-icon name="like-o" size="20px" class="likeIco" />
        </div>
      </div>
      <div class="like" v-else @click="nosure">
        <div>取消收藏：</div>
        <div>
          <van-icon name="like" size="20px" color="red" class="likeIco" />
        </div>
      </div>
    </div>

    <div class="shop">
      <div class="shop1">
        <div>
          <van-icon name="shop-o" size="22px" />
        </div>
        <div class="shopname">耀哥的店</div>
        <div class="sign">官方</div>
      </div>
      <div class="shop2">
        <div>进入店铺</div>
        <div>
          <van-icon name="arrow" color="#999" size="22px" />
        </div>
      </div>
    </div>

    <div>
      <van-tabs v-model="active">
        <van-tab>
          <template #title>
            <div class="detl">商品详情</div>
          </template>
          <div v-html="goodsOne.detail"></div>
        </van-tab>

        <van-tab>
          <template #title>
            <div class="detl">商品评论</div>
          </template>
          内容1
        </van-tab>
      </van-tabs>
    </div>

    <div class="dav">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button color="#FF8855" type="warning" text="加入购物车" />
        <van-sku
          v-model="show"
          :sku="sku"
          :goods="goods"
          :goods-id="goodsId"
          :quota="quota"
          :quota-used="quotaUsed"
          :hide-stock="sku.hide_stock"
          :message-config="messageConfig"
        />
        <van-goods-action-button
          color="#FF4444"
          v-model="show"
          type="danger"
          text="立即购买"
          @click="show = true"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goodsId: "",
      goodsOne: {},
      active: 2,
      flag: false,
      show: false,
      sku: {
        // 数据结构见下方文档
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        // 默认商品 sku 缩略图
        picture:''
      },
      messageConfig: {
        // 数据结构见下方文档
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                 
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息"
        }
      },
      quota: 5,
      quotaUsed: 10000,
      hide_stock: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 点击收藏与取消
    sure() {
      this.flag = true;
    },
    nosure() {
      this.flag = false;
    }
    // buy(){
    //   this.show = true
    // }
  },
  mounted() {
    this.goodsId = this.$route.query.id;
    console.log(this.goodsId);
    this.$api
      .goodsone(this.goodsId)
      .then(res => {
        this.goodsOne = res.goods.goodsOne;
        this.picture = this.goodsOne.image_path
        console.log(this.goodsOne);
      })
      .catch(err => {
        console.log(err);
      });

      
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 330px;
}
.imgAll {
  width: 100%;
  height: 330px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  margin-top: 20px;
}
.ico {
  width: 42px;
  height: 42px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 10px;
  z-index: 2;
  position: fixed;
  top: 0;
}
.title {
  width: 100%;
  line-height: 40px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  // background: forestgreen;
  // margin-left: 5%;
}
.name {
  height: 30px;
  font-size: 18px;
  margin-left: 20px;
}
.price {
  height: 40px;
  color: red;
  margin-left: 20px;
}
.content {
  width: 100%;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  color: #999;
  font-size: 14px;
  margin-top: 5px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  // background: red;
}
.like {
  display: flex;
  width: 100px;
  justify-content: flex-end;
}
.likeIco {
  line-height: 40px;
}
.shop {
  display: flex;
  margin-top: 15px;
  height: 50px;
  // background: chartreuse;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px solid rgb(231, 231, 231);
  border-top: 0.5px solid rgb(231, 231, 231);
}
.shop1 {
  display: flex;
  flex: 1;
  justify-content: center;
}
.shop2 {
  display: flex;
  flex: 1;
  justify-content: center;
}
.sign {
  height: 20px;
  width: 40px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
}
.shopname {
  margin-left: 5px;
  margin-right: 10px;
}
.detl {
  font-size: 16px;
}
.dav {
  margin-top: 50px;
}
</style>