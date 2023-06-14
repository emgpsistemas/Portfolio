import HowWeWordCard from "@/components/HowWeWorkCard";
import SectionTitle from "@/components/SectionTitle";
import { comoTrabalhamos } from "./info";

function HowWeWorkSection() {
  return (
    <section className="min-h-screen w-full bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-11 py-32 md:px-20 lg:p-32">
        <SectionTitle title="Como Trabalhamos?" />
        <div className="mt-12 w-full space-y-10 lg:space-y-20">
          {comoTrabalhamos.map((item) => (
            <HowWeWordCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
