"use client";

import { Card } from "../components/Card";
import { PageContainer } from "../styles";
import { CardWrapper } from "./styles";

export default function About() {
  return (
    <PageContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          padding: 40,
          overflow: "hidden",
        }}
      >
        <CardWrapper>
          <Card title="About me">
            <p>
              "Hi! I'm Murilo Fazio, a passionate front-end developer with a
              love for programming. My journey in front-end has been driven by a
              curiosity to explore React.js and a commitment to continuous
              learning."
            </p>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card title="About me">
            <p>
              "Hi! I'm Murilo Fazio, a passionate front-end developer with a
              love for programming. My journey in front-end has been driven by a
              curiosity to explore React.js and a commitment to continuous
              learning."
            </p>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card title="About me">
            <p>
              "Hi! I'm Murilo Fazio, a passionate front-end developer with a
              love for programming. My journey in front-end has been driven by a
              curiosity to explore React.js and a commitment to continuous
              learning."
            </p>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card title="About me">
            <p>
              "Hi! I'm Murilo Fazio, a passionate front-end developer with a
              love for programming. My journey in front-end has been driven by a
              curiosity to explore React.js and a commitment to continuous
              learning."
            </p>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card title="About me">
            <p>
              "Hi! I'm Murilo Fazio, a passionate front-end developer with a
              love for programming. My journey in front-end has been driven by a
              curiosity to explore React.js and a commitment to continuous
              learning."
            </p>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card title="About me">
            <p>
              "Hi! I'm Murilo Fazio, a passionate front-end developer with a
              love for programming. My journey in front-end has been driven by a
              curiosity to explore React.js and a commitment to continuous
              learning."
            </p>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card title="About me">
            <p>
              "Hi! I'm Murilo Fazio, a passionate front-end developer with a
              love for programming. My journey in front-end has been driven by a
              curiosity to explore React.js and a commitment to continuous
              learning."
            </p>
          </Card>
        </CardWrapper>
      </div>
    </PageContainer>
  );
}
