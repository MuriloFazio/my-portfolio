import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid black;
  align-items: center;
  @media (min-width: 460px) {
    padding: 32px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 8px 0;
  @media (min-width: 560px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const LogoWrapper = styled.div``;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: black;
`;
