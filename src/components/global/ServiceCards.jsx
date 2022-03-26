import React from "react";

const ServiceCards = (props) => {
  return (
    <div className="relative  w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px]  md:h-[200px] 2xl:w-[250px] 2xl:h-[250px] m-2  rounded-lg shadow-md shadow-[#3498db3d] bg-white overflow-hidden group flex justify-end items-start">
      <div className="absolute h-full w-full flex justify-center items-center bg-transparent group-hover:text-white z-10 text-black font-semibold ">
        <div className="text-center space-y-2">
          {props.icon}

          <h1>{props.serviceHeading}</h1>
        </div>
      </div>
      <div className="h-[50px] w-[50px] bg-[#e1f0fa] rounded-full    group-hover:bg-[#3498db]  group-hover:scale-[20] transition-all duration-[550ms] ease-in scale-[1.5] mt-[-15px] mr-[-15px]  ">
        {/* Corner circle */}
      </div>
    </div>
  );
};

export default ServiceCards;
