import React, { useState } from "react";
import logo from "../../assets/img/ekoLogo.png";
import { motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { NavHashLink } from "react-router-hash-link";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.header
      // initial={{ y: -20, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.5 }}
      // ease="easeIn"
      className="z-[90] transition-all duration-[0.5s] py-[22px] bg-[#fefeff] overflow-x-hidden sticky top-0 overflow-hidden"
    >
      <nav className="w-[95%] lg:w-[90%] mx-auto flex justify-between items-center overflow-hidden">
        {/* logo */}
        <div className="">
          {/* <h1 className="text-[30px] font-semibold tracking-[1px]">
            EKO Infomatics
          </h1> */}
          <a href="/">
            <img
              src={logo}
              alt="EKO comapny logo"
              className="h-[35px] object-contain"
            />
          </a>
        </div>
        {/* nav-links */}
        <ul className=" justify-between items-center hidden lg:flex  font-medium">
          <li>
            <NavHashLink
              to="/#top"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#about"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              About
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#expertise"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              Expertise
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#solutions"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              Solutions
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#industries"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              Industries
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#capabilities"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              Capabilities
            </NavHashLink>
          </li>

          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkpxy_LZnwpjdjzBM_RnlEZbIEkFxce8P17FdnvQOGASeZ2g/viewform"
              target="_blank"
              rel="noreferrer"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              Careers
            </a>
          </li>

          <li>
            <NavHashLink
              to="/#contact"
              className="p-3 xl:p-5 xl:mx-2 hover:text-[#3498db] transition-all"
            >
              Contact Us
            </NavHashLink>
          </li>
          <li>{/* <GetStarted /> */}</li>
        </ul>
        {/* burger menu */}
        <div className="  z-[99] scale-75 lg:hidden  ">
          <label
            className="flex flex-col w-[40px] cursor-pointer"
            htmlFor="check"
          >
            <input
              className="hidden"
              type="checkbox"
              id="check"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />

            <span
              className={`bg-[#09518d] rounded-[10px] h-[4px] my-[4px] w-[50%] transition-all duration-[0.4s] ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] ${
                isSidebarOpen && "sidebarOpen1"
              }`}
            ></span>
            <span
              className={`bg-[#09518d] rounded-[10px] h-[4px] my-[4px] w-[100%] transition-all duration-[0.4s] ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] ${
                isSidebarOpen && "sidebarOpen2"
              }`}
            ></span>
            <span
              className={`bg-[#09518d] rounded-[10px] h-[4px] my-[4px] w-[75%] transition-all duration-[0.4s] ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] ${
                isSidebarOpen && "sidebarOpen3"
              }`}
            ></span>
          </label>
        </div>

        {/* sidebar */}
        <div
          className={`flex  w-[50%] lg:hidden justify-start items-start fixed top-0 right-0 h-screen   transition duration-300 font-semibold ${
            isSidebarOpen
              ? "ease-in translate-x-0 overflow-x-hidden shadow-2xl shadow-black-500 opacity-100"
              : "ease-out opacity-0 translate-x-[100%]"
          }`}
        >
          <ul className=" flex flex-col items-start py-[100px] bg-[#f3f9fd] w-[100%] h-full ">
            <li>
              <NavHashLink
                to="/#top"
                className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all "
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span>
                  <HomeOutlinedIcon />
                </span>
                <span className="ml-5">Home</span>
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/#about"
                className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span>
                  <InfoOutlinedIcon />
                </span>
                <span className="ml-5">About</span>
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/#expertise"
                className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span>
                  <HomeRepairServiceOutlinedIcon />
                </span>
                <span className="ml-5">Expertise</span>
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/#solutions"
                className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span>
                  <EmojiObjectsOutlinedIcon />
                </span>

                <span className="ml-5"> Solutions </span>
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/#industries"
                className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span>
                  <WarehouseOutlinedIcon />
                </span>
                <span className="ml-5">Industries</span>
              </NavHashLink>
            </li>
            <NavHashLink
              to="/#capabilities"
              className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span>
                <AcUnitOutlinedIcon />
              </span>
              <span className="ml-5">Capabilities</span>
            </NavHashLink>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkpxy_LZnwpjdjzBM_RnlEZbIEkFxce8P17FdnvQOGASeZ2g/viewform"
              target="_blank"
              rel="noreferrer"
              className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span>
                <SchoolOutlinedIcon />
              </span>
              <span className="ml-5"> Careers</span>
            </a>

            <li>
              <NavHashLink
                to="/#contact"
                className="p-5 flex justify-center items-center  m-2 hover:text-[#3498db] transition-all"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <span>
                  <CallOutlinedIcon />
                </span>
                <span className="ml-5"> Contact Us</span>
              </NavHashLink>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
