import SectionTitle from "../service/SectionTitle";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { FaArrowUp } from "react-icons/fa";

function About() {
  return (
    <div className="block ">
      <div
        id="about"
        className=" flex flex-col md:flex-row items-center justify-center gap-5 md:gap-3 py-6"
      >
        <div className="w-full md:w-6/6">
          <SectionTitle>A propos</SectionTitle>
          <motion.p
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" text-lg text-gray-600 dark:text-slate-300 md:px-8 px-6 text-justify"
          >
            En tant que professionnel du développement web et de l'ingénierie
            logicielle, ma mission principale est de concevoir et mettre en
            œuvre des solutions numériques efficaces et innovantes. Mon
            expertise se concentre sur la création de sites web, d'applications
            et de systèmes logiciels, en veillant à respecter les normes de
            sécurité et de performance.
          </motion.p>
          <div className="md:px-8 px-6 md:mt-5 mt-3">
            <motion.button
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 9px rgb(255, 255, 255)",
                boxShadow: "0px 0px 9px rgb(255, 255, 255)",
              }}
              className=" md:mt-5 mt-3 bg-slate-900 dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-30% dark:to-emerald-500 dark:to-90% ... text-xl rounded-md text-white dark:text-white py-2 px-24 md:px-14"
            >
              <a href="CV_Robert.pdf" download className=" flex gap-3">
                Téléchargez CV{" "}
                <FaArrowUp className="text-white dark:text-white text-2xl" />
              </a>
            </motion.button>
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" md:px-8 px-6 md:mt-12 mt-10"
        >
          <img
            src="https://portfolio-omega-two-26.vercel.app/robert.png"
            alt="about"
            className="w-full md:w-6/6  rounded-md object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
