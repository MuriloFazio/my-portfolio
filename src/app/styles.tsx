import styled from "styled-components";

export const HomePageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 78vh;
  padding-top: 90px;
  border-top: 1px solid white;
`;

// projects

export const ProjectsPageContainer = styled.div`
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

export const ContactsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: white;
    flex-grow: 1;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const SideText = styled.p`
  color: white;
  font-size: 16px;
  margin: 0;
`;

 export const SideTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;