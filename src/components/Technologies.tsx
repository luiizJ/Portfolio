"use client"
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiStyledcomponents, SiDotnet } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";
import { headerExperienceAni } from "@/animation/Motion";


const icons = [
  <RiReactjsFill style={{ color: "#61DAFB" }} />,
  <BiLogoTypescript style={{ color: "#3178C6" }} />,
  <RiTailwindCssFill style={{ color: "#38BDF8" }} />,
  <SiStyledcomponents style={{ color: "#DB7093" }} />,
  <TbBrandNextjs />,
  <FaNodeJs className="text-green-500" />,
  <SiDotnet style={{ color: "#512BD4" }} />,
  <BiLogoPostgresql className="text-sky-700" />,
  <FcLinux />,
];

export const Technologies = () => {
  return (
    <div className="overflow-hidden py-10 border-b border-neutral-800">
      <motion.h2 
      {...headerExperienceAni}
      className="text-center my-10 text-4xl">
        Tecnologias</motion.h2>
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
          {[...icons, ...icons].map((icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center text-7xl p-4 border-4 border-neutral-800 rounded-2xl"
              style={{ minWidth: "100px" }}
            >
              {icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
