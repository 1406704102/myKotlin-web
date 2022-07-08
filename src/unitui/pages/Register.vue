<template>
  <div
    id="login_back"
    :style="{ backgroundImage: 'url(' + background_image + ')' }"
  >
    <div :id="pc ? 'from_back_pc' : 'from_back_mobile'">
      <div id="from">
        <div align="center">
          <p style="font-size: 30px; padding: 10px; color: #e6a23c">
            {{ adress_data.title }}
          </p>
          <p style="font-size: 15px; padding: 5px; color: #c0c4cc">
            {{ adress_data.adress }}
          </p>
        </div>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-width="70px"
          size="small"
          label-position="left"
          style="padding: 10px"
        >
          <el-form-item label="用户名" prop="user_name">
            <el-input
              v-model="form.user_name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="user_password">
            <el-input
              v-model="form.user_password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input
              v-model="form.password"
              placeholder="确认密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-button type="warning" @click="onSubmit" style="width: 100%"
            >注册</el-button
          >
        </el-form>
        <div align="right" style="padding: 10px">
          <el-button type="text" @click="$router.push('/')">登录</el-button>
          <el-button type="text" @click="$router.push('/forget')"
            >找回密码</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pc"],
  data() {
    var validatePass = (rule, value, callback) => {//自定义验证
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.user_password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var check_user_name = (rule, value, callback) => {//自定义用户名
      var c = new RegExp();
      c = /^[A-Za-z0-9]+$/;
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else if (c.test(value)) {//验证仅为数字和字母
        callback();
      } else {
        callback(new Error("用户名仅支持数字和字母"));
      }
    };
    return {
      background_image:
        "https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      adress_data: {
        title: "注册",
        adress: "欢迎注册unit-ui",
      },
      form: {
        user_name: "",
        user_password: "",
        password: "",
        login_status: false,
      },
      rules: {
        user_name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "用户名长度在3-10个字符",
            trigger: "change",
          },
          { validator: check_user_name, trigger: "blur" },
        ],
        user_password: [
          { required: true, message: "密码不能为空", trigger: "change" },
        ],
        password: [{ validator: validatePass, trigger: "change" }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        //执行规则验证
        if (valid) {
          //通过时执行
          this.$message.success("验证成功");
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
#login_back {
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
}
#from_back_pc {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 450px;
  height: 350px;
  background: rgba(255, 255, 255, 0);
}
#from_back_mobile {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  height: 350px;
  background: rgba(255, 255, 255, 0);
}
#from {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  background-color: #ffffffe1;
  padding: 0px;
  border-radius: 5px;
}
</style>