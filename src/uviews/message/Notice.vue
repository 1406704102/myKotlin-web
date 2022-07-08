<template>
  <div class="notice_title">
    <span class="title">{{ $route.meta.web_title }}</span>
    <el-button
      size="mini"
      type="primary"
      class="add_button"
      icon="el-icon-plus"
    ></el-button>
  </div>
  <el-row :gutter="10" style="margin-top: 10px">
    <el-col v-for="(data, index) in data" :key="index" :xs="24" :sm="8">
      <el-card :style="{ marginTop: index >= 3 ? '10px' : '0' }">
        <template #header>
          <div class="card-header">
            <span
              >{{ data.notice_title + (index + 1) }}
              <el-tag
                size="small"
                :type="data.notice_status == 0 ? 'danger' : 'success'"
                >{{ data.notice_status == 0 ? "未读" : "已读" }}</el-tag
              ></span
            >
            <el-dropdown style="float: right">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <i class="el-icon-position"></i>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <i class="el-icon-check"></i>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <i class="el-icon-delete"></i>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ data.notice_content + o }}
        </div>
      </el-card>
    </el-col>
  </el-row>
  <div style="margin-top: 10px">
    <Upage :pc="pc" :page="page"></Upage>
  </div>
</template>
<script>
import Upage from "@/unitui/sub/Upage.vue";
export default {
  components: {
    Upage,
  },
  props: ["pc"],
  data() {
    return {
      page: {
        pn: 1,
        rn: 10,
        total: 100,
      },
      data: [
        {
          notice_title: "通知标题",
          notice_status: 0,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 0,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 0,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 0,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 1,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 1,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 0,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 1,
          notice_content: "这是通知内容",
        },
        {
          notice_title: "通知标题",
          notice_status: 1,
          notice_content: "这是通知内容",
        },
      ],
    };
  },
};
</script>
<style scoped>
.title {
  float: left;
  font-size: 20px;
  color: #6c757d;
}
.notice_title {
  width: 100%;
  height: 30px;
}
.add_button {
  float: right;
}
</style>