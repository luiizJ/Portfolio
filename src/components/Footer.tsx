"use client";
import {
  headerExperienceAni,
  containetExperienceAni,
} from "@/animation/Motion";
import { rodape } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-b color-neutral-900 pb-5">
      <motion.h1
        {...headerExperienceAni}
        className="my-10 text-center text-4xl"
      >
        Escrevendo o Futuro
      </motion.h1>
      <motion.div
        {...containetExperienceAni}
        className="text-center tracking-tighter"
      >
        <a href="#" className="my-3">
          {rodape.email}
        </a>
      </motion.div>

      <motion.div
        {...containetExperienceAni}
        className="flex m-5 items-center justify-center gap-5 text-2xl"
      >
        <a
          href="https://github.com/luiizJ"
          aria-label="Perfil do GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:brightness-75"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/luiizj/"
          aria-label="Perfil do LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/_luiizj/"
          aria-label="Perfil do Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700"
        >
          <FaInstagram size={30} />
        </a>
      </motion.div>

      <div>
        <span className="text-[#a0c4ff]">
          © 2024 Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
