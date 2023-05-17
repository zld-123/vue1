<template>
  <div class="countContainer">
    <p>count 组件</p>
    <p>count 的值是==》 {{ count }}</p>
    <h5>测试/deep/穿透</h5>
    <button @click="add">count+1</button>
  </div>
</template>

<script>
// import引入的组件需要注入到对象中才能使用
export default {
  name: 'count',
  //props 自定义属性，允许使用者通过自定义属性为当前组件设置初始值
  //自定义属性名称不固定,只要合法就行
  //需要设置默认值的话，就需要使用对象形式，而不是数组形式
  props:{
    init:{
      //可以设置一个默认值，防止使用这忘记添加值
      default : 0,
      //可以设置接受的值的数据类型
      type:Number,
      //设置该属性是否为必填像，选择true的话表示如果不填就会报错
      required:true
    }
  },
  data() {
    // 这里存放数据
    return {
      count:this.init
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 方法集合
  methods: {
    add(){
      this.count += 1
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
.countContainer{
  p{
    color: bisque;
    font-size: 21px;
  }
}
</style>
