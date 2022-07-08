<template>
  <!-- 这是一个非常重要的组件，用于组件挂载和生成菜单并与组件进行匹配，一般情况下建议仅由管理甚至开发人员控制 -->
  <el-row :gutter="10">
    <el-col :xs="24" :sm="12">
      <el-card shadow="never" id="route_card" :body-style="{ padding: '0px' }">
        <div class="sub_space">
          <Routeadmin @fullscreen="show_fullscreen"></Routeadmin>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12">
      <el-card shadow="never" id="menu_card" :body-style="{ padding: '0px' }">
        <div class="sub_space">
          <Menuadmin @fullscreen="show_fullscreen"></Menuadmin>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import Routeadmin from "@/unitui/subadmin/sub/RouteAdmin.vue";
import Menuadmin from "@/unitui/subadmin/sub/MenuAdmin.vue";
export default {
  components: {
    Routeadmin, //组件挂载管理
    Menuadmin, //菜单生成、管理与匹配
  },
  data() {
    return {
      fullscreen:false,
      activeName: sessionStorage.getItem("tabs_name"), //获取切换tabsname
    };
  },
  methods: {
    show_fullscreen(id) {
      // console.log(id);
      let fullarea = document.getElementById(id);
      if (this.fullscreen) {
        // 退出全屏
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // 进入全屏
        if (fullarea.requestFullscreen) {
          fullarea.requestFullscreen();
        } else if (fullarea.webkitRequestFullScreen) {
          fullarea.webkitRequestFullScreen();
        } else if (fullarea.mozRequestFullScreen) {
          fullarea.mozRequestFullScreen();
        } else if (fullarea.msRequestFullscreen) {
          // IE11
          fullarea.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>
<style scoped>
.sub_space {
  width: 100%;
  height: calc(100vh - 200px);
  overflow: auto;
}
</style>