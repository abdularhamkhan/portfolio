"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

const THEME_EVENT = "portfolio-theme-set";

function getTheme(): Theme {
  const t = localStorage.getItem(THEME_STORAGE_KEY);
  if (t === "dark" || t === "light") return t;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  const onCustom = () => onStoreChange();
  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY || e.key === null) onStoreChange();
  };
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onMq = () => {
    if (localStorage.getItem(THEME_STORAGE_KEY) !== null) return;
    onStoreChange();
  };
  window.addEventListener(THEME_EVENT, onCustom);
  window.addEventListener("storage", onStorage);
  mq.addEventListener("change", onMq);
  return () => {
    window.removeEventListener(THEME_EVENT, onCustom);
    window.removeEventListener("storage", onStorage);
    mq.removeEventListener("change", onMq);
  };
}

function getServerSnapshot(): Theme {
  return "light";
}

export function setTheme(next: Theme) {
  localStorage.setItem(THEME_STORAGE_KEY, next);
  document.documentElement.classList.toggle("dark", next === "dark");
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerSnapshot);
  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);
  return { theme, setTheme, toggleTheme };
}
