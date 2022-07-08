<template>
  <!-- 用户类别菜单选择 -->
  <el-table
    ref="multipleTable"
    :data="menu_data"
    border
    height="300"
    tooltip-effect="dark"
    :default-expand-all="true"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="主菜单">
      <template #default="scope"
        ><i :class="scope.row.menu_icon"></i>{{ scope.row.menu_name }}</template
      >
    </el-table-column>
    <el-table-column label="主菜单显示状态">
      <template #default="scope">
        <el-checkbox
          :false-label="0"
          :true-label="1"
          v-model="scope.row.menu_show_status"
          >{{ scope.row.menu_show_status == 1 ? "显示" : "隐藏" }}</el-checkbox
        >
      </template>
    </el-table-column>
    <el-table-column label="二级菜单" type="expand" width="300">
      <template #default="scope">
        <el-table :data="scope.row.children" border style="width: 100%">
          <el-table-column label="二级菜单名称" width="180">
            <template #default="scope"
              ><i :class="scope.row.menu_icon"></i
              >{{ scope.row.menu_name }}</template
            >
          </el-table-column>
          <el-table-column label="二级菜单显示状态" width="180">
            <template #default="scope">
              <el-checkbox
                :false-label="0"
                :true-label="1"
                v-model="scope.row.menu_show_status"
                >{{
                  scope.row.menu_show_status == 1 ? "显示" : "隐藏"
                }}</el-checkbox
              >
            </template>
          </el-table-column>
          <el-table-column label="二级菜单访问状态" width="180">
            <template #default="scope">
              <el-checkbox
                :false-label="0"
                :true-label="1"
                v-model="scope.row.menu_vist_status"
                >{{
                  scope.row.menu_vist_status == 1 ? "允许访问" : "禁止访问"
                }}</el-checkbox
              >
            </template>
          </el-table-column>
        </el-table>
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
    menu_power_data: Object, //传递过来的菜单权限数据
  },
  data() {
    return {
      multipleSelection: [], //菜单选择时的数据
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")), //获取《组件管理》的菜单数据
    };
  },
  emits: { get_menu_power_data: null, cancel_power_menu_dialog: null }, //检测返回值
  setup(props, context) {
    const go_back = (menu) => {
      //点击保存时触发的返回函数
      context.emit("get_menu_power_data", menu);
    };
    const cancel_power_dialog = (status) => {
      //点击取消时触发的返回函数
      context.emit("cancel_power_menu_dialog", status);
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
      //当有菜单值传过来时获取一级菜单名称
      for (let index = 0; index < this.menu_power_data.length; index++) {
        this.get_site(this.menu_power_data[index].menu_name,index);
      }
    },
    get_site(menu_name,index) {
      //依据获取到的菜单名称标注是否选择,和对应菜单
      for (let i = 0; i < this.menu_data.length; i++) {
        if (this.menu_data[i].menu_name == menu_name) {
          this.menu_data[i]=this.menu_power_data[index]
          this.$refs.multipleTable.toggleRowSelection(this.menu_data[i]);
        }
      }
    },
  },
  mounted() {
    if (this.menu_power_data != undefined) {
      this.init_select();
    }
  },
};
</script>