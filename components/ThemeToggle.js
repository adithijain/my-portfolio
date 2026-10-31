"use client";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage can be blocked; the theme still switches for this visit */
    }
  }

  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={toggle}
      aria-label="Switch between dark and light theme"
      title="Switch theme"
    >
      <Sun className="icon-sun" size={18} aria-hidden="true" />
      <Moon className="icon-moon" size={18} aria-hidden="true" />
    </button>
  );
}
