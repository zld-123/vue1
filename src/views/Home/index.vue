<template>
  <div class="indexContainer">
    <van-pull-refresh
        v-model="loadingf"
        @refresh="onRefresh"
        :disabled="finished">
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <Article v-for="(item) in artlist" :key="item.id" :article="item"></Article>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
// import request from "@/utils/requry";
import {getArticleList} from "@/api/server";
import Article from '@/components/Article/index'

export default {
  name: 'index',
  data() {
    // 这里存放数据
    return {
      page: 1,
      limit: 10,
      artlist: [],
      //  上拉刷新需要的属性
      //  之所以初始值设置为true是因为放置一开始就发起请求，导致上拉刷新无法进行
      loading: true,//当用户滑到底部触发加载更多事件时，变为true 阻止用户反复上拉多次请求
      finished: false,//当数据全部加载完，没有更多时，变为true，显示 finished-text="没有更多了" 高速用户已经没有数据了
      loadingf:false//当用户下拉刷新是，变为true，阻止多次刷新
    }
  },
  // 计算属性
  computed: {},
  // 想要使用导入的私有组件需要在此注册一下才能使用
  components: {
    Article
  },
  // 方法集合
  methods: {
    async initArtileList(isRef) {
      const {data: res} = await getArticleList(this.page, this.limit)
      //需要改造，否则将会覆盖数据，而不是拼接
      //需要判断用户进行的是什么行为
      if (isRef){
        //可以使用 ...res 扩展运算符
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }else {
        //可以使用 ...res 扩展运算符
        this.artlist = [...res, ...this.artlist]
        this.loading = false
      }

      //  如果没有更多数据就要将 finished 改为 true
      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      //  页码值加一
      this.page++
      //  发起请求
      this.initArtileList()
    },
    onRefresh(){
      //  页码值加一
      this.page++
      //  发起请求
      this.initArtileList()
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.initArtileList()
  }
}
</script>

<style scoped lang="less">

</style>
