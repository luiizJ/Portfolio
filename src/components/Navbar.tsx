import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

export const Navbar = () =>{
  return (
    <nav className="flex mb-6 items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        <span className=" text-4xl font-bold mx-2 w-10
        bg-gradient-to-r from-pink-300 via-slate-500
             to-purple-500 bg-clip-text tracking-tigh text-transparent
        ">Lz</span>
      </div>
      <div className="flex m-8 items-center justify-center gap-5 text-2xl">
      <a
        href="https://github.com/luiizJ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:brightness-75"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/luiizj/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.instagram.com/_luiizj/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700"
      >
        <FaInstagram size={30} />
      </a>
      </div>
    </nav>
  )
}

export default Navbar