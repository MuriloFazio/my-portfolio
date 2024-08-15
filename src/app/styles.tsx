import styled from "styled-components";
import backgroundImage from "./assets/backgroundImage3.png";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-image: url(${backgroundImage["src"]});
  background-size: cover;
`;
