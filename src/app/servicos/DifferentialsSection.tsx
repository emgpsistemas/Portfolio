import DifferentialInfoCard from "@/components/DifferentialInfoCard";
import SectionTitle from "@/components/SectionTitle";
import { IsMobileContext } from "@/contexts/isMobile";
import { useContext } from "react";
import { diferenciais } from "./info";

function DifferentialsSection() {
  const { isMobile } = useContext(IsMobileContext);
  const evenCards = diferenciais.filter(
    (diferencial) => diferencial.id % 2 === 0
  );
  const oddCards = diferenciais.filter(
    (diferencial) => diferencial.id % 2 !== 0
  );

  return (
    <section className="min-h-screen w-full bg-background-blue">
      <div className="mx-auto w-full max-w-6xl px-10 py-20 md:px-20 lg:p-32">
        <SectionTitle title="Nossos Diferenciais" />
        {isMobile ? (
          <div className="mt-12 grid w-full grid-flow-row-dense grid-cols-1 gap-10 lg:grid-cols-2">
            {diferenciais.map((diferencial) => (
              <DifferentialInfoCard key={diferencial.id} {...diferencial} />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex w-full flex-row gap-10">
            <div className="flex-1 space-y-10">
              {oddCards.map((diferencial) => (
                <DifferentialInfoCard key={diferencial.id} {...diferencial} />
              ))}
            </div>
            <div className="mt-24 flex-1 space-y-10">
              {evenCards.map((diferencial) => (
                <DifferentialInfoCard key={diferencial.id} {...diferencial} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default DifferentialsSection;
