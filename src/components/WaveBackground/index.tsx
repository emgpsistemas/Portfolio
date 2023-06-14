"use client";

import Image from "next/image";
import waves from "../../assets/waves-background.svg";

function WaveBackground() {
  return (
    <div className="absolute right-0 top-0 -z-50">
      <Image
        src={waves}
        alt="waves"
        width={592}
        height={280}
        className="w-full object-cover"
      />
    </div>
  );
}

export default WaveBackground;
