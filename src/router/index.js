import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import fu from "@/views/fu";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //初试组件
    // name: 'Home',
    // component: Home
  //  父子组件传值 props自定义属性
    name:'fu',
    component:fu
  }
]

const router = new VueRouter({
  routes
})

export default router
