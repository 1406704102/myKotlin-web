<template>
  <el-drawer
    v-model="drawer"
    direction="ltr"
    size="200px"
    custom-class="aside_drawer_menu_back"
    :show-close="false"
    :withHeader="false"
    :append-to-body="true"
    @closed="go_back(false)"
  >
    <div id="unitui_logo" align="center">
      <p>UnitUI</p>
    </div>
    <div id="aside_menu">
      <el-menu
        router
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
  props: {
    default_path: {
      type: String,
      default: sessionStorage.getItem("aside_default_path"),
    },
    drawer_status: {
      type: Boolean,
      default: false,
    },
  },
  emits:{'status':null},
  setup(props,context){
      const go_back=(status)=>{
          context.emit('status',status)
      }
      return{
          go_back
      }
  },
  data() {
    return {
      drawer: false,
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")),
    };
  },
  methods:{
      handleClose(data) {
      console.log(data);
    },
    get_menu_item(path) {
      this.drawer=false
      sessionStorage.setItem("aside_default_path", path);
    },
  },
  watch:{
      drawer_status(){
          this.drawer=this.drawer_status
      }
  }
};
</script>