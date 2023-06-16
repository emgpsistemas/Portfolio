"use client";

import { animateScroll100VH } from "@/utils/animateScroll";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import { IsMobileContext } from "@/contexts/isMobile";
import { useContext, useEffect } from "react";
import DifferentialsSection from "./DifferentialsSection";
import HowWeWorkSection from "./HowWeWorkSection";
import ServicesSection from "./ServicesSection";

export default function Servicos() {
  const { isMobile } = useContext(IsMobileContext);

  useEffect(() => {
    if (!isMobile) {
      animateScroll100VH();
    }
  }, [isMobile]);

  return (
    <>
      {isMobile ? null : <InitialScreenTitle title="Serviços" />}
      <ServicesSection />
      <DifferentialsSection />
      <HowWeWorkSection />
    </>
  );
}
