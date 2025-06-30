import React from "react";

import {
  Container,
  ContactMediasWrapper,
  ContactMedia,
  ContactText,
  ContactMediaTitle,
  ContactButton,
  IconWrapper,
  MediaWrapper,
} from "./styles";

import { ContactProps } from "./types";
import { ContactMediaOptions } from './ContactOptions';

const Contact: React.FC<ContactProps> = ({
  backgroundColor,
  icon,
  title,
  text,
  link,
}) => {
  return (
   <ContactMedia>
          <IconWrapper style={{ backgroundColor: backgroundColor }}>
            {icon}
          </IconWrapper>
          <MediaWrapper>
            <ContactMediaTitle>{title}</ContactMediaTitle>
            <ContactText>{text}</ContactText>
            <ContactButton
              target="_blank"
              href={link}>
              Enviar mensagem
            </ContactButton>
          </MediaWrapper>
        </ContactMedia>
  )
};

export const Contacts: React.FC = () => {
  return (
    <Container>
      <ContactMediasWrapper>
        {ContactMediaOptions.map((contact, index) => (
          <Contact
            key={index}
            icon={contact.icon}
            backgroundColor={contact.backgroundColor}
            title={contact.title}
            text={contact.text}
            link={contact.link}
          />
        ))}
      </ContactMediasWrapper>
    </Container>
  );
}

export default Contacts;
