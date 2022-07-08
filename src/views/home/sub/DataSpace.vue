<template>
  <el-row :gutter="30">
    <el-col :xs="24" :md="16">
      <el-card shadow="never">
        <template #header>
          <div class="card-header">
            <span>登录信息</span>
          </div>
        </template>
        <el-table :data="login_user_data" height="300" size="mini" style="width: 100%">
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="name" label="昵称"></el-table-column>
          <el-table-column prop="username" label="用户名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column label="状态">
            <template #default="scope">
              <el-tag
                :type="scope.row.login_status?'success' : 'warning'"
              >{{scope.row.login_status?'在线' : '下线'}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column sortable prop="login_time" label="登录时间"></el-table-column>
          <el-table-column width="150" align="right">
            <template #default="scope">
              <el-button size="mini" type="success" @click="views(scope.$index, scope.row)">查看</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="prev"
          @next-click="next"
          :current-page="page.pn"
          :page-sizes="[10,50,100, 200, 300, 400]"
          :page-size="page.rn"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.total"
        ></el-pagination>
      </el-card>
    </el-col>
    <el-col :xs="24" :md="8">
      <el-card shadow="never">
        <template #header>
          <div class="card-header">
            <span>服务器信息</span>
          </div>
        </template>
        <div style="height:330px">
          <div title="服务器状态" align="center">
            <el-progress
              type="circle"
              :percentage="100"
              :status="web_serve_data[0].serve_status?'success':'warning'"
            >
              <el-button
                :type="web_serve_data[0].serve_status?'success':'warning'"
                :icon="web_serve_data[0].serve_status?'el-icon-check':'el-icon-warning-outline'"
                circle
              ></el-button>
              <span>{{web_serve_data[0].serve_ip}}</span>
            </el-progress>
          </div>
          <div>
            <span style="color:#606266">内存</span>
            <el-progress
              :status="(web_serve_data[1].used_disk/web_serve_data[1].disk_total)*100>50?'warning':'success'"
              :text-inside="true"
              :stroke-width="20"
              :percentage="(web_serve_data[1].used_disk/web_serve_data[1].disk_total)*100"
            >
              <span>{{web_serve_data[1].used_disk+'G/'+web_serve_data[1].disk_total+'G'}}</span>
            </el-progress>
          </div>
          <div style="margin-top:20px">
            <span style="color:#606266">API请求</span>
            <el-progress
              :status="(web_serve_data[2].request_num/web_serve_data[2].request)*100>50?'warning':'success'"
              :text-inside="true"
              :stroke-width="20"
              :percentage="(web_serve_data[2].request_num/web_serve_data[2].request)*100"
            >
              <span>{{web_serve_data[2].request_num+'/'+web_serve_data[2].request}}</span>
            </el-progress>
          </div>
          <div style="margin-top:20px">
            <span style="color:#606266">在线用户</span>
            <el-progress
              :status="(web_serve_data[3].user_online/web_serve_data[3].user)*100>50?'exception':'success'"
              :text-inside="true"
              :stroke-width="20"
              :percentage="(web_serve_data[3].user_online/web_serve_data[3].user)*100"
            >
              <span>{{web_serve_data[3].user_online+'/'+web_serve_data[3].user}}</span>
            </el-progress>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      web_serve_data: [
        {
          serve_status: 1,
          serve_ip: "192.15.11.66"
        },
        {
          disk_total: 40,
          used_disk: 19.15
        },
        {
          request_num: 1051,
          request: 1544
        },
        {
          user_online: 8842,
          user: 18440
        }
      ],
      page: {
        pn: 1,
        rn: 100,
        total: 400
      },
      login_user_data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          login_status: 1,
          login_time: "2020-02-1 15:10:01"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          login_status: 0,
          login_time: "2020-02-1 15:18:01"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          login_status: 1,
          login_time: "2020-02-5 15:10:01"
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          login_status: 0,
          login_time: "2020-03-1 15:10:01"
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          login_status: 1,
          login_time: "2020-02-10 15:10:01"
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          login_status: 1,
          login_time: "2020-02-1 16:10:01"
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          login_status: 1,
          login_time: "2020-02-1 5:10:01"
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          login_status: 0,
          login_time: "2020-02-1 15:56:01"
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          login_status: 0,
          login_time: "2020-02-1 15:40:01"
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          login_status: 1,
          login_time: "2020-02-1 20:10:01"
        }
      ]
    };
  },
  methods: {
    views(index, data) {
      console.log(index, data);
    },
    handleDelete(index, data) {
      console.log(index, data);
    },
    handleSizeChange(size) {
      this.page.rn = size;
      console.log(size);
    },
    prev(pn) {
      this.page.pn = pn;
    },
    next(pn) {
      this.page.pn = pn;
    },
    handleCurrentChange(pn) {
      this.page.pn = pn;
      console.log(pn);
    },
    init_data() {
        this.web_serve_data[1].used_disk+=5
        if (this.web_serve_data[1].used_disk>this.web_serve_data[1].disk_total) {
            this.web_serve_data[1].used_disk=0
        }
        this.web_serve_data[2].request_num+=50
        if (this.web_serve_data[2].request_num>this.web_serve_data[2].request) {
            this.web_serve_data[2].request_num=0
        }
        this.web_serve_data[3].user_online+=100
        if (this.web_serve_data[3].user_online>this.web_serve_data[3].user) {
            this.web_serve_data[3].user_online=0
        }
        setTimeout(()=>{
            this.init_data()
        },500)
    }
  },
  mounted() {
      this.init_data()
  }
};
</script>