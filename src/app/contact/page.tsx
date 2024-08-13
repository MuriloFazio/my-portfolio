"use client";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { StyledContainer } from "../styles";

export default function Contact() {
  return (
    <StyledContainer>
      <Navbar />
      <div>Contact Page</div>
      <div>Content</div>
      <Footer />
    </StyledContainer>
  );
}
