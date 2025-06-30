import { userData } from "@/app/utils/userData";
import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";

export const ContactMediaOptions = [
  {
    icon: <FaWhatsapp color="#fff" size={24} />,
    backgroundColor: "#25D366",
    title: "Meu WhatsApp",
    text: "Estou disponível trocar uma idéia, vamos falar sobre criatividade?",
    link: `https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}`,
  },
  {
    icon: <FaEnvelopeOpen color="#fff" size={24} />,
    backgroundColor: "#EA4335",
    title: "Meu email",
    text: "Me envie um email, passando seus feedback, sugestões e novas ideias.",
    link: `mailto:${userData.emailUser}`,
  },
  {
    icon: <FaLinkedin color="#fff" size={24} />,
    backgroundColor: "#0077B5",
    title: "Meu Linkedin",
    text: "Vamos criar intenrações mais constantes, e montar uma rede de compartilhamento de ideias",
    link: `https://linkedin.com/in/${userData.linkedinUser}`,
  },
]