import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamCards = (props) => {
  return (
    <div className=" rounded-lg mx-2 my-2 shadow-xl overflow-hidden max-w-[300px]">
      <div className="group relative overflow-hidden">
        <img
          src={props.teamImg}
          alt={props.teamDesignation}
          className="w-[100%] object-contain rounded-t-lg group-hover:scale-105 overflow-hidden transition ease-in team-card-bg "
        />
        {/* <div className="group-hover:bg-[#f7f7f7e7] h-[40px] w-full invisible group-hover:visible absolute bottom-0 flex justify-around items-center transition duration-200">
          <TwitterIcon className="hover:text-[#3498db] cursor-pointer " />
          <FacebookIcon className="hover:text-[#3498db] cursor-pointer " />
          <InstagramIcon className="hover:text-[#3498db] cursor-pointer " />
          <LinkedInIcon className="hover:text-[#3498db] cursor-pointer " />
        </div> */}
      </div>

      <div className="text-center p-1 sm:p-2 md:p-5">
        <h1 className="text-black text-sm sm:text-lg md:text-xl font-semibold">
          {props.teamName}
        </h1>
        <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#868686] ">
          {props.teamDesignation}
        </p>
      </div>
    </div>
  );
};

export default TeamCards;
