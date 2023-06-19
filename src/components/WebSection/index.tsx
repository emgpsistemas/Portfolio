import { IsMobileContext } from "@/contexts/isMobile";
import { projetosWeb } from "@/mock/info";
import { useContext } from "react";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import WebProjectCard from "../WebProjectCard";

function WebSection() {
  const { isMobile } = useContext(IsMobileContext);
  const evenCards = projetosWeb.filter((projeto) => projeto.id % 2 === 0);
  const oddCards = projetosWeb.filter((projeto) => projeto.id % 2 !== 0);
  return (
    <SectionContainer isBlueBackground id="web">
      <SectionTitle title="Web" />
      {isMobile ? (
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-10">
          {projetosWeb.map((projeto) => (
            <WebProjectCard key={projeto.id} {...projeto} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex w-full flex-row gap-14">
          <div className="flex-1 space-y-10">
            {oddCards.map((projeto) => (
              <WebProjectCard key={projeto.id} {...projeto} />
            ))}
          </div>
          <div className="mt-36 flex-1 space-y-10">
            {evenCards.map((projeto) => (
              <WebProjectCard key={projeto.id} {...projeto} />
            ))}
          </div>
        </div>
      )}
    </SectionContainer>
  );
}

export default WebSection;
