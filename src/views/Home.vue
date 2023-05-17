<template>
  <div class="home">
    <h1>APP 根组件</h1>
    <hr/>
    <div class="box">
      <right/>
      <left/>
    </div>
  </div>

</template>

<script>
import Right from '@/components/right'
import Left from '@/components/left'
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components: {
    Right,
    Left
  },
  methods:{
    add(){
      // const 车 =''
    }
  }
}
</script>
<style lang="less">
.home{
  padding: 1px 20px 20px;
  background-color: #efefef;
  .box{
    background-color: red;
    display: flex;
    flex: 1;
  }
}

</style>
