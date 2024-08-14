"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import GlobalStyle from "../../GlobalStyle";
import { StyledContainer } from "../../styles";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default SharedLayout;
