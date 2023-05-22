<template>
  <div class="gouCatContainer">
    <Header title="购物车实例"/>
    <Goods v-for="item in list"
           :id="item.id"
           :key="item.id"
           :title="item.goods_name"
           :price="item.goods_price"
           :pic="item.goods_img"
           :state="item.inputVisible"
           @state-change="getNewState" :count="item.id"></Goods>
    <Footer
        :isfull="fullState"
        @full-change="getNewChange" :maount="amt" :all="total"></Footer>
  </div>
</template>

<script>
//导入 axios 请求库
import axios from 'axios'
// 使用import需要在此处引入该组件
import Header from "@/components/Cat/Header/Header";
import Goods from "@/components/Cat/Goods/Goods";
import Footer from "@/components/Cat/Footer/Footer";
import bus from '@/components/bus'
export default {
  name: 'gouCat',
  data() {
    // 这里存放数据
    return {
      list: []
    }
  },
  // 监听属性 类似于data概念
  computed: {
    fullState() {
      return this.list.every(item => item.inputVisible)
    },
    //总计
    amt() {
      return this.list.filter(item => item.inputVisible).reduce((total, item) => {
        //接口有问题，没有返回数量的数据，所以用id代替
        return total += item.goods_price * item.id
      }, 0)
    },
  //  结算
    total(){
      //filter() 数组的过滤方法，筛选出达到条件的值
      //reduce() 数组的计算方法 ，可以对值进行累加
      return  this.list.filter(item=>item.inputVisible).reduce((amt,item)=>{
        return amt += item.id
      },0)
    }
  },
  // 想要使用导入的私有组件需要在此注册一下才能使用
  components: {
    Header,
    Goods,
    Footer
  },
  // 方法集合
  methods: {
    async initCartList() {
      const {data: res} = await axios.get('https://applet-base-api-t.itheima.net/api/goods')
      if (res.status === 0) {
        this.list = res.data
      }
    },
    getNewState(e) {
      this.list.some(item => {
        if (item.id === e.id) {
          item.inputVisible = e.value
          return true
        }
      })
    },
    getNewChange(e) {
      this.list.forEach(item => item.inputVisible = e)
    }

  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.initCartList()
    bus.$on('share',(val)=>{
      this.list.some(item=>{
        //因为没有数量，所以无法进行赋值
        if (item.id === val.id){
          item.goods_count = val.value
          return true
        }
      })
    })
  }
}
</script>

<style scoped lang="less">
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
