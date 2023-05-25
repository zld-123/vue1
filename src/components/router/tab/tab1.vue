<template>
  <div class="tab1Container">
<h4>我是tab1,负责播放电影雷神</h4>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
export default {
  name: 'tab1',
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
.tab1Container{
  width: 100%;
  height: 250px;
  background-color: #ffd10d;
}
</style>
