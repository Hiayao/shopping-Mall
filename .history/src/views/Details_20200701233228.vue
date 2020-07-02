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
      <div class="like" v-if="isCollection !== 1" @click="Collection">
        <!-- 收藏与取消 -->
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
    <!-- 商品详情 -->
    <div>
      <van-tabs v-model="active">
        <van-tab>
          <template #title>
            <div class="detl">商品详情</div>
          </template>
          <div v-html="goodsOne.detail"></div>
        </van-tab>
        <!-- 商品评论 -->
        <van-tab>
          <template #title>
            <div class="detl">商品评论</div>
          </template>
          <div v-if="this.comment.length > 0">
            <div v-for="item in comment" :key="item.id" class="commentAll">
              <div v-if="item.anonymous === false">
                <!-- 判断是否匿名 -->
                <div v-for="item1 in item.user" :key="item1.id" class="comment">
                  <div class="avatarAll">
                    <img :src="item1.avatar" alt class="avatar" />
                  </div>
                  <div>
                    <div class="nameTime">
                      <div>{{item1.nickname}}</div>
                      <div class="time">{{item.comment_time}}</div>
                    </div>
                    <div class="star"><van-rate v-model="item.rate" readonly :size="15"/></div>
                    <div class="talk">用户评论：</div>
                    <div class="talkT">{{item.content}}</div>
                  </div>
                </div>
              </div>
              <div v-else  class="comment">
                <div class="avatarAll">
                  <img :src="item.comment_avatar" alt class="avatar" />
                </div>
                <div>
                    <div class="nameTime">
                      <div>{{item.comment_nickname}}</div>
                      <div class="time">{{item.comment_time}}</div>
                    </div>
                    <div class="star"><van-rate v-model="item.rate" readonly :size="15"/></div>
                    <div class="talk">用户评论：</div>
                    <div class="talkT">{{item.content}}</div>
                  </div>
              </div>
            </div>
          </div>

          <div v-else class="none">暂无用户评论</div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 底购物导航栏 -->
    <div class="dav">
      <van-goods-action>
        <van-goods-action-icon icon="wap-home-o" text="首页" to="/" />
        <van-goods-action-icon icon="cart-o" text="购物车" to="/shoppingcart" />
        <van-goods-action-button color="#FF8855" type="warning" text="加入购物车" @click="addCart" />
        <van-goods-action-button color="#FF4444" type="danger" text="立即购买" @click="showPopup" />
      </van-goods-action>

      <!-- 点击立即购买后弹框 -->
      <!-- <van-cell is-link></van-cell> -->
      <van-popup v-model="show" closeable round position="bottom" :style="{ height: '43%' }">
        <div class="popupTitle">
          <div>
            <img :src="goodsOne.image_path" alt class="image_path" />
          </div>
          <!-- 弹框内商品的名称和价格 -->
          <div class="ptONE">
            <div>{{goodsOne.name}}</div>
            <div style="color:red">{{goodsOne.present_price | fixed}}</div>
          </div>
        </div>
        <van-divider />
        <!-- 弹框内商品购买数量 -->
        <div class="num">购买数量：</div>
        <div class="num2">
          <div class="surplus">剩余{{goodsOne.amount}}件</div>
          <div class="limit">每人限购50件</div>
          <div class="Stepper">
            <van-stepper v-model="value" min="1" max="50" integer />
          </div>
        </div>
        <van-divider />
        <!-- 弹框内操作购买按钮 -->
        <van-button type="danger" block class="nowbuy" @click="gotoBuy">立即购买</van-button>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goodsId: "",
      goodsOne: {},
      active: 2,
      show: false,
      value: 1,
      present_price: 0.0,
      isCollection: "",
      user: null,
      comment: [],
      rate:''
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 点击取消收藏
    nosure() {
      this.$api
        .cancelCollection(this.goodsOne.id)
        .then(res => {
          if (res.code === 200) {
            // this.$router.go(0)
            this.query();
            Toast.fail(res.msg);
          }
          console.log(this.goodsOne.id);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //立即购买按钮
    showPopup() {
      this.show = true;
    },
    //点击购买并跳转结算页
    gotoBuy(val){
      this.goodsOne.count = this.value
      this.goodsOne.bul = true
    console.log(this.goodsOne.count);
      console.log(this.value);
      this.$router.push({name:'Settlement',query:{id:[this.value,true]}})
      localStorage.setItem('obj',JSON.stringify(this.goodsOne))
    },
    //添加到购物车
    addCart() {
      this.$api
        .addShop(this.goodsId)
        .then(res => {
          console.log(res);
          Toast.success(res.msg);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 查询商品是否收藏
    query() {
      this.$api
        .isCollection(this.goodsId)
        .then(res => {
          this.isCollection = res.isCollection;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //点击收藏
    Collection() {
      if (this.user === null) {
        this.$dialog
          .confirm({
            message: "当前未登录，点击确认去登录"
          })
          .then(() => {
            this.$router.push("/login");
            // on confirm 点击确定按钮后做什么
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$api
          .getcollection(this.goodsOne)
          .then(res => {
            if (res.code === 200) {
              // this.$router.go(0)
              this.query();
            }
            console.log(res);
            Toast.success(res.msg);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.goodsId = this.$route.query.id;
    console.log(this.goodsId);
    this.user = localStorage.getItem("user"); //获取储存的用户名
    // 单个商品详情请求
    this.$api
      .goodsone(this.goodsId)
      .then(res => {
        this.goodsOne = res.goods.goodsOne;
        this.comment = res.goods.comment; //获取商品评论
        console.log(res.goods.comment);
      })
      .catch(err => {
        console.log(err);
      });

    this.query();
  },

  //过滤器 对数字进行操作就用这个
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
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
.image_path {
  width: 130px;
  height: 130px;
  margin-left: 30px;
}
.popupTitle {
  display: flex;
}
.ptONE {
  width: 180px;
  margin-top: 40px;
  margin-left: 10px;
}
.num {
  margin-left: 20px;
}
.num2 {
  display: flex;
  margin-left: 20px;
  justify-content: space-between;
}
.surplus {
  flex: 1;
  color: #999;
  font-size: 14px;
}
.limit {
  flex: 1;
  color: red;
  font-size: 14px;
}
.Stepper {
  flex: 1;
}
.nowbuy {
  font-size: 18px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.avatarAll {
  width: 40px;
  height: 40px;
  border: 0.5px solid rgb(214, 213, 213);
  border-radius: 50%;
  margin-right: 20px;
}
.comment {
  display: flex;
}
.nameTime{
  display: flex;
  width: 270px;
  justify-content: space-between;
}
.commentAll{
  margin-top: 20px;
  width: 90%;
  margin-left: 5%;
}
.star{
  margin: 10px 0 10px 0;
}
.talkT{
  margin: 10px 0 10px 0;
  width: 100%;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
}
.talk {
  color: #999;
  font-size: 16px;
}
.time{
  color: #999;
}
.none{
  width: 100%;
  height: 40px;
  margin: 20px 0 20px 0;
  text-align: center;
}
</style>