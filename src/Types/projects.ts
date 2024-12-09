import type { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  image: string | StaticImageData; 
  description: string;
  technologies: string[];
}
