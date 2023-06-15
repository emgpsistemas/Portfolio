"use client";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import { animateScroll100VH } from "@/utils/animateScroll";
import { IsMobile } from "@/utils/isMobile";
import { useEffect } from "react";
import { equipe } from "./info";

export default function Sobre() {
  const { isMobile } = IsMobile();

  useEffect(() => {
    if (!isMobile) {
      animateScroll100VH();
    }
  }, [isMobile]);

  return (
    <>
      {isMobile ? null : <InitialScreenTitle title="Sobre Nós" />}
      <section className="mx-auto min-h-screen w-screen max-w-6xl px-10 py-32 md:px-20 lg:p-32">
        <SectionTitle title="Equipe" />
        <div className="mt-20 w-full space-y-10 lg:space-y-20">
          {equipe.map((item) => (
            <TeamMemberCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
