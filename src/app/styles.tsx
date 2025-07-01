import styled from "styled-components";
import backgroundImg from "./assets/header-bg.svg"

const { src } = backgroundImg;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 78vh;
  padding-top: 90px;
  border-top: 1px solid white;
`;

export const HomePageSection = styled(StyledSection)`
@media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    background-image: url(${src});
    background-position: right -30% center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }  

@media (min-width: ${(props) => props.theme.breakpoint.wide}) {
  background-position: right;
}
`;

export const ProjectsSection = styled(StyledSection)`
  background-color: #15161A;
  padding-bottom: 80px;
`;

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: center;
  
  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    align-self: flex-start;
    padding-left: 80px; 
    gap: 80px;
  }

`;

// projects

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h2`
  color: white;
  font-size: 2em;
  margin-bottom: 10px;
`;

export const SubHeader = styled.p`
  color: lightgray;
  font-size: 1.2em;
  margin-bottom: 20px;
`;

// contact

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  flex-grow: 1;
`;

export const TextWrapper = styled.div`
  display: none;
  @media(min-width: ${(props) => props.theme.breakpoint.mobile}){
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const ContactText = styled.p`
  color: white;
  font-size: 16px;
  margin: 0;
`;

export const ContactTitle = styled.p`
  color: white;
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

export const CoffeeImageWrapper = styled.div`
  display: none;
  @media(min-width: ${(props) => props.theme.breakpoint.mobile}){
    display: flex;  
    height: 250px;
    width: 250px;
    padding: 20px 0;
  }
`;
