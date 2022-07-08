<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
        <el-button
          size="mini"
          type="success"
          v-show="label"
          @click="label = !label"
          icon="el-icon-refresh"
        ></el-button>
        <el-button
          size="mini"
          type="danger"
          v-show="!label"
          @click="label = !label"
          icon="el-icon-refresh"
        ></el-button>
      </div>
    </template>
    <Upage
      :pc="label"
      :page="page"
      @size-change="get_size"
      @current-change="current"
    ></Upage>
  </el-card>
</template>
<script>
import Upage from "@/unitui/sub/Upage.vue";
export default {
  props: ["pc"],
  components: {
    Upage,
  },
  data() {
    return {
      label: this.pc,
      page: {
        pn: 5,
        rn: 10,
        total: 100,
      },
    };
  },
  methods: {
    get_size(size) {
      this.$message.success("每页" + size);
    },
    current(pn) {
      this.$message.success("当前页为" + pn);
    },
  },
  watch:{
    pc(){
      this.label=this.pc
    }
  }
};
</script>