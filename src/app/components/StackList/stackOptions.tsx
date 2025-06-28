import { StackItem } from "./types";

import { FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";

import { IconWrapper } from "./styles";

export const stackOptions: StackItem[] = [
  {
    title: "HTML",
    img: 
      <IconWrapper color="#E67E22">
        <FaHtml5 size={84} fill="darkgray" />
      </IconWrapper>
  },
  {
    title: "CSS",
    img: 
    <IconWrapper color="#3498DB">
      <IoLogoCss3 size={84} fill="darkgray" />
    </IconWrapper>
  },
  {
    title: "JS",
    img: 
    <IconWrapper color="#F1C40F">
      <FaJsSquare size={84} fill="darkgray" />
    </IconWrapper>
  },
  {
    title: "Next",
    img: 
    <IconWrapper color="black">
      <RiNextjsLine size={84} fill="darkgray" />
    </IconWrapper>
  },
  {
    title: "React",
    img: 
    <IconWrapper color="#61dbfb">
      <FaReact size={84} fill="darkgray" />
    </IconWrapper>
  },
  {
    title: "Styled Components",
    img: 
    <IconWrapper color="pink">
      <SiStyledcomponents size={84} fill="darkgray" />
    </IconWrapper>
  },
];