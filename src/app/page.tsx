"use client";

import GoToServicesPage from "@/components/GotoServicePage";

export default function Home() {
  return (
    <>
      <div className="grid h-screen grid-flow-row grid-cols-1 items-center lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end">
          <div className="flex flex-col ">
            <h1 className="text-[40px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
              EMGP Sistemas
            </h1>
            <h2 className="text-[16px] font-normal leading-none md:text-3xl lg:text-[44px]">
              Web Fullstack & Mobile Development
            </h2>
          </div>
        </div>
      </div>
      <GoToServicesPage />
    </>
  );
}
