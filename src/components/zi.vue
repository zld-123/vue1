<template>
  <div class="ziContainer">
    <h1>我是子组件</h1>
    <h3>你是否使用：{{ mag }}</h3>
    <h3>车辆名称：{{ cat.name }}</h3>
    <h3>车辆年限：{{ cat.nx }}</h3>
    <hr>
    <h4>我想对老弟说---{{ str }}</h4>
    <button @click="send">带着我对老弟说的话</button>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
import bus from '@/components/bus'
export default {
  name: 'zi',
  //自定义属性
  props:{
    mag:{
      default:'你还没传值',
      type:String,
      required:true
    },
    cat:{
      default: {
        name:'奔驰',
        nx:2525
      },
      type:Object
    },

  },
  data() {
    // 这里存放数据
    return {
      //  兄弟传值
      str:'请接好大哥给你的值'
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 想要使用导入的私有组件需要在此注册一下才能使用
  components: {},
  // 方法集合
  methods: {
    send(){
      console.log(111)
      bus.$emit('strFrom',this.str)
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  }
}
</script>

<style scoped lang="less">
.ziContainer{
  width: 100%;
  height: 650px;
  background-color: skyblue;
}
</style>
