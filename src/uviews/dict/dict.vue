<template>
  <div class="flex space-between">
    <el-card shadow="never" style="width:50%">
      <template #header>
        <el-row>
          <el-col :xs="24" :sm="3">
            <span style="margin-right: 10px">字典类别</span>
            <!-- 新增用户类别组件 -->
            <!--            <AddUserLabel @get_add="get_add"></AddUserLabel>-->
          </el-col>
          <el-col :xs="24" :sm="7">
            <el-input
                placeholder="请输入内容"
                v-model="search_value"
                size="mini"
                :style="{width: pc?'400px':'100%'}"
            >
              <template #append>
                <el-button type="primary" icon="el-icon-search"></el-button>
              </template>
            </el-input>
          </el-col>
          <el-col :xs="24" :sm="14" align="right">

            <el-button
                class="button"
                type="primary"
                size="mini"
                @click="init_dict_add"
                icon="el-icon-plus"
                style="float: right"
            ></el-button>
          </el-col>
        </el-row>
      </template>
      <div>
        <el-table :data="dictList" style="width: 100%" @row-click="getDetailList">
          <el-table-column prop="id" width="50"></el-table-column>
          <el-table-column label="类别名称" prop="dictName">
          </el-table-column>
          <el-table-column label="类别Key" prop="dictKey"></el-table-column>
          <el-table-column fixed="right" width="150px">
            <template #default="scope">
              <el-button-group>
                <el-button
                    size="mini"
                    type="success"
                    @click="init_dict_edit(scope.row)"
                    icon="el-icon-edit"
                ></el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="dict_del(scope.row)"
                    icon="el-icon-delete"
                ></el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog
        :title="add_dict_dialog_status==='1'? '新增字典类别':'修改字典类别'"
        @closed="$emit('update:modelValue', false)"
        v-model="add_dict_dialog_status"
        top="5vh"
        width="40%"
    >
      <el-form>
        <el-form-item label="类别名称">
          <el-input
              v-model="dictInfo.dictName"
              placeholder="请输入类别名称"
          />
        </el-form-item>
        <el-form-item label="类别Key">
          <el-input
              v-model="dictInfo.dictKey"
              placeholder="请输入类别Key"
          />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button size="small" @click="add_dict_dialog_status = null"
        >取 消</el-button
        >
        <el-button size="small" type="success" @click="dict_submit"
        >确定</el-button
        >
      </span>
      </template>
    </el-dialog>

    <el-card shadow="never" style="width:50%">
      <template #header>
        <el-row>
          <el-col :xs="24" :sm="3">
            <span style="margin-right: 10px">字典详情</span>
          </el-col>
          <el-col :xs="24" :sm="7">
            <el-input
                placeholder="请输入内容"
                v-model="search_value"
                size="mini"
                :style="{width: pc?'400px':'100%'}"
            >
              <template #append>
                <el-button type="primary" icon="el-icon-search"></el-button>
              </template>
            </el-input>
          </el-col>
          <el-col :xs="24" :sm="14" align="right">

            <el-button
                class="button"
                type="primary"
                size="mini"
                @click="init_dict_detail_add"
                icon="el-icon-plus"
                style="float: right"
            ></el-button>
          </el-col>
        </el-row>
      </template>
      <div>
        <el-table :data="dictDetailList" style="width: 100%">
          <el-table-column prop="id" width="50"></el-table-column>
          <el-table-column label="字典名称" prop="dictDetailName">
          </el-table-column>
          <el-table-column label="字典Key" prop="dictDetailKey"></el-table-column>
          <el-table-column fixed="right" width="150px">
            <template #default="scope">
              <el-button-group>
                <el-button
                    size="mini"
                    type="success"
                    @click="init_dict_detail_edit(scope.row)"
                    icon="el-icon-edit"
                ></el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="dict_detail_del(scope.row)"
                    icon="el-icon-delete"
                ></el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog
        :title="add_dict_detail_dialog_status==='1'? '新增字典详情':'修改字典详情'"
        @closed="$emit('update:modelValue', false)"
        v-model="add_dict_detail_dialog_status"
        top="5vh"
        width="40%"
    >
      <el-form>
        <el-form-item label="字典详情">
          <el-input
              v-model="dictDetailInfo.dictDetailName"
              placeholder="请输入字典详情"
          />
        </el-form-item>
        <el-form-item label="字典Key">
          <el-input
              v-model="dictDetailInfo.dictDetailKey"
              placeholder="请输入字典Key"
          />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button size="small" @click="add_dict_detail_dialog_status = null"
        >取 消</el-button
        >
        <el-button size="small" type="success" @click="dict_detail_submit"
        >确定</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {getDictData, getDictDetailData} from "../../api/dictInfo";
