"use client";

import GoToServicesPage from "@/components/GotoServicePage";
import { animateScroll100VH } from "@/utils/animateScroll";
import { useEffect } from "react";

export default function Servicos() {
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (!isMobile) {
      animateScroll100VH();
    }
  }, []);

  return (
    <>
      {isMobile ? null : (
        <div className="relative grid h-screen grid-flow-row grid-cols-1 items-center lg:grid-cols-2">
          <div className="flex justify-start p-32">
            <h1 className="text-[40px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
              Serviços
            </h1>
          </div>
          <GoToServicesPage />
        </div>
      )}
      <div className="mx-auto min-h-screen w-screen max-w-5xl  p-32">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-[40px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
              Serviços
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
