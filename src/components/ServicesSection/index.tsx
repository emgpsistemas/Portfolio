import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import { servicos } from "@/mock/info";

function ServicesSection() {
  return (
    <SectionContainer id={"servicos"}>
      <SectionTitle title="Serviços" />
      <div className="mt-12 w-full space-y-10 lg:space-y-20">
        {servicos.map((servico) => (
          <ServiceInfoCard key={servico.id} {...servico} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
