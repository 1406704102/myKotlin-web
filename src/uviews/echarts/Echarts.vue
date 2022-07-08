<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
      </div>
    </template>
    <div id="main" style="height: 300px; width: 100%"></div>
  </el-card>
</template>
<script>
import * as echarts from "echarts";
export default {
    props:["pc"],
  data() {
    return {
      myChart: "",
    };
  },
  methods: {
    init_echarts() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      this.myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "bold",
                fontColor:'#606266'
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
          },
        ],
      });
      this.dynamic_data();
    },
    dynamic_data() {
      const min = 100;
      const max = 9999;
      const data = [];
      for (let index = 0; index < 7; index++) {
        data.push(parseInt(Math.random() * (max - min + 1) + min, 10));
      }
      this.myChart.setOption({
        series: [
          {
            data: [
              { value: data[0], name: "搜索引擎" },
              { value: data[1], name: "直接访问" },
              { value: data[2], name: "邮件营销" },
              { value: data[3], name: "联盟广告" },
              { value: data[4], name: "视频广告" },
            ],
          },
        ],
      });
      setTimeout(() => {
        this.dynamic_data();
      }, 1000);
    },
  },
  mounted() {
    this.init_echarts();
  },
  watch:{
      pc(){
          this.myChart.resize()
      }
  }
};
</script>