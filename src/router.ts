import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Login from "./views/Login.vue";
import Employees from "./views/Employees.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;