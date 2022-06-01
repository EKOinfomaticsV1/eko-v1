import React from "react";
import SectionHeading from "../global/SectionHeading";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
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
    <div ref={ref} className="overflow-hidden bg-[#f3f9fd] py-[20px]">
      <motion.section animate={slideTop} id="contact" className=" ">
        <SectionHeading>CONTACT</SectionHeading>
        <div className="w-[80%] mx-auto lg:flex  justify-between items-start mt-14">
          <div className="md:flex mx-auto lg:mx-0 justify-start  items-start   ">
            <div className="">
              <h1 className="text-2xl text-black font-bold mt-14 lg:mt-0 mb-5">
                EKO
              </h1>
              <p className="font-sans text-[#868686] max-w-[300px]">
                A firm specializing in Machine Learning, AI, Big Data Analytics
                based solutions, helping clients across the globe to enhance
                ROI, build customer loyalty and enhance business goals.
              </p>
              {/* <div className=" h-[40px] w-full  bottom-0 flex justify-start items-center transition duration-200 my-5 space-x-2 ">
                <span className=" hover:bg-[#3498db] border-[1px] border-[#3498db] p-2 rounded-full group transition ease-in">
                  <TwitterIcon
                    fontSize="medium"
                    className="text-[#3498db] group-hover:text-white cursor-pointer"
                  />
                </span>

                <span className=" hover:bg-[#3498db] border-[1px] border-[#3498db] p-2 rounded-full group transition ease-in">
                  <InstagramIcon
                    fontSize="medium"
                    className="text-[#3498db] group-hover:text-white cursor-pointer "
                  />
                </span>

                <span className=" hover:bg-[#3498db] border-[1px] border-[#3498db] p-2 rounded-full group transition ease-in">
                  <LinkedInIcon
                    fontSize="medium"
                    className="text-[#3498db] group-hover:text-white cursor-pointer "
                  />
                </span>
                <span className=" hover:bg-[#3498db] border-[1px] border-[#3498db] p-2 rounded-full group transition ease-in">
                  <FacebookIcon
                    fontSize="medium"
                    className="text-[#3498db] group-hover:text-white cursor-pointer"
                  />
                </span>
              </div> */}
            </div>

            <div className="text-[#868686] mt-20 lg:mt-0 text-sm lg:mx-10 ">
              <div className="flex justify-start gap-5 items-center w-[200px] mb-5">
                <span>
                  <LocationOnOutlinedIcon
                    fontSize="large"
                    className="text-[#3498db]"
                  />
                </span>
                <div className="block sm:flex lg:block gap-5 2xl:flex">
                  <a
                    href="https://goo.gl/maps/1bj7ZVPM6AjkgFseA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <span className="font-bold">INDIA</span>
                      <span className="font-sans w-[150px] inline-block">
                        No.76, 7th A cross, 4th B Block, Koramangala, Bangalore,
                        Karnataka 560034.
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://goo.gl/maps/EX3FgpwqxUhsrYs99"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="mt-5 sm:mt-0 lg:mt-5 2xl:mt-0">
                      <span className="font-bold">USA</span>
                      <span className="font-sans w-[150px] inline-block capitalize">
                        EKO INFOMATICS SOLUTIONS INC. 171 Sylvan St Rutherford
                        NJ 07070-2433 US
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <a href="mailto:software@ekoinfomatics.com">
                <div className="flex justify-start gap-5 items-center  mb-5 font-sans w-[150px] ">
                  <span className="cursor-pointer">
                    <AlternateEmailOutlinedIcon
                      fontSize="large"
                      className="text-[#3498db]"
                    />
                  </span>
                  <span>software@ekoinfomatics.com</span>
                </div>
              </a>

              <a href="tel:+918041602731">
                <div className="flex justify-start gap-5 items-center w-[200px] mb-5">
                  <span>
                    <LocalPhoneRoundedIcon
                      fontSize="large"
                      className="text-[#3498db]"
                    />
                  </span>
                  <span>+91-8041602731 </span>
                </div>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
