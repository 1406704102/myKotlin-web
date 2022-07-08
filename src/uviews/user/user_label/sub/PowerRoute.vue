<template>
  <!-- 用户类别菜单选择 -->
  <el-table
    ref="multipleTable"
    :data="route_data"
    border
    height="300"
    tooltip-effect="dark"
    :default-expand-all="true"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
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
        <el-tag :type="scope.row.meta.show_site == 1 ? 'success' : 'warning'">{{
          scope.row.meta.show_site == 1 ? "框架内" : "全屏显示"
        }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
  <div align="right">
    <el-button
      type="primary"
      size="mini"
      @click="go_back(multipleSelection)"
      style="margin: 10px"
      >保存</el-button
    >
    <el-button
      size="mini"
      @click="cancel_power_dialog(false)"
      style="margin: 10px"
      >取消</el-button
    >
  </div>
</template>
<script>
export default {
  props: {
    user_label_route_power_data: Object, //传递过来的路由权限数据
  },
  data() {
    return {
      multipleSelection: [], //路由选择时的数据
      route_data: JSON.parse(sessionStorage.getItem("route_data")), //获取《组件管理》的路由数据
    };
  },
  emits: { get_route_power_data: null, 'change_route_status': null }, //检测返回值
  setup(props, context) {
    const go_back = (menu) => {
      //点击保存时触发的返回函数
      context.emit("get_route_power_data", menu);
    };
    const cancel_power_dialog = (status) => {
      //点击取消时触发的返回函数
      context.emit("change_route_status", status);
    };
    return {
      go_back,
      cancel_power_dialog,
    };
  },
  methods: {
    handleSelectionChange(val) {
      //触发多选时获取选中值
      this.multipleSelection = val;
    },
    init_select() {
      //当有路由值传过来时获取一级路由名称
      for (let index = 0; index < this.user_label_route_power_data.length; index++) {
        this.get_site(this.user_label_route_power_data[index].path);
      }
    },
    get_site(path) {
      //依据获取到的路由名称标注是否选择
      for (let i = 0; i < this.route_data.length; i++) {
        if (this.route_data[i].path == path) {
          this.$refs.multipleTable.toggleRowSelection(this.route_data[i]);
        }
      }
    },
  },
  mounted() {
    if (this.user_label_route_power_data != undefined) {
      this.init_select();
    }
  },
};
</script>