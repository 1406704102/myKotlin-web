<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
      </div>
    </template>
    <div class="adress_content">
       <div class="adress_title_one">
        <el-timeline style="margin-left:10px">
          <el-timeline-item  placement="top">
            <el-card>
              <h4>升级方式</h4>
              <p>1、你只需要在gitee上获取最新源码然后替换unitui目录文件</p>
              <p>2、将main.js文件的init_route.js改为unitui_init.js</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-for="data in update_data" :key="data.update_date" class="adress_title">
        <el-timeline style="margin-left:10px">
          <el-timeline-item :timestamp="data.update_date" placement="top">
            <el-card>
             <div v-html="data.update_content"></div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      update_data:[
        {
          update_date:'2021-8-24',
          update_content:'<p style="color: #409eff;">新增</p><p>1、新增用户管理《权限管理》组件用于创建不同用户类别的权限和切换体验。<br /><br /></p><p style="color: #e6a23c;">修复</p><p>1、修复《数据监控》组件卡片参数过多的问题。<br /><br />1、修复登录、注册、找回密码和404错误页在手机设备上布局异常的问题，和padding参数新增。<br /><br /></p><p style="color: #67c23a;">优化</p><p>1、重构《组件管理》组件，使其更加好用和适应小屏设备访问。<br /><br /><br /></p>'
        },
        {
          update_date:'2021-8-21',
          update_content:'<p style="color:#409EFF">新增</p><p>1、新增对浏览器界面大小变化监听和对访问设备类型的监听，并通过pc向视图传递。<br><br>2、新增响应菜单支持，在访问设备为手机或者电脑、电脑屏幕宽度小于768时，会选择不同的菜单显示方式。<br><br>3、新增Upage页码组件，位于unitui/sub/Upage.vue，以便在访问设备发生变化时切换不同页面切换方式，可在主页进行体验。<br><br>4、新增类别参数支持，你可以在组件上通过props获取pc参数。<br><br>5、集成Axios，你可以通过<router-link to="/unit/adress/axios">Axios介绍</router-link>，进行配置和使用。<br><br></p><p style="color:#E6A23C">修复</p><p>1、修复设置打开按钮，在页面发生动态变化时无法跟随移动，需要刷新才能正常使用问题。<br><br>1、修复登录、注册、找回密码和404错误页在手机设备上布局异常的问题。<br><br></p><p style="color:#67C23A">优化</p><p>1、优化unitui/ui/Header.vue的排版方式，通过float方式进行排版，以便更好支持响应式布局。<br><br>2、优化优化图标显示状态在不同设备和设备大小进行图标的适当隐藏。<br><br></p>'
        },
        {
          update_date:'2021-8-20',
          update_content:'<p>新增</p><p>1、新增开发文档菜单目录，用于详细介绍unitui，组件位于uviews/unit_adress。<br><br>2、新增访问tab栏，便于快速切换。<br><br>3、新增设置功能，组件位于unitui/ui/Setting.vue。<br><br>4、新增用户头像和退出功能，组件位于unitui/ui/header/User.vue。<br><br>5、新增uviews文件夹，用于放置最新的组件。<br><br>6、新增修改打包方式，打包后会默认使用cdn为项目加速，以达到更快加载更小体积，如果你不希望使用cdn请前往vue.config.js中修改。<br><br>7、新增fontawesome图标支持，建议你尽量使用官方内置图标，fontawesome在打包为app时不能正常显示。<br><br>7、新增全屏切换功能。<br><br></p><p>修复</p><p>1、修复《组件管理》添加二级菜单时保存按钮显示为修改的问题。<br><br></p>'
        },
      ]
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