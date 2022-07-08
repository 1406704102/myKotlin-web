<template>
  <Unitui v-if="isRouterAlive"></Unitui>
</template>
<script>
import Unitui from "@/unitui/ui/Unitui.vue";
import { ref, nextTick, provide } from "vue";
export default {
  name: "App",
  components: {
    Unitui,
  },
  setup() {
    // 局部组件刷新
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);

    return {
      isRouterAlive,
    };
  },
};
</script>
