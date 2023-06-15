"use client";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import { isMobile } from "@/utils/isMobile";
import Image from "next/image";

import undrawContact from "@/assets/undraw-contact.svg";
import ContactForm from "@/components/ContactForm";
import { animateScroll100VH } from "@/utils/animateScroll";
import { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    if (!isMobile) {
      animateScroll100VH();
    }
  }, []);
  return (
    <>
      {isMobile ? null : <InitialScreenTitle title="Contato" />}
      <section className="mx-auto grid min-h-screen w-screen max-w-[1423px] grid-flow-row grid-cols-1 px-10 pb-10 pt-32 md:px-20 lg:grid-cols-2 lg:px-0 lg:pb-32 lg:pt-44">
        <div className="flex items-center justify-center px-20">
          <Image
            src={undrawContact}
            alt="Contato"
            width={643}
            height={528}
            className="w-[643px]"
          />
        </div>
        <ContactForm />
      </section>
    </>
  );
}
