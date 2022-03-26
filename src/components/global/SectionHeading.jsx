import React from "react";

const SectionHeading = (props) => {
  return (
    <div className="flex justify-center items-center">
      <span className="h-[2px] w-[100px]  bg-[#3498db]"></span>
      <h1 className="mx-5 text-2xl sm:text-3xl font-bold text-black">
        {props.children}
      </h1>
      <span className="h-[2px] w-[100px]  bg-[#3498db]"></span>
    </div>
  );
};

export default SectionHeading;
