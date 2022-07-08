<template>
  <!-- 右侧设置区域 -->
  <div class="setting" @click="drawer = true">
    <i class="el-icon-setting"></i>
  </div>
  <!-- 设置内容区域 -->
  <el-drawer v-model="drawer" size="250px" :with-header="false">
    <el-divider content-position="center">
      <p style="font-size: 30px">
        <span v-html="$unit.config.setting_title"></span>
        <span style="color: #f1c40f; font-size: 10px">{{
          $unit.config.unit_version
        }}</span>
      </p>
    </el-divider>
    <div style="padding: 10px">
      <el-form ref="form" size="mini" :model="config" label-width="80px">
        <el-form-item label="设置标题">
          <el-input
            v-model="config.setting_title"
            placeholder="设置顶部logo，这里支持heml格式"
          ></el-input>
        </el-form-item>
        <el-form-item label="网站版本">
          <el-input
            v-model="config.unit_version"
            placeholder="设置区域版本号"
          ></el-input>
        </el-form-item>
        <el-form-item label="菜单Logo">
          <el-input
            v-model="config.aside_logo"
            placeholder="左侧菜单放大时logo"
          ></el-input>
        </el-form-item>
        <el-form-item label="缩小Logo">
          <el-input
            v-model="config.aside_small_logo"
            placeholder="左侧菜单缩小时logo"
          ></el-input>
        </el-form-item>
        <el-form-item label="放大尺寸">
         <el-input-number v-model="config.aside_width" :step="1"></el-input-number>
        </el-form-item>
        <el-form-item label="缩小尺寸">
          <el-input-number v-model="config.aside_small_width" :step="1"></el-input-number>
        </el-form-item>
        <el-form-item label="菜单状态">
          <el-radio-group v-model="config.aside_default_status">
            <el-radio :label="false">展开</el-radio>
            <el-radio :label="true">缩小</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="底部内容">
          <el-input
            v-model="config.footer_adress"
            placeholder="底部内容"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="save_setting()"
            >保存设置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </el-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      config: {
        setting_title: "Unitui", //设置顶部logo，这里支持heml格式
        unit_version: "v3.1.6", //设置区域版本号
        aside_logo: "UnitUI", //左侧菜单放大时logo
        aside_small_logo: "U", //左侧菜单缩小时logo
        aside_width: 200, //左侧菜单展开的尺寸
        aside_small_width: 65, //左侧缩小菜单大小
        aside_default_status: false, //左侧菜单默认状态false为默认打开，true为默认关闭
        footer_adress: "design by UnitUI", //底部内容
      },
    };
  },
  methods: {
    save_setting() {
      this.$message.success("保存设置成功,即将刷新");
      sessionStorage.setItem("config", JSON.stringify(this.config));
      this.drawer = false;
      setTimeout(() => {
        this.$router.go(0);
      }, 1500);
    },
  },
  watch: {
    drawer() {
      if (sessionStorage.getItem("config") != null) {
        this.config = JSON.parse(sessionStorage.getItem("config"));
      }
    },
  },
};
</script>