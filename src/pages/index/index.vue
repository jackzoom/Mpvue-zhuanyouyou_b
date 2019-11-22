<template>
  <div class="container">
    <button @click="onRequestClick">登录</button>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {};
  },

  components: {
    card
  },

  methods: {
    onRequestClick() {
      // this.$request.get('https://zhuanyoyo.oss-us-west-1.aliyuncs.com/service/json/developer/staticUpdate.json').then((res)=>{
      //   console.log("请求数据：",res);
      // })
      console.log("store:", this.$store);
      this.$store.dispatch("UserLogin", {
        grant_type: "password",
        password: "123456",
        scope: "webBrower",
        username: "liuyishou"
      }).then((res)=>{
        console.log("login:", res);
      }).catch((err)=>{
        console.log("err:", err);
      })
      
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
</style>
