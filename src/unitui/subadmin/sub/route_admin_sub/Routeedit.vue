<template>
  <div>
    <el-dialog title="路由修改" v-model="route_edit.status" width="500px" @closed="closed()">
      <div>
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
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="mini" @click="route_edit.status = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="edit_route()">修改</el-button>
          <el-button size="mini"
            type="warning"
            v-show="typeof(route_edit.index)=='number'"
            @click="add_children_visible=true"
          >添加嵌套路由</el-button>
        </span>
      </template>
      <!-- 嵌套dialog -->
      <el-dialog
        :title="'添加《'+form.meta.web_title+'》嵌套路由'"
        v-model="add_children_visible"
        width="400px"
      >
        <div>
          <el-form ref="form" :model="children_form" label-width="80px" size="mini">
            <el-form-item label="网站标题">
              <el-input v-model="children_form.meta.web_title"></el-input>
            </el-form-item>
            <el-form-item label="路由URL">
              <el-input v-model="children_form.path"></el-input>
            </el-form-item>
            <el-form-item label="路由名称">
              <el-input v-model="children_form.name"></el-input>
            </el-form-item>
            <el-form-item label="文件位置">
              <el-input v-model="children_form.component"></el-input>
            </el-form-item>
            <el-form-item label="显示方式">
              <el-radio-group v-model="children_form.meta.show_site">
                <el-radio :label="1">位于框架内</el-radio>
                <el-radio :label="0">全屏显示</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button size="mini" type="warning" @click="add_children_visible = false">取消</el-button>
            <el-button size="mini" type="success" @click="add_children_route()">添加</el-button>
          </span>
        </template>
      </el-dialog>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      form: {
        //组件表单
        path: "",
        name: "",
        component: "",
        meta: {
          show_site: 1,
          web_title: ""
        }
      },
      route_edit: {
        status: false,
        index: ""
      },
      route_data: [],
      add_children_visible: false,
      children_form: {
        //组件表单
        path: "",
        name: "",
        component: "",
        meta: {
          show_site: 1,
          web_title: ""
        }
      }
    };
  },
  methods: {
    init_route_edit() {
      this.route_data = this.data;
      this.route_edit = true;
    },
    edit_route() {
      this.save_edit();
    },
    add_children_route() {
      if (this.route_data[this.route_edit.index].children == undefined) {
        this.route_data[this.route_edit.index].children = [];
        this.route_data[this.route_edit.index].children.splice(
          0,
          0,
          this.children_form
        );
      } else {
        this.route_data[this.route_edit.index].children.splice(
          0,
          0,
          this.children_form
        );
      }
      this.save_edit();
    },
    save_edit() {
      sessionStorage.setItem("route_data", JSON.stringify(this.route_data));
      this.$router.go(0);
    },
    closed() {
      this.$emit("update:modelValue", false);
    }
  },
  mounted() {
    this.route_data = JSON.parse(sessionStorage.getItem("route_data"));
  },
  watch: {
    data() {
      this.route_edit = this.data;
      if (typeof this.route_edit.index == "number") {
        this.form = this.route_data[this.route_edit.index];
      } else {
        this.form = this.route_data[this.route_edit.index.index].children[
          this.route_edit.index.i
        ];
      }
    }
  }
};
</script>