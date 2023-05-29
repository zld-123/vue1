<template>
  <div id="app">
<!--    <div id="nav">-->
<!--&lt;!&ndash;      <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--    </div>-->

<!--    <div class="box">-->
<!--      <h1>App组件</h1>-->
<!--      <router-link to="/Home">首页</router-link>-->
<!--      <router-link to="/Movie">电影</router-link>-->

<!--&lt;!&ndash;   注意一：在 hash 地址中 / 后面的值，叫做‘路径参数’-->
<!--      在路由‘参数对象’中，需要使用 this.$route.params 来访问路径参数-->

<!--      注意二：在 hash 地址中， ? 后面的参数项，叫做’查询参数‘-->
<!--      在路由’参数对象‘中，需要使用 this.$route.query 类访问查询参数-->

<!--      注意三：在 this.$route 中， path 只是路径部分； fullPath 是完整地址-->
<!--    <router-link to="/About/2?name=张磊 age=18">其他2</router-link>-->
<!--      例如：-->
<!--        path 只显示 /About/2-->
<!--        fullPath 显示 /About/2?name=%E5%BC%A0%E7%A3%8Aage%3D18-->
<!--&ndash;&gt;-->
<!--      <router-link to="/About/1">其他1</router-link>-->
<!--      <router-link to="/About/2?name=张磊 age=18">其他2</router-link>-->
<!--      <router-link to="/About/3">其他3</router-link>-->

<!--      <hr/>-->

<!--    </div>-->

<!--    黑马头条案例-->
<!--    头部区域-->
    <van-nav-bar fixed title="头条" />
    <router-view/>
<!--    底部tab-->
    <van-tabbar route>
      <van-tabbar-item  to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import request from "@/utils/requry";
export default {
  data(){
    return{

    }
  },
  created() {

  },
  methods:{

  }
}
</script>
<style lang="less">
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}
//
//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
#app{
  padding: 46px 0 50px 0;
  .van-nav-bar__content{
    background-color: #0d76ff;
    .van-nav-bar__title{
      color: white;
    }
  }

}
</style>
