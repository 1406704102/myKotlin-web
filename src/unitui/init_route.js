import router from '@/router'

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
    console.log('路由初始化成功');
  } else {
    console.log('请检查路由数据是否传入，路由初始化失败'); //如果不需要提示请将else一起删除
  }
}
init_route()
export default{
  init_route
}
/*
A即：
我们默认的静态路由内容如下router/index.js：
{
    path: '/login', //路由url
    name: 'login', //路由名称
    component: () => import('@/unitui/pages/Login.vue'), //加载模板文件
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