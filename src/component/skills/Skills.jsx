import SectionTitle from "../service/SectionTitle";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { TbBrandMysql } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";




function Skills() {
  return (
    <>
      <div className=" md:my-5 my-7">
        <SectionTitle className=" text-center">Compétences</SectionTitle>
        <div className="md:px-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-14">
            <div className=" bg-slate-900 dark:bg-slate-800 md:px-7 px-5 rounded-md  md:py-7 py-5">
              <h2 className=" font-bold text-slate-100 dark:text-slate-100 text-3xl md:text-2xl">
                Front End
              </h2>
              <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:grid-cols-1 md:py-7 py-5">
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <FaHtml5 className=" text-2xl md:text-2xl text-blue-600" />
                  HTML
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <IoLogoCss3 className=" text-2xl md:text-2xl text-orange-500" />
                  CSS
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <FaReact className=" text-2xl md:text-2xl text-blue-300" />
                  React js
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <SiTailwindcss className=" text-2xl md:text-2xl text-blue-400" />
                  Tailwindcss
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <SiNextdotjs className=" text-2xl md:text-2xl text-slate-100" />
                  Next js
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <GrWordpress className=" text-2xl md:text-2xl dark:text-slate-900 text-white" />
                  WordPress
                </span>
              </div>
            </div>
            <div className="bg-slate-900 dark:bg-slate-800 md:px-7 px-5 rounded-md  md:py-7 py-5">
              <h2 className="font-bold text-slate-100 dark:text-slate-100 text-3xl md:text-2xl">
                Back End
              </h2>
              <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:grid-cols-1 md:py-7 py-5">
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <FaLaravel className=" text-2xl md:text-2xl text-blue-600" />
                  Laravel
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <FaNodeJs className=" text-2xl md:text-2xl text-orange-500" />
                  Node js
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <SiExpress className=" text-2xl md:text-2xl text-blue-300" />
                  Express
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <SiMongodb className=" text-2xl md:text-2xl text-blue-400" />
                  MongoDB
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <SiPostman className=" text-2xl md:text-2xl text-slate-100" />
                  PostMan
                </span>
                <span className=" text-slate-300 dark:text-slate-500 flex gap-2 font-medium text-lg md:text-xl">
                  <TbBrandMysql className=" text-2xl md:text-2xl dark:text-slate-500 text-white" />
                  MySQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
