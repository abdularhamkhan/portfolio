"use client";

import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-apple-line bg-apple-card text-apple-ink shadow-apple-sm transition-colors hover:border-apple-border hover:bg-apple-section"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[18px] w-[18px]"
          aria-hidden
        >
          <path d="M12 3a1 1 0 0 0 1-1V1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1Zm0 18a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm9-8a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1ZM4 12a1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm14.95 6.364.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 1 0-1.414 1.414ZM4.636 4.636A1 1 0 0 0 3.222 6.05l.707.707a1 1 0 1 0 1.414-1.414L4.636 4.636ZM17.657 4.05l.707-.707a1 1 0 1 0-1.414 1.414l.707.707A1 1 0 0 0 17.657 4.05ZM6.343 19.95l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[18px] w-[18px]"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.5 10.5 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
