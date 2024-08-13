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
} from "./styles";

import Image from "next/image";

import profilePicture from "../../assets/profilePicture.jpg";

export const HeroArea: React.FC = () => {
  return (
    <HeroAreaContainer>
      <GreetingWrapper>
        <Greeting>Hi,</Greeting>
        <StyledName>I'm Murilo Fazio</StyledName>
        <StyledProfission>Front End Developer</StyledProfission>
        <StyledCountry>From Brazil</StyledCountry>
        <StyledButton>Hire me</StyledButton>
      </GreetingWrapper>
      <ImageWrapper>
        <Image
          alt="my profile picture"
          src={profilePicture}
          width={300}
          height={300}
        />
      </ImageWrapper>
    </HeroAreaContainer>
  );
};

export default HeroArea;
