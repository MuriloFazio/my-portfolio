import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Resume page",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
