<template>
  <div class="tasks-footer">
    <ElText>
      Всего: <ElText type="primary">{{ tasksStore.tasks.length }}</ElText>
    </ElText>

    <ElText>
      С фильтром:
      <ElText type="primary">{{ tasksStore.filterTasks.length }}</ElText>
    </ElText>
  </div>
</template>

<script lang="ts" setup>
  const tasksStore = useTasksStore();
</script>

<style lang="scss" scoped>
  .tasks-footer {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
</style>
