import "server-only";
import { en } from "@/data/en";
import { ptBr } from "@/data/pt-br";
import type { Locale } from "./site";

export function getDictionary(locale: Locale) {
  return locale === "en" ? en : ptBr;
}
