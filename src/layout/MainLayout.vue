<template>
  <ElHeader class="header">
    <h4 class="title">ISS Test Task</h4>

    <ElSwitch
      :model-value="themeStore.theme === 'dark'"
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @change="themeStore.toggleTheme" />
  </ElHeader>
  <ElMain>
    <slot />
  </ElMain>
</template>

<script lang="ts" setup>
  import { Moon, Sunny } from "@element-plus/icons-vue";
  const themeStore = useThemeStore();
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    color: var(--el-text-color-primary);
  }
</style>
