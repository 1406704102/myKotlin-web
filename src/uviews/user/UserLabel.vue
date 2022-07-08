<template>
  <el-card shadow="never">
    <template #header>
      <el-row>
        <el-col :xs="24" :sm="8">
          <span style="margin-right: 10px">{{ $route.meta.web_title }}</span>
          <!-- 新增用户类别组件 -->
          <AddUserLabel @get_add="get_add"></AddUserLabel>
        </el-col>
        <el-col :xs="24" :sm="16" align="right">
          <el-input
            placeholder="请输入内容"
            v-model="search_value"
            size="mini"
            :style="{width: pc?'400px':'100%'}"
          >
            <template #append>
              <el-button type="primary" icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </el-col>
      </el-row>
    </template>
    <div>
      <el-table :data="user_label_data" style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column label="类别昵称" prop="label_pet_name">
        </el-table-column>
        <el-table-column label="类别" prop="label_name"> </el-table-column>
        <el-table-column label="类别人数" prop="label_user"> </el-table-column>
        <el-table-column fixed="right" width="150px">
          <template #default="scope">
            <el-button-group>
              <el-button
                size="mini"
                type="success"
                @click="init_edit(scope.$index)"
                icon="el-icon-edit"
              ></el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index)"
                icon="el-icon-delete"
              ></el-button>
              <el-button
                size="mini"
                type="warning"
                @click="change_vist(scope.$index)"
                icon="el-icon-refresh"
              ></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑类别组件 -->
    <user-edit @save_edit="save_edit" :edit_data="edit_data"></user-edit>
  </el-card>
</template>
<script>
import UserEdit from "./user_label/UserEdit.vue"; //编辑用户类别组件
import AddUserLabel from "./user_label/AddUserLabel.vue"; //新增用户类别组件
export default {
  props: ["pc"],
  components: {
    UserEdit,
    AddUserLabel,
  },
  data() {
    return {
      search_value: "", //搜索值
      edit_index: "", //储存编辑的index
      edit_data: {
        //传递的编辑内容
        title: "",
        status: false,
        edit_data: [], //这是类别的值
      },
      user_label_data: require('@/unitui/assets/json/user_label.json'),
    };
  },
  methods: {
    get_add(data) {
      // 新增时保存时会触发
      this.user_label_data.splice(this.user_label_data.length, 0, data);
    },
    handleDelete(index) {
      //点击删除时触发
      this.user_label_data.splice(index, 1);
      this.$message.success("删除成功");
    },
    save_edit(edit_data) {
      // 修改完成时触发
      this.user_label_data[this.edit_index] = edit_data;
      this.$message.success("修改成功");
    },
    init_edit(index) {
      //点击编辑时触发
      this.edit_index = index;
      this.edit_data = {
        title: this.user_label_data[index].label_pet_name,
        status: true,
        edit_data: this.user_label_data[index],
      };
    },
    change_vist(index) {
      //点击切换用户时触发
      this.$message.success("切换成功，即将于2秒后执行");
      setTimeout(() => {
        sessionStorage.setItem(
          "route_data",
          JSON.stringify(this.user_label_data[index].route)
        ); //储存路由数组信息，如果你不适用sessionStorage储存路由信息，则路由初始化会失败，你也可以在这储存后端返回的路由json
        sessionStorage.setItem(
          "menu_data",
          JSON.stringify(this.user_label_data[index].menu)
        ); //储存菜单信息，用于生成框架内左侧菜单信息
        this.$router.go(0);
      }, 2000);
    },
  },
};
</script>