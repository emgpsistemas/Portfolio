"use client";

import ContactSection from "@/components/ContactSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HomeSection from "@/components/HomeSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ServicesSection from "@/components/ServicesSection";
import TeamInfoSection from "@/components/TeamInfoSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ServicesSection />
      <DifferentialsSection />
      <HowWeWorkSection />
      <TeamInfoSection />
      <ContactSection />
    </>
  );
}
