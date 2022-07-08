<template>
  <i
    class="el-icon-s-grid"
    @click="drawer = true"
    id="head_aside_menu_content"
  ></i>
  <el-drawer
    v-model="drawer"
    direction="ltr"
    size="200px"
    custom-class="aside_drawer_menu_back"
    :show-close="false"
    :withHeader="false"
    :append-to-body="true"
  >
    <div id="unitui_logo" align="center">
      <p>UnitUI</p>
    </div>
    <div id="aside_menu">
      <el-menu
        router
        unique-opened
        :default-active="default_path"
        :collapse="false"
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
  </el-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      default_path: sessionStorage.getItem("aside_default_path"),
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")),
    };
  },
  methods: {
    handleClose(data) {
      console.log(data);
    },
    get_menu_item(path) {
      this.drawer = false;
      sessionStorage.setItem("aside_default_path", path);
    },
  },
};
</script>
<style scoped>
#head_aside_menu_content {
  float: left;
  margin-right: 10px;
  margin-top: 21px;
  margin-left: 10px;
}
</style>