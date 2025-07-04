"use client";

import { HeroArea } from "./components/HeroArea";
import { StackList } from "./components/StackList";
import { stackOptions } from "./components/StackList/stackOptions";

import {
  Header,
  SubHeader,
  ProjectsContainer,
  TextWrapper,
  ContactText,
  ContactTitle,
  ContactsContainer,
  HomePageSection,
  HomePageWrapper,
  ProjectsSection,
  StyledSection,
  CoffeeImageWrapper,
} from "./styles";

import { GithubRepos } from "@/app/components/GithubRepos/GithubRepos";
import { ReactComponent } from "./assets/svg/CoffeeCupComponent";
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
        <ProjectsContainer>
          <Header>Projetos em Destaque</Header>
          <SubHeader>
            Soluções que desenvolvi para resolver problemas reais.
            Cada projeto conta uma história de criatividade e técnica.
          </SubHeader>
          <GithubRepos />
        </ProjectsContainer>
      </ProjectsSection>

      <StyledSection>
        <ContactsContainer id={'contact'}>
          <TextWrapper>
            <ContactTitle>Vamos marcar uma conversa e desenvolver um projeto juntos?</ContactTitle>
            <ContactText>Se tiver alguma pergunta, fique à vontade para entrar em contato!</ContactText>
            <CoffeeImageWrapper>
              <ReactComponent style={{ fill: 'white' }} />
            </CoffeeImageWrapper>
          </TextWrapper>
          <Contacts />
        </ContactsContainer>
      </StyledSection>
    </>
  );
}
