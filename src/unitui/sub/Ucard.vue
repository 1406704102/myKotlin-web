<template>
  <div
    v-show="type == 'info'"
    id="unit_data"
    :style="{ borderLeft: 'solid 5px' + data.color }"
  >
    <div id="data_left">
      <p class="card_title">
        {{ data.title }}
      </p>
      <p class="card_content">
        <span
          ><Ucount
            :num="data.num"
            :fontSize="'30px'"
            :color="data.color"
          ></Ucount></span
        ><span> <Ucount
            :num="data.total"
            fontSize="10px"
            color="#909399"
          ></Ucount
          ></span>
      </p>
      <p class="card_foot">
        {{ get_adress(data.num, data.last_num) }}
      </p>
    </div>
    <div style="float: right">
      <div
        id="icon_back"
        :style="{ backgroundColor: data.color }"
        align="center"
      >
        <i :class="data.icon" style="color: #fff"></i>
      </div>
    </div>
  </div>

  <div
    v-show="type == 'color'"
    id="color_back"
    :style="{ backgroundColor: data.color }"
  >
    <div class="icon_back" align="center">
      <div class="color_icon">
        <i :class="data.icon"></i>
      </div>
    </div>
    <div class="content">
      <div style="margin: 30px 0px 0px 50px">
        <p>
          {{ data.title }}
        </p>
        <p style="font-size: 30px">
          <Ucount
            :num="data.num"
            :fontSize="'30px'"
            color="#fff"
          ></Ucount
          >&ensp;<span>
            <Ucount
            :num="data.total"
            fontSize="10px"
            color="#fff"
          ></Ucount
          ></span>
        </p>
        <p class="color_card_foot">
          {{ get_adress(data.num, data.last_num) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Ucount from "@/unitui/sub/Ucount.vue";
export default {
  components: {
    Ucount,
  },
  props: {
    data: Object,
    type: {
      type: String,
      default() {
        return "info";
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    get_adress(num, last_num) {
      if (num > last_num) {
        return (
          "环比增加" + ((num - last_num) / last_num).toFixed(2) * 100 + "%"
        );
      } else {
        return (
          "环比减少" + ((last_num - num) / last_num).toFixed(2) * 100 + "%"
        );
      }
    },
    get_scale(num, last_num) {
      if (num > last_num) {
        return ((num - last_num) / last_num).toFixed(2) * 100;
      } else {
        return ((last_num - num) / last_num).toFixed(2) * 100;
      }
    },
  },
};
</script>
<style scoped>
#color_back {
  cursor: pointer;
  width: 100%;
  min-height: 120px;
  color: white;
  display: flex;
  flex-wrap: nowrap;
}
.icon_back {
  min-height: 120px;
  width: 70px;
}
.color_icon {
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  margin-top: 50%;
}
.content {
  width: calc(100% - 70px);
  min-height: 120px;
}
.card_title {
  margin-left: 20px;
  margin-top: 10px;
  color: #606266;
}
.card_content {
  margin-left: 20px;
  margin-top: 10px;
}
.card_foot {
  margin-left: 20px;
  margin-top: 10px;
  color: #606266;
  font-size: 10px;
}
i {
  margin-top: 20px;
  font-size: 20px;
}
#data_left {
  float: left;
  width: calc(100% - 100px);
  min-height: 120px;
}
#unit_data {
  cursor: pointer;
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