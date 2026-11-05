import { NotFoundContent } from "@/components/NotFoundContent";
import { getDictionary } from "@/lib/dictionary";

export const metadata = {
  title: `${getDictionary("pt-br").notFound.title} — Richard Schmidt`,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <NotFoundContent locale="pt-br" />;
}
