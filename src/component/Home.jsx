import {motion} from "framer-motion";
import { fadeIn } from "../Variants";

function Home() {
  return (
    <>
      <div
        className=" md:px-16 pt-12 pb-5 flex flex-col justify-center items-center"
        id="accueil"
      >
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-center mt-12"
        >
          <h1 className=" text-xl md:text-2xl mt-10 mb-1 md:mb-3 text-blue-400 font-semibold font-jost">
            Hey, je suis Robert Matundu,{" "}
          </h1>
          <h2 className="text-lg font-bold dark:text-white text-violet-950 md:text-2xl sm:text-2xl">
            -Développeur Web
          </h2>
          <p className=" text-lg md:text-xl px-7 max-w-md text-slate-500 dark:text-gray-300 mb-3">
            En tant que Développeur Web passionné, je conçois des expériences en
            ligne exceptionnelles en utilisant des langages tels que HTML, CSS
            et JavaScript.
          </p>
          <a
            href="#projet"
            className=" inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-400 text-white hover:bg-blue-300 md:text-md"
          >
            Voir projet
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Home