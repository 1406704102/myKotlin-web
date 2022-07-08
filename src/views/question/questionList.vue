<template>
  <el-card shadow="never" style="width:99%">
    <template #header>
      <div class="card-header">
        <span
        >{{ $route.meta.web_title }}
          <el-tooltip effect="dark" content="全屏显示" placement="top">
            <i @click="show_fullscreen()" class="el-icon-full-screen"></i>
          </el-tooltip>
          <el-dropdown
              @command="set_size"
              trigger="click"
              style="margin-left: 10px"
          >
            <el-tooltip effect="dark" content="表格尺寸" placement="top">
              <i class="el-icon-s-operation"></i>
            </el-tooltip>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="medium">正常</el-dropdown-item>
                <el-dropdown-item command="small">小</el-dropdown-item>
                <el-dropdown-item command="mini">超小</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </span>
        <el-button
            class="button"
            type="primary"
            size="mini"
            @click="init_add"
            icon="el-icon-plus"
            style="float: right"
        ></el-button>
      </div>
      <el-form
          :inline="true"
          size="mini"
          :model="questionQuery"
          style="margin-top: 10px"
      >
        <el-form-item label="题目">
          <el-input
              v-model="questionQuery.questionTitle"
              placeholder="搜索内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="启用">
          <el-select v-model="questionQuery.enable" placeholder="启用">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="问题类型">
          <el-select v-model="questionQuery.questionType" placeholder="问题类型">
            <el-option v-for="item in questionTypes" v-bind:key="item.id" :label="item.dictDetailName"
                       :value="item.dictDetailKey"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
          <el-button type="primary" @click="reSetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </template>

    <div>
      <el-table :data="questionList" style="width: 100%">
        <el-table-column prop="id" width="50"></el-table-column>
        <el-table-column label="题目" prop="questionTitle"/>
        <el-table-column label="类型" prop="questionType">
          <template #default="scope">
            <div class="text-cut" v-for="item in questionTypes" v-bind:key="item.id">
              {{ item.dictDetailKey === scope.row.questionType ? item.dictDetailName : '' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="启用" prop="enable">
          <template #default="scope">
            <div class="text-cut">
              {{ scope.row.enable }}
            </div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" width="150px">
          <template #default="scope">
            <el-button-group>
              <el-button
                  size="mini"
                  type="success"
                  @click="init_edit(scope)"
                  icon="el-icon-edit"
              ></el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope)"
                  icon="el-icon-delete"
              ></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
  <!--  <editQuestion-->
  <!--      v-model="add_dialog_status"-->
  <!--      @revert="add_revert"-->
  <!--      :add_dialog_status="add_dialog_status"-->
  <!--      :edit_data="edit_data"-->
  <!--  ></editQuestion>-->

  <el-dialog
      :title="add_dialog_status==='1'? '新增问题':'修改问题'"
      @closed="$emit('update:modelValue', false)"
      v-model="add_dialog_status"
      top="5vh"
      width="70%"
  >
    <el-form
        :model="form"
        size="small"
        ref="user_form"
        label-width="100px"
        id="el_form"
    >
      <el-form-item label="类型" prop="user_pet_name">
        <el-select v-model="form.questionType" placeholder="请选择活动区域">
          <el-option v-for="item in questionTypes" v-bind:key="item.id" :label="item.dictDetailName"
                     :value="item.dictDetailKey"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题目" prop="user_pet_name">
        <el-input
            v-model="form.questionTitle"
            placeholder="请输入题目"
        ></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="img" style="width: 370px;" />
        <el-upload
            ref="upload"
            :limit="1"
            :auto-upload="true"
            :headers="headers"
            :on-success="handleSuccess"
            :on-error="handleError"
            :action="uploadQiNiu + '?fileName=' + new Date().getTime()"
        >
          <div class="eladmin-upload"><i class="el-icon-upload"/> 上传图片</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="答案" prop="user_pet_name">
        <el-input
            v-model="form.questionAnswer"
            placeholder="请输入答案"
        ></el-input>
        <Uedit v-model="form.questionAnswer" ref="UeditRef"></Uedit>

      </el-form-item>
      <el-form-item label="聚焦">
        <el-radio-group v-model="form.questionFocus" ref="UeditRef">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="主页显示">
        <el-radio-group v-model="form.indexShow">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="启用">
        <el-radio-group v-model="form.enable">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="small" @click="add_dialog_status = null"
        >取 消</el-button
        >
        <el-button size="small" type="success" @click="submit"
        >确定</el-button
        >
      </span>
    </template>
  </el-dialog>


</template>

<script>
import {onMounted, reactive, ref, toRefs } from "vue";
import request from "../../unitui/request"
import url, {dictDetailInfo} from "../../url/url"
import {ElMessageBox} from "element-plus";
import {ElMessage} from 'element-plus';
import Uedit from "@/unitui/sub/Uedit.vue";

export default {
  name: "questionList",
  components: {
    Uedit,
  },
  setup() {
    const thisUrl = url.questionInfo;
    const UeditRef = ref();
    const state = reactive({
      add_dialog_status: null,
      questionList: [],
      questionQuery: {
        sort:'createTime,asc'
      },
      edit_data: {},

      form: {
        questionType: '',
        questionTitle: '',
        questionAnswer: '',
        questionFocus: '0',
        indexShow: '0',
        enable: '1'
      },
      img: '',
      uploadQiNiu: url.uploadQiNiu,
      headers: { 'PJ-Token': sessionStorage.getItem("PJ-Token")},
      questionTypes: []
    })

    const reSetSearch = () => {
      state.questionQuery = {
        sort:'createTime,asc'
      };
      getQuestionList();

    }

    const onSearch = () => {
      getQuestionList();
    }

    const getQuestionList = () => {
      request.getAction(thisUrl,state.questionQuery).then(res => {
        console.log(res)
        state.questionList = res.data.content;

      })
    }
    const getQuestionType = () => {
      request.getAction(url.dictInfo,
          {
            enable: '1',
            dictKey: 'question_type',
          }
      ).then(res => {
        request.getAction(
            dictDetailInfo,
            {
              enable: '1',
              dictId: res.data.content[0].id
            }).then(res => {
          console.log(res)
          state.questionTypes = res.data.content
        })
      })
    }
    const submit = () => {
      console.log(123)
      request.putAction(thisUrl, state.form).then(res => {
        console.log(res);
        state.add_dialog_status = null;
        getQuestionList()
        Uedit.modelValue = ""

        // location.reload();

      })
    }

    const init_add = () => {
      state.form = {
        questionType: '',
        questionTitle: '',
        questionAnswer: '',
        questionFocus: '0',
        indexShow: '0',
        enable: '1'
      }
      state.add_dialog_status = '1'
    }
    const init_edit = (props) => {
      state.form = props.row
      // console.log(UeditRef.value)
      // UeditRef.content.setContent("")
      // unref(UeditRef).test("11111")

      state.add_dialog_status = '2'
    };

    const handleDelete = (props) => {
      ElMessageBox.confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        request.deleteAction(thisUrl, {
          id: props.row.id
        }).then(() => {

          getQuestionList()
          ElMessage.success("删除成功!");
        })

      })
          .catch(() => {
            ElMessage.info('已取消删除');
          });
    }
    getQuestionType();

    onMounted(()=>{
      console.log(UeditRef.value)
    });


    const beforeUpload = (file) => {
      let isLt2M = true
      isLt2M = file.size / 1024 / 1024 < 100
      if (!isLt2M) {
        this.loading =
            ElMessage.info('上传文件大小不能超过 100MB!');

        // this.$message.error('上传文件大小不能超过 100MB!')
      }
      this.fileName = new Date().getTime()
      return isLt2M
    }
    const handleSuccess = (response) => {
      ElMessage.success("上传成功!");

      state.img = response

      this.$refs.upload.clearFiles()
    }
    getQuestionList();
    return {
      ...toRefs(
          state
      ),
      UeditRef,
      getQuestionList,
      init_edit,
      init_add,
      submit,
      handleDelete,
      beforeUpload,
      handleSuccess,
      onSearch,
      reSetSearch
    }

  }
}
</script>

<style scoped>

</style>
