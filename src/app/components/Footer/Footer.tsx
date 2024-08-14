"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/next.svg";
import instagramLogo from "../../assets/instagramIcon.png";
import linkedInLogo from "../../assets/linkedinIcon.png";
import {
  FooterContainer,
  FooterWrapper,
  LogoWrapper,
  ItemsWrapper,
  IconsWrapper,
  LinkWrapper,
} from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoWrapper>
          <Image alt="logo" src={logo} width={72} height={60} />
        </LogoWrapper>
        <ItemsWrapper>
          <LinkWrapper href={"/"}>Home</LinkWrapper>
          <LinkWrapper href={"/about"}>About</LinkWrapper>
          <LinkWrapper href={"/resume"}>Resume</LinkWrapper>
          <LinkWrapper href={"/contact"}>Contact</LinkWrapper>
        </ItemsWrapper>
        <IconsWrapper>
          <LinkWrapper
            href={"https://www.instagram.com/MuriloFazio"}
            target="_blank"
          >
            <Image alt="logo" src={instagramLogo} width={28} height={28} />
          </LinkWrapper>
          <LinkWrapper
            href={"https://www.linkedin.com/in/murilo-fazio-431173120/"}
            target="_blank"
          >
            <Image alt="logo" src={linkedInLogo} width={28} height={28} />
          </LinkWrapper>
        </IconsWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
