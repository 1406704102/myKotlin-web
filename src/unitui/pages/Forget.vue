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
          label-width="80px"
          size="small"
          label-position="left"
        >
          <el-form-item label="用户名" prop="user_name">
            <el-input
              v-model="form.user_name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱" prop="user_email">
            <el-input
              v-model="form.user_email"
              placeholder="请输入用户邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input placeholder="请输入验证码" v-model="form.code">
              <template #append>
                <el-button :disabled="code_data.status" @click="get_code()">{{
                  code_data.title
                }}</el-button>
              </template>
            </el-input>
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
              placeholder="请再次输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-button type="danger" @click="onSubmit" style="width: 100%"
            >找回密码</el-button
          >
        </el-form>
        <div align="right" style="padding: 10px">
          <el-button type="text" @click="$router.push('/register')"
            >注册</el-button
          >
          <el-button type="text" @click="$router.push('/')">登录</el-button>
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
    return {
      background_image:
        "https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      adress_data: {
        title: "找回密码",
        adress: "欢迎访问unit-ui",
      },
      form: {
        user_name: "",
        user_email: "",
        code: "",
        user_password: "",
        password: "",
      },
      code_data: {
        title: "获取验证码",
        time: 60,
        status: false,
      },
       rules: {
        user_name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
        ],
        user_email: [
          { required: true, message: "用户邮箱不能为空", trigger: "change" },
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "change" },
        ],
        user_password: [
          { required: true, message: "密码不能为空", trigger: "change" },
          {
            min: 6,
            max: 18,
            message: "用户密码长度在6-18个字符",
            trigger: "change",
          },
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
    get_code() {
      if (this.code_data.time == 60) {
        this.$message.success("获取验证码成功，请查看邮箱");
        this.code_data.status = true;
        this.code_data.title =
          "请在（" + this.code_data.time + "）秒后再次获取";
        setTimeout(() => {
          this.code_data.time -= 1;
          this.get_code();
        }, 1000);
      } else if (this.code_data.time >= 0) {
        this.code_data.title =
          "请在（" + this.code_data.time + "）秒后再次获取";
        setTimeout(() => {
          this.code_data.time -= 1;
          this.get_code();
        }, 1000);
      } else {
        this.code_data = {
          title: "获取验证码",
          time: 60,
          status: false,
        };
      }
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
  height: 430px;
  background: rgba(255, 255, 255, 0);
}
#from_back_mobile {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 20px;
  margin: auto;
  width: 90%;
  height: 430px;
  background: rgba(255, 255, 255, 0);
}
#from {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  background-color: #ffffffe1;
  padding: 10px;
  border-radius: 5px;
}
</style>