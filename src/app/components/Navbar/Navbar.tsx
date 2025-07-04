import React, { useEffect, useState } from "react";
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
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
  if (!isMobile && isOpen) {
    setIsOpen(false);
  }
}, [isMobile, isOpen]);

  const renderLinks = () => (
    <>
      <LinkItem href="/" onClick={() => setIsOpen(false)}>Home</LinkItem>
      <LinkItem href="/#projects" onClick={() => setIsOpen(false)}>Projetos</LinkItem>
      <LinkItem href="/#contact" onClick={() => setIsOpen(false)}>Contato</LinkItem>
      <LinkItem href="/resume" onClick={() => setIsOpen(false)}>Currículo</LinkItem>
    </>
  );

  return (
    <>
      <NavbarContainer>
        <ItemsWrapper>
          <PortfolioWrapper>Murilo Fazio</PortfolioWrapper>
          {isMobile ? (
            <>
              <LinksButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose fill="white" size="24px" /> : <FaBars fill="white" />}
              </LinksButton>
              {isOpen && <ButtonLinksWrapper>{renderLinks()}</ButtonLinksWrapper>}
            </>
          ) : (
            <LinksWrapper>{renderLinks()}</LinksWrapper>
          )}
        </ItemsWrapper>
      </NavbarContainer>
      <NavbarBorder />
    </>
  );
};
