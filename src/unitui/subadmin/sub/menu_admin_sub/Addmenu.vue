<template>
    <el-dialog
      title="添加一级菜单"
      v-model="menu_status"
      width="500px"
      @closed="$emit('update:modelValue', false)"
    >
      <div>
        <el-form ref="form" :model="form" label-width="80px" size="mini">
          <el-form-item label="菜单名称">
            <el-input v-model="form.menu_name" placeholder="一级菜单名称“主页"></el-input>
          </el-form-item>
          <el-form-item label="菜单图标">
            <Uicon :icon="form.menu_icon" v-model="form.menu_icon"></Uicon>
          </el-form-item>
          <el-form-item label="显示状态">
            <el-radio-group v-model="form.menu_show_status">
              <el-radio :label="1">正常显示</el-radio>
              <el-radio :label="0">不显示</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="mini" @click="$emit('update:modelValue', false)">取 消</el-button>
          <el-button size="mini" type="primary" @click="$emit('add_menu', form)"
            >新增</el-button
          >
        </span>
      </template>
    </el-dialog>
</template>
<script>
import Uicon from "@/unitui/sub/Uicon.vue";
export default {
  components: {
    Uicon,
  },
  props: ["add_data"],
  emits: { "update:modelValue": null, add_menu: null },
  data() {
    return {
      form: {
        //菜单表单
        menu_name: "",
        menu_icon: "",
        menu_show_status: 1,
        children: [],
      },
      menu_status: false,
    };
  },
  watch: {
    add_data() {
      this.menu_status = this.add_data;
    },
  },
};
</script>