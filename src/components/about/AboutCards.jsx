import React from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import AboutBanner from "./AboutBanner";
import Counter from "./Counter";

const AboutCards = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const slideLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      slideLeft.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      slideLeft.start({
        x: 100,
        opacity: 0,
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView, slideLeft]);
  return (
    <div
      ref={ref}
      className=" w-[95%] lg:w-[80%] mx-auto my-10 space-y-10 lg:flex justify-between items-center lg:space-y-0 overflow-hidden "
    >
      <AboutBanner />
      <motion.div
        animate={slideLeft}
        className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-10  md:flex-[0.7] place-items-start  ml-[50px] "
      >
        {/* Happy Clients */}
        <div className="flex items-start w-full ">
          <SentimentSatisfiedAltIcon
            fontSize="large"
            className="text-[#3498db] scale-125 mr-5"
          />
          <div className="mt-[-7px] ">
            <h1 className="text-4xl font-bold font-sans mb-5">
              <Counter target={100} duration={5} />+
            </h1>
            <p>
              <span className="font-semibold">Happy Clients </span>
            </p>
          </div>
        </div>
        {/* Projects */}
        <div className="flex items-start  w-full">
          <AssignmentIcon
            fontSize="large"
            className="text-[#3498db] scale-125 mr-5"
          />
          <div className="mt-[-7px] ">
            <h1 className="text-4xl font-bold font-sans mb-5">
              <Counter target={1000} duration={4} />+
            </h1>
            <p>
              <span className="font-semibold">Projects </span>
            </p>
          </div>
        </div>
        {/* Experience */}
        <div className="flex items-start w-full">
          <AccessTimeIcon
            fontSize="large"
            className="text-[#3498db] scale-125 mr-5"
          />
          <div className="mt-[-7px]">
            <h1 className="text-4xl font-bold font-sans mb-5">
              <Counter target={12} duration={4} />+
            </h1>
            <p>
              <span className="font-semibold">Years of experience </span>
            </p>
          </div>
        </div>
        {/* Awards */}
        {/* <div className="flex items-start w-full">
          <MilitaryTechIcon
            fontSize="large"
            className="text-[#3498db] scale-125 mr-5"
          />
          <div className="mt-[-7px]">
            <h1 className="text-4xl font-bold font-sans mb-5">
              <Counter target={15} duration={4} />
            </h1>
            <p>
              <span className="font-semibold">Awards &nbsp;</span>
              rerum asperiores dolor alias quo reprehen derit eum et nemo pad
              der.
            </p>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default AboutCards;
