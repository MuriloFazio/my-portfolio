import React from "react";

import {
  HeroAreaContainer,
  GreetingWrapper,
  Greeting,
  StyledDescription,
  StyledButton,
  StyledImage,
  ButtonsWrapper,
  GithubWrapper,
} from "./styles";

import profilePicture from "../../assets/profilePic2.jpg";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { userData } from "@/app/utils/userData";

export const HeroArea: React.FC = () => {
  return (
    <HeroAreaContainer>
      <GreetingWrapper>
        <StyledImage alt="my profile picture" src={profilePicture} />
        <Greeting>Olá, meu nome é {userData.nameUser} 👋</Greeting>
      </GreetingWrapper>
      <StyledDescription>Eu sou um programador front-end fascinado em criar desenvolver novas idéias</StyledDescription>
      <ButtonsWrapper>
        <Link href="/#projects">
          <StyledButton type="button">Ver projetos</StyledButton>
        </Link>
        <GithubWrapper>
        <Link href={`https://github.com/${userData.githubUser}`} target="_blank">
          <FaGithub fill="black"/>
        </Link>
        </GithubWrapper>
      </ButtonsWrapper>
    </HeroAreaContainer>
  );
};

export default HeroArea;
