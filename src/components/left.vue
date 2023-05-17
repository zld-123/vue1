<template>
  <div class="leftContainer">
    <p>我是左组件</p>
    <hr>
    <MyCount :init="6"></MyCount>
  </div>
</template>

<script>
export default {
  name: 'left',
  // import引入的组件需要注入到对象中才能使用
  data() {
    // 这里存放数据
    return {}
  },
  // 监听属性 类似于data概念
  computed: {},
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
.leftContainer {
  width: 100%;
  height: 250px;
  background-color: skyblue;
}
</style>
