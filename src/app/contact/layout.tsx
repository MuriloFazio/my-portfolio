import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact page",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
