<template>
  <!-- 以上是菜单手机访问是显示的菜单 -->
  <div class="head_menu">
    <MobileMenu v-if="!pc"></MobileMenu>
    <i
      v-show="pc"
      :class="aside_status ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="$emit('update:modelValue', (aside_status = !aside_status))"
      id="aside_menu_icon"
    ></i>
    <VistMenu v-show="pc" id="head_vist_menu"></VistMenu>
    <User style="float: right; margin-right: 10px"></User>
    <Message style="float: right; margin-right: 30px"></Message>
    <i
      v-show="pc"
      class="el-icon-full-screen"
      @click="handleFullScreen()"
      id="head_full_screen"
    ></i>
  </div>
</template>

<script>
import VistMenu from "./sub/VistMenu.vue"; //左侧访问菜单
import User from "./sub/User.vue"; //登录用户信息
import MobileMenu from "./sub/MobileMenu.vue"; //移动或小屏设备访问时显示的菜单
import Message from "./sub/Mesage.vue"; //消息通知组件
export default {
  components: {
    VistMenu,
    User,
    MobileMenu,
    Message,
  },
  emits: { "update:modelValue": null },
  props: ["pc"], //访问设备判断结果
  data() {
    return {
      fullscreen: false,
      aside_status: this.$unit.config.aside_default_status,
    };
  },
  methods: {
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
};
</script>