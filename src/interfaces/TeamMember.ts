import { StaticImageData } from "next/image";

export interface TeamMember {
  id: number;
  nome: string;
  descricao: string;
  imagem: StaticImageData;
  linkedIn: string;
  github: string;
}
