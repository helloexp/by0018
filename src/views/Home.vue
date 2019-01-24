<template>
  <div class="home" :style="{'height':height+'px'}">
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
      <van-swipe-item>
        <img src="@/assets/image/banner001.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/banner002.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/banner003.jpg" alt>
      </van-swipe-item>
    </van-swipe>
    <div class="list01">
      <ul>
        <li>
          <img src="@/assets/image/index2.png" alt class="gifimg">
          <p>美女直播</p>
        </li>
        <li>
          <img src="@/assets/image/index2.png" alt>
          <p>我要充值</p>
        </li>
        <li>
          <img src="@/assets/image/index3.png" alt>
          <p>APP下载</p>
        </li>
        <li>
          <img src="@/assets/image/index4.png" alt>
          <p>在线客服</p>
        </li>
      </ul>
    </div>
    <van-notice-bar class="notice" text="测试文字" left-icon="volume-o" :scrollable="true"/>
    <div class="list02">
      <ul>
        <li v-for="(item, index) in list" :key="index" v-if="index<5">
          <span class="top-cat_" :class="item.name"></span>
          <img src="@/assets/image/index3.png" alt>
          <p>{{item.title}}</p>
          <p>{{item.lottery_period}}</p>
        </li>
        <li>
          <img src="@/assets/image/icon_hot_more.png" alt srcset>
          <p>··</p>
          <p>查看更多</p>
        </li>
      </ul>
    </div>
    <Foot :listindex="0"></Foot>
  </div>
</template>

<script>
// @ is an alias to /src
import Foot from "@/components/foot.vue";

export default {
  name: "home",
  data() {
    return {
      msg: "首页",
      list: [],
      height: ''
    };
  },
  components: {
    Foot
  },
  mounted() {
    this.init();
    this.height = window.innerHeight
  },
  methods: {
    init() {
      this.axios.get("api/api/lottery/category").then(res => {
        // eslint-disable-next-line no-console
        this.list = res.data.hot_res;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home{
  background: #f1f1f1;
}
.swiper {
  img {
    width: 100%;
  }
}
.list01 {
  background: #fff;
  ul {
    display: flex;
    height: 100px;
    padding-top: 20px;
    justify-content: flex-start;
    li {
      flex: 1;
      text-align: center;
      img{
        width: 45px;
      }
    }
  }
  border-bottom: 20px solid #f1f1f1;
}
 
.list02 {
  background: #fff;
  padding-bottom: 100px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33%;
      margin-top: 20px;
      img{
        width: 45px;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
