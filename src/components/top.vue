<template>
  <div>
    <div class="top-title">
      <van-icon name="cross" @click="onClickLeft()"/>
      <span>{{msg}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  props: {
    msg:String
  },
  data() {
    return {
     
    };
  },
  mounted() {},
  methods: {
      onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.top-title{
  height: 40px;
  text-align: left;
  line-height: 40px;
  background: red;
  color: #fff;
  padding: 0 20px;
  display: flex;
  span{
    display: inline-block;
    margin-left: 10px;
  }
  .van-icon-cross{
    line-height: 40px;
  }
}
</style>
