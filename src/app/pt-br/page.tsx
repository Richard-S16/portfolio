import { HomePage } from "@/components/HomePage";
import { getDictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/site";

const d = getDictionary("pt-br");
export const metadata = pageMetadata("pt-br", d.meta.title, d.meta.description);

export default function Page() {
  return <HomePage locale="pt-br" />;
}
