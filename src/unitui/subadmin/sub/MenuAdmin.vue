<template>
  <el-card shadow="never" :body-style="{ padding: '10px' }">
    <template #header>
      <div style="height: 30px">
        <p style="float: left; margin-bottom: 20px">菜单管理</p>
        <el-tooltip effect="dark" content="全屏" placement="top">
        <i @click="$emit('fullscreen','menu_card')" class="el-icon-full-screen"></i>
        </el-tooltip>
        <el-button-group style="float: right; margin-bottom: 20px">
          <el-button
            size="mini"
            type="primary"
            @click="handle_data.add_menu_status = true"
            icon="el-icon-plus"
            title="添加菜单"
          ></el-button>
          <el-button
            size="mini"
            type="success"
            @click="save_menu()"
            title="保存菜单"
            icon="el-icon-finished"
          ></el-button>
        </el-button-group>
      </div>
    </template>
    <!-- 菜单列表 -->
    <el-tree
      :data="menu_data"
      node-key="menu_name"
      default-expand-all
      :expand-on-click-node="false"
      v-if="tree_show"
    >
      <template #default="{ data }">
        <div class="menu">
          <span style="float: left" @click="get_data_site(data)">{{
            data.menu_name
          }}</span>
          <span style="float: right; margin-left: 20px">
            <el-tag
              size="mini"
              :type="data.menu_show_status == 1 ? 'success' : 'danger'"
              >{{ data.menu_show_status == 1 ? "显示" : "不显示" }}</el-tag
            >
            <i
              class="el-icon-top"
              id="icon"
              @click="menu_site_change('menu_up', data)"
              style="color: #409eff; margin-left: 10px"
            ></i>
            <i
              class="el-icon-bottom"
              id="icon"
              @click="menu_site_change('menu_down', data)"
              style="color: #67c23a; margin-left: 10px"
            ></i>
            <i
              class="el-icon-edit-outline"
              id="icon"
              @click="edit_menu(data)"
              style="color: #e6a23c; margin-left: 10px"
            ></i>
            <i
              class="el-icon-plus"
              id="icon"
              @click="add_menu_item(data)"
              v-show="hidden_item(data)"
              style="color: #409eff; margin-left: 10px"
            ></i>
            <el-popconfirm
              confirmButtonText="删除"
              cancelButtonText="取消"
              confirmButtonType="success"
              cancelButtonType="warning"
              @confirm="delete_menu(data)"
              title="确定删除该菜单？"
            >
              <template #reference>
                <i
                  class="el-icon-delete"
                  id="icon"
                  style="color: #f56c6c; margin-left: 10px"
                ></i>
              </template>
            </el-popconfirm>
          </span>
        </div>
      </template>
    </el-tree>
  </el-card>
  <!-- 添加菜单组件 -->
  <Addmenu
    v-model="handle_data.add_menu_status"
    @add_menu="add_menu"
    :add_data="handle_data.add_menu_status"
  ></Addmenu>
  <!-- 菜单编辑支持子菜单编辑组件 -->
  <Menuedit
    v-model="handle_data.menu_edit_data.dialog_status"
    @revert_edit_menu="revert_edit_menu"
    :menu_edit_data="handle_data.menu_edit_data"
  ></Menuedit>
  <!-- 天机二级菜单组件 -->
  <Addmenuitem
    v-model="handle_data.add_children_menu.dialog_status"
    @add_children_menu="add_children_menu"
    :dialog_status="handle_data.add_children_menu.dialog_status"
  ></Addmenuitem>
  <!-- 编辑二级菜单组件 -->
  <EditChildrenMenu
    v-model="handle_data.children_menu_edit_data.dialog_status"
    @revert_children_edit_menu="revert_children_edit_menu"
    :edit_children_data="handle_data.children_menu_edit_data"
  ></EditChildrenMenu>
