<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
      </div>
    </template>
    <el-row>
      <el-col :span="24">
        <Uedit v-model="content"></Uedit>
      </el-col>
      <el-col :span="24" style="margin-top:10px">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>编辑内容渲染</span>
            </div>
          </template>
          <el-input type="textarea" v-model="content"/>
          <div v-html="content" id="content" @click = "content=2222222222222"></div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import Uedit from "@/unitui/sub/Uedit.vue";
export default {
  props: ["pc"],
  components: {
    Uedit,
  },
  data() {
    return {
      content: "132354dfg ",
    };
  },
};
</script>
<style scoped>
#content {
  width: 100%;
  display: block;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
