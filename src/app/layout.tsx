import Header from "@/components/Header";
import "./globals.css";

import WaveBackground from "@/components/WaveBackground";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
});

export const metadata = {
  title: "EMGP Sistemas",
  description: "EMGP Sistemas - Soluções em Tecnologia",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} flex w-full flex-1 bg-zinc-50 text-black`}
      >
        <Header />
        <div className="absolute w-full">
          <WaveBackground />
          {children}
        </div>
      </body>
    </html>
  );
}
