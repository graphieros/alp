import { createRouter, createWebHistory } from "vue-router";
import Admin from "../views/Admin.vue";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
