import React from "react";
import SectionHeading from "../global/SectionHeading";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
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
    <div ref={ref} className="overflow-hidden ">
      <motion.section
        animate={slideTop}
        id="testimonial"
        className="bg-[#f3f9fd] mt-[40px] pt-[80px] mb-[100px] py-10 font-sans"
      >
        <div className="w-[95%] mx-auto lg:w-[90%]">
          <SectionHeading>TESTIMONIALS</SectionHeading>
          <p className="text-center  my-5">
            Our clients sends us bunch of smiles with our services and we love
            them
          </p>
        </div>

        <TestimonialSlider />
      </motion.section>
    </div>
  );
};

export default Testimonials;
