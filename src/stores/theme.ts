import { defineStore } from "pinia";

function getThemeFromLocalStorage() {
  let theme: unknown = localStorage.getItem("theme");

  if (["light", "dark"].includes(theme as string)) {
    return theme as "light" | "dark";
  } else {
    localStorage.setItem("theme", "light");
    return "light";
  }
}

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<"light" | "dark">(getThemeFromLocalStorage());

  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
  }

  watch(
    theme,
    () => {
      if (theme.value === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    { immediate: true }
  );

  return {
    theme: readonly(theme),
    toggleTheme,
  };
});
