<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
      </div>
    </template>
    <div class="adress_content">
      <div class="adress_title">
        <p style="margin-left: 10px">
          Unitui译为组件式ui框架，目的是搭建一个组件式开发框架。实现
          <span style="color: #409eff">可视化动态路由管理、</span>
          <span style="color: #67c23a">动态菜单管理。</span>
          从而实现组件动态挂载和菜单生成。<br />
          Unitui是一个致力于
          <span style="color: #e6a23c"
            >免干扰快速开发、动态路由和动态菜单开发框架</span
          >
        </p>
      </div>
      <div align="center">
        <p style="font-size: 150px">
          <span style="color: #f1c40f">U</span
          ><span style="color: #2dc26b">n</span
          ><span style="color: #e03e2d">i</span
          ><span style="color: #843fa1">t</span
          ><span style="color: #f1c40f">U</span
          ><span style="color: #236fa1">I</span>
        </p>
        <p>
          <span style="color: #2dc26b">可视化动态路由</span>|<span
            style="color: #e03e2d"
            >动态菜单</span
          >|<span style="color: #169179">免干扰</span>|<span
            style="color: #34495e"
            >快速开发</span
          >|<span style="color: #67C23A">响应式</span>|<span style="color: #236fa1">Vue3</span>
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">目录说明</span></el-divider
      >
      <div class="adress_title_one">
        <div style="margin-top:10px;margin-left:10px">
          <p>│&nbsp; unitui_init.js//路由动态添加组件，和css加载</p>
<p>│&nbsp;&nbsp;</p>
<p>├─assets//静态文件夹</p>
<p>│&nbsp; │&nbsp; login_back_image.jpg//登录、注册、找回密码背景图</p>
<p>│&nbsp; │&nbsp;&nbsp;</p>
<p>│&nbsp; ├─json//两个模拟后端返回的JSON</p>
<p>│&nbsp; │&nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>│&nbsp; └─style//内置的主题文件夹</p>
<p>│&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>├─pages//内置页面登录、注册、找回密码和404错误页</p>
<p>│&nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>├─sub//组件目前仅含图标选择组件</p>
<p>│&nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>├─subadmin//《组件管理》组件</p>
<p>│&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>└─ui//放置unitui视图组件部分</p>
        </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">获取Unitui</span></el-divider
      >
      <div class="adress_title">
        <p style="margin-left: 10px">
          1、你可以前往gitee获取源码和体验：<a
            href="https://gitee.com/unitui/unituicli3.git"
            target="_blank"
            rel="noopener noreferrer"
            >https://gitee.com/unitui/unituicli3.git</a
          >
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">运行Unitui</span></el-divider
      >
      <div class="adress_title_one">
        <p style="margin-left: 10px">1、安装node.js</p>
        <p style="margin-left: 10px">2、安装vuecli：npm install -g @vue/cli</p>
        <p style="margin-left: 10px">3、在项目目录：npm install</p>
        <p style="margin-left: 10px">4、在项目目录：npm run serve 运行项目</p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">JavaScript库使用情况</span></el-divider
      >
      <div class="adress_title_one">
        <p style="margin-left: 10px">
          "element-plus": "^1.0.2-beta.70", <br />"vue": "^3.0.0",<br />
          "vue-router": "^4.0.0-0"
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">Unitui内置全局数据</span></el-divider
      >
      <div class="adress_title_one">
        <el-table border :data="tableData" style="width: 100%">
          <el-table-column prop="key" label="名称"> </el-table-column>
          <el-table-column prop="value" label="是否全局"> </el-table-column>
          <el-table-column prop="address" label="介绍"> </el-table-column>
        </el-table>
        <p style="margin-left: 10px; margin-top: 10px">
          1、你可以在任意位置将该数据与服务器进行同步，保存路由和菜单的修改数据。<br /><br />
          2、这两个数据是必备参数，你需要在登录时初始化，否则项目可能会异常。
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">vue.config.js说明</span></el-divider
      >
      <div class="adress_title_one">
        <div style="margin-left: 10px; margin-top: 10px">
          <div
            style="
              color: #d4d4d4;
              background-color: #1e1e1e;
              font-family: Consolas, 'Courier New', monospace;
              font-size: 14px;
              line-height: 19px;
              white-space: pre;
            "
          >
            <div>
              <span style="color: #4ec9b0">module</span>.<span
                style="color: #4ec9b0"
                >exports</span
              >&nbsp;=&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955"
                >//&nbsp;如果不是部署二级目录请注释</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955"
                >//&nbsp;publicPath:&nbsp;process.env.NODE_ENV&nbsp;===&nbsp;'production'&nbsp;?&nbsp;'/unituicli3'&nbsp;:&nbsp;'./',</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955"
                >//&nbsp;&nbsp;是否为生产环境构建生成&nbsp;source&nbsp;map？</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe"
                >productionSourceMap</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #569cd6"
                >false</span
              >,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955"
                >//下面是引入cdn部分，如果你不希望引入cdn请删除或注释下面这部分</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe"
                >configureWebpack</span
              ><span style="color: #9cdcfe">:</span>&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >externals</span
              ><span style="color: #9cdcfe">:</span>&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #ce9178"
                >'vue'</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #ce9178"
                >"Vue"</span
              >,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #ce9178"
                >'element-plus'</span
              ><span style="color: #9cdcfe">:</span
              ><span style="color: #ce9178">'ElementPlus'</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #ce9178"
                >'vue-router'</span
              ><span style="color: #9cdcfe">:</span
              ><span style="color: #ce9178">'VueRouter'</span>
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>}</div>
          </div>
        </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">main.js</span></el-divider
      >
      <div class="adress_title_one">
        <p style="margin-top:10px;margin-left:10px">
          1、为了尽可能减少对开发者的干扰，你只需要在main.js中添加“import '@/unitui/unitui_init.js'”，其它部分可按自己意愿
          进行修改
        </p>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          key: "sessionStorage.setItem('menu_data')",
          value: "全局（任意位置可获取）",
          address:
            "左侧菜单数据与unitui/assets/json/menu.json相同，在登录时初始化，在《组件管理》中菜单被修改时这个数据也会实时变化，你可以在任意位置将此数据传到服务器",
        },
        {
          key: "sessionStorage.setItem('route_data')",
          value: "全局（任意位置可获取）",
          address:
            "动态路由数据与unitui/assets/json/route.json相同，在登录时初始化，在《组件管理》中路由被修改时这个数据也会实时变化，你可以在任意位置将此数据传到服务器",
        },
      ],
    };
  },
};
</script>
<style scoped>
.adress_title_one {
  min-height: 20px;
  border-left: solid 5px #e2e2e2;
  color: #606266;
}
.adress_title {
  min-height: 20px;
  border-left: solid 5px #67c23a;
  color: #606266;
}
</style>