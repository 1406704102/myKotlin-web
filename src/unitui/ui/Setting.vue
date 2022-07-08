<template>
    <div
      class="setting"
      @mouseenter="id_name = true"
      @mouseleave="id_name = false"
      @click="drawer = true"
    >
      <i
        class="el-icon-setting"
        :id="id_name ? 'setting_icon_enter' : 'setting_icon'"
      ></i>
    </div>
  <el-drawer v-model="drawer" size="250px" :with-header="false">
    <el-divider content-position="center">
      <p style="font-size: 30px">
        <span style="color: #f1c40f">U</span
        ><span style="color: #2dc26b">n</span
        ><span style="color: #e03e2d">i</span
        ><span style="color: #843fa1">t</span
        ><span style="color: #f1c40f">U</span
        ><span style="color: #236fa1">i</span>
        <span style="color: #f1c40f; font-size: 10px">v3.0.4</span>
      </p>
    </el-divider>
    <div>
      <el-form ref="form" :model="config" label-width="80px">
        <el-form-item label="标签栏">
          <el-radio-group v-model="config.tab_status">
            <el-radio :label="1">显示</el-radio>
            <el-radio :label="0">不显示</el-radio>
          </el-radio-group>
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
      id_name: false,
      drawer: false,
      config: {
        tab_status:JSON.parse(sessionStorage.getItem('unit_config'))==null?'1':JSON.parse(sessionStorage.getItem('unit_config')).tab_status,
      },
    };
  },
  methods:{
    save_setting(){
      this.$message.success('保存设置成功')
      sessionStorage.setItem('unit_config',JSON.stringify(this.config))
      this.drawer=false
      this.$router.go(0)
    }
  }
};
</script>
<style scoped>
.setting {
  width: 60px;
  height: 50px;
  background-color: #409eff;
  border-radius: 5px 0px 0px 5px;
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 0px;
  top: 100px;
}
#setting_icon {
  color: white;
  font-size: 25px;
  margin-top: 12.5px;
  margin-left: 17px;
  animation: rotate 5s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
#setting_icon_enter {
  color: white;
  font-size: 25px;
  margin-top: 12.5px;
  margin-left: 17px;
  animation: rotate2 1s infinite linear;
}

@keyframes rotate2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>