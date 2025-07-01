import styled from "styled-components";

import Link from "next/link";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
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
  flex-direction: column;
  @media(min-width: ${(props) => props.theme.breakpoint.mobile}){
    flex-direction: row;
  }

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
  color: lightgray;
  font-size: 16px;
`;

export const ContactButton = styled(Link)`
  color: gray;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;
 
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 25%;
`;