import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue'
import router from './router'
import unit from '@/unitui/unitui_init.js'//这是为了实现防止刷新路由丢失，这个部分必须
const app = createApp(App)
app.config.globalProperties.$unit =unit//在组件中使用this.$unit调用
app.use(ElementPlus)
app.use(router).mount('#app')
