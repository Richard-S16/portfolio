import { Document } from "@/components/Document";

export default function PortugueseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Document locale="pt-br">{children}</Document>;
}
