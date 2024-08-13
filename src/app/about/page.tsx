"use client";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { StyledContainer } from "../styles";

export default function About() {
  return (
    <StyledContainer>
      <Navbar />
      <div>About me</div>
      <div>content</div>
      <Footer />
    </StyledContainer>
  );
}
