import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//父子组件传值
// import fu from "@/views/fu";
//购物车案例
import gouCat from "@/views/gouCat";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //初试组件
    // name: 'Home',
    // component: Home
  //  父子组件传值 props自定义属性
  //   name:'fu',
  //   component:fu
  //  购物车案例
    name:'gouCat',
    component:gouCat
  }
]

const router = new VueRouter({
  routes
})

export default router
