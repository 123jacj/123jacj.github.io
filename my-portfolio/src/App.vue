<template>
  <div id="app">
    <!-- 导航栏 -->
    <Navbar />
    <!-- 路由页面 -->
    <router-view />
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup lang="ts" name="App">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
