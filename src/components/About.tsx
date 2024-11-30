"use client"
import SobreImg from "../assets/sinal.png"
import { aboutAni, aboutTextAni } from "@/animation/Motion";
import { ABOUT_TEXT } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export const About = () =>{
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Sobre Mim</h2>

      <div className="flex flex-wrap">
        <motion.div 
        {...aboutAni}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <Image className="rounded-2xl opacity-65
            [background:radial-gradient(125%_125%_at_50%_10%,#63e_40%,#000_100%)]" 
            src={SobreImg} width={350} height={350} alt="##"/>
          </div>
          </motion.div>
          <motion.div 
          {...aboutTextAni}
          className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;