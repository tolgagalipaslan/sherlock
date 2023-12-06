import React from "react";
import FancyLine from "../Extension/FancyLine";
import Image from "next/image";
import { Col, Row } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { MdPageview } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const OurPrecing = () => {
  return (
    <div className=" container flex flex-col text-center items-center  mt-20 gap-5 ">
      <div className="relative px-2 py-2 ">
        <h1 className="font-bold text-2xl flex items-center gap-1  ">
          <div className="relative aspect-square h-5">
            <Image fill alt src={"/assets/trophy.png"} />
          </div>
          Our Pricing Plan{" "}
        </h1>
        <FancyLine />
      </div>
      <h5 className="text-center text-sm max-w-[700px] text-black/50">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque
        distinctio impedit numquam itaque sit?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veniam, similique.
      </h5>
      <div className=" w-full md:grid  lg:grid-cols-3   flex flex-col  justify-center items-center gap-6 align-middle mt-10">
        <div className="aspect-square lg:h-[550px] lg:w-[450px] h-[450px] w-[350px] bg-white relative  rounded-md overflow-hidden hover:scale-105 duration-500  shadow-sm shadow-emerald-500 flex flex-col p-5">
          <div className="flex  justify-between ">
            <div className="flex flex-col p-2  px-6 rounded-md  bg-[#ecfbf6]">
              <h1 className="text-xl font-bold ">$25.90</h1>
              <h6 className="text-xs text-black/30">Per Month</h6>
            </div>
            <div className="flex flex-col p-2  px-6 rounded-md  text-start mr-10">
              <h1 className="text-xl font-bold ">Starter Plan</h1>
              <h6 className="text-xs text-orange-500">Start today!</h6>
            </div>
          </div>
          <div className="flex flex-col justify-start px-5 mt-10 gap-5 ">
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum dolor.</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum </h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum dolor.</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum </h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem Lorem ipsum dolor sit.</h1>
            </div>{" "}
          </div>
          <div className="bg-[#fad97f] mt-20 py-2 px-8 shadow-sm text-sm rounded-md">
            Purchase Now!
          </div>
        </div>{" "}
        <div className="aspect-square lg:h-[550px] lg:w-[450px] h-[450px] w-[350px] bg-[#fad97f] relative  rounded-md overflow-hidden hover:scale-105 duration-500  shadow-sm shadow-emerald-500 flex flex-col p-5">
          <div className="flex  justify-between ">
            <div className="flex flex-col p-2  px-6 rounded-md  bg-[#ecfbf6]">
              <h1 className="text-xl font-bold ">$25.90</h1>
              <h6 className="text-xs text-black/30">Per Month</h6>
            </div>
            <div className="flex flex-col p-2  px-6 rounded-md  text-start mr-10">
              <h1 className="text-xl font-bold ">Starter Plan</h1>
              <h6 className="text-xs text-orange-500">Start today!</h6>
            </div>
          </div>
          <div className="flex flex-col justify-start px-5 mt-10 gap-5 ">
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-white" />{" "}
              <h1>Lorem, ipsum dolor.</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-white" />{" "}
              <h1>Lorem, ipsum </h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-white" />{" "}
              <h1>Lorem</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-white" />{" "}
              <h1>Lorem, ipsum dolor.</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-white" />{" "}
              <h1>Lorem, ipsum </h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-white" />{" "}
              <h1>Lorem Lorem ipsum dolor sit.</h1>
            </div>{" "}
          </div>
          <div className="bg-orange-400 mt-20 py-2 px-8 shadow-sm text-sm rounded-md">
            Purchase Now!
          </div>
        </div>{" "}
        <div className="aspect-square lg:h-[550px] lg:w-[450px] h-[450px] w-[350px] bg-white relative  rounded-md overflow-hidden hover:scale-105 duration-500  shadow-sm shadow-emerald-500 flex flex-col p-5">
          <div className="flex  justify-between ">
            <div className="flex flex-col p-2  px-6 rounded-md  bg-[#ecfbf6]">
              <h1 className="text-xl font-bold ">$25.90</h1>
              <h6 className="text-xs text-black/30">Per Month</h6>
            </div>
            <div className="flex flex-col p-2  px-6 rounded-md  text-start mr-10">
              <h1 className="text-xl font-bold ">Starter Plan</h1>
              <h6 className="text-xs text-orange-500">Start today!</h6>
            </div>
          </div>
          <div className="flex flex-col justify-start px-5 mt-10 gap-5 ">
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum dolor.</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum </h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum dolor.</h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem, ipsum </h1>
            </div>{" "}
            <div className="flex items-center  gap-3">
              <MdKeyboardDoubleArrowRight className="text-3xl text-orange-400" />{" "}
              <h1>Lorem Lorem ipsum dolor sit.</h1>
            </div>{" "}
          </div>
          <div className="bg-[#fad97f] mt-20 py-2 px-8 shadow-sm text-sm rounded-md">
            Purchase Now!
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default OurPrecing;
