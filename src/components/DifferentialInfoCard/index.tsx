import { Diferencial } from "@/interfaces/Differential";

function DifferentialInfoCard({ id, title, description }: Diferencial) {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-start rounded-xl bg-white p-6">
      <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary-blue-500">
        <span className="text-lg font-bold text-white">{id}</span>
      </div>
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
}

export default DifferentialInfoCard;
