<template>
  <div class="home">
    <!-- 顶部留白（适配固定导航） -->
    <div style="height: 80px"></div>

    <!-- 1. 个人简介 -->
    <section id="home" class="hero">
      <div class="container hero-container">
        <div class="hero-text">
          <h1>你好，我是【木子李】</h1>
          <h2>西安邮电大学 | 计算机科学与技术 | 大二</h2>
          <p class="hero-desc">
            求职方向：Java后端开发 / 全栈开发<br>
            热爱编程、专注后端技术、持续学习、积极备战实习
          </p>
          <a href="#contact" class="btn">联系我</a>
        </div>
      </div>
    </section>

    <!-- 2. 关于我 -->
    <section id="about" class="about">
      <h2 class="section-title">关于我</h2>
      <div class="container about-content">
        <p>
          西安邮电大学计算机专业大二学生，主攻Java后端技术栈，同时掌握基本的Vue前端开发能力。
          具备不扎实计算机知识，尝试参与学科竞赛，喜欢写博客，总结技术笔记，致力于成为一名优秀的全栈开发者。
        </p>
      </div>
    </section>

    <!-- 3. 技能栈 -->
    <section id="skills" class="skills">
      <h2 class="section-title">技术栈</h2>
      <div class="container skills-grid">
        <div class="skill-card" v-for="(item, index) in skills" :key="index">
          <h3>{{ item.name }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 4. 项目经历 -->
    <section id="projects" class="projects">
      <h2 class="section-title">项目经历</h2>
      <div class="container projects-grid">
        <div class="project-card" v-for="(item, index) in projects" :key="index">
          <h3>{{ item.name }}</h3>
          <span>{{ item.time }}</span>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 5. 竞赛经历 -->
    <section id="competition" class="competition">
      <h2 class="section-title">竞赛经历</h2>
      <div class="container competition-list">
        <div class="competition-item" v-for="(item, index) in competitions" :key="index">
          <h3>{{ item.name }}</h3>
          <span>{{ item.time }}</span>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 6. 随笔博客列表 -->
    <section id="blogs" class="blogs">
      <h2 class="section-title">我的博客随笔</h2>
      <p>博客网站正在搭建中....</p>
      <div class="container blogs-list">
        <div class="blog-card" v-for="blog in blogList" :key="blog.id">
          <h3>{{ blog.title }}</h3>
          <span class="date">{{ blog.date }}</span>
          <p class="summary">{{ blog.summary }}</p>
          <router-link :to="`/blog/${blog.id}`" class="read-more">阅读全文 →</router-link>
        </div>
      </div>
    </section>

    <!-- 6. 联系我 -->
    <section id="contact" class="contact">
      <h2 class="section-title">联系我</h2>
      <div class="container contact-info">
        <p>📧 邮箱：1439668752@qq.com</p>
        <p>🐱 GitHub：<a href="https://github.com/123jacj" target="_blank">https://github.com/你的GitHub</a></p>
        <p>🔗 Blog: <a href="https://blog-of-muzile.vercel.app/">https://blog-of-muzile.vercel.app/</a></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 导入本地博客数据
import blogData from '../data/blogs.json'
const blogList = ref(blogData)

// ============== 填空位：替换为你的信息 ==============
// 技能栈
const skills = ref([
  { name: 'Java', desc: '后端核心语言，掌握集合、多线程、IO等' },
  { name: 'Vue3 + Vite', desc: '前端开发，能够独立开发响应式页面' },
  { name: 'Git', desc: 'learning....' },
  { name: 'HTML/CSS/JavaScript', desc: '三件套，能够独立开发静态页面' },
  { name: 'Python', desc: '初步掌握初级语法 与面向对象内容 同时学习了解了数据分析与制图等内容' },
  { name: 'Others', desc: '此外还初步了解数据库、linux操作系统等内容，这部分内容没有熟练掌握' },
  { name: '后续学习内容', desc: 'JavaWeb Redis SpringBoot SpringCloud.....' }
])

// 项目经历
const projects = ref([
  { name: '敬请期待', desc: '敬请期待',time:'2026.---' }
])

// 竞赛经历
const competitions = ref([
  { name: '敬请期待', desc: '敬请期待' ,time:'2026.---'}
])
// ====================================================
</script>

<style scoped>
/* 个人简介 */
.hero {
  background: linear-gradient(135deg, var(--primary), #0F3AAA);
  color: var(--white);
  padding: 100px 0;
  text-align: center;
}

.hero-text h1 {
  font-size: 42px;
  margin-bottom: 15px;
}

.hero-text h2 {
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-desc {
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.8;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: var(--white);
  color: var(--primary);
  border-radius: 50px;
  font-weight: bold;
}

/* 关于我 */
.about-content {
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
}

/* 技能栈 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.skill-card {
  background: var(--white);
  padding: 25px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  text-align: center;
}

.skill-card h3 {
  color: var(--primary);
  margin-bottom: 10px;
}

/* 项目经历 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.project-card {
  background: var(--white);
  padding: 25px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  text-align: center;
}

.project-card h3 {
  margin-bottom: 10px;
}

.project-card span {
  color: var(--primary);
  font-size: 14px;
  margin: 5px 0;
  display: inline-block;
}

/* 竞赛经历 */
.competition-list {
  max-width: 900px;
  margin: 0 auto;
}

.competition-item {
  background: var(--white);
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary);
  text-align: center;
}

.competition-item span {
  color: var(--primary);
  font-size: 14px;
  margin: 5px 0;
  display: inline-block;
}

/* 博客列表 */
.blogs p {
  font-size: 25px;
  -webkit-box-reflect: below -10px -webkit-linear-gradient(transparent, transparent 5%, rgba(255, 255, 255, .3));
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  color: var(--text-gray);
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}


.blogs-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.blog-card {
  background: var(--white);
  padding: 25px;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.blog-card .date {
  color: var(--text-gray);
  font-size: 14px;
  margin: 8px 0;
  display: block;
}

.read-more {
  color: var(--primary);
  margin-top: 10px;
  display: inline-block;
}

/* 联系我 */
.contact-info {
  text-align: center;
  font-size: 18px;
  line-height: 2;
}

/* 响应式 */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 32px;
  }
  .skills-grid, .blogs-list {
    grid-template-columns: 1fr;
  }
}
</style>
