import React from "react";
// import client1 from "../../assets/img/clients/client-1.png";
// import client2 from "../../assets/img/clients/client-2.png";
// import client3 from "../../assets/img/clients/client-3.png";
// import client4 from "../../assets/img/clients/client-4.png";
import client5 from "../../assets/img/clients/client-5.png";
import client6 from "../../assets/img/clients/client-6.png";
// import client7 from "../../assets/img/clients/client-7.png";
// import client8 from "../../assets/img/clients/client-8.png";

import client1 from "../../assets/img/clients/clients2/Mercedes Logo PNG.png";
import client2 from "../../assets/img/clients/clients2/Axa Logo PNG.png";
import client3 from "../../assets/img/clients/clients2/CBA Logo PNG.png";
import client4 from "../../assets/img/clients/clients2/Cigna Logo PNG.png";
import client7 from "../../assets/img/clients/clients2/Everside Logo PNG.png";
import client8 from "../../assets/img/clients/clients2/GA Logo PNG.png";
import client9 from "../../assets/img/clients/clients2/General Electric Logo PNG.png";
import client10 from "../../assets/img/clients/clients2/HP Logo PNG.png";
import client11 from "../../assets/img/clients/clients2/j_J Logo PNG.png";
import client12 from "../../assets/img/clients/clients2/JW Logo PNG.png";
import client13 from "../../assets/img/clients/clients2/Lincoln F Logo PNG.png";
import client14 from "../../assets/img/clients/clients2/Mindful Logo PNG.png";
import client15 from "../../assets/img/clients/clients2/MOD Logo PNG.png";
import client16 from "../../assets/img/clients/clients2/MTS Logo PNG.png";
import client17 from "../../assets/img/clients/clients2/Ooredoo Logo PNG.png";
import client18 from "../../assets/img/clients/clients2/PAPL Logo PNG.png";
import client19 from "../../assets/img/clients/clients2/PayGlocal Logo PNG.png";
import client20 from "../../assets/img/clients/clients2/PNRG Logo PNG.png";
import client21 from "../../assets/img/clients/clients2/Standard Bank Logo PNG.png";
import client22 from "../../assets/img/clients/clients2/STC Logo PNG.png";
import client23 from "../../assets/img/clients/clients2/Strayer Logo PNG.png";
import client24 from "../../assets/img/clients/clients2/TTK Logo PNG.png";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsiveObject = {
  0: {
    items: 3,
  },
  768: {
    items: 4,
  },
  1024: {
    items: 6,
  },
};

const CLientBanner = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const fadein = useAnimation();

  useEffect(() => {
    if (inView) {
      fadein.start({
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      fadein.start({
        opacity: 0,
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView, fadein]);

  return (
    <div className="bg-[#f3f9fd]  w-full pt-[50px]">
      <div
        ref={ref}
        className="w-[90%] mx-auto lg:w-[75%] flex items-center justify-between max-w-[3000px]"
      >
        <AliceCarousel
          mouseTracking
          autoPlay={true}
          autoPlayInterval={2000}
          infinite={true}
          disableButtonsControls={true}
          responsive={responsiveObject}
        >
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client1}
            alt="client1"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client2}
            alt="client2"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client3}
            alt="client3"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client4}
            alt="client4"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client5}
            alt="client5"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client6}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client7}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client8}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />

          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client9}
            alt="client1"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client10}
            alt="client2"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client11}
            alt="client3"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client12}
            alt="client4"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client13}
            alt="client5"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client14}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client15}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client16}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />

          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client17}
            alt="client1"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client18}
            alt="client2"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client19}
            alt="client3"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client20}
            alt="client4"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client21}
            alt="client5"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client22}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client23}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            onDragStart={handleDragStart}
            role="presentation"
            animate={fadein}
            ease="easeIn"
            src={client24}
            alt="client6"
            className="w-[80px] lg:w-[100px] object-contain m-5 grayscale hover:grayscale-0 transition-all"
          />
        </AliceCarousel>
      </div>
    </div>
  );
};

export default CLientBanner;
