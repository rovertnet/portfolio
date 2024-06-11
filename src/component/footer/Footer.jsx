import { RiMailFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className=" md:mx-24 mx-10 py-5 bg-slate-400 dark:bg-slate-800 rounded-t-md px-3 text-center">
      <motion.a
        initial={{ opacity: 0, y: "-100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        href="#accueil"
        className=" text-slate-800 md:pb-7 pb-5 dark:text-gray-300 block text-xl md:text-2xl font-semibold dark:hover:text-blue-300 hover:text-blue-300"
      >
        Robert Matundu
      </motion.a>

      <div className=" flex items-center justify-center text-xl md:text-2xl text-slate-800 dark:text-gray-600 space-x-3 pb-5 md:pb-7">
        <FaInstagramSquare className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
        <BsTwitterX className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
        <FaLinkedinIn className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
        <FaFacebookF className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
        <FaSquareGithub className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
        <a href="mailto:matundukabamba@gmail.com">
          <RiMailFill className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
        </a>
      </div>
      <p className=" text-slate-800 dark:text-gray-300 text-xs md:text-sm">
        © Robert {new Date().getFullYear()}. tous droits réservés
      </p>
    </div>
  );
}

export default Footer;
