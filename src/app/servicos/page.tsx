"use client";

import { animateScroll100VH } from "@/utils/animateScroll";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import { isMobile } from "@/utils/isMobile";
import { useEffect } from "react";
import DifferentialsSection from "./DifferentialsSection";
import HowWeWorkSection from "./HowWeWorkSection";
import ServicesSection from "./ServicesSection";

export default function Servicos() {
  useEffect(() => {
    if (!isMobile) {
      animateScroll100VH();
    }
  }, []);

  return (
    <>
      {isMobile ? null : <InitialScreenTitle title="Serviços" />}
      <ServicesSection />
      <DifferentialsSection />
      <HowWeWorkSection />
    </>
  );
}
