<template>
  <!-- 用户类别编辑 -->
  <el-dialog
    :title="'正在编辑《' + data.title + '》'"
    v-model="data.status"
    width="500px"
  >
    <el-form ref="form" size="small" :model="form" label-width="80px">
      <el-form-item label="类别昵称">
        <el-input v-model="form.label_pet_name"></el-input>
      </el-form-item>
      <el-form-item label="类别名">
        <el-input v-model="form.label_name"></el-input>
      </el-form-item>
      <el-form-item label="类别菜单">
        <el-button @click="menu_visible = true">修改菜单</el-button>
      </el-form-item>
      <el-form-item label="类别路由">
        <el-button type="danger" @click="route_visible = true"
          >修改路由</el-button
        >
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="mini" @click="data.status = false">取消</el-button>
        <el-button size="mini" type="primary" @click="save_edit()"
          >修改</el-button
        >
      </span>
    </template>
    <!-- 菜单选择 -->
    <el-dialog
      title="选择菜单"
      v-model="menu_visible"
      width="900px"
      :show-close="false"
      :lock-scroll="false"
    >
      <div class="power_menu">
        <PowerMenu
          @cancel_power_menu_dialog="cancel_power_menu_dialog"
          @get_menu_power_data="get_menu_power_data"
          :menu_power_data="form.menu"
        ></PowerMenu>
      </div>
    </el-dialog>
    <!-- 路由选择 -->
    <el-dialog
      title="路由菜单"
      v-model="route_visible"
      :show-close="false"
      width="900px"
    >
      <RouteAdmin
        @get_route_power_data="get_route_power_data"
        :user_label_route_power_data="form.route"
        @change_route_status="route_visible=false"
      ></RouteAdmin>
    </el-dialog>
  </el-dialog>
</template>
<script>
import PowerMenu from "./sub/PowerMenu.vue";//类别菜单
import RouteAdmin from "./sub/PowerRoute.vue";//路由管理
export default {
  props: {
    edit_data: {//传递管理的需要编辑数据
      type: Object,
      default() {
        return {
          title: "",
          status: false,
          edit_data: [],
        };
      },
    },
  },
  components: {
    PowerMenu,
    RouteAdmin,
  },
  data() {
    return {
      data: {//定义编辑数据
        title: "",
        status: false,
        edit_data: [],
      },
      form: {//表单
        label_pet_name: "",
        label_name: "",
        menu: [],
        route: [],
      },
      menu_visible: false,//类别菜单dialog状态
      route_visible: false,//类别路由dialog状态
    };
  },
  emits: { save_edit: null },//检测返回值
  setup(props, context) {
    const go_back = (data) => {//返回函数
      context.emit("save_edit", data);
    };
    return {
      go_back,
    };
  },
  methods: {
    cancel_power_menu_dialog(status) {
      //权限菜单dialog点击取消时触发
      this.menu_visible = status;
    },
    save_edit() {//点击编辑页面保存时触发
      this.go_back(this.form);
      this.data.status = false;
      // console.log(this.form);
    },
    get_menu_power_data(menu_data) {
      //类别菜单dialog点击保存时触发
      this.$message.success("保存菜单成功");
      this.form.menu = menu_data;
      this.menu_visible = false;
      // console.log(this.form);
    },
    get_route_power_data(route_data) {
      //类别路由dialog点击保存时触发
      this.$message("保存路由成功");
      this.form.route = route_data;
      this.route_visible = false;
    },
  },
  watch: {
    edit_data() {
      this.data = this.edit_data;
      this.form = this.edit_data.edit_data;
    },
  },
};
</script>
<style scoped>
</style>