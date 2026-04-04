<template>
  <div class="blog-detail">
    <div style="height: 80px"></div>
    <div class="container" >
      <div class="back">
        <router-link to="/">← 返回首页</router-link>
      </div>

      <div v-if="blog" class="detail-content">
        <h1 class="detail-title">{{ blog.title }}</h1>
        <p class="detail-date">{{ blog.date }}</p>
        <div class="detail-body">{{ blog.content }}</div>

      </div>

      <div v-else class="empty">
        <p>文章不存在或已删除</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import blogData from '../data/blogs.json'

const route = useRoute()
const blog = ref(null)

// 根据id获取博客详情
onMounted(() => {
  const id = parseInt(route.params.id)
  blog.value = blogData.find(item => item.id === id)
})
</script>

<style scoped>
.blog-detail {
  min-height: calc(100vh - 200px);
}

.back {
  margin: 20px 0;
}

.back a {
  color: var(--primary);
}

.detail-content {
  background: var(--white);
  padding: 40px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  line-height: 1.8;
}

.detail-title {
  font-size: 32px;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.detail-date {
  color: var(--text-gray);
  margin-bottom: 30px;
}

.detail-body {
  white-space: pre-line;
  font-size: 16px;
}

.empty {
  text-align: center;
  padding: 60px 0;
  color: var(--text-gray);
}

@media (max-width: 768px) {
  .detail-content {
    padding: 20px;
  }
  .detail-title {
    font-size: 24px;
  }
}
</style>
