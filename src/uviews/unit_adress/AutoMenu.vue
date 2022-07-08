<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
      </div>
    </template>
    <div class="adress_content">
      <div class="adress_title">
        <p style="margin-left: 10px">
          <span style="color: #409eff">动态菜单</span>
          这是UnitUI的重要部分，这动态菜单是指左侧的菜单栏，我们在组件管理中已经提供了菜单管理工具。<br />
          你可以通过《组件管理》中菜单管理获取菜单json，你也可以在任意位置使用
          <span style="color: #67c23a"
            >sessionStorage.getItem("menu_data")</span
          >
          获取最新修改的菜单json信息。<br /><br />
          你需要在登录时就生成sessionStorage.setItem("menu_data")信息，JSON文件位于<span
            style="color: #f56c6c"
            >unitui/assets/json/menu.json</span
          >你可以去参考。
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px"
          >unitui/assets/json/menu.json</span
        ></el-divider
      >
      <div class="adress_title_one">
        <div style="margin-top: 10px; margin-left: 10px">
          <div
            style="
              color: #d4d4d4;
              background-color: #1e1e1e;
              font-family: Consolas, 'Courier New', monospace;
              font-size: 14px;
              line-height: 19px;
              white-space: pre;
            "
          >
            <div>[</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_name"</span
              >:&nbsp;<span style="color: #ce9178">"主页"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_icon"</span
              >:&nbsp;<span style="color: #ce9178">"el-icon-monitor"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_show_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"children"</span
              >:&nbsp;[
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_name"</span
              >:&nbsp;<span style="color: #ce9178">"数据监控"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_icon"</span
              >:&nbsp;<span style="color: #ce9178">"el-icon-cpu"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/home"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_show_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_vist_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;},</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_name"</span
              >:&nbsp;<span style="color: #ce9178">"组件管理"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_icon"</span
              >:&nbsp;<span style="color: #ce9178">"el-icon-star-off"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_show_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"children"</span
              >:&nbsp;[
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_name"</span
              >:&nbsp;<span style="color: #ce9178">"组件管理"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_icon"</span
              >:&nbsp;<span style="color: #ce9178">"el-icon-star-off"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/sub/admin"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_show_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_vist_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;},</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_name"</span
              >:&nbsp;<span style="color: #ce9178">"开发文档"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_icon"</span
              >:&nbsp;<span style="color: #ce9178">"el-icon-tickets"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_show_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"children"</span
              >:&nbsp;[
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_name"</span
              >:&nbsp;<span style="color: #ce9178">"动态路由"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/unit/adress/route"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_icon"</span
              >:&nbsp;<span style="color: #ce9178">"el-icon-star-off"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_show_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_vist_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_name"</span
              >:&nbsp;<span style="color: #ce9178">"unitui介绍"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/unit/adress"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_icon"</span
              >:&nbsp;<span style="color: #ce9178">"el-icon-tickets"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_show_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"menu_vist_status"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>]</div>
          </div>
        </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px"
          >unitui/assets/json/menu.json参数说明</span
        ></el-divider
      >
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="key" label="键名称">
        </el-table-column>
        <el-table-column prop="value" label="参考值">
        </el-table-column>
        <el-table-column prop="address" label="介绍"> </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          key: "menu_name",
          value: "主页",
          address: "一级菜单名称",
        },
        {
          key: "menu_icon",
          value: "el-icon-monitor",
          address: "一级菜单图标",
        },
        {
          key: "menu_show_status",
          value: "1",
          address: "一级菜单是否显示（1为显示，0为不显示）一级菜单不显示，二级也会被隐藏",
        },
        {
          key: "children[index].menu_name",
          value: "数据监控",
          address: "二级菜单名称",
        },
        {
          key: "children[index].menu_icon",
          value: "el-icon-monitor",
          address: "二级级菜单图标",
        },
        {
          key: "children[index].menu_show_status",
          value: "1",
          address: "二级菜单是否显示（1为显示，0为不显示）",
        },
        {
          key: "children[index].menu_vist_status",
          value: "1",
          address: "二级菜单是否允许访问（1为正常访问，0为禁止访问）",
        },
      ],
    };
  },
};
</script>
<style scoped>
.adress_title_one {
  min-height: 20px;
  border-left: solid 5px #e2e2e2;
  color: #606266;
}
.adress_title {
  min-height: 20px;
  border-left: solid 5px #67c23a;
  color: #606266;
}
</style>