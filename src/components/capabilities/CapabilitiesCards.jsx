import React from "react";

const CapabilitiesCards = (props) => {
  return (
    <div
      className={`flex flex-col sm:flex-row ${props.flexRow} justify-between items-center w-full mb-[50px]`}
    >
      <div className="w-[95%] mb-5 sm:w-[50%] max-w-[500px] mx-auto sm:mx-0">
        <h1 className="text-xl sm:text-3xl font-semibold text-blue-500">
          {props.heading}
        </h1>
        <h3 className="text-gray-500 font-semibold mb-[20px] text-sm sm:text-base">
          {props.subtitle}
        </h3>
        <ul className="list-disc marker:text-blue-500 text-sm">
          {props.children}
        </ul>
      </div>
      <div className="w-[80%] max-w-[200px] sm:w-[30%] sm:max-w-[350px]">
        <img src={props.image} alt=" svg" className="" />
      </div>
    </div>
  );
};

export default CapabilitiesCards;
