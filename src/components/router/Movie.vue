<template>
  <div class="MovieContainer">
    <h3>这是 Movie 页面</h3>
    <hr>
    <router-link to="/Movie/tab1">复联</router-link>
    <router-link to="/Movie/tab2">雷神</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
export default {
  name: 'Movie',
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
.MovieContainer {
  width: 100%;
  height: 250px;
  background-color: #f63b41;
}
</style>
