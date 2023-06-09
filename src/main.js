import  Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入vant组件库
import vant from 'vant'
// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vant/lib/index.css';
//注册全局组件
import count from "@/components/count";
Vue.component('MyCount',count)
Vue.config.productionTip = false
Vue.use(vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
