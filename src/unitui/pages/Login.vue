<template>
  <div
    id="login_back"
    :style="{ backgroundImage: 'url(' + background_image + ')' }"
  >
    <div :id="pc ? 'from_back_pc' : 'from_back_mobile'">
      <div id="from">
        <div align="center">
          <p style="font-size: 30px; padding: 10px; color: #909399">
            {{ adress_data.title }}
          </p>
        </div>
        <el-form
          ref="form"
          :rules="rules"
          :model="form"
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
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <div style="display: flex; flex-wrap: nowrap">
              <div style="width: calc(100% - 112px)">
                <el-input placeholder="请输入验证码" v-model="form.code">
                </el-input>
              </div>
              <div @click="init_code()" style="width: 112">
                <Ucode :identifyCode="identifyCode"></Ucode>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="记住登录">
            <el-checkbox v-model="form.login_status"></el-checkbox>
          </el-form-item>
          <el-button type="primary" @click="onSubmit" style="width: 100%"
            >登录</el-button
          >
        </el-form>

      </div>
    </div>
  </div>
</template>
<script>
import Ucode from "../sub/Ucode.vue";
import {loginApi} from "../../api/userInfo";

export default {
  components: {
    Ucode,
  },
  props: ["pc"],
  data() {
    var validateVcode = (rule, value, callback) => {
      //自定义验证
      if (value === "") {
        callback(new Error("验证码不能为空"));
      } else if ("'" + value + "'" !== this.identifyCode) {
        callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    return {
      background_image:
        "https://obs-qych2.obs.cn-north-4.myhuaweicloud.com//cmtv/banner//1656556980509.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //登录页面组件背景图
      adress_data: {
        //登录界面头部信息
        title: "登录", //标题
      },
      form: {
        //登录表单信息
        user_name: "oeCCV5YqZlVkYBBj4bmpYl0MCTEQ", //用户名
        user_password: "123456", //用户密码
        code: "",
        login_status: false, //登录状态
      },
      identifyCode: "", //验证码
      user_data: {//登录用户信息
        user_name: "oeCCV5YqZlVkYBBj4bmpYl0MCTEQ",
        user_pet_name: "爬山虎",
        user_label: "super_admin",
        user_avatar:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      route_data: require("@/unitui/assets/json/route.json"), //路由json数据，模拟后端返回的json，后端返回数据可以与json文件内容相同
      menu_data: require("@/unitui/assets/json/menu.json"), //菜单数组,模拟后端返回的json，后端返回数据可以与json文件内容相同
      //表单验证
      rules: {
        user_name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
        ],
        user_password: [
          { required: true, message: "密码不能为空", trigger: "change" },
        ],
        code: [{ validator: validateVcode, trigger: "change" }],

      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        //执行规则验证
        if (valid) {
          //通过时执行
          // console.log(123)

          this.init_login();
        } else {
          return false;
        }
      });
    },
    init_login() {
      //点击登录时触发
      console.log(123)

      loginApi({
        userName:this.form.user_name
      }).then(res=>{
        console.log(res);
        sessionStorage.setItem("login_user", JSON.stringify(res.userInfo));
        sessionStorage.setItem("route_data", JSON.stringify(this.route_data)); //储存路由数组信息，如果你不适用sessionStorage储存路由信息，则路由初始化会失败，你也可以在这储存后端返回的路由json
        sessionStorage.setItem("menu_data", JSON.stringify(this.menu_data)); //储存菜单信息，用于生成框架内左侧菜单信息
        sessionStorage.setItem("PJ-Token", res.token); //储存菜单信息，用于生成框架内左侧菜单信息
        this.$unit.init_route(); //调用初始化路由功能，依据sessionStorage.getItem("route_data")的信息动态添加路由，要看懂/unitui/unitui_init.js中的内容
        this.$message.success("登录成功，即将为您跳转");
        setTimeout(() => {
          this.$router.push("/home"); //执行路由跳转，默认跳转组件管理
        }, 500);
      })


    },
    init_code() {
      let number = parseInt(Math.random() * (9999 - 1000 + 1) + 1000, 10);
      this.identifyCode =
        "'" + number + "'";
      this.form.code = number
    },
  },
  mounted() {
    this.init_code()
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
  height: 100vh;
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
#from_back_mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left:5%;
  height: 100vh;
}
#from {
  width: 100%;
  /*height: 50vh;*/
  padding: 30px;

  background-color:#ffffff;
  border-radius: 10px;
}
</style>
