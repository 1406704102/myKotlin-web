<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ $route.meta.web_title }}</span>
      </div>
    </template>
    <div class="adress_content">
      <div class="adress_title_one">
        <div style="margin-left: 10px">
          <h3><span style="color: #e67e23">支持响应</span></h3>
          <p>
            Unitui支持响应，即在<span style="color: #2dc26b"
              >访问设备为Pc或者手机，访问设备屏幕小于或者大于768px显示不同的布局和菜单</span
            >。除此之外App.vue中增加了对设备访问类型和屏幕宽度的监听，并且会向显示的组件传递一个参数<span
              style="color: #e03e2d"
              >pc</span
            >值为true和false两种状态，当为true时即是电脑或者访问屏幕大于768，为false时则是手机访问或者访问屏幕小于768，你可以在功能组件中<span
              style="color: #e03e2d"
              >通过props["pc"]</span
            >接收unitui的响应参数方便你针对不同状态对组件进行优化。
          </p>
        </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">响应原理</span></el-divider
      >
      <div class="adress_title">
        <div style="margin-left: 10px">
          <p>
            通过在unitui/ui/Header.vue中添加菜单和在App.vue中监听屏幕大小和设备类型调整左侧菜单大小，并将监听到的结果以名为pc的参数向下传递，并在合适的时候对顶部菜单栏图标进行隐藏和显示
          </p>
        </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">怎样使用</span></el-divider
      >
      <div class="adress_title">
        <div style="margin-left: 10px">
          <p>
            你只需要在将一个类似于unitui/assets/json/menu.json文件内容的json数据用sessionStorage.setItem("menu_data")存储，剩下请交给unitui，它会为你提供响应菜单。
          </p>
        </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">响应参数</span></el-divider
      >
      <div class="adress_title">
        <div style="margin-left: 10px">
          <p>
            你可以在视图组件中通过props['pc']接受访问设备和屏幕状态，参数仅返回true或者false，前者表示是电脑访问，后者是手机访问，你可以依据这个参数对功能组件进行适当优化。
          </p>
          <div style="margin-left: 10px; margin-top: 10px">
            <p>例如：我们要显示一个Hello.vue组件那么我们的组件内容应该是</p>
            <div style="margin-top:10px">
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
                <div>
                  <span style="color: #808080">&lt;</span
                  ><span style="color: #569cd6">template</span
                  ><span style="color: #808080">&gt;</span>
                </div>
                <div>
                  &nbsp;&nbsp;<span style="color: #808080">&lt;</span
                  ><span style="color: #569cd6">div</span
                  ><span style="color: #808080">&gt;</span>hello<span
                    style="color: #808080"
                    >&lt;/</span
                  ><span style="color: #569cd6">div</span
                  ><span style="color: #808080">&gt;</span>
                </div>
                <div>
                  <span style="color: #808080">&lt;/</span
                  ><span style="color: #569cd6">template</span
                  ><span style="color: #808080">&gt;</span>
                </div>
                <div>
                  <span style="color: #808080">&lt;</span
                  ><span style="color: #569cd6">script</span
                  ><span style="color: #808080">&gt;</span>
                </div>
                <div>
                  <span style="color: #c586c0">export</span>&nbsp;<span
                    style="color: #c586c0"
                    >default</span
                  >&nbsp;{
                </div>
                <div>
                  &nbsp;&nbsp;<span style="color: #9cdcfe">props</span
                  ><span style="color: #9cdcfe">:</span>[<span
                    style="color: #ce9178"
                    >"pc"</span
                  >]
                </div>
                <div>}</div>
                <div>
                  <span style="color: #808080">&lt;/</span
                  ><span style="color: #569cd6">script</span
                  ><span style="color: #808080">&gt;</span>
                </div>
              </div>
            </div>
            <p>详细可查看源码</p>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {};
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