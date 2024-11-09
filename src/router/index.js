import { createRouter, createWebHistory } from 'vue-router';
import AdminPanel from '../components/AdminPanel.vue'; // шлях до вашого компоненту адмін панелі
import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel, // компонент, який відображатиметься на сторінці "/admin"
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;