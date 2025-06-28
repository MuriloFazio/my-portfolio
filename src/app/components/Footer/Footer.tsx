"use client";

import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  LinkWrapper,
  StyledReminder,
} from "./styles";

import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { userData } from "@/app/utils/userData";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <StyledReminder>Me siga nas redes sociais:</StyledReminder>
      <FooterWrapper>
          <LinkWrapper
            href={`https://www.instagram.com/${userData.instagramUser}`}
            target="_blank"
            style={{backgroundColor: '#e56969'}}
          >
            <FaInstagram fill="white" />
          </LinkWrapper>
          <LinkWrapper
            href={`https://www.facebook.com/${userData.facebookUser}`}
            target="_blank"
            style={{backgroundColor: '#0866FF'}}
          >
            <FaFacebook fill="white" />
          </LinkWrapper>
          <LinkWrapper
            href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
            target="_blank"
            style={{backgroundColor: '#0077b5'}}
          >
            <FaLinkedin fill="white" />
          </LinkWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
