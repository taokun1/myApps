<template>
  <div id="login">
    <header>
      <img
        src="https://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1598259248&t=03e99da108b85f71c9ab20b30f8acc7a"
        alt
      />
    </header>
    <van-form @submit="onSubmit">
      <van-row type="flex" justify="center">
        <van-col :span="20">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col :span="20">
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col :span="20">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </van-col>
      </van-row>
    </van-form>
    <footer>
      <span @click="regiest">注册账号</span>
      <span>忘记密码</span>
    </footer>
    <!-- <pdf src="../../static/test.pdf"></pdf> -->
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "login",
  components: { pdf },
  data() {
    return {
      password: "",
      username: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("--");
      const user = {
        username: this.username,
        password: this.password,
      };
      window.sessionStorage.setItem("user", JSON.stringify(user));
      this.$router.push({
        path: "/home",
        query: {},
      });
    },
    regiest () {
      console.log('this is regiest button');
    }
  },
};
</script>

<style lang="less" scoped>
#login {
  width: 100%;
  > header {
    width: 100%;
    display: flex;
    justify-content: center;
    > img {
      width: 50px;
      height: 50px;
      margin: 50px 0;
    }
  }
  > footer {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: #1989fa;
  }
}
</style>