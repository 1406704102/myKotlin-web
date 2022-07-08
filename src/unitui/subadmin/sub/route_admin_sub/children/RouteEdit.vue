<template>
  <el-dialog
    @closed="$emit('update:modelValue', false)"
    :title="'正在修改《' + children_route_data.title + '》嵌套路由'"
    v-model="edit_dialog_status"
    width="500px"
  >
    <el-form ref="form" :model="form" label-width="80px" size="mini">
      <el-form-item label="网站标题">
        <el-input v-model="form.meta.web_title"></el-input>
      </el-form-item>
      <el-form-item label="路由URL">
        <el-input v-model="form.path"></el-input>
      </el-form-item>
      <el-form-item label="路由名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="文件位置">
        <el-input v-model="form.component"></el-input>
      </el-form-item>
      <el-form-item label="显示方式">
        <el-radio-group v-model="form.meta.show_site">
          <el-radio :label="1">位于框架内</el-radio>
          <el-radio :label="0">全屏显示</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="mini" @click="$emit('update:modelValue', false)"
          >取 消</el-button
        >
        <el-button
          size="mini"
          type="warning"
          @click="$emit('revert_children_edit', form)"
          >修改</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  props: ["children_route_data"],
  emits: { "update:modelValue": null, revert_children_edit: null },
  data() {
    return {
      edit_dialog_status: false,
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
  watch: {
    children_route_data() {
      this.edit_dialog_status = this.children_route_data.edit_dialog_status;
      this.form = this.children_route_data.from;
    },
  },
};
</script>