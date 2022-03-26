import React from "react";

const ExpertiseCard = (props) => {
  return (
    <div className="flex justify-center items-start max-w-[250px] m-2 p-2">
      <div className="mr-4">{props.icon}</div>
      <div>
        <h1 className="font-bold text-black text-xl">{props.heading}</h1>
        <p className="text-sm mt-3 max-w-[200px]">{props.content}</p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
