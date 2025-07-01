"use client";

import { HeroArea } from "./components/HeroArea";
import { StackList } from "./components/StackList";
import { stackOptions } from "./components/StackList/stackOptions";

import {
  Header, 
  SubHeader, 
  ProjectsPageContainer, 
  TextWrapper,
  SideText,
  SideTitle,
  ContactsPageContainer, 
  HomePageSection,
  HomePageWrapper,
  ProjectsSection,
  StyledSection,
} from "./styles";

import { GithubRepos } from "@/app/components/GithubRepos/GithubRepos";

import { PiCoffeeFill } from "react-icons/pi";

import { Contacts } from "./components/Contacts";

export default function HomePage() {
  return (
    <>
      <HomePageSection id={'main'}>
        <HomePageWrapper>
          <HeroArea />
          <StackList stackData={stackOptions}></StackList>
        </HomePageWrapper>
      </HomePageSection>

      <ProjectsSection id={'projects'}>
        <ProjectsPageContainer>
          <Header>Meus projetos</Header>
          <SubHeader>A lista de repositórios do meu Github.</SubHeader>
          <GithubRepos />
        </ProjectsPageContainer>
      </ProjectsSection>

      <StyledSection>
        <ContactsPageContainer id={'contact'}>
          <TextWrapper>
            <SideTitle>Vamos marcar uma conversa e desenvolver um projeto juntos?</SideTitle>
            <SideText>Se tiver alguma pergunta, fique à vontade para entrar em contato!</SideText>
            <PiCoffeeFill fill="white" size={300} />
          </TextWrapper>
          <Contacts />
        </ContactsPageContainer>
      </StyledSection>
    </>
  );
}
