import { Document } from "@/components/Document";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Document locale="en">{children}</Document>;
}
