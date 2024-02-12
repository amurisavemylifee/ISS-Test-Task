<template>
  <div class="page-list">
    <ListControls />

    <TasksList />

    <ListFooter />
  </div>

  <ElDialog
    :model-value="editTaskStore.isEditDialogVisible"
    destroy-on-close
    title="Редактирование"
    @update:model-value="editTaskStore.closeEditDialog">
    <ElForm
      v-if="editTaskStore.isEditDialogVisible"
      label-position="top"
      label-width="120px">
      <ElFormItem label="Название">
        <ElInput
          v-model="(<ITask>editTaskStore.taskData).title"
          placeholder="Название" />
      </ElFormItem>

      <ElFormItem label="Описание">
        <ElInput
          v-model="(<ITask>editTaskStore.taskData).description"
          placeholder="Описание" />
      </ElFormItem>

      <div class="form-actions">
        <ElButton
          type="primary"
          @click="()=>{
            tasksStore.changeTask(
              (<ITask>editTaskStore.taskData).id,
              <ITask>editTaskStore.taskData
            );
            editTaskStore.closeEditDialog();}
          ">
          Сохранить
        </ElButton>

        <ElButton
          type="danger"
          @click="() => {
            tasksStore.removeTasks([(<ITask>editTaskStore.taskData).id]);
            editTaskStore.closeEditDialog();
          }">
          Удалить
        </ElButton>
      </div>
    </ElForm>
  </ElDialog>
</template>

<script lang="ts" setup>
  import { ITask } from "@/types";

  import ListControls from "@/components/ListControls.vue";
  import TasksList from "@/components/TasksList.vue";
  import ListFooter from "@/components/ListFooter.vue";

  const editTaskStore = useEditTaskStore();
  const tasksStore = useTasksStore();
</script>

<style lang="scss" scoped>
  .page-list {
    padding: 15px;
    margin: 0 auto;
    max-width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
  }

  .form-actions {
    display: flex;
    gap: 5px;

    color: red;
  }
</style>
