import type { Metadata } from "next";

import { SharedLayout } from "./components/Layout";

export const metadata: Metadata = {
  title: "Murilo's Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}
