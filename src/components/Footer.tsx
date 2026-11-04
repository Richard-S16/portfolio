import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const { footer } = getDictionary(locale);
  return (
    <footer className="site-footer wrap">
      <p>© {new Date().getFullYear()} Richard Schmidt</p>
      <p>{footer.note}</p>
      <a href="#top">
        {footer.top}
        <span aria-hidden="true"> ↑</span>
      </a>
    </footer>
  );
}
