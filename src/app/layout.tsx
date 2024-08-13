import type { Metadata } from "next";

import { LayoutThemeProvider } from "./theme-provider-layout";

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
        <LayoutThemeProvider>{children}</LayoutThemeProvider>
      </body>
    </html>
  );
}
