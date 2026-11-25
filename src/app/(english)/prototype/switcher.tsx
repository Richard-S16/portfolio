"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Arrow } from "@/components/Arrow";
import { variants } from "./variants";
import s from "./prototype.module.css";

export function PrototypeSwitcher({ index }: { index: number }) {
  const router = useRouter();
  const url = (delta: number) => `/prototype?variant=${variants[(index + delta + variants.length) % variants.length].key}`;
  const previous = url(-1);
  const next = url(1);

  useEffect(() => {
    function cycle(event: KeyboardEvent) {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || target.matches("input, textarea, select"))) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      router.replace(event.key === "ArrowLeft" ? previous : next);
    }
    window.addEventListener("keydown", cycle);
    return () => window.removeEventListener("keydown", cycle);
  }, [router, previous, next]);

  return (
    <nav className={s.switcher} aria-label="Compare prototypes">
      <Link href={previous} replace aria-label="Previous prototype"><Arrow direction="left" /></Link>
      <span aria-live="polite"><small>Prototype {index + 1} / {variants.length}</small><strong>{variants[index].name}</strong></span>
      <Link href={next} replace aria-label="Next prototype"><Arrow /></Link>
    </nav>
  );
}
