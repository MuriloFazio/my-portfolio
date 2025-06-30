import styled from "styled-components";

import Link from "next/link";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContactMediasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;
`;

export const ContactMedia = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 20px;
`;

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactMediaTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 18px;
`;

export const ContactText = styled.p`
  margin: 0;
  color: white;
  font-size: 16px;
`;

export const ContactButton = styled(Link)`
  color: gray;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
`;
 
export const IconWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

   @media (min-width: 768px) {
    display: flex;
  }
`;