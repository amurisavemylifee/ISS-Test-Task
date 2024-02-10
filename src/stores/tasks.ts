import { defineStore } from "pinia";
import { FiltersModel, FiltersTypes, ITask } from "@/types";

const TASKS_LOCAL_STORAGE_KEY = "tasks";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<ITask[]>(getTasksFromLocalStorage());
  const filter = ref(FiltersModel[FiltersTypes.ALL].value);
  const filterTasks = computed(() => {
    if (filter.value === FiltersModel[FiltersTypes.NOT_COMPLETED].value) {
      return tasks.value.filter((task: ITask) => !task.completed);
    } else if (filter.value === FiltersModel[FiltersTypes.COMPLETED].value) {
      return tasks.value.filter((task: ITask) => task.completed);
    }

    return tasks.value;
  });
  const isDeleteMode = ref(false);
  const deleteTasks = ref<number[]>([]);

  function toggleTaskDeletion(taskId: number) {
    if (deleteTasks.value.includes(taskId)) {
      deleteTasks.value = deleteTasks.value.filter((id) => id !== taskId);
      return;
    }

    deleteTasks.value.push(taskId);
  }
  watch(isDeleteMode, () => {
    if (isDeleteMode.value === false) {
      removeTasks(deleteTasks.value);
      deleteTasks.value = [];
    }
  });

  function setLocalStorage() {
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(tasks.value));
  }

  function getTasksFromLocalStorage() {
    return JSON.parse(
      localStorage.getItem(TASKS_LOCAL_STORAGE_KEY) ?? "[]"
    ) as ITask[];
  }

  function createTask(title: string) {
    tasks.value.push({
      id: Date.now(),
      title: title || "Новая задача",
      completed: false,
      createdAt: new Date(),
    });
  }

  function removeTasks(ids: number[]) {
    tasks.value = tasks.value.filter((task: ITask) => !ids.includes(task.id));
  }

  function changeTask(id: number, data: Omit<Partial<ITask>, "id">) {
    const task = tasks.value.find((task: ITask) => task.id === id);
    if (task) {
      Object.assign(task, { ...data, title: data.title || task.title });
    }
  }

  watch(tasks, setLocalStorage, { deep: true });

  return {
    tasks: readonly(tasks),
    filter,
    filterTasks,
    createTask,
    removeTasks,
    isDeleteMode,
    deleteTasks,
    toggleTaskDeletion,
    changeTask,
  };
});
