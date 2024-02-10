import { ThemesEnum } from "@/types";
import { defineStore } from "pinia";

const THEME_CLASS = "dark";
const THEME_LOCAL_STORAGE_KEY = "theme";

function getThemeFromLocalStorage() {
  let theme: unknown = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  if (
    theme !== null &&
    [ThemesEnum.LIGHT, ThemesEnum.DARK].includes(theme as ThemesEnum)
  ) {
    return theme as ThemesEnum;
  } else {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, ThemesEnum.LIGHT);
    return ThemesEnum.LIGHT;
  }
}

export const useThemeStore = defineStore(THEME_LOCAL_STORAGE_KEY, () => {
  const theme = ref<ThemesEnum>(getThemeFromLocalStorage());

  function toggleTheme() {
    theme.value =
      theme.value === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT;
  }

  watch(
    theme,
    () => {
      if (theme.value === ThemesEnum.DARK) {
        document.documentElement.classList.add(THEME_CLASS);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, ThemesEnum.DARK);
      } else if (theme.value === ThemesEnum.LIGHT) {
        document.documentElement.classList.remove(THEME_CLASS);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, ThemesEnum.LIGHT);
      }
    },
    { immediate: true }
  );

  return {
    theme: readonly(theme),
    toggleTheme,
  };
});
