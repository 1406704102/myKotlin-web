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
          Unitui3.0.3集成了
          <span style="color: #409eff">axios，</span>
          使用实例代码<br /><br>
        </p>
        <div style="margin-left:10px">
           <div style="color: #d4d4d4; background-color: #1e1e1e; font-family: Consolas, 'Courier New', monospace; font-size: 14px; line-height: 19px; white-space: pre;">
<div><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">div</span><span style="color: #808080;">&gt;</span>使用axios<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">div</span><span style="color: #808080;">&gt;</span></div>
<div><span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div>
<div><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span></div>
<div><span style="color: #c586c0;">import</span>&nbsp;<span style="color: #9cdcfe;">axios</span>&nbsp;<span style="color: #c586c0;">from</span>&nbsp;<span style="color: #ce9178;">'axios'</span></div>
<div><span style="color: #c586c0;">export</span>&nbsp;<span style="color: #c586c0;">default</span>&nbsp;{</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #dcdcaa;">data</span>(){</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">return</span>{</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">data</span><span style="color: #9cdcfe;">:</span><span style="color: #ce9178;">''</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;},</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">methods</span><span style="color: #9cdcfe;">:</span>{</div>
<br />
<div>&nbsp;&nbsp;&nbsp;&nbsp;},</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #dcdcaa;">mounted</span>(){</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #dcdcaa;">axios</span>({</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">method</span><span style="color: #9cdcfe;">:</span><span style="color: #ce9178;">'get'</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">url</span><span style="color: #9cdcfe;">:</span><span style="color: #ce9178;">'users'</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">data</span><span style="color: #9cdcfe;">:</span>{</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">user</span><span style="color: #9cdcfe;">:</span><span style="color: #ce9178;">'li'</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">password</span><span style="color: #9cdcfe;">:</span><span style="color: #ce9178;">'1484'</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}).<span style="color: #dcdcaa;">then</span>(<span style="color: #9cdcfe;">res</span><span style="color: #569cd6;">=&gt;</span>{</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe;">console</span>.<span style="color: #dcdcaa;">log</span>(<span style="color: #9cdcfe;">res</span>);</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div>}</div>
<div><span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span></div>
</div> 
          </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">相关配置</span></el-divider
      >
      <div class="adress_title_one">
        <p style="margin-left:10px">配置文件位于unitui/unitui_init.js</p>
        <p style="margin-left:10px">axios部分配置说明</p>
        <div style="margin-left:10px;margin-top:10px">
