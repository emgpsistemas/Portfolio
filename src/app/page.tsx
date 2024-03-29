"use client";

import ContactSection from "@/components/ContactSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HomeSection from "@/components/HomeSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TeamInfoSection from "@/components/TeamInfoSection";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HomeSection />
      <ServicesSection />
      <DifferentialsSection />
      <HowWeWorkSection />
      <PortfolioSection />
      <TeamInfoSection />
      <ContactSection />
    </>
  );
}
