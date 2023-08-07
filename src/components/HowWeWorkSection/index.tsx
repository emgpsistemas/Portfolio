import HowWeWordCard from "@/components/HowWeWorkCard";
import SectionTitle from "@/components/SectionTitle";
import { comoTrabalhamos } from "@/mock/info";
import SectionContainer from "../SectionContainer";

function HowWeWorkSection() {
  return (
    <SectionContainer id="como-trabalhamos">
      <SectionTitle title="Como Trabalhamos?" />
      <div className="mt-12 w-full space-y-10 lg:space-y-20">
        {comoTrabalhamos.map((item) => (
          <HowWeWordCard key={item.id} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default HowWeWorkSection;
