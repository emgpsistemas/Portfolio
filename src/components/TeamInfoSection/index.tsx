import { equipe } from "@/mock/info";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import TeamMemberCard from "../TeamMemberCard";

function TeamInfoSection() {
  return (
    <SectionContainer id={"sobre"}>
      <SectionTitle title="Equipe" />
      <div className="mt-20 w-full space-y-10 lg:space-y-20">
        {equipe.map((item) => (
          <TeamMemberCard key={item.id} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default TeamInfoSection;
