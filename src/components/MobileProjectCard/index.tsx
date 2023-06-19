import { Project } from "@/interfaces/Project";
import Image from "next/image";

function MobileProjectCard({ title, description, image }: Project) {
  return (
    <div className="flex flex-col justify-center lg:max-w-[380px]">
      <Image
        src={image}
        alt={`${title} image`}
        width={380}
        height={1013}
        className="mx-auto self-center rounded-3xl"
      />
      <div className="mt-5 flex flex-col">
        <h3 className="text-[32px] font-bold leading-relaxed">{title}</h3>
        <span className="text-justify text-base font-normal leading-relaxed">
          {description}
        </span>
      </div>
    </div>
  );
}

export default MobileProjectCard;