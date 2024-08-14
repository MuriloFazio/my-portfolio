import React from "react";

import {
  HeroAreaContainer,
  GreetingWrapper,
  ImageWrapper,
  StyledCountry,
  Greeting,
  StyledName,
  StyledProfission,
  StyledButton,
  StyledImage,
} from "./styles";

import profilePicture from "../../assets/profilePicture.jpg";
import Link from "next/link";

export const HeroArea: React.FC = () => {
  return (
    <HeroAreaContainer>
      <GreetingWrapper>
        <Greeting>Hi,</Greeting>
        <StyledName>I'm Murilo Fazio</StyledName>
        <StyledProfission>Front End Developer</StyledProfission>
        <StyledCountry>From Brazil</StyledCountry>
        <Link href="/contact">
          <StyledButton type="button">Hire me</StyledButton>
        </Link>
      </GreetingWrapper>
      <ImageWrapper>
        <StyledImage alt="my profile picture" src={profilePicture} />
      </ImageWrapper>
    </HeroAreaContainer>
  );
};

export default HeroArea;
