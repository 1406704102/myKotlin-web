<template>
  <!-- 添加嵌套路由组件 -->
  <el-dialog
    :title="'添加《' + dialog_data.title + '》嵌套路由'"
    v-model="dialog_data.add_dialog_status"
    @closed="$emit('update:modelValue', false)"
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
            placeholder="嵌套路由前不加/,例如hello"
          ></el-input>
        </el-form-item>
        <el-form-item label="路由名称">
          <el-input
            v-model="form.name"
            placeholder="路由name属性，不能重复，例如hello"
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
        <el-button size="mini" @click="$emit('update:modelValue', false)"
          >取 消</el-button
        >
        <el-button
          size="mini"
          type="primary"
          @click="$emit('revert_children_add', form)"
          >新增</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  props: ["add_children_dialog_data"], //来自RouteAdmin组件
  emits: { "update:modelValue": null, revert_children_add: null },
  data() {
    return {
      dialog_data: {
        title: "",
        add_dialog_status: false,
      },
      form: {
        //组件表单
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
  watch: {
    add_children_dialog_data() {
      this.dialog_data = this.add_children_dialog_data;
    },
  },
};
</script>