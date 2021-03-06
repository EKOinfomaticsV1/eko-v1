import React from "react";
import SectionHeading from "../global/SectionHeading";
import CEO from "../../assets/img/team/rangaSir.png";
import ProductManager from "../../assets/img/team/Rajlaxmi.png";
import CTO from "../../assets/img/team/darshan.png";
import neerajSir from "../../assets/img/team/NeerajPalSingh.png";
import Acountant from "../../assets/img/team/Patrick.png";
import TeamCards from "./TeamCards";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Team = () => {
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
    <div ref={ref} className="overflow-hidden">
      <motion.section animate={slideTop} className="font-sans">
        <div className="w-[95%] mx-auto lg:w-[90%]">
          <SectionHeading>TEAM</SectionHeading>
          <p className="text-center  my-5">
            Meet our team behind all this great work
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3   w-[90%] lg:w-[90%] sm:w-[70%] mx-auto my-20 justify-items-center items-center ">
          <a
            href="https://www.linkedin.com/in/ranganathansrinivasan/"
            target="_blank"
            rel="noreferrer"
          >
            <TeamCards
              teamImg={CEO}
              teamDesignation="Managing Director"
              teamName="Ranganathan Srinivasan"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rajlaxmi-shivram-2b52095/?originalSubdomain=in"
            target="_blank"
            rel="noreferrer"
          >
            <TeamCards
              teamImg={ProductManager}
              teamDesignation="Director"
              teamName="Rajlaxmi Shivram "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dharshan-shetty-96026980/?originalSubdomain=in"
            target="_blank"
            rel="noreferrer"
          >
            <TeamCards
              teamImg={CTO}
              teamDesignation="Director"
              teamName="Dharshan Shetty"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/patrickgtoner/"
            target="_blank"
            rel="noreferrer"
          >
            <TeamCards
              teamImg={Acountant}
              teamDesignation="Director US EKO"
              teamName="Patrick Toner"
            />
          </a>
          <a
            href="https://in.linkedin.com/in/neeraj-pal-singh"
            target="_blank"
            rel="noreferrer"
          >
            <TeamCards
              teamImg={neerajSir}
              teamDesignation="Advisor"
              teamName="Neeraj Pal Singh"
            />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Team;
