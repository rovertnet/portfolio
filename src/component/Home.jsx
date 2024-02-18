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
          <h1 className=" text-xl md:text-2xl mt-10 mb-1 md:mb-3 text-slate-900 dark:text-blue-400 font-bold font-jost">
            Hey, je suis Robert Matundu,{" "}
          </h1>
          <h2 className="font-bold dark:text-white text-green-500 md:text-2xl text-2xl">
            -Développeur Web
          </h2>
          <p className=" text-lg md:text-xl px-7 max-w-md text-slate-500 dark:text-gray-300 mb-3">
            En tant que Développeur Web passionné, je conçois des expériences en
            ligne exceptionnelles en utilisant des langages tels que HTML, CSS
            et JavaScript.
          </p>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 9px rgb(255, 255, 255)",
              boxShadow: "0px 0px 9px rgb(255, 255, 255)",
            }}
            href="#projet"
            className=" inline-block px-8 py-3 border border-transparent text-2xl font-bold rounded-md bg-slate-900 dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-30% dark:to-emerald-500 dark:to-90% ... text-white md:text-xl"
          >
            Voir projet
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}

export default Home