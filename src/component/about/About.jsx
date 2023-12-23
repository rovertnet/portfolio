import SectionTitle from "../service/SectionTitle";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { FaArrowDown } from "react-icons/fa";

function About() {
  return (
    <div
      id="about"
      className=" flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 py-6"
    >
      <div className="w-full md:w-6/6">
        <SectionTitle>A propos</SectionTitle>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" text-lg text-gray-600 dark:text-slate-300 md:px-8 px-6 text-justify"
        >
          En tant que professionnel du développement web et de l'ingénierie
          logicielle, ma mission principale est de concevoir et mettre en œuvre
          des solutions numériques efficaces et innovantes. Mon expertise se
          concentre sur la création de sites web, d'applications et de systèmes
          logiciels, en veillant à respecter les normes de sécurité et de
          performance.
          <a
            href="CV_Robert.pdf"
            download
            className="flex space-x-2 text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 hover:text-blue-500 md:text-2xl text-xl "
          >
            Téléchargez CV <FaArrowDown className=""/>
          </a>
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" md:px-8 px-6 md:mt-12 mt-10"
      >
        <img
          src="../../public/mon_profile.png"
          alt="about"
          className="w-full md:w-6/6  rounded-md object-cover"
        />
      </motion.div>
    </div>
  );
}

export default About