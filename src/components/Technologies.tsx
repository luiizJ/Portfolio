"use client";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiStyledcomponents, SiDotnet } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";
import { headerExperienceAni } from "@/animation/Motion";

const icons = [
  {
    id: "react",
    name: "React",
    icon: <RiReactjsFill style={{ color: "#61DAFB" }} />,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <BiLogoTypescript style={{ color: "#3178C6" }} />,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: <RiTailwindCssFill style={{ color: "#38BDF8" }} />,
  },
  {
    id: "styled",
    name: "Styled Comp.",
    icon: <SiStyledcomponents style={{ color: "#DB7093" }} />,
  },
  { id: "nextjs", name: "Next.js", icon: <TbBrandNextjs /> },
  {
    id: "node",
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: <SiDotnet style={{ color: "#512BD4" }} />,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-sky-700" />,
  },
  { id: "linux", name: "Linux", icon: <FcLinux /> },
];

export const Technologies = () => {
  return (
    <div className="overflow-hidden py-10 border-b border-neutral-800">
      <motion.h2
        {...headerExperienceAni}
        className="text-center my-10 text-4xl"
      >
        Tecnologias
      </motion.h2>

      <div className="relative w-full">
        <motion.div
          className="flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...icons, ...icons].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              aria-label={item.name}
              role="img"
              className="flex flex-col justify-center items-center p-4 border-4 border-neutral-800 rounded-2xl transition-colors hover:border-neutral-600 hover:bg-neutral-900/50"
              style={{ minWidth: "140px" }}
            >
              {/* Ícone */}
              <div className="text-6xl mb-2"> {item.icon}</div>

              {/* Texto Visível */}
              <span className="text-sm font-medium text-neutral-400">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
