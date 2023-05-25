<template>
  <div class="HomeContainer">
    <h3>这是 Home 首页</h3>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
export default {
  name: 'Home',
  data() {
    // 这里存放数据
    return {}
  },
  // 计算属性
  computed: {},
  // 想要使用导入的私有组件需要在此注册一下才能使用
  components: {},
  // 方法集合
  methods: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  }
}
</script>

<style scoped lang="less">
.HomeContainer {
  width: 100%;
  height: 250px;
  background-color: skyblue;
}
</style>
