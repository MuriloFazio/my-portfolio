import React from "react";
import {
  NavbarContainer,
  PortfolioWrapper,
  LinkItem,
  ItemsWrapper,
  LinksWrapper,
  NavbarBorder,
} from "./styles";

export const Navbar: React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <ItemsWrapper>
          <PortfolioWrapper>Murilo Fazio</PortfolioWrapper>
          <LinksWrapper>
            <LinkItem href={"/"}>Home</LinkItem>
            <LinkItem href={"/projects"}>Projetos</LinkItem>
            <LinkItem href={"/resume"}>Currículo</LinkItem>
            <LinkItem href={"/contact"}>Contato</LinkItem>
          </LinksWrapper>
        </ItemsWrapper>
      </NavbarContainer>
      <NavbarBorder />
    </>
  );
};

export default Navbar;
