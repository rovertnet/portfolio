import SectionTitle from "../service/SectionTitle"
import WorkItems from "./WorkItems";
import DataWork from "./DataWork";
import { fadeIn } from "../../Variants";
import {motion} from "framer-motion";

function Work() {
  return (
    <div className="md:py-10 py-14 block md:mx-16 mx-6" id="projet">
      <SectionTitle id="works">Projets récents</SectionTitle>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:mx-8 mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5"
      >
        {DataWork.map((work) => (
          <WorkItems
            key={work.titre}
            imageUrl={work.imageUrl}
            titre={work.titre}
            tech={work.tech}
          ></WorkItems>
        ))}
      </motion.div>
    </div>
  );
}

export default Work