<template>
  <div>
    <div class="list02">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click="qiehuan(index)">
          <img :src="index==listindex?item.Onurl:item.url" alt>
          <p :class="{'on' : index == listindex}">{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  props: {
    listindex:Number
  },
  data() {
    return {
      list: [
        {
          title: "首页",
          url: require("../assets/image/footer1.png"),
          Onurl: require("../assets/image/footer11.png")
        },
        {
          title: "聊天室",
          url: require("../assets/image/footer2.png"),
          Onurl: require("../assets/image/footer22.png")
        },
        {
          title: "活动中心",
          url: require("../assets/image/footer3.png"),
          Onurl: require("../assets/image/footer33.png")
        },
        {
          title: "我的",
          url: require("../assets/image/footer4.png"),
          Onurl: require("../assets/image/footer44.png")
        }
      ],
    };
  },
  mounted() {},
  methods: {
    qiehuan(index){
      switch (index) {
        case 3:
          this.$router.push('/login')
          break;
        case 0:
          this.$router.push('/')
          break;
      
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.list02 {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 55px;
  border-top: 2px solid #f1f1f1;
  background: #fff;
  ul {
    display: flex;
    .on {
      color: red;
    }
    li {
      flex: 1;
      padding-top: 5px;
      img{
        width: 22px;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
