"use client";

import InitialScreenTitle from "@/components/InitialScreenTitle";
import { isMobile } from "@/utils/isMobile";
import Image from "next/image";

import undrawContact from "@/assets/undraw-contact.svg";
import { Input } from "@/components/Input";

export default function Contato() {
  return (
    <>
      {isMobile ? null : <InitialScreenTitle title="Contato" />}
      <section className="mx-auto grid min-h-screen w-screen max-w-[1423px] grid-flow-row grid-cols-1 px-10 py-32 md:px-20 lg:grid-cols-2 lg:px-0 lg:pb-32 lg:pt-44">
        <div className="flex items-center justify-center px-10 lg:px-0">
          <Image
            src={undrawContact}
            alt="Contato"
            width={643}
            height={528}
            className="h-[528px] w-[643px]"
          />
        </div>
        <form className="p-16">
          <h1 className="mb-7 text-4xl font-bold text-black">
            Envie uma mensagem
          </h1>
          <div className="space-y-5">
            <Input value="" id="" label="NOME" />
          </div>
        </form>
      </section>
    </>
  );
}
