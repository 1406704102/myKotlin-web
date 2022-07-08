import {
  createRouter,
  createWebHashHistory
} from "vue-router"
const routes = [{
    path: "/",
    name: "Home",
    redirect: "/login"
  },
  {
    path: "/login", //路由url
    name: "login", //路由名称
    component: () => import("@/unitui/pages/Login.vue"), //加载模板文件
    meta: {
      show_site: 0, //是否全屏显示0为全屏显示，1为显示在框架内
      web_title: "登录" //网站标题
    }
  },
  {
    path: "/register", //路由url
    name: "register", //路由名称
    component: () => import("@/unitui/pages/Register.vue"), //加载模板文件
    meta: {
      show_site: 0, //是否全屏显示0为全屏显示，1为显示在框架内
      web_title: "登录" //网站标题
    }
  },
  {
    path: "/forget", //路由url
    name: "forget", //路由名称
    component: () => import("@/unitui/pages/Forget.vue"), //加载模板文件
    meta: {
      show_site: 0, //是否全屏显示0为全屏显示，1为显示在框架内
      web_title: "登录" //网站标题
    }
  },
  {
    path: "/404", //路由url
    name: "404", //路由名称
    component: () => import("@/unitui/pages/404.vue"), //加载模板文件
    meta: {
      show_site: 0, //是否全屏显示0为全屏显示，1为显示在框架内
      web_title: "404" //网站标题
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to) => {
  document.title = to.meta.web_title //生成网站标题
  if (to.name==undefined) {
    router.push("/404")
  }
})
export default router