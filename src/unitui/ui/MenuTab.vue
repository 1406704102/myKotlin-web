<template>
  <div class="menu_tab_back">
    <div class="menu_tab_left">
      <i
        class="el-icon-arrow-left"
        style="margin-top: 10px; cursor: pointer"
        @click="set_scroll(-500)"
      ></i>
    </div>
    <div class="menu_tab" ref="tab">
      <el-tag
        v-for="(vist, index) in vist_data"
        :key="index"
        closable
        :type="vist.path == path ? 'success' : 'info'"
        @click="route_path(vist.path)"
        @close="close(index)"
        style="margin-right: 10px; cursor: pointer"
      >
        {{ vist.menu_name }}
      </el-tag>
    </div>
    <div class="menu_tab_right">
      <i
        class="el-icon-arrow-right"
        style="margin-top: 10px; margin-left: 10px; cursor: pointer"
        @click="set_scroll(500)"
      ></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scroll_width: 0,
      site_num: 0,
      path: "",
      vist_data: [],
    };
  },
  methods: {
    route_path(path) {
      sessionStorage.setItem("path", path);
      this.path = sessionStorage.getItem("path");
      this.$router.push(path);
    },
    close(index) {
      if (this.vist_data[index].path == this.path) {
        this.vist_data.splice(index, 1);
        sessionStorage.setItem("vist_data", JSON.stringify(this.vist_data));
        this.vist_data = JSON.parse(sessionStorage.getItem("vist_data"));
        this.$router.go(-1);
      } else {
        this.vist_data.splice(index, 1);
        sessionStorage.setItem("vist_data", JSON.stringify(this.vist_data));
        this.vist_data = JSON.parse(sessionStorage.getItem("vist_data"));
      }
    },
    set_scroll(num) {
      this.site_num += num;
      if (this.site_num > this.scroll_width) {
        this.site_num = this.scroll_width;
      } else if (this.site_num < 0) {
        this.site_num = 0;
      }
      this.$refs.tab.scrollLeft = this.site_num;
    },
    init_scroll() {
      for (let index = 0; index < 20; index++) {
        if (index == 3) {
          var i = index;
        }
      }
      this.path = i;
      if (i < 5) {
        this.$refs.tab.scrollLeft = 0;
      } else {
        this.$refs.tab.scrollLeft = 60 * i;
      }
    },
  },
  mounted() {
    this.scroll_width = this.$refs.tab.scrollWidth;
    this.init_scroll();
    if (sessionStorage.getItem("vist_data") != null) {
      this.vist_data = JSON.parse(sessionStorage.getItem("vist_data"));
      this.path = sessionStorage.getItem("path");
    }
  },
  watch: {
    $route() {
      if (sessionStorage.getItem("menu_data") != null) {
        const menu = JSON.parse(sessionStorage.getItem("menu_data"));
        for (let index = 0; index < menu.length; index++) {
          for (let i = 0; i < menu[index].children.length; i++) {
            if (menu[index].children[i].path == this.$route.path) {
              sessionStorage.setItem("path", menu[index].children[i].path);
              this.path = sessionStorage.getItem("path");
              if (this.vist_data.length > 0) {
                for (let l = 0; l < this.vist_data.length; l++) {
                  if (menu[index].children[i].path == this.vist_data[l].path) {
                    return false;
                  } else if (l == this.vist_data.length - 1) {
                    this.vist_data.splice(0, 0, menu[index].children[i]);
                    sessionStorage.setItem(
                      "vist_data",
                      JSON.stringify(this.vist_data)
                    );
                    this.vist_data = JSON.parse(
                      sessionStorage.getItem("vist_data")
                    );
                    return false;
                  }
                }
              } else {
                this.vist_data.splice(0, 0, menu[index].children[i]);
                sessionStorage.setItem(
                  "vist_data",
                  JSON.stringify(this.vist_data)
                );
                this.vist_data = JSON.parse(
                  sessionStorage.getItem("vist_data")
                );
                return false;
              }
            }
          }
        }
      }
    },
  },
};
</script>