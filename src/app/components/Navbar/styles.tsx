import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #bfbfbf;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
`;

export const LogoWrapper = styled.div`
  padding: 0 12px;
`;

export const LinkWrapper = styled(Link)`
  padding: 0 12px;
  text-decoration: none;
  color: black;
`;
