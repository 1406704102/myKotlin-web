<template>
  <el-config-provider :locale="locale">
    <!-- 全屏显示 -->
    <router-view :pc="pc" v-if="!$route.meta.show_site" />
    <!-- 显示框架 -->
    <div v-if="$route.meta.show_site">
      <el-container>
        <el-aside
          :width="
            !pc
              ? '0px'
              : isCollapse
              ? $unit.config.aside_small_width + 'px'
              : $unit.config.aside_width + 'px'
          "
        >
          <Aside :isCollapse="isCollapse" :pc="pc"></Aside>
        </el-aside>
        <el-container>
          <el-header>
            <Header v-model="isCollapse" :pc="pc"></Header>
          </el-header>
          <Setting></Setting>
          <MenuTab></MenuTab>
          <el-main>
            <router-view :pc="pc"></router-view>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>
<script>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import Aside from "./unit/Aside.vue";
import Header from "./unit/Header.vue";
import Footer from "./unit/Footer.vue";
import Setting from "./unit/Setting.vue";
import MenuTab from "./unit/MenuTab.vue";
export default {
  components: {
    [ElConfigProvider]: ElConfigProvider,
    Aside,
    Header,
    Footer,
    Setting,
    MenuTab,
  },
  data() {
    return {
      locale: zhCn, //加载语言
      pc: true, //pc状态，会向下传递，你可以通过props["pc"]获取，true时是pc访问，否则是手机
      isCollapse: this.$unit.config.aside_default_status,
    };
  },
  methods: {
    isMobile() {
      //判断不同的访问设备和宽度实现菜单响应
      const window_width = document.documentElement.clientWidth; //获取窗口大小
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      ); //获取访问navigator
      var vist_device = ""; //定义变量储存设备类型
      if (flag) {
        //判断是否是手机
        vist_device = "mobile";
      } else {
        vist_device = "pc";
      }
      if ((vist_device == "pc") & (window_width >= 768)) {
        this.pc = true;
      } else {
        this.pc = false;
      }
    },
  },
  mounted() {
    this.isMobile(); //调用访问设备判断方法
    window.onresize = () => {
      //窗口变化时调用
      this.isMobile();
    };
  },
};
</script>