<div style="color: #d4d4d4; background-color: #1e1e1e; font-family: Consolas, 'Courier New', monospace; font-size: 14px; line-height: 19px; white-space: pre;">
<div><span style="color: #6a9955;">//&nbsp;axios配置</span></div>
<div><span style="color: #6a9955;">//&nbsp;添加请求拦截器</span></div>
<div><span style="color: #4fc1ff;">axios</span>.<span style="color: #9cdcfe;">defaults</span>.<span style="color: #9cdcfe;">baseURL</span>&nbsp;=&nbsp;<span style="color: #ce9178;">'http://jsonplaceholder.typicode.com'</span>;&nbsp;<span style="color: #6a9955;">//公共接口，如果你在组件中传入完整地址，这这个你会生效</span></div>
<div><span style="color: #4fc1ff;">axios</span>.<span style="color: #9cdcfe;">interceptors</span>.<span style="color: #9cdcfe;">request</span>.<span style="color: #dcdcaa;">use</span>(<span style="color: #569cd6;">function</span>&nbsp;(<span style="color: #9cdcfe;">config</span>)&nbsp;{</div>
<div>&nbsp;&nbsp;<span style="color: #6a9955;">//&nbsp;在发送请求之前做些什么</span></div>
<div>&nbsp;&nbsp;<span style="color: #9cdcfe;">config</span>.<span style="color: #9cdcfe;">data</span>&nbsp;=&nbsp;<span style="color: #4ec9b0;">qs</span>.<span style="color: #dcdcaa;">stringify</span>(<span style="color: #9cdcfe;">config</span>.<span style="color: #9cdcfe;">data</span>)&nbsp;<span style="color: #6a9955;">//使用qs处理数据</span></div>
<div>&nbsp;&nbsp;<span style="color: #c586c0;">return</span>&nbsp;<span style="color: #9cdcfe;">config</span>;</div>
<div>},&nbsp;<span style="color: #569cd6;">function</span>&nbsp;(<span style="color: #9cdcfe;">error</span>)&nbsp;{</div>
<div>&nbsp;&nbsp;<span style="color: #6a9955;">//&nbsp;对请求错误做些什么</span></div>
<div>&nbsp;&nbsp;<span style="color: #c586c0;">return</span>&nbsp;<span style="color: #4ec9b0;">Promise</span>.<span style="color: #dcdcaa;">reject</span>(<span style="color: #9cdcfe;">error</span>);</div>
<div>});</div>
<br />
<div><span style="color: #6a9955;">//&nbsp;添加响应拦截器</span></div>
<div><span style="color: #4fc1ff;">axios</span>.<span style="color: #9cdcfe;">interceptors</span>.<span style="color: #9cdcfe;">response</span>.<span style="color: #dcdcaa;">use</span>(<span style="color: #569cd6;">function</span>&nbsp;(<span style="color: #9cdcfe;">response</span>)&nbsp;{</div>
<div>&nbsp;&nbsp;<span style="color: #6a9955;">//&nbsp;对响应数据做点什么</span></div>
<div>&nbsp;&nbsp;<span style="color: #c586c0;">return</span>&nbsp;<span style="color: #9cdcfe;">response</span>;</div>
<div>},&nbsp;<span style="color: #569cd6;">function</span>&nbsp;(<span style="color: #9cdcfe;">error</span>)&nbsp;{</div>
<div>&nbsp;&nbsp;<span style="color: #6a9955;">//&nbsp;对响应错误做点什么</span></div>
<div>&nbsp;&nbsp;<span style="color: #c586c0;">switch</span>&nbsp;(<span style="color: #9cdcfe;">error</span>.<span style="color: #9cdcfe;">response</span>.<span style="color: #9cdcfe;">status</span>)&nbsp;{</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">case</span>&nbsp;<span style="color: #b5cea8;">404</span>:</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4fc1ff;">ElMessage</span>.<span style="color: #dcdcaa;">error</span>(<span style="color: #ce9178;">'axios：您所要打开的网页不存在或你填写的身份验证信息不正确'</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">break</span>;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">case</span>&nbsp;<span style="color: #b5cea8;">500</span>:</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4fc1ff;">ElMessage</span>.<span style="color: #dcdcaa;">error</span>(<span style="color: #ce9178;">'axios：服务器错误'</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">break</span>;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">case</span>&nbsp;<span style="color: #b5cea8;">400</span>:</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4fc1ff;">ElMessage</span>.<span style="color: #dcdcaa;">error</span>(<span style="color: #ce9178;">'axios：请求出现错误，比如请求头不对等'</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">break</span>;</div>
<br />
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">default</span>:</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0;">break</span>;</div>
<div>&nbsp;&nbsp;}</div>
<div>&nbsp;&nbsp;<span style="color: #c586c0;">return</span>&nbsp;<span style="color: #9cdcfe;">console</span>.<span style="color: #dcdcaa;">log</span>(<span style="color: #9cdcfe;">error</span>.<span style="color: #9cdcfe;">response</span>);</div>
<div>});</div>
</div>
        </div>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">关于Axios使用注意</span></el-divider
      >
      <div class="adress_title">
        <div style="margin-left:10px">
          <p>1、在要使用的组件中<span style="color: #2dc26b;">要先引用然后再使用</span>。</p>
<p>2、我们默认使用<span style="color: #e03e2d;">qs</span>对数据进行处理，如不需要请往配置中进行修改</p>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          key: "sessionStorage.setItem('menu_data')",
          value: "全局（任意位置可获取）",
          address:
            "左侧菜单数据与unitui/assets/json/menu.json相同，在登录时初始化，在《组件管理》中菜单被修改时这个数据也会实时变化，你可以在任意位置将此数据传到服务器",
        },
        {
          key: "sessionStorage.setItem('route_data')",
          value: "全局（任意位置可获取）",
          address:
            "动态路由数据与unitui/assets/json/route.json相同，在登录时初始化，在《组件管理》中路由被修改时这个数据也会实时变化，你可以在任意位置将此数据传到服务器",
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