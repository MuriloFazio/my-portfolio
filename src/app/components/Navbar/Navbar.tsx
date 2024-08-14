import React from "react";
import {
  NavbarContainer,
  PortfolioWrapper,
  LinkItem,
  ItemsWrapper,
  LinksWrapper,
} from "./styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <ItemsWrapper>
        <PortfolioWrapper>Portfolio.</PortfolioWrapper>
        <LinksWrapper>
          <LinkItem href={"/"}>Home</LinkItem>
          <LinkItem href={"/about"}>About</LinkItem>
          <LinkItem href={"/resume"}>Resume</LinkItem>
          <LinkItem href={"/contact"}>Contact</LinkItem>
        </LinksWrapper>
      </ItemsWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
