import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SectionHeading from "../global/SectionHeading";
import ExpertiseCard from "./ExpertiseCard";

import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import PaymentsIcon from "@mui/icons-material/Payments";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LanguageIcon from "@mui/icons-material/Language";

import Tiger from "../../assets/img/tiger.png";

const Expertise = () => {
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
    <div
      ref={ref}
      id="expertise"
      className="overflow-hidden relative py-[20px]"
    >
      <motion.section animate={slideTop} className="pt-[80px] font-sans">
        <SectionHeading>EXPERTISE</SectionHeading>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center  py-[80px]  w-[95%] lg:w-[90%] max-w-[1500px] mx-auto ">
          {/* Key Technology */}
          {/* <div className="border-[#93b1ce] border-2 w-[250px] h-[250px] text-center p-3 rounded-full rotate-90 absolute left-0 my-auto ml-[-145px] hidden xl:block">
            <div className="bg-[#93b1ce]  w-full h-full text-center rounded-full p-3">
              <h1 className="text-white font-semibold pt-10 pb-20">
                Key Technologies
              </h1>
            </div>
          </div> */}

          {/* expertise */}
          <div className="grid grid-cols-2 place-items-center  items-start  max-w-[700px] gap-x-[10px] xl:gap-x-[50px] ">
            <ExpertiseCard
              icon={
                <PrecisionManufacturingIcon
                  fontSize="large"
                  className="text-[#3498db]"
                />
              }
              heading="ML & AI"
              content="ML Models, BI, Solutions for Marketing, Risk, Ops"
            />
            <ExpertiseCard
              icon={<StorageIcon fontSize="large" className="text-[#3498db]" />}
              heading="Big Data"
              content="ETL/EDW/ MDM/ AI/ ML/ BI/ Reporting , NLP "
            />
            <ExpertiseCard
              icon={<CloudIcon fontSize="large" className="text-[#3498db]" />}
              heading="DC & Cloud"
              content="CLoud, AWS, Azure, G-Cloud, On-Prem DC/DR"
            />

            <ExpertiseCard
              icon={
                <PaymentsIcon fontSize="large" className="text-[#3498db]" />
              }
              heading="Digital Payment"
              content="Payment Gateway, POS, Integrated Platform"
            />
            <ExpertiseCard
              icon={<TaskAltIcon fontSize="large" className="text-[#3498db]" />}
              heading="Automation"
              content="RPA -Reconcilation Blockchain"
            />
            <ExpertiseCard
              icon={
                <LanguageIcon fontSize="large" className="text-[#3498db]" />
              }
              heading="Web & Mobile"
              content="Custom Application development - Web, Mobile, Cloud, Java, .Net, React, UI & UX"
            />
          </div>
          {/* tiger */}
          <div className="    max-w-[500px] mb-10 md:mb-0 lg:ml-auto ">
            <img
              src={Tiger}
              alt="tiger graphics"
              className="scale-x-[-1] mb-5  md:ml-[50px]"
            />
          </div>

          <div></div>
        </div>
      </motion.section>
    </div>
  );
};

export default Expertise;
