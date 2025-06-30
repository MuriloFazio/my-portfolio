"use client";

import {
  ResumeContainer,
  ContentWrapper,
  Header,
  SubHeader,
  Paragraph,
  List,
  Link,
  ListItem,
  Strong,
} from "./styles";

export default function Resume() {
  return (
      <ResumeContainer>
        <Header>Murilo Fazio de Souza e Silva</Header>
        <ContentWrapper>
          <Paragraph>
            <Strong>
              Desenvolvedor Frontend | React, Next.js, Styled-components
            </Strong>
          </Paragraph>
          <Paragraph>
            📍 Ribeirão Preto - SP | 💻 Disponível para trabalho remoto
          </Paragraph>
          <Paragraph>
            📧{" "}
            <Link href="mailto:faziomurilo@gmail.com">
              faziomurilo@gmail.com
            </Link>{" "}
            | 📱 (16) 99210-9683
          </Paragraph>
          <Paragraph>
            🌐{" "}
            <Link href="https://linkedin.com/in/murilofazio">
              linkedin.com/in/murilofazio
            </Link>{" "}
            |{" "}
            <Link href="https://github.com/MuriloFazio">
              github.com/MuriloFazio
            </Link>
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <SubHeader>⚖️ Habilidades Técnicas</SubHeader>
          <List>
            <ListItem>
              <Strong style={{ fontWeight: "bold" }}>Linguagens:</Strong>{" "}
              JavaScript (ES6+), TypeScript, HTML, CSS
            </ListItem>
            <ListItem>
              <Strong style={{ fontWeight: "bold" }}>Frameworks:</Strong>{" "}
              React.js, Next.js
            </ListItem>
            <ListItem>
              <Strong style={{ fontWeight: "bold" }}>Estilização:</Strong>{" "}
              Styled-components, Material UI
            </ListItem>
            <ListItem>
              <Strong style={{ fontWeight: "bold" }}>
                Gerenciamento de estado:
              </Strong>{" "}
              Jotai
            </ListItem>
            <ListItem>
              <Strong style={{ fontWeight: "bold" }}>Integrações:</Strong> REST
              APIs, OpenAI, MongoDB (incluindo Vector Search), BFF
            </ListItem>
            <ListItem>
              <Strong style={{ fontWeight: "bold" }}>Ferramentas:</Strong> Git,
              GitHub, VS Code, Figma
            </ListItem>
            <ListItem>
              <Strong style={{ fontWeight: "bold" }}>Outros:</Strong> Node.js,
              autenticação, permissões por usuário, reconhecimento de voz
            </ListItem>
          </List>
        </ContentWrapper>

        <ContentWrapper>
          <SubHeader>💼 Experiência Profissional</SubHeader>
          <Paragraph>
            <Strong>Freelancer / Projetos pessoais</Strong> — 2025 - atual
          </Paragraph>
          <List>
            <ListItem>
              Desenvolvimento do assistente virtual Zeta com integração ao
              ChatGPT e base de conhecimento da empresa
            </ListItem>
            <ListItem>
              Integração com banco de dados MongoDB e uso de busca vetorial com
              embeddings
            </ListItem>
          </List>

          <Paragraph>
            <Strong>Gorila - Desenvolvedor Front End Junior</Strong> — 03/2022 -
            08/2024
          </Paragraph>
          <List>
            <ListItem>
              Desenvolvimento e manutenção de aplicações utilizando React.js,
              Next.js e Node.js
            </ListItem>
            <ListItem>
              Criação de design system próprio com styled-components
            </ListItem>
            <ListItem>
              Gerenciamento de código com Git e colaboração em equipe
            </ListItem>
          </List>

          <Paragraph>
            <Strong>Nestlé - Desenvolvedor Junior</Strong> — 09/2019 - 01/2021
          </Paragraph>
          <List>
            <ListItem>Automação de processos internos com AutoHotKey</ListItem>
            <ListItem>
              Atuação como Scrum Master e manutenção de sistemas
            </ListItem>
          </List>

          <Paragraph>
            <Strong>Banco do Brasil - Estágio</Strong> — 03/2015 - 11/2016
          </Paragraph>
          <List>
            <ListItem>
              Suporte à microinformática e participação em melhorias de
              infraestrutura
            </ListItem>
          </List>
        </ContentWrapper>

        <ContentWrapper>
          <SubHeader>🎓 Formação Acadêmica</SubHeader>
          <Paragraph>
            <Strong>Ciência da Computação</Strong> — Faculdade Uniseb/Estácio de
            Sá — Ribeirão Preto, SP
          </Paragraph>
        </ContentWrapper>

        <ContentWrapper>
          <SubHeader>🌐 Idiomas</SubHeader>
          <List>
            <ListItem>Português: Fluente</ListItem>
            <ListItem>Inglês: Fluente</ListItem>
          </List>
        </ContentWrapper>

        <ContentWrapper>
          <SubHeader>📚 Projetos em Destaque</SubHeader>
          <List>
            <ListItem>
              <Link href="https://github.com/MuriloFazio/zeta">Chatbot Zeta</Link>:
              Assistente pessoal com contexto persistente, usando OpenAi e
              MongoDB
            </ListItem>
          </List>
        </ContentWrapper>
      </ResumeContainer>
  );
}
