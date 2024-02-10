<template>
  <ElHeader class="header">
    <h4>ISS Test Task</h4>

    <ElSwitch
      :model-value="themeStore.theme === ThemesEnum.DARK"
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @change="themeStore.toggleTheme" />
  </ElHeader>

  <ElMain>
    <PageList />
  </ElMain>
</template>

<script lang="ts" setup>
  import { Moon, Sunny } from "@element-plus/icons-vue";
  import { ThemesEnum } from "@/types";

  import PageList from "@/pages/PageList.vue";

  const themeStore = useThemeStore();
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
