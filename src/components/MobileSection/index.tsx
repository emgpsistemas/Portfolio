import { IsMobileContext } from "@/contexts/isMobile";
import { projetosMobile } from "@/mock/info";
import { useContext } from "react";
import MobileProjectCard from "../MobileProjectCard";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";

function MobileSection() {
  const { isMobile } = useContext(IsMobileContext);
  const evenCards = projetosMobile.filter((projeto) => projeto.id % 2 === 0);
  const oddCards = projetosMobile.filter((projeto) => projeto.id % 2 !== 0);
  return (
    <SectionContainer id="mobile">
      <SectionTitle title="Mobile" />
      {isMobile ? (
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-10">
          {projetosMobile.map((projeto) => (
            <MobileProjectCard key={projeto.id} {...projeto} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex w-full flex-row gap-14">
          <div className="flex-1 space-y-10">
            {oddCards.map((projeto) => (
              <MobileProjectCard key={projeto.id} {...projeto} />
            ))}
          </div>
          <div className="mt-60 flex-1 space-y-10">
            {evenCards.map((projeto) => (
              <MobileProjectCard key={projeto.id} {...projeto} />
            ))}
          </div>
        </div>
      )}
    </SectionContainer>
  );
}

export default MobileSection;
