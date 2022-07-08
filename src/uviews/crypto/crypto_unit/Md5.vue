<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>其他加密</span>
      </div>
    </template>
    <div>
      <el-row :gutter="10" style="width: 100%">
        <el-col :xs="24" :sm="12">
          <el-form ref="form" size="small" :model="data" label-width="80px">
            <el-form-item label="加密内容">
              <el-input v-model="data.word" placeholder="任意内容"></el-input>
            </el-form-item>
            <el-form-item label="加密方式">
              <el-select
                v-model="data.label"
                placeholder="请选择活动区域"
                style="width: 100%"
              >
                <el-option label="MD5" value="MD5"></el-option>
                <el-option label="SHA1" value="SHA1"></el-option>
                <el-option label="SHA256" value="SHA256"></el-option>
                <el-option label="SHA512" value="SHA512"></el-option>
                <el-option label="SHA3" value="SHA3"></el-option>
                <el-option label="RIPEMD160" value="RIPEMD160"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="crypto_word">加密</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-card shadow="never">
            <template #header>
              <div>
                <span style="padding: 10px">加/解密内容</span>
              </div>
            </template>
            <div>
              <el-input
                type="textarea"
                autosize
                placeholder="加密或解密内容"
                v-model="enc_result"
              >
              </el-input>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
<script>
import Crypto from "../../../unitui/assets/Crypto";
export default {
  data() {
    return {
      data: {
        word: "unit",
        label: "MD5",
      },
      enc_result:'',
    };
  },
  methods: {
    crypto_word() {
      switch (this.data.label) {
        case "MD5":
          this.enc_result = Crypto.Md5(this.data.word);
          break;
        case "SHA1":
          this.enc_result = Crypto.SHA1(this.data.word);
          break;
        case "SHA256":
          this.enc_result = Crypto.SHA256(this.data.word);
          break;
        case "SHA512":
          this.enc_result = Crypto.SHA512(this.data.word);
          break;
        case "SHA3":
          this.enc_result = Crypto.SHA3(this.data.word);
          break;
          case "RIPEMD160":
          this.enc_result = Crypto.RIPEMD160(this.data.word);
          break;
      }
    },
  },
};
</script>