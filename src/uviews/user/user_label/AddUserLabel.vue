<template>
  <!-- 新增组件 -->
  <el-button
    type="success"
    size="mini"
    @click="dialogVisible = true"
    icon="el-icon-plus"
  ></el-button>
  <el-dialog title="新增用户类别" v-model="dialogVisible" width="400px">
    <el-form ref="form" size="small" :model="form" label-width="80px">
      <el-form-item label="类别昵称">
        <el-input v-model="form.label_pet_name"></el-input>
      </el-form-item>
      <el-form-item label="类别名">
        <el-input v-model="form.label_name"></el-input>
      </el-form-item>
      <el-form-item label="类别菜单">
        <el-button @click="menu_visible = true">选择菜单</el-button>
      </el-form-item>
      <el-form-item label="类别路由">
        <el-button type="danger" @click="route_visible = true"
          >选择路由</el-button
        >
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取消</el-button>
        <el-button size="mini" type="primary" @click="add_user_label()"
          >新增</el-button
        >
      </span>
    </template>
    <!-- 菜单选择组件 -->
    <el-dialog
      title="选择菜单"
      v-model="menu_visible"
      width="900px"
      :show-close="false"
    >
      <PowerMenu
        @cancel_power_menu_dialog="cancel_power_menu_dialog"
        @get_menu_power_data="get_menu_power_data"
      ></PowerMenu>
    </el-dialog>
    <!-- 路由选择组件 -->
    <el-dialog
      title="用户路由管理"
      v-model="route_visible"
      :show-close="false"
      width="900px"
    >
      <RouteAdmin
        @get_route_power_data="get_route_power_data"
        @change_route_status="route_visible=false"
      ></RouteAdmin>
    </el-dialog>
  </el-dialog>
</template>
<script>
import PowerMenu from "./sub/PowerMenu.vue"; //菜单选择组件
import RouteAdmin from "./sub/PowerRoute.vue"; //路由选择组件
export default {
  components: {
    PowerMenu,
    RouteAdmin,
  },
  data() {
    return {
      form: {
        //新增用户表单
        label_pet_name: "", //类别昵称
        label_name: "", //类别名
        label_user: 0, //类别下用户数据
        menu: [], //菜单数据
        route: [], //路由数据
      },
      dialogVisible: false, //添加dialog状态
      menu_visible: false, //添加菜单dialog状态
      route_visible: false, //添加路由dialog状态
    };
  },
  emits: { get_add: null }, //定义检测
  setup(props, context) {
    const go_back = (data) => {
      //数据返回方法
      context.emit("get_add", data);
    };
    return {
      go_back,
    };
  },
  methods: {
    add_user_label() {
      //点击保存时触发
      this.go_back(this.form);
      this.dialogVisible = false;
    },
    cancel_power_menu_dialog(status) {
      //菜单组件点击取消时触发
      this.menu_visible = status;
    },
    get_menu_power_data(menu_data) {
      //点击菜单组件保存时触发
      this.$message.success("保存菜单成功");
      this.form.menu = menu_data;
      this.menu_visible = false;
    },
    get_route_power_data(route_data) {
      //点击路由保存时触发
      this.$message("保存路由成功");
      // console.log(route_data);
      this.form.route = route_data;
      this.route_visible = false;
    },
  },
};
</script>