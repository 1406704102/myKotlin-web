<template>
  <div>
    <div id="unitui_logo" align="center">
      <p>{{ isCollapse ? $unit.config.aside_small_logo :$unit.config.aside_logo }}</p>
    </div>
    <div id="aside_menu">
      <el-menu
        router
        :default-active="default_path"
        unique-opened
        :collapse="isCollapse"
        @select="get_menu_item"
      >
        <el-submenu
          v-for="(menu, index) in menu_data"
          :key="index"
          v-show="menu.menu_show_status"
          :index="'i' + index"
        >
          <template #title>
            <i :class="menu.menu_icon"></i>
            <span>{{ menu.menu_name }}</span>
          </template>
            <el-menu-item
              v-for="(item, i) in menu.children"
              v-show="item.menu_show_status"
              :key="i"
              :index="item.path"
            >
              <span>
                <i :class="item.menu_icon"></i>
                {{ item.menu_name }}
              </span>
            </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      default_path: sessionStorage.getItem("aside_default_path"),//被点击菜单
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")),//菜单数据
    };
  },
  methods: {
    get_menu_item(path) {//设置被点击路由，防止刷新左侧菜单数据丢失
      sessionStorage.setItem("aside_default_path", path);
    },
  },
};
</script>