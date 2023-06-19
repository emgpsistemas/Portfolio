import { Project } from "@/interfaces/Project";
import Image from "next/image";

function WebProjectCard({ title, description, image }: Project) {
  return (
    <div className="flex max-w-[500px] flex-col">
      <Image
        src={image}
        alt={`${title} image`}
        width={500}
        height={400}
        className="rounded-3xl"
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

export default WebProjectCard;
