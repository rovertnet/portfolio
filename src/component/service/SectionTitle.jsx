
import { motion } from "framer-motion";

function SectionTitle({ children, id }) {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: "-100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        id={id && id}
        className=" text-3xl font-bold md:px-8 px-6 text-blue-300 pb-3 dark:text-blue-300"
      >
        {children}
      </motion.h1>
    </div>
  );
}

export default SectionTitle