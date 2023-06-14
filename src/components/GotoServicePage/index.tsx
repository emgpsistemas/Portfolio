import Link from "next/link";
import { CaretDoubleDown } from "phosphor-react";
import { useState } from "react";

function GoToServicesPage() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link
      href="/servicos"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute bottom-24 right-1/2 -translate-y-1/2 translate-x-1/2">
        <CaretDoubleDown
          size={32}
          color="#191938"
          weight={isHovering ? "bold" : "regular"}
        />
      </div>
    </Link>
  );
}

export default GoToServicesPage;
