<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
        <el-button
        @click="init_num()"
          type="primary"
          size="mini"
          style="float: right; margin-right: 20px"
          >{{num}}切换</el-button
        >
      </div>
    </template>
    <div id="main" style="height: 300px; width: 100%">
      <Ucount :num="num" :fontSize="'70px'" :color="'#0acf97'"></Ucount>
    </div>
  </el-card>
</template>
<script>
import Ucount from "@/unitui/sub/Ucount.vue";
export default {
  props: ["pc"],
  components: {
    Ucount,
  },
  data() {
    return {
      num: 1000,
    };
  },
  methods: {
      init_num(){
          this.num=parseInt(Math.random()*1000,10)+1
      }
  },
  mounted() {},
};
</script>