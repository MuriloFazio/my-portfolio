"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import GlobalStyle from "../../GlobalStyle";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <main style={{ height: "100vh" }}>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default SharedLayout;
