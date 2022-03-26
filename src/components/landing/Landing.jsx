import { motion } from "framer-motion";
import React from "react";
import HeroImage from "../../assets/img/hero.svg";
import GetStarted from "../global/GetStarted";
import CLientBanner from "./CLientBanner";

const Landing = () => {
  return (
    <section className="lg:pt-[80px] overflow-hidden">
      <div className="pt-[80px] lg:pt-0 h-[80vh] flex flex-col justify-around  items-center md:h-auto w-[95%] mx-auto lg:w-[80%] md:flex lg:flex-row-reverse lg:justify-between lg:items-center mb-[50px] lg:mt-[20px] lg:my-[100px]  max-w-[3000px]">
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-[50%] mx-auto lg:hidden"
        >
          <img
            src={HeroImage}
            alt="hero"
            className="  mx-auto w-full max-w-[300px]"
          />
        </motion.div>
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[50%] mx-auto hidden lg:block"
        >
          <img
            src={HeroImage}
            alt="hero"
            className="up-down-animation w-full ml-auto lg:max-w-[600px]"
          />
        </motion.div>

        <motion.div
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[50%] mt-5 mx-auto"
        >
          <h1 className="text-[28px] lg:text-[40px] leading-tight text-black font-bold mb-[20px] lg:mb-[15px] ">
            Grow your business with EKO
          </h1>
          <p className="text-[18px] lg:text-[24px] mb-[20px] lg:mb-[30px] leading-1">
            We are a firm specialized in Machine Learning, AI and Big Data
            Analytics based solutions.
          </p>

          <GetStarted />
        </motion.div>
      </div>
      <CLientBanner />
    </section>
  );
};

export default Landing;
