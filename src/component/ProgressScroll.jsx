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
        className=" bg-blue-400"
      ></motion.div>
    </>
  );
}

export default ProgressScroll;