import {reactive, toRefs} from "vue";
import request from "../../unitui/request"
import url from "../../url/url"
import {ElMessage, ElMessageBox} from "element-plus";

export default {
  name: "dict",
  setup() {
    const state = reactive({
      dictList: [],
      dictInfo: {
        dictName: null,
        dictKey: null
      },
      add_dict_dialog_status: null,
      dictQuery: {
        enable: '1'
      },
      dictDetailList: [],
      dictDetailInfo: {
        dictDetailName:null,
        dictDetailKey: null
      },
      add_dict_detail_dialog_status: null,
      dictDetailQuery: {}
    })
    const getDictList = () => {

      getDictData(state.dictQuery).then(res => {
        state.dictList = res.content
        state.dictDetailList = [];
      })
    };

    const getDetailList = (row) => {
      state.dictDetailQuery.dictId = row.id;
      getDictDetailData(state.dictDetailQuery).then(res => {
        state.dictDetailList = res.content
      })
    }

    const init_dict_add = () => {
      state.add_dict_dialog_status = '1'
      state.dictInfo = {
        dictName: null,
        dictKey: null
      }
    }
    const init_dict_edit = (e) => {
      state.add_dict_dialog_status = '2'
      state.dictInfo = e;
    };
    const dict_submit = () => {
      request.putAction(url.dictInfo, state.dictInfo).then(res => {
        getDictList();
        state.add_dict_dialog_status = null;
      })
    };
    const dict_del = (e) => {
      ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        request.deleteAction(url.dictInfo, e).then(res => {
          getDictList();
          ElMessage.success("删除成功!");
        })
      }).catch(() => {
        ElMessage.info('已取消删除');
      });
    }

    const init_dict_detail_add = () => {
      state.add_dict_detail_dialog_status = '1';
      state.dictDetailInfo = {
        dictId: state.dictDetailQuery.dictId,
        dictDetailName: null,
        dictDetailKey: null
      };
    }
    const init_dict_detail_edit = (e) => {
      state.add_dict_detail_dialog_status = '2'
      state.dictDetailInfo = e;
    }
    const dict_detail_submit = () => {
      request.putAction(url.dictDetailInfo, state.dictDetailInfo).then(() => {
        request.getAction(url.dictDetailInfo,{
          dictId: state.dictDetailQuery.dictId
        }).then(res=>{
          state.dictDetailList = res.data.content
        })
        state.add_dict_detail_dialog_status = null;
      })
    }
    const dict_detail_del = (e) => {
      ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        request.deleteAction(url.dictDetailInfo, e).then(res => {
          request.getAction(url.dictDetailInfo,{
            dictId: state.dictDetailQuery.dictId
          }).then(res=>{
            state.dictDetailList = res.data.content
          })
          ElMessage.success("删除成功!");
        })
      }).catch(() => {
        ElMessage.info('已取消删除');
      });
    };
    getDictList();
    return {
      ...toRefs(
          state,
      ),
      getDetailList,
      init_dict_add,
      init_dict_edit,
      dict_submit,
      dict_del,
      init_dict_detail_add,
      init_dict_detail_edit,
      dict_detail_submit,
      dict_detail_del,
    }
  }

}
</script>

<style scoped>


</style>
