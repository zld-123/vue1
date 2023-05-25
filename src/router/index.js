import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//父子组件传值
// import fu from "@/views/fu";
//购物车案例
// import gouCat from "@/views/gouCat";
//学习路由规则
import Home from '@/components/router/Home'
import Movie from '@/components/router/Movie'
import About from '@/components/router/About'
import Tab1 from '@/components/router/tab/tab1'
import Tab2 from '@/components/router/tab/tab2'

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
        //   name:'gouCat',
        //   component:gouCat

        //  学习路由规则
        //路由重定向，设置一个初始页面
        redirect: '/Home'
    },
    {path: '/Home', component: Home},
    {
        path: '/Movie', component: Movie,
        redirect: '/Movie/tab1',
        children: [
            //子路由的 path 要么只写组件名，要么连父组件一起全部写完整
            {path:'tab1',component:Tab1},
            {path: 'tab2',component: Tab2}
        ]
    },
    //动态路由，可以在路由地址上添加一个动态的数值
    //props:true 表示开启路由的props传参，可以简化 组件拿到路由拿到参数的方法
    {path: '/About/:id', component: About,props:true}
]

const router = new VueRouter({
    routes
})

export default router
