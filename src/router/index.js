import VueRouter from "vue-router";
import Vue from 'vue'
import Intro from "../views/AboutMe";
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    redirect: "/aboutme"
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: Intro,
  },
  /*  {
      path: "/experience",
      name: "Experience",
      component: () => import("./../views/MyExperience")
  }, */
  {
    path: "/Project",
    name: "Project",
    component: () => import("../views/Project.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("./../views/Contact")
  },
  {
    path: "/*",
    name: "PageNotFound",
    component: () => import("./../views/PageNotFound")
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (!savedPosition) {
      return { left: 0, top: 0 };
    } else {
      return savedPosition;
    }
  }
})


export default router;