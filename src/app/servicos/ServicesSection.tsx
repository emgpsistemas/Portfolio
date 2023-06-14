import SectionTitle from "@/components/SectionTitle";
import ServiceInfo from "@/components/ServiceInfo";
import { servicos } from "./info";

function ServicesSection() {
  return (
    <section className="mx-auto min-h-screen w-screen max-w-6xl px-11 py-32 md:px-20 lg:p-32">
      <SectionTitle title="Serviços" />
      <div className="mt-12 w-full space-y-10 lg:space-y-20">
        {servicos.map((servico) => (
          <ServiceInfo key={servico.id} {...servico} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
