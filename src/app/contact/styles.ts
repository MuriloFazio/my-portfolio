import styled from "styled-components";

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