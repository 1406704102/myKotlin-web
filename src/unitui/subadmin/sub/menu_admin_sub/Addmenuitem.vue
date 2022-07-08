<template>
    <el-dialog :title="title" v-model="menu_status" width="500px" @closed="$emit('update:modelValue',false)">
      <div>
        <el-form ref="form" :model="form" label-width="80px" size="mini">
          <el-form-item label="菜单名称">
            <el-input v-model="form.menu_name" placeholder="这是二级菜单名称"></el-input>
          </el-form-item>
          <el-form-item label="访问URL">
            <el-select v-model="form.path" placeholder="请选择URl，如没有请在路由管理中添加" style="width:100%">
              <el-option
                v-for="(route,index) in route_data"
                :key="index"
                :label="route.meta.web_title"
                :value="route.path"
              >
                <span style="float: left">{{ route.meta.web_title }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ route.path}}</span>
              </el-option>
            </el-select>
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
          <el-form-item label="访问状态">
            <el-radio-group v-model="form.menu_vist_status">
              <el-radio :label="1">允许访问</el-radio>
              <el-radio :label="0">禁止访问</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="mini" @click="$emit('update:modelValue',false)">取 消</el-button>
          <el-button size="mini" type="primary" @click="$emit('add_children_menu',form)">新增</el-button>
        </span>
      </template>
    </el-dialog>
</template>
<script>
import Uicon from '@/unitui/sub/Uicon.vue'
export default {
  components:{
    Uicon
  },
  props: ["dialog_status"],
  emits: { "update:modelValue": null,'add_children_menu':null},
  data() {
    return {
      form: {
        //菜单表单
        menu_name: "",
        path: "",
        menu_icon: "",
        menu_show_status: 1,
        menu_vist_status: 1
      },
      title: "添加子菜单",
      menu_status: false,
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")),
      route_data: []
    };
  },
  methods: {
    init_route_data() {
     const data = JSON.parse(sessionStorage.getItem("route_data"));
      for (let index = 0; index < data.length; index++) {
        this.route_data.splice(this.route_data.length, 0, data[index]);
        if (data[index].children!=undefined) {
          for (let i = 0; i < data[index].children.length; i++) {
          this.route_data.splice(this.route_data.length,0,data[index].children[i]
          );
        }
        }
      }
    }
  },
  mounted() {
    this.init_route_data()
  },
  watch: {
    dialog_status() {
      this.menu_status=this.dialog_status
    }
  }
};
</script>