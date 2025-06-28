import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #15161A;
  position: fixed;
  bottom: 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const StyledReminder = styled.p`
  color: white;
  justify-self: center;
`;

