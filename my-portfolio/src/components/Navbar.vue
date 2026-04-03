<template>
  <nav class="navbar">
    <div class="container nav-container">
      <!-- 左侧Logo -->
      <div class="nav-logo">
        <a href="#/">个人主页</a>
      </div>

      <!-- 桌面端导航 -->
      <ul class="nav-menu">
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于我</a></li>
        <li><a href="#skills">技能栈</a></li>
        <li><a href="#projects">项目经历</a></li>
        <li><a href="#competition">竞赛经历</a></li>
        <li><a href="#blogs">我的博客</a></li>
        <li><a href="#contact">联系我</a></li>
      </ul>

      <!-- 移动端汉堡菜单 -->
      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- 移动端下拉菜单 -->
    <ul class="mobile-menu" :class="{ show: isShowMenu }">
      <li><a href="#home" @click="isShowMenu = false">首页</a></li>
      <li><a href="#about" @click="isShowMenu = false">关于我</a></li>
      <li><a href="#skills" @click="isShowMenu = false">技能栈</a></li>
      <li><a href="#projects" @click="isShowMenu = false">项目经历</a></li>
      <li><a href="#competition" @click="isShowMenu = false">竞赛经历</a></li>
      <li><a href="#blogs" @click="isShowMenu = false">我的博客</a></li>
      <li><a href="#contact" @click="isShowMenu = false">联系我</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts" name="Navbar">
import { ref } from 'vue'
const isShowMenu = ref(false)
// 切换移动端菜单
const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--white);
  box-shadow: var(--shadow);
  z-index: 999;
  padding: 15px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo a {
  font-size: 22px;
  font-weight: bold;
  color: var(--primary);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-menu li a {
  font-size: 16px;
  font-weight: 500;
}

/* 汉堡菜单 */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-dark);
  border-radius: 2px;
}

/* 移动端菜单 */
.mobile-menu {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: var(--white);
  list-style: none;
  padding: 20px;
  flex-direction: column;
  gap: 15px;
  box-shadow: var(--shadow);
  display: none;
}

.mobile-menu.show {
  display: flex;
}

/* 响应式 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  .nav-toggle {
    display: flex;
  }
}
</style>
