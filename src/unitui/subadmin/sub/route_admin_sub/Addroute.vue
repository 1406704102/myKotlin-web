<template>
  <!-- 添加路由组件 -->
  <el-dialog
    title="添加路由"
    @closed="$emit('change_status', false)"
    v-model="dialog_status"
    width="500px"
  >
    <div>
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="网站标题">
          <el-input
            v-model="form.meta.web_title"
            placeholder="为中文建议使用组件名称，显示于网站标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="路由URL">
          <el-input
            v-model="form.path"
            placeholder="例如/unit/hello"
          ></el-input>
        </el-form-item>
        <el-form-item label="路由名称">
          <el-input
            v-model="form.name"
            placeholder="路由name属性，不能重复，例如unit_hello"
          ></el-input>
        </el-form-item>
        <el-form-item label="文件位置">
          <el-input
            v-model="form.component"
            placeholder="文件路径前不加任何符号，如views/Hello.vue"
          ></el-input>
        </el-form-item>
        <el-form-item label="显示方式">
          <el-radio-group v-model="form.meta.show_site">
            <el-radio :label="1">位于框架内</el-radio>
            <el-radio :label="0">全屏显示</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="mini" @click="$emit('change_status', false)"
          >取 消</el-button
        >
        <el-button size="mini" type="primary" @click="$emit('revert', form)"
          >新增</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  props: {
    add_dialog_status: {
      //添加路由dialog状态
      type: Boolean,
      default() {
        return false;
      },
    },
  }, //路由传递过来的状态等数据
  emits: { change_status: null, revert: null }, //验证返回参数
  data() {
    return {
      dialog_status: this.add_dialog_status,
      form: {
        //路由表单
        path: "",
        name: "",
        component: "",
        meta: {
          show_site: 1,
          web_title: "",
        },
      },
    };
  },
  methods: {
    add_route() {
      //点击新增时触发
      this.revert_data(this.form);
    },
  },
  mounted() {},
  watch: {
    add_dialog_status() {
      this.dialog_status = this.add_dialog_status;
    },
  },
};
</script>