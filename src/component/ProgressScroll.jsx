import { motion, useScroll } from "framer-motion";

function ProgressScroll() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          transformOrigin: "0%",
        }}
        className=" bg-blue-400 dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-30% dark:to-emerald-500 dark:to-90% ..."
      ></motion.div>
    </>
  );
}

export default ProgressScroll;
