import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // підключаємо роутер

createApp(App)
  .use(router) // використовуємо роутер
  .mount('#app');