</template>
<script>
import Addmenu from "@/unitui/subadmin/sub/menu_admin_sub/Addmenu.vue";
import Menuedit from "@/unitui/subadmin/sub/menu_admin_sub/Menuedit.vue";
import Addmenuitem from "@/unitui/subadmin/sub/menu_admin_sub/Addmenuitem.vue";
import EditChildrenMenu from "./menu_admin_sub/Menuitemedit.vue";
export default {
  props:["pc"],
  components: {
    Addmenu,
    Menuedit,
    Addmenuitem,
    EditChildrenMenu,
  },
  emits:{'fullscreen':null},
  data() {
    return {
      tree_show: true, //是否显示菜单列表
      handle_site: {
        //定义操作位置
        index: "",
        i: "",
      },
      handle_data: {
        //定义组件控制数组
        add_menu_status: false, //添加菜单状态
        menu_edit_data: {
          //菜单编辑初始化
          form: [],
          dialog_status: false,
        },
        add_children_menu: {
          //添加二级菜单初始化
          dialog_status: false,
        },
        children_menu_edit_data: {
          //二级菜单编辑初始化
          form: [],
          dialog_status: false,
        },
      },
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")), //获取登录时储存的菜单信息
    };
  },
  methods: {
    add_menu(data) {
      //新增主菜单时触发
      this.menu_data.splice(0, 0, data);
      this.handle_data.add_menu_status = false;
    },
    revert_edit_menu(data) {
      //编辑主菜单完成时触发
      this.menu_data[this.handle_site.index] = data;
      this.handle_data.menu_edit_data = {
        form: [],
        dialog_status: false,
      };
      this.$message.success("修改菜单成功");
    },
    add_children_menu(data) {
      //新增二级菜单完成时触发
      this.menu_data[this.handle_site.index].children.splice(
        this.handle_site.index,
        0,
        data
      );
      this.handle_data.add_children_menu.dialog_status = false;
      this.$message.success("添加二级菜单成功");
    },
    revert_children_edit_menu(data) {
      //编辑二级菜单完成时触发
      this.menu_data[this.handle_site.index].children[this.handle_site.i] =
        data;
      this.handle_data.children_menu_edit_data = {
        form: [],
        dialog_status: false,
      };
      this.$message.success("修改二级菜单成功");
    },
    hidden_item(data) {
      //判断是否是二级菜单进行隐藏
      const site = this.get_data_site(data);
      if (site.i == undefined) {
        return true;
      } else {
        return false;
      }
    },
    get_data_site(data) {
      //获取位置
      var site = "";
      for (let index = 0; index < this.menu_data.length; index++) {
        if (this.menu_data[index] == data) {
          site = {
            index: index,
          };
        } else {
          for (let i = 0; i < this.menu_data[index].children.length; i++) {
            if (this.menu_data[index].children[i] == data) {
              site = {
                index: index,
                i: i,
              };
            }
          }
        }
      }
      return site;
    },
    edit_menu(data) {
      //点击编辑时触发
      this.handle_site = {
        index: "",
        i: "",
      };
      const site = this.get_data_site(data);
      if (site.i == undefined) {
        this.handle_site.index = site.index;
        this.handle_data.menu_edit_data = {
          form: this.menu_data[this.handle_site.index],
          dialog_status: true,
        };
      } else {
        this.handle_site.index = site.index;
        this.handle_site.i = site.i;
        this.handle_data.children_menu_edit_data = {
          form: this.menu_data[this.handle_site.index].children[
            this.handle_site.i
          ],
          dialog_status: true,
        };
      }
    },
    add_menu_item(data) {
      //添加二级菜单时触发
      const site = this.get_data_site(data);
      this.handle_site.index = site.index;
      this.handle_data.add_children_menu.dialog_status = true;
    },
    delete_menu(data) {
      //删除菜单时触发
      const site = this.get_data_site(data);
      if (site.i == undefined) {
        this.menu_data.splice(site.index, 1);
      } else {
        this.menu_data[site.index].children.splice(site.i, 1);
      }
      this.$message.success("删除菜单成功");
    },
    save_menu() {
      //点击保存菜单时触发
      this.$message.success("菜单数据保存成功，并导出到console,如需查看效果请刷新");
      sessionStorage.setItem("menu_data", JSON.stringify(this.menu_data));
      console.log(JSON.stringify(this.menu_data));
    },
    menu_site_change(key, data) {
      //调整菜单位置
      this.tree_show = false;
      const site = this.get_data_site(data);
      if (site.i == undefined) {
        switch (key) {
          case "menu_up":
            if (site.index != 0) {
              this.menu_data[site.index] = this.menu_data.splice(
                site.index - 1,
                1,
                this.menu_data[site.index]
              )[0];
            } else {
              this.menu_data.push(this.menu_data.shift());
            }
            break;
          case "menu_down":
            if (site.index != this.menu_data.length - 1) {
              this.menu_data[site.index] = this.menu_data.splice(
                site.index + 1,
                1,
                this.menu_data[site.index]
              )[0];
            } else {
              this.menu_data.unshift(this.menu_data.splice(site.index, 1)[0]);
            }
            break;
        }
      } else {
        switch (key) {
          case "menu_up":
            if (site.i != 0) {
              this.menu_data[site.index].children[site.i] = this.menu_data[
                site.index
              ].children.splice(
                site.i - 1,
                1,
                this.menu_data[site.index].children[site.i]
              )[0];
            } else {
              this.menu_data[site.index].children.push(
                this.menu_data[site.index].children.shift()
              );
            }
            break;
          case "menu_down":
            if (site.i != this.menu_data[site.index].children.length - 1) {
              this.menu_data[site.index].children[site.i] = this.menu_data[
                site.index
              ].children.splice(
                site.i + 1,
                1,
                this.menu_data[site.index].children[site.i]
              )[0];
            } else {
              this.menu_data[site.index].children.unshift(
                this.menu_data[site.index].children.splice(site.i, 1)[0]
              );
            }
            break;
        }
      }
      setTimeout(() => {
        this.tree_show = true;
      }, 5);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.el-icon-full-screen{
  margin-left: 10px;
  cursor: pointer;
}
.main_menu {
  width: 100%;
  height: 30px;
  background-color: rgba(236, 236, 236, 0.712);
  border-radius: 30px;
  margin-top: 3px;
}
.main_menu_item {
  width: 100%;
  height: 30px;
  background-color: rgba(230, 230, 230, 0.349);
  border-radius: 30px;
  margin-top: 3px;
}
#menu {
  height: 50vh;
  overflow: auto;
}
#icon:hover {
  color: #ffffff;
  background-color: #bdbdbd;
  border-radius: 100px;
}
.menu {
  width: 100%;
  height: 20px;
  background-color: rgba(127, 255, 212, 0);
}
</style>