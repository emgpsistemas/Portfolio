import { Servico } from "@/interfaces/Service";
import { isMobile } from "@/utils/isMobile";

function ServiceInfoCard({ title, description, icon }: Servico) {
  if (isMobile) {
    return (
      <div className="flex flex-col">
        <div className="mb-6 flex justify-center">{icon.component}</div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-center text-[22px] font-bold leading-relaxed lg:text-2xl">
            {title}
          </h1>
          <p className="text-justify text-base font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-between space-x-10">
        {icon.position === "left" ? (
          <div className="flex flex-1">{icon.component}</div>
        ) : null}
        <div className="flex-3 flex flex-col">
          <h1 className="text-[22px] font-bold leading-relaxed lg:text-2xl">
            {title}
          </h1>
          <p className="text-base font-normal leading-relaxed">{description}</p>
        </div>
        {icon.position === "right" ? (
          <div className="flex flex-1">{icon.component}</div>
        ) : null}
      </div>
    );
  }
}

export default ServiceInfoCard;
