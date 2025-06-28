import React from "react";

import {
  Container,
  ContactMediasWrapper,
  ContactMedia,
  ContactText,
  ContactMediaTitle,
  ContactButton,
  TextWrapper,
  SideText,
  SideTitle,
  IconWrapper,
  MediaWrapper,
} from "./styles";

import { userData } from "@/app/utils/userData";
import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";

export const Contacts: React.FC = () => {
  return (
    <Container className="contact">
      <TextWrapper>
        <SideTitle>Vamos marcar uma conversa e desenvolver um projeto juntos?</SideTitle>
        <SideText>Se tiver alguma pergunta, fique à vontade para entrar em contato!</SideText>
        <PiCoffeeFill fill="white" size={300} />
      </TextWrapper>
      <ContactMediasWrapper>
        <ContactMedia>
          <IconWrapper style={{ backgroundColor: "#25D366" }}>
            <FaWhatsapp color="#fff" size={24} />
          </IconWrapper>
          <MediaWrapper>
            <ContactMediaTitle>Meu Whatsapp</ContactMediaTitle>
            <ContactText>Estou disponível para mensagens de voz, vamos falar sobre criatividade?</ContactText>
            <ContactButton
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>
              Enviar mensagem
            </ContactButton>
          </MediaWrapper>
        </ContactMedia>
        <ContactMedia>
          <IconWrapper style={{ backgroundColor: "#EA4335" }}>
            <FaEnvelopeOpen color="#fff" size={24} />
          </IconWrapper>
          <MediaWrapper>
            <ContactMediaTitle>Meu email</ContactMediaTitle>
            <ContactText>Me envie um email, passando seus feedback, sugestões e novas ideias.</ContactText>
            <ContactButton
              target="_blank"
              href={`mailto:${userData.emailUser}`}>
              Enviar email
            </ContactButton>
          </MediaWrapper>
        </ContactMedia>
        <ContactMedia>
          <IconWrapper style={{ backgroundColor: "#0077B5" }}>
            <FaLinkedin color="#fff" size={24} />
          </IconWrapper>
          <MediaWrapper>
            <ContactMediaTitle>Meu Linkedin</ContactMediaTitle>
            <ContactText>Vamos criar intenrações mais constantes, e montar uma rede de compartilhamento de ideias</ContactText>
            <ContactButton
              target="_blank"
              href={`https://linkedin.com/in/${userData.linkedinUser}`}
            >
              Acessar Lindekin
            </ContactButton>
          </MediaWrapper>
        </ContactMedia>
      </ContactMediasWrapper>
    </Container>
  );
}

export default Contacts;