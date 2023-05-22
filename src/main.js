import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css'
//注册全局组件
import count from "@/components/count";
Vue.component('MyCount',count)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
