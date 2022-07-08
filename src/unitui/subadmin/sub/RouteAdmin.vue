<template>
  <!-- 路由管理组件 -->
  <el-card shadow="never" :body-style="{ padding: '10px' }">
    <div id="route_card">
      <p style="float: left; padding: 20px">
        <span>动态路由管理</span>
        <el-tooltip effect="dark" content="全屏" placement="top">
          <i
            @click="$emit('fullscreen', 'route_card')"
            class="el-icon-full-screen"
          ></i>
        </el-tooltip>
      </p>
      <el-button-group v-show="!power" style="float: right; padding: 20px">
        <!-- 添加路由函数 -->
        <el-button
          type="primary"
          size="mini"
          title="添加路由"
          @click="handle_data.add_route_dialog_status = true"
          icon="el-icon-plus"
        ></el-button>
        <!-- 导出json函数 -->
        <el-button
          type="success"
          size="mini"
          @click="save_route()"
          title="保存"
          icon="el-icon-check"
        ></el-button>
      </el-button-group>
      <!-- 当用户类别引用时，显示的保存按钮 -->
      <el-button
        size="mini"
        type="primary"
        title="导出为权限"
        @click="get_route_power()"
        v-show="power"
        style="float: right; margin: 20px"
        >保存</el-button
      >
    </div>
    <!-- 路由列表 -->
    <div style="height: calc(100vh - 280px); overflow: auto; width: 100%">
      <el-table
        :data="route_data"
        ref="multipleTable"
        style="width: 100%"
        size="small"
        border
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column
          prop="meta.web_title"
          label="网站标题"
          sortable
        ></el-table-column>
        <el-table-column prop="name" label="路由名"></el-table-column>
        <el-table-column prop="path" label="路由url"></el-table-column>
        <el-table-column
          prop="component"
          label="路由组件位置"
          width="300"
        ></el-table-column>
        <el-table-column label="显示形式">
          <template #default="scope">
            <el-tag
              :type="scope.row.meta.show_site == 1 ? 'success' : 'warning'"
              >{{
                scope.row.meta.show_site == 1 ? "框架内" : "全屏显示"
              }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="嵌套路由">
          <template #default="scope">
            <el-button
              size="mini"
              type="info"
              @click="view_children_route(scope)"
              v-show="scope.row.children != undefined"
              icon="el-icon-view"
            ></el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="管理" width="160">
          <template #default="scope">
            <el-button-group v-show="!power">
              <el-button
                type="success"
                size="mini"
                @click="edit_route(scope)"
                icon="el-icon-edit-outline"
              ></el-button>
              <el-button
                type="primary"
                size="mini"
                @click="add_children_route(scope)"
                icon="el-icon-plus"
              ></el-button>
              <el-popconfirm
                confirmButtonText="删除"
                cancelButtonText="取消"
                confirmButtonType="success"
                cancelButtonType="warning"
                @confirm="del_route(scope)"
                title="确定删除该路由吗？"
              >
                <template #reference>
                  <el-button
                    type="danger"
                    size="mini"
                    icon="el-icon-delete"
                  ></el-button>
                </template>
              </el-popconfirm>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 嵌套路由显示部分 -->
    <el-dialog
      :title="children_route_table_title"
      v-model="route_children_visible"
      width="80%"
      destroy-on-close
    >
      <div>
        <el-table
          :data="children_route_data"
          style="width: 100%; margin-bottom: 20px"
          size="small"
          border
        >
          <el-table-column
            prop="meta.web_title"
            label="网站标题"
            sortable
          ></el-table-column>
          <el-table-column prop="name" label="路由名"></el-table-column>
          <el-table-column prop="path" label="路由url"></el-table-column>
          <el-table-column
            prop="component"
            label="路由组件位置"
            width="300"
          ></el-table-column>
          <el-table-column label="显示形式">
            <template #default="scope">
              <el-tag
                :type="scope.row.meta.show_site == 1 ? 'success' : 'warning'"
                >{{
                  scope.row.meta.show_site == 1 ? "框架内" : "全屏显示"
                }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column label="管理" width="110">
            <template #default="scope">
              <el-button-group>
                <el-button
                  type="success"
                  size="mini"
                  @click="edit_children_route(scope)"
                  icon="el-icon-edit-outline"
                ></el-button>
                <el-popconfirm
                  confirmButtonText="删除"
                  cancelButtonText="取消"
                  confirmButtonType="success"
                  cancelButtonType="warning"
                  @confirm="del_children_route(scope)"
                  title="确定删除该路由吗？"
                >
                  <template #reference>
                    <el-button
                      type="danger"
                      size="mini"
                      icon="el-icon-delete"
                    ></el-button>
                  </template>
                </el-popconfirm>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </el-card>
  <!-- 路由添加组件 -->
  <Addroute
    @change_status="handle_data.add_route_dialog_status = false"
    @revert="add_revert"
    :add_dialog_status="handle_data.add_route_dialog_status"
  ></Addroute>
  <!-- 路由编辑器组件 -->
  <RouteEdit
    v-model="handle_data.edit_dialog_data.edit_dialog_status"
    @revert_edit="revert_edit"
    :edit_dialog_data="handle_data.edit_dialog_data"
  ></RouteEdit>
  <!-- 嵌套路由编辑 -->
  <EditChildrenRoute
    v-model="handle_data.edit_children_dialog_data.edit_dialog_status"
    @revert_children_edit="revert_children_edit"
    :children_route_data="handle_data.edit_children_dialog_data"
  ></EditChildrenRoute>
  <!-- 添加嵌套路由组件 -->
  <AddChildrenRoute
    v-model="handle_data.add_children_dialog_data.add_dialog_status"
    @revert_children_add="revert_children_add"
    :add_children_dialog_data="handle_data.add_children_dialog_data"
  ></AddChildrenRoute>
</template>
<script>
import RouteEdit from "./route_admin_sub/EditRoute.vue"; //路由编辑器组件
import EditChildrenRoute from "./route_admin_sub/children/RouteEdit.vue";
import Addroute from "./route_admin_sub/Addroute.vue"; //路由添加组件
import AddChildrenRoute from "./route_admin_sub/AddChildrenRoute.vue"; //添加和修改嵌套路由组件
export default {
  props: {
    power: {
      //传递过来的状态，决定是否显示用户类别”权限“保存按钮
      type: Boolean,
      default: false,
    },
    user_label_route_power_data: Object, //《用户类别》传递过来的路由权限数据
    pc: Boolean,
  },
  components: {
    RouteEdit,
    EditChildrenRoute,
    Addroute,
    AddChildrenRoute,
  },
  emits: { fullscreen: null },
  data() {
    return {
      route_children_visible: false, //嵌套路由状态
      children_route_data: [], //嵌套路由表格数据
      children_route_table_title: "", //嵌套路由表格标题
      route_data: JSON.parse(sessionStorage.getItem("route_data")), //登录时保存的路由信息
      handle_data: {
        //操作数据，用于控制不同组件的显示和提供必要数据
        add_route_dialog_status: false, ////添加路由dialog控制
        edit_dialog_data: {
          //编辑路由dialog控制
          from: [], //需要编辑的内容
          edit_dialog_status: false, //状态
        },
        add_children_dialog_data: {
          //添加嵌套路由dialog控制
          title: "", //一级路由名标题
          add_dialog_status: false, //状态
        },
        edit_children_dialog_data: {
          //编辑路由dialog控制
          title: "", //一级路由名标题
          from: [], //需要编辑的内容
          edit_dialog_status: false, //状态
        },
      },
      handle_site: {
        //用于标识编辑位置
        index: "",
        i: "",
      },
    };
  },
  methods: {
    // 添加路由返回值
    add_revert(data) {
      //添加路由处理
      this.route_data.splice(0, 0, data);
      this.handle_data.add_route_dialog_status = false;
      this.$message.success("新增路由成功");
    },
    revert_edit(data) {
      //修改路由处理
      this.route_data[this.handle_site.index] = data;
      this.$message.success("修改成功");
      this.handle_data.edit_dialog_data.edit_dialog_status = false;
    },
    revert_children_add(data) {
      //添加嵌套路由处理
      console.log(data);
      if (this.route_data[this.handle_site.index].children == undefined) {
        this.route_data[this.handle_site.index].children = [];
        this.route_data[this.handle_site.index].children.splice(0, 0, data);
        this.$message.success("新增嵌套路由成功");
      } else {
        this.route_data[this.handle_site.index].children.splice(0, 0, data);
        this.$message.success("新增嵌套路由成功");
      }
      this.handle_data.add_children_dialog_data.add_dialog_status = false;
    },
    revert_children_edit(data) {
      //编辑嵌套路由处理
      this.route_data[this.handle_site.index].children[this.handle_site.i] =
        data;
      this.$message.success("修改嵌套路由成功");
      this.handle_data.edit_children_dialog_data.edit_dialog_status = false;
    },
    view_children_route(socpe) {
      //查看嵌套路由数据函数
      this.children_route_table_title =
        "《" + socpe.row.meta.web_title + "》嵌套路由管理";
      this.children_route_data = socpe.row.children;
      this.route_children_visible = true;
      this.handle_site.index = socpe.$index;
    },
    edit_route(scope) {
      //初始化编辑路由
      this.handle_data.edit_dialog_data = {
        from: this.route_data[scope.$index],
        edit_dialog_status: true,
      };
      this.handle_site.index = scope.$index;
    },
    edit_children_route(scope) {
      //初始化编辑嵌套路由
      this.handle_data.edit_children_dialog_data = {
        title: this.route_data[this.handle_site.index].meta.web_title,
        from: this.route_data[this.handle_site.index].children[scope.$index],
        edit_dialog_status: true,
      };
      this.handle_site.i = scope.$index;
    },
    add_children_route(scope) {
      //点击添加嵌套路由时
      this.handle_data.add_children_dialog_data = {
        title: this.route_data[scope.$index].meta.web_title,
        add_dialog_status: true,
      };
      this.handle_site.index = scope.$index;
    },
    del_route(scope) {
      //点击删除路由时
      this.route_data.splice(scope.$index, 1);
      this.$message.success("删除成功");
    },
    del_children_route(scope) {
      //点击删除路由时
      this.route_data[this.handle_site.index].children.splice(scope.$index, 1);
      this.$message.success("删除成功");
    },
    save_route() {
      //点击保存时
      this.$message.success(
        "保存成功，打印数据成功请查看控制台,如需查看效果请刷新"
      );
      console.log(JSON.stringify(this.route_data));
      sessionStorage.setItem("route_data", JSON.stringify(this.route_data));
    },
  },
  mounted() {},
};
</script>
<style scoped>
.el-card {
  cursor: pointer;
}
.el-icon-full-screen {
  margin-left: 10px;
  cursor: pointer;
}
</style>