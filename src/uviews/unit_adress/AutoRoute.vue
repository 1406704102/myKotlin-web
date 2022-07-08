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
          <span style="color: #409eff">可视化动态路由管理，</span>
          这是UnitUI的重要部分，这是unitui得以生存的根本，unitui的动态路由全部依赖
          <span style="color: #67c23a">unit/unitui_init.js</span>
          提供支持，你需要在登录成功后触发<span style="color: #f56c6c"
            >unit/unitui_init.js->init_route()</span
          >
          方法，同时还需要在<span style="color: #f56c6c">main.js</span
          >中引用它。
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px"
          >unit/unitui_init.js使用说明</span
        ></el-divider
      >
      <div class="adress_title_one">
        <p style="margin-left: 10px">源码：</p>
        <div style="margin-left: 10px; margin-top: 10px">
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
              <span style="color: #c586c0">import</span>&nbsp;<span
                style="color: #9cdcfe"
                >router</span
              >&nbsp;<span style="color: #c586c0">from</span>&nbsp;<span
                style="color: #ce9178"
                >'@/router'</span
              >
            </div>
            <br />
            <div>
              <span style="color: #569cd6">function</span>&nbsp;<span
                style="color: #dcdcaa"
                >init_route</span
              >()&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;<span style="color: #6a9955"
                >//依据后端返回的json数据生成路由</span
              >
            </div>
            <div>
              &nbsp;&nbsp;<span style="color: #c586c0">if</span>&nbsp;(<span
                style="color: #9cdcfe"
                >sessionStorage</span
              >.<span style="color: #dcdcaa">getItem</span>(<span
                style="color: #ce9178"
                >"route_data"</span
              >)&nbsp;!=&nbsp;<span style="color: #569cd6">null</span>)&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #569cd6">const</span
              >&nbsp;<span style="color: #4fc1ff">route_data</span
              >&nbsp;=&nbsp;<span style="color: #9cdcfe">JSON</span>.<span
                style="color: #dcdcaa"
                >parse</span
              >(<span style="color: #9cdcfe">sessionStorage</span>.<span
                style="color: #dcdcaa"
                >getItem</span
              >(<span style="color: #ce9178">"route_data"</span>));&nbsp;<span
                style="color: #6a9955"
                >//获取登录时储存的route信息</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #569cd6">const</span
              >&nbsp;<span style="color: #4fc1ff">init_route_data</span
              >&nbsp;=&nbsp;[];&nbsp;<span style="color: #6a9955"
                >//定义一个路由数组储存生成的路由信息,请看下面的注释A部分</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0">for</span
              >&nbsp;(<span style="color: #569cd6">let</span>&nbsp;<span
                style="color: #9cdcfe"
                >index</span
              >&nbsp;=&nbsp;<span style="color: #b5cea8">0</span>;&nbsp;<span
                style="color: #9cdcfe"
                >index</span
              >&nbsp;&lt;&nbsp;<span style="color: #4fc1ff">route_data</span
              >.<span style="color: #9cdcfe">length</span>;&nbsp;<span
                style="color: #9cdcfe"
                >index</span
              >++)&nbsp;{&nbsp;<span style="color: #6a9955"
                >//循环route信息数组</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0"
                >if</span
              >&nbsp;(<span style="color: #4fc1ff">route_data</span>[<span
                style="color: #9cdcfe"
                >index</span
              >].<span style="color: #9cdcfe">children</span>&nbsp;!=&nbsp;<span
                style="color: #569cd6"
                >undefined</span
              >)&nbsp;{&nbsp;<span style="color: #6a9955"
                >//看是否存在嵌套路由</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #6a9955"
                >//有children时生成路由数组方法</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #4fc1ff"
                >init_route_data</span
              >[<span style="color: #9cdcfe">index</span>]&nbsp;=&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >path</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >path</span
              >,&nbsp;<span style="color: #6a9955">//路由url</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >name</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >name</span
              >,&nbsp;<span style="color: #6a9955">//路由名</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #dcdcaa"
                >component</span
              ><span style="color: #9cdcfe">:</span>&nbsp;()&nbsp;<span
                style="color: #569cd6"
                >=&gt;</span
              >&nbsp;<span style="color: #569cd6">import</span>(<span
                style="color: #ce9178"
                >`@/</span
              ><span style="color: #569cd6">${</span
              ><span style="color: #4fc1ff">route_data</span>[<span
                style="color: #9cdcfe"
                >index</span
              >].<span style="color: #9cdcfe">component</span
              ><span style="color: #569cd6">}</span
              ><span style="color: #ce9178">`</span>),&nbsp;<span
                style="color: #6a9955"
                >//加载vue文件</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >meta</span
              ><span style="color: #9cdcfe">:</span>&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #6a9955"
                >//路由一些附加信息，可以进行适当增加</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >show_site</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >meta</span
              >.<span style="color: #9cdcfe">show_site</span>,&nbsp;<span
                style="color: #6a9955"
                >//是否全屏显示</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >web_title</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >meta</span
              >.<span style="color: #9cdcfe">web_title</span>&nbsp;<span
                style="color: #6a9955"
                >//网站标题</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >children</span
              ><span style="color: #9cdcfe">:</span>&nbsp;[]&nbsp;<span
                style="color: #6a9955"
                >//声明嵌套路由</span
              >
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #c586c0"
                >for</span
              >&nbsp;(<span style="color: #569cd6">let</span>&nbsp;<span
                style="color: #9cdcfe"
                >i</span
              >&nbsp;=&nbsp;<span style="color: #b5cea8">0</span>;&nbsp;<span
                style="color: #9cdcfe"
                >i</span
              >&nbsp;&lt;&nbsp;<span style="color: #4fc1ff">route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >children</span
              >.<span style="color: #9cdcfe">length</span>;&nbsp;<span
                style="color: #9cdcfe"
                >i</span
              >++)&nbsp;{&nbsp;<span style="color: #6a9955"
                >//添加路由数组中的嵌套路由</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #4fc1ff"
                >init_route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >children</span
              >[<span style="color: #9cdcfe">i</span>]&nbsp;=&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >path</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >children</span
              >[<span style="color: #9cdcfe">i</span>].<span
                style="color: #9cdcfe"
                >path</span
              >,&nbsp;<span style="color: #6a9955">//路由url</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >name</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >children</span
              >[<span style="color: #9cdcfe">i</span>].<span
                style="color: #9cdcfe"
                >name</span
              >,&nbsp;<span style="color: #6a9955">//路由名</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #dcdcaa"
                >component</span
              ><span style="color: #9cdcfe">:</span>&nbsp;()&nbsp;<span
                style="color: #569cd6"
                >=&gt;</span
              >&nbsp;<span style="color: #569cd6">import</span>(<span
                style="color: #ce9178"
                >`@/</span
              ><span style="color: #569cd6">${</span
              ><span style="color: #4fc1ff">route_data</span>[<span
                style="color: #9cdcfe"
                >index</span
              >].<span style="color: #9cdcfe">children</span>[<span
                style="color: #9cdcfe"
                >i</span
              >].<span style="color: #9cdcfe">component</span
              ><span style="color: #569cd6">}</span
              ><span style="color: #ce9178">`</span>),&nbsp;<span
                style="color: #6a9955"
                >//加载vue文件</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >meta</span
              ><span style="color: #9cdcfe">:</span>&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #6a9955"
                >//路由一些附加信息，可以进行适当增加</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >show_site</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >children</span
              >[<span style="color: #9cdcfe">i</span>].<span
                style="color: #9cdcfe"
                >meta</span
              >.<span style="color: #9cdcfe">show_site</span>,&nbsp;<span
                style="color: #6a9955"
                >//是否全屏显示</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >web_title</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >children</span
              >[<span style="color: #9cdcfe">i</span>].<span
                style="color: #9cdcfe"
                >meta</span
              >.<span style="color: #9cdcfe">web_title</span>&nbsp;<span
                style="color: #6a9955"
                >//网站标题</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span
                style="color: #c586c0"
                >else</span
              >&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #6a9955"
                >//没有children时生成路由数组方法</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #4fc1ff"
                >init_route_data</span
              >[<span style="color: #9cdcfe">index</span>]&nbsp;=&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >path</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >path</span
              >,&nbsp;<span style="color: #6a9955">//路由url</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >name</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >name</span
              >,&nbsp;<span style="color: #6a9955">//路由名</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #dcdcaa"
                >component</span
              ><span style="color: #9cdcfe">:</span>&nbsp;()&nbsp;<span
                style="color: #569cd6"
                >=&gt;</span
              >&nbsp;<span style="color: #569cd6">import</span>(<span
                style="color: #ce9178"
                >`@/</span
              ><span style="color: #569cd6">${</span
              ><span style="color: #4fc1ff">route_data</span>[<span
                style="color: #9cdcfe"
                >index</span
              >].<span style="color: #9cdcfe">component</span
              ><span style="color: #569cd6">}</span
              ><span style="color: #ce9178">`</span>),&nbsp;<span
                style="color: #6a9955"
                >//加载vue文件</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >meta</span
              ><span style="color: #9cdcfe">:</span>&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #6a9955"
                >//路由一些附加信息，可以进行适当增加</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >show_site</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >meta</span
              >.<span style="color: #9cdcfe">show_site</span>,&nbsp;<span
                style="color: #6a9955"
                >//是否全屏显示</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >web_title</span
              ><span style="color: #9cdcfe">:</span>&nbsp;<span
                style="color: #4fc1ff"
                >route_data</span
              >[<span style="color: #9cdcfe">index</span>].<span
                style="color: #9cdcfe"
                >meta</span
              >.<span style="color: #9cdcfe">web_title</span>&nbsp;<span
                style="color: #6a9955"
                >//网站标题</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #c586c0">for</span
              >&nbsp;(<span style="color: #569cd6">let</span>&nbsp;<span
                style="color: #9cdcfe"
                >index</span
              >&nbsp;=&nbsp;<span style="color: #b5cea8">0</span>;&nbsp;<span
                style="color: #9cdcfe"
                >index</span
              >&nbsp;&lt;&nbsp;<span style="color: #4fc1ff">route_data</span
              >.<span style="color: #9cdcfe">length</span>;&nbsp;<span
                style="color: #9cdcfe"
                >index</span
              >++)&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #6a9955"
                >//由于addRoutes已经废弃，所以需要循环使用addRoute进行数组添加</span
              >
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe"
                >router</span
              >.<span style="color: #dcdcaa">addRoute</span>(<span
                style="color: #4fc1ff"
                >init_route_data</span
              >[<span style="color: #9cdcfe">index</span>]);&nbsp;<span
                style="color: #6a9955"
                >//循环添加数组</span
              >
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe">console</span
              >.<span style="color: #dcdcaa">log</span>(<span
                style="color: #ce9178"
                >'路由初始化成功'</span
              >);
            </div>
            <div>
              &nbsp;&nbsp;}&nbsp;<span style="color: #c586c0">else</span>&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9cdcfe">console</span
              >.<span style="color: #dcdcaa">log</span>(<span
                style="color: #ce9178"
                >'请检查是否登录或者检查sessionStorage，路由初始化失败'</span
              >);&nbsp;<span style="color: #6a9955"
                >//如果不需要提示请将else一起删除</span
              >
            </div>
            <div>&nbsp;&nbsp;}</div>
            <div>}</div>
            <div><span style="color: #dcdcaa">init_route</span>()</div>
            <div>
              <span style="color: #569cd6">export</span>&nbsp;<span
                style="color: #c586c0"
                >default</span
              >{
            </div>
            <div>
              &nbsp;&nbsp;<span style="color: #dcdcaa">init_route</span>
            </div>
            <div>}</div>
            <div><span style="color: #6a9955">/*</span></div>
            <div><span style="color: #6a9955">A即：</span></div>
            <div>
              <span style="color: #6a9955"
                >我们默认的静态路由内容如下router/index.js：</span
              >
            </div>
            <div><span style="color: #6a9955">{</span></div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;path:&nbsp;'/login',&nbsp;//路由url</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;'login',&nbsp;//路由名称</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;component:&nbsp;()&nbsp;=&gt;&nbsp;import('@/unitui/pages/Login.vue'),&nbsp;//加载模板文件</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;meta:&nbsp;{</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show_site:&nbsp;0,&nbsp;//是否全屏显示0为全屏显示，1为显示在框架内</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web_title:&nbsp;"登录"&nbsp;//网站标题</span
              >
            </div>
            <div>
              <span style="color: #6a9955">&nbsp;&nbsp;&nbsp;&nbsp;}</span>
            </div>
            <div><span style="color: #6a9955">&nbsp;&nbsp;},</span></div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;与我们动态添加的路由：</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;init_route_data[index]&nbsp;=&nbsp;{</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path:&nbsp;route_data[index].path,&nbsp;//路由url</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;route_data[index].name,&nbsp;//路由名</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component:&nbsp;()&nbsp;=&gt;&nbsp;import(`@/${route_data[index].component}`),//加载vue文件</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meta:&nbsp;{</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//路由一些附加信息，可以进行适当增加</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show_site:&nbsp;route_data[index].meta.show_site,&nbsp;//是否全屏显示</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web_title:&nbsp;route_data[index].meta.web_title&nbsp;//网站标题</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是相同的，所以当我们需要添加路由相关参数时可以使用与静态路由一样的参数进行修改，我们需要同时在三个init_route_data</span
              >
            </div>
            <div>
              <span style="color: #6a9955"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部分相同位置添加参数即可</span
              >
            </div>
            <div><span style="color: #6a9955">*/</span></div>
            <div><span style="color: #6a9955">//&nbsp;引入主题</span></div>
            <div>
              <span style="color: #c586c0">import</span>&nbsp;<span
                style="color: #ce9178"
                >'./assets/style/defult/index.css'</span
              >
            </div>
          </div>
        </div>
        <p style="margin-left: 10px; margin-top: 10px">
          1、动态路由的实现仅仅需要提供
          <span style="color: #f56c6c"
            >sessionStorage.getItem("route_data")</span
          >数据，那么unitui便会自动为你完成动态路由添加。<br /><br />
          2、你需要提供的数据内容需要与
          <span style="color: #f56c6c">unitui/assets/json/route.json</span
          >文件格式一致即可，为了方便路由管理我们提供了可视化路由管理，你可以通过它实现组件挂载，然后生成json数据
          对<span style="color: #f56c6c">unitui/assets/json/route.json</span
          >进行替换。<br /><br />
          3、这个只是告诉你我们<span style="color: #f56c6c"
            >sessionStorage.getItem("route_data")</span
          >的内容是与<span style="color: #f56c6c"
            >unitui/assets/json/route.json</span
          >数据相同，我们并不建议你将数据写入route.json中，而是由后端提供route.json数据。
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px"
          >unitui/assets/json/route.json数据示例</span
        ></el-divider
      >
      <div class="adress_title_one">
        <div style="margin-left: 10px; margin-top: 10px">
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
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/unit/adress/route"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"name"</span
              >:&nbsp;<span style="color: #ce9178">"unit_adress_route"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"component"</span
              >:&nbsp;<span style="color: #ce9178"
                >"uviews/unit_adress/AutoRoute.vue"</span
              >,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"meta"</span
              >:&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"show_site"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"web_title"</span
              >:&nbsp;<span style="color: #ce9178">"动态路由"</span>
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;},</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/unit/adress"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"name"</span
              >:&nbsp;<span style="color: #ce9178">"unit_adress"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"component"</span
              >:&nbsp;<span style="color: #ce9178"
                >"uviews/unit_adress/UnituiAdress.vue"</span
              >,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"meta"</span
              >:&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"show_site"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"web_title"</span
              >:&nbsp;<span style="color: #ce9178">"unitui介绍"</span>
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;},</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/home"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"name"</span
              >:&nbsp;<span style="color: #ce9178">"home"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"component"</span
              >:&nbsp;<span style="color: #ce9178">"uviews/home/Home.vue"</span
              >,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"meta"</span
              >:&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"show_site"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"web_title"</span
              >:&nbsp;<span style="color: #ce9178">"主页"</span>
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div>
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
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"home"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"name"</span
              >:&nbsp;<span style="color: #ce9178">"home"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"component"</span
              >:&nbsp;<span style="color: #ce9178">"/views/hoe/Home.vue"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"meta"</span
              >:&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"show_site"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"web_title"</span
              >:&nbsp;<span style="color: #ce9178">"主页-嵌套"</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
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
                >"path"</span
              >:&nbsp;<span style="color: #ce9178">"/sub/admin"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"name"</span
              >:&nbsp;<span style="color: #ce9178">"sub_admin"</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"component"</span
              >:&nbsp;<span style="color: #ce9178"
                >"unitui/subadmin/SubAdmin.vue"</span
              >,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"meta"</span
              >:&nbsp;{
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"show_site"</span
              >:&nbsp;<span style="color: #b5cea8">1</span>,
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"web_title"</span
              >:&nbsp;<span style="color: #ce9178">"组件管理"</span>
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color: #9cdcfe"
                >"children"</span
              >:&nbsp;[]
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
            <div>]</div>
          </div>
        </div>
        <p style="margin-top: 10px">
          1、如果你熟悉嵌套路由，那么可以明显可以看出这是一个嵌套路由数据格式，为了方便理解，我们的数据key尽量与router的key
          保持一致。<br /><br />
          2、你如果希望添加或减少参数，不仅需要修改json数据，同时需要修改
          <span style="color: #67c23a">unit/unitui_init.js</span>以便提供支持
        </p>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px"
          >unitui_init.js、route.json和路由间参数对应说明</span
        ></el-divider
      >
      <div class="adress_title_one">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="json_data" label="后端返回路由参数route.json">
          </el-table-column>
          <el-table-column prop="init_data" label="unitui_init.js初始参数">
          </el-table-column>
          <el-table-column prop="route" label="动态路由对应参数">
          </el-table-column>
          <el-table-column prop="adress" label="说明"> </el-table-column>
        </el-table>
      </div>
      <el-divider content-position="left"
        ><span style="font-size: 15px">开发说明</span></el-divider
      >
      <div class="adress_title">
        <p style="margin-left:10px">
          1、route.json（后端返回的数据）children部分内容与父数组相同，但不含children，且path前不加/<br /><br />
          2、你可以使用《组件管理》实现可视化编辑，在合适位置将<span
            style="color: #f56c6c"
            >sessionStorage.getItem("route_data")</span
          >提交到服务器，你的编辑会被<span style="color: #f56c6c"
            >sessionStorage.getItem("route_data")</span
          >实时记录，你可以在任意位置通过<span style="color: #f56c6c"
            >sessionStorage.getItem("route_data")</span
          >获取编辑好的route的json信息。
        </p>
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
          init_data: "path",
          json_data: "path",
          route: "path",
          adress: "访问url",
        },
        {
          init_data: "name",
          json_data: "name",
          route: "name",
          adress: "路由名称，未唯一值",
        },
        {
          init_data: "component",
          json_data: "component",
          route: "component",
          adress: "这是组件位置，在文件位置前不加@/，如views/hello.vue即可",
        },
        {
          init_data: "meta.show_site",
          json_data: "meta.show_site",
          route: "meta.show_site",
          adress: "组件显示方式，1为全屏显示，0为框架内显示",
        },
        {
          init_data: "meta.web_title",
          json_data: "meta.web_title",
          route: "meta.web_title",
          adress: "访问时显示的网站标题",
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