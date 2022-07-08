import router from "@/router"
import axios from "axios";
// import qs from "qs"
import {
  ElMessage
} from "element-plus"
// unitui初始化配置
var config_init = {
  setting_title: "Unitui", //设置顶部logo，这里支持heml格式
  unit_version: "v3.1.6", //设置区域版本号
  aside_logo: "UnitUI", //左侧菜单放大时logo
  aside_width:200,//左侧菜单展开的尺寸
  aside_small_width:65,//左侧缩小菜单大小
  aside_small_logo: "U", //左侧菜单缩小时logo
  aside_default_status:false,//左侧菜单默认状态false为默认打开，true为默认关闭
  footer_adress: "design by UnitUI"//底部内容
}
var config=[]//定义配置
if (sessionStorage.getItem("config")==null) {//判断配置是否已经修改
  config = config_init
} else {
  config=JSON.parse(sessionStorage.getItem("config"))
}

function init_route() {
  //依据后端返回的json数据生成路由
  if (sessionStorage.getItem("route_data") != null) {
    const route_data = JSON.parse(sessionStorage.getItem("route_data")); //获取登录时储存的route信息
    const init_route_data = []; //定义一个路由数组储存生成的路由信息,请看下面的注释A部分
    for (let index = 0; index < route_data.length; index++) { //循环route信息数组
      if (route_data[index].children != undefined) { //看是否存在嵌套路由
        //有children时生成路由数组方法
        init_route_data[index] = {
          path: route_data[index].path, //路由url
          name: route_data[index].name, //路由名
          component: () => import(`@/${route_data[index].component}`), //加载vue文件
          meta: {
            //路由一些附加信息，可以进行适当增加
            show_site: route_data[index].meta.show_site, //是否全屏显示
            web_title: route_data[index].meta.web_title //网站标题
          },
          children: [] //声明嵌套路由
        };
        for (let i = 0; i < route_data[index].children.length; i++) { //添加路由数组中的嵌套路由
          init_route_data[index].children[i] = {
            path: route_data[index].children[i].path, //路由url
            name: route_data[index].children[i].name, //路由名
            component: () => import(`@/${route_data[index].children[i].component}`), //加载vue文件
            meta: {
              //路由一些附加信息，可以进行适当增加
              show_site: route_data[index].children[i].meta.show_site, //是否全屏显示
              web_title: route_data[index].children[i].meta.web_title //网站标题
            }
          };
        }
      } else {
        //没有children时生成路由数组方法
        init_route_data[index] = {
          path: route_data[index].path, //路由url
          name: route_data[index].name, //路由名
          component: () => import(`@/${route_data[index].component}`), //加载vue文件
          meta: {
            //路由一些附加信息，可以进行适当增加
            show_site: route_data[index].meta.show_site, //是否全屏显示
            web_title: route_data[index].meta.web_title //网站标题
          }
        };
      }
    }
    for (let index = 0; index < route_data.length; index++) {
      //由于addRoutes已经废弃，所以需要循环使用addRoute进行数组添加
      router.addRoute(init_route_data[index]); //循环添加数组
    }
    console.log("路由初始化成功");
  } else {
    console.log("请检查是否登录或者检查sessionStorage，路由初始化失败"); //如果不需要提示请将else一起删除
  }
}

// axios配置
// 添加请求拦截器
// axios.defaults.baseURL = "http://192.168.123.187:8090"; //公共接口，如果你在组件中传入完整地址，这这个你会生效
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['Content-Type'] = 'application/json'
  config.headers['PJ-Token'] = sessionStorage.getItem('PJ-Token')
  // config.data = qs.stringify(config.data) //使用qs处理数据
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  switch (error.response.status) {
    case 404:
      ElMessage.error("axios：您所要打开的网页不存在或你填写的身份验证信息不正确")
      break;
    case 500:
      ElMessage.error("axios：服务器错误")
      break;
    case 400:
      ElMessage.error("axios：请求出现错误")
      break;

    default:
      break;
  }
  return console.log(error.response);
});

// 确定引入主题防止刷新丢失
import "./assets/unit_style/index.css"

init_route()
export default {
  init_route, //暴露出去在组件中进行触发
  config
}
/*
A即：
我们默认的静态路由内容如下router/index.js：
{
    path: "/login", //路由url
    name: "login", //路由名称
    component: () => import("@/unitui/pages/Login.vue"), //加载模板文件
    meta: {
      show_site: 0, //是否全屏显示0为全屏显示，1为显示在框架内
      web_title: "登录" //网站标题
    }
  },
  与我们动态添加的路由：
  init_route_data[index] = {
              path: route_data[index].path, //路由url
              name: route_data[index].name, //路由名
              component: () => import(`@/${route_data[index].component}`),//加载vue文件
              meta: {
                //路由一些附加信息，可以进行适当增加
                show_site: route_data[index].meta.show_site, //是否全屏显示
                web_title: route_data[index].meta.web_title //网站标题
              }
            };
            是相同的，所以当我们需要添加路由相关参数时可以使用与静态路由一样的参数进行修改，我们需要同时在三个init_route_data
            部分相同位置添加参数即可
*/
