<template>
  <el-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>{{$route.meta.web_title}}</span>
    </div>
  </template>
  <Uicon v-model="handle_icon"></Uicon>
</el-card>
</template>
<script>
import Uicon from "@/unitui/sub/Uicon.vue";
export default {
    props: ["pc"],
  components: {
    Uicon,
  },
  data() {
    return {
      handle_icon:''
    };
  },
};
</script>