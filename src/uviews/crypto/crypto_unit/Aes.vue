<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>AES加密</span>
      </div>
    </template>
    <div>
      <el-row :gutter="10" style="width: 100%">
        <el-col :xs="24" :sm="12">
          <el-form ref="form" size="small" :model="Aes_data" label-width="80px">
            <el-form-item label="加密内容">
              <el-input
                v-model="Aes_data.word"
                placeholder="任意内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="密钥key">
              <el-input
                v-model="Aes_data.key"
                placeholder="加密密钥建议长度是8的倍数"
              ></el-input>
            </el-form-item>
            <el-form-item label="密钥iv">
              <el-input
                v-model="Aes_data.iv"
                placeholder="密钥偏移度，建议长度是8的倍数"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="AesEnc">Aes加密</el-button>
              <el-button type="danger" @click="AesDec">Aes解密</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-card shadow="never">
            <template #header>
              <div>
                <span>加/解密内容</span>
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
      Aes_data: {
        word: "unit",
        key: "12345678",
        iv: "aasdqijs",
      },
      enc_result: "",
    };
  },
  methods: {
    AesEnc() {
      const result = Crypto.AesEnc(
        this.Aes_data.word,
        this.Aes_data.key,
        this.Aes_data.iv
      );
      this.enc_result = result;
    },
    AesDec() {
      const result = Crypto.AesDec(
        this.Aes_data.word,
        this.Aes_data.key,
        this.Aes_data.iv
      );
      this.enc_result = result;
    },
  },
};
</script>