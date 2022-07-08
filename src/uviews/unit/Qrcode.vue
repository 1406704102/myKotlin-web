<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
      </div>
    </template>
    <el-row :gutter="10" style="width: 100%">
      <el-col :xs="24" :sm="12">
        <el-form ref="form" size="mini" :model="data" label-width="90px">
          <el-form-item label="二维码内容">
            <el-input v-model="data.text" placeholder="必须不可为空"></el-input>
          </el-form-item>
          <el-form-item label="实点颜色">
            <el-color-picker v-model="data.colorDark"></el-color-picker>
          </el-form-item>
          <el-form-item label="空白颜色">
            <el-color-picker v-model="data.colorLight"></el-color-picker>
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="data.backgroundColor"></el-color-picker>
          </el-form-item>
          <el-form-item label="中心logo">
            <el-input v-model="data.logoSrc" placeholder="图片src"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="12">
        <Uqrcode :data="data"></Uqrcode>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import Uqrcode from "@/unitui/sub/Uqrcode.vue";
export default {
  components: {
    Uqrcode,
  },
  data() {
    return {
      data: {
        text: "unit",
        colorDark: "#000000",
        colorLight: "#ffffff",
        backgroundColor: "#ffffff",
        logoSrc: "https://images.pexels.com/photos/87403/cheetah-leopard-animal-big-87403.jpeg?cs=srgb&dl=pexels-public-domain-pictures-87403.jpg&fm=jpg",
      },
    };
  },
};
</script>