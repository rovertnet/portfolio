import SectionTitle from "../service/SectionTitle";
import { motion } from "framer-motion"

function About() {
  return (
    <div
      id="about"
      className=" flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 py-6"
    >
      <div className="w-full md:w-6/6">
        <SectionTitle>A propos</SectionTitle>
        <p className=" text-lg text-gray-600 dark:text-slate-300 md:px-8 px-6 text-justify">
          En tant que professionnel du développement web et de l'ingénierie
          logicielle, ma mission principale est de concevoir et mettre en œuvre
          des solutions numériques efficaces et innovantes. Mon expertise se
          concentre sur la création de sites web, d'applications et de systèmes
          logiciels, en veillant à respecter les normes de sécurité et de
          performance.
        </p>
      </div>
      <motion.div
        className=" md:px-8 px-6"
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