<template>
  <div class="indexContainer">
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ article.title }}</span>
          <!-- 单张图片 -->
          <img :src="article.cover.images[0]" alt="" class="thumb" v-if="article.cover.type === 1"/>
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="article.cover.type === 3">
          <img v-for="(item, i) in article.cover.images" :key="i" :src="item" alt="" class="thumb"/>
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
          >作者 {{ article.aut_name }}&nbsp;&nbsp; {{ article.comm_count }} 评论 &nbsp;&nbsp; 发布日期
            {{ article.pubdate  }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross"/>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
// 使用import需要在此处引入该组件
export default {
  name: 'index',
  props: {
    // 文章的信息对象
    article: {
      type: Object,
      required: true
    }
  },
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
.indexContainer {
  border-bottom: 1px solid #f8f8f8;
}

.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
