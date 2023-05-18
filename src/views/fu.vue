<template>
  <div class="fuContainer">
    <h1>我是父组件-正在演示父子组件传值</h1>
    <h3>父向子组件传值-props自定义属性</h3>
    <h3>子向父组件传值-$emit自定义事件----{{ Fucount }}</h3>
    <hr>
<!--    学习一个方法，在dom元素创建完成在执行的放-->
    <input type="text" v-if="inputDis" ref="ipRef" @blur="inpXs">
    <button v-else @click="inpDis">显示输入框</button>
    <hr>
    <!--    测试通过ref使父组件可以操作子组件数据-->
    <button @click="refsCount">重置子组件内部数据</button>
    <div class="box">
      <zi :mag="msg" :cat="cat" ></zi>
      <Zi2 @Fuadd="addFu" ref="resCount"></Zi2>
    </div>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
import Zi from '@/components/zi'
import Zi2 from '@/components/zi2'
export default {
  name: 'fu',
  data() {
    // 这里存放数据
    return {
      inputDis:false,
      msg:'向子组件传值',
      cat:{
        name:'宝马',
        nx:2015
      },
      Fucount:0
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 想要使用导入的私有组件需要在此注册一下才能使用
  components: {
    Zi,
    Zi2
  },
  // 方法集合
  methods: {
    addFu(val){
      this.Fucount = val
    },
    refsCount(){
      this.$refs.resCount.counts=0
      this.$refs.resCount.$refs.refH4.style.color = '#eee'
    },
  //  控制输入框和按钮的显示与隐藏
    inpDis(){
      this.inputDis = true
      //$nextTick方法是表示将内部代码延迟到页面dom元素更新完成后在运行内部代码
      this.$nextTick(()=>{
        //使输入框获取焦点
        this.$refs.ipRef.focus()
      })

    },
    inpXs(){
      this.inputDis = false
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
.fuContainer{
  padding: 1px 20px 20px;
  background-color: #efefef;
  .box{
    background-color: red;
    display: flex;
    flex: 1;
  }
}
</style>
