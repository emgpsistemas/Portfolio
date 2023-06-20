import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

export interface WebProject extends Project {
  url?: string;
  github?: string;
}

export interface MobileProject extends Project {
  appStore?: string;
  playStore?: string;
  github?: string;
}
