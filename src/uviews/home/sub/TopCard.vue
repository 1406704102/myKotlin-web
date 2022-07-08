<template>
  <el-row :gutter="10" >
    <el-col
      :xs="24"
      :md="6"
      v-for="(card, index) in card_data"
      :key="index"
      :style="{ marginTop: !pc&index>0 ? '10px' : '0px' }"
    >
      <Ucard :data="card" type="color"></Ucard>
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
  methods: {
    get_adress(num, last_num) {
      if (num > last_num) {
        return (
          "新增" +
          num +
          "比之前增加" +
          ((num - last_num) / last_num).toFixed(2) * 100 +
          "%"
        );
      } else {
        return (
          "新增" +
          num +
          "比之前减少" +
          ((last_num - num) / last_num).toFixed(2) * 100 +
          "%"
        );
      }
    },
  },
};
</script>
<style scoped>
i {
  margin-top: 20px;
  font-size: 20px;
}
#card_left {
  float: left;
  width: calc(100% - 100px);
  min-height: 120px;
}
#unit_card {
  width: 100%;
  min-height: 120px;
  background-color: white;
  border-radius: 10px;
}
#icon_back {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  /* background-color: yellow; */
  margin-top: 30px;
  margin-right: 20px;
}
</style>