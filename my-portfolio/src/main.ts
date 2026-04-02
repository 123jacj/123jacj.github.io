/*
 * @Description:
 * @LastEditors: kcz
 * @LastEditTime: 2021-09-07 16:02:04
 */
/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
// 全局样式
import './styles/global.css'
// 路由
import router from '@/router'

createApp(App).use(router).mount('#app')
