<template>
  <el-breadcrumb style="margin-top:20px">
    <el-breadcrumb-item>{{init.menu}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{init.item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      menu_data: JSON.parse(sessionStorage.getItem("menu_data")),
      init: {
        menu: "",
        item: ""
      }
    };
  },
  methods: {
    init_menu() {
      // console.log(1);
      for (let index = 0; index < this.menu_data.length; index++) {
        for (let i = 0; i < this.menu_data[index].children.length; i++) {
          if (this.menu_data[index].children[i].path == this.$route.path) {
            this.init = {
              menu: this.menu_data[index].menu_name,
              item: this.menu_data[index].children[i].menu_name
            };

          }
        }
      }
      // console.log(this.init);
    }
  },
  mounted() {
    this.init_menu()
  },
  watch:{
    $route(){
      this.init_menu()
    }
  }
};
</script>