import { animateScroll100VH } from "@/utils/animateScroll";
import { CaretDoubleDown } from "phosphor-react";
import { useState } from "react";

function Scroll100VHIcon() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="absolute bottom-24 right-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer"
      onClick={() => animateScroll100VH(0)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CaretDoubleDown
        size={32}
        color="#191938"
        weight={isHovering ? "bold" : "regular"}
      />
    </div>
  );
}

export default Scroll100VHIcon;
