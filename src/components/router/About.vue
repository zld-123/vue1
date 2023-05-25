<template>
  <div class="AboutContainer">
    <h3>这是 About 页面 --简化前-- {{ $route.params.id }}--简化后--{{ id }}--查询参数query--{{ $route.query }}</h3>
    <button @click="getThis">打印this</button>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
export default {
  props:['id'],
  name: 'About',
  data() {
    // 这里存放数据
    return {}
  },
  // 计算属性
  computed: {},
  // 想要使用导入的私有组件需要在此注册一下才能使用
  components: {},
  // 方法集合
  methods: {
    getThis(){
      console.log(this)
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
.AboutContainer {
  width: 100%;
  height: 250px;
  background-color: #a3eb87;
}
</style>
