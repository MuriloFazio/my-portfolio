import styled from "styled-components";

import Image from "next/image";

export const HeroAreaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: column-reverse;
  gap: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  //background-color: ${(props) => props.theme.backgroundColor.primary};
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  border-radius: 40px;

  width: 250px;
  height: 250px;

  @media (min-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media (min-width: 1200px) {
    width: 400px;
    height: 400px;
  }
`;

export const Greeting = styled.div`
  color: ${(props) => props.theme.colors.primary};

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  @media (min-width: 1200px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }
`;

export const StyledName = styled.div`
  color: ${(props) => props.theme.colors.primary};

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  @media (min-width: 1200px) {
    font-weight: 700;
    font-size: 48px;
    line-height: 52px;
  }
`;

export const StyledProfission = styled.div`
  color: ${(props) => props.theme.colors.secondary};

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  @media (min-width: 1200px) {
    font-weight: 700;
    font-size: 48px;
    line-height: 52px;
  }
`;

export const StyledCountry = styled.div`
  color: ${(props) => props.theme.colors.primary};

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  @media (min-width: 1200px) {
    font-weight: 700;
    font-size: 42px;
    line-height: 44px;
  }
`;

export const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
    align-items: flex-start;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    gap: 16px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 80px;
  height: 40px;
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
