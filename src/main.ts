/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import './styles/settings.css'
import 'animate.css/animate.min.css' //引入
// Composables
import { createApp } from 'vue'
import { setupStore } from "./store";
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
setupStore(app); // 安装store
registerPlugins(app)

app.mount('#app')
