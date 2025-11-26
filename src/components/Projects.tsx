"use client";
import { aboutAni, headerExperienceAni } from "@/animation/Motion";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h2
        {...headerExperienceAni}
        className="my-20 text-center text-4xl"
      >
        Projetos
      </motion.h2>

      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {PROJECTS.map((proj, index) => (
          <div key={index} className="h-full">
            <motion.div
              {...aboutAni}
              className="flex flex-col h-full items-center rounded-lg border border-neutral-800 p-4 hover:border-neutral-600 transition-colors"
            >
              <Link
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${proj.title}`}
              >
                <Image
                  src={proj.image}
                  width={350}
                  height={450}
                  alt={proj.title}
                  className="mb-4 rounded"
                  style={{ width: "100%", height: "auto" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {proj.title}
              </h3>

              <p className="mb-4 text-sm text-neutral-300 text-center flex-grow">
                {proj.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {proj.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-purple-700 px-2 py-1 text-sm font-medium text-neutral-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
