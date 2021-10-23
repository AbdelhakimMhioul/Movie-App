import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vue3 Click Away Library
import VueClickAway from "vue3-click-away";

createApp(App).use(VueClickAway).use(router).mount('#app')
