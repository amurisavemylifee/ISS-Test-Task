import { ITask } from "@/types";
import { defineStore } from "pinia";

export const useEditTaskStore = defineStore("edit-task", () => {
  const isEditDialogVisible = ref(false);
  const taskData = ref<ITask | null>(null);

  const tasksStore = useTasksStore();

  function openEditDialog(taskId: number) {
    let task = tasksStore.tasks.find((task: ITask) => task.id === taskId);
    if (task) {
      taskData.value = JSON.parse(JSON.stringify(toValue(task)));
      isEditDialogVisible.value = true;
    }
  }

  function closeEditDialog() {
    isEditDialogVisible.value = false;
    taskData.value = null;
  }

  return {
    isEditDialogVisible,
    taskData,
    openEditDialog,
    closeEditDialog,
  };
});
