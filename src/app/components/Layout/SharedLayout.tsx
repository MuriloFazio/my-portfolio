"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import GlobalStyle from "../../GlobalStyle";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { PageContainer } from "./styles";

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <GlobalStyle />
        <body>
          <main>
            <PageContainer>
            <Navbar />
              {children}
            <Footer />
            </PageContainer>
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}

export default SharedLayout;
