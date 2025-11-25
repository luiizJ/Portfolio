"use client";
import {
  containetExperienceAni,
  headerExperienceAni,
} from "@/animation/Motion";
import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        {...headerExperienceAni}
        className="my-20 text-center text-4xl"
      >
        Experiencias
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              {...containetExperienceAni}
              className="flex flex-wrap w-full lg:justify-center" // Repassamos classes de layout interno se necessário
            >
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </div>

              <div className="w-full max-w-2xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-200">
                    {experience.company}
                  </span>
                </h6>

                <p className="mb-4 text-neutral-400">
                  {experience.description}
                </p>

                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-4 rounded bg-purple-700 px-2 py-1 text-sm font-medium text-neutral-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
