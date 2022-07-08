<template>
  <div>
    <div id="unitui_logo" align="center">
      <p>{{ Collapse.isCollapse ? "U" : "UnitUI" }}</p>
    </div>
    <div id="aside_menu">
      <el-menu
        router
        :default-active="default_path"
        :collapse="Collapse.isCollapse"
        @select="get_menu_item"
        @close="handleClose"
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
          <el-menu-item-group>
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
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["Collapse"],
  data() {
    return {
      default_path: sessionStorage.getItem("aside_default_path"),
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")),
    };
  },
  methods: {
    handleClose(data) {
      console.log(data);
    },
    get_menu_item(path) {
      sessionStorage.setItem("aside_default_path", path);
    },
  },
  mounted() {},
};
</script>