"use client";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import { isMobile } from "@/utils/isMobile";
import Image from "next/image";

import undrawContact from "@/assets/undraw-contact.svg";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
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
        <form className="pt-16 lg:p-16">
          <h1 className="mb-10 text-center text-2xl font-bold text-black md:text-4xl lg:mb-7 lg:text-start">
            Envie uma mensagem
          </h1>
          <div className="space-y-5">
            <Input value="" id="" label="NOME" />
            <Input value="" id="" label="EMAIL" />
            <Input value="" id="" label="TELEFONE" />
            <Textarea value="" id="" label="MENSAGEM" />
          </div>
          <div className="mt-10 px-16">
            <Button disabled>Enviar</Button>
          </div>
        </form>
      </section>
    </>
  );
}
