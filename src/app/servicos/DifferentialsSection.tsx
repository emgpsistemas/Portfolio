import DifferentialInfoCard from "@/components/DifferentialInfoCard";
import { diferenciais } from "./info";

function DIfferentialsSection() {
  return (
    <section className="min-h-screen w-full bg-background-blue">
      <div className="mx-auto w-full max-w-6xl px-11 py-32 md:px-20 lg:p-32">
        <div className="flex justify-center">
          <h1 className="text-[32px] font-bold leading-relaxed md:text-6xl lg:text-[76px]">
            Nossos Diferenciais
          </h1>
        </div>
        <div className="mt-12 grid w-full grid-flow-row-dense grid-cols-1 gap-10 lg:grid-cols-2">
          {diferenciais.map((diferencial) => (
            <DifferentialInfoCard key={diferencial.id} {...diferencial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DIfferentialsSection;
