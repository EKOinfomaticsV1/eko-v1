import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SectionHeading from "../global/SectionHeading";

import dataArchitecture from "../../assets/img/capabilities/data-architecture.svg";
import bigData from "../../assets/img/capabilities/big-data.svg";
import ML_AI from "../../assets/img/capabilities/ml-n-ai.svg";
import CapabilitiesCards from "./CapabilitiesCards";

const Capabilities = (props) => {
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
    <div ref={ref} id="capabilities" className="overflow-hidden  pt-[100px]">
      <motion.section animate={slideTop} id="capabilities" className=" ">
        <SectionHeading>CAPABILITIES</SectionHeading>
        <div className="w-[80%] mx-auto  mt-14">
          {/*Data Architecture  */}
          <CapabilitiesCards
            flexRow=""
            heading="Data Architecture"
            subtitle="Building data strategies to achieve business goals"
            image={dataArchitecture}
          >
            <li>Data Architecture Analysis</li>
            <li>Data portfolio analysis and Data Management Strategy</li>
            <li>Big data & Analytics Strategy</li>
            <li>Technology Roadmap</li>
            <li>
              Data Analytics problem defination and technology solution
              proposition{" "}
            </li>
          </CapabilitiesCards>

          {/*Big data Analytics */}
          <CapabilitiesCards
            flexRow="sm:flex-row-reverse "
            heading="Big Data Analytics"
            subtitle="Advance Analytics -real cost, revenue and risk differential"
            image={bigData}
          >
            <li>Data Engineering for Big Data platforms</li>
            <li>ML based advanced Business analytics solutions</li>
            <li>Migration of Traditional analytics to AI and ML </li>
            <li>Semi/Unstructured Data analytics</li>
            <li>Advanced Visualization</li>
          </CapabilitiesCards>

          {/*ML / AI Solutions  */}
          <CapabilitiesCards
            flexRow=""
            heading="ML / AI Solutions"
            subtitle="Predictive models with prescriptive measures to augment human capabilities"
            image={ML_AI}
          >
            <li>
              Industry domain specific solutions in Banking, Insurance,
              Healthcare, Manufacturing, etc.
            </li>
            <li>
              SaaS based solutions for analytics across horizontal areas like
              Social analytics, Marketing analytics, Customer experience,
              Financial analytics, Internet of Things and Digital.
            </li>
          </CapabilitiesCards>
        </div>
      </motion.section>
    </div>
  );
};

export default Capabilities;
