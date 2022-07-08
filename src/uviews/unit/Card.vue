<template>
<el-row :gutter="10" style="width:100%">
    <el-col v-for="card in card_data" :key="card" :xs="24" :md="6" style="margin-top:10px">
        <Ucard  :data="card"></Ucard>
    </el-col>
</el-row>
<el-row :gutter="10" style="width:100%;margin-top:10px">
    <el-col v-for="card in card_data" :key="card" :xs="24" :md="6" style="margin-top:10px">
        <Ucard type="color" :data="card"></Ucard>
    </el-col>
</el-row>
</template>
<script>
import Ucard from "@/unitui/sub/Ucard.vue";
export default {
    props: ["pc"],
  components: {
    Ucard,
  },
  data() {
    return {
      card_data: [
        {
          title: "访问人数",
          total: 8412,
          num: 154,
          last_num: 481,
          icon: "el-icon-user",
          color: "#0acf97",
        },
        {
          title: "交易信息",
          total: 944,
          num: 951,
          last_num: 332,
          icon: "el-icon-goods",
          color: "#fa5c7c",
        },
        {
          title: "下载信息",
          total: 5484,
          num: 855,
          last_num: 622,
          icon: "el-icon-download",
          color: "#ffbc00",
        },
        {
          title: "阅读信息",
          total: 48481,
          num: 841,
          last_num: 481,
          icon: "el-icon-notebook-1",
          color: "#727cf5",
        },
      ],
    };
  },
};
</script>