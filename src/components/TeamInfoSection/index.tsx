import { equipe } from "@/mock/info";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import TeamMemberCard from "../TeamMemberCard";

function TeamInfoSection() {
  return (
    <SectionContainer id={"sobre"} isBlueBackground>
      <SectionTitle title="Equipe" />
      <div className="mt-12 w-full space-y-10 lg:space-y-10">
        {equipe.map((item) => (
          <TeamMemberCard key={item.id} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default TeamInfoSection;
