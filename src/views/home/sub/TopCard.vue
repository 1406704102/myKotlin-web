<template>
  <el-row :gutter="30">
    <el-col :xs="12" :md="6" v-for="(card,index) in card_data" :key="index" style="margin-top:20px">
      <div id="unit_card" :style="{borderLeft: 'solid 5px'+card.left_color}">
        <div id="card_left">
          <p style="margin-left:20px;margin-top:10px;color:#606266">{{card.title}}</p>
          <p
            :style="{marginLeft:'20px',marginTop:'10px',color:card.total_color,fontSize:'30px'}"
          >{{card.total}}</p>
          <p style="margin-left:20px;margin-top:10px;color:#606266;font-size:10px">{{get_adress(card.num,card.last_num)}}</p>
        </div>
        <div style="float:right">
          <div id="icon_back" :style="{backgroundColor:card.icon_background_color}" align="center">
            <i :class="card.icon" :style="{color:card.icon_color}"></i>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      card_data: [
        {
          title: "访问人数",
          left_color:'#67C23A',
          total: 8412,
          total_color: "#409EFF",
          num: 154,
          last_num: 481,
          icon: "el-icon-user",
          icon_color: "#fff",
          icon_background_color: "#67C23A"
        },
        {
          title: "交易信息",
          left_color:'#F56C6C',
          total: 944,
          total_color: "#F56C6C",
          num: 951,
          last_num: 332,
          icon: "el-icon-goods",
          icon_color: "#fff",
          icon_background_color: "#F56C6C"
        },
        {
          title: "下载信息",
          left_color:'#E6A23C',
          total: 5484,
          total_color: "#E6A23C",
          num: 855,
          last_num: 622,
          icon: "el-icon-download",
          icon_color: "#fff",
          icon_background_color: "#E6A23C"
        },{
          title: "阅读信息",
          left_color:'#409EFF',
          total: 48481,
          total_color: "#409EFF",
          num: 841,
          last_num: 481,
          icon: "el-icon-notebook-1",
          icon_color: "#fff",
          icon_background_color: "#409EFF"
        }
      ]
    };
  },
  methods: {
    get_adress(num, last_num) {
      if (num > last_num) {
        return (
          "新增" +
          num +
          "比之前增加" +
          ((num - last_num) / last_num).toFixed(2)*100 +
          "%"
        );
      } else {
        return (
          "新增" +
          num +
          "比之前减少" +
          ((last_num - num) / last_num).toFixed(2)*100 +
          "%"
        );
      }
    }
  }
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