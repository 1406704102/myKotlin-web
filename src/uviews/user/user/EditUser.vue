
<template>
  <el-dialog
    title="修改用户"
    @closed="$emit('update:modelValue', false)"
    v-model="dialogVisible"
    top="5vh"
    width="600px"
  >
    <el-form
      :model="user_form"
      :rules="rules"
      size="small"
      ref="user_form"
      label-width="100px"
      id="el_form"
    >
      <el-form-item label="用户昵称" prop="user_pet_name">
        <el-input
          v-model="user_form.user_pet_name"
          placeholder="请输入用户昵称"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="user_name">
        <el-input
          v-model="user_form.user_name"
          placeholder="请输入用户名，只能是数字和字母（大小写）"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="user_password">
        <el-input
          v-model="user_form.user_password"
          show-password
          placeholder="请输入用户密码（6-18）"
        ></el-input>
      </el-form-item>
      <el-form-item label="" label-width="0px" required>
        <el-row :gutter="10" style="width: 100%">
          <el-col :span="12">
            <el-form-item label="联系电话" prop="user_phone">
              <el-input
                v-model="user_form.user_phone"
                placeholder="请输入用户电话"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" label-width="60px" prop="user_email">
              <el-input
                v-model="user_form.user_email"
                placeholder="请输入用户邮箱"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="用户性别" prop="sex">
        <el-radio-group v-model="user_form.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户类别" prop="user_label">
        <el-select
          v-model="user_form.user_label"
          placeholder="请选择用户类别"
          style="width: 100%"
        >
          <el-option
            v-for="label in user_label_data"
            :key="label.label_name"
            :label="label.label_pet_name"
            :value="label.label_name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户状态" prop="user_status">
        <el-radio-group v-model="user_form.user_status">
          <el-radio :label="0">正常</el-radio>
          <el-radio :label="1">登录限制</el-radio>
          <el-radio :label="2">冻结</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户生日" prop="user_birthday">
        <el-date-picker
          type="date"
          placeholder="选择用户生日"
          v-model="user_form.user_birthday"
          format="YYYY 年 MM 月 DD 日"
          value-format="YYYY-MM-DD"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="用户介绍" prop="user_desc">
        <el-input
          type="textarea"
          placeholder="用户介绍"
          v-model="user_form.user_desc"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="small" @click="$emit('update:modelValue', false)"
          >取 消</el-button
        >
        <el-button size="small" type="warning" @click="submitForm('user_form')"
          >修改</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    edit_status:Boolean,
    edit_data:Object
  },
  emits: { "update:modelValue": null,'revert_edit':null },
  setup(props,context){
      const revert_data=(data)=>{
          context.emit('revert_edit',data)
      }
      return{
          revert_data
      }
  },
  data() {
    return {
      dialogVisible: false,
      user_label_data: require("@/unitui/assets/json/user_label.json"),
      user_form: {
        user_pet_name: "",
        user_name: "",
        user_password: "",
        user_phone: "15500000088",
        user_email: "12345@qq.com",
        sex: 1,
        user_label: "user",
        user_status: 0,
        user_birthday: "",
        user_desc: "",
      },
      rules: {
        user_pet_name: [
          { required: true, message: "请输入用户昵称", trigger: "change" },
        ],
        user_name: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        user_password: [
          { required: true, message: "请输入用户密码", trigger: "change" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "change",
          },
        ],
        user_phone: [
          { required: true, message: "不能为空", trigger: "change" },
        ],
        user_email: [
          { required: true, message: "不能为空", trigger: "change" },
          { type: "email", message: "请输入正确邮箱", trigger: "change" },
        ],
        user_birthday: [
          { required: true, message: "不能为空", trigger: "change" },
          { type: "date", message: "请输入正确时间", trigger: "change" },
        ],
        user_desc: [{ required: true, message: "不能为空", trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.revert_data(this.user_form)
        } else {
          return false;
        }
      });
    },
     resetForm(formName) {
        if (this.user_form.user_name!='') {
            this.$refs[formName].resetFields();
        }
      }
  },
  mounted() {},
  watch: {
    edit_status() {
      this.resetForm('user_form')
      this.dialogVisible = this.edit_status;
      this.user_form=this.edit_data
    },
  },
};
</script>

<style scoped>
#el_form {
  height: calc(50vh + 10px);
  overflow: auto;
  padding: 10px;
}
</style>
