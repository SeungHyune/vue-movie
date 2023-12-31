import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routes/index';
import './scss/_variables.scss';

createApp(App).use(createPinia()).use(router).mount('#app');
