"use client"
import { containetExperienceAni, headerExperienceAni } from "@/animation/Motion";
import { EXPERIENCES } from "@/constants";
import { motion } from "framer-motion";

export const Experiences = () =>{
  return ( 
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 {...headerExperienceAni} className="my-20 text-center text-4xl">Experiencias</motion.h2>
      <div>
        {EXPERIENCES.map((exp) =>(
          <motion.div 
          {...containetExperienceAni}
          key={exp.id} 
          className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-2xl lg:w-3/4">
            <h6 className=" mb-2 font-semibold"> 
              {exp.role} - <span className="text-sm text-purple-200">{exp.company}</span>
            </h6>
            <p className="mb-4 text-neutral-400">{exp.description}</p>
            <div className="flex flex-wrap">
            {exp.technologies.map((techno,index)=>(
              <span key={index} className="mr-2 mt-4 rounded bg-purple-700 px-2
                py-1 text-sm font-medium text-neutral-900">
                   {techno}
                    </span>
            ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default Experiences;