<template>
  <el-timeline>
    <el-timeline-item
      v-for="(a, index) in data"
      :key="index"
      :timestamp="a.time+'  '+a.version"
      placement="top"
    >
      <el-card>
        <p class="add_label" v-show="a.content.add_content.length>0">{{ a.content.add_label }}</p>
        <div v-for="(cont, i) in a.content.add_content" :key="i" class="add_content">
          <p class="add_content_list">{{ i+1+'、'+cont }}</p>
        </div>
        <p class="add_label" v-show="a.content.change_content.length>0">{{ a.content.change_label }}</p>
        <div v-for="(cont, l) in a.content.change_content" :key="l" class="add_content">
          <p class="add_content_list">{{l+1+'、'+ cont }}</p>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
<script>
export default {
  data() {
    return {
      data: require("@/unitui/assets/json/Update.json"),
    };
  },
};
</script>
<style scoped>
.add_content{
    margin-left:20px ;
}
.add_content_list{
    line-height:1.5;
}
.add_label{
    font-size: 20px;
    color: rgb(95, 95, 95);
}
</style>