import SectionTitle from "./SectionTitle";
import Data from "./Data";
import Items from "./Items";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

function Service() {
  return (
    <div className=" block py-6 md:mx-14 mx-4" id="service">
      <SectionTitle>Services</SectionTitle>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {Data.map((dats) => (
          <Items
            key={dats.title}
            title={dats.title}
            icon={dats.icon}
            describe={dats.describe}
          ></Items>
        ))}
      </motion.div>
    </div>
  );
}

export default Service;
