import React from "react";
import {
  NavbarContainer,
  PortfolioWrapper,
  LinkItem,
  ItemsWrapper,
  LinksWrapper,
  NavbarBorder,
  LinksButton,
  ButtonLinksWrapper,
} from "./styles";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <NavbarContainer>
        <ItemsWrapper>
          <PortfolioWrapper>Murilo Fazio</PortfolioWrapper>
          <LinksButton onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen ? <IoClose fill="white" size={'24px'}/> : <FaBars fill="white"/>
          }
          </LinksButton>
          <LinksWrapper>
            <LinkItem href={"/"}>Home</LinkItem>
            <LinkItem href={"/#projects"}>Projetos</LinkItem>
            <LinkItem href={"/#contact"}>Contato</LinkItem>
            <LinkItem href={"/resume"}>Currículo</LinkItem>
          </LinksWrapper>
          {
            isOpen &&
          <ButtonLinksWrapper>
            <LinkItem href={"/"} onClick={() => setIsOpen(false)}>Home</LinkItem>
            <LinkItem href={"/#projects"} onClick={() => setIsOpen(false)}>Projetos</LinkItem>
            <LinkItem href={"/#contact"} onClick={() => setIsOpen(false)}>Contato</LinkItem>
            <LinkItem href={"/resume"} onClick={() => setIsOpen(false)}>Currículo</LinkItem>
          </ButtonLinksWrapper>
          }
        </ItemsWrapper>
      </NavbarContainer>
      <NavbarBorder />
    </>
  );
};

export default Navbar;
