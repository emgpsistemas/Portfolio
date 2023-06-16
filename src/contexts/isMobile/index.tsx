"use client";

import { useWindowSize } from "@react-hookz/web/esm/useWindowSize";
import { createContext, useEffect, useState } from "react";

export const IsMobileContext = createContext({ isMobile: false });

export const IsMobileProvider = ({ children }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();

  const handleResize = () => {
    if (width <= 834) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <IsMobileContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </IsMobileContext.Provider>
  );
};
