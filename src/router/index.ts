import { createRouter, createWebHistory } from "vue-router";
import Admin from "../views/Admin.vue";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
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
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
