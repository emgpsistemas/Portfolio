"use client";

import { animateScroll100VH } from "@/utils/animateScroll";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import { IsMobile } from "@/utils/isMobile";
import { useEffect } from "react";
import DifferentialsSection from "./DifferentialsSection";
import HowWeWorkSection from "./HowWeWorkSection";
import ServicesSection from "./ServicesSection";

export default function Servicos() {
  const { isMobile } = IsMobile();

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
