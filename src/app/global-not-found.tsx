import { Document } from "@/components/Document";
import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata = {
  title: "Page not found — Richard Schmidt",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <Document locale="en">
      <NotFoundContent locale="en" />
    </Document>
  );
}
