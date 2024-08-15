import React from "react";
import { CardProps } from "./types";

import {
  CardContainer,
  ContentWrapper,
  Title,
  TitleDescriptionWrapper,
  Description,
} from "./styles";

export const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <CardContainer>
      <TitleDescriptionWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleDescriptionWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </CardContainer>
  );
};

export default Card;
