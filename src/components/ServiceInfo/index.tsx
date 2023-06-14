import { Servico } from "@/interfaces/Service";

function ServiceInfo({ title, description, icon }: Servico) {
  return (
    <div className="flex flex-row justify-between space-x-10">
      {icon.position === "left" ? (
        <div className="flex flex-1">{icon.component}</div>
      ) : null}
      <div className="flex-3 flex flex-col">
        <h1 className="text-[22px] font-bold leading-relaxed lg:text-2xl">
          {title}
        </h1>
        <p className="text-base font-normal leading-none">{description}</p>
      </div>
      {icon.position === "right" ? (
        <div className="flex flex-1">{icon.component}</div>
      ) : null}
    </div>
  );
}

export default ServiceInfo;
