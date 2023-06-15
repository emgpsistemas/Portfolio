"use client";

import { IsMobile } from "@/utils/isMobile";
import Image from "next/image";
import { usePathname } from "next/navigation";
import wavesMobile from "../../assets/waves-background-mobile.svg";
import waves from "../../assets/waves-background.svg";

function WaveBackground() {
  const pathname = usePathname();
  const { isMobile } = IsMobile();

  switch (true) {
    case pathname === "/":
      return (
        <div className="absolute right-0 top-0 -z-50 flex h-screen flex-1">
          <Image
            src={isMobile ? wavesMobile : waves}
            alt="waves"
            width={1503}
            height={973}
            className="flex h-full w-full flex-1 object-cover"
          />
        </div>
      );
    case pathname !== "/" && !isMobile:
      return (
        <div className="absolute right-0 top-0 -z-50 flex h-screen flex-1">
          <Image
            src={isMobile ? wavesMobile : waves}
            alt="waves"
            width={1503}
            height={973}
            className="flex h-full w-full flex-1 object-cover"
          />
        </div>
      );
    default:
      return null;
  }
}

export default WaveBackground;
