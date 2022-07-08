<template>
  <div id="warning_back" :style="{ backgroundImage: 'url(' + background_image + ')' }">
    <div id="from_back">
      <div id="from" align="center">
        <i class="el-icon-warning" id="warning_icon"></i>
        <p style="color:#E6A23C;font-size:75px">404</p>
        <p style="color:#E6A23C;font-size:15px;padding:10px">资源不存在发生异常，请您联系管理员或者返回——UnitUI</p>
        <el-button round icon="el-icon-back" style="margin-top:10px" @click="$router.go(-1)">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      background_image: 'https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    };
  },
  methods: {
    onSubmit() {
      this.$message.success("登录成功，即将为您跳转");
      if (sessionStorage.getItem("aside_menu") == null) {
        var menu = [];
        sessionStorage.setItem("aside_menu", JSON.stringify(menu));
      }
      setTimeout(() => {
        this.$router.push("/home");
      }, 1500);
    }
  }
};
</script>
<style scoped>
#warning_back {
  width: 100%;
  height: 100vh;
  background-color: rgb(226, 226, 226);
  position: relative;
}
#from_back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  height: 370px;
  background: rgba(255, 255, 255, 0.911);
  border-radius: 10px;
}
#from {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  background-color: #f79a4e00;
  padding: 0px;
}
#warning_icon {
  font-size: 150px;
  color: rgb(255, 106, 106);
}
</style>