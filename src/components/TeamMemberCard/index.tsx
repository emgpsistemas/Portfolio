import githubIcon from "@/assets/github-icon.svg";
import linkedInIcon from "@/assets/linkedin-icon.svg";
import { TeamMember } from "@/interfaces/TeamMember";
import Image from "next/image";

function TeamMemberCard({
  id,
  nome,
  descricao,
  imagem,
  linkedIn,
  github,
}: TeamMember) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 rounded-xl bg-white p-10 md:flex-row lg:items-start">
      <div className="flex items-start justify-start">
        <Image
          src={imagem}
          alt=""
          height={170}
          width={170}
          className="h-44 w-44 rounded-full"
        />
      </div>
      <div className="flex w-full flex-1 flex-col space-y-3">
        <h1 className="text-2xl font-bold text-black">{nome}</h1>
        <p className="text-justify text-base font-normal text-black">
          {descricao}
        </p>
        <div className="flex flex-row space-x-3">
          <a href={github} target="_blank" rel="noreferrer">
            <Image
              src={githubIcon}
              alt="Github Icon"
              height={32}
              width={32}
              className="h-8 w-8 cursor-pointer"
            />
          </a>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <Image
              src={linkedInIcon}
              alt="LinkedIn Icon"
              height={32}
              width={32}
              className="h-8 w-8 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
