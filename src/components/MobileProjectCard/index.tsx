import { MobileProject } from "@/interfaces/Project";
import Image from "next/image";

function MobileProjectCard({ title, description, image }: MobileProject) {
  return (
    <div className="flex flex-col justify-center lg:max-w-[380px]">
      {image ? (
        <Image
          src={image}
          alt={`${title} image`}
          width={380}
          height={1013}
          className="mx-auto self-center rounded-3xl"
        />
      ) : null}

      <div className="mt-5 flex flex-col">
        <h1 className="text-[32px] font-bold leading-relaxed">{title}</h1>
        <span className="text-justify text-base font-normal leading-relaxed">
          {description}
        </span>
      </div>
    </div>
  );
}

export default MobileProjectCard;
