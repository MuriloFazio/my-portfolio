"use client";

import { GithubRepos } from "@/app/components/GithubRepos/GithubRepos";
import { ProjectsPageContainer, Header, SubHeader } from "./styles";


export default function About() {
  return (
    <ProjectsPageContainer>
      <Header>Meus projetos</Header>
            <SubHeader>A lista de repositórios do meu Github.</SubHeader>
      <GithubRepos />
    </ProjectsPageContainer>
  );
}
