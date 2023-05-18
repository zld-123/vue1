<template>
  <div class="zi2Container">
    <h3>我正在演示子组件像父组件传值----{{ count }}</h3>
    <button @click="add">是 count + 1</button>
    <hr>
    <h4>我收到了大哥给的话----{{ strFrom }}</h4>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
import bus from "@/components/bus";
export default {
  name: 'zi2',
  data() {
    // 这里存放数据
    return {
      count:0,
      strFrom:''
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 想要使用导入的私有组件需要在此注册一下才能使用
  components: {},
  // 方法集合
  methods: {
    add(){
      this.count += 1
    // 修改数据时，通过$emit 定义一个自定义事件
      this.$emit('Fuadd',this.count)
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  //  在可以访问到this和data等数据可以接收到时候接收传递过来的值
    bus.$on('strFrom',val=>{
      this.strFrom = val
    })
  }
}
</script>

<style scoped lang="less">
.zi2Container{
  width: 100%;
  height: 250px;
  background-color: red;
}
</style>
