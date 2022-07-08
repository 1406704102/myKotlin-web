<template>
<!-- 以上是菜单手机访问是显示的菜单 -->
  <div class="head_menu">
    <i v-show="!data.pc_menu" class="el-icon-s-grid" @click="drawer=true" id="head_aside_menu_content"></i>
    <VistMenu v-show="data.pc_menu" id="head_vist_menu"></VistMenu>
    <User style="float: right; margin-right: 10px"></User>
    <el-badge :value="12" type="warning" id="head_msg_badge">
      <i class="el-icon-chat-line-round"></i>
    </el-badge>
    <el-badge :value="12" type="success" id="head_msg_badge">
      <i class="el-icon-message"></i>
    </el-badge>
    <i v-show="data.pc_menu"
      class="el-icon-full-screen"
      @click="handleFullScreen()"
      id="head_full_screen"
    ></i>
  </div>
  <MobileMenu @status="status" :drawer_status="drawer"></MobileMenu>
</template>

<script>
import VistMenu from "./header/VistMenu.vue";
import User from "./header/User.vue";
import MobileMenu from "./header/MobileMenu.vue"
export default {
  components: {
    VistMenu,
    User,
    MobileMenu
  },
  props: ["data"],
  data() {
    return {
      fullscreen: false,
      drawer:false,
      default_path: sessionStorage.getItem("aside_default_path"),
    };
  },
  methods: {
    handleClose() {
      // console.log(data);
    },
    get_menu_item(path) {
      this.drawer=false
      sessionStorage.setItem("aside_default_path", path);
    },
    status(status){
      this.drawer=status
    },
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
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
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
  mounted() {
  },
};
</script>
<style scoped>
#head_full_screen {
  margin-right: 30px;
  margin-top: 27px;
  float: right;
  cursor: pointer;
}
#head_msg_badge {
  margin-right: 30px;
  margin-top: 25px;
  float: right;
  cursor: pointer;
}
#head_vist_menu {
  float: left;
  margin-left: 10px;
}
#head_aside_menu_content {
  float: left;
  margin-right: 10px;
  margin-top: 21px;
  margin-left: 10px;
}
</style>