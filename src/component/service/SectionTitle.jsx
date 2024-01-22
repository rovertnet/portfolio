
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

function SectionTitle({ children, id }) {
  return (
    <div>
      <motion.h1
        variants={fadeIn("dawn", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" text-3xl font-bold md:px-8 px-6 text-blue-300 md:pb-6 pb-5 dark:text-blue-300"
      >
        {children}
      </motion.h1>
    </div>
  );
}

export default SectionTitle