<template>
  <el-dropdown @command="handleCommand" trigger="click">
    <div id="user_avatar">
      <span>
        <span style="float: right; padding: 7px 10px 0px 10px">{{
          user_name
        }}</span>
        <el-avatar
          size="small"
          :src="src"
          style="float: right; margin-top: 0px"
        ></el-avatar>
      </span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="user"><i class="el-icon-user"></i>个人中2心</el-dropdown-item>
        <el-dropdown-item command="out"><i class="el-icon-back"></i>退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
export default {
  data() {
    return {
      src: require("../../assets/login_back_image.jpg"),
      user_name: localStorage.getItem("login_user").nickeName,
    };
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "user":
          this.$message.success("你点击了个人中心");
          break;
        case "out":
          sessionStorage.removeItem("route_data");
          sessionStorage.removeItem("menu_data");
          this.$message.success("退出成功");
          this.$router.push("/login");
          break;
      }
    },
  },
};
</script>
<style scoped>
#user_avatar{
  cursor: pointer;
}
</style>
