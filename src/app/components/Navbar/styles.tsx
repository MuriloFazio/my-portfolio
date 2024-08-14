import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #bfbfbf;
  min-height: 125px;
  display: flex;
  justify-content: center;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;

  justify-content: center;

  @media (min-width: 560px) {
    justify-content: space-between;
    padding: 0 20px;
  }
`;

export const PortfolioWrapper = styled.p`
  padding: 0 12px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 40px;
  display: none;

  @media (min-width: 560px) {
    display: flex;
  }
`;

export const LinkItem = styled(Link)`
  padding: 0 12px;
  text-decoration: none;
  color: black;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  @media (min-width: 560px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const LinksWrapper = styled.div``;
