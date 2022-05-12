import React from "react";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ServiceCards from "../global/ServiceCards";
import SectionHeading from "../global/SectionHeading";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
    <div ref={ref} className="overflow-hidden bg-[#f3f9fd]" id="solutions">
      <motion.section animate={slideTop} className="pt-[100px] font-sans">
        <SectionHeading>SOLUTIONS </SectionHeading>

        <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4  w-[95%] lg:w-[90%] sm:w-[70%] mx-auto my-20 ">
          {/* AI Card */}
          <Link to="/artificial-intelligence">
            <ServiceCards
              icon={
                <MemoryIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Artificial Intelligence"
            />
          </Link>

          {/* Big Data Card */}
          <Link to="/big-data">
            <ServiceCards
              icon={
                <StorageIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Big Data Analytics"
            />
          </Link>

          {/* Machine learning Card*/}
          <Link to="/machine-learning">
            <ServiceCards
              icon={
                <PsychologyIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Machine Learning"
            />
          </Link>

          {/* Analytics Card */}
          <Link to="/analytics">
            <ServiceCards
              icon={
                <AssessmentIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Analytics Solution"
            />
          </Link>

          {/* Industries */}
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
