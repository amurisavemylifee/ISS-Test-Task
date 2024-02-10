<template>
  <div class="tasks-list">
    <TransitionGroup name="slide">
      <TaskItem
        v-for="task in tasksStore.filterTasks"
        :key="task.id"
        :task="task" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
  import TaskItem from "@/components/TaskItem.vue";

  const tasksStore = useTasksStore();
</script>

<style lang="scss" scoped>
  .tasks-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    overflow-y: auto;
    flex: 1;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }
</style>
