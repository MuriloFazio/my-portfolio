import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projectos",
  description: "Projects page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
