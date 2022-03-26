import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const TestimonialCards = (props) => {
  return (
    <div className="flex items-start w-[90%] sm:w-[80%] mx-auto lg:w-[100%] m-2 lg:mx-10 ">
      {/* Customer Image */}

      <img
        src={props.customerImg}
        alt="customer testimonials card"
        className="w-[80px] rounded-lg object-contain mt-[5%] mr-[-40px] z-20 hidden md:block"
      />

      <div className="  bg-white shadow-lg flex flex-col justify-center items-start gap-5 py-10 px-5 md:pl-[60px] w-[100%] lg:w-[100%]">
        <div>
          <img
            src={props.customerImg}
            alt="customer testimonials card"
            className="w-[80px] rounded-lg object-contain mt-[5%] mr-[-40px] z-20 md:hidden"
          />
          <h1 className=" font-bold text-[18px] my-[5px] ">
            {props.customerName}
          </h1>
          <span className="text-[#999] text-[14px] font-semibold">
            {/* CEO &#38; Founder */}
            {props.jobTitle}
          </span>
        </div>
        <div className="text-[16px] italic text-[#444444] font-sans">
          <span className="inline-block  h-[10px] w-[40px] relative">
            <FormatQuoteRoundedIcon
              fontSize="large"
              className="rotate-180 text-[#3498db77] inline  absolute top-0 left-0 mt-[-18px]"
            />
          </span>
          {props.children}
          <span className="inline-block  h-[10px] w-[10px] relative">
            <FormatQuoteRoundedIcon
              fontSize="large"
              className="text-[#3498db77] inline top-0 left-1 mt-[-5px] absolute"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
