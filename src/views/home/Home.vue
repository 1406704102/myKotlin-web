<template>
  <div>
    <TopCard></TopCard>
    <DataSpace style="margin-top:20px"></DataSpace>
    <VistData style="margin-top:20px"></VistData>
  </div>
</template>
<script>
import TopCard from "./sub/TopCard.vue";
import DataSpace from "./sub/DataSpace";
import VistData from "./sub/VistData"
export default {
  components: {
    TopCard,
    DataSpace,
    VistData
  }
};
</script>