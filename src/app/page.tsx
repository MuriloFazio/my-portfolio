"use client";

import { HeroArea } from "./components/HeroArea";
import { StackList } from "./components/StackList";
import { stackOptions } from "./components/StackList/stackOptions";
import { Container } from "./styles"

export default function HomePage() {
  return (
    <Container>
      <HeroArea />
      <StackList stackData={stackOptions}></StackList>
    </Container>
  );
}
