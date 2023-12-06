import { useWindowSize } from "@/hooks/useWindowSize";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
const Banner = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= 767;
  return (
    <div className="flex flex-col items-center py-16 gap-10">
      <div className="flex  gap-4">
        <div className="flex gap-4 px-2 py-2 items-center bg-[#fdefc3] rounded-md font-bold text-sm">
          {" "}
          <GiProgression className="text-orange-400" /> 15,321,321 Active
          Products
        </div>
        <div className="bg-[#e3f7f0] rounded-md font-bold text-sm  flex gap-4 px-2 py-2 items-center ">
          <FaUserFriends className="text-orange-400" /> 15,321,321 Active Users
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="text-5xl font-bold text-center px-5">
          World Clasified Web is{" "}
          <span className="text-[#f6b608]">Sherlock</span>
        </div>
        <div className="text-sm text-black/30 max-w-[600px] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit in ipsa
          placeat inventore laboriosam! Ipsum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Totam, enim!
        </div>
      </div>
      <div className="bg-mainLightGreen rounded-md px-5 py-3 ">
        <div className="bg-white flex items-center  rounded-md text-gray-700/60 justify-between gap-2">
          <div className=" pl-5  py-2 flex items-center gap-2 text-sm ">
            <BiSolidCategory className="text-orange-400" /> Select a Category
          </div>
          <div className="bg-mainLightGreen/60 w-[1px] h-7 "></div>
          {isSmallScreen ? null : (
            <div className=" pr-5 py-2 flex items-center gap-2  text-sm">
              <BiSolidCategory className="text-orange-400" /> Select Location
            </div>
          )}
          {isSmallScreen ? null : (
            <div className="bg-mainLightGreen/60 w-[1px] h-7 "></div>
          )}
          <div className=" pr-5 py-2 flex items-center gap-2 text-sm ">
            <BiSolidCategory className="text-orange-400" /> Search Keyword...
          </div>
          <div className="   text-white py-2 flex items-center gap-2  bg-mainButton px-2 rounded-r-md text-sm hover:bg-mainLightGreen duration-500">
            <FaSearch className="text-white" /> Search Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
