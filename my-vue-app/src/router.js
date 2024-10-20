import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/login.vue'
import Register from './views/register.vue'
import UserInfo from './views/user_info.vue'
import PassRecovery from './views/pass_recovery.vue'
import Statistics from './views/Statistics.vue'
import Information from './views/Information.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/userInfo', component: UserInfo },
  { path: '/passRecovery', component: PassRecovery },
  { path: '/statistics', component: Statistics },
  { path: '/information', component: Information}
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;