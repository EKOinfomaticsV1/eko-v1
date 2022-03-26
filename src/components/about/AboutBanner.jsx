import React from "react";
import winners from "../../assets/img/about.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AboutBanner = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const slideRight = useAnimation();

  useEffect(() => {
    if (inView) {
      slideRight.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      slideRight.start({
        x: -100,
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      });
    }
  }, [inView, slideRight]);

  return (
    <div ref={ref} className="flex-[0.3]">
      <motion.img
        animate={slideRight}
        src={winners}
        alt="achievement"
        className="w-[100%] mx-auto max-w-[350px]"
      />
    </div>
  );
};

export default AboutBanner;
