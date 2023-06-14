"use client";

import Scroll100VHIcon from "@/components/Scroll100VHIcon";
import ServiceInfo from "@/components/ServiceInfo";
import { animateScroll100VH } from "@/utils/animateScroll";

import DifferentialInfoCard from "@/components/DifferentialInfoCard";
import { isMobile } from "@/utils/isMobile";
import { useEffect } from "react";
import { diferenciais, servicos } from "./info";

export default function Servicos() {
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
          <Scroll100VHIcon />
        </div>
      )}
      <div className="mx-auto min-h-screen w-screen max-w-6xl px-11 py-32 lg:p-32">
        <div className="flex justify-center">
          <h1 className="text-[32px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
            Serviços
          </h1>
        </div>
        <div className="mt-12 w-full space-y-10 lg:space-y-20">
          {servicos.map((servico) => (
            <ServiceInfo key={servico.id} {...servico} />
          ))}
        </div>
      </div>
      <div className="min-h-screen w-full bg-background-blue">
        <div className="mx-auto w-full max-w-6xl px-11 py-32 lg:p-32">
          <div className="flex justify-center">
            <h1 className="text-[32px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
              Nossos Diferenciais
            </h1>
          </div>
          <div className="mt-12 grid w-full grid-flow-row-dense grid-cols-1 gap-10 lg:grid-cols-2">
            {diferenciais.map((diferencial) => (
              <DifferentialInfoCard key={diferencial.id} {...diferencial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
