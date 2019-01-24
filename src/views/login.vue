<template>
  <div class="login">
    <top :msg="msg"></top>
    <div class="login-box">
      <van-cell-group>
        <van-field v-model="username" clearable placeholder="请输入用户名" left-icon="contact"/>
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
          left-icon="goods-collect-o"
        />
      </van-cell-group>
      <van-button size="large" type="danger" @click="login()">登陆</van-button>

      <van-button size="large">注册</van-button>
    </div>
  </div>
</template>

<script>
import top from "@/components/top";
export default {
  name: "login",
  data() {
    return {
      msg: "彩票登陆",
      username: "",
      password: ""
    };
  },
  components: {
    top
  },
  methods: {
    login() {
      this.axios
        .post("api/api/lottery/login", {
          account: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
        })
        .catch(function(error) {});
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  .top-title {
    background: red;
    color: #fff;
    text-align: left;
  }
}
.login-box {
  padding: 80px 20px 0;
  button {
    margin-top: 10px;
  }
}
</style>
