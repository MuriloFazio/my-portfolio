import React from "react";
import Image from "next/image";
import {
  NavbarContainer,
  LogoWrapper,
  LinkWrapper,
  ItemsWrapper,
} from "./styles";
import logo from "../../../../public/next.svg";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <ItemsWrapper>
        <LogoWrapper>
          <Image alt="logo" src={logo} width={48} height={48} />
        </LogoWrapper>
        <LinkWrapper href={"/"}>Home</LinkWrapper>
        <LinkWrapper href={"/about"}>About</LinkWrapper>
        <LinkWrapper href={"/contact"}>Contact</LinkWrapper>
      </ItemsWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
