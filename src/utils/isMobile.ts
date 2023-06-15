"use client";

import { useEffect, useState } from "react";

export function IsMobile() {
  const [windowWidth, setWindowWidth] = useState<Window | null>(null);

  const handleResize = () => {
    setWindowWidth(window);
  };

  useEffect(() => {
    handleResize();
  }, []);

  if (!windowWidth) {
    return {
      isMobile: false,
    };
  } else {
    return {
      isMobile: windowWidth.innerWidth < 768,
    };
  }
}
