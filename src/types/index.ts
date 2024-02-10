export enum ThemesEnum {
  LIGHT = "light",
  DARK = "dark",
}

export interface ITask {
  id: number;
  createdAt: Date;
  title: string;
  description?: string;
  completed: boolean;
}

export enum FiltersTypes {
  ALL = "all",
  COMPLETED = "completed",
  NOT_COMPLETED = "not-completed",
}

export const FiltersModel = {
  [FiltersTypes.ALL]: {
    value: FiltersTypes.ALL,
    label: "Все",
  },
  [FiltersTypes.COMPLETED]: {
    value: FiltersTypes.COMPLETED,
    label: "Выполненные",
  },
  [FiltersTypes.NOT_COMPLETED]: {
    value: FiltersTypes.NOT_COMPLETED,
    label: "Не выполненные",
  },
};
