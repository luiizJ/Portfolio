'use client'
import { Container, imgAni } from "@/animation/Motion";
import {SOBRE} from "../constants";
import { motion } from "framer-motion";
import lznphoto from "../assets/Lzn.png"
import Image from 'next/image';

export const Main = () =>{
  return(
    <div className="border-b border-neutral-900 pb-3 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
             variants={Container(0)}
             initial= "hidden"
             animate= "visible"
             className="pb-14 text-6xl font-thin tracking-tight lg:mt-16
            lg:text-7xl">LuizJanampa
            </motion.h1>
            <motion.span 
            variants={Container(0.5)}
            initial= "hidden"
            animate= "visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500
             to-purple-500 bg-clip-text text-4xl tracking-tigh text-transparent">Frontend Developer
             </motion.span>
             <motion.p 
             variants={Container(1)}
             initial= "hidden"
             animate= "visible"
             className=" my-2 max-w-xl py-6 font-light tracking-tighter">{SOBRE}
             </motion.p>
          </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div className="flex justify-center" {...imgAni}>
  <Image src={lznphoto}
  className="rounded-lg"
  alt="luizPhoto" width={420} height={420}/>
</motion.div>
        </div>
      </div>
    </div>
  )
};

export default Main;