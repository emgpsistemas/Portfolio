import undrawContact from "@/assets/undraw-contact.svg";
import Image from "next/image";
import { Element } from "react-scroll";
import ContactForm from "../ContactForm";

function ContactSection() {
  return (
    <Element name="contato">
      <section
        className="mx-auto grid min-h-screen w-screen max-w-[1423px] grid-flow-row grid-cols-1 px-10 pb-10 pt-32 md:px-20 lg:grid-cols-2 lg:px-0 lg:pb-32 lg:pt-44"
        id="contato"
      >
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
    </Element>
  );
}

export default ContactSection;
