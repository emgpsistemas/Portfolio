"use client";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import { IsMobileContext } from "@/contexts/isMobile";
import { animateScroll100VH } from "@/utils/animateScroll";
import { useContext, useEffect } from "react";
import { equipe } from "./info";

export default function Sobre() {
  const { isMobile } = useContext(IsMobileContext);

  useEffect(() => {
    if (!isMobile) {
      animateScroll100VH();
    }
  }, [isMobile]);

  return (
    <>
      {isMobile ? null : <InitialScreenTitle title="Sobre Nós" />}
      <SectionContainer>
        <SectionTitle title="Equipe" />
        <div className="mt-20 w-full space-y-10 lg:space-y-20">
          {equipe.map((item) => (
            <TeamMemberCard key={item.id} {...item} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
