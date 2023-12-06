import Image from "next/image";
import React from "react";
import FancyLine from "../Extension/FancyLine";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdPageview } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Featured = () => {
  return (
    <div className=" container flex flex-col text-center items-center  mt-20 gap-5">
      <div className="relative px-2 py-2 ">
        <h1 className="font-bold text-2xl flex items-center gap-1  ">
          <div className="relative aspect-square h-5">
            <Image fill alt src={"/assets/trophy.png"} />
          </div>
          Featured Products{" "}
        </h1>
        <FancyLine />
      </div>
      <h5 className="text-center text-sm max-w-[700px] text-black/50">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque
        distinctio impedit numquam itaque sit?Lorem ipsum, dolor sit amet
        consectetur adipisicing elit.
      </h5>
      {/* HERO SECTION */}
      <div className="w-full bg-white rounded-md border border-mainButton/40 py-4 px-5 shadow-featured flex justify-between mt-20">
        <div className="flex items-center justify-around text-sm md:w-10/12 w-8/12">
          <div className="text-emerald-600">Electronics</div>
          <div className="border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Health
          </div>
          <div className="border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Food
          </div>
          <div className="border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Restaurant
          </div>
          <div className="border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Cars
          </div>
          <div className="md:flex hidden border-b-0 pb-1 border-mainButton hover:border-b duration-300 ">
            Beauty
          </div>
          <div className="md:flex hidden border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Fashion
          </div>
          <div className="md:flex hidden border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Property
          </div>
          <div className="md:flex hidden border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Education
          </div>
          <div className="md:flex hidden border-b-0 pb-1 border-mainButton hover:border-b duration-300">
            Grocery
          </div>
        </div>
        <div className="md:w-1/12  text-white bg-mainButton rounded-md px-2 py-2 w-3/12 line-clamp-1 ">
          {" "}
          See more...
        </div>
      </div>
      {/* CARTS */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full py-10"
      >
        <SwiperSlide>
          <div className="flex gap-2 justify-between w-full mt-5">
            <div className="w-[380px] h-[430px] bg-black rounded-md flex flex-col shadow-md  overflow-hidden group">
              <div className="h-4/6 w-full relative overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    alt="featured"
                    fill
                    src={"/assets/airpod.webp"}
                    className="object-cover group-hover:scale-125 duration-700"
                  />
                </div>
                <div className="absolute top-2 right-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                  <FaHeart className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
                </div>
                <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                  <div className="flex gap-1 text-sm items-center ">
                    <FaLocationDot className="text-orange-300" /> Turkey
                  </div>
                  <div className="flex gap-1 text-sm items-center ">
                    <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                    <span className="text-textGreen">views</span>
                  </div>
                </div>
              </div>
              <div className="h-2/6 bg-white w-full flex flex-col justify-center gap-2 px-3 py-2 ">
                <h1 className="text-lg line-clamp-2 text-left text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="flex  items-center justify-between">
                  <div className="flex items-center text-textGreen  text-sm gap-1 ">
                    <BiSolidCategory />
                    Electronics
                  </div>
                  <div className="flex items-center text-orange-500 text-sm gap-1 ">
                    {" "}
                    <div>4.0</div>
                    <div className="flex gap-1 pb-[2px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-between gap-1">
                  <div>$500.00</div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-red-500" />
                    <IoIosMailOpen className="text-blue-500" />
                    <div className="p-1 text-white bg-mainButton  text-sm rounded-md">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 justify-between w-full mt-5">
            <div className="w-[380px] h-[430px] bg-black rounded-md flex flex-col shadow-md  overflow-hidden group">
              <div className="h-4/6 w-full relative overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    alt="featured"
                    fill
                    src={"/assets/buzdolabi.jpg"}
                    className="object-cover group-hover:scale-125 duration-700"
                  />
                </div>
                <div className="absolute top-2 right-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                  <FaHeart className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
                </div>
                <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                  <div className="flex gap-1 text-sm items-center ">
                    <FaLocationDot className="text-orange-300" /> Canada
                  </div>
                  <div className="flex gap-1 text-sm items-center ">
                    <MdPageview className="text-blue-300 text-xl" /> 16k{" "}
                    <span className="text-textGreen">views</span>
                  </div>
                </div>
              </div>
              <div className="h-2/6 bg-white w-full flex flex-col justify-center gap-2 px-3 py-2 ">
                <h1 className="text-lg line-clamp-2 text-left text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="flex  items-center justify-between">
                  <div className="flex items-center text-textGreen  text-sm gap-1 ">
                    <BiSolidCategory />
                    Electronics
                  </div>
                  <div className="flex items-center text-orange-500 text-sm gap-1 ">
                    {" "}
                    <div>4.0</div>
                    <div className="flex gap-1 pb-[2px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-between gap-1">
                  <div>$500.00</div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-red-500" />
                    <IoIosMailOpen className="text-blue-500" />
                    <div className="p-1 text-white bg-mainButton  text-sm rounded-md">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 justify-between w-full mt-5">
            <div className="w-[380px] h-[430px] bg-black rounded-md flex flex-col shadow-md  overflow-hidden group">
              <div className="h-4/6 w-full relative overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    alt="featured"
                    fill
                    src={"/assets/leptop.webp"}
                    className="object-cover group-hover:scale-125 duration-700"
                  />
                </div>
                <div className="absolute top-2 right-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                  <FaHeart className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
                </div>
                <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                  <div className="flex gap-1 text-sm items-center ">
                    <FaLocationDot className="text-orange-300" /> USA
                  </div>
                  <div className="flex gap-1 text-sm items-center ">
                    <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                    <span className="text-textGreen">views</span>
                  </div>
                </div>
              </div>
              <div className="h-2/6 bg-white w-full flex flex-col justify-center gap-2 px-3 py-2 ">
                <h1 className="text-lg line-clamp-2 text-left text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="flex  items-center justify-between">
                  <div className="flex items-center text-textGreen  text-sm gap-1 ">
                    <BiSolidCategory />
                    Electronics
                  </div>
                  <div className="flex items-center text-orange-500 text-sm gap-1 ">
                    {" "}
                    <div>4.0</div>
                    <div className="flex gap-1 pb-[2px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-between gap-1">
                  <div>$500.00</div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-red-500" />
                    <IoIosMailOpen className="text-blue-500" />
                    <div className="p-1 text-white bg-mainButton  text-sm rounded-md">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 justify-between w-full mt-5">
            <div className="w-[380px] h-[430px] bg-black rounded-md flex flex-col shadow-md  overflow-hidden group">
              <div className="h-4/6 w-full relative overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    alt="featured"
                    fill
                    src={"/assets/keyboard.jpg"}
                    className="object-cover group-hover:scale-125 duration-700"
                  />
                </div>
                <div className="absolute top-2 right-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                  <FaHeart className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
                </div>
                <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                  <div className="flex gap-1 text-sm items-center ">
                    <FaLocationDot className="text-orange-300" /> Turkey
                  </div>
                  <div className="flex gap-1 text-sm items-center ">
                    <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                    <span className="text-textGreen">views</span>
                  </div>
                </div>
              </div>
              <div className="h-2/6 bg-white w-full flex flex-col justify-center gap-2 px-3 py-2 ">
                <h1 className="text-lg line-clamp-2 text-left text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="flex  items-center justify-between">
                  <div className="flex items-center text-textGreen  text-sm gap-1 ">
                    <BiSolidCategory />
                    Electronics
                  </div>
                  <div className="flex items-center text-orange-500 text-sm gap-1 ">
                    {" "}
                    <div>4.0</div>
                    <div className="flex gap-1 pb-[2px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-between gap-1">
                  <div>$500.00</div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-red-500" />
                    <IoIosMailOpen className="text-blue-500" />
                    <div className="p-1 text-white bg-mainButton  text-sm rounded-md">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 justify-between w-full mt-5">
            <div className="w-[380px] h-[430px] bg-black rounded-md flex flex-col shadow-md  overflow-hidden group">
              <div className="h-4/6 w-full relative overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    alt="featured"
                    fill
                    src={"/assets/tv.jpg"}
                    className="object-cover group-hover:scale-125 duration-700"
                  />
                </div>
                <div className="absolute top-2 right-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                  <FaHeart className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
                </div>
                <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                  <div className="flex gap-1 text-sm items-center ">
                    <FaLocationDot className="text-orange-300" /> Turkey
                  </div>
                  <div className="flex gap-1 text-sm items-center ">
                    <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                    <span className="text-textGreen">views</span>
                  </div>
                </div>
              </div>
              <div className="h-2/6 bg-white w-full flex flex-col justify-center gap-2 px-3 py-2 ">
                <h1 className="text-lg line-clamp-2 text-left text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="flex  items-center justify-between">
                  <div className="flex items-center text-textGreen  text-sm gap-1 ">
                    <BiSolidCategory />
                    Electronics
                  </div>
                  <div className="flex items-center text-orange-500 text-sm gap-1 ">
                    {" "}
                    <div>4.0</div>
                    <div className="flex gap-1 pb-[2px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-between gap-1">
                  <div>$500.00</div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-red-500" />
                    <IoIosMailOpen className="text-blue-500" />
                    <div className="p-1 text-white bg-mainButton  text-sm rounded-md">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-2 justify-between w-full mt-5">
            <div className="w-[380px] h-[430px] bg-black rounded-md flex flex-col shadow-md  overflow-hidden group">
              <div className="h-4/6 w-full relative overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    alt="featured"
                    fill
                    src={"/assets/coffe.webp"}
                    className="object-cover group-hover:scale-125 duration-700"
                  />
                </div>
                <div className="absolute top-2 right-2 p-2 rounded-md bg-white aspect-square border border-textGreen">
                  <FaHeart className="text-textGreen font-bold text-xl group-hover:animate-pulse duration-500" />
                </div>
                <div className="absolute bg-white p-1 border border-textGreen bottom-2   left-1/2 transform -translate-x-1/2 w-11/12 rounded-md  flex justify-between items-center ">
                  <div className="flex gap-1 text-sm items-center ">
                    <FaLocationDot className="text-orange-300" /> Turkey
                  </div>
                  <div className="flex gap-1 text-sm items-center ">
                    <MdPageview className="text-blue-300 text-xl" /> 162k{" "}
                    <span className="text-textGreen">views</span>
                  </div>
                </div>
              </div>
              <div className="h-2/6 bg-white w-full flex flex-col justify-center gap-2 px-3 py-2 ">
                <h1 className="text-lg line-clamp-2 text-left text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="flex  items-center justify-between">
                  <div className="flex items-center text-textGreen  text-sm gap-1 ">
                    <BiSolidCategory />
                    Electronics
                  </div>
                  <div className="flex items-center text-orange-500 text-sm gap-1 ">
                    {" "}
                    <div>4.0</div>
                    <div className="flex gap-1 pb-[2px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-between gap-1">
                  <div>$500.00</div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt className="text-red-500" />
                    <IoIosMailOpen className="text-blue-500" />
                    <div className="p-1 text-white bg-mainButton  text-sm rounded-md">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Featured;
