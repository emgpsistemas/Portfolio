import { WebProject } from "@/interfaces/Project";
import Image from "next/image";
import Video from "../Video";

function WebProjectCard({ title, description, image, video }: WebProject) {
  return (
    <div className="flex flex-col lg:max-w-[500px]">
      {image ? (
        <Image
          src={image}
          alt={`${title} image`}
          width={500}
          height={400}
          className="mx-auto self-center rounded-3xl"
        />
      ) : null}

      {video && video.length > 0 ? <Video videoPath={video} /> : null}
      <div className="mt-5 flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[32px] font-bold leading-relaxed">{title}</h1>
        </div>
        <span className="text-justify text-base font-normal leading-relaxed">
          {description}
        </span>
      </div>
    </div>
  );
}

export default WebProjectCard;
