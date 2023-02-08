import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

//iconfont
import './assets/css/iconfont/iconfont.css'

//router
import router from './router'
app.use(router)

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

//datav-vue3   //(for vite)
import DataVVue3 from '@kjgl77/datav-vue3'
app.use(DataVVue3)

//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

//element-plus icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  } 

//mitt
import mitt from 'mitt'
const Mit = mitt()
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
app.config.globalProperties.$Bus = Mit


app.mount('#app')