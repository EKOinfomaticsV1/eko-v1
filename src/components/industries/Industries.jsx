import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ServiceCards from "../global/ServiceCards";

// import MemoryIcon from "@mui/icons-material/Memory";
// import StorageIcon from "@mui/icons-material/Storage";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import AssessmentIcon from "@mui/icons-material/Assessment";
import SectionHeading from "../global/SectionHeading";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { Link } from "react-router-dom";

const Industries = () => {
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
    <div ref={ref} className="overflow-hidden " id="industries">
      <motion.section animate={slideTop} className="pt-[80px] font-sans">
        <SectionHeading>INDUSTRIES</SectionHeading>
        <p className="text-center my-5 w-[95%] mx-auto lg:w-[80%]">
          We have delivered more than 1000+ projects in the Banking, Insurance,
          Retail, Manufacturing, Defense domains.
        </p>
        <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4  w-[95%] lg:w-[90%] sm:w-[70%] mx-auto my-20 ">
          {/* BankingAndInsurance Card */}
          <Link to="/banking-and-insurance">
            <ServiceCards
              icon={
                <AccountBalanceOutlinedIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Banking & Insurance"
            />
          </Link>

          {/* Education Card */}
          <Link to="/education">
            <ServiceCards
              icon={
                <SchoolOutlinedIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Education"
            />
          </Link>

          {/* Telecom Card*/}
          <Link to="/telecom">
            <ServiceCards
              icon={
                <CellTowerOutlinedIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Telecom"
            />
          </Link>

          {/* Retail Card */}
          <Link to="/retail">
            <ServiceCards
              icon={
                <StoreOutlinedIcon
                  fontSize="large"
                  className="bg-[#3498db] group-hover:bg-[#e1f0fa] group-hover:text-[#3498db] transition-all  ease-in text-white p-2 box-content rounded-full"
                />
              }
              serviceHeading="Retail"
            />
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Industries;
