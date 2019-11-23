<template>
  <div class="container">
    <button @click="onRequestClick">登录</button>
    <button @click="onRequestRules">获取规则</button>
    <div>用户token:{{token}}</div>
    <div>当前页标题：{{$t('index.pageTitle')}}</div> 
  </div>
</template>

<script>
  import card from "@/components/card";
  import {
    mapState
  } from "vuex";
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState(["token"])
    },
    components: {
      card
    },
    methods: {
      onRequestClick() {
        // this.$request.get('https://zhuanyoyo.oss-us-west-1.aliyuncs.com/service/json/developer/staticUpdate.json').then((res)=>{
        //   console.log("请求数据：",res);
        // })
        this.$store
          .dispatch("UserLogin", {
            grant_type: "password",
            password: "123456",
            scope: "webBrower",
            username: "liuyishou"
          })
          .then(res => {
            console.log("login:", res);
          })
          .catch(err => {
            console.log("err:", err);
          });
      },
      onRequestRules() {
        this.$http.get("/").then(res => {
          console.log("规则：", res);
        });
      }
    },
    created() {
      // let app = getApp()
      console.log("语言:", this.$t('app.version'));
    }
  };
</script>

<style scoped>

</style>
