<template>
  <footer class="footer">
    <div class="container">
      <p>© 2026 【木子李】 | 西安邮电大学 计算机专业</p>
      <p class="footer-link">
        <a href="https://github.com/123jacj" target="_blank">GitHub</a>
        <span> | </span>
        <span>Java后端/全栈开发</span>
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts" name="Footer">
</script>

<style scoped>
.footer {
  background: var(--text-dark);
  color: var(--white);
  padding: 30px 0;
  text-align: center;
  margin-top: 40px;
}

.footer p {
  margin: 8px 0;
  color: #C9CDD4;
}

.footer-link a {
  color: var(--primary);
  margin: 0 5px;
}
</style>
