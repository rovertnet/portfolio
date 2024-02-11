import SectionTitle from "../service/SectionTitle";
import { FaHtml5 } from "react-icons/fa";

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
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2 md:py-7 py-5">
                <span className=" text-slate-300 dark:text-slate-100 flex space-x-3 font-medium text-lg md:text-xl">
                  <FaHtml5 className=" text-2xl md:text-2xl text" />
                  HTML
                </span>
              </div>
            </div>
            <div className="bg-slate-900 dark:bg-slate-800 md:px-7 px-5 rounded-md  md:py-7 py-5">
              <h2 className="font-bold text-slate-100 dark:text-slate-100 text-3xl md:text-2xl">
                Back End
              </h2>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
