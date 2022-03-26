import React from "react";
import SectionHeading from "../global/SectionHeading";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import AboutCards from "./AboutCards";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const slideTop = useAnimation();

  useEffect(() => {
    if (inView) {
      slideTop.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      slideTop.start({
        y: -100,
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      });
    }
  }, [inView, slideTop]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.section
        animate={slideTop}
        id="about"
        className="pt-[80px] font-sans"
      >
        <SectionHeading>ABOUT</SectionHeading>

        <div className="w-[95%] lg:w-[80%] mx-auto my-10 space-y-10 lg:flex justify-between items-start lg:space-y-0 lg:space-x-10">
          <p className="text-[16px] text-[#444444] w-[95%] lg:w-[80%] mx-auto">
            We help our clients across the globe to enhance ROI, build customer
            loyalty and enhance business goals. We provide customized solutions
            in the areas of Risk Management, Marketing Automation, Security
            Analytics, Loyalty Management etc. across various domains and
            industries with great success.
          </p>
          <p className="text-[16px] text-[#444444] w-[95%] lg:w-[80%] mx-auto">
            Our team consists of experts from the industry who have 100+ years
            of combined experience across industry. We bring with us decades of
            experience in Research, Data Analytics & Strategic Management
            Consulting Our team has helped organizations leverage our expertise,
            helping them meet their goals and constantly outperform their
            competition.
          </p>
        </div>
        <AboutCards />
      </motion.section>
    </div>
  );
};

export default About;
