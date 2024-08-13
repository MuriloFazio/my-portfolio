import styled from "styled-components";

export const HeroAreaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 40px 0;
`;

export const ImageWrapper = styled.div`
  border-radius: 40px;
  overflow: hidden;
`;

export const Greeting = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 80px;
`;

export const StyledName = styled.div``;

export const StyledCountry = styled.div``;

export const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledProfission = styled.div``;

export const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
`;
