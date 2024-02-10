<template>
  <div class="list-controls">
    <div class="list-controls__input">
      <ElButton
        type="primary"
        :disabled="tasksStore.isDeleteMode"
        @click="createTask">
        Добавить таску
      </ElButton>

      <ElInput
        v-model="taskName"
        placeholder="Название"
        :disabled="tasksStore.isDeleteMode"
        @keyup.enter="createTask"
        clearable />
    </div>

    <div class="list-controls__filter">
      <ElSelect
        placeholder="Фильтр"
        :disabled="tasksStore.isDeleteMode"
        :model-value="tasksStore.filter"
        @change="tasksStore.filter = $event">
        <ElOption
          v-for="item in FiltersModel"
          :key="item.value"
          :label="item.label"
          :value="item.value" />
      </ElSelect>

      <ElTooltip
        :content="
          !tasksStore.isDeleteMode
            ? 'Перейти в режим удаления'
            : `Удалить ${tasksStore.deleteTasks.length} задач`
        "
        placement="bottom-start">
        <ElButton
          :type="!tasksStore.isDeleteMode ? 'info' : 'danger'"
          @click="tasksStore.isDeleteMode = !tasksStore.isDeleteMode">
          <ElIcon>
            <Delete />
          </ElIcon>
        </ElButton>
      </ElTooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Delete } from "@element-plus/icons-vue";
  import { FiltersModel } from "@/types";

  const tasksStore = useTasksStore();

  const taskName = ref("");

  function createTask() {
    tasksStore.createTask(taskName.value);
    taskName.value = "";
  }
</script>

<style lang="scss" scoped>
  .list-controls {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__input {
      display: flex;
      gap: 5px;
    }

    &__filter {
      display: flex;
      gap: 5px;
    }
  }
</style>
