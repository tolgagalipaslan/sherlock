import React from "react";
import FancyLine from "../Extension/FancyLine";
import Image from "next/image";
import { Col, Row } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { MdPageview } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
const TopSellers = () => {
  return (
    <div className=" container flex flex-col text-center items-center  mt-20 gap-5">
      <div className="relative px-2 py-2 ">
        <h1 className="font-bold text-2xl flex items-center gap-1  ">
          <div className="relative aspect-square h-5">
            <Image fill alt src={"/assets/trophy.png"} />
          </div>
          Top Sellers{" "}
        </h1>
        <FancyLine />
      </div>
      <h5 className="text-center text-sm max-w-[700px] text-black/50">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque
        distinctio impedit numquam itaque sit?
      </h5>
      <div className=" w-full md:grid  lg:grid-cols-4   md:grid-cols-2 flex flex-col  justify-center items-center gap-4 align-middle mt-10">
        <div className="aspect-square h-[350px] w-[350px] bg-black relative  rounded-md overflow-hidden hover:scale-105 duration-500 ">
          <Image
            alt="topseller"
            fill
            src={"/assets/human1.jpg"}
            className="object-cover"
          />
          <div className="absolute w-full h-full bg-black/30">
            <div className="relative w-full h-full">
              <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                <div className="flex gap-1 text-sm items-center ">
                  <FaLocationDot className="text-orange-300" /> Turkey
                </div>
                <div className="flex gap-1 text-sm items-center ">
                  <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                  <span className="text-textGreen">views</span>
                </div>
              </div>
              <div className="absolute top-2 left-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                <FaFlag className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="aspect-square h-[350px] w-[350px] bg-black relative rounded-md overflow-hidden  hover:scale-105 duration-500">
          <Image
            alt="topseller"
            fill
            src={"/assets/human2.jpeg"}
            className="object-cover"
          />
          <div className="absolute w-full h-full bg-black/30">
            <div className="relative w-full h-full">
              <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                <div className="flex gap-1 text-sm items-center ">
                  <FaLocationDot className="text-orange-300" /> Turkey
                </div>
                <div className="flex gap-1 text-sm items-center ">
                  <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                  <span className="text-textGreen">views</span>
                </div>
              </div>
              <div className="absolute top-2 left-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                <FaFlag className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="aspect-square h-[350px] w-[350px] bg-black relative rounded-md overflow-hidden  hover:scale-105 duration-500">
          <Image
            alt="topseller"
            fill
            src={"/assets/human3.png"}
            className="object-cover"
          />
          <div className="absolute w-full h-full bg-black/30">
            <div className="relative w-full h-full">
              <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                <div className="flex gap-1 text-sm items-center ">
                  <FaLocationDot className="text-orange-300" /> Turkey
                </div>
                <div className="flex gap-1 text-sm items-center ">
                  <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                  <span className="text-textGreen">views</span>
                </div>
              </div>
              <div className="absolute top-2 left-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                <FaFlag className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="aspect-square h-[350px] w-[350px] bg-black relative rounded-md overflow-hidden  hover:scale-105 duration-500">
          <Image
            alt="topseller"
            fill
            src={"/assets/human4.jpg"}
            className="object-cover"
          />
          <div className="absolute w-full h-full bg-black/30">
            <div className="relative w-full h-full">
              <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                <div className="flex gap-1 text-sm items-center ">
                  <FaLocationDot className="text-orange-300" /> Turkey
                </div>
                <div className="flex gap-1 text-sm items-center ">
                  <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                  <span className="text-textGreen">views</span>
                </div>
              </div>
              <div className="absolute top-2 left-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                <FaFlag className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
