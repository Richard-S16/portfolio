"use client";

import { useEffect } from "react";

export function ThemeToggle({ label }: { label: string }) {
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    function sync() {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        /* System preference works without storage. */
      }
      if (saved !== "light" && saved !== "dark")
        document.documentElement.dataset.theme = query.matches
          ? "dark"
          : "light";
    }
    sync();
    query.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => {
      query.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function toggle() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* The current tab still updates if storage is unavailable. */
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={toggle}
    >
      <svg
        aria-hidden="true"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 4.5v15a7.5 7.5 0 0 0 0-15Z" fill="currentColor" />
      </svg>
    </button>
  );
}
