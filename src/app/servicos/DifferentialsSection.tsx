import DifferentialInfoCard from "@/components/DifferentialInfoCard";
import SectionTitle from "@/components/SectionTitle";
import { diferenciais } from "./info";

function DifferentialsSection() {
  return (
    <section className="min-h-screen w-full bg-background-blue">
      <div className="mx-auto w-full max-w-6xl px-11 py-32 md:px-20 lg:p-32">
        <SectionTitle title="Nossos Diferenciais" />
        <div className="mt-12 grid w-full grid-flow-row-dense grid-cols-1 gap-10 lg:grid-cols-2">
          {diferenciais.map((diferencial) => (
            <DifferentialInfoCard key={diferencial.id} {...diferencial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferentialsSection;
