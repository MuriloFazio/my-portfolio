"use client";

import { Footer } from "./components/Footer";
import { HeroArea } from "./components/HeroArea";
import { Navbar } from "./components/Navbar";
import { StyledContainer } from "./styles";

import ThemeProviderLayout from "./theme-provider-layout";

export default function Contact() {
  return (
    <ThemeProviderLayout>
      <StyledContainer>
        <Navbar />
        <HeroArea />
        <div>Content</div>
        <Footer />
      </StyledContainer>
    </ThemeProviderLayout>
  );
}
