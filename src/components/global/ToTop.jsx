import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        className={`text-lg p-2 px-2 rounded-[4px] bg-[#3498db] text-white fixed bottom-5 right-5 z-50  justify-center transition duration-500 items-center flex ${
          visible ? "ease-in visible  " : "ease-out invisible"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon />
      </button>
    </>
  );
};

export default ToTop;
