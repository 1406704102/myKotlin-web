<template>
  <el-card shadow="never" id="user_table">
    <template #header>
      <div class="card-header">
        <span
          >{{ $route.meta.web_title }}
          <el-tooltip effect="dark" content="全屏显示" placement="top">
            <i @click="show_fullscreen()" class="el-icon-full-screen"></i>
          </el-tooltip>
          <el-dropdown
            @command="set_size"
            trigger="click"
            style="margin-left: 10px"
          >
            <el-tooltip effect="dark" content="表格尺寸" placement="top">
              <i class="el-icon-s-operation"></i>
            </el-tooltip>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="medium">正常</el-dropdown-item>
                <el-dropdown-item command="small">小</el-dropdown-item>
                <el-dropdown-item command="mini">超小</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </span>
        <el-button
          class="button"
          type="primary"
          size="mini"
          @click="add_dialog_status = true"
          icon="el-icon-plus"
          style="float: right"
        ></el-button>
      </div>
      <el-form
        :inline="true"
        size="mini"
        :model="search_form"
        style="margin-top: 10px"
      >
        <el-form-item label="内容">
          <el-input
            v-model="search_form.value"
            placeholder="搜索内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="搜索类别">
          <el-select v-model="search_form.label" placeholder="搜索类别">
            <el-option label="用户昵称" value="user_pet_name"></el-option>
            <el-option label="用户名" value="user_name"></el-option>
            <el-option label="电话" value="user_phone"></el-option>
            <el-option label="邮箱" value="user_email"></el-option>
            <el-option label="用户类别" value="user_label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </template>
    <div>
      <el-table
        :size="table_size"
        @selection-change="handleSelectionChange"
        :data="user_data"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="序号" width="55" type="index">
        </el-table-column>
        <el-table-column label="用户昵称" prop="user_pet_name">
        </el-table-column>
        <el-table-column label="用户名" prop="user_name"> </el-table-column>
        <el-table-column label="联系电话" prop="user_phone"> </el-table-column>
        <el-table-column label="邮箱" prop="user_email"> </el-table-column>
        <el-table-column label="性别">
          <template #default="props">
            <el-tag :type="props.row.sex == 1 ? 'success' : 'danger'">{{
              props.row.sex == 1 ? "男" : "女"
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="用户类别">
          <template #default="props">
            <el-tag
              :type="
                props.row.user_label == 'super_admin'
                  ? 'danger'
                  : props.row.user_label == 'admin'
                  ? 'warning'
                  : 'success'
              "
              >{{
                props.row.user_label == "super_admin"
                  ? "超级管理员"
                  : props.row.user_label == "admin"
                  ? "管理员"
                  : "用户"
              }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="用户状态">
          <template #default="props">
            <el-tag
              :type="
                props.row.user_status == 0
                  ? 'success'
                  : props.row.user_label == 1
                  ? 'warning'
                  : 'danger'
              "
              >{{
                props.row.user_status == 0
                  ? "正常"
                  : props.row.user_label == 1
                  ? "登录限制"
                  : "冻结"
              }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="生日" prop="user_birthday"> </el-table-column>
        <el-table-column label="管理" fixed="right" width="130">
          <template #default="props">
            <el-button-group>
              <el-button
                type="success"
                @click="edit_user(props)"
                size="mini"
                icon="el-icon-edit"
              ></el-button>
              <el-button
                type="danger"
                @click="del_user(props)"
                size="mini"
                icon="el-icon-delete"
              ></el-button>
            </el-button-group>
          </template>
        </el-table-column>
        <el-table-column label="介绍" type="expand">
          <template #default="props">
            <span>用户介绍：<br />{{ props.row.user_desc }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 10px">
      <Upage></Upage>
    </div>
  </el-card>
  <EditUser
    v-model="edit_status"
    :edit_status="edit_status"
    @revert_edit="revert_edit"
    :edit_data="edit_data"
  ></EditUser>
  <AddUser
    v-model="add_dialog_status"
    @revert="add_revert"
    :add_dialog_status="add_dialog_status"
  ></AddUser>
</template>
<script>
import AddUser from "./user/AddUser.vue";
import EditUser from "./user/EditUser.vue";
import Upage from "@/unitui/sub/Upage.vue";

export default {
  props: ["pc"],
  components: {
    AddUser,
    EditUser,
    Upage,
  },
  data() {
    return {
      user_data: [],
      search_form: {
        value: "",
        label: "user_name",
      },
      add_dialog_status: false,
      edit_status: false,
      edit_index: "",
      edit_data: [],
      fullscreen: false,
      table_size: "medium",
    };
  },
  methods: {
    add_revert(data) {
      this.user_data.splice(0, 0, data);
      this.add_dialog_status = false;
      sessionStorage.setItem("user_data", JSON.stringify(this.user_data));
      this.user_data = JSON.parse(sessionStorage.getItem("user_data"));
      this.$message.success("添加用户成功");
    },
    handleSelectionChange(data) {
      console.log(data);
    },
    set_size(size) {
      this.table_size = size;
    },
    onSearch() {
      console.log(this.search_form);
      console.log(sessionStorage.getItem("user_data"));
    },
    edit_user(props) {
      this.edit_index = props.$index;
      this.edit_data = props.row;
      this.edit_status = true;
    },
    revert_edit(data) {
      this.user_data[this.edit_index] = data;
      this.edit_status = false;
      sessionStorage.setItem("user_data", JSON.stringify(this.user_data));
      this.user_data = JSON.parse(sessionStorage.getItem("user_data"));
      this.$message.success("修改用户成功");
    },
    del_user(props) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.user_data.splice(props.$index, 1);
          sessionStorage.setItem("user_data", JSON.stringify(this.user_data));
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    show_fullscreen() {
      let fullarea = document.getElementById("user_table");
      if (this.fullscreen) {
        // 退出全屏
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // 进入全屏
        if (fullarea.requestFullscreen) {
          fullarea.requestFullscreen();
        } else if (fullarea.webkitRequestFullScreen) {
          fullarea.webkitRequestFullScreen();
        } else if (fullarea.mozRequestFullScreen) {
          fullarea.mozRequestFullScreen();
        } else if (fullarea.msRequestFullscreen) {
          // IE11
          fullarea.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
  mounted() {
    if (sessionStorage.getItem("user_data") != null) {
      this.user_data = JSON.parse(sessionStorage.getItem("user_data"));
    } else {
      const data = [
        {
          user_pet_name: "卢俊义",
          user_name: "ljy",
          user_password: "wwwwwww",
          user_phone: "15500000088",
          user_email: "12345@qq.com",
          sex: 1,
          user_label: "admin",
          user_status: 1,
          user_birthday: "2021-08-03",
          user_desc: "总督兵马副元帅",
        },
        {
          user_pet_name: "宋江",
          user_name: "sj",
          user_password: "qqqqqqqqqqqqqqq",
          user_phone: "15500000088",
          user_email: "12345@qq.com",
          sex: 1,
          user_label: "super_admin",
          user_status: 0,
          user_birthday: "2021-08-12",
          user_desc: "总督兵马大元帅",
        },
        {
          user_pet_name: "孙二娘",
          user_name: "ssn",
          user_password: "111122w",
          user_phone: "15500000088",
          user_email: "12345@qq.com",
          sex: 0,
          user_label: "super_admin",
          user_status: 2,
          user_birthday: "2021-08-12",
          user_desc:
            "在孟州道十字坡与张青开酒店卖人肉。梁山泊上仅有的三女将之一。",
        },
        {
          user_pet_name: "顾大嫂",
          user_name: "gds",
          user_password: "1ssssdd",
          user_phone: "15500000088",
          user_email: "12345@qq.com",
          sex: 0,
          user_label: "admin",
          user_status: 1,
          user_birthday: "2021-08-11",
          user_desc:
            "他与丈夫孙新开酒店为生，后因搭救表弟解珍、解宝，劫狱反登州，上梁山入伙，并参与祝家庄卧底。梁山大聚义时，排第一百零一位，上应地阴星，担任东山酒店掌店头领。征方腊后封东源县君，返回登州。",
        },
        {
          user_pet_name: "扈三娘",
          user_name: "gsn",
          user_password: "1111111111",
          user_phone: "15500000088",
          user_email: "12345@qq.com",
          sex: 0,
          user_label: "user",
          user_status: 0,
          user_birthday: "2021-08-05",
          user_desc:
            "是梁山三位女将之一。她是独龙冈扈家庄扈太公的女儿，与祝家庄的祝彪订亲，宋江攻打祝家庄时，扈家庄派兵救援祝家庄，扈三娘于阵前俘获了梁山的王英，又被林冲所擒。",
        },
      ];
      sessionStorage.setItem("user_data", JSON.stringify(data));
      this.user_data = JSON.parse(sessionStorage.getItem("user_data"));
    }
  },
};
</script>
<style scoped>
.card-header {
  width: 100%;
}
.el-icon-full-screen {
  cursor: pointer;
}
</style>
