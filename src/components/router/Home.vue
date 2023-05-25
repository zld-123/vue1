<template>
  <div class="HomeContainer">
    <h3>这是 Home 首页</h3>
    <hr>
<!--    设置编程式导航-->
<!--    push 编程式导航，存在历史记录可以返回上一页 this.$router.push('路由地址') -->
    <button @click="pushGo">设置 push 跳转</button>
<!--    replace 编程式导航，不存在历史记录返回上一页，他的原理是替换上一页的记录 this.$router.replace('/About/1') -->
    <button @click="repGo">设置 replace 跳转</button>
<!--    go 编程式导航，根据里面传递的参数进行上一页或者下一页的跳转，this.$router.go(-1)-->
<!--    只跳转一页的时候有简化写法 this.$router.forward()表示式前进 this.$router.back()表示后退  -->
    <button @click="goGo">设置 go 进行历史记录的跳转</button>
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
  methods: {
    pushGo(){
      this.$router.push('/About/1')
    },
    repGo(){
      this.$router.replace('/About/1')
    },
    goGo(){
      this.$router.back()
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
.HomeContainer {
  width: 100%;
  height: 250px;
  background-color: skyblue;
}
</style>
