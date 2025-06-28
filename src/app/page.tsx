"use client";

import { HeroArea } from "./components/HeroArea";
import { StackList } from "./components/StackList";
import { stackOptions } from "./components/StackList/stackOptions";

export default function HomePage() {
  return (
    <>
      <HeroArea />
      <StackList stackData={stackOptions}></StackList>
    </>
  );
}
