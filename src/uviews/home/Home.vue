<template>
  <div>
    <TopCard :pc="pc"></TopCard>
    <DataSpace style="margin-top:20px" :pc="pc"></DataSpace>
    <VistData style="margin-top:20px" :pc="pc"></VistData>
  </div>
</template>
<script>
import TopCard from "./sub/TopCard.vue";
import DataSpace from "./sub/DataSpace";
import VistData from "./sub/VistData"
export default {
  props:["pc"],
  components: {
    TopCard,
    DataSpace,
    VistData
  },
  mounted(){
  }
};
</script>