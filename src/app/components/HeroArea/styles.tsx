import styled from "styled-components";
import Image from "next/image";

export const HeroAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
`;

export const GreetingWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  border-radius: 25%;
  width: 80px;
  height: 80px;
`;

export const Greeting = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
`;

export const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  margin: 0;
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  color: #15161A;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 48px;
  width: 160px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const GithubWrapper = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
  justify-content: center;
  align-items: center;
`;
