import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  let today = new Date();

  return (
    <footer className="border-t-[1px] font-sans text-sm bg-[#041522] text-white pt-[40px] pb-[20px]  ">
      <div>
        <div className="text-center space-y-2">
          <p>
            Designed and Developed &nbsp;
            <span>
              <FavoriteIcon className="text-red-500" />
            </span>
            &nbsp; by{" "}
            <a href="/" className="font-bold">
              EKO
            </a>
          </p>
          <p>© {today.getFullYear()} All Rights Reserved</p>
          <p>EKO Infomatics Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
