<template>
  <Aes></Aes>
  <Md5 style="margin-top:10px"></Md5>
</template>
<script>
import Aes from "./crypto_unit/Aes.vue";
import Md5 from "./crypto_unit/Md5.vue";
export default {
  props: ["pc"],
  components: {
    Aes,
    Md5,
  },
};
</script>