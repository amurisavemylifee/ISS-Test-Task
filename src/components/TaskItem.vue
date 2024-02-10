<template>
  <ElCard style="flex-shrink: 0">
    <div class="task-item">
      <ElCheckbox
        v-if="tasksStore.isDeleteMode"
        :model-value="tasksStore.deleteTasks.includes(task.id)"
        @change="tasksStore.toggleTaskDeletion(task.id)" />

      <h4>{{ task.title }}</h4>

      <div class="task-item__actions">
        <ElTooltip
          :disabled="tasksStore.isDeleteMode"
          :content="task.completed ? 'Сделано' : 'Не сделано'">
          <ElButton
            :disabled="tasksStore.isDeleteMode"
            :type="task.completed ? 'success' : 'danger'"
            @click="
              tasksStore.changeTask(task.id, { completed: !task.completed })
            ">
            <ElIcon>
              <Check v-if="task.completed" />
              <Close v-else />
            </ElIcon>
          </ElButton>
        </ElTooltip>

        <ElTooltip
          content="Редактировать"
          :disabled="tasksStore.isDeleteMode">
          <ElButton
            type="info"
            :disabled="tasksStore.isDeleteMode"
            @click="editTaskStore.openEditDialog(task.id)">
            <ElIcon>
              <Edit />
            </ElIcon>
          </ElButton>
        </ElTooltip>
      </div>
    </div>
  </ElCard>
</template>

<script lang="ts" setup>
  import { Edit, Close, Check } from "@element-plus/icons-vue";
  import { ITask } from "@/types";

  const tasksStore = useTasksStore();
  const editTaskStore = useEditTaskStore();

  defineProps<{
    task: ITask;
  }>();

  const gridTemplate = computed(() => {
    if (tasksStore.isDeleteMode) {
      return "14px 1fr 104px";
    }
    return "1fr 104px";
  });
</script>

<style scoped>
  .task-item {
    display: grid;
    align-items: center;
    column-gap: 10px;
    grid-template-columns: v-bind(gridTemplate);

    &__actions {
      width: 100%;
      display: flex;
      gap: 5px;
    }
  }
</style>
