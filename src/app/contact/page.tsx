"use client";

import { Contacts } from "../components/Contacts";

import {
  TextWrapper,
  SideText,
  SideTitle,
  ContactsPageContainer,
} from "./styles";
import { PiCoffeeFill } from "react-icons/pi";

export default function Contact() {
  return (
    <ContactsPageContainer>
      <TextWrapper>
        <SideTitle>Vamos marcar uma conversa e desenvolver um projeto juntos?</SideTitle>
        <SideText>Se tiver alguma pergunta, fique à vontade para entrar em contato!</SideText>
        <PiCoffeeFill fill="white" size={300} />
      </TextWrapper>
      <Contacts />
    </ContactsPageContainer>
  );
}
