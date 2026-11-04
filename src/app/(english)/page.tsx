import { HomePage } from "@/components/HomePage";
import { getDictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/site";

const d = getDictionary("en");
export const metadata = pageMetadata("en", d.meta.title, d.meta.description);

export default function Page() {
  return <HomePage locale="en" />;
}
